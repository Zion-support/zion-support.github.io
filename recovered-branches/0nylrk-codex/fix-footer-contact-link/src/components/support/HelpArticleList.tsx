
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
}

export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId),
  
  if (!category) {
    return <div>Category not found</div>
  }
import React from "react";

interface HelpArticleListProps {_categoryId: string;
  onArticleSelect: (_articleId: string) => void;
  searchQuery: string;}

export function HelpArticleList(_{_categoryId, _onArticleSelect, _searchQuery}: HelpArticleListProps) {_const _category = HELP_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <div>Category not found</div>;}
  
  // Filter articles based on search query
  const _filteredArticles = searchQuery
    ? category.articles.filter(
        article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : category.articles,
  
  return (
    <div>
      <div className=&quot;mb-6&quot;>
        <h2 className=&quot;text-2xl font-bold mb-2&quot;>{category.name}</h2>
        <p className=&quot;text-zion-slate-light&quot;>{category.description}</p>
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className=&quot;text-center py-8&quot;>
          <h3 className=&quot;text-lg font-medium mb-2&quot;>No articles found</h3>
          <p className=&quot;text-zion-slate-light&quot;>
            Try adjusting your search query or browse another category.
          </p>
        </div>
      ) : (
        <div className=&quot;space-y-4&quot;>
          {filteredArticles.map(article => (
            <Card
              key={article.id}
              className=&quot;cursor-pointer hover:border-zion-purple/50 transition-colors&quot;
              onClick={() => onArticleSelect(article.id)}
            >
              <CardHeader className=&quot;pb-2&quot;>
                <CardTitle className=&quot;text-lg&quot;>{article.title}</CardTitle>
                <CardDescription className=&quot;text-zion-slate-light text-sm&quot;>
                  Last updated: {formatDate(article.lastUpdated)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-sm text-zion-slate-light truncate&quot;>
                  {article.content.substring(0, 120)}...                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })function formatDate(_date: string): string {_return new Date(date).toLocaleDateString("en-US", _{
    year: "numeric", _month: "long", _day: "numeric"});
}
