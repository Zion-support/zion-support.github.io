
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getClientBudgetSuggestion, 
=======
import React{ useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getClientBudgetSuggestion
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService";
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";

interface ClientBudgetRecommenderProps {
  jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
<<<<<<< HEAD
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
=======
  onSuggestionApplied: (minValue: numbermaxValue: number) => void;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,
<<<<<<< HEAD
  onSuggestionApplied,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
=======
  onSuggestionApplied}) => {
  const [isLoadingsetIsLoading] = useState(false);
  const [suggestionsetSuggestion] = useState<PricingSuggestion | null>(null);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return;
    }

    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle,
<<<<<<< HEAD
        category,
      };
=======
        category};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating budget suggestion:", error);
=======
      console.error("Error generating budget suggestion:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {
    if (suggestion) {
<<<<<<< HEAD
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate);
=======
      onSuggestionApplied(suggestion.minRatesuggestion.maxRate);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      
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
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly"
          />
        )}
      </div>
    </div>
  );
};
