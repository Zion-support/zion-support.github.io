<<<<<<< HEAD


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
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  TooltipProvider
  Tooltip
  TooltipTrigger
  TooltipContent
} from '@/components/ui/tooltip'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
<<<<<<< HEAD
=======
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from '@/services/pricingSuggestionService'
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void
  rateType: 'hourly' | 'fixed'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService";
interface PricingSuggestionBoxProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
  rateType: "hourly" | "fixed"
}


      <Card className='border border-dashed border-muted'>
        <CardContent className='flex items-center justify-center p-6'>
          <div className='text-center'>
            <Loader2 className='h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4' />
            <p className='text-sm text-muted-foreground'>              Generating optimal pricing suggestion...      <Card className="border border-dashed border-muted">
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {
=======



export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({

  suggestion,
  isLoading,
  onApplySuggestion,
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  rateType}) => {
  if (isLoading) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  rateType,
}) => {  if (isLoading) {
=======
  rateType}) => {
  if (isLoading) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    return (
      <Card className="border border-dashed border-muted">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">

              Generating optimal pricing suggestion...
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </p>
          </div>
        </CardContent>
      </Card>

    )

  }
  if (!suggestion) {
    return null
  }
  const confidenceColor = {

=======

    )
import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null,;
  isLoading: boolean,;
  onApplySuggestion: () => void,;
  rateType: "hourly" | "fixed";
}
;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion,;
  isLoading,;
  onApplySuggestion,;
  rateType}) => {;
  if (isLoading) {;
    return (;
      <Card className="border border-dashed border-muted">;
        <CardContent className="flex items-center justify-center p-6">;
          <div className="text-center">;
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />;
            <p className="text-sm text-muted-foreground">;
              Generating optimal pricing suggestion...;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
;
  if (!suggestion) {;
    return null;
  }

  const confidenceColor = {

    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],
  return (
    <Card className="border-2 border-dashed border-muted-foreground/20">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
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
=======
            {suggestion.confidence} confidence
          </Badge>
        </div>
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <span className="text-sm text-muted-foreground ml-1">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {rateType === "hourly" ? "/hour" : " total"}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{suggestion.explanation}</p>
        </div>

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



        <div className="flex items-center justify-between">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>


        
        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        </p>
      </CardContent>
    </Card>
  )

        

        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  )

=======

  );
};
"  );
};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import React from 'react';
import { Button } from '@/components / ui / button';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components / ui / tooltip';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Loader2, Info, ThumbsUp } from 'lucide-react';
import { PricingSuggestion } from '@/services / pricingSuggestionService';
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null;
  is_loading: boolean;
  onApplySuggestion: () => void;
  rate_type: 'hourly' | 'fixed';
export const PricingSuggestionBox: React.FC < PricingSuggestionBoxProps> = ({
  suggestion,
  is_loading,
  onApplySuggestion,
  rate_type,
}) => {  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='border border - dashed border - muted'>;
        <CardContent className='flex items - center justify - center p - 6'>;
          <div className='text - center'>;
            <Loader2 className='h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4' />;
            <p className='text - sm text - muted - foreground'>              Generating optimal pricing suggestion...      <Card className="border border - dashed border - muted">;
        <CardContent className="flex items - center justify - center p - 6">;
          <div className="text - center">;
            <Loader2 className="h - 10 w - 10 animate - spin text - muted - foreground mx - auto mb - 4" />;
            <p className="text - sm text - muted - foreground">;
            </p>;
          </div>;
        </CardContent>;
      </Card>) }    );
  }
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  const confidence_color = {
    High: 'bg - green - 100 text - green - 800',
    Medium: 'bg - yellow - 100 text - yellow - 800',
    Low: 'bg - red - 100 text - red - 800',
  }[suggestion.confidence];
  return (
    <Card className='border - 2 border - dashed border - muted - foreground / 20'>;
      <CardContent className='p - 5 space - y-4'>;
        <div className='flex items - center justify - between'>;
          <h4 className='font - semibold'>AI Suggested Price</h4>;
          <Badge variant='outline' className={confidence_color}>            {suggestion.confidence} confidence;
          </Badge>;
        </div>;
        <div className='bg - muted / 50 rounded - md p - 3 text - center'>;
          <span className='text - 2xl font - bold'>    <Card className="border - 2 border - dashed border - muted - foreground / 20">;
      <CardContent className="p - 5 space - y-4">;
        <div className="flex items - center justify - between">;
          <h4 className="font - semibold">AI Suggested Price</h4>;
          <Badge variant="outline" className={confidence_color}>;
          </Badge>;
        </div>;
        <div className='bg - muted / 50 rounded - md p - 3 text - center'>;
          <span className='text - 2xl font - bold'>;
            ${suggestion.min_rate.to_fixed (0)} - ${suggestion.max_rate.to_fixed (0)}
          </span>;
          <span className='text - sm text - muted - foreground ml - 1'>;
            {rate_type === 'hourly' ? '/hour' : ' total'}
          </span>;
        </div>;
        <div className='flex items - start space - x-2 text - sm text - muted - foreground'>;
          <Info className='h - 4 w - 4 flex - shrink - 0 mt - 1' />;
          <p>{suggestion.explanation}</p>;
        </div>;
        <div className='flex items - center justify - between'>          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <Button;
                  variant='default'            ${suggestion.min_rate.to_fixed (0)} - ${suggestion.max_rate.to_fixed (0)}
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
                  variant='default';
                  on_click={onApplySuggestion}
                  className='w - full'                >;
                  <ThumbsUp className='h - 4 w - 4 mr - 2' /> Apply Suggestion                </Button>;
                  <ThumbsUp className="h - 4 w - 4 mr - 2" /> Apply Suggestion;
                  on_click={onApplySuggestion}
                  className="w - full";
                >;
                  <ThumbsUp className="h - 4 w - 4 mr - 2" /> Apply Suggestion;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p > Apply this suggestion to your pricing field</p>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </div>;
        <p className='text - xs text - center text - muted - foreground pt - 2'>          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
";
        <p className="text - xs text - center text - muted - foreground pt - 2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>);
}
"  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
