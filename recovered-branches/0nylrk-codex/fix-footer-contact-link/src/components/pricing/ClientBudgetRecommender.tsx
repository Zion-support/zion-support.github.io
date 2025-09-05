
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
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
import { Sparkles } from "lucide-react",
=======
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (timeline) params.timeline = timeline,
      if (scope) params.scope = scope,
      if (experienceLevel) params.experienceLevel = experienceLevel,

<<<<<<< HEAD
      const result = await getClientBudgetSuggestion(params),
      setSuggestion(result)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating budget suggestion:", error)
=======
      console.error(&quot;Error generating budget suggestion:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),
=======
      const _result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _handleApplySuggestion = () => {_if (suggestion) {
      onSuggestionApplied(suggestion.minRate, _suggestion.maxRate);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
<<<<<<< HEAD
          userId: user.id,
          suggestionType: 'client',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true
        })
=======
          userId: user.id, _suggestionType: 'client', _suggestedMin: suggestion.minRate, _suggestedMax: suggestion.maxRate, _accepted: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
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
<<<<<<< HEAD
            disabled={!jobTitle || !category}
            className=&quot;w-full&quot;
=======
            disabled={_!jobTitle || !category}
            className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
<<<<<<< HEAD
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType=&quot;hourly&quot;
=======
            suggestion={_suggestion}
            isLoading={_isLoading}
            onApplySuggestion={_handleApplySuggestion}
            rateType="hourly"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        )}
      </div>
    </div>
  )
},
