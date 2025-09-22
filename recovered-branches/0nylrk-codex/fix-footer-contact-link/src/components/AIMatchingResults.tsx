
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

matches;
  onSelectMatch;

  isLoading = false;"
  projectDescription = "";"
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;"
  const [activeTab, setActiveTab] = useState("all");
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
interface AIMatchingResultsProps {}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;

  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}
  matches;
  onSelectMatch;

isLoading = false;"
  projectDescription = "";"
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;"
  const [activeTab, setActiveTab] = useState("all");

interface AIMatchingResultsProps {
interface AIMatchingResultsProps {
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,

export function AIMatchingResults() { return null; }
}: AIMatchingResultsProps) {"
  const [activeTab, setActiveTab] = useState("all"),

  serviceType?: string
}

serviceType?: string
}
export function AIMatchingResults({;
  matches;
  onSelectMatch;
  isLoading = false;
  projectDescription = "";
export function AIMatchingResults({
  matches;
  onSelectMatch;

  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = ""
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState("all");
  matches,
  onSelectMatch,
  isLoading = false,
  projectDescription = "",
  serviceType: _serviceType = ""
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState("all"),

  // Group matches by category
  const categories = {
    all: matches
    talent: matches.filter(match => match.category.toLowerCase().includes("talent"))
    services: matches.filter(match => match.category.toLowerCase().includes("service"))

    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))

    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))

  // Get the icon for a category
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("talent")) return User;
    if (lowerCategory.includes("equipment")) return Monitor
    return BriefcaseIcon
}
  },
  // Get the icon for a category
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase(),
    if (lowerCategory.includes("talent")) return User,
    if (lowerCategory.includes("equipment")) return Monitor,
    return BriefcaseIcon
  },

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
if (matches.length === 0) {}
    return ("
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">"
        <CardContent className="pt-6">"
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />"
          <p className="text-white font-medium mb-2">No matches found</p>"
          <p className="text-zion-slate-light text-sm mb-4">
            Try adjusting your search criteria or description for better results.
          </p>
          {projectDescription && ("
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">"
              <p className="text-xs text-zion-slate-light">Your search:</p>"
              <p className="text-sm text-white">{projectDescription}</p>
            </div>
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
export function AIMatchingResults() { return null; }
  };

  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;
const lowerCategory = category && category.toLowerCase();"
    if (lowerCategory && lowerCategory.includes("talent")) return User;"
    if (lowerCategory && lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  };

  if (isLoading) {;
return (

    return (
      <div className="space-y-4">;
    return (
import { useState } from "react",;
import { MatchResultItem } from "@/lib/ai-matchmaking",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",;
import { Skeleton } from "@/components/ui/skeleton",;
import { cn } from "@/lib/utils",;
;
interface AIMatchingResultsProps {;
  matches:MatchResultItem[],;
  onSelectMatch?:(match:MatchResultItem) => void,;
  isLoading?:boolean,;
  projectDescription?:string,;
  serviceType?:string;
}
;
export function AIMatchingResults({;
  matches,;
  onSelectMatch,;
  isLoading = false,;
  projectDescription = "",;
  serviceType:_serviceType = "";
} AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all"),;
  ;
  // Group matches by category;
  const categories = {;
    all:matches,;
    talent:matches.filter(match => match.category.toLowerCase().includes("talent")),;
    services:matches.filter(match => match.category.toLowerCase().includes("service")),;
    equipment:matches.filter(match => match.category.toLowerCase().includes("equipment"));
  },;
  ;
  // Get the icon for a category;
  const getCategoryIcon = (category:string) => {;
  // Group matches by category;
  const categories = {;
    all: matches,;
    talent: matches.filter(match => match.category.toLowerCase().includes("talent")),;
    services: matches.filter(match => match.category.toLowerCase().includes("service")),;
    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"));
  },;
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;
    const lowerCategory = category.toLowerCase(),;
    if (lowerCategory.includes("talent")) return User,;
    if (lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  },;
  if (isLoading) {;
    return (;
    return (
      <div className="space-y-4">;
        <Skeleton className="h-10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
"
      <div className="space-y-4">;"
        <Skeleton className="h-10 w-full" />;"
        <div className="space-y-3">;"
          <Skeleton className="h-[120px] w-full" />;"
          <Skeleton className="h-[120px] w-full" />;"
          <Skeleton className="h-[120px] w-full" />;
        </div>;
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
"
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">;"
        <CardContent className="pt-6">;"
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />;"
          <p className="text-white font-medium mb-2">No matches found</p>;"
          <p className="text-zion-slate-light text-sm mb-4">;
            Try adjusting your search criteria or description for better results.;
          </p>;
          {projectDescription && (;"
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">;"
              <p className="text-xs text-zion-slate-light">Your search:</p>;"
              <p className="text-sm text-white">{projectDescription}</p>;
            </div>;

;
  if (matches.length === 0) {;
    return (;
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">;
        <CardContent className="pt-6">;
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />;
          <p className="text-white font-medium mb-2">No matches found</p>;
          <p className="text-zion-slate-light text-sm mb-4">;
            Try adjusting your search criteria or description for better results.;
          </p>;
          {projectDescription && (;
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">;
              <p className="text-xs text-zion-slate-light">Your search:</p>;
              <p className="text-sm text-white">{projectDescription}</p>;
            </div>;

          )}
        </CardContent>;
      </Card>;
    );
  }

</CardContent>
      </Card>
    )
  }
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
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({categories.services.length})
          </TabsTrigger>
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
{Object.entries(categories).map(([tab, items]) => ("
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">
import { useState } from './react';
      </div>;import { useState } from './react';
      </div>;import { useState } from './react';
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">
import { useState } from './react';
import { MatchResultItem } from '@/lib / ai - matchmaking';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from '@/components / icons';
import { Skeleton } from '@/components / ui / skeleton';

import { useState } from './react';'
import { MatchResultItem } from '@/lib / ai - matchmaking';'
import { Card, CardContent } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { BarChart3, BriefcaseIcon, Monitor, User } from '@/components / icons';'
import { Skeleton } from '@/components / ui / skeleton';'
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
          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;
          <TabsContent key={tab} value={tab} className="mt - 4 space-y-3">;
          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;
          <TabsContent key={tab} value={tab} className="mt - 4 space-y-3">;
            {items.length > 0 ? (
              items.map ((match) => {}
                const CategoryIcon = getCategoryIcon (match.category);
                return (
return (
return (
    ),;
  }
  ;
  return (;
    <div className="space-y-4">;
  return (    <div className="space-y-4">;
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;
            All ({categories && categories.all.length});
          </TabsTrigger>;
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">;
            Talent ({categories && categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">;
            Services ({categories && categories.services.length});
          </TabsTrigger>;
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">;
            Equipment ({categories && categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;

"
                        "bg-green-500"

"bg-green-500"                        "bg-green-500"
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
{match.image ? (;
                              <AvatarImage src={match.image} />;
                            ) :(;
                            {match && match.image ? (;
                            ) : (;                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
                              <AvatarFallback className="bg-zion-purple/20">;
                      )} />;"
                      <div className="flex-1 p-4">;"
                        <div className="flex items-start gap-4">;"
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;

                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
"
                              <AvatarFallback className="bg-zion-purple/20">;"
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;

                            )}

</Avatar>;

                          <div className="flex-1">;
                            <div className="flex justify-between">;
                              <div>;
                                <h3 className="font-medium text-white">{match && match.title}</h3>;
                                <p className="text-zion-slate-light text-sm">{match && match.description}</p>;
                              </div>;
                              {match && match.price && (;
                                <div className="text-right ml-2">;
                                  <div className="font-medium text-white">${match && match.price}</div>;
                                  <div className="text-xs text-zion-slate-light">;
{match && match.category.toLowerCase().includes("talent") ? "/hour" : ""}                                  </div>;
                                </div>;
                              )}
                            </div>;

{skill}
                                </Badge>;
                              ))}
                              ))}                            ;
                              ))}
                            ;
                            <div className="mt-2 flex flex-wrap gap-1">;
                            ;"
                            <div className="mt-2 flex flex-wrap gap-1">;"
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">;
                                {match.category}
                              </Badge>;
                              {match.skills && match.skills.slice(0, 3).map((skill:string, i:number) => (;"
                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;
                                  {skill}
                                </Badge>;
                              ))}
                                  {skill}
                                </Badge>;
                              ))}
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
}

                        "bg-green-500"
                      )} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 border border-zion-blue-light">
                            {match.image ? (
                              <AvatarImage src={match.image} />
                            ) : (
                              <AvatarFallback className="bg-zion-purple/20">
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium text-white">{match.title}</h3>
                                <p className="text-zion-slate-light text-sm">{match.description}</p>
                              </div>
                              {match.price && (
                                <div className="text-right ml-2">
                                  <div className="font-medium text-white">${match.price}</div>
                                  <div className="text-xs text-zion-slate-light">
                                    {match.category.toLowerCase().includes("talent") ? "/hour" : ""}
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })
            ) : (
              <div className="text-center py-8 text-zion-slate-light">
                No {tab} matches found.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
}'"
                  </Card>);
              })) : (
              <div className="text - center py - 8 text - zion - slate - light">;
import {useState} from "react";""
import {MatchResultItem} from "@/lib/ai-matchmaking";""
import {Card, CardContent} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";""
import {Skeleton} from "@/components/ui/skeleton";""
import {cn} from "@/lib/utils";"
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;

  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}

export function AIMatchingResults(): any ({;

</Card>;
                ),;
              });
            ) :(;
              <div className="text-center py-8 text-zion-slate-light">;
                No {tab} matches found.;
              </div>;            )}
          </TabsContent>;
        ))}
      </Tabs>;
    </div>;
  ),; interface AIMatchingResultsProps {
  matches: MatchResultItem[];
onSelectMatch?: (match: MatchResultItem) => void;
isLoading?: boolean;
projectDescription?: string;
serviceType?: string 
}export function AIMatchingResults ({
  matches;
  onSelectMatch;

}
