<<<<<<< HEAD


<<<<<<< HEAD

=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { 
  getClientBudgetSuggestion;
  PricingSuggestion;
  ClientBudgetParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
<<<<<<< HEAD
<<<<<<< HEAD

import {Button} from "@/components/ui/button";
import {getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface ClientBudgetRecommenderProps {;
  jobTitle: string,;
  category: string,;
=======
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface ClientBudgetRecommenderProps {

<<<<<<< HEAD
  jobTitle: string
  category: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  timeline?: string;
  scope?: string;
  experienceLevel?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  onSuggestionApplied: (minValue: number, maxValue: number) => void;
}


export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;

=======
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}
export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  jobTitle;
  category;
  timeline;
  scope;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  experienceLevel

  onSuggestionApplied}) => {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category};
      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;
      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();


  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return;

    }
    setIsLoading(true);

    try {;
      const params: ClientBudgetParams = {;
        jobTitle,;
        category};

      if (timeline) params && params.timeline = timeline;
      if (scope) params && params.scope = scope;
      if (experienceLevel) params && params.experienceLevel = experienceLevel;


      const result = await getClientBudgetSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }

  };

=======

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string,
  scope?: string,
  experienceLevel?: string,
  onSuggestionApplied: (minValue: number, maxValue: number) => void
<<<<<<< HEAD
<<<<<<< HEAD


=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }

    setIsLoading(true),
    try {
      const params: ClientBudgetParams = {
        jobTitle,
        category},

      if (timeline) params.timeline = timeline,
      if (scope) params.scope = scope,
      if (experienceLevel) params.experienceLevel = experienceLevel,

      const result = await getClientBudgetSuggestion(params),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating budget suggestion:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

  };

=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
  },;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion && suggestion.minRate, suggestion && suggestion.maxRate);

      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'client',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          accepted: true;
        });
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },




<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating budget suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
      }
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  },

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

      </div>;
    </div>;
  );

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            disabled={!jobTitle || !category}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;
          </Button>;
        ) : (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <PricingSuggestionBox
=======
=======

          <PricingSuggestionBox
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { getClientBudgetSuggestion, PricingSuggestion, ClientBudgetParams, trackPricingSuggestion } from '@/services / pricingSuggestionService';
import { PricingSuggestionBox } from './PricingSuggestionBox';
import { use_auth } from '@/hooks / use_auth';
import { Sparkles } from './lucide-react';
interface ClientBudgetRecommenderProps {
  job_title: string,
  category: string,
  timeline?: string;
  scope?: string;
  experience_level?: string;
  onSuggestionApplied: (min_value: number, max_value: number) => void;
}
export const ClientBudgetRecommender: React.FC < ClientBudgetRecommenderProps> = ({
  job_title;
  category;
  timeline;
  scope;
  experience_level,
  onSuggestionApplied}) => {
  const [is_loading, setIsLoading] = useState (false);
  const [suggestion, set_suggestion] = useState < PricingSuggestion | null>(null);
  const { user } = use_auth ();
;
  const generate_suggestion = async () => {
    // Check condition
if ( {) {
  $2
}
      return;
    }
    setIsLoading (true);
    try {
      const params: ClientBudgetParams = {
        job_title,
        category}
;
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
      console.error ("Error generating budget suggestion:", error);
    } finally {
      setIsLoading (false);
    }
  }
;
  const handleApplySuggestion = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onSuggestionApplied (suggestion.min_rate, suggestion.max_rate);
;
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
          accepted: true;
        });
      }
    }
  }
;
  return (
    <div className="space - y-4">;
      <div>;
        {!suggestion && !is_loading ? (
          <Button;
            type="button";
            variant="outline";
            on_click={generate_suggestion}
            disabled={!job_title || !category}
            className="w - full";
          >;
            <Sparkles className="h - 4 w - 4 mr - 2" /> Get Budget Recommendation;
          </Button>) : (
          <PricingSuggestionBox;
            suggestion={suggestion}
            is_loading={is_loading}
            onApplySuggestion={handleApplySuggestion}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
    </div>;
  );




};
            rate_type="hourly";
          />)}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
