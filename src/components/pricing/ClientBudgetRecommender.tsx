<<<<<<< HEAD
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
import { Sparkles } from 'lucide-react'
interface ClientBudgetRecommenderProps {
  jobTitle: string
  category: string
  timeline?: string
  scope?: string
  experienceLevel?: string
  onSuggestionApplied: (minValue: number, maxValue: number) => void;interface ClientBudgetRecommenderProps {
  jobTitle: string
  category: string
  timeline?: string
  scope?: string
  experienceLevel?: string
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
          accepted: true
        })
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger';
import {;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion,;
} from '@/services/pricingSuggestionService';
import { PricingSuggestionBox } from './PricingSuggestionBox';
import { useAuth } from '@/hooks/useAuth';
import { Sparkles } from 'lucide-react';

interface ClientBudgetRecommenderProps {;
  jobTitle: string;
  category: string;
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;
  timeline?: string,;
  scope?: string,;
  experienceLevel?: string,;
  onSuggestionApplied: (minValue: number, maxValue: number,) => void;
}

export const ClientBudgetRecommender: React.FC<;
  ClientBudgetRecommenderProps;
> = ({;
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
  onSuggestionApplied,;
}) => {;
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;
    }

    setIsLoading(true);
    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category,;
      };        jobTitle;
        category};

      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;

      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      logErrorToProduction('Error generating budget suggestion:', {;
        data: error,;
      });
    } finally {;
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion && suggestion.minRate, suggestion && suggestion.maxRate);

      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: 'client',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
          accepted: true,;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
  }
  return (
    <div className='space-y-4'>;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type='button'
            variant='outline'
            onClick={generateSuggestion}
<<<<<<< HEAD
            disabled={!jobTitle |!category}
            className='w-full'          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
          </Button>
        ) : (
=======
            disabled={!jobTitle || !category}
            className='w-full'>;
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation;
          </Button>;
        ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType='hourly'          />;
        )}
<<<<<<< HEAD
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
}

=======
      </div>;
    </div>;
  );
};
if (scope) params && params.scope = scope;
if (experienceLevel) params && params.experienceLevel = experienceLevel;
//Track this suggestion application if (user && user.id) {;
  trackPricingSuggestion ({;


};
return (<div className="space-y-4" > <div> {";
  !suggestion && !isLoading ? (<Buttontype="button" variant="outline" onClick={
  generateSuggestion "
}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />) ;
}</div> </div>) ;
};
'"  );
},;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
