<<<<<<< HEAD
<<<<<<< HEAD

              <Badge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'>                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content && content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
interface GeneratedContent {
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface GeneratedContent {
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <div>


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
                {tag}
<<<<<<< HEAD



              </Badge>;
            ))}

        


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
ursor/fix-website-loading-errors-and-merge-6662
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
        
        <div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
            {content.tags.map((tag, index) => (
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
                {tag}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Badge>
            ))}
          </div>
        </div>
              </Badge>;
            ))}
<<<<<<< HEAD
          </div>
        </div>
        
=======



              </Badge>;
            ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
<<<<<<< HEAD
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Key Selling Points
          </h3>
          <ul className='list-disc pl-5 text-white space-y-1'>            {content.keyPoints.map((point, index) => (        <div>
=======
=======
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Suggested Price Range
          </h3>
          <p className='text-white'>
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        <div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
            {content.keyPoints.map((point, index,) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {content.keyPoints.map((point, index,) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li key={index}>{point}</li>
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


            ))}
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
<<<<<<< HEAD
<<<<<<< HEAD
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
}
}
        
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button;
          onClick={onApply}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD
  );
}

        <Button;
          on_click={on_apply}
          className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white';
        >;
          Apply to My Listing;
          <ArrowRight className='ml - 2 h - 4 w - 4' />        </Button>;
      </CardFooter>;
    </Card>);
}          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover: from - zion - cyan - light hover:to - zion - cyan text - white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml - 2 h - 4 w - 4" />;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
