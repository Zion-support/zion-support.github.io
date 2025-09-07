
import React from "react";""
import { Button } from "@/components/ui/button";""
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";""
import { Card, CardContent } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Loader2, Info, ThumbsUp } from "lucide-react";""
import { PricingSuggestion } from "@/services/pricingSuggestionService";"
;
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null;,;
  isLoading: boolean;,;
  onApplySuggestion: () => void;,;"
  rateType:"hourly" | "fixed";"
}
export const PricingSuggestionBox:React.FC<PricingSuggestionBoxProps> = ({;
"
      <Card className="border border-dashed border-muted">;"
        <CardContent className="flex items-center justify-center p-6">;"
          <div className="text-center">;"
</div>"
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;"
</Loader2>"
            <p className="text-sm text-muted-foreground">;"
</p>
            </p>;
          </div>;
      ;"
    <Card className="border-2 border-dashed border-muted-foreground/20">;"
      <CardContent className="p-5 space-y-4">;"
        <div className="flex items-center justify-between">;"
          <h4 className="font-semibold">AI Suggested Price</h4>;""
          <Badge variant="outline" className={confidenceColor}>;"

        </div>;"
        <div className="bg-muted/50 rounded-md p-3 text-center">;"
          <span className="text-2xl font-bold">;"
</span>
          </span>;"
          <span className="text-sm text-muted-foreground ml-1">;"
          </span>;
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;"
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;"

          <p>{suggestion.explanation}</p>;
</div>
          <TooltipProvider>;

            <Tooltip>;

              <TooltipTrigger asChild>;

                <Button;"
                  variant="default";"
                  onClick={onApplySuggestion}"
                  className="w-full";"
                >;
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;"

              <TooltipContent>;

                <p>Apply this suggestion to your pricing field</p>;
        <p className="text-xs text-center text-muted-foreground pt-2">;"
    ;)"