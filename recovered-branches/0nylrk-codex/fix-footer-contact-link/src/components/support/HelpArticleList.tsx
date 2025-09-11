

<<<<<<< HEAD
<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

=======

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",



<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string
<<<<<<< HEAD
}

<<<<<<< HEAD
export function HelpArticleList({ categoryId, onArticleSelect, searchQuery }: HelpArticleListProps) {;
  const category = HELP_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <div>Category not found</div>
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
=======


  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter articles based on search query
  const filteredArticles = searchQuery
    ? category.articles.filter(
        (article) =>
<<<<<<< HEAD
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

=======
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    : category.articles;
    : category.articles,
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-zion-slate-light">{category.description}</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";
interface HelpArticleListProps {;
  categoryId: string,;
  onArticleSelect: (articleId: string) => void,;
  searchQuery: string;
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
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"

    </div>;
  );
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function formatDate(): any (date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric";
<<<<<<< HEAD
  });
}
=======

  });
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export /**
 * HelpArticleList - Function description
 */
function HelpArticleList() {
  const category = HELP_CATEGORIES.find ((cat) => cat.id === category_id);
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
              key={article.id}
              className="cursor - pointer hover:border - zion - purple / 50 transition - colors";
              on_click={() => onArticleSelect (article.id)}
            >;
              <CardHeader className="pb - 2">;
                <CardTitle className="text - lg">{article.title}</CardTitle>;
                <CardDescription className="text - zion - slate - light text - sm">;
                  Last updated: {format_date (article.last_updated)}
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text - sm text - zion - slate - light truncate">;
                  {article.content.substring (0, 120)}...;
                </p>;
              </CardContent>;
            </Card>))}
        </div>)}
    </div>);
}
function format_date (date: string): string {
  return new Date (date).toLocaleDateString ("en - US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

  })
  })

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  })
=======
  })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
