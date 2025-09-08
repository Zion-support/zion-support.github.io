
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { 

  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;

<<<<<<< HEAD
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",

=======

interface TalentRateRecommenderProps {

interface TalentRateRecommenderProps {};
  skills;
  years_experience;
  location;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    setIsLoading(true);
    try {;
        skills;

<<<<<<< HEAD
        yearsExperience,;
        location};

=======
  };


import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
      const result = await getTalentRateSuggestion(params);


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface TalentRateRecommenderProps {

  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
<<<<<<< HEAD

  rateType: "hourly" | "fixed"
=======


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
>>>>>>> origin/cursor/delete-old-data-records-6bba


}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

<<<<<<< HEAD
=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

  skills;
  yearsExperience;
  location;
  onSuggestionApplied,


  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();


>>>>>>> origin/cursor/delete-old-data-records-6bba
  yearsExperience,;
  location,;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
    if (skills.length === 0 || yearsExperience <= 0) {;

<<<<<<< HEAD
      return;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

    setIsLoading(true),
    try {}
      const params: TalentRateParams = {}
        skills,
        yearsExperience,
        location},


<<<<<<< HEAD
      const result = await getTalentRateSuggestion(params),

;

=======
  const [isLoading, setIsLoading] = useState($2);
  const { user } = useAuth($2);
  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
    }

      const result = await getTalentRateSuggestion(params),
      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
<<<<<<< HEAD



      }

  },

=======
      // Track this suggestion application;
      if (user) {;
        trackPricingSuggestion({;
          userId: user && user.id,;
          suggestionType: 'talent',;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
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
      }

  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setSuggestion(result);

      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
      }
    }
  }

<<<<<<< HEAD


  return (

    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;


          <Button
            type="button"

            variant="outline"
            onClick={generateSuggestion}

=======

    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
  },

  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"


            variant="outline"

}

      </div>;
    </div>;
  );

            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;



          <PricingSuggestionBox

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    try {}
      const params: TalentRateParams = {}

=======
    try {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
    </div>;
  );


<<<<<<< HEAD






=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
            rate_type={rate_type}
          />)}
      </div>;
    </div>);
}
;


<<<<<<< HEAD


      </div>;
    </div>;
  );



=======
  return (
    <div className = $2;
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
