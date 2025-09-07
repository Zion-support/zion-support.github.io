interface AIMatchingResultsProps {,
  matches: MatchResultItem[],
  onSelectMatch?: (match:,  MatchResultItem) => void,
  isLoading?: boolean
  projectDescription?: string
  serviceType?: string;interface AIMatchingResultsProps {,
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem,) => void
  isLoading?: boolean
  projectDescription?: string
  serviceType?: string
}
import { useState } from 'react';
import { MatchResultItem } from '@/lib / ai - matchmaking';
import { Card, CardContent } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from '@/components / ui / skeleton';
import { cn } from '@/lib / utils';
interface AIMatchingResultsProps {
  matches: MatchResultItem[];,
  onSelectMatch?: (match:,  MatchResultItem) => void;,
  is_loading?: boolean;
  project_description?: string;
  service_type?: string;interface AIMatchingResultsProps {,
  service_type?: string;interface AIMatchingResultsProps {
  // TODO: Implement
}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;interface AIMatchingResultsProps {
  // TODO: Implement
  onSelectMatch?: (match: MatchResultItem,) => void;
  serviceType?: string;

import { useState } from 'react';
import { MatchResultItem } from '@/lib / ai - matchmaking';
import { Card, CardContent } from '@/components/ui/ card';
import { Badge } from '@/components/ui/ badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/ avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/ tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from '@/components/ui/ skeleton';
import { cn } from '@/lib / utils';
  // TODO: Implement
  matches: MatchResultItem[];
  is_loading?: boolean;
  project_description?: string;
  service_type?: string;interface AIMatchingResultsProps {
  // TODO: Implement
pr-12325
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem, ) => void,
  is_loading?: boolean,
  project_description?: string,
  service_type?: string;
}
export /**
 * AIMatchingResults - Function description
export /**
 * AIMatchingResults - Function description;
pr-12325
 */
function AIMatchingResults() {
  const [active_tab, setActiveTab] = useState ('all');
  // Group matches by category;
  const categories = {
    all: matches,
    talent: matches.filter (match =>;,
      match.category.toLowerCase ().includes ('talent')),'
    services: matches.filter (match =>;,
      match.category.toLowerCase ().includes ('service')),'
    equipment: matches.filter (match =>;,
      match.category.toLowerCase ().includes ('equipment')),'
  }
  // Get the icon for a category;
  const getCategoryIcon = (category:,  string) =>: any {,
    const lower_category = category.toLowerCase ();
    if () return User) {
  $2
}
    if () return Monitor) {
  $2
}
    return BriefcaseIcon;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='space - y-4'>;
        <Skeleton className='h - 10 w - full' />;
        <div className='space - y-3'>;,
          <Skeleton className='h-[120px] w - full' />;,
          <Skeleton className='h-[120px] w - full' />;,
          <Skeleton className='h-[120px] w - full' />;
        </div>;
      </div>);
  }
