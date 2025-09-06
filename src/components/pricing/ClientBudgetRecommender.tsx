
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { logErrorToProduction } from '@/utils/productionLogger'
import {
  getClientBudgetSuggestion
  PricingSuggestion
  ClientBudgetParams
  trackPricingSuggestion
} from '@/services/pricingSuggestionService'
import { PricingSuggestionBox } from './PricingSuggestionBox'
import { useAuth } from '@/hooks/useAuth'
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
>>>>>>> import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
  jobTitle: string
  category: string
  timeline?: string
  scope?: string
  experienceLevel?: string
    if (!jobTitle |!category) {
      return
    }
    setIsLoading(true)
    try {
      const params: ClientBudgetParams = {
        jobTitle
        category
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
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: 'client'
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
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
      
>>>>>>>       // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true,
        })
      }
    }
  }
          accepted: true
        })
      }
    }
  }
>>>>>>>   return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type='button'
            variant='outline'
            onClick={generateSuggestion}
            disabled={!jobTitle |!category}
            className='w-full'          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
>>>>>>>           </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          </Button>
>>>>>>>         ) : (
            disabled={!jobTitle || !category}
            className='w-full'>;
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation;
          </Button>;
        ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PricingSuggestionBox
    <div className='space - y-4'>;
      <div>;
        {!suggestion && !is_loading ? (
          <Button;
            type='button';
            variant='outline';
            on_click={generate_suggestion}
            disabled={!job_title || !category}
            className='w - full'          >;
            <Sparkles className='h - 4 w - 4 mr - 2' /> Get Budget Recommendation;
          </Button>) : (
          <PricingSuggestionBox;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}
}

            rateType="hourly"
          />
        )}

      </div>;
    </div>;
  );
};
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 