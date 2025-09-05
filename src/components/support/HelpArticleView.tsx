
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { HELP_CATEGORIES } from &quot;./help-content&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface HelpArticleViewProps {
  articleId: string
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
<<<<<<< HEAD
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
=======
  const [feedbackGiven, setFeedbackGiven] = useState<&quot;helpful&quot; | &quot;not-helpful&quot; | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
  
<<<<<<< HEAD
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
=======
  const handleFeedback = (type: &quot;helpful&quot; | &quot;not-helpful&quot;) => {
    setFeedbackGiven(type);
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: &quot;Thank you for your feedback!&quot;,
      description: type === &quot;helpful&quot; 
        ? &quot;We're glad this article was helpful.&quot; 
        : &quot;We'll work on improving this article.&quot;});
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <div>
      <Card className=&quot;p-6&quot;>
        <h2 className=&quot;text-2xl font-bold mb-4&quot;>{article.title}</h2>
        
        <div className=&quot;flex items-center text-sm text-zion-slate-light mb-6&quot;>
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        
        <div className=&quot;prose dark:prose-invert max-w-none mb-8&quot;>
          {article.content.split(&quot;\n&quot;).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
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
                disabled={feedbackGiven !== null}
              >
                <ThumbsUp className="h-4 w-4 mr-2&quot; />
                Yes
              </Button>
              
              <Button
                variant=&quot;outline&quot;
                size=&quot;sm"
                className={feedbackGiven === "not-helpful&quot; ? &quot;bg-red-100 dark:bg-red-900/30&quot; : "&quot;}
                onClick={() => handleFeedback(&quot;not-helpful&quot;)}
                disabled={feedbackGiven !== null}
              >
                <ThumbsDown className=&quot;h-4 w-4 mr-2&quot; />
                No
              </Button>
            </div>
          </div>
          
          {feedbackGiven === &quot;not-helpful&quot; && (
            <div className=&quot;mt-4 bg-zion-blue-dark p-4 rounded-md&quot;>
              <p className=&quot;text-sm text-zion-slate-light mb-2&quot;>
                We're sorry this article wasn't helpful. Please contact our support team for further assistance.
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
<<<<<<< HEAD
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
=======
  return new Date(date).toLocaleDateString(&quot;en-US&quot;, {
    year: &quot;numeric&quot;,
    month: &quot;long&quot;,
    day: &quot;numeric&quot;
  });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
