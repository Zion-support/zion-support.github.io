
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
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

import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;

  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}


export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;

  jobTitle;
  category;
  timeline;
  scope;

  experienceLevel,;
  onSuggestionApplied}) => {;

  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();


  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;

    }
    setIsLoading(true);

    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category};

      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;


      const result = await getClientBudgetSuggestion(params);
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}


  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
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

    setIsLoading(true),
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category},

      if (timeline) params.timeline = timeline,
      if (scope) params.scope = scope,
      if (experienceLevel) params.experienceLevel = experienceLevel,

      const result = await getClientBudgetSuggestion(params),
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
  };
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
      console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
  },;
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
      }
    }

  },
      </div>
    </div>
  )
}

      </div>;
    </div>;
  );
};
