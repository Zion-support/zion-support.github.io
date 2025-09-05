
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from 'lucide-react'

interface TalentRateRecommenderProps {
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number) => void,
  rateType: "hourly" | "fixed"
=======
} from &quot;@/services/pricingSuggestionService&quot;;
import { PricingSuggestionBox } from &quot;./PricingSuggestionBox&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Sparkles } from 'lucide-react'
=======
import React, {_useState} from "react";
import {_getTalentRateSuggestion, _PricingSuggestion, _TalentRateParams, _trackPricingSuggestion} from "@/services/pricingSuggestionService";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface TalentRateRecommenderProps {_skills: string[];
  yearsExperience: number;
  location?: string;
<<<<<<< HEAD
  onSuggestionApplied: (value: number) => void;
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({
  skills,
  yearsExperience,
  location,
  onSuggestionApplied,
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false),
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),
  const { user } = useAuth(),

  const generateSuggestion = async () => {
    if (skills.length === 0 || yearsExperience <= 0) {
      return
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
      logErrorToProduction('Error generating rate suggestion:', { data: error })
    } finally {
      setIsLoading(false)
    }
  },
=======
  onSuggestionApplied: (_value: number) => void;
  rateType: "hourly" | "fixed";}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = (_{_skills, _yearsExperience, _location, _onSuggestionApplied, _rateType}) => {_const [isLoading, _setIsLoading] = useState(false);
  const [suggestion, _setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user} = useAuth();

  const _generateSuggestion = async () => {_if (skills.length === 0 || yearsExperience <= 0) {
      return;}

    setIsLoading(true);
    try {_const params: TalentRateParams = {
        skills, _yearsExperience, _location};

      const _result = await getTalentRateSuggestion(params);
      setSuggestion(result);
    } catch (error) {_logErrorToProduction('Error generating rate suggestion:', _{ data: error});
    } finally {_setIsLoading(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleApplySuggestion = () => {_if (suggestion) {
      // We'll use the middle of the range as the suggested rate
<<<<<<< HEAD
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
=======
      const _suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
<<<<<<< HEAD
          userId: user.id,
          suggestionType: &quot;talent&quot;,
          suggestedMin: suggestion.minRate,
          suggestedMax: suggestion.maxRate,
          actualValue: suggestedRate,
          accepted: true
        })
=======
          userId: user.id, _suggestionType: "talent", _suggestedMin: suggestion.minRate, _suggestedMax: suggestion.maxRate, _actualValue: suggestedRate, _accepted: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        {_!suggestion && !isLoading ? (
          <Button
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            onClick={generateSuggestion}
<<<<<<< HEAD
            disabled={skills.length === 0 || yearsExperience <= 0}
            className=&quot;w-full&quot;
=======
            disabled={_skills.length === 0 || yearsExperience <= 0}
            className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; /> Optimize Rate with AI
          </Button>
        ) : (
          <PricingSuggestionBox
            suggestion={_suggestion}
            isLoading={_isLoading}
            onApplySuggestion={_handleApplySuggestion}
            rateType={_rateType}
          />
        )}
      </div>
    </div>
  )
},
