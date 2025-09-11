

<<<<<<< HEAD
<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";

=======

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",



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

import { HelpCategory } from "./types";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: HelpCategoryListProps) {
  // Filter categories based on search query

  const filteredCategories = searchQuery
    ? categories.filter(
        (category) =>
<<<<<<< HEAD
<<<<<<< HEAD
category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
=======
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) |
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          category.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) |
          category.articles.some(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) |
              article.content.toLowerCase().includes(searchQuery.toLowerCase())
          )
<<<<<<< HEAD

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
<<<<<<< HEAD
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}

=======
      );
    : categories;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      )
    : categories,



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
<<<<<<< HEAD
    : categories;
  if (filteredCategories && filteredCategories.length === 0) {;
    return (
    );
  }
);
    : categories;
      );
    : categories;
      )
    : categories,

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    : categories;

  if (filteredCategories && filteredCategories.length === 0) {;
    return (

=======
    );
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;
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
    ),;
  }
<<<<<<< HEAD
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
            </p>;
          </CardContent>;
        </Card>;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
  }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      ))}
=======

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
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
    : categories;
  if (filteredCategories.length === 0) {;
    return (;

      <div className="text-center py-8">;
        <h3 className="text-lg font-medium mb-2">No results found</h3>;
        <p className="text-zion-slate-light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;

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
            </p>;
          </CardContent>;
        </Card>;
=======
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      ))}

    </div>;
  );
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
<<<<<<< HEAD
<<<<<<< HEAD
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
      ))}
    </div>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
