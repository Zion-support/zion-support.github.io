:src_backup/components/listing/GeneratedContentDisplay.tsx
import { ArrowRight } from 'lucide-react'

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
interface GeneratedContent {
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
:src_backup/components/listing/GeneratedContentDisplay.tsx
<Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'>                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content && content.tags.map((tag, index) => (;
:src_backup/components/listing/GeneratedContentDisplay.tsx
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
:src/components/listing/GeneratedContentDisplay.tsx
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;",
import React from "react","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge","
import { ArrowRight } from 'lucide-react''
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {,
    min: number,
    max: number
  },
  keyPoints: string[],

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;

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
  description: string,;,
  tags: string[],;
  suggestedPrice: {;,
    min: number,;
    max: number;
  },;,
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
  content: GeneratedContent;,
  onApply: () => void;
}
:src_backup/components/listing/GeneratedContentDisplay.tsx

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {



export function GeneratedContentDisplay({ content, onApply }:,  GeneratedContentDisplayProps) {
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">"
      <CardHeader>
        <CardTitle className="text-white">Generated Content</CardTitle>"
      </CardHeader>
      <CardContent className="space-y-4">"
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>"
          <p className="text-white">{content.description}</p>"
        </div>

        <div>

        <div>

:src/components/listing/GeneratedContentDisplay.tsx

          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>"
          <div className="flex flex-wrap gap-2">"
            {content.tags.map((tag, index) => (
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">"
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number
  },
  keyPoints: string[]
}

interface GeneratedContentDisplayProps {
  content: GeneratedContent;
  onApply: () => void

  return (
    <Card className='border border-zion-blue-light bg-zion-blue-dark'>
      <CardHeader>
        <CardTitle className='text-white'>Generated Content</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Description
          </h3>
          <p className='text-white'>{content.description}</p>
        </div>
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Tags
          </h3>
          <div className='flex flex-wrap gap-2'>
            {content.tags.map((tag, index) => (
              <Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                {tag}
:src_backup/components/listing/GeneratedContentDisplay.tsx
              </Badge>;
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}

<div>
          </div>
        </div>
<div>
origin/cursor/automate-test-improve-and-merge-code-2533
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Suggested Price Range
          </h3>
          <p className='text-white'>
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
          </p>
        </div>

:src_backup/components/listing/GeneratedContentDisplay.tsx

        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
:src_backup/components/listing/GeneratedContentDisplay.tsx
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>"
          <p className="text-white">"
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>"
          <ul className="list-disc pl-5 text-white space-y-1">"
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Key Selling Points
          </h3>
          <ul className='list-disc pl-5 text-white space-y-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {content.keyPoints.map((point, index) => (
:src_backup/components/listing/GeneratedContentDisplay.tsx
            {content.keyPoints.map((point, index,) => (
              <li key={index}>{point}</li>
            ))}
:src/components/listing/GeneratedContentDisplay.tsx
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
  description: string;,
tags: string[];,
suggested_price: {,
  min: number;,
max: number;
}
key_points: string[];,
}interface GeneratedContentDisplayProps {
  content: GeneratedContent;,
  on_apply: () => void;,
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
:src_backup/components/listing/GeneratedContentDisplay.tsx
  content: GeneratedContent;
  onApply: () => void;
}

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
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
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
                {tag}
              </Badge>;
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
:src_backup/components/listing/GeneratedContentDisplay.tsx
        <Button;
          onClick={onApply}

          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white""
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />"
        <Button;
          onClick={onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
:src/components/listing/GeneratedContentDisplay.tsx
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
:src_backup/components/listing/GeneratedContentDisplay.tsx
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
:src_backup/components/listing/GeneratedContentDisplay.tsx

;
;
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'
        >
          Apply to My Listing
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </CardFooter>
    </Card>
  );
}
:src/components/listing/GeneratedContentDisplay.tsx
<Badge;
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'>                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;"
"
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;""
          <div className="flex flex-wrap gap-2">;"
</div>"
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;"
    <Card className="border border-zion-blue-light bg-zion-blue-dark">"

      <CardHeader>
        <CardTitle className="text-white">Generated Content"
      <CardContent className="space-y-4">"

        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>""
          <p className="text-white">{content.description}</p>"
        </div>

          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>""
          <div className="flex flex-wrap gap-2">"
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">"

              ;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>""
          <p className="text-white">"
</p>

          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>""
          <ul className="list-disc pl-5 text-white space-y-1">"
</ul>
              <li key={index}>{point}</li>
          </div>;
        <div>;
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
</h3>
          </h3>;
          <p className='text-white'>;
          </p>;
          <ul className='list-disc pl-5 text-white space-y-1'>            {content && content.keyPoints.map((point, index) => (        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;""
          <p className="text-white">;"
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;""
          <ul className="list-disc pl-5 text-white space-y-1">;"
              <li key={index}>{point}</li>;"
    <Card className='border border - zion - blue - light bg - zion - blue - dark'>;

      <CardHeader>;

        <CardTitle className='text - white'>Generated Content;
      <CardContent className='space - y-4'>;

          <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
          <p className='text - white'>{content.description}</p>;
          <div className='flex flex - wrap gap - 2'>;
                className='bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30';
              >                {tag}              <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">;"
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Tags</h3>;""
          <div className="flex flex - wrap gap - 2">;"
              <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">;"
)
              ))}
          <p className='text - white'>;
          <ul className='list - disc pl - 5 text - white space - y-1'>            {content.key_points.map ((point, index) => (        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Suggested Price Range</h3>;""
          <p className="text - white">;"
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Key Selling Points</h3>;""
          <ul className="list - disc pl - 5 text - white space - y-1">;"
</ul>)
              <li key={index}>{point}</li>))}
          </ul>;
      <CardFooter>;
          <ArrowRight className="ml-2 h-4 w-4" />"

          <ArrowRight className="ml-2 h-4 w-4" />;"

        <Button;
          on_click={on_apply}"
          className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white';
        >;

          <ArrowRight className='ml - 2 h - 4 w - 4' />        ;

    );
          <ArrowRight className="ml - 2 h - 4 w - 4" />;"

    );"
pr-12325
