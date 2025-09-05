
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  getTalentRateSuggestion, 
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Sparkles } from 'lucide-react'

interface TalentRateRecommenderProps {
  skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (value: number) => void;
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills,
  yearsExperience,
  location,
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return;
    }

    setIsLoading(true);
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location};

      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {
      logErrorToProduction('Error generating rate suggestion:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: &quot;talent&quot;,
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
        });
      }
    }
  };

  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className=&quot;w-full&quot;
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />
        )}
      </div>
    </div>
  );
};
