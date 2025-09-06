<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx

=======


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";

=======
import React from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";

import { HelpCategory } from "./types";
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string
}
export function HelpCategoryList({
  categories
  onCategorySelect
  searchQuery
<<<<<<< HEAD
=======

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCategory } from "./types";
interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string;
}

export function HelpCategoryList({
  categories,
  onCategorySelect,
  searchQuery,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: HelpCategoryListProps) {
  // Filter categories based on search query

  const filteredCategories = searchQuery
    ? categories.filter(
        (category) =>
<<<<<<< HEAD
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
=======
category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          category.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) |
          category.articles.some(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
              article.content.toLowerCase().includes(searchQuery.toLowerCase())
          )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
=======

      )
    : categories,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
export function HelpCategoryList(): any ({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
  // Filter categories based on search query;
  const filteredCategories = searchQuery;
    ? categories && categories.filter(;
        category =>;
          category && category.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.articles.some(;
            article =>;
              article && article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
              article && article.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          );
      );
    : categories;
  if (filteredCategories && filteredCategories.length === 0) {;
    return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx

=======
    );
  }
=======
);
    : categories;
=======
      );
    : categories;
      )
    : categories,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  if (filteredCategories.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium mb-2">No results found</h3>
        <p className="text-zion-slate-light">
          Try adjusting your search query or browse all categories.
        </p>
      </div>
    );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
        <Card
          key={category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category.id)}
        >
          <CardHeader className="pb-2">
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">
              {category.icon}
            </div>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zion-slate-light">
              {category.articles.length} articles
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
========
=======

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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
    : categories;
  if (filteredCategories.length === 0) {;
    return (;

========
    :categories,;
;
  if (filteredCategories.length === 0) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
      <div className="text-center py-8">;
        <h3 className="text-lg font-medium mb-2">No results found</h3>;
        <p className="text-zion-slate-light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>;
<<<<<<< HEAD
    );
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;

========
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
        <Card
          key={category && category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category && category.id)}
        >;
          <CardHeader className="pb-2">;
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">;
              {category && category.icon}
            </div>;
            <CardTitle>{category && category.name}</CardTitle>;
            <CardDescription>{category && category.description}</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-zion-slate-light">;
              {category && category.articles.length} articles;
=======
    ),;
  }
;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories.map(category => (;
        <Card;
          key={category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors";
          onClick={() => onCategorySelect(category.id)}
        >;
          <CardHeader className="pb-2">;
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">;
              {category.icon}
            </div>;
            <CardTitle>{category.name}</CardTitle>;
            <CardDescription>{category.description}</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-zion-slate-light">;
              {category.articles.length} articles;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </p>;
          </CardContent>;
        </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
=======
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
=======
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card
          key={category.id}
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category.id)}
        >
          <CardHeader className="pb-2">
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">
              {category.icon}
            </div>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zion-slate-light">
              {category.articles.length} articles
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      ))}

========
      ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/HelpCategoryList.tsx
import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { HelpCategory  } from './types';
interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (category_id: string) => void;
  search_query: string;
}
export /**
 * HelpCategoryList - Function description
 */
function HelpCategoryList() {
  // Filter categories based on search query;
  const filtered_categories = search_query;
    ? categories.filter (
        (category) =>;
          category.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
          category.description;
            .toLowerCase ();
            .includes (search_query.toLowerCase ()) ||;
          category.articles.some (
            (article) =>;
              article.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
              article.content.toLowerCase ().includes (search_query.toLowerCase ()),
          ),
      );
    : categories;
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 8">;
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;
        <p className="text - zion - slate - light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>);
  }
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
      {filtered_categories.map ((category) => (
        <Card;
          key={category.id}
          className="cursor - pointer hover:border - zion - purple / 50 transition - colors";
          on_click={() => onCategorySelect (category.id)}
        >;
          <CardHeader className="pb - 2">;
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;
              {category.icon}
            </div>;
            <CardTitle>{category.name}</CardTitle>;
            <CardDescription>{category.description}</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <p className="text - sm text - zion - slate - light">;
              {category.articles.length} articles;
            </p>;
          </CardContent>;
        </Card>))}
    </div>);
}
=======
  ),;}
 interface HelpCategoryListProps {
  categories: HelpCategory[];
onCategorySelect: (categoryId: string) => void;
searchQuery: string 
}categories, onCategorySelect, searchQuery 
}: HelpCategoryListProps) {
  //Filter categories based on search query const filteredCategories = searchQuery ? categories.filter (category => category.name.toLowerCase () .includes (searchQuery.toLowerCase () ) || category.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || category.articles.some (article => article.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || article.content.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) : categories;
if (filteredCategories.length === 0) {
  return (<div className="text-center py-8" > <h3 className="text-lg font-medium mb-2" >No results found</h3> <p className="text-zion-slate-light" > Try adjusting your search query or browse all categories. </p> </div> </div> <CardTitle> {
  category.name 
}</CardTitle> <CardDescription> {
  category.description 
}</CardDescription> </CardHeader> <CardContent> </p> </CardContent> </Card>) ) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      ))}
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
