<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,;
} from '@/components/ui/tooltip';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from '@/services/pricingSuggestionService';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
  rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {
    return (
<<<<<<< HEAD
      <Card className='border border-dashed border-muted'>
        <CardContent className='flex items-center justify-center p-6'>
          <div className='text-center'>
            <Loader2 className='h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4' />
            <p className='text-sm text-muted-foreground'>
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
  rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {
    return (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <Card className="border border-dashed border-muted">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Generating optimal pricing suggestion...
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (!suggestion) {
    return null;
  }

  const confidenceColor = {
<<<<<<< HEAD
<<<<<<< HEAD
    High: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-red-100 text-red-800',
  }[suggestion.confidence];

  return (
    <Card className='border-2 border-dashed border-muted-foreground/20'>
      <CardContent className='p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <h4 className='font-semibold'>AI Suggested Price</h4>
          <Badge variant='outline' className={confidenceColor}>
=======
    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],
  return (
=======
    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],
  return (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <Card className="border-2 border-dashed border-muted-foreground/20">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={confidenceColor}>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {suggestion.confidence} confidence
          </Badge>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='bg-muted/50 rounded-md p-3 text-center'>
          <span className='text-2xl font-bold'>
=======
        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

<<<<<<< HEAD
        <div className='flex items-center justify-between'>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
<<<<<<< HEAD
<<<<<<< HEAD
                  variant='default'
=======
                  variant="default"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  onClick={onApplySuggestion}
                  className="w-full"
                >
<<<<<<< HEAD
                  <ThumbsUp className='h-4 w-4 mr-2' /> Apply Suggestion
=======
                  variant="default"
                  onClick={onApplySuggestion}
                  className="w-full"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        <p className='text-xs text-center text-muted-foreground pt-2'>
=======
        
        <p className="text-xs text-center text-muted-foreground pt-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <p className="text-xs text-center text-muted-foreground pt-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