import { useState } from 'react';
import { MatchResultItem } from '@/lib/ai-matchmaking';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
interface AIMatchingResultsProps {;
  matches: MatchResultItem[];,
  onSelectMatch?: (match:,  MatchResultItem) => void;,
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;interface AIMatchingResultsProps {;,
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem,) => void,;
import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'
import Skeleton from "@/components/ui/skeleton",
import { cn } from "@/lib/utils",
interface AIMatchingResultsProps {
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,
  serviceType?: string
}

export function AIMatchingResults({
  matches,
  onSelectMatch,
  isLoading = false,
  projectDescription = "",
  serviceType: _serviceType = ""
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState("all"),
  
  // Group matches by category
  const categories = {
    all: matches,
    talent: matches.filter(match => match.category.toLowerCase().includes("talent")),
    services: matches.filter(match => match.category.toLowerCase().includes("service")),
    equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))
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
import { useState } from "react",;
import { MatchResultItem } from "@/lib/ai-matchmaking",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from "@/components/ui/skeleton",;
import { cn } from "@/lib/utils",;
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;
  isLoading?: boolean,;
  projectDescription?: string,;
  serviceType?: string;
}
export function AIMatchingResults(): any ({;
  matches,;
  onSelectMatch,;
  isLoading = false,;
  projectDescription = '',;
  serviceType: _serviceType = '',;
}:,  AIMatchingResultsProps) {;,
  const [activeTab, setActiveTab] = useState('all');
  // Group matches by category;
  const categories = {;
    all: matches,;
    talent: matches && matches.filter(match =>;,
      match && match.category.toLowerCase().includes('talent');
    ),;
    services: matches && matches.filter(match =>;,
      match && match.category.toLowerCase().includes('service');
    ),;
    equipment: matches && matches.filter(match =>;,
      match && match.category.toLowerCase().includes('equipment');
    ),;
  };
  // Get the icon for a category;
  const getCategoryIcon = (category:,  string) => {;,
    const lowerCategory = category && category.toLowerCase();
    if (lowerCategory && lowerCategory.includes('talent')) return User;
    if (lowerCategory && lowerCategory.includes('equipment')) return Monitor;
    return BriefcaseIcon;
  };
  if (isLoading) {;
    return (
      <div className='space-y-4'>;
        <Skeleton className='h-10 w-full' />;
        <div className='space-y-3'>;
          <Skeleton className='h-[120px] w-full' />;,
          <Skeleton className='h-[120px] w-full' />;,
          <Skeleton className='h-[120px] w-full' />;
;
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
      <div className="space-y-4">;
        <Skeleton className="h-10 w-full" />;
        <div className="space-y-3">;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
          <Skeleton className="h-[120px] w-full" />;
        </div>;
      </div>;
    );
  }
  if (matches && matches.length === 0) {;
    return (
      <Card className='bg-zion-blue-dark border-zion-blue-light text-center p-6'>;
        <CardContent className='pt-6'>;
          <BarChart3 className='h-12 w-12 mx-auto text-zion-slate-light mb-3' />;
          <p className='text-white font-medium mb-2'>No matches found</p>;
          <p className='text-zion-slate-light text-sm mb-4'>;
            Try adjusting your search criteria or description for better;
            results.;
          </p>;
          {projectDescription && (;
            <div className='bg-zion-blue-light/20 p-3 rounded-md text-left'>;
              <p className='text-xs text-zion-slate-light'>Your search:</p>;
              <p className='text-sm text-white'>{projectDescription}</p>;
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
  return (
    <div className='space-y-4'>;
      <Tabs
        defaultValue='all''
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full'>;
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>;
          <TabsTrigger
            value='all'',
            className='data-[state=active]:bg-zion-purple/20'>;
            All ({categories && categories.all.length});
          </TabsTrigger>;
          <TabsTrigger
            value='talent'',
            className='data-[state=active]:bg-zion-purple/20'>;
            Talent ({categories && categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger
            value='services'',
            className='data-[state=active]:bg-zion-purple/20'>;
            Services ({categories && categories.services.length});
          </TabsTrigger>;
          <TabsTrigger
            value='equipment'',
            className='data-[state=active]:bg-zion-purple/20'>;
            Equipment ({categories && categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        {Object && Object.entries(categories).map(([tab, items]) => (;
          <TabsContent key={tab} value={tab} className='mt-4 space-y-3'>;
            {items && items.length > 0 ? (;
              items && items.map(match => {;
                const CategoryIcon = getCategoryIcon(match && match.category);
                    onClick={() => onSelectMatch && onSelectMatch(match)}                  >;
                    <div className='flex'>;
                      <div
                        className={cn(
                          'w-2','
                          match && match.category.toLowerCase().includes('talent')'
                            ? 'bg-zion-cyan''
                            : match && match.category.toLowerCase().includes('service')'
                              ? 'bg-zion-purple''
                              : 'bg-green-500''
                          'w-2',
                          match && match.category.toLowerCase().includes('talent')

                            ? 'bg-zion-cyan'
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'
  const categories = {
    all: matches,
    talent: matches.filter (match =>;)
      match.category.toLowerCase ().includes ('talent')),
    services: matches.filter (match =>;)
      match.category.toLowerCase ().includes ('service')),
    equipment: matches.filter (match =>;)
      match.category.toLowerCase ().includes ('equipment')),
  // Get the icon for a category;
  const getCategoryIcon = (category: string) =>: any {
  // TODO: Implement
    const lower_category = category.toLowerCase ();
    if () return User) {
  $2;
    if () return Monitor) {
    return BriefcaseIcon;
  // Check condition;
if ( {) {
    return (
      <div className='space - y-4'>;
</div>
        <Skeleton className='h - 10 w - full' />;

        <div className='space - y-3'>;
          <Skeleton className='h-[120px] w - full' />;



        </div>;)
      </div>);
      <div className='space-y-4'>;
        <Skeleton className='h-10 w-full' />;

        <div className='space-y-3'>;
          <Skeleton className='h-[120px] w-full' />;



        </div>;
      <Card className='bg-zion-blue-dark border-zion-blue-light text-center p-6'>;

        <CardContent className='pt-6'>;

          <BarChart3 className='h-12 w-12 mx-auto text-zion-slate-light mb-3' />;
</BarChart3>
          <p className='text-white font-medium mb-2'>No matches found</p>;
          <p className='text-zion-slate-light text-sm mb-4'>;
</p>
          </p>;
            <div className='bg-zion-blue-light/20 p-3 rounded-md text-left'>;
              <p className='text-xs text-zion-slate-light'>Your search:</p>;
              <p className='text-sm text-white'>{projectDescription}</p>;
        ;
      <Tabs;
        defaultValue='all
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full'>;

        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>;

          <TabsTrigger;
            value='all
            className='data-[state=active]:bg-zion-purple/20'>;

            value='talent

            value='services

            value='equipment

          <TabsContent key={tab} value={tab} className='mt-4 space-y-3'>;

                    <div className='flex'>;
                      <div;
                        className={cn(
                          'w-2',')
                          match && match.category.toLowerCase().includes('talent')
                            ? 'bg-zion-cyan
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple
                              : 'bg-green-500
pr-12325
                        )}
                      />;
                      <div className='flex-1 p-4'>;
                        <div className='flex items-start gap-4'>;
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>;
                            {match && match.image ? (;

import { useState } from 'react';
import { MatchResultItem } from '@/lib/ai-matchmaking';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface AIMatchingResultsProps {
  matches: MatchResultItem[];
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string
}
export function AIMatchingResults({
  matches;
  onSelectMatch;
  isLoading;
                        match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" : 
                        match.category.toLowerCase().includes("service") ? "bg-zion-purple" : 
                        "bg-green-500"
                      )} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 border border-zion-blue-light">
                            {match.image ? (
origin/cursor/automate-test-improve-and-merge-code-2533
                              <AvatarImage
                                src={match && match.image}
                                alt={match && match.title}
                              />;
                            ) : (;
                              <AvatarFallback className='bg-zion-purple/20'>;
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;
                              </AvatarFallback>;
                            )}
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='bg - zion - blue - dark border - zion - blue - light text - center p - 6'>;
        <CardContent className='pt - 6'>;
          <BarChart3 className='h - 12 w - 12 mx - auto text - zion - slate - light mb - 3' />;
          <p className='text - white font - medium mb - 2'>No matches found</p>;
          <p className='text - zion - slate - light text - sm mb - 4'>;
            Try adjusting your search criteria or description for better;
            results.;
          </p>;
          {project_description && (

                              <AvatarImage;
                                src={match && match.image}
                                alt={match && match.title}

                              <AvatarFallback className='bg-zion-purple/20'>;

                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;

      <Card className='bg - zion - blue - dark border - zion - blue - light text - center p - 6'>;

        <CardContent className='pt - 6'>;

          <BarChart3 className='h - 12 w - 12 mx - auto text - zion - slate - light mb - 3' />;
          <p className='text - white font - medium mb - 2'>No matches found</p>;
          <p className='text - zion - slate - light text - sm mb - 4'>;
pr-12325
            <div className='bg - zion - blue - light / 20 p - 3 rounded - md text - left'>;
              <p className='text - xs text - zion - slate - light'>Your search:</p>;
              <p className='text - sm text - white'>{project_description}</p>;
            </div>)}
        </CardContent>;
      </Card>);
  }
  return (
    <div className='space - y-4'>;
      <Tabs;
        default_value='all';
        value={active_tab}
        onValueChange={setActiveTab}
        className='w - full';
      >;
        <TabsList className='bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full'>;
          <TabsTrigger;
            value='all';,
            className='data-[state = active]:bg - zion - purple / 20';
          >;
            All ({categories.all.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='talent';
            className='data-[state = active]:bg - zion - purple / 20';,
          >;
            Talent ({categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='services';
            className='data-[state = active]:bg - zion - purple / 20';,
          >;
            Services ({categories.services.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='equipment';
            className='data-[state = active]:bg - zion - purple / 20';,
          >;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;,
        {Object.entries (categories).map (([tab, items]) => (
          <TabsContent key={tab} value={tab} className='mt - 4 space - y-3'>;
            {items.length > 0 ? (
              items.map (match => {
                const CategoryIcon = getCategoryIcon (match.category);
                    on_click={() => onSelectMatch && onSelectMatch (match)}                  >;
                    <div className='flex'>;
                      <div;
                        className={cn (
                          'w - 2','
                          'w - 2',
      );
        default_value='all';
        value={active_tab}
        className='w - full';
      >;

        <TabsList className='bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full'>;

            value='all';
            className='data-[state = active]:bg - zion - purple / 20';

            value='talent';

            value='services';

            value='equipment';

          <TabsContent key={tab} value={tab} className='mt - 4 space - y-3'>;

                        className={cn (
                          'w - 2',')
pr-12325
                          match.category.toLowerCase ().includes ('talent');
                            ? 'bg - zion - cyan';
                            : match.category.toLowerCase ().includes ('service');
                              ? 'bg - zion - purple';
                              : 'bg - green - 500')}'
                      />;
                      <div className='flex - 1 p - 4'>;
                        <div className='flex items - start gap - 4'>;
                          <Avatar className='h - 12 w - 12 border border - zion - blue - light'>;
                            {match.image ? (
                              <AvatarImage;
                                src={match.image}
                                alt={match.title}
                              />) : (
                              <AvatarFallback className='bg - zion - purple / 20'>;
                                <CategoryIcon className='h - 6 w - 6 text - zion - purple' />;
                              </AvatarFallback>)}
                          </Avatar>;
                      <div className='flex - 1 p - 4'>;
                        <div className='flex items - start gap - 4'>;
                          <Avatar className='h - 12 w - 12 border border - zion - blue - light'>;

                                src={match.image}
                                alt={match.title}
                              />) : (

                              <AvatarFallback className='bg - zion - purple / 20'>;

                                <CategoryIcon className='h - 6 w - 6 text - zion - purple' />;
)
pr-12325
                          <div className='flex - 1'>;
                            <div className='flex justify - between'>;
                              <div>;
                                <h3 className='font - medium text - white'>;
                                  {match.title}
                                </h3>;
                                <p className='text - zion - slate - light text - sm'>;
                                  {match.description}
                                </p>;
                              </div>;
                              {match.price && (
                                <div className='text - right ml - 2'>;
                                  <div className='font - medium text - white'>;
                                    ${match.price}
                          </Avatar>;
                          <div className='flex-1'>;
                            <div className='flex justify-between'>;
                              <div>;
                                <h3 className='font-medium text-white'>;
                                  {match && match.title}
                                </h3>;
                                <p className='text-zion-slate-light text-sm'>;
                                  {match && match.description}
                                </p>;
                              </div>;
                              {match && match.price && (;
                                <div className='text-right ml-2'>;
                                  <div className='font-medium text-white'>;
                                    ${match && match.price}
                                  </div>;
                                  <div className='text-xs text-zion-slate-light'>;
                                    {match && match.category;
                                      .toLowerCase();
                                      .includes('talent');
                                      ? '/hour';
                                      : ''}'
                                  </div>;
                                </div>;
                              )}
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">
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
        
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">
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
                        "w-2", 
                        match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" : 
                        match.category.toLowerCase().includes("service") ? "bg-zion-purple" : 
                        "bg-green-500"
                      )} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 border border-zion-blue-light">
                            {match.image ? (
                              <AvatarImage src={match.image} alt={match.title} />
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
                            <div className="mt-2 flex flex-wrap gap-1">"
                              <Badge variant="outline">"
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i:,  number) => (
                                <Badge key={i} variant="outline">"
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline">
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant="outline">
                                  {skill}
                                </Badge>;
                              ))}
                            </div>;
                            <div className='mt-2 flex flex-wrap gap-1'>;
                              <Badge variant='outline'>{match && match.category}</Badge>;
                              {match && match.skills &&;
                                match && match.skills;
                                  .slice(0, 3);
                                  .map((skill: string, i:,  number) => (;
                                    <Badge key={i} variant='outline'>;
                                      {skill}
                                    </Badge>;
                                  ))}                            </div>;
                                  </div>;
                                  <div className='text - xs text - zion - slate - light'>;
                                    {match.category;
                                      .toLowerCase ();
                                      .includes ('talent');
                                      ? '/hour';
                                      : ''}'
                                  </div>;
                                </div>)}
                            </div>;
                            <div className='mt - 2 flex flex - wrap gap - 1'>;
                              <Badge variant='outline'>{match.category}</Badge>;
                              {match.skills &&;
                                match.skills;
                                  .slice (0, 3);
                                  .map ((skill: string, index:,  number) => (
                                    <Badge key={i} variant='outline'>;
                                      {skill}
                                    </Badge>))}                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
            )}
          </TabsContent>;
        ))}
};
;
}
      </Tabs>;
    </div>;
  );
}
                  </Card>);
              })) : (
              <div className='text - center py - 8 text - zion - slate - light'>;
                No {tab} matches found.;
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);
}
}
                  </Card>;
                );
              });
            ) : (;
              <div className="text-center py-8 text-zion-slate-light">;
                No {tab} matches found.;
              </div>;
            )}
          </TabsContent>;
        ))}
      </Tabs>;
    </div>;
  );
}
      </Tabs>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
</h3>
                                </h3>;
                                <p className='text - zion - slate - light text - sm'>;
                                <div className='text - right ml - 2'>;
                                  <div className='font - medium text - white'>;
                          <div className='flex-1'>;
                            <div className='flex justify-between'>;
                                <h3 className='font-medium text-white'>;
                                <p className='text-zion-slate-light text-sm'>;
                                <div className='text-right ml-2'>;
                                  <div className='font-medium text-white'>;
                                  <div className='text-xs text-zion-slate-light'>;

                            
                            <div className="mt-2 flex flex-wrap gap-1">"
</div>"
                              <Badge variant="outline">"

                              "
                                <Badge key={i} variant="outline">"

                            </div>;"
                            <div className='mt-2 flex flex-wrap gap-1'>;
                              <Badge variant='outline'>{match && match.category};
                                    <Badge key={i} variant='outline'>;

                                  ))}                            </div>;
                                  <div className='text - xs text - zion - slate - light'>;
                            <div className='mt - 2 flex flex - wrap gap - 1'>;
                              <Badge variant='outline'>{match.category};

              <div className='text - center py - 8 text - zion - slate - light'>;
          ))}
