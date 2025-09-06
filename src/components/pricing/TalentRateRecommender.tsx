
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface TalentRateRecommenderProps {
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number) => void
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {logErrorToProduction} from '@/utils/productionLogger'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {
  getTalentRateSuggestion
  PricingSuggestion
  TalentRateParams
  trackPricingSuggestion
} from "@/services/pricingSuggestionService"
import { PricingSuggestionBox } from "./PricingSuggestionBox"
import { useAuth } from "@/hooks/useAuth"
<<<<<<< HEAD
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
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
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number,) => void
<<<<<<< HEAD

  rateType: "hourly" | "fixed"
}
export const TalentRateRecommender: React.FC<TalentRateRecommenderProps> = ({

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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
    if (skills.length === 0 |yearsExperience <= 0) {
      return
=======
    if (skills.length === 0 || yearsExperience <= 0) {
      return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    setIsLoading(true)
    try {
      const params: TalentRateParams = {
        skills
        yearsExperience
        location}
<<<<<<< HEAD
      const result = await getTalentRateSuggestion (params);
      set_suggestion (result);
    } catch (error) {
      logErrorToProduction ('Error generating rate suggestion:', { data: error });
    } finally {
      setIsLoading (false);
=======
      const result = await getTalentRateSuggestion(params)
      setSuggestion(result)
    } catch (error) {
      logErrorToProduction('Error generating rate suggestion:', { data: error })
    } finally {
      setIsLoading(false)
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
  }
  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2)
      onSuggestionApplied(suggestedRate)
<<<<<<< HEAD
=======
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      // Track this suggestion application
      if (user && user.id) {
        trackPricingSuggestion({
          userId: user.id
          suggestionType: "talent"
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
          actualValue: suggestedRate
          accepted: true
        })
interface TalentRateRecommenderProps {;
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className="space-y-4">;
      <div>;
        {!suggestion && !isLoading ? (;
          <Button
            type="button"
            variant="outline"
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
            className="w-full"
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
<<<<<<< HEAD
          <PricingSuggestionBox
            suggestion = {suggestion,}
            isLoading = {isLoading,}
            onApplySuggestion = {handleApplySuggestion,}
            rateType = {rateType,}
          />;
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
  rateType
}/>)
}</div> </div>)
}
'"}
}


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
  rateType
}/>)
}</div> </div>)
}
'"}
}

=======
            disabled = {skills && skills.length === 0 || yearsExperience <= 0,}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PricingSuggestionBox

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

      </div>;
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <div className="space - y-4">;
      <div>;
        {!suggestion && !is_loading ? (
          <Button;
            type="button";
            variant="outline";
            on_click = {generate_suggestion, }
            disabled = {skills.length === 0 || years_experience <= 0, }
            className="w - full";
          >;
            <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI;
          </Button>) : (
          <PricingSuggestionBox;
            suggestion = {suggestion, }
            is_loading = {is_loading, }
            onApplySuggestion = {handleApplySuggestion, }
            rate_type = {rate_type, }
          />)}
      </div>;
    </div>);
}
return (<div className="space - y-4" > <div> {";
  !suggestion && !is_loading ? (<Button type="button" variant="outline" on_click={
  generate_suggestion ";
}> <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {
  suggestion;
}is_loading= {
  is_loading;
}onApplySuggestion= {
  handleApplySuggestion;
}rate_type= {
  rate_type;
}/>);
}</div> </div>);
}
'"},
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
