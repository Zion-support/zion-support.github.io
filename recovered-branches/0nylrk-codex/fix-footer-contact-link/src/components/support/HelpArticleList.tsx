<<<<<<< HEAD

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string}

export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find($2);
  if (!category) {
    return <div>Category not found</div>
  }
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",

<<<<<<< HEAD
=======


import React from "react";

import React from "react";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleListProps {
  categoryId: string;
  onArticleSelect: (articleId: string) => void;
  searchQuery: string
}

export function HelpArticleList({
  categoryId
  onArticleSelect
  searchQuery
}: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find((cat) => cat.id === categoryId);
  if (!category) {
    return <div>Category not found</div>;
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
<<<<<<< HEAD
=======
}

<<<<<<< HEAD
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HELP_CATEGORIES } from "./help-content",;
=======
<<<<<<< HEAD
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <div>Category not found</div>
>>>>>>> merged-prs-20250907-203621
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
  }

  // Filter articles based on search query
  const filteredArticles = $2;
=======

  }
  
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HELP_CATEGORIES } from "./help-content";
interface HelpArticleListProps {
  categoryId: string;
  onArticleSelect: (articleId: string) => void;
  searchQuery: string;
}

export function HelpArticleList({
  categoryId,
  onArticleSelect,
  searchQuery,
}: HelpArticleListProps) {
  const category = HELP_CATEGORIES.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  }
  
=======

  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Filter articles based on search query
  const filteredArticles = searchQuery
    ? category.articles.filter(
        (article) =>
<<<<<<< HEAD
=======
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    : category.articles,
  


article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
: category.articles;

    : category.articles;
    : category.articles,
  
>>>>>>> merged-prs-20250907-203621
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-zion-slate-light">{category.description}</p>
      </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
  )
}
<<<<<<< HEAD
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
  })
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface HelpArticleListProps {;
  categoryId: string,;
  onArticleSelect: (articleId: string) => void,;
  searchQuery: string;
}
<<<<<<< HEAD
;
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId),;
  if (!category) {;

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
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
      {filteredArticles && filteredArticles.length === 0 ? (;

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HELP_CATEGORIES } from "./help-content",;
;
interface HelpArticleListProps {;
  categoryId:string,;
  onArticleSelect:(articleId:string) => void,;
  searchQuery:string;
}
;
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery } HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId),;
  ;
  if (!category) {;
    return <div>Category not found</div>,;
  }
  ;
  // Filter articles based on search query;
  const filteredArticles = searchQuery;
    ? category.articles.filter(;
        article =>;
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          article.content.toLowerCase().includes(searchQuery.toLowerCase());
      );
    :category.articles,;
  ;
  return (;
    <div>;
      <div className="mb-6">;
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>;
        <p className="text-zion-slate-light">{category.description}</p>;
      </div>;
      ;
      {filteredArticles.length === 0 ? (;
        <div className="text-center py-8">;
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
<<<<<<< HEAD

              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
            >;"
              <CardHeader className="pb-2">;"
                <CardTitle className="text-lg">{article && article.title}</CardTitle>;"
                <CardDescription className="text-zion-slate-light text-sm">;
                  Last updated: {formatDate(article && article.lastUpdated)}

                </p>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      )}
=======
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
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text-sm text-zion-slate-light truncate">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
    </div>;
  ),;
}
<<<<<<< HEAD
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
    </div>;
  ),;
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  })
  })

<<<<<<< HEAD
=======
<<<<<<< HEAD
;
function formatDate(date:string):string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year:"numeric",;
    month:"long",;
    day:"numeric";
  }),; interface HelpArticleListProps {
  categoryId: string;
onArticleSelect: (articleId: string) => void;
searchQuery: string 
}export function HelpArticleList ({
  categoryId, onArticleSelect, searchQuery 
}: HelpArticleListProps) {
  const category = HELP CATEGORIES.find (cat => cat.id === categoryId);
if (!category) {
  return <div>Category not found</div> 
}return (<div> </p> </CardContent> </Card>) ) 
}</div>) 
}</div>) 
}
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
year: "numeric"
    month: "long"
    day: "numeric"

  });
}

  });
}

  })
  })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}
;
function formatDate(date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric";
    month: "long";
    day: "numeric";
  });
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
