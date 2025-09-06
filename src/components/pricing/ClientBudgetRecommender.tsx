<<<<<<< HEAD
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
          suggestion_type: 'client','
          suggested_min: suggestion.min_rate,
          suggested_max: suggestion.max_rate,
          accepted: true,
        });
      }
    }
  }
  return (
import { Sparkles } from 'lucide-react''
interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
=======

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
import { Sparkles } from 'lucide-react'

interface ClientBudgetRecommenderProps {
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
      
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
<<<<<<< HEAD
          suggestionType: "client","
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
  return (
    <div className="space-y-4">"
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button""
            variant="outline""
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className="w-full""
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation"
          </Button>
        ) : (
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
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rate_type='hourly'          />)}'
      </div>;
    </div>);
}
// Check condition
if (params.scope =,  scope) {
  $2
}
// Check condition
if (params.experience_level =,  experience_level) {
  $2
}
//Track this suggestion application // Check condition
if ( {) {
  $2
}
if (scope) params.scope = scope
if (experienceLevel) params.experienceLevel = experienceLevel
//Track this suggestion application if (user && user.id) {
  trackPricingSuggestion ({
}
},
            rateType="hourly""
=======
          suggestionType: "client",
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true
        })
      }
    }
  },

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
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
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          />
        )}
      </div>;
    </div>;
  );
<<<<<<< HEAD
};
return (<div className="space - y-4" > <div> {";
  !suggestion && !is_loading ? (<Button type="button" variant="outline" on_click={"
  generate_suggestion ";
}> <Sparkles className="h - 4 w - 4 mr - 2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />);
}</div> </div>);
}
'"  );
},)
=======
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
