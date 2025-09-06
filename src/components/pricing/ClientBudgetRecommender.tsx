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
      // Check condition
if (params.timeline = timeline) {
  $2
}
      // Check condition
if (params.scope = scope) {
  $2
}
      // Check condition
if (params.experience_level = experience_level) {
  $2
}
      const result = await getClientBudgetSuggestion (params);
      set_suggestion (result);
    } catch (error) {
      logErrorToProduction('Error generating budget suggestion:', {
        data: error
      })
    } finally {
      setIsLoading (false);
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
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  jobTitle: string,;
  category: string,;
  timeline?: string,;
  scope?: string,;
  experienceLevel?: string,;
<<<<<<< HEAD
  onSuggestionApplied: (minValue: number, maxValue: number,) => void;
}

export const ClientBudgetRecommender: React.FC<;
  ClientBudgetRecommenderProps;
> = ({;
=======
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}
;
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
<<<<<<< HEAD
  onSuggestionApplied,;
}) => {;
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();
=======
  onSuggestionApplied}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;
    }
<<<<<<< HEAD

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
    <div className='space-y-4'>;
      <div>;
        {!suggestion && !isLoading ? (;
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <Button
            type='button'
            variant='outline'
            onClick={generateSuggestion}
<<<<<<< HEAD
            disabled={!jobTitle |!category}
            className='w-full'          >
            <Sparkles className='h-4 w-4 mr-2' /> Get Budget Recommendation
=======
            disabled={!jobTitle || !category}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </Button>
        ) : (
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
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}
<<<<<<< HEAD
            rateType='hourly'          />;
=======
<<<<<<< HEAD
            rateType='hourly'          />
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5



return (<div className="space - y-4" > <div> {";
  !suggestion && !is_loading ? (<Button type="button" variant="outline" on_click={
  generate_suggestion ";
}> <Sparkles className="h - 4 w - 4 mr - 2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />);
}</div> </div>);
}
'"  );
},
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
