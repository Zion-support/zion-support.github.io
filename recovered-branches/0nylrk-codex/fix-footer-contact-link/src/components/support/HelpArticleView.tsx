
<<<<<<< HEAD
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { ThumbsUp, ThumbsDown } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
;
interface HelpArticleViewProps {;
  articleId:string;
}
;
export function HelpArticleView({ articleId } HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;
  ;
  // Find the article in all categories;
  let article,;
  for (const category of HELP_CATEGORIES) {;
    const found = category.articles.find(a => a.id === articleId),;
    if (found) {;
      article = found,;
      break,;
    }
  }
  ;
  if (!article) {;
    return <div>Article not found</div>,;
  }
  ;
  const handleFeedback = (type:"helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;
    ;
    // In a real implementation, this would send feedback to the server;
    toast({;
      title:"Thank you for your feedback!",;
      description:type === "helpful" ;
        ? "We're glad this article was helpful." ;
        :"We'll work on improving this article."}),;
  },;
  ;
  return (;
    <div>;
      <Card className="p-6">;
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>;
        ;
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;
          <span>Last updated:{formatDate(article.lastUpdated)}</span>;
        </div>;
        ;
        <div className="prose dark:prose-invert max-w-none mb-8">;
          {article.content.split("\n").map((paragraph, idx) => (;
            <p key={idx}>{paragraph}</p>;
          ))}
        </div>;
        ;
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
            ;
            <div className="flex items-center space-x-3">;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" :""}
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >;
                <ThumbsUp className="h-4 w-4 mr-2" />;
                Yes;
              </Button>;
              ;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" :""}
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
              >;
                <ThumbsDown className="h-4 w-4 mr-2" />;
                No;
              </Button>;
            </div>;
          </div>;
          ;
          {feedbackGiven === "not-helpful" && (;
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">;
              <p className="text-sm text-zion-slate-light mb-2">;
                We're sorry this article wasn't helpful. Please contact our support team for further assistance.;
              </p>;
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">;
                Contact Support;
              </Button>;
            </div>;
          )}
        </div>;
      </Card>;
    </div>;
  ),;
}
;
function formatDate(date:string):string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year:"numeric",;
    month:"long",;
    day:"numeric";
  }),;
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content",interface HelpArticleViewProps {
  articleId: string
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),import React, {_useState} from "react";

interface HelpArticleViewProps {_articleId: string;}

export function HelpArticleView(_{_articleId}: HelpArticleViewProps) {_const [feedbackGiven, _setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
  
  // Find the article in all categories
  let article,
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break
    }
  }
  
  if (!article) {
    return <div>Article not found</div>
  }
  
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type),    
    // In a real implementation, _this would send feedback to the server
    toast({
      title: "Thank you for your feedback!", _description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
  const handleFeedback = (type: &quot;helpful&quot; | &quot;not-helpful&quot;) => {
    setFeedbackGiven(type);
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: &quot;Thank you for your feedback!&quot;,
      description: type === &quot;helpful&quot; 
        ? &quot;We're glad this article was helpful.&quot; 
        : &quot;We'll work on improving this article.&quot;});
  };
  
  return (
    <div>
      <Card className=&quot;p-6&quot;>
        <h2 className=&quot;text-2xl font-bold mb-4&quot;>{article.title}</h2>
        
        <div className=&quot;flex items-center text-sm text-zion-slate-light mb-6&quot;>
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        
        <div className=&quot;prose dark:prose-invert max-w-none mb-8&quot;>
          {article.content.split(&quot;\n&quot;).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>          ))}
        </div>
        
        <div className=&quot;border-t border-gray-200 dark:border-gray-700 pt-6 mt-6&quot;>
          <div className=&quot;flex flex-col sm:flex-row items-center justify-between&quot;>
            <div className=&quot;text-sm text-zion-slate-light mb-4 sm:mb-0&quot;>
              Was this article helpful?
            </div>
            
            <div className=&quot;flex items-center space-x-3&quot;>
              <Button
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                className={feedbackGiven === &quot;helpful&quot; ? &quot;bg-green-100 dark:bg-green-900/30&quot; : "&quot;}
                onClick={() => handleFeedback(&quot;helpful")}
                disabled={feedbackGiven !== null}              >
                <ThumbsUp className="h-4 w-4 mr-2&quot; />
                Yes
              </Button>
              
              <Button
                variant=&quot;outline&quot;
                size=&quot;sm"
                className={feedbackGiven === "not-helpful&quot; ? &quot;bg-red-100 dark:bg-red-900/30&quot; : "&quot;}
                onClick={() => handleFeedback(&quot;not-helpful&quot;)}
                disabled={feedbackGiven !== null}              >
                <ThumbsDown className=&quot;h-4 w-4 mr-2&quot; />
                No
              </Button>
            </div>
          </div>
          
          {feedbackGiven === &quot;not-helpful&quot; && (
            <div className=&quot;mt-4 bg-zion-blue-dark p-4 rounded-md&quot;>
              <p className=&quot;text-sm text-zion-slate-light mb-2&quot;>                We're sorry this article wasn't helpful. Please contact our support team for further assistance.
              </p>
              <Button size=&quot;sm&quot; className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;>
                Contact Support
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })function formatDate(_date: string): string {_return new Date(date).toLocaleDateString("en-US", _{
    year: "numeric", _month: "long", _day: "numeric"});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