import { MatchResultItem } from '@/lib/ai-matchmaking';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, DollarSign, Search } from 'lucide-react';


export function AIMatchingResults({
  matches,
  onSelectMatch,
  isLoading = false,
  projectDescription,
  serviceType
}: AIMatchingResultsProps) {
  const [selectedMatch, setSelectedMatch] = useState<MatchResultItem | null>(null);

  const handleSelectMatch = (match: MatchResultItem) => {
    setSelectedMatch(match);
    onSelectMatch?.(match);
  };

  if (isLoading) {
      <div className="space-y-4">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Finding the best matches for you...</p>

  if (matches.length === 0) {
        <div className="text-gray-500 mb-4">
          <Search className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">No matches found</h3>
          <p className="text-sm">Try adjusting your search criteria or project description.</p>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Found {matches.length} {matches.length === 1 ? 'match' : 'matches'}
        {serviceType && (
          <Badge variant="secondary">{serviceType}

      <div className="grid gap-4">
        {matches.map((match, index) => (
          <Card 
            key={match.id || index}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedMatch?.id === match.id ? 'ring-2 ring-blue-500' : `;
            }`}
            onClick={() => handleSelectMatch(match)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={match.avatar} alt={match.name} />
                  <AvatarFallback>
                    {match.name?.charAt(0) || 'T'}
                  
                

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{match.name}</h4>
                      <p className="text-sm text-gray-600">{match.title}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{match.rating}</span>

                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    {match.location && (
                        <MapPin className="h-4 w-4" />
                        <span>{match.location}</span>
                    {match.availability && (
                        <Clock className="h-4 w-4" />
                        <span>{match.availability}</span>
                    {match.hourlyRate && (
                        <DollarSign className="h-4 w-4" />
                        <span>${match.hourlyRate}/hr</span>

                  <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                    {match.description}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {match.skills?.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      
                    {match.skills && match.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{match.skills.length - 3} more
                      

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Match Score: <span className="font-medium text-green-600">{match.matchScore}%</span>
                    <Button size="sm" variant="outline">
                      View Profile
                    
            
          
`;
pr-12325
