<<<<<<< HEAD
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
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from '@/services/pricingSuggestionService'
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void
  rateType: 'hourly' | 'fixed'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
  suggestion: PricingSuggestion | null;
  isLoading: boolean;
  onApplySuggestion: () => void;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Button } from "@/components/ui/button",
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Loader2, Info, ThumbsUp } from 'lucide-react'
import { PricingSuggestion } from "@/services/pricingSuggestionService",
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  rateType: "hourly" | "fixed"
}


      <Card className='border border-dashed border-muted'>
        <CardContent className='flex items-center justify-center p-6'>
          <div className='text-center'>
            <Loader2 className='h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4' />
            <p className='text-sm text-muted-foreground'>              Generating optimal pricing suggestion...      <Card className="border border-dashed border-muted">

import React from "react";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Info, ThumbsUp } from 'lucide-react'
<<<<<<< HEAD
import { PricingSuggestion } from "@/services/pricingSuggestionService",
=======
import { PricingSuggestion } from "@/services/pricingSuggestionService";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PricingSuggestionBoxProps {
  suggestion: PricingSuggestion | null,
  isLoading: boolean,
  onApplySuggestion: () => void,
<<<<<<< HEAD
}
=======
  rateType: "hourly" | "fixed"
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  suggestion;
  isLoading;
  onApplySuggestion;
  rateType}) => {
  if (isLoading) {

<<<<<<< HEAD
xport const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  rateType: "hourly" | "fixed"
}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({

  suggestion
  isLoading
  onApplySuggestion
  rateType
}) => {  if (isLoading) {
  suggestion,
  isLoading,
  onApplySuggestion,

    return (
      <Card className="border border-dashed border-muted">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Generating optimal pricing suggestion...
<<<<<<< HEAD
<<<<<<< HEAD
              Generating optimal pricing suggestion...
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

    )

<<<<<<< HEAD
    ) }    )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    ) }    )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  if (!suggestion) {
    return null
  }
  const confidenceColor = {


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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    High: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800"}[suggestion.confidence],

  return (
    <Card className="border-2 border-dashed border-muted-foreground/20">



      <CardContent className="p-5 space-y-4">
<<<<<<< HEAD
          <h4 className="font-semibold">AI Suggested Price</h4>
          <Badge variant="outline" className={confidenceColor}>
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
                <Button
                  variant='default'            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
          </span>;
          <span className="text-sm text-muted-foreground ml-1">;
            {suggestion.confidence} confidence
          </Badge>
        </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>
<<<<<<< HEAD
          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}
          </span>
        </div>
<<<<<<< HEAD
=======



          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-1" />
          <p>{suggestion.explanation}</p>
        </div>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        <div className="bg-muted/50 rounded-md p-3 text-center">
          <span className="text-2xl font-bold">
            ${suggestion.minRate.toFixed(0)} - ${suggestion.maxRate.toFixed(0)}
          </span>



          <span className="text-sm text-muted-foreground ml-1">
            {rateType === "hourly" ? "/hour" : " total"}





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


                  variant="default"

                <Button
                  variant='default'
=======
                <Button

                  variant="default"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={onApplySuggestion}
                  className='w-full'                >
                  <ThumbsUp className='h-4 w-4 mr-2' /> Apply Suggestion                </Button>
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
                  onClick={onApplySuggestion}
                  className="w-full"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" /> Apply Suggestion
                </Button>

        <div className="flex items-center justify-between">


              </TooltipTrigger>
<<<<<<< HEAD
=======
              <TooltipContent>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <p>Apply this suggestion to your pricing field</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.


<<<<<<< HEAD
<<<<<<< HEAD
        </p>
      </CardContent>
    </Card>
  )
        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.
        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.
      </CardContent>
    </Card>
  )
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </p>
      </CardContent>
    </Card>
  )

<<<<<<< HEAD
        <p className='text-xs text-center text-muted-foreground pt-2'>          Based on market data & trends. You can adjust as needed.
        
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  )

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );
};
"  );
};

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

<<<<<<< HEAD
<<<<<<< HEAD
  )
}
"
        <p className="text-xs text-center text-muted-foreground pt-2">
          Based on market data & trends. You can adjust as needed.
        </p>
      </CardContent>
    </Card>
  )
}
"  )
}

  );
};
"  );
};
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <p className="text-xs text-center text-muted-foreground pt-2">;
          Based on market data & trends. You can adjust as needed.;
        </p>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};

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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
