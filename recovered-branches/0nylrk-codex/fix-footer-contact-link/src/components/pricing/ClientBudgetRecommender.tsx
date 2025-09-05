
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { 
  getClientBudgetSuggestion, 
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

interface ClientBudgetRecommenderProps {
  jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,
  onSuggestionApplied}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return;
    }

    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category};

      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {
      console.error(&quot;Error generating budget suggestion:&quot;, error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate);
      
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'client',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
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
            disabled={!jobTitle || !category}
            className=&quot;w-full&quot;
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType=&quot;hourly&quot;
          />
        )}
      </div>
    </div>
  );
};
