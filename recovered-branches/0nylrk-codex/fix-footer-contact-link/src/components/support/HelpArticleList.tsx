
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
    : category.articles;
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{_category.name}</h2>
        <p className="text-zion-slate-light">{_category.description}</p>
      </div>
      
      {_filteredArticles.length === 0 ? (
        <div className="text-center py-8">
          <h3 className="text-lg font-medium mb-2">No articles found</h3>
          <p className="text-zion-slate-light">
            Try adjusting your search query or browse another category.
          </p>
        </div>
      ) : (_<div className="space-y-4">
          {filteredArticles.map(article => (
            <Card
              key={article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
              onClick={_() => onArticleSelect(article.id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{_article.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
                  Last updated: {_formatDate(article.lastUpdated)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zion-slate-light truncate">
                  {_article.content.substring(0, _120)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(_date: string): string {_return new Date(date).toLocaleDateString("en-US", _{
    year: "numeric", _month: "long", _day: "numeric"});
}
