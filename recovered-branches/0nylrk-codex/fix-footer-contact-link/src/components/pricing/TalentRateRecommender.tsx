<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

=======

=======

<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD

=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { 
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx

  skills;
  years_experience;
  location;

  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;

========
  skills;
  years_experience;
  location;
  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx

        yearsExperience,;
        location};


========
        yearsExperience,;
        location};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx

  };

=======

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 |yearsExperience <= 0) {
      return
    }
    setIsLoading(true);
    try {
      const params: TalentRateParams = {
        skills;
        yearsExperience
        location}
      const result = await getTalentRateSuggestion(params);
=======
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
<<<<<<< HEAD
  skills;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }

    setIsLoading(true),
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD

<<<<<<< HEAD
=======
  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          actualValue: suggestedRate,;
          accepted: true;
        });
      }
    }
<<<<<<< HEAD

  },
<<<<<<< HEAD

=======




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
=======
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
            disabled={skills && skills.length === 0 || yearsExperience <= 0}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx

          <PricingSuggestionBox
<<<<<<< HEAD
=======
            disabled={skills.length === 0 |yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />
        )}
<<<<<<< HEAD

=======
=======
========
          <PricingSuggestionBox
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
      </div>;
    </div>;
  );

<<<<<<< HEAD
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
            rate_type={rate_type}
          />)}
      </div>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
=======
<<<<<<< HEAD
      </div>
    </div>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
