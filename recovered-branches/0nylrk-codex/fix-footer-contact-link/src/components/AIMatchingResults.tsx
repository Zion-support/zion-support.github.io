import {useState} from "react";
import {MatchResultItem} from "@/lib/ai-matchmaking";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";      <div className="space-y-4">;
        <Skeleton className="h-10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
        </div>;
      </div>;import { useState } from './react';
import { MatchResultItem } from '@/lib / ai - matchmaking';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from '@/components / icons';
import { Skeleton } from '@/components / ui / skeleton';
import { cn } from '@/lib / utils';
interface AIMatchingResultsProps {}
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  is_loading?: boolean;
  project_description?: string;
  service_type?: string;
}
export /**;
 * AIMatchingResults - Function description;
 */
function AIMatchingResults() { return null; }
  const categories = {}
    all: matches,"
    talent: matches.filter (match => match.category.toLowerCase ().includes ("talent")),"
    services: matches.filter (match => match.category.toLowerCase ().includes ("service")),"
    equipment: matches.filter (match => match.category.toLowerCase ().includes ("equipment"));
  }
;
  // Get the icon for a category;
  const getCategoryIcon = (category: string) =>: any {}
    const lower_category = category.toLowerCase ();
    if () return User) {}
  $2;
}
    if () return Monitor, ) {}
  $2;
}
    return BriefcaseIcon;
  }
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <div className="space-y-4">;
        <Skeleton className="h - 10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
        </div>;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card className="bg - zion - blue - dark border - zion - blue - light text - center p-6">;
        <CardContent className="pt-6">;
          <BarChart3 className="h - 12 w - 12 mx - auto text - zion - slate - light mb-3" />;
          <p className="text - white font - medium mb-2">No matches found</p>;
          <p className="text - zion - slate - light text - sm mb-4">;
            Try adjusting your search criteria or description for better results.;
          </p>;
          {project_description && (
            <div className="bg - zion - blue - light / 20 p - 3 rounded - md text-left">;
              <p className="text - xs text - zion - slate-light">Your search:</p>;
              <p className="text - sm text-white">{project_description}</p>;
            </div>)}
        </CardContent>;
      </Card>);
  }
  return (
    <div className="space-y-4">;
      <Tabs default_value="all" value={active_tab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w-full">;
          <TabsTrigger value="all" className="data-[state = active]:bg - zion-purple / 20">;
            All ({categories.all.length});
          </TabsTrigger>;
          <TabsTrigger value="talent" className="data-[state = active]:bg - zion-purple / 20">;
            Talent ({categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger value="services" className="data-[state = active]:bg - zion-purple / 20">;
            Services ({categories.services.length});
          </TabsTrigger>;
          <TabsTrigger value="equipment" className="data-[state = active]:bg - zion-purple / 20">;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        {Object.entries (categories).map (([tab, items]) => (
          <TabsContent key={tab} value={tab} className="mt - 4 space-y-3">;
            {items.length > 0 ? (
              items.map ((match) => {}
                const CategoryIcon = getCategoryIcon (match.category);
                return (

  return (    <div className="space-y-4">;
                        "bg-green-500"                        "bg-green-500"
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
                              <AvatarFallback className="bg-zion-purple/20">;

                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;

                            )}
