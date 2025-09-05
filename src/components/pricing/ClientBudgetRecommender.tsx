
<<<<<<< HEAD
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
;
interface ClientBudgetRecommenderProps {;
  jobTitle:string,;
  category:string,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied:(minValue:number, maxValue:number) => void;
}
;
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
  onSuggestionApplied}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
;
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return,;
    }
;
    setIsLoading(true),;
    try {;
      const params:ClientBudgetParams = {;
        jobTitle,;
        category},;
;
      if (timeline) params.timeline = timeline,;
      if (scope) params.scope = scope,;
      if (experienceLevel) params.experienceLevel = experienceLevel,;
;
      const result = await getClientBudgetSuggestion(params),;
      setSuggestion(result),;
    } catch (error) {;
      logErrorToProduction('Error generating budget suggestion:', { data:error }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),;
      ;
      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:"client",;
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          accepted:true;
        }),;
      }
    }
  },;
;
  return (;
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button;
            type="button";
            variant="outline";
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full";
          >;
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;
          </Button>;
        ) :(;
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly";
          />;
        )}
      </div>;
    </div>;
  ),;
},;
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',import { 
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",import { Sparkles } from 'lucide-react'

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
  const [isLoading, setIsLoading] = useState(false),
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth(),

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return
    }

    setIsLoading(true),
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category},
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

      if (timeline) params.timeline = timeline,
      if (scope) params.scope = scope,
      if (experienceLevel) params.experienceLevel = experienceLevel,

      const result = await getClientBudgetSuggestion(params),
      setSuggestion(result)
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', { data: error })
    } finally {
      setIsLoading(false)
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: &quot;client&quot;,
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true
        })      }
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        {_!suggestion && !isLoading ? (
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className=&quot;w-full&quot;          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType=&quot;hourly&quot;          />
        )}
      </div>
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
