interface HelpArticleViewProps {
  // TODO: Implement
}
  articleId: string;
}


  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)"
  // Find the article in all categories;
  let article = null;
  for (const category of HELP_CATEGORIES) {

    const found = category.articles.find(a => a.id === articleId)
    if (found) {
      article = found;
      break;
    }
  }
  if (!article) {
    return <div>Article not found</div>"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);""
    year: "numeric",;""
    month: "long",;""
    day: "numeric", });"
};
}
"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),"
  // Find the article in all categories;
  let article,
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break;"
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Card } from "@/components/ui/card",;""
import { ThumbsUp, ThumbsDown } from 'lucide-react';''
import { toast } from "@/components/ui/use-toast",;""
import { HELP_CATEGORIES } from "./help-content",;"
interface HelpArticleViewProps {;
  articleId: string;
}
;
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;"
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {;
    const found = category && category.articles.find(a => a && a.id === articleId);
    if (found) {;
      article = found;
      break;
    }
  }

  if (!article) {;
    return <div>Article not found</div>;"
  const [feedback_given, setFeedbackGiven] = useState<"helpful" | "not - helpful" | null>(null);"
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break;"
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Card } from "@/components/ui/card",;""
import { ThumbsUp, ThumbsDown } from 'lucide-react';''
import { toast } from "@/components/ui/use-toast",;""
import { HELP_CATEGORIES } from "./help-content",;"
interface HelpArticleViewProps {;
  articleId: string;
}
;
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;"
  // Find the article in all categories;
  let article,;
  for (const category of HELP_CATEGORIES) {;
    const found = category.articles.find(a => a.id === articleId),;
    if (found) {;
      article = found,;
      break;
    }
  }
;
  if (!article) {;
    return <div>Article not found</div>;
    <div>
</div>"
      <Card className="p-6">"
</Card>"
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">"
</div>
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        "
        <div className="prose dark:prose-invert max-w-none mb-8">"
</div>
            <p key={idx}>{paragraph}</p>
        </div>
        "
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">"
</div>"
          <div className="flex flex-col sm:flex-row items-center justify-between">"
</div>"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">"
</div>
            </div>
            "
            <div className="flex items-center space-x-3">"
</div>
              <Button;"
                variant="outline"""
                size="sm"""
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" : ""}""
                onClick={() => handleFeedback("helpful")}"
</Button>"
                <ThumbsUp className="h-4 w-4 mr-2" />"
</ThumbsUp>
              </Button>
              
              <Button;"
                variant="outline"""
                size="sm"""
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" : ""}""
                onClick={() => handleFeedback("not-helpful")}"
</Button>"
                <ThumbsDown className="h-4 w-4 mr-2" />"
</ThumbsDown>
              </Button>
            </div>
          </div>"
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">"
</div>"
              <p className="text-sm text-zion-slate-light mb-2">"
</p>
              </p>"
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">"
</Button>
              </Button>
            </div>
    <div>;
</div>"
      <Card className="p-6">;"
</Card>"
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>;""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;"
</div>
          <span>Last updated: {formatDate(article.lastUpdated)}</span>;
        </div>;"
        <div className="prose dark:prose-invert max-w-none mb-8">;"
</div>
            <p key={idx}>{paragraph}</p>;
        </div>;"
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;"
</div>"
          <div className="flex flex-col sm:flex-row items-center justify-between">;"
</div>"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;"
</div>
            </div>;"
            <div className="flex items-center space-x-3">;"
</div>
              <Button;"
                variant="outline";""
                size="sm";""
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" : ""}""
                onClick={() => handleFeedback("helpful")}"
</Button>"
                <ThumbsUp className="h-4 w-4 mr-2" />;"
</ThumbsUp>
              </Button>;
              <Button;"
                variant="outline";""
                size="sm";""
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" : ""}""
                onClick={() => handleFeedback("not-helpful")}"
</Button>"
                <ThumbsDown className="h-4 w-4 mr-2" />;"
</ThumbsDown>
              </Button>;
            </div>;
          </div>;"
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">;"
</div>"
              <p className="text-sm text-zion-slate-light mb-2">;"
</p>
              </p>;"
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">;"
</Button>
              </Button>;
            </div>;
        </div>;
      </Card>;
    </div>;"