
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from 'lucide-react'

interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,
  onSuggestionApplied}) => {
  const [isLoading, setIsLoading] = useState($2);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth($2);
  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return
    }

    setIsLoading($2);
    try {
      const params: ClientBudgetParams = $2;
        category},

      if (timeline) params.timeline = $2;
      if (scope) params.scope = $2;
      if (experienceLevel) params.experienceLevel = $2;
      const result = await getClientBudgetSuggestion($2);
      setSuggestion(result)
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', { data: error})
    } finally {
      setIsLoading(false)
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied($2);
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true})
      }
    }
  },

  return (
    <div className = $2;