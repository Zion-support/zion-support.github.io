
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
=======
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Sparkles } from 'lucide-react'

interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
  onSuggestionApplied: (minValue: number, maxValue: number) => void
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
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
        })
      }
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className=&quot;w-full&quot;
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType=&quot;hourly&quot;
          />
=======
  },;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),;
      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: "client",;
          suggestedMin: suggestion.minRate,;
          suggestedMax: suggestion.maxRate,;
          accepted: true;
        });
      }
    }
  };
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
        ) : (;
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly";
          />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </div>;
    </div>;
  );
};