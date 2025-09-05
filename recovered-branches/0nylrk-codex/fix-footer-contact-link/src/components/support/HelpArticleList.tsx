
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { HELP_CATEGORIES } from &quot;./help-content&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleListProps {;
  categoryId: string,;
  onArticleSelect: (articleId: string) => void,;
  searchQuery: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId),;
  if (!category) {;
    return <div>Category not found</div>;
  }
<<<<<<< HEAD
  
  // Filter articles based on search query
  const filteredArticles = searchQuery
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
                  {article.content.substring(0, 120)}...
                </p>
              </CardContent>
            </Card>
=======
;
  // Filter articles based on search query;
  const filteredArticles = searchQuery;
    ? category.articles.filter(;
        article =>;
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          article.content.toLowerCase().includes(searchQuery.toLowerCase());
      );
    : category.articles,;
  return (;
    <div>;
      <div className="mb-6">;
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>;
        <p className="text-zion-slate-light">{category.description}</p>;
      </div>;
      {filteredArticles.length === 0 ? (;
        <div className="text-center py-8">;
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
      ) : (;
        <div className="space-y-4">;
          {filteredArticles.map(article => (;
            <Card;
              key={article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors";
              onClick={() => onArticleSelect(article.id)}
            >;
              <CardHeader className="pb-2">;
                <CardTitle className="text-lg">{article.title}</CardTitle>;
                <CardDescription className="text-zion-slate-light text-sm">;
                  Last updated: {formatDate(article.lastUpdated)}
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text-sm text-zion-slate-light truncate">;
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      )}
    </div>;
  );
}
<<<<<<< HEAD

function formatDate(date: string): string {
<<<<<<< HEAD
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
=======
  return new Date(date).toLocaleDateString(&quot;en-US&quot;, {
    year: &quot;numeric&quot;,
    month: &quot;long&quot;,
    day: &quot;numeric&quot;
  });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
function formatDate(date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric";
    month: "long";
    day: "numeric";
  });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;