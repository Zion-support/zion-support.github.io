import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
  onSuggestionApplied: (minValue: number, maxValue: number,) => void
}
export const ClientBudgetRecommender: React.FC<
  ClientBudgetRecommenderProps
> = ({
  jobTitle
  category
  timeline
  scope
  experienceLevel
  onSuggestionApplied
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null)
  const { user } = useAuth()
  const generateSuggestion = async () => {
    }
    setIsLoading(true)
    try {
      const params: ClientBudgetParams = {
      };        jobTitle
        category}
      if (timeline) params.timeline = timeline
      if (scope) params.scope = scope
      if (experienceLevel) params.experienceLevel = experienceLevel
      const result = await getClientBudgetSuggestion(params)
      setSuggestion(result)
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', {
        data: error
      })
    } finally {
      setIsLoading(false)
    }
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate)
  onSuggestionApplied: (minValue: number, maxValue: number) => void
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;
  timeline?: string,;
  scope?: string,;
  experienceLevel?: string,;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}
;
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
  onSuggestionApplied}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category},;
      if (timeline) params.timeline = timeline,;
      if (scope) params.scope = scope,;
      if (experienceLevel) params.experienceLevel = experienceLevel,;
      const result = await getClientBudgetSuggestion(params),;
      setSuggestion(result);
    } catch (error) {;
      logErrorToProduction('Error generating budget suggestion:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),
      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
=======
          accepted: true
        })
      }
    }
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
=======
            rateType="hourly"
          />
        )}
      </div>;
    </div>;
  );
};
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
