<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
articleId: string;
}
<<<<<<< HEAD
  // Find the article in all categories,
let article,;
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
  articleId: string}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
  
  // Find the article in all categories
  let article,
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
import { HELP_CATEGORIES } from "./help-content",
=======

import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown  } from './lucide-react';
import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';

interface HelpArticleViewProps {
  article_id: string;
}



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface HelpArticleViewProps {
  articleId: string
}


export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),

<<<<<<< HEAD
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
  // Find the article in all categories
  let article,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find($2);
    if (found) {
<<<<<<< HEAD
      article = $2;
      break
    }
  }
  if (!article) {
    return <div>Article not found</div>
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven($2);
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type = $2;
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none mb-8">
=======
      }
      article = found,
<<<<<<< HEAD
break;
import { Card } from "@/components/ui/card",;"
import { ThumbsUp, ThumbsDown } from "lucide-react",;"
import { toast } from "@/components/ui/use-toast",;"
import { HELP_CATEGORIES } from "./help-content",;"
interface HelpArticleViewProps {;
  }
  let article;
  for (const category of HELP_CATEGORIES) {
    }
    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
      }
=======
<<<<<<< HEAD

=======
      break
<<<<<<< HEAD
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {

interface HelpArticleViewProps {
  articleId: string;
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  articleId: string;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function HelpArticleView({ articleId }: HelpArticleViewProps) {

  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/chore/fix-lint-and-merge
      article = found;
      break;

    }
  }
  if (!article) {
    return <div>Article not found</div>;
  }
<<<<<<< HEAD
=======
=======
  let article = null;
  for (const category of HELP_CATEGORIES) {
<<<<<<< HEAD
interface HelpArticleViewProps {
  article_id: string;
}
=======

    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
interface HelpArticleViewProps {;
  articleId: string;
}
<<<<<<< HEAD
export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
=======

export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {;
    const found = category && category.articles.find(a => a && a.id === articleId);
    if (found) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      article = found;
      break;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      article = found;
      break;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }


<<<<<<< HEAD

    }
  }


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  articleId: string

}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

            : "We'll work on improving this article.",
      }));
  };

    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
    return (

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>

<<<<<<< HEAD
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
<<<<<<< HEAD
<div className="flex items-center text-sm text-zion-slate-light mb-6">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
<<<<<<< HEAD

            <div className="flex items-center space-x-3">

  if (!article) {;
    return <div>Article not found</div>;
  }

  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;

    // In a real implementation, this would send feedback to the server;

        : "We'll work on improving this article."});
  };

  return (

    <div>;
      <Card className="p-6">;"
        <h2 className="text-2xl font-bold mb-4">{article && article.title}</h2>;""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;"
          <span>Last updated: {formatDate(article && article.lastUpdated)}</span>;

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

              <Button"
                variant="outline""

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

            <div className="flex items-center space-x-3">
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
            <div className="flex items-center space-x-3">
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </Button>

              <Button
                variant="outline"
<<<<<<< HEAD

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

=======
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

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {feedbackGiven === "not-helpful" && (
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">
              <p className="text-sm text-zion-slate-light mb-2">
                We're sorry this article wasn't helpful. Please contact our
<<<<<<< HEAD

                support team for further assistance.
              </p>
              <Button"
                size="sm""
=======
                support team for further assistance.
              </p>
              <Button
                size="sm"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className="bg-zion-purple hover:bg-zion-purple-light"
              >
                Contact Support;
              </Button>
            </div>
<<<<<<< HEAD

                <ThumbsDown className="h - 4 w - 4 mr - 2" />;

                No;
              </Button>;
            </div>;

              >;

            </div>)}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
=======
<<<<<<< HEAD
          )}
        </div>
      </Card>
    </div>
  )
}
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
  })
}
=======
=======
            <div className="flex items-center space-x-3">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  if (!article) {;
    return <div>Article not found</div>;
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;
    // In a real implementation, this would send feedback to the server;

        : "We'll work on improving this article."});
  };
  return (
<<<<<<< HEAD

    <div>;
      <Card className="p-6">;"
        <h2 className="text-2xl font-bold mb-4">{article && article.title}</h2>;""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;"
          <span>Last updated: {formatDate(article && article.lastUpdated)}</span>;

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

              <Button"
                variant="outline""

                size="sm"
                className={"
                  feedbackGiven === "helpful""
                    ? "bg-green-100 dark:bg-green-900/30""
                    : ""
                }"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >"
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes;
              </Button>

              <Button
                variant="outline"

                size="sm"
                className={"
                  feedbackGiven === "not-helpful""
                    ? "bg-red-100 dark:bg-red-900/30""
                    : ""
                }"
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
<<<<<<< HEAD
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

=======

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


function formatDate(): any (date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric";
  });
}
                on_click={() => handle_feedback ("not - helpful")}
                disabled={feedback_given !== null}
              >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <ThumbsDown className="h - 4 w - 4 mr - 2" />;

                No;
              </Button>;
            </div>;

              >;

            </div>)}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
<<<<<<< HEAD
}
=======
  ),;
}



function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
  });
}

  })
  })
}
>>>>>>> merged-prs-20250907-203621
;
function formatDate(date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric";
    month: "long";
    day: "numeric";
  });
<<<<<<< HEAD
}
;
=======
}
;
  })
  })

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
year: "numeric"
    month: "long"
    day: "numeric"

  });
}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
