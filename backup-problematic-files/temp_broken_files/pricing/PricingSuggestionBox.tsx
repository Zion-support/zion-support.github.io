

import { PricingSuggestion } from "@/services/pricingSuggestionService",;

;
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null;,;
  isLoading: boolean;,;
  onApplySuggestion: () => void;,;"
  rateType:"hourly" | "fixed";"
}
export const PricingSuggestionBox:React.FC<PricingSuggestionBoxProps> = ({;









        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;"
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;"
          <p>{suggestion.explanation}</p>;

        <div className="flex items-center justify-between">;










}- $ {;
  suggestion.maxRate.toFixed (0) ";
}</span> <span className="text-sm text-muted-foreground ml-1" > {";
  rateType === "hourly" ? "/hour" : "total" ";
}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p> {;

  suggestion.explanation ";
}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion </Button> </TooltipTrigger> <TooltipContent> <p>Apply this suggestion to your pricing field</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p> </CardContent> </Card>) ;
};
"