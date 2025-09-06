
import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

<<<<<<< HEAD
import {

  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  Card,
  CardContent,
  CardFooter,
  CardHeader,


=======
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
} from "@/components/ui/card";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  key_points: string[];

}
interface GeneratedContentDisplayProps {

  CardTitle,;
} from "@/components/ui/card";

import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",




<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
        


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                {tag}
              </Badge>;
            ))}
          </div>
        </div>
        


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        <div>
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">
            Key Selling Points
          </h3>
          <ul className="list-disc pl-5 text-white space-y-1">
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>

            ))}

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
<<<<<<< HEAD


  )
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    </Card>;
  );
}
;
