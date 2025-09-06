<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


import { ArrowRight } from "lucide-react";

<<<<<<< HEAD
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/card";

interface GeneratedContent {;
  description: string;
  tags: string[];
  suggestedPrice: {;
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { ArrowRight  } from './lucide-react';
import {

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Card,
  CardContent,
  CardFooter,
  CardHeader,
<<<<<<< HEAD

  key_points: string[];

=======
  CardTitle,
} from '@/components / ui / card';
interface GeneratedContent {
  description: string;
  tags: string[];
  suggested_price: {
    min: number;
  key_points: string[];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
interface GeneratedContentDisplayProps {
=======
interface GeneratedContentDisplayProps {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  CardTitle,;

} from "@/components/ui/card";

<<<<<<< HEAD
=======
  CardTitle,;
} from "@/components/ui/card";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",


<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
<<<<<<< HEAD

=======
    min: number;

    max: number;
  }
  keyPoints: string[];

}
interface GeneratedContentDisplayProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    min: number,
    max: number
  },
  keyPoints: string[]
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight } from "lucide-react",;
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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content: GeneratedContent;



export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {


=======
  content: GeneratedContent;
  onApply: () => void
}
export function GeneratedContentDisplay({
  content
  onApply
}: GeneratedContentDisplayProps) {

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white">Generated Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
<<<<<<< HEAD
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Description
          </h3>
          <p className="text-white">{content.description}</p>
        </div>

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (


<<<<<<< HEAD
=======
  content: GeneratedContent;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function GeneratedContentDisplay(): any ({;
  content,;
  onApply,;
}: GeneratedContentDisplayProps) {;
  return (
<<<<<<< HEAD
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ArrowRight } from "lucide-react",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
;
interface GeneratedContent {;
  description:string,;
  tags:string[],;
  suggestedPrice:{;
    min:number,;
    max:number;
  },;
  keyPoints:string[];}
;
interface GeneratedContentDisplayProps {;
  content:GeneratedContent,;
  onApply:() => void;
}
;
export function GeneratedContentDisplay({ content, onApply } GeneratedContentDisplayProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white">Generated Content</CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div>;
<<<<<<< HEAD
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">;
            Description;
          </h3>;
          <p className="text-white">{content && content.description}</p>;
        </div>;

        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">;
            Tags;
          </h3>;
          <div className="flex flex-wrap gap-2">;
            {content && content.tags.map((tag, index) => (;

              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
=======

              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {tag}
              </Badge>;
            ))}
=======
              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        


        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Suggested Price Range
          </h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>


        


        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Key Selling Points
          </h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
<<<<<<< HEAD
=======
          </div>;
        </div>;

        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">;
            Suggested Price Range;
          </h3>;
          <p className="text-white">;
            ${content && content.suggestedPrice.min && min.toFixed(2)} - $;
            {content && content.suggestedPrice.max && max.toFixed(2)}
          </p>;
        </div>;

        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">;
            Key Selling Points;
          </h3>;
          <ul className="list-disc pl-5 text-white space-y-1">;
            {content && content.keyPoints.map((point, index) => (;
              <li key={index}>{point}</li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ))}
=======
  on_apply: () => void;
}
export /**
 * GeneratedContentDisplay - Function description
 */
function GeneratedContentDisplay() {
  return (
    <Card className="border border - zion - blue - light bg - zion - blue - dark">;
      <CardHeader>;
        <CardTitle className="text - white">Generated Content</CardTitle>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">;
            Description;
          </h3>;
          <p className="text - white">{content.description}</p>;
        </div>;
        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">;
            Tags;
          </h3>;
          <div className="flex flex - wrap gap - 2">;
            {content.tags.map ((tag, index) => (
              <Badge;
                key={index}
                className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30";
              >;
=======
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
          <p className="text-white">{content.description}</p>;
        </div>;
        ;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
<<<<<<< HEAD
        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">;
            Suggested Price Range;
          </h3>;
          <p className="text - white">;
            ${content.suggested_price.min.to_fixed (2)} - $;
            {content.suggested_price.max.to_fixed (2)}
          </p>;
        </div>;
        <div>;
          <h3 className="text - sm font - medium text - zion - slate - light mb - 2">;
            Key Selling Points;
          </h3>;
          <ul className="list - disc pl - 5 text - white space - y-1">;
            {content.key_points.map ((point, index) => (
              <li key={index}>{point}</li>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        ;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
          <p className="text-white">;
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>;
        </div>;
        ;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
          <ul className="list-disc pl-5 text-white space-y-1">;
            {content.keyPoints.map((point, index) => (;
              <li key={index}>{point}</li>;
            ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD

=======
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
          <p className="text-white">{content.description}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30"
              >
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
                {tag}
              </Badge>
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
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
<<<<<<< HEAD

=======
    </Card>
  );
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </Card>


    </Card>;
  );
<<<<<<< HEAD
=======
        <Button;
          on_click={on_apply}
          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover: from - zion - cyan - light hover:to - zion - cyan text - white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml - 2 h - 4 w - 4" />;
        </Button>;
      </CardFooter>;
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
        <Button;
}
          onClick={onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;
    </Card>;
  );}
 interface GeneratedContent {
  description: string;
tags: string[];
suggestedPrice: {
  min: number;
max: number 
};
keyPoints: string[] 
}interface GeneratedContentDisplayProps {
  content: GeneratedContent;
onApply: () => void 
}export function GeneratedContentDisplay ({
  content, onApply 
}: GeneratedContentDisplayProps) {
  return (<Card className="border border-zion-blue-light bg-zion-blue-dark" > text-white">Generated Content</CardTitle> </CardHeader> <CardContent className=" space-y-4"> <div> <h3 className=" text-sm font-medium text-zion-slate-light mb-2">Description</h3> <p className=" text-white"> {
  content.description 
}</p> </div> <div> </Badge>) ) 
}</div> </div> <div> </p> </div> <div>) ) 
}</ul> </div> </CardContent> <CardFooter> <Button ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
