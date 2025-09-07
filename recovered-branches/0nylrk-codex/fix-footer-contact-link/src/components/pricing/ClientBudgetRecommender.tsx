<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  getClientBudgetSuggestion,
  PricingSuggestion,
  ClientBudgetParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======

<<<<<<< HEAD
=======
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { 

  getClientBudgetSuggestion;
  PricingSuggestion;
<<<<<<< HEAD

interface ClientBudgetRecommenderProps {
=======
  ClientBudgetParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
<<<<<<< HEAD
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface ClientBudgetRecommenderProps {

  jobTitle: string
  category: string
=======

import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  timeline?: string;
  scope?: string;
  experienceLevel?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
=======
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}


export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  jobTitle;
  category;
  timeline;
  scope;

<<<<<<< HEAD
  experienceLevel

  onSuggestionApplied}) => {
  const [isLoading, setIsLoading] = useState($2);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth($2);
  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return
    }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  experienceLevel

  onSuggestionApplied}) => {
=======
  experienceLevel,;
  onSuggestionApplied}) => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

<<<<<<< HEAD
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
=======

  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;

    }
    setIsLoading(true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category};
<<<<<<< HEAD
      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;
=======

      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }

<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

  const generateSuggestion = async () => {
    if (!jobTitle |!category) {
      return
    }
    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle
        category}
      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;
      const result = await getClientBudgetSuggestion(params);
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
=======
  };

=======

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ClientBudgetRecommenderProps {

  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
<<<<<<< HEAD
=======
  onSuggestionApplied: (minValue: number, maxValue: number) => void
<<<<<<< HEAD
}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
  jobTitle;
  category;
  timeline;
  scope;
  experienceLevel,
  onSuggestionApplied}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

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
>>>>>>> merged-prs-20250907-203621

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useState } from "react",;

<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import {;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;"
} from "@/services/pricingSuggestionService",;"
import { PricingSuggestionBox } from "./PricingSuggestionBox",;"
import { useAuth } from "@/hooks/useAuth",;"
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
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;

<<<<<<< HEAD
    setIsLoading($2);
    try {
      const params: ClientBudgetParams = $2;
        category},

      if (timeline) params.timeline = $2;
      if (scope) params.scope = $2;
      if (experienceLevel) params.experienceLevel = $2;
      const result = await getClientBudgetSuggestion($2);
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating budget suggestion:", error)
    } finally {
      setIsLoading(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  },

    setIsLoading(true),
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category},

      if (timeline) params.timeline = timeline,
      if (scope) params.scope = scope,
      if (experienceLevel) params.experienceLevel = experienceLevel,
<<<<<<< HEAD

      const result = await getClientBudgetSuggestion(params),
=======
<<<<<<< HEAD
const result = await getClientBudgetSuggestion(params),;
=======

      const result = await getClientBudgetSuggestion(params),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating budget suggestion:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      onSuggestionApplied($2);
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id,
          suggestionType: 'client',
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          accepted: true})
      }
    }
  },

  return (
    <div className = $2;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  };

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
=======

  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    setIsLoading(true),;
    try {;
      }
      const "params": ClientBudgetParams = {;
        }
        jobTitle,;
        category},;
      if (timeline) params.timeline = timeline,;
      if (scope) params.scope = scope,;
      if (experienceLevel) params.experienceLevel = experienceLevel,;
      setSuggestion(result);
    } catch (error) {;
      }
      console.error("Error generating budget "suggestion":", error);"
    } finally {;
      }
      setIsLoading(false);
    }
  },;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  };
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion && suggestion.minRate, suggestion && suggestion.maxRate);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion && suggestion.minRate, suggestion && suggestion.maxRate);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'client',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
<<<<<<< HEAD
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),;
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: 'client',;
          suggestedMin: suggestion.minRate,;
          suggestedMax: suggestion.maxRate,;
          accepted: true;
        });
      }
    }
=======
          accepted: true;
        });
      }
    }
  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      setSuggestion(result);
    } catch (error) {;"
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
      }
    }
  }

<<<<<<< HEAD
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button"
            type="button""
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
}
      </div>;
    </div>;
  );
=======


  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
