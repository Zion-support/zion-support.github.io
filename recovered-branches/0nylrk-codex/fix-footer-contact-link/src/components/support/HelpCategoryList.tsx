
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { HelpCategory } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface HelpCategoryListProps {
  categories: HelpCategory[],
  onCategorySelect: (categoryId: string) => void,
  searchQuery: string
}
=======
import React from "react";

interface HelpCategoryListProps {_categories: HelpCategory[];
  onCategorySelect: (_categoryId: string) => void;
  searchQuery: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function HelpCategoryList(_{_categories, _onCategorySelect, _searchQuery}: HelpCategoryListProps) {_// Filter categories based on search query
  const _filteredCategories = searchQuery
    ? categories.filter(
        category =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.articles.some(
            article =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.content.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : categories,

  if (filteredCategories.length === 0) {
    return (
      <div className=&quot;text-center py-8&quot;>
        <h3 className=&quot;text-lg font-medium mb-2&quot;>No results found</h3>
        <p className=&quot;text-zion-slate-light&quot;>
          Try adjusting your search query or browse all categories.
        </p>
      </div>
<<<<<<< HEAD
    )
  }

  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
      {filteredCategories.map(category => (
        <Card
          key={category.id}
          className=&quot;cursor-pointer hover:border-zion-purple/50 transition-colors&quot;
          onClick={() => onCategorySelect(category.id)}
        >
          <CardHeader className=&quot;pb-2&quot;>
            <div className=&quot;w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3&quot;>
              {category.icon}
=======
    );}

  return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {_filteredCategories.map(category => (
        <Card
          key={category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={_() => onCategorySelect(category.id)}
        >
          <CardHeader className="pb-2">
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">
              {_category.icon}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <CardTitle>{_category.name}</CardTitle>
            <CardDescription>{_category.description}</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <p className=&quot;text-sm text-zion-slate-light&quot;>
              {category.articles.length} articles
=======
            <p className="text-sm text-zion-slate-light">
              {_category.articles.length} articles
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
