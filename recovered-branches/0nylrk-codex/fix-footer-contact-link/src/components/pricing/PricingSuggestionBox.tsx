import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Info, ThumbsUp } from "lucide-react";
import { PricingSuggestion } from "@/services/pricingSuggestionService";
<<<<<<< HEAD

import { Loader2, Info, ThumbsUp } from "lucide-react",
import { PricingSuggestion } from "@/services/pricingSuggestionService",


interface PricingSuggestionBoxProps {

  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}



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

=======
import { Loader2, Info, ThumbsUp } from "lucide-react",
import { PricingSuggestion } from "@/services/pricingSuggestionService",


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
    isLoading: boolean;
onApplySuggestion: () => void;}
rateType: \"hourly\" | \"fixed\"}
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (isLoading) {
}
return (;
      <Card className="border border-dashed border-muted">"
        <CardContent className="flex items-center justify-center p-6">"
          <div className="text-center">"
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />"
            <p className="text-sm text-muted-foreground">"
              Generating optimal pricing suggestion...
            </p>
          </div>
        </CardContent>
      </Card>
    )

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface PricingSuggestionBoxProps {;
  }
  "suggestion": PricingSuggestion | null,;
  "isLoading": boolean,;
  "onApplySuggestion": () => void,;
  "rateType": "hourly" | "fixed";"
}



<<<<<<< HEAD

      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Generating optimal pricing suggestion...;
            </p>;
          </div>;
        </CardContent>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
  if (!suggestion) {
    return null
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

=======
},
;

  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion && suggestion.confidence],;

  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;


          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="flex items-center justify-between">;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;


                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Apply this suggestion to your pricing field</p>;


              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
<<<<<<< HEAD


        <p className="text - xs text - center text - muted - foreground pt - 2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
;





=======
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;

export default PricingSuggestionBox;


        ;
        <p className="text-xs text-center text-muted-foreground pt-2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  );
};

export default PricingSuggestionBox;
        </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
