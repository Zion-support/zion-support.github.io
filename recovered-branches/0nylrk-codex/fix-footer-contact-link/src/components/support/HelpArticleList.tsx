<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx

=======


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HELP_CATEGORIES} from "./help-content";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HELP_CATEGORIES } from "./help-content",

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface HelpArticleListProps {
  categoryId: string,
  onArticleSelect: (articleId: string) => void,
  searchQuery: string

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Filter articles based on search query
  const filteredArticles = searchQuery
    ? category.articles.filter(
        (article) =>
<<<<<<< HEAD
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )

<<<<<<< HEAD
=======

    : category.articles,
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
: category.articles;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-zion-slate-light">{category.description}</p>
      </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="text-center py-8">;
          <h3 className="text-lg font-medium mb-2">No articles found</h3>;
          <p className="text-zion-slate-light">;
            Try adjusting your search query or browse another category.;
          </p>;
        </div>;
<<<<<<< HEAD
      ) : (;
        <div className="space-y-4">;
          {filteredArticles && filteredArticles.map(article => (;
            <Card
              key={article && article.id}
              className="cursor-pointer hover:border-zion-purple/50 transition-colors"
              onClick={() => onArticleSelect(article && article.id)}
            >;
              <CardHeader className="pb-2">;
                <CardTitle className="text-lg">{article && article.title}</CardTitle>;
                <CardDescription className="text-zion-slate-light text-sm">;
                  Last updated: {formatDate(article && article.lastUpdated)}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text-sm text-zion-slate-light truncate">;
<<<<<<< HEAD
                  {article && article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric"
    month: "long"
    day: "numeric"
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx
    </div>;
  );
}
function formatDate(): any (date: string): string {;
  return new Date(date).toLocaleDateString("en-US", {;
    year: "numeric",;
    month: "long",;
    day: "numeric";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx
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
export /**
 * HelpArticleList - Function description
 */
function HelpArticleList() {
  const category = HELP_CATEGORIES.find ((cat) => cat.id === category_id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
                  {article.content.substring(0, 120)}...;
                </p>;
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
    </div>;
  ),;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  })
=======
  })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpArticleList.tsx
=======

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
year: "numeric"
    month: "long"
    day: "numeric"

  });
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
