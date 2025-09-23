
<<<<<<< HEAD
import React{ useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getTalentRateSuggestion
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getTalentRateSuggestion, 
>>>>>>> origin/auto/autonomy-17186719616
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService";
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";

interface TalentRateRecommenderProps {
  skills: string[];
  yearsExperience: number;
  location?: string;
  onSuggestionApplied: (value: number) => void;
  rateType: "hourly" | "fixed";
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills,
  yearsExperience,
  location,
  onSuggestionApplied,
<<<<<<< HEAD
  rateType}) => {
  const [isLoadingsetIsLoading] = useState(false);
  const [suggestionsetSuggestion] = useState<PricingSuggestion | null>(null);
=======
  rateType,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        location};
=======
        location,
      };
>>>>>>> origin/auto/autonomy-17186719616

      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating rate suggestion:"error);
=======
      console.error("Error generating rate suggestion:", error);
>>>>>>> origin/auto/autonomy-17186719616
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
      if (user) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'talent',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
        });
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
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
