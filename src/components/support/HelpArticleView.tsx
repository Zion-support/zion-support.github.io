
import React, { useState } from "react",;
import { Button } from "@/components/ui/button";,
import { Card } from "@/components/ui/card";,
import { ThumbsUp; ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";,
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { ThumbsUpThumbsDown } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",;
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleViewProps {
articleId: string;
}
}
}
export function HelpArticleView({ articleId }: HelpArticleViewProps) {
const [feedbackGiven; setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);
// Find the article in all categories;
let article = null;
for (const category of HELP_CATEGORIES) {
