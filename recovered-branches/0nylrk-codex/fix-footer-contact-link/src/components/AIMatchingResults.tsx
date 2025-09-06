<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from "react";
import {MatchResultItem} from "@/lib/ai-matchmaking";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";
import {Skeleton} from "@/components/ui/skeleton";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



import {useState} from "react";"
import {MatchResultItem} from "@/lib/ai-matchmaking";"
import {Card, CardContent} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";"
import {Skeleton} from "@/components/ui/skeleton";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {cn} from "@/lib/utils";
=======
import {cn} from "@/lib/utils";
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}

<<<<<<< HEAD
  matches;
  onSelectMatch;

  isLoading = false;"
  projectDescription = "";"
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;"
  const [activeTab, setActiveTab] = useState("all");
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export function AIMatchingResults(): any ({;

  matches;
  onSelectMatch;

  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Skeleton } from "@/components/ui/skeleton";
=======
"
import { useState } from "react","
import { MatchResultItem } from "@/lib/ai-matchmaking","
import { Card, CardContent } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",";
import { Skeleton } from "@/components/ui/skeleton";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils";
interface AIMatchingResultsProps {}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;
=======
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
  isLoading = false;"
  projectDescription = "";"
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;"
=======
  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [activeTab, setActiveTab] = useState("all");



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AIMatchingResultsProps {
=======

interface AIMatchingResultsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
interface AIMatchingResultsProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,

<<<<<<< HEAD

export function AIMatchingResults() { return null; }
}: AIMatchingResultsProps) {"
  const [activeTab, setActiveTab] = useState("all"),
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
  



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Group matches by category
  const categories = {
    all: matches
    talent: matches.filter(match => match.category.toLowerCase().includes("talent"))
    services: matches.filter(match => match.category.toLowerCase().includes("service"))
<<<<<<< HEAD
=======

  // Group matches by category;
  const categories = {}
    all: matches"
    talent: matches.filter(match => match.category.toLowerCase().includes("talent"))"
    services: matches.filter(match => match.category.toLowerCase().includes("service"))"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))

<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Get the icon for a category
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("talent")) return User;
    if (lowerCategory.includes("equipment")) return Monitor
    return BriefcaseIcon
<<<<<<< HEAD
<<<<<<< HEAD
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  
  // Get the icon for a category
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase(),
    if (lowerCategory.includes("talent")) return User,
    if (lowerCategory.includes("equipment")) return Monitor,
    return BriefcaseIcon
  },
  
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <div className="space-y-3">
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
<<<<<<< HEAD
=======
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {}
    const lowerCategory = category.toLowerCase();"
    if (lowerCategory.includes("talent")) return User;"
    if (lowerCategory.includes("equipment")) return Monitor;
    return BriefcaseIcon;
  if (isLoading) {}
    return ("
      <div className="space-y-4">"
        <Skeleton className="h-10 w-full" />"
        <div className="space-y-3">"
          <Skeleton className="h-[120px] w-full" />"
          <Skeleton className="h-[120px] w-full" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Skeleton className="h-[120px] w-full" />
        </div>
      </div>
    )
  }
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",;
import { MatchResultItem } from "@/lib/ai-matchmaking",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
=======
"
import { useState } from "react",;"
import { MatchResultItem } from "@/lib/ai-matchmaking",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",;"
import { Skeleton } from "@/components/ui/skeleton",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
export function AIMatchingResults() { return null; }
=======
export function AIMatchingResults({;
  matches,;
  onSelectMatch,;
  isLoading = false,;
  projectDescription = "",;
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all"),;

  // Group matches by category;
  const categories = {;
    all: matches,;
    talent: matches && matches.filter(match => match && match.category.toLowerCase().includes("talent")),;
    services: matches && matches.filter(match => match && match.category.toLowerCase().includes("service")),;
    equipment: matches && matches.filter(match => match && match.category.toLowerCase().includes("equipment"));
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };

  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;
<<<<<<< HEAD
    const lowerCategory = category && category.toLowerCase();"
    if (lowerCategory && lowerCategory.includes("talent")) return User;"
=======
    const lowerCategory = category && category.toLowerCase();
    if (lowerCategory && lowerCategory.includes("talent")) return User;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (lowerCategory && lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  };

  if (isLoading) {;
<<<<<<< HEAD

    return (


    return (
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="space-y-4">;
=======
import {cn} from "@/lib/utils";      <div className="space-y-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {cn} from "@/lib/utils";      <div className="space-y-4">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    return (
    return (
      <div className="space-y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Skeleton className="h-10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
=======
"
      <div className="space-y-4">;"
        <Skeleton className="h-10 w-full" />;"
        <div className="space-y-3">;"
          <Skeleton className="h-[120px] w-full" />;"
          <Skeleton className="h-[120px] w-full" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Skeleton className="h-[120px] w-full" />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;

=======
      </div>;
    );
  }


  if (matches && matches.length === 0) {;

    return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          )}
        </CardContent>;
      </Card>;
    );
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD

=======
  


          )}
        </CardContent>
      </Card>
    )
  }
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">
<<<<<<< HEAD
=======
  return ("
    <div className="space-y-4">"
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">"
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({categories.all.length})
          </TabsTrigger>"
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({categories.talent.length})
          </TabsTrigger>"
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({categories.services.length})
          </TabsTrigger>"
=======
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({categories.services.length})
          </TabsTrigger>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
<<<<<<< HEAD
        {Object.entries(categories).map(([tab, items]) => ("
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from './react';
=======
      </div>;import { useState } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>;import { useState } from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">
import { useState } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { MatchResultItem } from '@/lib / ai - matchmaking';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from '@/components / icons';
import { Skeleton } from '@/components / ui / skeleton';
=======



import { useState } from './react';'
import { MatchResultItem } from '@/lib / ai - matchmaking';'
import { Card, CardContent } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { BarChart3, BriefcaseIcon, Monitor, User } from '@/components / icons';'
import { Skeleton } from '@/components / ui / skeleton';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    return (
<<<<<<< HEAD
      <div className="space-y-4">;
        <Skeleton className="h - 10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
=======
    return ("
      <div className="space - y-4">;"
        <Skeleton className="h - 10 w - full" />;"
        <div className="space - y-3">;"
          <Skeleton className="h-[120px] w - full" />;"
          <Skeleton className="h-[120px] w - full" />;"
          <Skeleton className="h-[120px] w - full" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="space - y-4">;
        <Skeleton className="h - 10 w - full" />;
        <div className="space - y-3">;
          <Skeleton className="h-[120px] w - full" />;
          <Skeleton className="h-[120px] w - full" />;
          <Skeleton className="h-[120px] w - full" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return (
      <Card className="bg - zion - blue - dark border - zion - blue - light text - center p - 6">;
        <CardContent className="pt - 6">;
          <BarChart3 className="h - 12 w - 12 mx - auto text - zion - slate - light mb - 3" />;
          <p className="text - white font - medium mb - 2">No matches found</p>;
          <p className="text - zion - slate - light text - sm mb - 4">;
            Try adjusting your search criteria or description for better results.;
          </p>;
          {project_description && (
<<<<<<< HEAD
            <div className="bg - zion - blue - light / 20 p - 3 rounded - md text-left">;
              <p className="text - xs text - zion - slate-light">Your search:</p>;
              <p className="text - sm text-white">{project_description}</p>;
=======
    return ("
      <Card className="bg - zion - blue - dark border - zion - blue - light text - center p - 6">;"
        <CardContent className="pt - 6">;"
          <BarChart3 className="h - 12 w - 12 mx - auto text - zion - slate - light mb - 3" />;"
          <p className="text - white font - medium mb - 2">No matches found</p>;"
          <p className="text - zion - slate - light text - sm mb - 4">;
            Try adjusting your search criteria or description for better results.;
          </p>;
          {project_description && ("
            <div className="bg - zion - blue - light / 20 p - 3 rounded - md text - left">;"
              <p className="text - xs text - zion - slate - light">Your search:</p>;"
              <p className="text - sm text - white">{project_description}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <div className="bg - zion - blue - light / 20 p - 3 rounded - md text - left">;
              <p className="text - xs text - zion - slate - light">Your search:</p>;
              <p className="text - sm text - white">{project_description}</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>)}
        </CardContent>;
      </Card>);
  }
<<<<<<< HEAD
  return (
    <div className="space - y-4">;
      <Tabs default_value="all" value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full">;
          <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple / 20">;
            All ({categories.all.length});
          </TabsTrigger>;
          <TabsTrigger value="talent" className="data-[state = active]:bg - zion - purple / 20">;
            Talent ({categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger value="services" className="data-[state = active]:bg - zion - purple / 20">;
            Services ({categories.services.length});
          </TabsTrigger>;
          <TabsTrigger value="equipment" className="data-[state = active]:bg - zion - purple / 20">;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        {Object.entries (categories).map (([tab, items]) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return ("
    <div className="space - y-4">;"
      <Tabs default_value="all" value={active_tab} onValueChange={setActiveTab} className="w - full">;"
        <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full">;"
          <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple / 20">;
            All ({categories.all.length});
          </TabsTrigger>;"
          <TabsTrigger value="talent" className="data-[state = active]:bg - zion - purple / 20">;
            Talent ({categories.talent.length});
          </TabsTrigger>;"
          <TabsTrigger value="services" className="data-[state = active]:bg - zion - purple / 20">;
            Services ({categories.services.length});
          </TabsTrigger>;"
          <TabsTrigger value="equipment" className="data-[state = active]:bg - zion - purple / 20">;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        {Object.entries (categories).map (([tab, items]) => ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          <TabsContent key={tab} value={tab} className="mt - 4 space-y-3">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <TabsContent key={tab} value={tab} className="mt - 4 space-y-3">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {items.length > 0 ? (
              items.map ((match) => {}
                const CategoryIcon = getCategoryIcon (match.category);
                return (
<<<<<<< HEAD


  return (
    <div className="space-y-4">;
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
=======
"
    <div className="space-y-4">;"
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;"
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;"
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
                        "bg-green-500"

<<<<<<< HEAD
<<<<<<< HEAD
                        "bg-green-500"                        "bg-green-500"
=======
                        "bg-green-500"
                        "bg-green-500"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
                              <AvatarFallback className="bg-zion-purple/20">;
=======
                      )} />;"
                      <div className="flex-1 p-4">;"
                        <div className="flex items-start gap-4">;"
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;


                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
"
                              <AvatarFallback className="bg-zion-purple/20">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;
                            )}

<<<<<<< HEAD
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
<<<<<<< HEAD
                                    {match && match.category.toLowerCase().includes("talent") ? "/hour" : ""}                                  </div>;
=======
                                  </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                                    {match && match.category.toLowerCase().includes("talent") ? "/hour" : ""}
                                  </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                </div>;
                              )}
                            </div>;


<<<<<<< HEAD
                                  {skill}
                                </Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                              ))}
<<<<<<< HEAD
=======
=======
                  <Card;
                    key={match.id}
                    className="bg - zion - blue - dark border - zion - blue - light overflow - hidden transition - all hover:border - zion - purple / 50 cursor - pointer";
                    on_click={() => onSelectMatch && onSelectMatch (match)}
                  >;
                    <div className="flex">;
                      <div className={cn (
                        "w - 2",
                        match.category.toLowerCase ().includes ("talent") ? "bg - zion - cyan" :;
                        match.category.toLowerCase ().includes ("service") ? "bg - zion - purple" :;
                        "bg - green - 500")} />;
                      <div className="flex - 1 p - 4">;
                        <div className="flex items - start gap - 4">;
                          <Avatar className="h - 12 w - 12 border border - zion - blue - light">;
                            {match.image ? (
                              <AvatarImage src={match.image} />) : (
                              <AvatarFallback className="bg - zion - purple / 20">;
                                <CategoryIcon className="h - 6 w - 6 text - zion - purple" />;
                              </AvatarFallback>)}
                          </Avatar>;
                          <div className="flex - 1">;
                            <div className="flex justify - between">;
                              <div>;
                                <h3 className="font - medium text - white">{match.title}</h3>;
                                <p className="text - zion - slate - light text - sm">{match.description}</p>;
                              </div>;
                              {match.price && (
                                <div className="text - right ml - 2">;
                                  <div className="font - medium text - white">${match.price}</div>;
                                  <div className="text - xs text - zion - slate - light">;
                                    {match.category.toLowerCase ().includes ("talent") ? "/hour" : ""}
                                  </div>;
                                </div>)}
                            </div>;
                            <div className="mt - 2 flex flex - wrap gap - 1">;
                              <Badge variant="outline" className="text - xs bg - zion - blue text - zion - cyan border - zion - cyan / 30">;
                                {match.category}
                              </Badge>;
                              {match.skills && match.skills.slice (0, 3).map ((skill: string, index: number) => (
                                <Badge key={i} variant="outline" className="text - xs bg - zion - blue - dark text - white border - zion - blue - light">;
                                  {skill}
                                </Badge>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                            ;
=======
                              ))}                            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                              ))}                            ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                              ))}
                            ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            <div className="mt-2 flex flex-wrap gap-1">;
=======
                            ;"
                            <div className="mt-2 flex flex-wrap gap-1">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">;
                                {match.category}
                              </Badge>;
                              {match.skills && match.skills.slice(0, 3).map((skill:string, i:number) => (;"
                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;
                                  {skill}
                                </Badge>;
                              ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                                  {skill}
                                </Badge>;
                              ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


                                  {skill}
                                </Badge>;
                              ))}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                                  {skill}
                                </Badge>;
                              ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

<<<<<<< HEAD


<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  </Card>);
              })) : (
              <div className="text - center py - 8 text - zion - slate - light">;
                No {tab} matches found.;
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
