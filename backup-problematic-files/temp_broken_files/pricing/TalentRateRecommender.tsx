<<<<<<< HEAD
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
=======
>>>>>>> merged-prs-20250907-203621
import { ;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
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
=======

import { Sparkles } from 'lucide-react';

;
interface TalentRateRecommenderProps {;
  skills: string[];,;
  yearsExperience: number;,;
  location?:string,;
  onSuggestionApplied: (value:number) => void;,;
  rateType:"hourly" | "fixed";"
}
export const TalentRateRecommender:React.FC<TalentRateRecommenderProps> = ({;
)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;

    if (skills.length === 0 || yearsExperience <= 0) {;
      return,;
>>>>>>> merged-prs-20250907-203621
    setIsLoading(true),;
    try {;
      const params:TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
<<<<<<< HEAD
;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;
    } catch (error) {;
      logErrorToProduction('Error generating rate suggestion:', { data:error }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
=======
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;

    } finally {;
      setIsLoading(false),;
  },;
>>>>>>> merged-prs-20250907-203621
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
<<<<<<< HEAD
      ;
      // Track this suggestion application;
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:"talent",;
=======
      // Track this suggestion application;

      if (user && user.id) {;
        trackPricingSuggestion({;

>>>>>>> merged-prs-20250907-203621
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          actualValue:suggestedRate,;
          accepted:true;
<<<<<<< HEAD
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
=======

        }),;
  return (;"
    <div className="space-y-4">;"
</div>
      <div>;
          <Button;"
            type="button";""
            variant="outline";"
            onClick={generateSuggestion}
            disabled={skills.length === 0 || yearsExperience <= 0}"
            className="w-full";"
          >;
"
            <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI;"

>>>>>>> merged-prs-20250907-203621
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;
<<<<<<< HEAD
        )}
      </div>;
    </div>;
  ),;
=======

      </div>;

>>>>>>> merged-prs-20250907-203621
},; import {;
  getTalentRateSuggestion;
PricingSuggestion;
TalentRateParams;
trackPricingSuggestion interface TalentRateRecommenderProps {;
  skills: string[];
yearsExperience: number;
location?: string;
const handleApplySuggestion = () => {;
  if (suggestion) {;
  //We'll use the middle of the range as the suggested rate //Track this suggestion application if (user && user.id) {;
  trackPricingSuggestion ({;
  ;
}
}
};
return (<div className="space-y-4" > <div> {";"  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;"  generateSuggestion ";"}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {;
  suggestion ;
}isLoading= {;
  isLoading ;
}onApplySuggestion= {;
  handleApplySuggestion ;
}rateType= {;
  rateType ;
}/>) ;
}</div> </div>) ;
<<<<<<< HEAD
};"'"
=======
<<<<<<< HEAD
:temp_broken_files/pricing/TalentRateRecommender.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/TalentRateRecommender.tsx
=======
<<<<<<< HEAD
:temp_broken_files/pricing/TalentRateRecommender.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/TalentRateRecommender.tsx
=======

};
'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
