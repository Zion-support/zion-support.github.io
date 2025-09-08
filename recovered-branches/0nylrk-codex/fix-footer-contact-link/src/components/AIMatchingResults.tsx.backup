
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function AIMatchingResults(): any ({;

export function AIMatchingResults(): any ({;
  matches;
  onSelectMatch;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all");
<<<<<<< HEAD

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Group matches by category
  const categories = {
    all: matches
    talent: matches.filter(match => match.category.toLowerCase().includes("talent"))
    services: matches.filter(match => match.category.toLowerCase().includes("service"))

    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  if (matches.length === 0) {
    return (
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">
        <CardContent className="pt-6">
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />
          <p className="text-white font-medium mb-2">No matches found</p>
          <p className="text-zion-slate-light text-sm mb-4">
            Try adjusting your search criteria or description for better results.
          </p>
          {projectDescription && (
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">
              <p className="text-xs text-zion-slate-light">Your search:</p>
              <p className="text-sm text-white">{projectDescription}</p>
            </div>

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
export function AIMatchingResults({;
  matches,;
  onSelectMatch,;
  isLoading = false,;
  projectDescription = "",;
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all"),;

  };



=======

  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;

    if (lowerCategory && lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  };
<<<<<<< HEAD


  if (isLoading) {;

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (matches && matches.length === 0) {;
    return (

<<<<<<< HEAD

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


  




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
  return (
    ),;
  }
  ;
  return (;
    <div className="space-y-4">;
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;
                        "bg-green-500"
            All ({categories.all.length});
          </TabsTrigger>;
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">;
            Talent ({categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">;
            Services ({categories.services.length});
          </TabsTrigger>;
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        ;
        {Object.entries(categories).map(([tab, items]) => (;
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">;
            {items.length > 0 ? (;
              items.map((match) => {;
                const CategoryIcon = getCategoryIcon(match.category),;
                return (;
                  <Card ;
                    key={match.id}
                    className="bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer";
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                  >;
                    <div className="flex">;
                      <div className={cn(;
                        "w-2", ;
                        match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" :;
                        match.category.toLowerCase().includes("service") ? "bg-zion-purple" :;
                        "bg-green-500";

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;

<<<<<<< HEAD
                            {match.image ? (;
                              <AvatarImage src={match.image} />;
                            ) :(;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                              <AvatarFallback className="bg-zion-purple/20">;

                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;

                            )}

<<<<<<< HEAD
                          </Avatar>;
                          ;
                          <div className="flex-1">;
                            <div className="flex justify-between">;
                              <div>;
                                <h3 className="font-medium text-white">{match.title}</h3>;
                                <p className="text-zion-slate-light text-sm">{match.description}</p>;
                              </div>;
                              {match.price && (;
                                <div className="text-right ml-2">;
                                  <div className="font-medium text-white">${match.price}</div>;
                                  <div className="text-xs text-zion-slate-light">;
                                    {match.category.toLowerCase().includes("talent") ? "/hour" :""}
                                  </div>;
                                </div>;
                              )}
                            </div>;
                            ;
                            <div className="mt-2 flex flex-wrap gap-1">;
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">;
                                {match.category}
                              </Badge>;
                              {match.skills && match.skills.slice(0, 3).map((skill:string, i:number) => (;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;
                                  {skill}
                                </Badge>;
                              ))}


                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
<<<<<<< HEAD

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
isLoading = false;
projectDescription = "";
serviceType: serviceType = "" 
}: AIMatchingResultsProps) {
  //Group matches by category const categories = {
  all: matches;
if (isLoading) {
  return (<div className=" space-y-4"> <Skeleton className=" h-10 w-full"/> <div className=" space-y-3"> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> </div> </div>) 
}if (matches.length === 0) {
  return (<Card className=" bg-zion-blue-dark border-zion-blue-light text-center p-6"> <CardContent className=" pt-6"> <BarChart3 className=" h-12 w-12 mx-auto text-zion-slate-light mb-3"/> <p className=" text-white font-medium mb-2">No matches found</p> <p className=" text-zion-slate-light text-sm mb-4"> projectDescription && (<div className=" bg-zion-blue-light/20 p-3 rounded-md text-left"> <p className=" text-xs text-zion-slate-light">Your search:</p> <p className=" text-sm text-white"> {
  projectDescription 
}</p> </div>) 
}</CardContent> </Card>) 
}return (<AvatarImage src= {
  match.image 
}/>) : (<AvatarFallback className=" bg-zion-purple/20"> <CategoryIcon className=" h-6 w-6 text-zion-purple"/> </AvatarFallback>) 
}</Avatar> <div className=" flex-1"> <div className=" flex justify-between"> <div> </div> </div>) 
}</div> </Badge>) ) 
}</div> </div> </div> </div> </div> </Card>) 
}) ) : (<div className="text-center py-8 text-zion-slate-light"> No {
  tab 
}matches found. </div>) 
}</TabsContent>) ) 
}</Tabs> </div>) 

            {items.length > 0 ? (
              items.map((match) => {
                const CategoryIcon = getCategoryIcon(match.category),
                return (
                  <Card
                    key={match.id}
                    className="bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer"
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                  >
                    <div className="flex">
                      <div className={cn(
                        "w-2"
                        match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" :
                        match.category.toLowerCase().includes("service") ? "bg-zion-purple" :



}

=======

}

}


  onSelectMatch;
>>>>>>> origin/cursor/delete-old-data-records-6bba
