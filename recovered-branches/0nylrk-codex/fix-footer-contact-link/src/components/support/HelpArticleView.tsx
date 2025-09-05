
import React, {_useState} from "react";

interface HelpArticleViewProps {_articleId: string;}

export function HelpArticleView(_{_articleId}: HelpArticleViewProps) {_const [feedbackGiven, _setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
  
  // Find the article in all categories
  let article;
  for (const category of HELP_CATEGORIES) {
    const _found = category.articles.find(a => a.id === articleId);
    if (found) {
      article = found;
      break;}
  }
  
  if (!article) {_return <div>Article not found</div>;}
  
  const _handleFeedback = (_type: "helpful" | "not-helpful") => {_setFeedbackGiven(type);
    
    // In a real implementation, _this would send feedback to the server
    toast({
      title: "Thank you for your feedback!", _description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."});
  };
  
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{_article.title}</h2>
        
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {_formatDate(article.lastUpdated)}</span>
        </div>
        
        <div className="prose dark:prose-invert max-w-none mb-8">
          {_article.content.split("\n").map(_(paragraph, _idx) => (
            <p key={idx}>{_paragraph}</p>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className={_feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" : ""}
                onClick={_() => handleFeedback("helpful")}
                disabled={_feedbackGiven !== null}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className={_feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" : ""}
                onClick={_() => handleFeedback("not-helpful")}
                disabled={_feedbackGiven !== null}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No
              </Button>
            </div>
          </div>
          
          {_feedbackGiven === "not-helpful" && (
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">
              <p className="text-sm text-zion-slate-light mb-2">
                We're sorry this article wasn't helpful. Please contact our support team for further assistance.
              </p>
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">
                Contact Support
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function formatDate(_date: string): string {_return new Date(date).toLocaleDateString("en-US", _{
    year: "numeric", _month: "long", _day: "numeric"});
}
