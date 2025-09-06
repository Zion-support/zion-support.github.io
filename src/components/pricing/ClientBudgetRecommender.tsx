<<<<<<< HEAD
<<<<<<< HEAD

=======
const handleApplySuggestion = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onSuggestionApplied (suggestion.min_rate, suggestion.max_rate);
      // Track this suggestion application;
      // Check condition
if ( {) {
  $2
}
        trackPricingSuggestion ({
          user_id: user.id,
          suggestion_type: 'client',
          suggested_min: suggestion.min_rate,
          suggested_max: suggestion.max_rate,
          accepted: true,
        });
      }
    }
  }
  return (


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
  jobTitle: string
  category: string
  timeline?: string
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;interface ClientBudgetRecommenderProps {
  jobTitle: string
  category: string
  timeline?: string
  scope?: string
  experienceLevel?: string
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
=======
import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
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
      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true
        })
      }
    }
<<<<<<< HEAD
  }
  }
  },
=======
          accepted: true
        })
      }
    }


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
            type="button"
            variant="outline"
            onClick={generateSuggestion}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation

          </Button>
        ) : (
<<<<<<< HEAD
            disabled={!jobTitle || !category}
            className='w-full'>;
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation;
          </Button>;
        ) : (;
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
<<<<<<< HEAD
=======
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}
<<<<<<< HEAD

            rate_type='hourly'          />)}
      </div>;
    </div>);
}
// Check condition
if (params.scope = scope) {
  $2
}
// Check condition
if (params.experience_level = experience_level) {
  $2
}
//Track this suggestion application // Check condition
if ( {) {
  $2

=======
            rateType='hourly'          />
        )}
      </div>
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
  trackPricingSuggestion ({
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
}
}



},

            rateType="hourly"
          />
        )}

},
=======
}


},
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            rateType="hourly"
          />
        )}
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




return (<div className="space - y-4" > <div> {";
  !suggestion && !is_loading ? (<Button type="button" variant="outline" on_click={
  generate_suggestion ";
}> <Sparkles className="h - 4 w - 4 mr - 2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />);
}</div> </div>);
}
'"  );
<<<<<<< HEAD
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
