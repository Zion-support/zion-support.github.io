import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { toast } from "@/components/ui/use-toast";
import { HELP_CATEGORIES } from "./help-content";
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

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric", });
}