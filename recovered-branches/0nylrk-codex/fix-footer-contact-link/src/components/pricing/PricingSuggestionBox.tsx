import React from "react";
import {Button} from "@/components/ui/button";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Info, ThumbsUp} from "lucide-react";
import {PricingSuggestion} from "@/services/pricingSuggestionService";
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Info, ThumbsUp } from "lucide-react";
import { PricingSuggestion } from "@/services/pricingSuggestionService";
import { Loader2, Info, ThumbsUp } from "lucide-react",
import { PricingSuggestion } from "@/services/pricingSuggestionService",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
    isLoading: boolean;
onApplySuggestion: () => void;}
rateType: \"hourly\" | \"fixed\"}
}
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps /> = ({;
  suggestion;
  isLoading;

              Generating optimal pricing suggestion...;
            </p>;
          </div>;
        </CardContent>;
</Card>;
    );
  }
  if (!suggestion) {
    return null
  }
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const confidenceColor = {
    High: "bg-green-100 text-green-800"
    Medium: "bg-yellow-100 text-yellow-800"
    Low: "bg-red-100 text-red-800"}[suggestion.confidence]
  return (
    <Card className="border-2 border-dashed border-muted-foreground/20">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={confidenceColor}>
            {suggestion.confidence} confidence
          </Badge>
        </div>
        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{suggestion.explanation}</p>
        </div>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  onClick={onApplySuggestion}
                  className="w-full"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
  )

=======

};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
},
;

  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion && suggestion.confidence],;

  return (
    <Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;
{suggestion && suggestion.confidence} confidence;
          </Badge>;
        </div>;

        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
<div className="flex items-start space-x-2 text-sm text-muted-foreground">;
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;
          <p>{suggestion && suggestion.explanation}</p>;
        </div>;
        <div className="flex items-center justify-between">;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
<Button
                  variant="default"
                  onClick={onApplySuggestion}
                  className="w-full">;
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Apply this suggestion to your pricing field</p>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
<p className="text - xs text - center text - muted - foreground pt - 2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
