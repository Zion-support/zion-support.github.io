
import React, { useState } from "react";
<<<<<<< HEAD
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

  jobTitle: string
  category: string

=======
import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}
<<<<<<< HEAD
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
=======

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  jobTitle;
  category;
  timeline;
  scope;
<<<<<<< HEAD

  experienceLevel

  onSuggestionApplied}) => {
=======
  experienceLevel,;
  onSuggestionApplied}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

<<<<<<< HEAD
  const generateSuggestion = async () => {
    if (!jobTitle |!category) {
      return
=======
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    setIsLoading(true);
<<<<<<< HEAD
    try {
      const params: ClientBudgetParams = {
        jobTitle
        category}
      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;
=======
    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category};

      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
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
=======
  };

  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion && suggestion.minRate, suggestion && suggestion.maxRate);

      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'client',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
  }
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
            disabled={!jobTitle |!category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
          </Button>
        ) : (
=======
            disabled={!jobTitle || !category}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;
          </Button>;
        ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly"
          />;
        )}
<<<<<<< HEAD
      </div>
    </div>
  )
}

=======
      </div>;
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
