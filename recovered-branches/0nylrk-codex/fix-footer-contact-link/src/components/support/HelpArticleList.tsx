

<<<<<<< HEAD
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

=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HELP_CATEGORIES } from "./help-content",;

interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HELP_CATEGORIES } from "./help-content",;
interface HelpArticleListProps {;
  categoryId: string,;
  onArticleSelect: (articleId: string) => void,;
  searchQuery: string;
}
;
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId),;
  if (!category) {;
    return <div>Category not found</div>;  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-zion-slate-light">{category.description}</p>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-8">
          <h3 className="text-lg font-medium mb-2">No articles found</h3>
          <p className="text-zion-slate-light">
            Try adjusting your search query or browse another category.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
              onClick={() => onArticleSelect(article.id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
                  Last updated: {formatDate(article.lastUpdated)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zion-slate-light truncate">
                  {article.content.substring(0, 120)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
export function HelpArticleList(): any ({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES && HELP_CATEGORIES.find(cat => cat && cat.id === categoryId);

  if (!category) {;
    return <div>Category not found</div>;
  }

  // Filter articles based on search query;
  const filteredArticles = searchQuery;
    ? category && category.articles.filter(;
        article =>;
          article && article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          article && article.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
      );
    : category && category.articles;

  return (
    <div>;
      <div className="mb-6">;
        <h2 className="text-2xl font-bold mb-2">{category && category.name}</h2>;
        <p className="text-zion-slate-light">{category && category.description}</p>;
      </div>;

      {filteredArticles && filteredArticles.length === 0 ? (;        <div className="text-center py-8">;
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
      ) : (;
        <div className="space-y-4">;
          {filteredArticles && filteredArticles.map(article => (;
              key={article && article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
            >;
              <CardHeader className="pb-2">;
                <CardTitle className="text-lg">{article && article.title}</CardTitle>;
                <CardDescription className="text-zion-slate-light text-sm">;
                  Last updated: {formatDate(article && article.lastUpdated)}
      ) :(;
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
                  Last updated:{formatDate(article.lastUpdated)}
                </p>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      )}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
>>>>>>> origin/main
    day: "numeric"

    </div>;
  );  })
  })

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
import { HELP_CATEGORIES } from "./help-content";"
interface HelpArticleListProps {
  // TODO: Implement
  categoryId: string;,
  onArticleSelect: (articleId: string) => void;,
  searchQuery: string;

}

export function HelpArticleList({
  categoryId,

  onArticleSelect,
  searchQuery,)
}: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
    <div>
</div>"
      <div className="mb-6">"
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>""
        <p className="text-zion-slate-light">{category.description}</p>"
        <div className="text-center py-8">"
          <h3 className="text-lg font-medium mb-2">No articles found</h3>""
          <p className="text-zion-slate-light">"
</p>
        <div className="space-y-4">"
</div>
            <Card;
              key={article.id}"
              className="cursor-pointer hover:border-zion-purple/50 transition-colors""
              onClick={() => onArticleSelect(article.id)}
"
              <CardHeader className="pb-2">"
                <CardTitle className="text-lg">{article.title}""
                <CardDescription className="text-zion-slate-light text-sm">"

                
              
              <CardContent>
                <p className="text-sm text-zion-slate-light truncate">"
              
            

                
              
              
            
</p>

                </p>
              </CardContent>
            </Card>
        </div>
    </div>

            <Card;
              key={article.id}"
              className="cursor-pointer hover:border-zion-purple/50 transition-colors""
              onClick={() => onArticleSelect(article.id)}
</Card>"
              <CardHeader className="pb-2">"
</CardHeader>"
                <CardTitle className="text-lg">{article.title}</CardTitle>""
                <CardDescription className="text-zion-slate-light text-sm">"
</CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
</CardContent>"
                <p className="text-sm text-zion-slate-light truncate">"
</p>
                </p>
              </CardContent>
            </Card>
        </div>
    </div>
    return <div>Category not found</div>;
    <div>;
      <div className="mb-6">;"
        <h2 className="text-2xl font-bold mb-2">{category && category.name}</h2>;""
        <p className="text-zion-slate-light">{category && category.description}</p>;"
      </div>;"
        <div className="text-center py-8">;"
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;""
          <p className="text-zion-slate-light">;"
          </p>;
        <div className="space-y-4">;"
              key={article && article.id}"
            >;
              <CardHeader className="pb-2">;"
                <CardTitle className="text-lg">{article && article.title};""
                <CardDescription className="text-zion-slate-light text-sm">;"

                ;
              <CardContent>;
                <p className="text-sm text-zion-slate-light truncate">;"
        </div>;
    return <div > Category not found</div>;
      <div className="mb - 6">;"
        <h2 className="text - 2xl font - bold mb - 2">{category.name}</h2>;""
        <p className="text - zion - slate - light">{category.description}</p>;"
        <div className="text - center py - 8">;"
          <h3 className="text - lg font - medium mb - 2">No articles found</h3>;""
          <p className="text - zion - slate - light">;"
        </div>) : ("
        <div className="space - y-4">;"
              className="cursor - pointer hover:border - zion - purple / 50 transition - colors";")
              on_click={() => onArticleSelect (article.id)}
              <CardHeader className="pb - 2">;"
                <CardTitle className="text - lg">{article.title};""
                <CardDescription className="text - zion - slate - light text - sm">;"

                <p className="text - sm text - zion - slate - light truncate">;"
            ))}
        </div>)}
    </div>);
            ;          ))}
  return <div>Category not found</div> 
}return (<div> </p>  ) ) 
}</div>) 
}</div>) "
pr-12325

