<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import {logErrorToProduction} from '@/utils/productionLogger',;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
<<<<<<< HEAD

import { Sparkles } from 'lucide-react';

;
interface ClientBudgetRecommenderProps {;
  jobTitle: string;,;
  category: string;,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied: (minValue:number;, maxValue:number) => void;
}
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;

=======
<<<<<<< HEAD
} from "@/services/pricingSuggestionService",;
import { PricingSuggestionBox } from "./PricingSuggestionBox",;
import { useAuth } from "@/hooks/useAuth",;
import { Sparkles } from 'lucide-react';
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
      logErrorToProduction('Error generating budget suggestion:', { data:error }),;
=======

import { Sparkles } from 'lucide-react';

;
interface ClientBudgetRecommenderProps {;
  jobTitle: string;,;
  category: string;,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied: (minValue:number;, maxValue:number) => void;
}
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      if (user && user.id) {;
        trackPricingSuggestion({;
          userId:user.id,;
          suggestionType:"client",;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

      <div>;
          <Button;"
            type="button";""
            variant="outline";"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}"
            className="w-full";"
          >;
"
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;"

          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
=======
<<<<<<< HEAD
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
=======

      <div>;
          <Button;"
            type="button";""
            variant="outline";"
            onClick={generateSuggestion}
            disabled={!jobTitle || !category}"
            className="w-full";"
          >;
"
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;"

          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            onApplySuggestion={handleApplySuggestion}"
            rateType="hourly";"
          />;

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;

},; import {;
  {;
  {;
  getClientBudgetSuggestion;
PricingSuggestion;
ClientBudgetParams;
trackPricingSuggestion import {;
  Sparkles ;
}from 'lucide-react' interface ClientBudgetRecommenderProps {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  jobTitle: string;
category: string;
timeline?: string;
scope?: string;
experienceLevel?: string;
<<<<<<< HEAD

=======
<<<<<<< HEAD
onSuggestionApplied: (minValue: number, maxValue: number) => void ;
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  jobTitle;
category;
timeline;
scope;
experienceLevel;

onSuggestionApplied ;
}) => {;
  const [isLoading,  setIsLoading] = useState (false);

const [suggestion, setSuggestion] = useState<PricingSuggestion | null> (null);
const { ;
  user ;
 } = useAuth ();
<<<<<<< HEAD
  }
=======
const generateSuggestion = async () => {;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (!jobTitle || !category) {;
  return ;
}setIsLoading (true);
try {;
  const params: ClientBudgetParams = {;
  jobTitle;

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
<<<<<<< HEAD
};"'"
=======
<<<<<<< HEAD
:temp_broken_files/pricing/ClientBudgetRecommender.tsx
};"'"
};
'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/ClientBudgetRecommender.tsx
=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/ClientBudgetRecommender.tsx
=======
<<<<<<< HEAD
:temp_broken_files/pricing/ClientBudgetRecommender.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/ClientBudgetRecommender.tsx
=======

};
'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
