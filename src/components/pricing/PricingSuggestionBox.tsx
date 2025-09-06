

<<<<<<< HEAD
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;

=======
import React from 'react';
import { Button } from '@/components/ui/button';
import {;
  TooltipProvider,;
  Tooltip,;
  TooltipTrigger,;
  TooltipContent,;
} from '@/components/ui/tooltip';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from '@/services/pricingSuggestionService';
interface PricingSuggestionBoxProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
<<<<<<< HEAD

  rateType: "hourly" | "fixed"
}

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({

=======
>>>>>>>   rateType: "hourly" | "fixed"
}

xport const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({

  suggestion
  isLoading
  onApplySuggestion
  rateType
}) => {  if (isLoading) {
  rateType}) => {
  if (isLoading) {
  rateType,
}) => {  if (isLoading) {
>>>>>>>     return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return (
>>>>>>>       <Card className="border border-dashed border-muted">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
<<<<<<< HEAD

=======
>>>>>>>             </p>
          </div>
        </CardContent>
      </Card>
    ) }    )
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={confidenceColor}>
          </Badge>
        </div>

          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>

=======

    )

>>>>>>>   }
  if (!suggestion) {
    return null
  }
  const confidenceColor = {
    High: 'bg-green-100 text-green-800'
    Medium: 'bg-yellow-100 text-yellow-800'
    Low: 'bg-red-100 text-red-800'
  }[suggestion.confidence]
  return (
    <Card className='border-2 border-dashed border-muted-foreground/20'>
      <CardContent className='p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <h4 className='font-semibold'>AI Suggested Price</h4>
          <Badge variant='outline' className={confidenceColor}>            {suggestion.confidence} confidence
          </Badge>
        </div>
        <div className='bg-muted/50 rounded-md p-3 text-center'>
          <span className='text-2xl font-bold'>    <Card className="border-2 border-dashed border-muted-foreground/20">
>>>>>>>       <CardContent className="p-5 space-y-4">
ursor/fix-website-loading-errors-and-merge-6662
      <CardContent className="p-5 space-y-4">
>>>>>>>         <div className="flex items-center justify-between">
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={confidenceColor}>

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion,;
  isLoading,;
  onApplySuggestion,;
  rateType,;
}) => {  if (isLoading) {;
    return (

      <Card className='border border-dashed border-muted'>;
        <CardContent className='flex items-center justify-center p-6'>;
          <div className='text-center'>;
            <Loader2 className='h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4' />;
            <p className='text-sm text-muted-foreground'>              Generating optimal pricing suggestion...      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );  }    );
  }

  if (!suggestion) {;
    return null;
  }

  const confidenceColor = {;
    High: 'bg-green-100 text-green-800',;
    Medium: 'bg-yellow-100 text-yellow-800',;
    Low: 'bg-red-100 text-red-800',;
  }[suggestion && suggestion.confidence];

  return (
    <Card className='border-2 border-dashed border-muted-foreground/20'>;
      <CardContent className='p-5 space-y-4'>;
        <div className='flex items-center justify-between'>;
          <h4 className='font-semibold'>AI Suggested Price</h4>;
          <Badge variant='outline' className={confidenceColor}>            {suggestion && suggestion.confidence} confidence;
          </Badge>;
        </div>;

        <div className='bg-muted/50 rounded-md p-3 text-center'>;
          <span className='text-2xl font-bold'>    <Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;
          </Badge>;
        </div>;

        <div className='bg-muted/50 rounded-md p-3 text-center'>;
          <span className='text-2xl font-bold'>;
            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
          </span>;
          <span className='text-sm text-muted-foreground ml-1'>;
            {rateType === 'hourly' ? '/hour' : ' total'}
          </span>;
        </div>;

        <div className='flex items-start space-x-2 text-sm text-muted-foreground'>;
          <Info className='h-4 w-4 flex-shrink-0 mt-1' />;
          <p>{suggestion && suggestion.explanation}</p>;
        </div>;

        <div className='flex items-center justify-between'>          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Button
                  variant='default'            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {suggestion.confidence} confidence
          </Badge>
        </div>
        <div className='bg-muted/50 rounded-md p-3 text-center'>
          <span className='text-2xl font-bold'>
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
          <span className='text-sm text-muted-foreground ml-1'>
            {rateType === 'hourly' ? '/hour' : ' total'}
          </span>
        </div>
        <div className='flex items-start space-x-2 text-sm text-muted-foreground'>
          <Info className='h-4 w-4 flex-shrink-0 mt-1' />
          <p>{suggestion.explanation}</p>
        </div>
        <div className='flex items-center justify-between'>          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='default'            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
>>>>>>>           <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>
>>>>>>>         <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{suggestion.explanation}</p>
        </div>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
ursor/fix-website-loading-errors-and-merge-6662

        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          <span className="text-sm text-muted-foreground ml-1">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {rateType === "hourly" ? "/hour" : " total"}





>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{suggestion.explanation}</p>
        </div>

<<<<<<< HEAD
=======
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

>>>>>>>                 <Button

                  variant="default"

                  onClick={onApplySuggestion}
                  className='w-full'                >
                  <ThumbsUp className='h-4 w-4 mr-2' /> Apply Suggestion                </Button>
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
                  onClick={onApplySuggestion}
                  className="w-full"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
                </Button>
>>>>>>>               </TooltipTrigger>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </TooltipTrigger>
>>>>>>>               <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
<<<<<<< HEAD

        </p>
      </CardContent>
    </Card>
  )
=======
        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.
>>>>>>>         </p>
      </CardContent>
    </Card>
  )
ursor/fix-website-loading-errors-and-merge-6662
        </p>
      </CardContent>
    </Card>
  )

        

        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
>>>>>>>   )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

},
;
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion.confidence];
  return (;
    <Card className="border-2 border-dashed border-muted-foreground/20">;
      <CardContent className="p-5 space-y-4">;
        <div className="flex items-center justify-between">;
          <h4 className="font-semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidenceColor}>;
            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {rateType === "hourly" ? "/hour" : " total"}
          </span>;
        </div>;
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">;
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className="flex items-center justify-between">;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <Button;
                  variant="default";
                  onClick={onApplySuggestion}

                  className="w-full";
                >;
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Apply this suggestion to your pricing field</p>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;

        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  );
};
"        ;
        <p className="text-xs text-center text-muted-foreground pt-2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
