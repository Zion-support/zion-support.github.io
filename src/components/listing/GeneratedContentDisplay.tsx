<<<<<<< HEAD

<<<<<<< HEAD
import { ArrowRight } from 'lucide-react'
=======

              <Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'>                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content && content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;


import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge";
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ArrowRight } from 'lucide-react'
<<<<<<< HEAD
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
interface GeneratedContent {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  description: string
tags: string[]
suggestedPrice: {
  min: number
max: number
}
keyPoints: string[]
}interface GeneratedContentDisplayProps {
  content: GeneratedContent

  onApply: () => void
export function GeneratedContentDisplay({
  content
  onApply
}: GeneratedContentDisplayProps) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",

interface GeneratedContent {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  },;
  keyPoints: string[];
}
;
interface GeneratedContentDisplayProps {;
  content: GeneratedContent;
  onApply: () => void;
}

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white">Generated Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
          <p className="text-white">{content.description}</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Tags
          </h3>
          <div className='flex flex-wrap gap-2'>
            {content.tags.map((tag, index) => (
              <Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'
              >                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
>>>>>>>           <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Tags
          </h3>
          <div className='flex flex-wrap gap-2'>
            {content.tags.map((tag, index) => (
              <Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'
              >                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
=======
        
        <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
>>>>>>>           <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
                {tag}
<<<<<<< HEAD
<<<<<<< HEAD

        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Badge>
            ))}
          </div>
        </div>
<<<<<<< HEAD
>>>>>>>         <div>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
              </Badge>;
            ))}
          </div>
        </div>
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
<<<<<<< HEAD

        
        <div>

>>>>>>>           <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Key Selling Points
          </h3>
          <ul className='list-disc pl-5 text-white space-y-1'>            {content.keyPoints.map((point, index) => (        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
<<<<<<< HEAD
          </div>;
        </div>;

        <div>;
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
            Suggested Price Range;
          </h3>;
          <p className='text-white'>;
            ${content && content.suggestedPrice.min && min.toFixed(2)} - $;
            {content && content.suggestedPrice.max && max.toFixed(2)}
          </p>;
        </div>;

        <div>;
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
            Key Selling Points;
          </h3>;
          <ul className='list-disc pl-5 text-white space-y-1'>            {content && content.keyPoints.map((point, index) => (        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
          <p className="text-white">;
            ${content && content.suggestedPrice.min && min.toFixed(2)} - ${content && content.suggestedPrice.max && max.toFixed(2)}
          </p>;
        </div>;

        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
          <ul className="list-disc pl-5 text-white space-y-1">;
            {content && content.keyPoints.map((point, index) => (;
            {content && content.keyPoints.map((point, index,) => (;
              <li key={index}>{point}</li>;


>>>>>>> >>>>>>>             ))}
import React from 'react';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
interface GeneratedContent {
  description: string;
tags: string[];
suggested_price: {
  min: number;
max: number;
}
key_points: string[];
}interface GeneratedContentDisplayProps {
  content: GeneratedContent;
  on_apply: () => void;
export /**
 * GeneratedContentDisplay - Function description
 */
function GeneratedContentDisplay() {
  return (
    <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
      <CardHeader>;
        <CardTitle className='text - white'>Generated Content</CardTitle>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        <div>;
          <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
            Description;
          </h3>;
          <p className='text - white'>{content.description}</p>;
        </div>;
        <div>;
          <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
            Tags;
          </h3>;
          <div className='flex flex - wrap gap - 2'>;
            {content.tags.map ((tag, index) => (
              <Badge;
                key={index}
                className='bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30';
              >                {tag}              <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Tags</h3>;
          <div className="flex flex - wrap gap - 2">;
            {content.tags.map ((tag, index) => (
              <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">;
                {tag}
              </Badge>))}
          </div>;
        </div>;
        <div>;
          <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
            Suggested Price Range;
          </h3>;
          <p className='text - white'>;
            ${content.suggested_price.min.to_fixed (2)} - $;
            {content.suggested_price.max.to_fixed (2)}
          </p>;
        </div>;
        <div>;
          <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
            Key Selling Points;
          </h3>;
          <ul className='list - disc pl - 5 text - white space - y-1'>            {content.key_points.map ((point, index) => (        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Suggested Price Range</h3>;
          <p className="text - white">;
            ${content.suggested_price.min.to_fixed (2)} - ${content.suggested_price.max.to_fixed (2)}
          </p>;
        </div>;
        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Key Selling Points</h3>;
          <ul className="list - disc pl - 5 text - white space - y-1">;
            {content.key_points.map ((point, index) => (
            {content.key_points.map ((point, index, ) => (
              <li key={index}>{point}</li>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
          className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'
        >
          Apply to My Listing
          <ArrowRight className='ml-2 h-4 w-4' />        </Button>
      </CardFooter>
    </Card>
  )
}          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
      </CardFooter>
    </Card>;
  );
};
}
<<<<<<< HEAD
=======
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD


=======
        <Button;
          onClick={onApply}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD
>>>>>>>   );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
