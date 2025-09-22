
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
      <CardHeader>;
        <CardTitle className="text-white">Generated Content</CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div>;

                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;

          </ul>;
        </div>;
      </CardContent>;
      <CardFooter>;
        <Button;
