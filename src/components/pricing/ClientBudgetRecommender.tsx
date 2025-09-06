<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger';
import {
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion,;
} from '@/services/pricingSuggestionService';
import { PricingSuggestionBox } from './PricingSuggestionBox';
import { useAuth } from '@/hooks/useAuth';
import { Sparkles } from 'lucide-react';
<<<<<<< HEAD
=======
=======

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import { 
  getClientBudgetSuggestion;
  PricingSuggestion;
  ClientBudgetParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService";
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ClientBudgetRecommenderProps {
  jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;

export const ClientBudgetRecommender: React.FC<
  ClientBudgetRecommenderProps
> = ({
  jobTitle,
  category,
  timeline,
  scope,
  experienceLevel,
  onSuggestionApplied,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return;
    }

    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
<<<<<<< HEAD
        jobTitle,
        category,
      };
=======
<<<<<<< HEAD
        jobTitle,
        category,
      };
=======

<<<<<<< HEAD

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        jobTitle;
        category};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', {
        data: error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate);

      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'client',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true,
        });
      }
    }
  };

  return (
    <div className='space-y-4'>
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type='button'
            variant='outline'
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}
            className='w-full'
          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType='hourly'
          />
        )}
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
if (scope) params.scope = scope;
if (experienceLevel) params.experienceLevel = experienceLevel;
//Track this suggestion application if (user && user.id) {;
  trackPricingSuggestion ({;
  ;

};
return (<div className="space-y-4" > <div> {";
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;
  generateSuggestion ";
}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />) ;
}</div> </div>) ;
};
<<<<<<< HEAD
'"
=======
'"
=======


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
