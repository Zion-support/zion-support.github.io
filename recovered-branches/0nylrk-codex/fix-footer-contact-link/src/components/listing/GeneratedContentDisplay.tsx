
import React from "react",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ArrowRight } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
}

interface GeneratedContentDisplayProps {
  content: GeneratedContent,
  onApply: () => void
}

export function GeneratedContentDisplay({ content, onApply }: GeneratedContentDisplayProps) {
  return (
    <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
import React from "react";

interface GeneratedContent {_description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;};
  keyPoints: string[];
}

interface GeneratedContentDisplayProps {_content: GeneratedContent;
  onApply: () => void;}

export function GeneratedContentDisplay(_{_content, _onApply}: GeneratedContentDisplayProps) {_return (_<Card className="border border-zion-blue-light bg-zion-blue-dark">
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
                {tag}              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Suggested Price Range</h3>
          <p className=&quot;text-white&quot;>
            ${content.suggestedPrice.min.toFixed(2)} - ${content.suggestedPrice.max.toFixed(2)}          </p>
        </div>
        
        <div>
          <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Key Selling Points</h3>
          <ul className=&quot;list-disc pl-5 text-white space-y-1&quot;>
            {content.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover: from-zion-cyan-light hover:to-zion-cyan text-white"          onClick={_onApply}
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
        >
          Apply to My Listing
          <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
        </Button>
      </CardFooter>
    </Card>
  )
}
