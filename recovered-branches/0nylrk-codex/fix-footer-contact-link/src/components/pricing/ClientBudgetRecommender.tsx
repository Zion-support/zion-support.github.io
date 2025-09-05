
import React, {_useState} from "react";
import {_getClientBudgetSuggestion, _PricingSuggestion, _ClientBudgetParams, _trackPricingSuggestion} from "@/services/pricingSuggestionService";

interface ClientBudgetRecommenderProps {_jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (_minValue: number, _maxValue: number) => void;}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = (_{_jobTitle, _category, _timeline, _scope, _experienceLevel, _onSuggestionApplied}) => {_const [isLoading, _setIsLoading] = useState(false);
  const [suggestion, _setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user} = useAuth();

  const _generateSuggestion = async () => {_if (!jobTitle || !category) {
      return;}

    setIsLoading(true);
    try {_const params: ClientBudgetParams = {
        jobTitle, _category};

      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

      const _result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _handleApplySuggestion = () => {_if (suggestion) {
      onSuggestionApplied(suggestion.minRate, _suggestion.maxRate);
      
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id, _suggestionType: 'client', _suggestedMin: suggestion.minRate, _suggestedMax: suggestion.maxRate, _accepted: true});
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        {_!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={_!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={_suggestion}
            isLoading={_isLoading}
            onApplySuggestion={_handleApplySuggestion}
            rateType="hourly"
          />
        )}
      </div>
    </div>
  );
};
