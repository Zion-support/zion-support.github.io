<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  jobTitle: string;
category: string;
timeline?: string;
scope?: string;
experienceLevel?: string;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

const generateSuggestion = async () => {;

=======
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/ClientBudgetRecommender.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
