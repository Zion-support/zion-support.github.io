
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from 'lucide-react'import { toast } from "@/components/ui/use-toast"
import { HELP_CATEGORIES } from "./help-content"
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { HELP_CATEGORIES } from "./help-content";


export function HelpArticleView(): any ({ articleId }: HelpArticleViewProps) {;
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);


    year: "numeric",;
    month: "long",;
    day: "numeric", });
};
;
