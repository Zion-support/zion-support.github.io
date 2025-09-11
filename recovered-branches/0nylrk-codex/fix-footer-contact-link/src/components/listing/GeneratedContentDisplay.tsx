
import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  Card,
  CardContent,
  CardFooter,
  CardHeader,

  key_points: string[];

}
interface GeneratedContentDisplayProps {
=======
interface GeneratedContentDisplayProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  CardTitle,;
} from "@/components/ui/card";

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",




interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number;

    max: number;
  }
  keyPoints: string[];

}
interface GeneratedContentDisplayProps {
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content: GeneratedContent;
  onApply: () => void
}
export function GeneratedContentDisplay({
  content
  onApply
}: GeneratedContentDisplayProps) {

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="text-white">Generated Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Description
          </h3>
          <p className="text-white">{content.description}</p>
        </div>
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30"
              >
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {tag}
              </Badge>;
            ))}
          </div>
        </div>
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Suggested Price Range
          </h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Key Selling Points
          </h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;

          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>


    </Card>;
  );
}
;
