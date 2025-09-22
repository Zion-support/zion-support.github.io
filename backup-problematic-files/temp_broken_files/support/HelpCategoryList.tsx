
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
;
interface HelpCategoryListProps {;
  categories:HelpCategory[],;
  onCategorySelect:(categoryId:string) => void,;
  searchQuery:string;
}
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery } HelpCategoryListProps) {;
  // Filter categories based on search query;
  const filteredCategories = searchQuery;
    ? categories.filter(;
        category =>;
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          category.articles.some(;
            article =>;
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
              article.content.toLowerCase().includes(searchQuery.toLowerCase());
          );
      );
    :categories,;
;
  if (filteredCategories.length === 0) {;
    return (;
      <div className="text-center py-8">;
        <h3 className="text-lg font-medium mb-2">No results found</h3>;
        <p className="text-zion-slate-light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>;

            </p>;
          </CardContent>;
        </Card>;
      ))}
    </div>;
