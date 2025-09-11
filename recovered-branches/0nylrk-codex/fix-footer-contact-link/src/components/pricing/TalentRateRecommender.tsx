

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
=======
=======
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
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
interface TalentRateRecommenderProps {
  skills: string[],
  years_experience: number,
  location?: string;
  onSuggestionApplied: (value: number) => void,
  rate_type: "hourly" | "fixed";
}
export const TalentRateRecommender: React.FC < TalentRateRecommenderProps> = ({

  skills;
  years_experience;
  location;

  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;


=======

}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
=======  skills;
  yearsExperience;
  location;
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }

    setIsLoading(true),
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)
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
=======
=======
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
  },



  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
==============          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            disabled={skills && skills.length === 0 || yearsExperience <= 0}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <PricingSuggestionBox
=======

          <PricingSuggestionBox
=======  onSuggestionApplied,
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