<<<<<<< HEAD
  },

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            disabled={!jobTitle || !category}
            className="w-full">;"
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;"
          </Button>;
        ) : (;
<<<<<<< HEAD
          <PricingSuggestionBox,
import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion } from '@/services / pricingSuggestionService';'
import { PricingSuggestionBox } from './PricingSuggestionBox';'
import { use_auth } from '@/hooks / use_auth';'
import { Sparkles } from './lucide-react';'
=======
<<<<<<< HEAD
            disabled={!jobTitle |!category}
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
          />
        )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <PricingSuggestionBox
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion } from '@/services / pricingSuggestionService';
import { PricingSuggestionBox } from './PricingSuggestionBox';
import { use_auth } from '@/hooks / use_auth';
import { Sparkles } from './lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ClientBudgetRecommenderProps {
  }
  "job_title": string,
  "category": string,
  timeline?: string;
  scope?: string;
  experience_level?: string;
  "onSuggestionApplied": ("min_value": number, "max_value": number) => void;
}
export const "ClientBudgetRecommender": React.FC < ClientBudgetRecommenderProps> = ({
  }
  job_title;
  category;
  timeline;
  scope;
  experience_level,
  onSuggestionApplied}) => {
  }
  const [is_loading, setIsLoading] = useState (false);
  const [suggestion, set_suggestion] = useState < PricingSuggestion | null>(null);
  const { user } = use_auth ();
;
  const generate_suggestion = async () => {
    // Check condition
}
if ( {) {
  $2
}
      return;
    }
    setIsLoading (true);
    try {
      }
        }
        job_title,
        category}
;
      // Check condition,
if (params.timeline = timeline) {
  $2
}
      // Check condition,
if (params.scope = scope) {
  $2
}
      // Check condition,
if (params.experience_level = experience_level) {
  $2
}
      const result = await getClientBudgetSuggestion (params);
      set_suggestion (result);
    } catch (error) {
      }
      console.error ("Error generating budget "suggestion":", error);"
    } finally {
      }
      setIsLoading (false);
    }
  }
;
  const handleApplySuggestion = () =>: any {
    // Check condition
}
if ( {) {
  $2
}
      onSuggestionApplied (suggestion.min_rate, suggestion.max_rate);
;
      // Track this suggestion application;
      // Check condition,
if ( {) {
  $2
}
        trackPricingSuggestion ({
          }
          "user_id": user.id,
          "suggestion_type": 'client','
          "suggested_min": suggestion.min_rate,
          "suggested_max": suggestion.max_rate,
          "accepted": true;
        });
      }
    }
  }
;
return (;
    <div className="space-y-4">;"
=======

>>>>>>> origin/chore/fix-lint-and-merge
      <div>;
        {!suggestion && !is_loading ? (
          <Button;"
            type="button";"
            variant="outline";
            on_click={generate_suggestion}

          </Button>) : (
          <PricingSuggestionBox;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>;
    </div>;

<<<<<<< HEAD
=======



<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            rate_type="hourly";
          />)}
      </div>;
    </div>);
}
<<<<<<< HEAD
;
=======
;
<<<<<<< HEAD

import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
;
interface ClientBudgetRecommenderProps {;
  jobTitle:string,;
  category:string,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied:(minValue:number, maxValue:number) => void;
}
;
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
  onSuggestionApplied}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
;
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return,;
    }
;
    setIsLoading(true),;
    try {;
      const params:ClientBudgetParams = {;
        jobTitle,;
        category},;
;
      if (timeline) params.timeline = timeline,;
      if (scope) params.scope = scope,;
      if (experienceLevel) params.experienceLevel = experienceLevel,;
;
      const result = await getClientBudgetSuggestion(params),;
      setSuggestion(result),;
    } catch (error) {;
      console.error("Error generating budget suggestion:", error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),;
      ;
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:'client',;
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          accepted:true;
        }),;
      }
    }
  },;
;
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
        ) :(;
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly";
          />;
        )}
      </div>;
    </div>;
  ),;
},; import {
  getClientBudgetSuggestion;
PricingSuggestion;
ClientBudgetParams;
trackPricingSuggestion interface ClientBudgetRecommenderProps {
  jobTitle: string;
category: string;
timeline?: string;
scope?: string;
experienceLevel?: string;
onSuggestionApplied: (minValue: number, maxValue: number) => void 
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle;
category;
timeline;
scope;
experienceLevel;
onSuggestionApplied 
}) => {
  const [isLoading, setIsLoading] = useState (false);
const [suggestion, setSuggestion] = useState<PricingSuggestion | null> (null);
const {
  user 
}= useAuth ();
const generateSuggestion = async () => {
  if (!jobTitle || !category) {
  return 
}setIsLoading (true);
try {
  const params: ClientBudgetParams = {
  jobTitle;
category 
};
if (scope) params.scope = scope;
if (experienceLevel) params.experienceLevel = experienceLevel;
}finally {
  setIsLoading (false) 
}
};
const handleApplySuggestion = () => {
  if (suggestion) {
  onSuggestionApplied (suggestion.minRate, suggestion.maxRate);
trackPricingSuggestion ({
  
}
}
};
return (<div className="space-y-4" > <div> {
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick= {
  generateSuggestion 
}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />) 
}</div> </div>) 
};
      </div>
    </div>
  )
}

      </div>;
    </div>;
  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
