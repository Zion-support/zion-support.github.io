<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { ArrowRight } from "lucide-react";

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from "@/components/ui/card";
<<<<<<< HEAD
=======

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
<<<<<<< HEAD
    min: number;

    max: number;
  }
  keyPoints: string[];

}
interface GeneratedContentDisplayProps {
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  content: GeneratedContent;
  onApply: () => void
}
<<<<<<< HEAD
export function GeneratedContentDisplay({
  content
  onApply
}: GeneratedContentDisplayProps) {
=======

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
<<<<<<< HEAD
              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30"
              >
=======
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                {tag}
              </Badge>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
          <p className="text-white">
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
