
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
import {Button} from "@/components/ui/button";
import {getTalentRateSuggestion, PricingSuggestion, TalentRateParams, trackPricingSuggestion} from "@/services/pricingSuggestionService";
import {PricingSuggestionBox} from "./PricingSuggestionBox";
import {useAuth} from "@/hooks/useAuth";
import {Sparkles} from "lucide-react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { 
  getTalentRateSuggestion;
  PricingSuggestion;
  TalentRateParams;
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
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
  skills;
  years_experience;
  location;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (skills.length === 0 |yearsExperience <= 0) {
      return
    }
    setIsLoading(true);
    try {;
      const params: TalentRateParams = {;
        skills;
        yearsExperience
        location}
      const result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {;
      console && console.error("Error generating rate suggestion:", error);
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
=======

  };

=======

import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;

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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }

    setIsLoading(true),
    try {
      const params: TalentRateParams = {
        skills,
        yearsExperience,
        location},

      const result = await getTalentRateSuggestion(params),

      setSuggestion(result)
    } catch (error) {
      console.error("Error generating rate suggestion:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type="button"
            variant="outline"
            onClick={generateSuggestion}
            disabled={skills.length === 0 |yearsExperience <= 0}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
<<<<<<< HEAD
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
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
<<<<<<< HEAD
          />;
        )}
      </div>
    </div>
  )
}

=======
          />
        )}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            rate_type={rate_type}
          />)}
      </div>;
    </div>);
}
;
