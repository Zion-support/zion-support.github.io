<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

export function HelpArticleList({
  categoryId
  onArticleSelect
  searchQuery
}: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find((cat) => cat.id === categoryId);
  if (!category) {
    return <div>Category not found</div>;
  }
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
}

}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
return <div>Category not found</div>;
<<<<<<< HEAD
import React from "react";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { HELP_CATEGORIES } from "./help-content";

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
export function HelpArticleList({}
  categoryId,
  onArticleSelect,
  searchQuery,
}: HelpArticleListProps) {};
  const category = HELP_CATEGORIES.find((cat) => cat.id === categoryId);

  if (!category) {}
    return <div>Category not found</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  // Filter articles based on search query;
  const filteredArticles = searchQuery;
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
}

  // Filter articles based on search query
  const filteredArticles = searchQuery
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ? category.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : category.articles;

article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )

  return (
<<<<<<< HEAD
=======
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : category.articles,

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
=======
    <div>"
      <div className="mb-6">"
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-zion-slate-light">{category.description}</p>
      </div>

      {filteredArticles.length === 0 ? ("
        <div className="text-center py-8">"
          <h3 className="text-lg font-medium mb-2">No articles found</h3>"
          <p className="text-zion-slate-light">
            Try adjusting your search query or browse another category.
          </p>
        </div>
      ) : ("
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <Card;
              key={article.id}"
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
              onClick={() => onArticleSelect(article.id)}
            >"
              <CardHeader className="pb-2">"
                <CardTitle className="text-lg">{article.title}</CardTitle>"
                <CardDescription className="text-zion-slate-light text-sm">
                  Last updated: {formatDate(article.lastUpdated)}
                </CardDescription>
              </CardHeader>
              <CardContent>"
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
<CardDescription className="text-zion-slate-light text-sm">
                  Last updated: {formatDate(article.lastUpdated)}
                </CardDescription>
              </CardHeader>
<CardContent>"
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    <div>;"
      <div className="mb-6">;"
        <h2 className="text-2xl font-bold mb-2">{category && category.name}</h2>;"
        <p className="text-zion-slate-light">{category && category.description}</p>;
      </div>;
{filteredArticles && filteredArticles.length === 0 ? (;
        <div className="text-center py-8">;
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
) : (;
        <div className="space-y-4">;
          {filteredArticles && filteredArticles.map(article => (;
            <Card
              key={article && article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
            >;"
              <CardHeader className="pb-2">;"
                <CardTitle className="text-lg">{article && article.title}</CardTitle>;"
                <CardDescription className="text-zion-slate-light text-sm">;
                  Last updated: {formatDate(article && article.lastUpdated)}
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
    day: "numeric"
<<<<<<< HEAD
  });
}

  })
  })

function formatDate(date: string): string {"
  return new Date(date).toLocaleDateString("en-US", {}
}

function formatDate(): any (date: string): string {;"
  return new Date(date).toLocaleDateString("en-US", {;"
    year: "numeric",;"
    month: "long",;"
    day: "numeric";

  });
}

import React from './react';
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,';
} from '@/components / ui / card';'
import { HELP_CATEGORIES  } from './help - content';
interface HelpArticleListProps {}
  category_id: string;
  onArticleSelect: (article_id: string) => void;
  search_query: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
  // Check condition;
if ( {) {}
  $2;
}
    return <div > Category not found</div>;
  }
  // Filter articles based on search query;
  const filtered_articles = search_query;
    ? category.articles.filter (
        (article) =>;
          article.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
          article.content.toLowerCase ().includes (search_query.toLowerCase ()),
      );
    : category.articles;
;
  return (
    <div>;"
      <div className="mb - 6">;"
        <h2 className="text - 2xl font - bold mb - 2">{category.name}</h2>;"
        <p className="text - zion - slate - light">{category.description}</p>;
      </div>;
      {filtered_articles.length === 0 ? ("
        <div className="text - center py - 8">;"
          <h3 className="text - lg font - medium mb - 2">No articles found</h3>;"
          <p className="text - zion - slate - light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>) : ("
        <div className="space - y-4">;
          {filtered_articles.map ((article) => (
            <Card;
              key={article.id}"
              className="cursor - pointer hover:border - zion - purple / 50 transition - colors";
              on_click={() => onArticleSelect (article.id)}
            >;"
              <CardHeader className="pb - 2">;"
                <CardTitle className="text - lg">{article.title}</CardTitle>;"
                <CardDescription className="text - zion - slate - light text - sm">;
                  Last updated: {format_date (article.last_updated)}
                </CardDescription>;
              </CardHeader>;
              <CardContent>;"
                <p className="text - sm text - zion - slate - light truncate">;
                  {article.content.substring (0, 120)}...;
                </p>;
              </CardContent>;
            </Card>))}
        </div>)}
    </div>);
}
function format_date (date: string): string {"
  return new Date (date).toLocaleDateString ("en - US", {"
    year: "numeric","
    month: "long","
    day: "numeric",
  });
<<<<<<< HEAD
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
    </div>;
  ),;
}

  })
  })

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
year: "numeric"
    month: "long"
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    day: "numeric"

    </div>;
  );
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
}

function formatDate(): any (date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric";

  });
}

import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { HELP_CATEGORIES  } from './help - content';
interface HelpArticleListProps {
  category_id: string;
  onArticleSelect: (article_id: string) => void;
  search_query: string;
}
;
  // Check condition
if ( {) {
  $2
}
    return <div > Category not found</div>;
  }
  // Filter articles based on search query;
  const filtered_articles = search_query;
    ? category.articles.filter (
        (article) =>;
          article.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
          article.content.toLowerCase ().includes (search_query.toLowerCase ()),
      );
    : category.articles;
;
  return (
    <div>;
      <div className="mb - 6">;
        <h2 className="text - 2xl font - bold mb - 2">{category.name}</h2>;
        <p className="text - zion - slate - light">{category.description}</p>;
      </div>;
      {filtered_articles.length === 0 ? (
        <div className="text - center py - 8">;
          <h3 className="text - lg font - medium mb - 2">No articles found</h3>;
          <p className="text - zion - slate - light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>) : (
        <div className="space - y-4">;
          {filtered_articles.map ((article) => (
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
}
function format_date (date: string): string {
  return new Date (date).toLocaleDateString ("en - US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
    </div>;
  ),;
}

  })
  })

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
function formatDate(date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric";
    month: "long";
    day: "numeric";
  });
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
