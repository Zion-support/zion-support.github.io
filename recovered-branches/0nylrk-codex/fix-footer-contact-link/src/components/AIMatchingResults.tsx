
import {useState} from "react";
import {MatchResultItem} from "@/lib/ai-matchmaking";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";
import {Skeleton} from "@/components/ui/skeleton";

import {cn} from "@/lib/utils";


  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}

export function AIMatchingResults(): any ({;

export function AIMatchingResults(): any ({;
  matches;
  onSelectMatch;

  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all");

import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void

  isLoading?: boolean;
  projectDescription?: string;
import { Skeleton } from "@/components/ui/skeleton",
import { cn } from "@/lib/utils",

import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",

import { cn } from "@/lib/utils";
interface AIMatchingResultsProps {}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;


  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,


  // Group matches by category
  const categories = {
    all: matches
    talent: matches.filter(match => match.category.toLowerCase().includes("talent"))
    services: matches.filter(match => match.category.toLowerCase().includes("service"))

    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))


  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <div className="space-y-3">
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />

          <Skeleton className="h-[120px] w-full" />
        </div>
      </div>
    )
  }


import { useState } from "react",;
import { MatchResultItem } from "@/lib/ai-matchmaking",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",;
import { Skeleton } from "@/components/ui/skeleton",;

import { cn } from "@/lib/utils",;
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;
  isLoading?: boolean,;
  projectDescription?: string,;
  serviceType?: string;
}
;


  };
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;

    if (lowerCategory && lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  };

  if (isLoading) {;

          <Skeleton className="h-[120px] w-full" />;
        </div>;

  if (matches && matches.length === 0) {;
    return (
    ),;
  }
  ;
  if (matches.length === 0) {;
    return (;
    );
  }

    return (
      <div className="space-y-4">;
        <Skeleton className="h-10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;

          <Skeleton className="h-[120px] w-full" />;
        </div>;

  if (matches && matches.length === 0) {;
    return (
    ),;
  }
  ;
  if (matches.length === 0) {;
    return (;
    );
  }


  if (matches && matches.length === 0) {;
    return (

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">

          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({categories.all.length})
          </TabsTrigger>"
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({categories.talent.length})
          </TabsTrigger>"
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({categories.services.length})
          </TabsTrigger>"

          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>


import { useState } from './react';

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

            </div>)}
        </CardContent>;
      </Card>);
  }

          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;


            {items.length > 0 ? (
              items.map ((match) => {}
                const CategoryIcon = getCategoryIcon (match.category);
                return (

                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;

                              <AvatarFallback className="bg-zion-purple/20">;

                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;

                            )}

                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;
                                  {skill}
                                </Badge>;
                              ))}


                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

}

}


  onSelectMatch;
