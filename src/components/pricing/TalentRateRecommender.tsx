<<<<<<< HEAD
<<<<<<< HEAD
import { Sparkles } from 'lucide-react'
=======


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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  skills: string[],
  yearsExperience: number,
  location?: string,
  onSuggestionApplied: (value: number,) => void,
  rateType: "hourly" | "fixed"
<<<<<<< HEAD
}

=======
  rateType: "hourly" | "fixed"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
      
<<<<<<< HEAD
<<<<<<< HEAD
interface TalentRateRecommenderProps {;


  },




=======
ursor/fix-website-loading-errors-and-merge-6662
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Track this suggestion application
        trackPricingSuggestion({
          userId: user.id
          suggestionType: "talent"
          suggestedMin: suggestion.minRate
          suggestedMax: suggestion.maxRate
          actualValue: suggestedRate
          accepted: true
        })


  return (
    <div className="space-y-4">
      <div>
        {!suggestion && !isLoading ? (
          <Button
            type="button"
            variant="outline"
            className="w-full"
<<<<<<< HEAD
            onClick = {generateSuggestion,}
            disabled = {skills.length === 0 |yearsExperience <= 0,}
ursor/fix-website-loading-errors-and-merge-6662

  return (


            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          <PricingSuggestionBox
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  rateType 
}/>) 
}</div> </div>) ;
};
'"};
};

<<<<<<< HEAD
=======
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
        )}
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
