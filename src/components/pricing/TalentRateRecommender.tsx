<<<<<<< HEAD


=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TalentRateRecommenderProps {
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number) => void
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {logErrorToProduction} from '@/utils/productionLogger'
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',

import { 
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  getTalentRateSuggestion
  PricingSuggestion
  TalentRateParams
  trackPricingSuggestion
} from "@/services/pricingSuggestionService"
import { PricingSuggestionBox } from "./PricingSuggestionBox"
import { useAuth } from "@/hooks/useAuth"
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
>>>>>>> import { 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
<<<<<<< HEAD

import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {

  rateType: "hourly" | "fixed"

=======
>>>>>>> import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number,) => void
<<<<<<< HEAD
    if (skills.length === 0 |yearsExperience <= 0) {
      return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number,) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  rateType: "hourly" | "fixed"
<<<<<<< HEAD
}
export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({

  skills
  yearsExperience
  location
  onSuggestionApplied
  rateType}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null)
  const { user } = useAuth()
  const generateSuggestion = async () => {
<<<<<<< HEAD
    if (skills.length === 0 |yearsExperience <= 0) {
      return
=======
    if (skills.length === 0 || yearsExperience <= 0) {
      return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    setIsLoading(true)
    try {
      const params: TalentRateParams = {
        skills
        yearsExperience
        location}
      const result = await getTalentRateSuggestion(params)
      setSuggestion(result)
    } catch (error) {
      logErrorToProduction('Error generating rate suggestion:', { data: error })
    } finally {
      setIsLoading(false)
    }
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2)
      onSuggestionApplied(suggestedRate)
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  onSuggestionApplied: (value: number) => void,;
  rateType: "hourly" | "fixed";
}
;
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
    }
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
      logErrorToProduction('Error generating rate suggestion:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  },

  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>>       // Track this suggestion application
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Track this suggestion application
>>>>>>>       if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: "talent"
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
          actualValue: suggestedRate
          accepted: true
        })
<<<<<<< HEAD
>>>>>>> interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string;
  onSuggestionApplied: (value: number) => void,;
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import { ;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles } from 'lucide-react';
interface TalentRateRecommenderProps {;
  skills: string[],;
  yearsExperience: number,;
  location?: string,;
  onSuggestionApplied: (value: number,) => void,;
  rateType: "hourly" | "fixed";
}

export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({;
  skills;
  yearsExperience;
  location;
  onSuggestionApplied,;
  rateType}) => {;
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();
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
      logErrorToProduction('Error generating rate suggestion:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  };

  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math && Math.round((suggestion && suggestion.minRate + suggestion && suggestion.maxRate) / 2);
      onSuggestionApplied(suggestedRate);

      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId: user.id,;
          suggestionType: "talent",;
          suggestedMin: suggestion && suggestion.minRate,;
          suggestedMax: suggestion && suggestion.maxRate,;
          actualValue: suggestedRate,;
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const handleApplySuggestion = () =>: any {
    // Check condition
if ( {) {
  $2
}
      // We'll use the middle of the range as the suggested rate;
      const suggested_rate = Math.round ((suggestion.min_rate + suggestion.max_rate) / 2);
      onSuggestionApplied (suggested_rate);
      // Track this suggestion application;
      // Check condition
if ( {) {
  $2
}
        trackPricingSuggestion ({
          user_id: user.id,
          suggestion_type: "talent",
          suggested_min: suggestion.min_rate,
          suggested_max: suggestion.max_rate,
          actual_value: suggested_rate,
          accepted: true;
        });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    }
<<<<<<< HEAD

  return (
=======
  }
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD

=======
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
=======
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="w-full"
=======
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
ursor/fix-website-loading-errors-and-merge-6662
  return (


            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}


>>>>>>>             className="w-full"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
<<<<<<< HEAD
            disabled = {skills && skills.length === 0 || yearsExperience <= 0,}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PricingSuggestionBox
<<<<<<< HEAD
=======
=======
          <PricingSuggestionBox
<<<<<<< HEAD
            suggestion = {suggestion,}
            isLoading = {isLoading,}
            onApplySuggestion = {handleApplySuggestion,}
            rateType = {rateType,}
          />
        )}
      </div>
    </div>
  )
}
return (<div className="space-y-4" > <div> {"
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={
  generateSuggestion "
}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {
  suggestion
}isLoading= {
  isLoading
}onApplySuggestion= {
  handleApplySuggestion
}rateType= {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  rateType
}/>)
}</div> </div>)
}
'"}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}

<<<<<<< HEAD
=======
=======
  rateType 
}/>) 
}</div> </div>) ;
};
'"};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
