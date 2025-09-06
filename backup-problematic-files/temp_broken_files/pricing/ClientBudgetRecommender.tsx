
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
import { Sparkles } from "lucide-react",;
=======
import { Sparkles } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
;
interface ClientBudgetRecommenderProps {;
  jobTitle:string,;
  category:string,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied:(minValue:number, maxValue:number) => void;
}
;
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
  jobTitle,;
  category,;
  timeline,;
  scope,;
  experienceLevel,;
  onSuggestionApplied}) => {;
  const [isLoading, setIsLoading] = useState(false),;
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
  const { user } = useAuth(),;
;
  const generateSuggestion = async () => {;
    if (!jobTitle || !category) {;
      return,;
    }
;
    setIsLoading(true),;
    try {;
      const params:ClientBudgetParams = {;
        jobTitle,;
        category},;
;
      if (timeline) params.timeline = timeline,;
      if (scope) params.scope = scope,;
      if (experienceLevel) params.experienceLevel = experienceLevel,;
;
      const result = await getClientBudgetSuggestion(params),;
      setSuggestion(result),;
    } catch (error) {;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
      console.error("Error generating budget suggestion:", error),;
=======
      logErrorToProduction('Error generating budget suggestion:', { data:error }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleApplySuggestion = () => {;
    if (suggestion) {;
      onSuggestionApplied(suggestion.minRate, suggestion.maxRate),;
      ;
      // Track this suggestion application;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
      if (user) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:'client',;
=======
      if (user && user.id) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:"client",;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
          suggestedMin:suggestion.minRate,;
          suggestedMax:suggestion.maxRate,;
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
            disabled={!jobTitle || !category}
            className="w-full";
          >;
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;
          </Button>;
        ) :(;
          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}
            rateType="hourly";
          />;
        )}
      </div>;
    </div>;
  ),;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
},; import {
  getClientBudgetSuggestion;
PricingSuggestion;
ClientBudgetParams;
trackPricingSuggestion interface ClientBudgetRecommenderProps {
=======
},; import {;
  {;
  {;
  getClientBudgetSuggestion;
PricingSuggestion;
ClientBudgetParams;
trackPricingSuggestion import {;
  Sparkles ;
}from 'lucide-react' interface ClientBudgetRecommenderProps {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
  jobTitle: string;
category: string;
timeline?: string;
scope?: string;
experienceLevel?: string;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
onSuggestionApplied: (minValue: number, maxValue: number) => void 
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
=======
onSuggestionApplied: (minValue: number, maxValue: number) => void ;
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
  jobTitle;
category;
timeline;
scope;
experienceLevel;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/ClientBudgetRecommender.tsx
onSuggestionApplied 
}) => {
  const [isLoading, setIsLoading] = useState (false);
const [suggestion, setSuggestion] = useState<PricingSuggestion | null> (null);
const {
  user 
}= useAuth ();
const generateSuggestion = async () => {
  if (!jobTitle || !category) {
  return 
}setIsLoading (true);
try {
  const params: ClientBudgetParams = {
  jobTitle;
category 
};
if (scope) params.scope = scope;
if (experienceLevel) params.experienceLevel = experienceLevel;
}finally {
  setIsLoading (false) 
}
};
const handleApplySuggestion = () => {
  if (suggestion) {
  onSuggestionApplied (suggestion.minRate, suggestion.maxRate);
trackPricingSuggestion ({
  
}
}
};
return (<div className="space-y-4" > <div> {
  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick= {
  generateSuggestion 
}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />) 
}</div> </div>) 
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
onSuggestionApplied ;
}) => {;
  const [isLoading,  setIsLoading] = useState (false);
const [suggestion, setSuggestion] = useState<PricingSuggestion | null> (null);
const { ;
  user ;
 } = useAuth ();
const generateSuggestion = async () => {;
  if (!jobTitle || !category) {;
  return ;
}setIsLoading (true);
try {;
  const params: ClientBudgetParams = {;
  jobTitle;
category ;
};
if (scope) params.scope = scope;
if (experienceLevel) params.experienceLevel = experienceLevel;
//Track this suggestion application if (user && user.id) {;
  trackPricingSuggestion ({;
  ;
}
}
};
return (<div className="space-y-4" > <div> {";"  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;"  generateSuggestion ";"}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation </Button>) : (<PricingSuggestionBox />) ;
}</div> </div>) ;
:temp_broken_files/pricing/ClientBudgetRecommender.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/ClientBudgetRecommender.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/ClientBudgetRecommender.tsx
