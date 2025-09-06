<<<<<<< HEAD


<<<<<<< HEAD

=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
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
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
<<<<<<< HEAD
<<<<<<< HEAD

import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion } from '@/services / pricingSuggestionService';
import { PricingSuggestionBox } from './PricingSuggestionBox';
import { use_auth } from '@/hooks / use_auth';
import { Sparkles } from './lucide-react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface TalentRateRecommenderProps {

  skills;
  years_experience;
  location;
<<<<<<< HEAD

  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;

    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;

        yearsExperience,;
        location};


      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }

  };

=======

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

=======
  skills;
  years_experience;
  location;
  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;
    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;
        yearsExperience,;
        location};
      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
interface TalentRateRecommenderProps {

  skills: string[]
  yearsExperience: number
  location?: string;
  onSuggestionApplied: (value: number) => void

  rateType: "hourly" | "fixed"
}
export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills;
  yearsExperience;
  location;

  onSuggestionApplied

  rateType}) => {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;
      const result = await getTalentRateSuggestion(params);
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
<<<<<<< HEAD

}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
  skills;
  yearsExperience;
  location;
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  skills,;
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
  const generateSuggestion = async () => {;
    if (skills.length === 0 || yearsExperience <= 0) {;
      return;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }

    setIsLoading(true),
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
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
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
      // Track this suggestion application
      if (user) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: 'talent'
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
          actualValue: suggestedRate
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
      const params: TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result);
    } catch (error) {;
      console.error("Error generating rate suggestion:", error);
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
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
<<<<<<< HEAD

      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
<<<<<<< HEAD
=======
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion.minRate,;
          suggestedMax: suggestion.maxRate,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          actualValue: suggestedRate,;
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }

<<<<<<< HEAD
=======
      }
    }

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
      console && console.error("Error generating rate suggestion:", error);
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
            disabled={skills && skills.length === 0 || yearsExperience <= 0}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
            disabled={skills.length === 0 |yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />
        )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <PricingSuggestionBox
=======
=======

          <PricingSuggestionBox
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onSuggestionApplied,
  rate_type}) => {
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
      const params: TalentRateParams = {
        skills;
        years_experience,
        location}
;
      const result = await getTalentRateSuggestion (params);
      set_suggestion (result);
    } catch (error) {
      console.error ("Error generating rate suggestion:", error);
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
      // We'll use the middle of the range as the suggested rate;
      const suggested_rate = Math.round ((suggestion.min_rate + suggestion.max_rate) / 2);
      onSuggestionApplied (suggested_rate);
;
      // Track this suggestion application;
      // Check condition
if ( {) {
  $2
}
        trackPricingSuggestion ({
          user_id: user.id,
          suggestion_type: 'talent',
          suggested_min: suggestion.min_rate,
          suggested_max: suggestion.max_rate,
          actual_value: suggested_rate,
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
            disabled={skills.length === 0 || years_experience <= 0}
            className="w - full";
          >;
            <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI;
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
            rate_type={rate_type}
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
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from "lucide-react",;
;
interface TalentRateRecommenderProps {;
  skills:string[],;
  yearsExperience:number,;
  location?:string,;
  onSuggestionApplied:(value:number) => void,;
  rateType:"hourly" | "fixed";
}
;
export const TalentRateRecommender:React.FC<TalentRateRecommenderProps> = ({;
  skills,;
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
;
  const generateSuggestion = async () => {;
    if (skills.length === 0 || yearsExperience <= 0) {;
      return,;
    }
;
    setIsLoading(true),;
    try {;
      const params:TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;
    } catch (error) {;
      console.error("Error generating rate suggestion:", error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
      ;
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:'talent',;
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          actualValue:suggestedRate,;
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
            disabled={skills.length === 0 || yearsExperience <= 0}
            className="w-full";
          >;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) :(;
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}
      </div>;
    </div>;
  ),;
},; import {
  getTalentRateSuggestion;
PricingSuggestion;
TalentRateParams;
trackPricingSuggestion interface TalentRateRecommenderProps {
  skills: string[];
yearsExperience: number;
location?: string;
}finally {
  setIsLoading (false) 
}
};
if (suggestion) {
  //We'll use the middle of the range as the suggested rate //Track this suggestion application if (user) {
  trackPricingSuggestion ({
  
}
}
};
return (<div className="space-y-4" > <div> {
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick= {
  generateSuggestion 
}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {
  suggestion 
}isLoading= {
  isLoading 
}onApplySuggestion= {
  handleApplySuggestion 
}rateType= {
  rateType 
}/>) 
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
