
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from "lucide-react",;
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
=======
import React from "react";""
import { Button } from "@/components/ui/button";""
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";""
import { Card, CardContent } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from "@/services/pricingSuggestionService";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null;,;
  isLoading: boolean;,;
  onApplySuggestion: () => void;,;"
  rateType:"hourly" | "fixed";"
}
export const PricingSuggestionBox:React.FC<PricingSuggestionBoxProps> = ({;
suggestion,;
  isLoading,;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
    return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;
<Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
;
        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>;
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;"
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;"

          <p>{suggestion.explanation}</p>;
</div>;
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/PricingSuggestionBox.tsx
        <div className="flex items-center justify-between">;
          <TooltipProvider>;

            <Tooltip>;

              <TooltipTrigger asChild>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
                <Button;
                  variant="default";
                  onClick={onApplySuggestion}
                  className="w-full";
                >;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/PricingSuggestionBox.tsx
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;

                <p>Apply this suggestion to your pricing field</p>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
        ;
        <p className="text-xs text-center text-muted-foreground pt-2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  ),;
},; interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null;
isLoading: boolean;
onApplySuggestion: () => void;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion, isLoading,  onApplySuggestion, rateType ;
}) => {;
  if (isLoading) {;
  return (<Card className="border border-dashed border-muted" > <CardContent className="flex items-center justify-center p-6" > <div className="text-center" > <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" /> <p className="text-sm text-muted-foreground" > Generating optimal pricing suggestion... </p> </div> </CardContent> </Card> return (<Card className="border-2 border-dashed border-muted-foreground/20" > <CardContent className="p-5 space-y-4" > <div className="flex items-center justify-between" > <h4 className="font-semibold" >AI Suggested Price</h4> <Badge variant="outline" className= {;
  confidenceColor ;
}> {;"  suggestion.confidence ";"}confidence </Badge> </div> <div className="bg-muted/50 rounded-md p-3 text-center" > <span className="text-2xl font-bold" > $ {;
  suggestion.minRate.toFixed (0) ;
:temp_broken_files/pricing/PricingSuggestionBox.tsx
}- $ {;"  suggestion.maxRate.toFixed (0) ";"}</span> <span className="text-sm text-muted-foreground ml-1" >{";"  rateType === "hourly" ? "/hour" : "total" ";"}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p >{;"  suggestion.explanation ";"}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion </Button> </TooltipTrigger> <TooltipContent> <p>Apply this suggestion to your pricing field</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p> </CardContent> </Card>) ;
};""
}- $ {;
  suggestion.maxRate.toFixed (0) ";
}</span> <span className="text-sm text-muted-foreground ml-1" > {";
  rateType === "hourly" ? "/hour" : "total" ";
}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p> {;
  suggestion.explanation ";
}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion </Button> </TooltipTrigger> <TooltipContent> <p>Apply this suggestion to your pricing field</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p> </CardContent> </Card>) ;
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/pricing/PricingSuggestionBox.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/pricing/PricingSuggestionBox.tsx
=======
  return (<Card className="border border-dashed border-muted" > <CardContent className="flex items-center justify-center p-6" > <div className="text-center" > <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" /> <p className="text-sm text-muted-foreground" > Generating optimal pricing suggestion... </p> </div>   return (<Card className="border-2 border-dashed border-muted-foreground/20" > <CardContent className="p-5 space-y-4" > <div className="flex items-center justify-between" > <h4 className="font-semibold" >AI Suggested Price</h4> <Badge variant="outline" className= {;"
  confidenceColor ;"
}> {;"  suggestion.confidence ";"}confidence  </div> <div className="bg-muted/50 rounded-md p-3 text-center" > <span className="text-2xl font-bold" > $ {;"
</div>)"
}- $ {;"  suggestion.maxRate.toFixed (0) ";"}</span> <span className="text-sm text-muted-foreground ml-1" >{";"  rateType === "hourly" ? "/hour" : "total" ";"}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p >{;"  suggestion.explanation ";"}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion   <TooltipContent> <p>Apply this suggestion to your pricing field</p>    </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p>  ) ;""
}</span> <span className="text-sm text-muted-foreground ml-1" > {";"
</span>"
}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p> {;"
}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion   <TooltipContent> <p>Apply this suggestion to your pricing field</p>    </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p>  ) ;""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
