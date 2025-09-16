
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HelpCategory} from "./types";



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


=======
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCategory } from "./types";
>>>>>>> origin/auto/autonomy-17186719616

interface HelpCategoryListProps {
  categories: HelpCategory[];
  onCategorySelect: (categoryId: string) => void;
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
