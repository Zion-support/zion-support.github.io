
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ThumbsUp, ThumbsDown} from 'lucide-react'
import {toast} from "@/components/ui/use-toast";
import {HELP_CATEGORIES} from "./help-content";
interface HelpArticleViewProps {
  articleId: string
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
  
  // Find the article in all categories
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find(a => a.id === articleId);
    if (found) {
      article = found;
      break
    }
  }
  
  if (!article) {
    return <div>Article not found</div>
  }
  
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    
  
=======
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric", });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
