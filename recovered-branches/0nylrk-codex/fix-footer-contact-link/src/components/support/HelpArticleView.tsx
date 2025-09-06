<<<<<<< HEAD

import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown  } from './lucide-react';
import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';

interface HelpArticleViewProps {
  article_id: string;
}



=======
<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
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
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface HelpArticleViewProps {
  articleId: string
}

<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),

  
<<<<<<< HEAD
  // Find the article in all categories
  let article,
  for (const category of HELP_CATEGORIES) {
=======
=======
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

>>>>>>> main
  // Find the article in all categories
  let article,
  for (const category of HELP_CATEGORIES) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const found = category.articles.find(a => a.id === articleId),
    if (found) {
      article = found,
      break
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
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { ThumbsUp, ThumbsDown } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleViewProps {;

  articleId: string;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  articleId: string;
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function HelpArticleView({ articleId }: HelpArticleViewProps) {

  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
      article = found;
      break;
>>>>>>> main
    }
  }



    }
  }


  const handleFeedback = (type: "helpful" | "not-helpful") => {
<<<<<<< HEAD
    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
  
=======
    (setFeedbackGiven(type),
      // In a real implementation, this would send feedback to the server
      toast({
        title: "Thank you for your feedback!"
        description:
          type === "helpful"
            ? "We're glad this article was helpful."
            : "We'll work on improving this article."
      }));
  };

<<<<<<< HEAD

=======
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
<<<<<<< HEAD
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
=======
<<<<<<< HEAD
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
=======

        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="prose dark:prose-invert max-w-none mb-8">
          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-3">
=======
<<<<<<< HEAD
=======

>>>>>>> main
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
              </Button>
<<<<<<< HEAD
=======

>>>>>>> main
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

>>>>>>> main
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
<<<<<<< HEAD

            <div className="flex items-center space-x-3">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                variant="outline"
                size="sm"
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                className={
                  feedback_given === "helpful";
                    ? "bg - green - 100 dark:bg - green - 900 / 30";
                    : "";
                }

=======
            ;
            <div className="flex items-center space-x-3">;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" :""}
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              >;
                <ThumbsUp className="h-4 w-4 mr-2" />;
                Yes;
              </Button>;
<<<<<<< HEAD


              <Button
                variant="outline"
                size="sm"
=======
                on_click={() => handle_feedback ("helpful")}
                disabled={feedback_given !== null}
              >;
                <ThumbsUp className="h - 4 w - 4 mr - 2" />;
                Yes;
              </Button>;
              <Button;
                variant="outline";
                size="sm";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                className={
                  feedback_given === "not - helpful";
                    ? "bg - red - 100 dark:bg - red - 900 / 30";
                    : "";
                }

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

<<<<<<< HEAD
=======
              ;
              <Button;
                variant="outline";
                size="sm";
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" :""}
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              >;
                <ThumbsDown className="h-4 w-4 mr-2" />;
                No;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
          )}
        </div>;
      </Card>;
    </div>;
  );
}


=======
          )}
        </div>
      </Card>
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
}

=======

=======
  ),;
}



function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
<<<<<<< HEAD
    day: "numeric"

  })
<<<<<<< HEAD
=======
    day: "numeric",
  });
>>>>>>> main
}
=======
  })

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
year: "numeric"
    month: "long"
    day: "numeric"

<<<<<<< HEAD
  })
=======
  })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  });
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
