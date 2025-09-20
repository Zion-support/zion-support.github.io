
,
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCategory } from "./types";
interface HelpCategoryListProps {,
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
    <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,
      {filteredCategories.map(category => (,
        <Card,
          key={category.id,}
          className="cursor-pointer hover: border-zion-purple/50 transition-colors",
          onClick={() => onCategorySelect(category.id),}
        >,
          <CardHeader className="pb-2">,
            <div className="w-10 h-10 rounded-full bg-zion-purple/10 flex items-center justify-center mb-3">,
              {category.icon}
            </div>,
            <CardTitle>{category.name}</CardTitle>,
            <CardDescription>{category.description}</CardDescription>,
          </CardHeader>,
          <CardContent>,
            <p className="text-sm text-zion-slate-light">,
              {category.articles.length} articles,
            </p>,
          </CardContent>,
        </Card>,
}}))