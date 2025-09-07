
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;"
import { ;
  getClientBudgetSuggestion,;
  PricingSuggestion,;
  ClientBudgetParams,;
  trackPricingSuggestion;"
} from "@/services/pricingSuggestionService",;""
import { PricingSuggestionBox } from "./PricingSuggestionBox",;""
import { useAuth } from "@/hooks/useAuth",;""
import { Sparkles } from "lucide-react",;"
;
interface ClientBudgetRecommenderProps {;
  jobTitle:string,;
  category:string,;
  timeline?:string,;
  scope?:string,;
  experienceLevel?:string,;
  onSuggestionApplied:(minValue:number, maxValue:number) => void;
}
export const ClientBudgetRecommender:React.FC<ClientBudgetRecommenderProps> = ({;
)
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null),;
"
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
            <Sparkles className="h-4 w-4 mr-2" /> Get Budget Recommendation;"

          <PricingSuggestionBox;
            suggestion={suggestion}
            isLoading={isLoading}
            onApplySuggestion={handleApplySuggestion}"
            rateType="hourly";"
          />;

      </div>;
}export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
const [suggestion, setSuggestion] = useState<PricingSuggestion | null> (null);