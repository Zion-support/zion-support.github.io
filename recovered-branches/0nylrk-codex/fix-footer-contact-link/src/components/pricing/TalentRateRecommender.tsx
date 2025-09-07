<<<<<<< HEAD
=======


<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
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

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",
"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button",

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { 

  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
<<<<<<< HEAD
=======
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
<<<<<<< HEAD
  skills;
  years_experience;
  location;
  const generateSuggestion = async () => {;
    if (skills && skills.length === 0 || yearsExperience <= 0) {;
      return;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface TalentRateRecommenderProps {

interface TalentRateRecommenderProps {};
  skills;
  years_experience;
  location;

  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    setIsLoading(true);
    try {;
        skills;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        yearsExperience,;
        location};
=======

        yearsExperience,;
        location};


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }

<<<<<<< HEAD
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
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
=======
  };

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from "lucide-react";
=======
      const result = await getTalentRateSuggestion(params);

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface TalentRateRecommenderProps {

  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
<<<<<<< HEAD

import React, { useState } from "react",;

import { Button } from "@/components/ui/button",;
import {;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;

import { Sparkles } from "lucide-react",;
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
=======
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

<<<<<<< HEAD
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

=======
<<<<<<< HEAD
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  skills;
  yearsExperience;
  location;
  onSuggestionApplied,
<<<<<<< HEAD

=======
  rateType}) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

<<<<<<< HEAD
=======
  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  skills,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
    if (skills.length === 0 || yearsExperience <= 0) {;
<<<<<<< HEAD
=======
      return;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

    setIsLoading(true),
    try {}
      const params: TalentRateParams = {}
        skills,
        yearsExperience,
        location},

<<<<<<< HEAD
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState($2);
  const { user } = useAuth($2);
  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
    }
=======
      const result = await getTalentRateSuggestion(params),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
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
=======

  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/chore/fix-lint-and-merge

    setIsLoading(true),;
    try {;
        skills,;
        yearsExperience,;
        location},;
      setSuggestion(result);
    } catch (error) {;"
      console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
  },;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  };
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
<<<<<<< HEAD
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
          actualValue: suggestedRate,;
          accepted: true;
        });
      }
    }
=======
          actualValue: suggestedRate,;
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }

  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      setSuggestion(result);

      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
      }
    }
  }

<<<<<<< HEAD
=======

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

            variant="outline"

}

      </div>;
    </div>;
  );

            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;

=======
            variant="outline"
            onClick={generateSuggestion}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            disabled={skills && skills.length === 0 || yearsExperience <= 0}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

          <PricingSuggestionBox

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <PricingSuggestionBox
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onSuggestionApplied,

  rate_type}) => {

  const [is_loading, setIsLoading] = useState (false);
  const [suggestion, set_suggestion] = useState < PricingSuggestion | null>(null);
  const { user } = use_auth ();
;
  const generate_suggestion = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      return;
    }
    setIsLoading (true);
<<<<<<< HEAD
    try {
=======
    try {}
      const params: TalentRateParams = {}
>>>>>>> origin/chore/fix-lint-and-merge
        skills;
        years_experience,
        location}
;
      const result = await getTalentRateSuggestion (params);
      set_suggestion (result);
    } catch (error) {"
      console.error ("Error generating rate suggestion:", error);
    } finally {}
      setIsLoading (false);
    }
  }
;
  const handleApplySuggestion = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}'
      // We'll use the middle of the range as the suggested rate;
      const suggested_rate = Math.round ((suggestion.min_rate + suggestion.max_rate) / 2);
      onSuggestionApplied (suggested_rate);
;
      // Track this suggestion application;
      // Check condition;
if ( {) {}
  $2;
}
        trackPricingSuggestion ({}
          user_id: user.id,'
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

      <div>;
        {!suggestion && !is_loading ? (
          <Button;"
            type="button";"
            variant="outline";
            on_click={generate_suggestion}

          </Button>) : (
          <PricingSuggestionBox;
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
  );

<<<<<<< HEAD
};
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
            rate_type={rate_type}
          />)}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      </div>;
    </div>;
  );
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
