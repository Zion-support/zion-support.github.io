
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleListProps {
  categoryId: string;
  onArticleSelect: (articleId: string) => void;
  searchQuery: string
}

export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {
  const category = null;
    day: "numeric"
  })
}
