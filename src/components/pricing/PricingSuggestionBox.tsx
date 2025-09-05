
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from &quot;@/components/ui/tooltip&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from &quot;@/services/pricingSuggestionService&quot;;

interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
  rateType: &quot;hourly&quot; | &quot;fixed&quot;;
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion,
  isLoading,
  onApplySuggestion,
  rateType}) => {
  if (isLoading) {
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
    );
  }

  if (!suggestion) {
    return null;
  }

  const confidenceColor = {
    High: &quot;bg-green-100 text-green-800&quot;,
    Medium: &quot;bg-yellow-100 text-yellow-800&quot;,
    Low: &quot;bg-red-100 text-red-800&quot;}[suggestion.confidence];

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
        </div>

        <div className=&quot;flex items-center justify-between&quot;>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant=&quot;default&quot;
                  onClick={onApplySuggestion}
                  className=&quot;w-full&quot;
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
  );
};
