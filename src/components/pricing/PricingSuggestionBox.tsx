
import React from "react";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
  rateType: "hourly" | "fixed",
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion,
  isLoading,
  onApplySuggestion,
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
  }

  if (!suggestion) {
    return null
  }

  const confidenceColor = {;
    High: "bg-green-100 text-green-800";
    Medium: "bg-yellow-100 text-yellow-800";
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],

  return (
    <Card className = $2;