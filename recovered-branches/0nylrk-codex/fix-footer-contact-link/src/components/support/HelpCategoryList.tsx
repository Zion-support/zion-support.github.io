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

import { HelpCategory } from "./types";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";

=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { HelpCategory } from "./types",
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string
}
export function HelpCategoryList({
  categories
  onCategorySelect
  searchQuery
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { HelpCategory } from "./types";
interface HelpCategoryListProps {}
=======

interface HelpCategoryListProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
  searchQuery: string;
}
  CardTitle,"
} from "@/components/ui/card";""
import { HelpCategory } from "./types";"
interface HelpCategoryListProps {
  // TODO: Implement
  categories: HelpCategory[];,
  onCategorySelect: (categoryId: string) => void;,
  searchQuery: string;
pr-12325

export function HelpCategoryList({}
  categories,
  onCategorySelect,
  searchQuery,
<<<<<<< HEAD
}: HelpCategoryListProps) {};
  // Filter categories based on search query;
  const filteredCategories = searchQuery;
    ? categories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.description;
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          category.articles.some(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.content.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
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
    : categories;
  if (filteredCategories && filteredCategories.length === 0) {;
    return ("
      <div className="text-center py-8">"
        <h3 className="text-lg font-medium mb-2">No results found</h3>"
=======
}: HelpCategoryListProps) {
  // Filter categories based on search query

    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium mb-2">No results found</h3>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <p className="text-zion-slate-light">
          Try adjusting your search query or browse all categories.
        </p>
      </div>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


    );
  }
);
    : categories;
      );
    : categories;
      )
    : categories,

  if (filteredCategories.length === 0) {}
    return ("
      <div className="text-center py-8">"
        <h3 className="text-lg font-medium mb-2">No results found</h3>"
        <p className="text-zion-slate-light">
          Try adjusting your search query or browse all categories.
        </p>
      </div>
    );
}
  return ("
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
        <Card;
          key={category.id}"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category.id)}
        >"
          <CardHeader className="pb-2">"
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">
              {category.icon}
            </div>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>"
            <p className="text-sm text-zion-slate-light">
              {category.articles.length} articles;
            </p>
          </CardContent>
        </Card>"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { HelpCategory } from "./types",;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    );
  }
);
    : categories;
      );
    : categories;
      )
    : categories,

<<<<<<< HEAD
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
=======



    : categories;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  if (filteredCategories && filteredCategories.length === 0) {;
    return (
  return ("
=======
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
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
<<<<<<< HEAD
        <Card
<<<<<<< HEAD
    );
  }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;

    : categories;

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
        <Card          key={category.id}
<<<<<<< HEAD
=======
          key={category.id}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
<<<<<<< HEAD
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { HelpCategory } from "./types",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface HelpCategoryListProps {;
  categories: HelpCategory[],;
  onCategorySelect: (categoryId: string) => void,;
  searchQuery: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
=======
;
interface HelpCategoryListProps {;
  categories:HelpCategory[],;
  onCategorySelect:(categoryId:string) => void,;
  searchQuery:string;
}
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery } HelpCategoryListProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
    : categories;
  if (filteredCategories.length === 0) {;
    return (;

=======
    :categories,;
;
  if (filteredCategories.length === 0) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="text-center py-8">;
        <h3 className="text-lg font-medium mb-2">No results found</h3>;
        <p className="text-zion-slate-light">;
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    );
  }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    : categories;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
            </p>;
          </CardContent>;
        </Card>;
=======
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
            </p>;
          </CardContent>;
        </Card>;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
  }

  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
        <Card
          key={category.id}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
)

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    : categories;

  if (filteredCategories && filteredCategories.length === 0) {;
    return (
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map((category) => (
        <Card
          key={category.id}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    );
  }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      {filteredCategories && filteredCategories.map(category => (;

    : categories;

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredCategories.map(category => (
        <Card          key={category.id}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"
          onClick={() => onCategorySelect(category.id)}
        >
          <CardHeader className="pb-2">
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">
              {category.icon}
    return ("
      <div className="text-center py-8">"
</div>"
        <h3 className="text-lg font-medium mb-2">No results found</h3>""
        <p className="text-zion-slate-light">"
</p>
        </p>
      </div>"
      <div className="text-center py-8">"
</div>"
        <h3 className="text-lg font-medium mb-2">No results found</h3>""
        <p className="text-zion-slate-light">"
</p>
        </p>
      </div>"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
        <Card;
          key={category.id}"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"")
          onClick={() => onCategorySelect(category.id)}
</Card>"
          <CardHeader className="pb-2">"
</CardHeader>"
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">"
</div>
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
export function HelpCategoryList({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Card;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ))}
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ))}
=======


      ))}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from './react';
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,';
} from '@/components / ui / card';'
import { HelpCategory  } from './types';
interface HelpCategoryListProps {}
  categories: HelpCategory[];
  onCategorySelect: (category_id: string) => void;
  search_query: string;
}
export /**;
 * HelpCategoryList - Function description;
 */
