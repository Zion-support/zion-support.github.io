
import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import {logErrorToProduction} from '@/utils/productionLogger';
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
} from "@/services/pricingSuggestionService",;""
import { PricingSuggestionBox } from "./PricingSuggestionBox";""
import { useAuth } from "@/hooks/useAuth";""
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

    <div className="space-y-4">;"
</div>
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
            onApplySuggestion={handleApplySuggestion}"
            rateType="hourly";"
          />;

      </div>;
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({;
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
category 
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
return (<div className="space-y-4" > <div> {";"  !suggestion && !isLoading ? (<Button type="button" variant="outline" onClick={;"  generateSuggestion ";"}> <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation ) : (<PricingSuggestionBox />) ;"
}</div> </div>) ;"
pr-12325
