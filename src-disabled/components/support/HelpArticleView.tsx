import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",

interface HelpArticleViewProps {
  articleId: string

}

  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null)

  // Find the article in all categories
  let article = null;
  for (const category of HELP_CATEGORIES) {

  // Find the article in all categories;
  for (const category of HELP_CATEGORIES) {}
    const found = category.articles.find(a => a.id === articleId)
    if (found) {}
      article = found;
      break;
    }
  }
  if (!article) {}
    return <div>Article not found</div>
  }"
  const handleFeedback = (type: "helpful" | "not-helpful") => {}
    setFeedbackGiven(type)"
  return new Date(date).toLocaleDateString("en-US", {}
export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;"
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

"
    year: "numeric",;"
    month: "long",;"
    day: "numeric", });
};
}

    day: "numeric"
  });
function formatDate(date: string): string {;"
  return new Date(date).toLocaleDateString("en-US", {;"
    year: "numeric";"
    month: "long";"
    day: "numeric";
  });

}

;