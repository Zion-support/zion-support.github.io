import React from "react";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { HelpCategory } from "./types";"
interface HelpCategoryListProps {
  // TODO: Implement
  categories: HelpCategory[];,
  onCategorySelect: (categoryId: string) => void;,
  searchQuery: string;

export function HelpCategoryList({
  categories,
  onCategorySelect,
  searchQuery,)
}: HelpCategoryListProps) {
  // Filter categories based on search query;
  const filteredCategories = searchQuery;
    ? categories.filter()
        (category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.description;
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          category.articles.some()
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.content.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      )
    : categories,



export function HelpCategoryList(): any ({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
  // Filter categories based on search query;
    ? categories && categories.filter(;
        category =>;)
          category && category.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.articles.some(;
            article =>;)
              article && article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
              article && article.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          );
    : categories;
  if (filteredCategories && filteredCategories.length === 0) {;
    return ("
      <div className="text-center py-8">"
</div>"
        <h3 className="text-lg font-medium mb-2">No results found</h3>""
        <p className="text-zion-slate-light">"
</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
        <Card;
          key={category.id}"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"")
          onClick={() => onCategorySelect(category.id)}
"
          <CardHeader className="pb-2">"
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">"
            <CardTitle>{category.name}
            <CardDescription>{category.description}
          
          <CardContent>
            <p className="text-sm text-zion-slate-light">"
          
          className="cursor-pointer hover:border-zion-purple/50 transition-colors""
          
          
        
      <div className="text - center py - 8">;"
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;""
        <p className="text - zion - slate - light">;"
        </p>;
      </div>);"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
          className="cursor - pointer hover:border - zion - purple / 50 transition - colors";"
          on_click={() => onCategorySelect (category.id)}
          <CardHeader className="pb - 2">;"
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;"
            </div>;
            <CardTitle>{category.name};
            <CardDescription>{category.description};
          ;
          <CardContent>;
            <p className="text - sm text - zion - slate - light">;"
        ))}