
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ArrowRight } from &quot;lucide-react&quot;;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface GeneratedContentDisplayProps {;
  content: GeneratedContent;
  onApply: () => void;
}
<<<<<<< HEAD

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-white&quot;>Generated Content</CardTitle>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Description</h3>
          <p className=&quot;text-white&quot;>{content.description}</p>
        </div>
        
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Tags</h3>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            {content.tags.map((tag, index) => (
              <Badge key={index} className=&quot;bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30&quot;>
=======
;
export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {;
  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="text-white">Generated Content</CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
          <p className="text-white">{content.description}</p>;
        </div>;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {tag}
              </Badge>;
            ))}
<<<<<<< HEAD
          </div>
        </div>
        
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Suggested Price Range</h3>
          <p className=&quot;text-white&quot;>
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
        
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Key Selling Points</h3>
          <ul className=&quot;list-disc pl-5 text-white space-y-1&quot;>
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
=======
          </div>;
        </div>;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
          <p className="text-white">;
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>;
        </div>;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
          <ul className="list-disc pl-5 text-white space-y-1">;
            {content.keyPoints.map((point, index) => (;
              <li key={index}>{point}</li>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
        <Button;
          onClick={onApply}
<<<<<<< HEAD
<<<<<<< HEAD
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"
=======
          className=&quot;w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        >
          Apply to My Listing
          <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
        </Button>
      </CardFooter>
    </Card>
  )
=======
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;
    </Card>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;