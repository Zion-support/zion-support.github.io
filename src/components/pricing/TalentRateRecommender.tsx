
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from 'lucide-react'

interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
  skills,;
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (skills.length === 0 || yearsExperience <= 0) {;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const params: TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result);
    } catch (error) {;
      logErrorToProduction('Error generating rate suggestion:', { data: error });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: &quot;talent&quot;,
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
        })
      }
    }
  },

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
=======
  },;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: "talent",;
          suggestedMin: suggestion.minRate,;
          suggestedMax: suggestion.maxRate,;
          actualValue: suggestedRate,;
          accepted: true;
        });
      }
    }
  };
  return (;
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button;
            type="button";
            variant="outline";
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className="w-full";
          >;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
          <PricingSuggestionBox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}
      </div>;
    </div>;
  );
};