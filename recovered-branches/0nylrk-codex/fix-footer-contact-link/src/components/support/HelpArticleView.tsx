<<<<<<< HEAD

import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
import { HELP_CATEGORIES } from "./help-content",
interface HelpArticleViewProps {
  articleId: string
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
  
  // Find the article in all categories
  let article,
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { ThumbsUp, ThumbsDown } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleViewProps {;
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  articleId: string;
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories
<<<<<<< HEAD
  let article = null;
  for (const category of HELP_CATEGORIES) {

    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
=======
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
interface HelpArticleViewProps {;
  articleId: string;
}

export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {;
    const found = category && category.articles.find(a => a && a.id === articleId);
    if (found) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export /**
 * HelpArticleView - Function description
 */
function HelpArticleView() {
  const [feedback_given, setFeedbackGiven] = useState<;
    "helpful" | "not - helpful" | null;
  >(null);
;
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find ((a) => a.id === article_id);
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      article = found;
      break;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  }
  if (!article) {
    return <div>Article not found</div>;
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    (setFeedbackGiven(type)
      // In a real implementation, this would send feedback to the server
      toast({
        title: "Thank you for your feedback!"
        description:
          type === "helpful"
            ? "We're glad this article was helpful."
            : "We'll work on improving this article."
      }));
  }
  
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
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
      article = found;
      break;
    }
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    (setFeedbackGiven(type),
      // In a real implementation, this would send feedback to the server
      toast({
        title: "Thank you for your feedback!",
        description:
          type === "helpful"
            ? "We're glad this article was helpful."
            : "We'll work on improving this article.",
      }));
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
<<<<<<< HEAD
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
=======

        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <div className="prose dark:prose-invert max-w-none mb-8">
          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3">
=======

            <div className="flex items-center space-x-3">
=======

  if (!article) {;
    return <div>Article not found</div>;
  }

  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;

    // In a real implementation, this would send feedback to the server;
    toast({;
      title: "Thank you for your feedback!",;
      description: type === "helpful" ;
        ? "We're glad this article was helpful." ;
        : "We'll work on improving this article."});
  };

  return (
    <div>;
      <Card className="p-6">;
        <h2 className="text-2xl font-bold mb-4">{article && article.title}</h2>;

        <div className="flex items-center text-sm text-zion-slate-light mb-6">;
          <span>Last updated: {formatDate(article && article.lastUpdated)}</span>;
        </div>;

        <div className="prose dark:prose-invert max-w-none mb-8">;
          {article && article.content.split("\n").map((paragraph, idx) => (;
            <p key={idx}>{paragraph}</p>;
          ))}
        </div>;

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;

            <div className="flex items-center space-x-3">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <Button
                variant="outline"
                size="sm"
                className={
                  feedbackGiven === "helpful"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : ""
                }
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes
              </Button>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <Button
                variant="outline"
                size="sm"
                className={
                  feedbackGiven === "not-helpful"
                    ? "bg-red-100 dark:bg-red-900/30"
                    : ""
                }
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No
              </Button>
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          {feedbackGiven === "not-helpful" && (
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">
              <p className="text-sm text-zion-slate-light mb-2">
                We're sorry this article wasn't helpful. Please contact our
                support team for further assistance.
              </p>
              <Button
                size="sm"
                className="bg-zion-purple hover:bg-zion-purple-light"
              >
                Contact Support
              </Button>
            </div>
<<<<<<< HEAD
;
  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;
    // In a real implementation, this would send feedback to the server;
    toast({;
      title: "Thank you for your feedback!",;
      description: type === "helpful";
        ? "We're glad this article was helpful.";
        : "We'll work on improving this article."});
  },;
  return (;
    <div>;
      <Card className="p-6">;
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>;
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;
          <span>Last updated: {formatDate(article.lastUpdated)}</span>;
        </div>;
        <div className="prose dark:prose-invert max-w-none mb-8">;
          {article.content.split("\n").map((paragraph, idx) => (;
            <p key={idx}>{paragraph}</p>;
          ))}
        </div>;
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
            <div className="flex items-center space-x-3">;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" : ""}
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >;
                <ThumbsUp className="h-4 w-4 mr-2" />;
                Yes;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" : ""}
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}

              >;
                <ThumbsDown className="h-4 w-4 mr-2" />;
=======
          )}
        </div>
      </Card>
    </div>
  );
}


                on_click={() => handle_feedback ("not - helpful")}
                disabled={feedback_given !== null}
              >;
                <ThumbsDown className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                No;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

          {feedbackGiven === "not-helpful" && (;
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">;
              <p className="text-sm text-zion-slate-light mb-2">;
                We're sorry this article wasn't helpful. Please contact our support team for further assistance.;
              </p>;
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">;
                Contact Support;
              </Button>;
            </div>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}
        </div>;
      </Card>;
    </div>;
  );
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
  });
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
          {feedback_given === "not - helpful" && (
            <div className="mt - 4 bg - zion - blue - dark p - 4 rounded - md">;
              <p className="text - sm text - zion - slate - light mb - 2">;
                We're sorry this article wasn't helpful. Please contact our;
                support team for further assistance.;
              </p>;
              <Button;
                size="sm";
                className="bg - zion - purple hover:bg - zion - purple - light";
              >;
                Contact Support;
              </Button>;
            </div>)}
        </div>;
      </Card>;
    </div>);
}
function format_date (date: string): string {
  return new Date (date).toLocaleDateString ("en - US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

=======


function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
