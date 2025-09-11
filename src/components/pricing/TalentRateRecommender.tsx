<<<<<<< HEAD
<<<<<<< HEAD


interface TalentRateRecommenderProps {
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number) => void
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {logErrorToProduction} from '@/utils/productionLogger'
import {
  getTalentRateSuggestion
  PricingSuggestion
  TalentRateParams
  trackPricingSuggestion
} from "@/services/pricingSuggestionService"
import { PricingSuggestionBox } from "./PricingSuggestionBox"
import { useAuth } from "@/hooks/useAuth"
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  getTalentRateSuggestion,
  PricingSuggestion,
  TalentRateParams,
  trackPricingSuggestion
} from "@/services/pricingSuggestionService",
import { PricingSuggestionBox } from "./PricingSuggestionBox",
import { useAuth } from "@/hooks/useAuth",
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {

  rateType: "hourly" | "fixed"

interface TalentRateRecommenderProps {
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {
  skills: string[]
  yearsExperience: number
  location?: string
  onSuggestionApplied: (value: number,) => void
=======
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { Sparkles } from 'lucide-react'
interface TalentRateRecommenderProps {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number,) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
<<<<<<< HEAD
}

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
      
ursor/fix-website-loading-errors-and-merge-6662
      
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Track this suggestion application
=======

      // Track this suggestion application
      if (user && user.id) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
<<<<<<< HEAD
      }
    }
  }
  },

=======
  },



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}
            className="w-full"
<<<<<<< HEAD
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
ursor/fix-website-loading-errors-and-merge-6662

  return (


            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}


<<<<<<< HEAD
=======
            className="w-full"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI
          </Button>
        ) : (
            disabled = {skills && skills.length === 0 || yearsExperience <= 0,}
            className="w-full">;
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;
          </Button>;
        ) : (;
          <PricingSuggestionBox
<<<<<<< HEAD
<<<<<<< HEAD
          <PricingSuggestionBox
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
  rateType
}/>)
}</div> </div>)
}
'"}
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  rateType 
}/>) 
}</div> </div>) ;
};
'"};
};

            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}

<<<<<<< HEAD
<<<<<<< HEAD
  rateType 
}/>) 
}</div> </div>) ;
};
'"};
};
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
