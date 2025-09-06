<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
<<<<<<< HEAD
  jobTitle: string
  category: string
  timeline?: string
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;interface ClientBudgetRecommenderProps {
<<<<<<< HEAD
  jobTitle: string
  category: string
  timeline?: string
  scope?: string
  experienceLevel?: string
=======
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    if (!jobTitle |!category) {
      return
=======
    if (!jobTitle || !category) {
      return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    setIsLoading(true)
    try {
      const params: ClientBudgetParams = {
<<<<<<< HEAD
        jobTitle
        category
=======
        jobTitle,;
        category;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: 'client'
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
=======
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
          accepted: true,
        })
      }
    }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          accepted: true
        })
      }
    }
<<<<<<< HEAD
  }
=======
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
<<<<<<< HEAD
            type='button'
            variant='outline'
            onClick={generateSuggestion}
            disabled={!jobTitle |!category}
            className='w-full'          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
=======
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
<<<<<<< HEAD
            rateType='hourly'          />
        )}
      </div>
    </div>
  )
}
if (scope) params.scope = scope
if (experienceLevel) params.experienceLevel = experienceLevel
//Track this suggestion application if (user && user.id) {
  trackPricingSuggestion ({
}
return (<div className="space-y-4" > <div> {"
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={
  generateSuggestion "
}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />)
}</div> </div>)
}
'"  )
<<<<<<< HEAD
}

=======
},
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            rateType="hourly"
          />
        )}
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
