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
  articleId: string;
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {

  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories
let article = null;
  for (const category of HELP_CATEGORIES) {

    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  articleId: string
=======
  articleId: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);
=======

interface HelpArticleViewProps {
  articleId: string
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // Find the article in all categories
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  let article;
  for (const category of HELP_CATEGORIES) {}
    const found = category.articles.find((a) => a.id === articleId);
    if (found) {}
      article = found;
      break;
    }
  }

  if (!article) {}
    return <div>Article not found</div>;
}
const handleFeedback = (type: "helpful" | "not-helpful") => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    (setFeedbackGiven(type),
      // In a real implementation, this would send feedback to the server;
      toast({"
        title: "Thank you for your feedback!",
        description:"
          type === "helpful""
            ? "We're glad this article was helpful."'"
            : "We'll work on improving this article.",
      }));
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
setFeedbackGiven(type),

    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
<div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <div className="prose dark:prose-invert max-w-none mb-8">
          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
<div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
<div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">

  if (!article) {;
    return <div>Article not found</div>;
  }
"
  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;

    // In a real implementation, this would send feedback to the server;
toast({;"
      title: "Thank you for your feedback!",;"
      description: type === "helpful" ;'"
        ? "We're glad this article was helpful." ;'"
        : "We'll work on improving this article."});
  };

  return (
<div>;"
      <Card className="p-6">;"
        <h2 className="text-2xl font-bold mb-4">{article && article.title}</h2>;
"
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;
          <span>Last updated: {formatDate(article && article.lastUpdated)}</span>;
        </div>;
"
        <div className="prose dark:prose-invert max-w-none mb-8">;"
    <div>;
      <Card className="p-6">;"
        <h2 className="text-2xl font-bold mb-4">{article && article.title}</h2>;""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;"
          <span>Last updated: {formatDate(article && article.lastUpdated)}</span>;
</div>;

        <div className="prose dark:prose-invert max-w-none mb-8">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {article && article.content.split("\n").map((paragraph, idx) => (;
            <p key={idx}>{paragraph}</p>;
          ))}
        </div>;
"
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;"
          <div className="flex flex-col sm:flex-row items-center justify-between">;"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
"
            <div className="flex items-center space-x-3">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <Button
=======
=======
        </div>;"
        <div className="prose dark:prose-invert max-w-none mb-8">;"
            <p key={idx}>{paragraph}</p>;
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;"
          <div className="flex flex-col sm:flex-row items-center justify-between">;"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;"
            <div className="flex items-center space-x-3">;"
              <Button;"
                variant="outline"""
                size="sm""
                className={"
                  feedbackGiven === "helpful"""
                    ? "bg-green-100 dark:bg-green-900/30"""
                    : """
                }"
                onClick={() => handleFeedback("helpful")}"
                <ThumbsUp className="h-4 w-4 mr-2" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                  feedbackGiven === "not-helpful"""
                    ? "bg-red-100 dark:bg-red-900/30"""
                onClick={() => handleFeedback("not-helpful")}"
                <ThumbsDown className="h-4 w-4 mr-2" />"

            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">"
              <p className="text-sm text-zion-slate-light mb-2">"
</p>
                size="sm"""
                className="bg-zion-purple hover:bg-zion-purple-light""
              >

                <ThumbsDown className="h - 4 w - 4 mr - 2" />;"

              ;
            </div>;
<div className="flex items-center space-x-3">;
              <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                variant="outline"
              <Button"
                variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                size="sm"
                className={"
                  feedbackGiven === "helpful""
                    ? "bg-green-100 dark:bg-green-900/30""
                    : ""
                }"
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >"
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes;
              </Button>

              <Button
                variant="outline"
=======
              <Button"
                variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                size="sm"
                className={"
                  feedbackGiven === "not-helpful""
                    ? "bg-red-100 dark:bg-red-900/30""
                    : ""
                }"
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
              >"
                <ThumbsDown className="h-4 w-4 mr-2" />
                No;
              </Button>
            </div>
          </div>
{feedbackGiven === "not-helpful" && (
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">
              <p className="text-sm text-zion-slate-light mb-2">
                We're sorry this article wasn't helpful. Please contact our
                support team for further assistance.
              </p>
              <Button"
                size="sm""
                className="bg-zion-purple hover:bg-zion-purple-light"
              >
                Contact Support;
              </Button>
            </div>
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
                <ThumbsDown className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                <ThumbsDown className="h - 4 w - 4 mr-2" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <ThumbsDown className="h - 4 w - 4 mr-2" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                on_click={() => handle_feedback ("not - helpful")}
                disabled={feedback_given !== null}
              >;
                <ThumbsDown className="h - 4 w - 4 mr - 2" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                No;
              </Button>;
            </div>;
</div>;
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
            <div className="mt - 4 bg - zion - blue - dark p - 4 rounded - md">;"
              <p className="text - sm text - zion - slate - light mb - 2">;"
              </p>;
                size="sm";""
                className="bg - zion - purple hover:bg - zion - purple - light";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              >;

            </div>)}
</div>;
      </Card>;
    </div>);
}
function format_date (date: string): string {"
  return new Date (date).toLocaleDateString ("en - US", {"
    year: "numeric","
    month: "long","
    day: "numeric",
  });
}

<<<<<<< HEAD
;
function formatDate(date:string):string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year:"numeric",;
    month:"long",;
    day:"numeric";
  }),; interface HelpArticleViewProps {
  articleId: string 
}export function HelpArticleView ({
  articleId 
}: HelpArticleViewProps) {
  for (const category of HELP CATEGORIES) {
  //In a real implementation, this would send feedback to the server toast ({
  title: "Thank you for your feedback!", description: type === "helpful" ? "We're glad this article was helpful." : "We'll work on improving this article." 
}) 
};
}</div> <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6" > <div className="flex flex-col sm:flex-row items-center justify-between" > <div className="text-sm text-zion-slate-light mb-4 sm:mb-0" > Was this article helpful? </div> <div className="flex items-center space-x-3" > <Button > <ThumbsUp className="h-4 w-4 mr-2" /> Yes </Button> <Button > <ThumbsDown className="h-4 w-4 mr-2" /> No </Button> </div> </div> We're sorry this article wasn't helpful. Please contact our support team for further assistance. </p> <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light" > Contact Support </Button> </div>) 
}</div> </Card> </div>) 
}
}
          )}
        </div>
      </Card>
    </div>
  );
}
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======

function formatDate(date: string): string {"
  return new Date(date).toLocaleDateString("en-US", {"
    year: "numeric","
    month: "long","
    day: "numeric",
  });
}
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>);"
pr-12325
    </div>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
