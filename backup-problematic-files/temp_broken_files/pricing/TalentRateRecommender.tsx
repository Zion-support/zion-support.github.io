
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ;
  getTalentRateSuggestion,;
  PricingSuggestion,;
  TalentRateParams,;
  trackPricingSuggestion;
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
import { Sparkles } from "lucide-react",;
=======
=======
} from "@/services/pricingSuggestionService",;""
import { PricingSuggestionBox } from "./PricingSuggestionBox";""
import { useAuth } from "@/hooks/useAuth";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Sparkles } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/TalentRateRecommender.tsx
=======
import { Sparkles } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    setIsLoading(true),;
    try {;
      const params:TalentRateParams = {;
        skills,;
        yearsExperience,;
        location},;
      const result = await getTalentRateSuggestion(params),;
      setSuggestion(result),;
<<<<<<< HEAD
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
      console.error("Error generating rate suggestion:", error),;
=======
      logErrorToProduction('Error generating rate suggestion:', { data:error }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/TalentRateRecommender.tsx
=======
      logErrorToProduction('Error generating rate suggestion:', { data:error }),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    } catch (error) {;"
      logErrorToProduction('Error generating rate suggestion: ';, { data: error ;}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } finally {;
      setIsLoading(false),;
  },;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      // We'll use the middle of the range as the suggested rate;
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),;
      onSuggestionApplied(suggestedRate),;
      // Track this suggestion application;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
      if (user) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:'talent',;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      if (user && user.id) {;
        trackPricingSuggestion({;
<<<<<<< HEAD
          userId:user.id,;
          suggestionType:"talent",;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/TalentRateRecommender.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
          actualValue:suggestedRate,;
          accepted:true;
=======
          userId: user.id;,;
          suggestionType: "talent";,;"
          suggestedMin: suggestion.minRate;,;
          suggestedMax: suggestion.maxRate;,;
          actualValue: suggestedRate;,;
          accepted:true;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType={rateType}
          />;

      </div>;
<<<<<<< HEAD
    </div>;
  ),;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/TalentRateRecommender.tsx
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
:temp_broken_files/pricing/TalentRateRecommender.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/TalentRateRecommender.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/TalentRateRecommender.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>;)"
return (<div className="space-y-4" > <div> {";"  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;"  generateSuggestion ";"}> <Sparkles className="h-4 w-4 mr-2" /> Optimize Rate with AI ) : (<PricingSuggestionBox suggestion= {;"
</div>)
}</div> </div>) ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
