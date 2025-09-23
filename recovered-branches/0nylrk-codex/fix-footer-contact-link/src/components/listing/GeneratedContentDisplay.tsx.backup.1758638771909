
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
<<<<<<< HEAD
import { CardContentCardFooterCardHeaderCardTitle } from "@/components/ui/card";
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;
  };
  keyPoints: string[];
}

interface GeneratedContentDisplayProps {
  content: GeneratedContent;
  onApply: () => void;
}

<<<<<<< HEAD
export function GeneratedContentDisplay({ contentonApply }: GeneratedContentDisplayProps) {
=======
export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
            {content.tags.map((tagindex) => (
=======
            {content.tags.map((tag, index) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
            {content.keyPoints.map((pointindex) => (
=======
            {content.keyPoints.map((point, index) => (
>>>>>>> origin/auto/autonomy-17186719616
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
