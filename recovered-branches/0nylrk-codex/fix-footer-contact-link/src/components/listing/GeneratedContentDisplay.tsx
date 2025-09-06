<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

<<<<<<< HEAD
import { ArrowRight } from "lucide-react";

import {

} from "@/components/ui/card";

=======

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


import { ArrowRight } from "lucide-react";

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
} from "@/components/ui/card";
interface GeneratedContent {;
  description: string;
  tags: string[];
  suggestedPrice: {;
import React from './react';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { ArrowRight  } from './lucide-react';
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Card,
  CardContent,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

  key_points: string[];

========
  CardTitle,
} from '@/components / ui / card';
interface GeneratedContent {
  description: string;
  tags: string[];
  suggested_price: {
    min: number;
  key_points: string[];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
}
interface GeneratedContentDisplayProps {
interface GeneratedContentDisplayProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  CardTitle,;

} from "@/components/ui/card";

=======
  CardTitle,;
} from "@/components/ui/card";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  content: GeneratedContent;
  onApply: () => void
}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    min: number;

    max: number;
  }
  keyPoints: string[];

}
interface GeneratedContentDisplayProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content: GeneratedContent;



export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  content: GeneratedContent;
  onApply: () => void
}
export function GeneratedContentDisplay({
  content
  onApply
}: GeneratedContentDisplayProps) {

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (

<<<<<<< HEAD
=======

========
  content: GeneratedContent;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
export function GeneratedContentDisplay(): any ({;
  content,;
  onApply,;
}: GeneratedContentDisplayProps) {;
  return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
=======
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {tag}
              </Badge>;
            ))}
<<<<<<< HEAD
          </div>
        </div>

=======


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Suggested Price Range
          </h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Key Selling Points
          </h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
=======
========
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
          <p className="text-white">{content.description}</p>;
        </div>;
        ;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {tag}
              </Badge>;
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
          </div>;
        </div>;
<<<<<<< HEAD
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
            ))}
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
                {tag}
              </Badge>))}
          </div>;
        </div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Card>
  );
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  )
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </Card>


    </Card>;
  );
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
        <Button;
<<<<<<< HEAD
          on_click={on_apply}
          className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover: from - zion - cyan - light hover:to - zion - cyan text - white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml - 2 h - 4 w - 4" />;
        </Button>;
      </CardFooter>;
    </Card>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/GeneratedContentDisplay.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
