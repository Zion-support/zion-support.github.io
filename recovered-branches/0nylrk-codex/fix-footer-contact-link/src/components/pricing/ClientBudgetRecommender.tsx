
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getClientBudgetSuggestion;
  PricingSuggestion;
  ClientBudgetParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface ClientBudgetRecommenderProps {
<<<<<<< HEAD
  jobTitle: string;
  category: string;
=======
  jobTitle: string
  category: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
<<<<<<< HEAD
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle;
  category;
  timeline;
  scope;
<<<<<<< HEAD
  experienceLevel;
=======
  experienceLevel
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  onSuggestionApplied}) => {
=======
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}

export const ClientBudgetRecommender: React.FC<
  ClientBudgetRecommenderProps
> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,
  onSuggestionApplied,
}) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();
<<<<<<< HEAD
  const generateSuggestion = null;
=======
  const generateSuggestion = async () => {
    if (!jobTitle |!category) {
      return
    }
    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle
        category}
      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;
      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating budget suggestion:", error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate);
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: 'client'
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
          accepted: true
        })
      }
    }
  }
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={!jobTitle |!category}
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
  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
