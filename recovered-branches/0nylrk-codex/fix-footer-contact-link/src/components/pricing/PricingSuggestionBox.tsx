<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx


<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface PricingSuggestionBoxProps {

  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}

<<<<<<< HEAD
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({

  onApplySuggestion,
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {Button} from "@/components/ui/button";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Info, ThumbsUp} from "lucide-react";
import {PricingSuggestion} from "@/services/pricingSuggestionService";
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion;
  isLoading;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;

  onApplySuggestion
  suggestion,
  isLoading,
  onApplySuggestion,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
  }
  if (!suggestion) {
    return null
  }

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from "lucide-react",;
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null,;
  isLoading: boolean,;
  onApplySuggestion: () => void,;
  rateType: "hourly" | "fixed";
}
<<<<<<< HEAD
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion;
  isLoading;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
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
=======
;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  suggestion,;
  isLoading,;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
    return (;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Generating optimal pricing suggestion...;
            </p>;
          </div>;
        </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      </Card>;
    );
  }
  if (!suggestion) {
    return null
  }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======

  if (!suggestion) {;
    return null;
  }

=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
},
;

========
<<<<<<< HEAD
  if (!suggestion) {;
    return null;
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion && suggestion.confidence],;
  return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

};
},
;
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion.confidence];
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Badge>;
        </div>;
        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
<<<<<<< HEAD
            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
=======
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <p>{suggestion.explanation}</p>;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Button;
                  variant="default";
                  onClick={onApplySuggestion}
                  className="w-full";
                >;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Apply this suggestion to your pricing field</p>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
        <p className="text - xs text - center text - muted - foreground pt - 2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx

=======

export default PricingSuggestionBox;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <p className="text-xs text-center text-muted-foreground pt-2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  ),;
},; interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
isLoading: boolean;
onApplySuggestion: () => void;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion, isLoading, onApplySuggestion, rateType 
}) => {
  if (isLoading) {
  return (<Card className="border border-dashed border-muted" > <CardContent className="flex items-center justify-center p-6" > <div className="text-center" > <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" /> <p className="text-sm text-muted-foreground" > Generating optimal pricing suggestion... </p> </div> </CardContent> </Card> return (<Card className="border-2 border-dashed border-muted-foreground/20" > <CardContent className="p-5 space-y-4" > <div className="flex items-center justify-between" > <h4 className="font-semibold" >AI Suggested Price</h4> <Badge variant="outline" className= {
  confidenceColor 
}> {
  suggestion.confidence 
}confidence </Badge> </div> <div className="bg-muted/50 rounded-md p-3 text-center" > <span className="text-2xl font-bold" > $ {
  suggestion.minRate.toFixed (0) 
}- $ {
  suggestion.maxRate.toFixed (0) 
}</span> <span className="text-sm text-muted-foreground ml-1" > {
  rateType === "hourly" ? "/hour" : "total" 
}</span> </div> <div className="flex items-start space-x-2 text-sm text-muted-foreground" > <Info className="h-4 w-4 flex-shrink-0 mt-1" /> <p> {
  suggestion.explanation 
}</p> flex items-center justify-between"> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <ThumbsUp className=" h-4 w-4 mr-2"/> Apply Suggestion </Button> </TooltipTrigger> <TooltipContent> <p>Apply this suggestion to your pricing field</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> <p className=" text-xs text-center text-muted-foreground pt-2" > Based on market data & trends. You can adjust as needed. </p> </CardContent> </Card>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/pricing/PricingSuggestionBox.tsx
=======
  );
};

export default PricingSuggestionBox;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
