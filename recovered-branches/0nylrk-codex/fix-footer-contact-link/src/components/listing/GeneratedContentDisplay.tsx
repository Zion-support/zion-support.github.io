

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



  key_points: string[];

}
interface GeneratedContentDisplayProps {










  content: GeneratedContent;
export function GeneratedContentDisplay(): any ({;
  content,;
  onApply,;
}: GeneratedContentDisplayProps) {;
  return (

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
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;


              <Badge
                key={index}
                className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;


        




        




          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
          <p className="text-white">{content.description}</p>;
        </div>;
        ;
        <div>;
          <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
          <div className="flex flex-wrap gap-2">;
            {content.tags.map((tag, index) => (;
              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
        ;





        <Button;
}
          onClick={onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
        >;
          Apply to My Listing;
          <ArrowRight className="ml-2 h-4 w-4" />;
        </Button>;
      </CardFooter>;



