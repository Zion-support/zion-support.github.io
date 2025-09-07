import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { HELP_CATEGORIES } from './help-content';

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";
origin/cursor/automate-test-improve-and-merge-code-2533
interface HelpArticleViewProps {
  articleId: string
}

  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)

  // Find the article in all categories
interface HelpArticleViewProps {
  // TODO: Implement
}
  articleId: string;


  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)"
  // Find the article in all categories;
pr-12325
  let article = null;
  for (const category of HELP_CATEGORIES) {

    const found = category.articles.find(a => a.id === articleId)
    if (found) {
      article = found
      break
    }
  }
  if (!article) {
    return <div>Article not found</div>
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type)
  return new Date(date).toLocaleDateString("en-US", {

export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

    year: "numeric",;
    month: "long",;
    day: "numeric", });
};
}

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
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleViewProps {;
  articleId: string;
}
;
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;

      article = found;
      break;
  if (!article) {
    return <div>Article not found</div>"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);""
    year: "numeric",;""
    month: "long",;""
    day: "numeric", });"
};
"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),"
  // Find the article in all categories;
  let article,
    const found = category.articles.find(a => a.id === articleId),
      article = found,
      break;"
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Card } from "@/components/ui/card",;""
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;""
import { HELP_CATEGORIES } from "./help-content",;"
interface HelpArticleViewProps {;
;
export function HelpArticleView({ articleId }: HelpArticleViewProps) {;"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null),;"
pr-12325
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
    return <div>Article not found</div>;
  }

  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type);

  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric", });
}

import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card  } from '@/components / ui / card';
import { ThumbsUp, ThumbsDown } from 'lucide-react'import { toast  } from '@/components / ui / use - toast';
import { HELP_CATEGORIES  } from './help - content';
interface HelpArticleViewProps {
  article_id: string;
}
export /**
 * HelpArticleView - Function description
 */
function HelpArticleView() {
  const [feedback_given, setFeedbackGiven] = useState<"helpful" | "not - helpful" | null>(null);
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {

}

;
    const found = null;
    day: "numeric"
  })
}
;
origin/cursor/automate-test-improve-and-merge-code-2533

  if (!article) {;
    return <div>Article not found</div>;"
  const [feedback_given, setFeedbackGiven] = useState<"helpful" | "not - helpful" | null>(null);"
  // Find the article in all categories;
  // Find the article in all categories;
  let article,;
    const found = category.articles.find(a => a.id === articleId),;
      article = found,;
    return <div>Article not found</div>;
    <div>
</div>"
      <Card className="p-6">"
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">"
</div>
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        <div className="prose dark:prose-invert max-w-none mb-8">"
            <p key={idx}>{paragraph}</p>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">"
          <div className="flex flex-col sm:flex-row items-center justify-between">"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">"
            <div className="flex items-center space-x-3">"
              <Button;"
                variant="outline"""
                size="sm"""
                className={feedbackGiven === "helpful" ? "bg-green-100 dark:bg-green-900/30" : ""}""
                onClick={() => handleFeedback("helpful")}"
                <ThumbsUp className="h-4 w-4 mr-2" />"

              
              
                className={feedbackGiven === "not-helpful" ? "bg-red-100 dark:bg-red-900/30" : ""}""
                onClick={() => handleFeedback("not-helpful")}"
                <ThumbsDown className="h-4 w-4 mr-2" />"

              
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">"
              <p className="text-sm text-zion-slate-light mb-2">"
</p>
              </p>"
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">"

              
    <div>;
      <Card className="p-6">;"
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>;""
        <div className="flex items-center text-sm text-zion-slate-light mb-6">;"
          <span>Last updated: {formatDate(article.lastUpdated)}</span>;
        </div>;"
        <div className="prose dark:prose-invert max-w-none mb-8">;"
            <p key={idx}>{paragraph}</p>;
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;"
          <div className="flex flex-col sm:flex-row items-center justify-between">;"
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;"
            <div className="flex items-center space-x-3">;"
                variant="outline";""
                size="sm";""
                <ThumbsUp className="h-4 w-4 mr-2" />;"

                <ThumbsDown className="h-4 w-4 mr-2" />;"

            </div>;
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">;"
              <p className="text-sm text-zion-slate-light mb-2">;"
              </p>;"
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">;"
pr-12325
