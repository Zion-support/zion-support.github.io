:src_backup/components/listing/GeneratedContentDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
<Badge
                key={index}
                className='bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'>                {tag}              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content && content.tags.map((tag, index) => (;
:src_backup/components/listing/GeneratedContentDisplay.tsx
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
:src/components/listing/GeneratedContentDisplay.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx

interface GeneratedContent {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/GeneratedContentDisplay.tsx
=======
export function GeneratedContentDisplay({ content, onApply }:,  GeneratedContentDisplayProps) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
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
=======

        <div>

:src/components/listing/GeneratedContentDisplay.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/GeneratedContentDisplay.tsx
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
=======
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>"
          <div className="flex flex-wrap gap-2">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              </Badge>;
            ))}
<<<<<<< HEAD
          </div>
        </div>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <div>
<<<<<<< HEAD
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
:src_backup/components/listing/GeneratedContentDisplay.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
          <ul className="list-disc pl-5 text-white space-y-1">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/GeneratedContentDisplay.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Key Selling Points
          </h3>
          <ul className='list-disc pl-5 text-white space-y-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {content.keyPoints.map((point, index) => (
:src_backup/components/listing/GeneratedContentDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            {content.keyPoints.map((point, index,) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <li key={index}>{point}</li>
            ))}
:src/components/listing/GeneratedContentDisplay.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
:src_backup/components/listing/GeneratedContentDisplay.tsx
<<<<<<< HEAD
        <Button;
          onClick={onApply}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/GeneratedContentDisplay.tsx
=======
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white""
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />"
        <Button;
          onClick={onApply}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
:src/components/listing/GeneratedContentDisplay.tsx
<<<<<<< HEAD
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
<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/GeneratedContentDisplay.tsx
