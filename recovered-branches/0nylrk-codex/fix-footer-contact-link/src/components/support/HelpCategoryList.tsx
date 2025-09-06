
import React from "react";
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { HelpCategory } from "./types";
interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string
}
export function HelpCategoryList({
  categories
  onCategorySelect
  searchQuery
}: HelpCategoryListProps) {
  // Filter categories based on search query

  const filteredCategories = searchQuery
    ? categories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
          category.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) |
          category.articles.some(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
              article.content.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}

export function HelpCategoryList(): any ({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
  // Filter categories based on search query;
  const filteredCategories = searchQuery;
    ? categories && categories.filter(;
        category =>;
          category && category.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.articles.some(;
            article =>;
              article && article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
              article && article.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          );
      );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    : categories;

  if (filteredCategories && filteredCategories.length === 0) {;
    return (
<<<<<<< HEAD
      <div className="text-center py-8">
        <h3 className="text-lg font-medium mb-2">No results found</h3>
        <p className="text-zion-slate-light">
          Try adjusting your search query or browse all categories.
        </p>
      </div>
=======
      <div className="text-center py-8">;
        <h3 className="text-lg font-medium mb-2">No results found</h3>;
        <p className="text-zion-slate-light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
=======
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Card
          key={category && category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category && category.id)}
        >;
          <CardHeader className="pb-2">;
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">;
              {category && category.icon}
            </div>;
            <CardTitle>{category && category.name}</CardTitle>;
            <CardDescription>{category && category.description}</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-zion-slate-light">;
              {category && category.articles.length} articles;
            </p>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
    </div>
  );
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
