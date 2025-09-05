
import React, {_useState} from "react";
import {_getTalentRateSuggestion, _PricingSuggestion, _TalentRateParams, _trackPricingSuggestion} from "@/services/pricingSuggestionService";

interface TalentRateRecommenderProps {_skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (_value: number) => void;
  rateType: "hourly" | "fixed";}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = (_{_skills, _yearsExperience, _location, _onSuggestionApplied, _rateType}) => {_const [isLoading, _setIsLoading] = useState(false);
  const [suggestion, _setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user} = useAuth();

  const _generateSuggestion = async () => {_if (skills.length === 0 || yearsExperience <= 0) {
      return;}

    setIsLoading(true);
    try {_const params: TalentRateParams = {
        skills, _yearsExperience, _location};

      const _result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _handleApplySuggestion = () => {_if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const _suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
      
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id, _suggestionType: 'talent', _suggestedMin: suggestion.minRate, _suggestedMax: suggestion.maxRate, _actualValue: suggestedRate, _accepted: true});
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
            disabled={_skills.length === 0 || yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={_suggestion}
            isLoading={_isLoading}
            onApplySuggestion={_handleApplySuggestion}
            rateType={_rateType}
          />
        )}
      </div>
    </div>
  );
};
