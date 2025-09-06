<<<<<<< HEAD


<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface PricingSuggestionBoxProps {

  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
import {Button} from "@/components/ui/button";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Info, ThumbsUp} from "lucide-react";
import {PricingSuggestion} from "@/services/pricingSuggestionService";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Info, ThumbsUp } from "lucide-react";
import { PricingSuggestion } from "@/services/pricingSuggestionService";
import { Loader2, Info, ThumbsUp } from "lucide-react",
import { PricingSuggestion } from "@/services/pricingSuggestionService",
interface PricingSuggestionBoxProps {

  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion;
  isLoading;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;

<<<<<<< HEAD
  onApplySuggestion
  suggestion,
  isLoading,
  onApplySuggestion,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React from "react";
import {Button} from "@/components/ui/button";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Info, ThumbsUp} from "lucide-react";
import {PricingSuggestion} from "@/services/pricingSuggestionService";

  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  rateType}) => {
  if (isLoading) {
    return (
      <Card className="border border-dashed border-muted">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Generating optimal pricing suggestion...
            </p>
          </div>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from "lucide-react",;
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null,;
  isLoading: boolean,;
  onApplySuggestion: () => void,;
  rateType: "hourly" | "fixed";
}

<<<<<<< HEAD
<<<<<<< HEAD
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion;
  isLoading;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from "lucide-react",;
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
;
interface PricingSuggestionBoxProps {;
  suggestion:PricingSuggestion | null,;
  isLoading:boolean,;
  onApplySuggestion:() => void,;
  rateType:"hourly" | "fixed";
}
;
export const PricingSuggestionBox:React.FC<PricingSuggestionBoxProps> = ({;
;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion,;
  isLoading,;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from './react';
import { Button } from '@/components / ui / button';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components / ui / tooltip';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Loader2, Info, ThumbsUp } from './lucide-react';
import { PricingSuggestion } from '@/services / pricingSuggestionService';
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  is_loading: boolean,
  onApplySuggestion: () => void,
  rate_type: "hourly" | "fixed";
}
export const PricingSuggestionBox: React.FC < PricingSuggestionBoxProps> = ({
  suggestion;
  is_loading;
  onApplySuggestion,
  rate_type}) => {
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="border border - dashed border - muted">;
        <CardContent className="flex items - center justify - center p - 6">;
          <div className="text - center">;
            <Loader2 className="h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4" />;
            <p className="text - sm text - muted - foreground">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Generating optimal pricing suggestion...;
            </p>;
          </div>;
        </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }





=======
      </Card>;
    );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  if (!suggestion) {
    return null
  }

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


  }





>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (!suggestion) {;
    return null;
  }

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

};

},
;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion && suggestion.confidence],;

  return (
<<<<<<< HEAD
=======
      </Card>;
    ),;
  }
;
  if (!suggestion) {;
    return null,;
  }
;
  const confidenceColor = {;
    High:"bg-green-100 text-green-800",;
    Medium:"bg-yellow-100 text-yellow-800",;
    Low:"bg-red-100 text-red-800"}[suggestion.confidence],;
;
  return (;
}

};
},
;
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion.confidence];
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;
<<<<<<< HEAD
<<<<<<< HEAD
            {suggestion && suggestion.confidence} confidence;
=======
            {suggestion.confidence} confidence;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </Badge>;
        </div>;

        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
<<<<<<< HEAD
            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
=======
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
<<<<<<< HEAD

        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;
<<<<<<< HEAD
          <p>{suggestion && suggestion.explanation}</p>;
        </div>;

=======
            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
;
        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" :" total"}
          </span>;
        </div>;
;
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;
          <p>{suggestion.explanation}</p>;
        </div>;
;
          <p>{suggestion.explanation}</p>;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="flex items-center justify-between">;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Button
                  variant="default"
                  onClick={onApplySuggestion}
                  className="w-full">;
=======
                <Button;
                  variant="default";
                  onClick={onApplySuggestion}
                  className="w-full";
                >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Apply this suggestion to your pricing field</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </Card>);
  }
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  const confidence_color = {
    High: "bg - green - 100 text - green - 800",
    Medium: "bg - yellow - 100 text - yellow - 800",
    Low: "bg - red - 100 text - red - 800"}[suggestion.confidence],
  return (
    <Card className="border - 2 border - dashed border - muted - foreground / 20">;
      <CardContent className="p - 5 space - y-4">;
        <div className="flex items - center justify - between">;
          <h4 className="font - semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidence_color}>;
            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
        <div className="bg - muted / 50 rounded - md p - 3 text - center">;
          <span className="text - 2xl font - bold">;
            ${suggestion.min_rate.to_fixed (0)} - ${suggestion.max_rate.to_fixed (0)}
          </span>;
          <span className="text - sm text - muted - foreground ml - 1">;
            {rate_type === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
        <div className="flex items - start space - x-2 text - sm text - muted - foreground">;
          <Info className="h - 4 w - 4 flex - shrink - 0 mt - 1" />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className="flex items - center justify - between">;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <Button;
                  variant="default";
                  on_click={onApplySuggestion}
                  className="w - full";
                >;
                  <ThumbsUp className="h - 4 w - 4 mr - 2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p > Apply this suggestion to your pricing field</p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
<<<<<<< HEAD

<<<<<<< HEAD
        <p className="text - xs text - center text - muted - foreground pt - 2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
;

=======

export default PricingSuggestionBox;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
