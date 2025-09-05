
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService",
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
  rateType: "hourly" | "fixed"
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from &quot;@/components/ui/tooltip&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from &quot;@/services/pricingSuggestionService&quot;;
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface PricingSuggestionBoxProps {_suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
<<<<<<< HEAD
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
  rateType: "hourly" | "fixed";}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = (_{_suggestion, _isLoading, _onApplySuggestion, _rateType}) => {_if (isLoading) {
    return (
      <Card className=&quot;border border-dashed border-muted&quot;>
        <CardContent className=&quot;flex items-center justify-center p-6&quot;>
          <div className=&quot;text-center&quot;>
            <Loader2 className=&quot;h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4&quot; />
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Generating optimal pricing suggestion...
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }

  if (!suggestion) {
    return null
  }

  const confidenceColor = {
<<<<<<< HEAD
    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],
=======
    High: &quot;bg-green-100 text-green-800&quot;,
    Medium: &quot;bg-yellow-100 text-yellow-800&quot;,
    Low: &quot;bg-red-100 text-red-800&quot;}[suggestion.confidence];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card className=&quot;border-2 border-dashed border-muted-foreground/20&quot;>
      <CardContent className=&quot;p-5 space-y-4&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h4 className=&quot;font-semibold&quot;>AI Suggested Price</h4>
          <Badge variant=&quot;outline&quot; className={confidenceColor}>
            {suggestion.confidence} confidence
          </Badge>
        </div>

        <div className=&quot;bg-muted/50 rounded-md p-3 text-center&quot;>
          <span className=&quot;text-2xl font-bold&quot;>
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
          <span className=&quot;text-sm text-muted-foreground ml-1&quot;>
            {rateType === &quot;hourly&quot; ? &quot;/hour&quot; : &quot; total&quot;}
          </span>
        </div>

        <div className=&quot;flex items-start space-x-2 text-sm text-muted-foreground&quot;>
          <Info className=&quot;h-4 w-4 flex-shrink-0 mt-1&quot; />
          <p>{suggestion.explanation}</p>
=======
    );}

  if (!suggestion) {_return null;}

  const _confidenceColor = {_High: "bg-green-100 text-green-800", _Medium: "bg-yellow-100 text-yellow-800", _Low: "bg-red-100 text-red-800"}[suggestion.confidence];

  return (
    <Card className="border-2 border-dashed border-muted-foreground/20">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={_confidenceColor}>
            {_suggestion.confidence} confidence
          </Badge>
        </div>

        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${_suggestion.minRate.toFixed(0)} - ${_suggestion.maxRate.toFixed(0)}
          </span>
          <span className="text-sm text-muted-foreground ml-1">
            {_rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>

        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{_suggestion.explanation}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;flex items-center justify-between&quot;>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
<<<<<<< HEAD
                  variant=&quot;default&quot;
                  onClick={onApplySuggestion}
                  className=&quot;w-full&quot;
=======
                  variant="default"
                  onClick={_onApplySuggestion}
                  className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <ThumbsUp className=&quot;h-4 w-4 mr-2&quot; /> Apply Suggestion
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <p className=&quot;text-xs text-center text-muted-foreground pt-2&quot;>
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
  )
},
