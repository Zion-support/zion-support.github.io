<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown  } from './lucide-react';
import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx

interface HelpArticleViewProps {
  article_id: string;
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
import { HELP_CATEGORIES } from "./help-content",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface HelpArticleViewProps {
  articleId: string
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),

=======
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Find the article in all categories
  let article,
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { ThumbsUp, ThumbsDown } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleViewProps {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  articleId: string;
}

=======

  articleId: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function HelpArticleView({ articleId }: HelpArticleViewProps) {

  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories
  let article = null;
  for (const category of HELP_CATEGORIES) {
<<<<<<< HEAD

    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
=======
========
interface HelpArticleViewProps {
  article_id: string;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
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
      article = found;
      break;
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
  if (!article) {
    return <div>Article not found</div>;
  }
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }


=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
<<<<<<< HEAD
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
=======
<div className="flex items-center text-sm text-zion-slate-light mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none mb-8">
          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3">
<<<<<<< HEAD
=======

            <div className="flex items-center space-x-3">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
<<<<<<< HEAD
            <div className="flex items-center space-x-3">;
              <Button
                variant="outline"
                size="sm"
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }
  const handle_feedback = (type: "helpful" | "not - helpful") =>: any {
    (setFeedbackGiven (type),
      // In a real implementation, this would send feedback to the server;
      toast ({
        title: "Thank you for your feedback!",
        description:;
          type === "helpful";
            ? "We're glad this article was helpful.";
            : "We'll work on improving this article.",
      }));
  }
;
  return (
    <div>;
      <Card className="p - 6">;
        <h2 className="text - 2xl font - bold mb - 4">{article.title}</h2>;
        <div className="flex items - center text - sm text - zion - slate - light mb - 6">;
          <span > Last updated: {format_date (article.last_updated)}</span>;
        </div>;
        <div className="prose dark:prose - invert max - w-none mb - 8">;
          {article.content.split ("\n").map ((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>))}
        </div>;
        <div className="border - t border - gray - 200 dark:border - gray - 700 pt - 6 mt - 6">;
          <div className="flex flex - col sm:flex - row items - center justify - between">;
            <div className="text - sm text - zion - slate - light mb - 4 sm:mb - 0">;
              Was this article helpful?;
            </div>;
            <div className="flex items - center space - x-3">;
              <Button;
                variant="outline";
                size="sm";
                className={
                  feedback_given === "helpful";
                    ? "bg - green - 100 dark:bg - green - 900 / 30";
                    : "";
                }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx

========
=======
            ;
            <div className="flex items-center space-x-3">;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" :""}
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
              >;
                <ThumbsUp className="h-4 w-4 mr-2" />;
                Yes;
              </Button>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
              <Button
                variant="outline"
                size="sm"
                on_click={() => handle_feedback ("helpful")}
                disabled={feedback_given !== null}
              >;
                <ThumbsUp className="h - 4 w - 4 mr - 2" />;
                Yes;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
                className={
                  feedback_given === "not - helpful";
                    ? "bg - red - 100 dark:bg - red - 900 / 30";
                    : "";
                }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
=======
              ;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" :""}
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
              >;
                <ThumbsDown className="h-4 w-4 mr-2" />;
                No;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          )}
        </div>;
      </Card>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
<<<<<<< HEAD

=======


========
function formatDate(): any (date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric";
  });
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
                on_click={() => handle_feedback ("not - helpful")}
                disabled={feedback_given !== null}
              >;
                <ThumbsDown className="h - 4 w - 4 mr - 2" />;
                No;
              </Button>;
            </div>;
          </div>;
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
=======
  ),;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
<<<<<<< HEAD

<<<<<<< HEAD
=======
  });
}

  })
  })
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
function formatDate(date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric";
    month: "long";
    day: "numeric";
  });
}
;
<<<<<<< HEAD

=======
  })
=======
  })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleView.tsx
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