function HelpCategoryList() {}
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
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="text - center py-8">;
        <h3 className="text - lg font - medium mb-2">No results found</h3>;
        <p className="text - zion - slate-light">;
=======
    return ("
      <div className="text - center py - 8">;"
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;"
        <p className="text - zion - slate - light">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="text - center py - 8">;
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;
        <p className="text - zion - slate - light">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="text - center py-8">;
        <h3 className="text - lg font - medium mb-2">No results found</h3>;
        <p className="text - zion - slate-light">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          Try adjusting your search query or browse all categories.;
        </p>;
      </div>);
  }
<<<<<<< HEAD
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
      {filtered_categories.map ((category) => (
        <Card;
          key={category.id}
          className="cursor - pointer hover:border - zion - purple / 50 transition-colors";
          on_click={() => onCategorySelect (category.id)}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
          <CardHeader className="pb-2">;
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb-3">;
=======
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
      {filtered_categories.map ((category) => (
        <Card;
          key={category.id}"
          className="cursor - pointer hover:border - zion - purple / 50 transition - colors";
          on_click={() => onCategorySelect (category.id)}
        >;"
          <CardHeader className="pb - 2">;"
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <CardHeader className="pb - 2">;
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <CardHeader className="pb-2">;
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb-3">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {category.icon}
</CardContent>"
            <p className="text-sm text-zion-slate-light">"
</p>
            </p>
          </CardContent>
        </Card>"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
        <Card;
          key={category.id}"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors""
          onClick={() => onCategorySelect(category.id)}
</Card>"
          <CardHeader className="pb-2">"
</CardHeader>"
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">"
</div>
            </div>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
</CardContent>"
            <p className="text-sm text-zion-slate-light">"
</p>
            </p>
          </CardContent>
        </Card>
    </div>"
      <div className="text - center py - 8">;"
</div>"
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;""
        <p className="text - zion - slate - light">;"
</p>
        </p>;
      </div>);"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
        <Card;
          key={category.id}"
          className="cursor - pointer hover:border - zion - purple / 50 transition - colors";"
          on_click={() => onCategorySelect (category.id)}
</Card>"
          <CardHeader className="pb - 2">;"
</CardHeader>"
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;"
</div>
            </div>;
            <CardTitle>{category.name}</CardTitle>;
            <CardDescription>{category.description}</CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text - sm text - zion - slate-light">;
=======
          <CardContent>;"
            <p className="text - sm text - zion - slate - light">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <p className="text - sm text - zion - slate - light">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <p className="text - sm text - zion - slate-light">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {category.articles.length} articles;
            </p>;
          </CardContent>;
        </Card>))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}


export function HelpCategoryList(): any ({ categories, onCategorySelect, searchQuery }: HelpCategoryListProps) {;
  // Filter categories based on search query;
    ? categories && categories.filter(;
        category =>;)
          category && category.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
          category && category.articles.some(;
            article =>;)
              article && article.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
              article && article.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
          );
    : categories;
  if (filteredCategories && filteredCategories.length === 0) {;
    return ("
      <div className="text-center py-8">"
</div>"
        <h3 className="text-lg font-medium mb-2">No results found</h3>""
        <p className="text-zion-slate-light">"
</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
        <Card;
          key={category.id}"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors"")
          onClick={() => onCategorySelect(category.id)}
"
          <CardHeader className="pb-2">"
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">"
            <CardTitle>{category.name}
            <CardDescription>{category.description}
          <CardContent>
            <p className="text-sm text-zion-slate-light">"
          className="cursor-pointer hover:border-zion-purple/50 transition-colors""
      <div className="text - center py - 8">;"
        <h3 className="text - lg font - medium mb - 2">No results found</h3>;""
        <p className="text - zion - slate - light">;"
        </p>;
      </div>);"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
          className="cursor - pointer hover:border - zion - purple / 50 transition - colors";"
          on_click={() => onCategorySelect (category.id)}
          <CardHeader className="pb - 2">;"
            <div className="w - 10 h - 10 rounded - full bg - zion - purple / 10 flex items - center justify - center mb - 3">;"
            </div>;
            <CardTitle>{category.name};
            <CardDescription>{category.description};
          ;
          <CardContent>;
            <p className="text - sm text - zion - slate - light">;"
        ))}
pr-12325
</CardContent>"
            <p className="text - sm text - zion - slate - light">;"
</p>
            </p>;
          </CardContent>;
        </Card>))}
    </div>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
