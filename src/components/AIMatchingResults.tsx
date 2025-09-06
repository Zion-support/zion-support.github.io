<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx


=======
import Skeleton from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { useState } from 'react'
import { MatchResultItem } from '@/lib/ai-matchmaking'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'
<<<<<<< HEAD
import Skeleton from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
=======
import Skeleton from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'
import Skeleton from "@/components/ui/skeleton",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
<<<<<<< HEAD

interface AIMatchingResultsProps {
=======
>>>>>>> interface AIMatchingResultsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void
  isLoading?: boolean
  projectDescription?: string
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void
  isLoading?: boolean;
  projectDescription?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  serviceType?: string;interface AIMatchingResultsProps {
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem,) => void
  isLoading?: boolean
  projectDescription?: string

  serviceType?: string
}
<<<<<<< HEAD
<<<<<<< HEAD

                                  </div>
                                </div>
                              )}
                            </div>

=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function AIMatchingResults({

  matches
  onSelectMatch
  isLoading = false
  projectDescription = ''
  serviceType: _serviceType = ''
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState('all')
  // Group matches by category
<<<<<<< HEAD
========
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
  matches: MatchResultItem[];
  onSelectMatch?: (match: MatchResultItem) => void;
  is_loading?: boolean;
  project_description?: string;
  service_type?: string;interface AIMatchingResultsProps {
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem, ) => void,
  is_loading?: boolean,
  project_description?: string,
  service_type?: string;
}
export /**
 * AIMatchingResults - Function description
 */
function AIMatchingResults() {
  const [active_tab, setActiveTab] = useState ('all');
  // Group matches by category;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
  const categories = {
    all: matches,
    talent: matches.filter (match =>;
      match.category.toLowerCase ().includes ('talent')),
    services: matches.filter (match =>;
      match.category.toLowerCase ().includes ('service')),
    equipment: matches.filter (match =>;
      match.category.toLowerCase ().includes ('equipment')),
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
  }
  // Get the icon for a category;
  const getCategoryIcon = (category: string) =>: any {
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
        <div className='space - y-3'>;
          <Skeleton className='h-[120px] w - full' />;
          <Skeleton className='h-[120px] w - full' />;
          <Skeleton className='h-[120px] w - full' />;
        </div>;
      </div>);
  }
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
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
  matches: MatchResultItem[];
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem,) => void,;
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
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState('all');
  // Group matches by category;
  const categories = {;
    all: matches,;
    talent: matches && matches.filter(match =>;
      match && match.category.toLowerCase().includes('talent');
    ),;
    services: matches && matches.filter(match =>;
      match && match.category.toLowerCase().includes('service');
    ),;
    equipment: matches && matches.filter(match =>;
      match && match.category.toLowerCase().includes('equipment');
    ),;
  };
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {;
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
          <Skeleton className='h-[120px] w-full' />;
          <Skeleton className='h-[120px] w-full' />;
          <Skeleton className='h-[120px] w-full' />;
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
=======
import { useState } from "react",;
import { MatchResultItem } from "@/lib/ai-matchmaking",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';
import Skeleton from "@/components/ui/skeleton",;
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
    const lowerCategory = category.toLowerCase(),;
    if (lowerCategory.includes("talent")) return User,;
    if (lowerCategory.includes("equipment")) return Monitor,;
    return BriefcaseIcon;
  },;
  ;
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
    ),;
  }
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          )}
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    );
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
  }
  return (
    <div className='space-y-4'>;
=======
  const categories = {
    all: matches
    talent: matches.filter(match =>
      match.category.toLowerCase().includes('talent')
    )
    services: matches.filter(match =>
      match.category.toLowerCase().includes('service')
    )
    equipment: matches.filter(match =>
      match.category.toLowerCase().includes('equipment')
    )
  }
  // Get the icon for a category
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase()
    if (lowerCategory.includes('talent')) return User
    if (lowerCategory.includes('equipment')) return Monitor
    return BriefcaseIcon
  }
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <Skeleton className='h-10 w-full' />
        <div className='space-y-3'>
          <Skeleton className='h-[120px] w-full' />
          <Skeleton className='h-[120px] w-full' />
          <Skeleton className='h-[120px] w-full' />
        </div>
      </div>
    )
  }
  if (matches.length === 0) {
    return (
      <Card className='bg-zion-blue-dark border-zion-blue-light text-center p-6'>
        <CardContent className='pt-6'>
          <BarChart3 className='h-12 w-12 mx-auto text-zion-slate-light mb-3' />
          <p className='text-white font-medium mb-2'>No matches found</p>
          <p className='text-zion-slate-light text-sm mb-4'>
            Try adjusting your search criteria or description for better
            results.
          </p>
          {projectDescription && (
            <div className='bg-zion-blue-light/20 p-3 rounded-md text-left'>
              <p className='text-xs text-zion-slate-light'>Your search:</p>
              <p className='text-sm text-white'>{projectDescription}</p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
  return (
    <div className='space-y-4'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Tabs
        defaultValue='all'
        value={activeTab}
        onValueChange={setActiveTab}
<<<<<<< HEAD
        className='w-full'>;
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>;
          <TabsTrigger
            value='all'
            className='data-[state=active]:bg-zion-purple/20'>;
            All ({categories && categories.all.length});
          </TabsTrigger>;
          <TabsTrigger
            value='talent'
            className='data-[state=active]:bg-zion-purple/20'>;
            Talent ({categories && categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger
            value='services'
            className='data-[state=active]:bg-zion-purple/20'>;
            Services ({categories && categories.services.length});
          </TabsTrigger>;
          <TabsTrigger
            value='equipment'
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
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
                          'w-2',
                          match && match.category.toLowerCase().includes('talent')
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
                            ? 'bg-zion-cyan'
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'
                        )}
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
                      />;
                      <div className='flex-1 p-4'>;
                        <div className='flex items-start gap-4'>;
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>;
                            {match && match.image ? (;
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
                              <AvatarImage
                                src={match && match.image}
                                alt={match && match.title}
                              />;
                            ) : (;
                              <AvatarFallback className='bg-zion-purple/20'>;
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;
                              </AvatarFallback>;
                            )}
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
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
            value='all';
            className='data-[state = active]:bg - zion - purple / 20';
          >;
            All ({categories.all.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='talent';
            className='data-[state = active]:bg - zion - purple / 20';
          >;
            Talent ({categories.talent.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='services';
            className='data-[state = active]:bg - zion - purple / 20';
          >;
            Services ({categories.services.length});
          </TabsTrigger>;
          <TabsTrigger;
            value='equipment';
            className='data-[state = active]:bg - zion - purple / 20';
          >;
            Equipment ({categories.equipment.length});
          </TabsTrigger>;
        </TabsList>;
        {Object.entries (categories).map (([tab, items]) => (
          <TabsContent key={tab} value={tab} className='mt - 4 space - y-3'>;
            {items.length > 0 ? (
              items.map (match => {
                const CategoryIcon = getCategoryIcon (match.category);
                    on_click={() => onSelectMatch && onSelectMatch (match)}                  >;
                    <div className='flex'>;
                      <div;
                        className={cn (
                          'w - 2',
                          match.category.toLowerCase ().includes ('talent');
                            ? 'bg - zion - cyan';
                            : match.category.toLowerCase ().includes ('service');
                              ? 'bg - zion - purple';
                              : 'bg - green - 500')}
                      />;
                      <div className='flex - 1 p - 4'>;
                        <div className='flex items - start gap - 4'>;
                          <Avatar className='h - 12 w - 12 border border - zion - blue - light'>;
                            {match.image ? (
                              <AvatarImage;
                                src={match.image}
                                alt={match.title}
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx
=======
        className='w-full'
      >
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>
          <TabsTrigger
            value='all'
            className='data-[state=active]:bg-zion-purple/20'
          >
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger
            value='talent'
            className='data-[state=active]:bg-zion-purple/20'
          >
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger
            value='services'
            className='data-[state=active]:bg-zion-purple/20'
          >
            Services ({categories.services.length})
          </TabsTrigger>
          <TabsTrigger
            value='equipment'
            className='data-[state=active]:bg-zion-purple/20'
          >
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className='mt-4 space-y-3'>
            {items.length > 0 ? (
              items.map(match => {
                const CategoryIcon = getCategoryIcon(match.category)
                    onClick={() => onSelectMatch && onSelectMatch(match)}                  >
                    <div className='flex'>
                      <div
                        className={cn(
                          'w-2'
                          match.category.toLowerCase().includes('talent')
                            ? 'bg-zion-cyan'
                            : match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'
                        )}
                      />
                      <div className='flex-1 p-4'>
                        <div className='flex items-start gap-4'>
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>

                            {match.image ? (
                              <AvatarImage
                                src={match.image}
                                alt={match.title}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              />
                            ) : (
                              <AvatarFallback className='bg-zion-purple/20'>
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className='flex-1'>
                            <div className='flex justify-between'>
                              <div>
                                <h3 className='font-medium text-white'>
<<<<<<< HEAD
========
                              />) : (
                              <AvatarFallback className='bg - zion - purple / 20'>;
                                <CategoryIcon className='h - 6 w - 6 text - zion - purple' />;
                              </AvatarFallback>)}
                          </Avatar>;
                          <div className='flex - 1'>;
                            <div className='flex justify - between'>;
                              <div>;
                                <h3 className='font - medium text - white'>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  {match.title}
                                </h3>
                                <p className='text-zion-slate-light text-sm'>
                                  {match.description}
                                </p>
                              </div>
                              {match.price && (
                                <div className='text-right ml-2'>
                                  <div className='font-medium text-white'>
                                    ${match.price}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  </div>
                                  <div className='text-xs text-zion-slate-light'>
                                    {match.category
                                      .toLowerCase()
                                      .includes('talent')
                                      ? '/hour'
                                      : ''}
<<<<<<< HEAD

>>>>>>>                                   </div>
                                </div>
                              )}
                            </div>
=======
=======
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                                  </div>
                                </div>
                              )}
                            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            <div className='mt-2 flex flex-wrap gap-1'>
                              <Badge variant='outline'>{match.category}</Badge>
                              {match.skills &&
                                match.skills
                                  .slice(0, 3)
                                  .map((skill: string, i: number) => (
                                    <Badge key={i} variant='outline'>
                                      {skill}
                                    </Badge>
                                  ))}                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })
            ) : (
              <div className='text-center py-8 text-zion-slate-light'>
                No {tab} matches found.
              </div>
<<<<<<< HEAD
>>>>>>>             )}
          </TabsContent>
        ))}
ursor/fix-website-loading-errors-and-merge-6662
========
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
                                      : ''}
=======
    ),;
  }
  ;
  return (;
    <div className="space-y-4">;
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;
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
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                            {match.image ? (;
                              <AvatarImage src={match.image} alt={match.title} />;
                            ) :(;
                              <AvatarFallback className="bg-zion-purple/20">;
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;
                            )}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                  </div>;
                                </div>;
                              )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
                            </div>;
<<<<<<< HEAD
                            <div className='mt-2 flex flex-wrap gap-1'>;
                              <Badge variant='outline'>{match && match.category}</Badge>;
                              {match && match.skills &&;
                                match && match.skills;
                                  .slice(0, 3);
                                  .map((skill: string, i: number) => (;
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
                                      : ''}
                                  </div>;
                                </div>)}
                            </div>;
                            <div className='mt - 2 flex flex - wrap gap - 1'>;
                              <Badge variant='outline'>{match.category}</Badge>;
                              {match.skills &&;
                                match.skills;
                                  .slice (0, 3);
                                  .map ((skill: string, index: number) => (
                                    <Badge key={i} variant='outline'>;
                                      {skill}
                                    </Badge>))}                            </div>;
=======
                            ;
                            <div className="mt-2 flex flex-wrap gap-1">;
                              <Badge variant="outline">;
                                {match.category}
                              </Badge>;
                              {match.skills && match.skills.slice(0, 3).map((skill:string, i:number) => (;
                                <Badge key={i} variant="outline">;
=======
=======
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline">
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant="outline">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  {skill}
                                </Badge>;
                              ))}
                            </div>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          </div>;
                        </div>;
                      </div>;
                    </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            )}
          </TabsContent>;
        ))}

<<<<<<< HEAD
}

=======

};
;


>>>>>>> }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
=======
                  </Card>;
                );
              });
            ) : (;
              <div className="text-center py-8 text-zion-slate-light">;
                No {tab} matches found.;
              </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            )}
          </TabsContent>
        ))}
<<<<<<< HEAD
      </Tabs>
    </div>
  )
<<<<<<< HEAD
=======
};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </Tabs>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/AIMatchingResults.tsx
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                  </Card>);
              })) : (
              <div className='text - center py - 8 text - zion - slate - light'>;
                No {tab} matches found.;
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);
}
=======
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
  ),;}
 interface AIMatchingResultsProps {;
  matches: MatchResultItem[];
onSelectMatch?: (match: MatchResultItem) => void;
isLoading?: boolean;
projectDescription?: string;
serviceType?: string ;
}export function AIMatchingResults ({;
  matches;
onSelectMatch;
isLoading = false;
projectDescription = "";";
serviceType: serviceType = "" ;
}: AIMatchingResultsProps) {;
  //Group matches by category const categories = {;
  all: matches;
if (isLoading) {";
  return (<div className=" space-y-4"> <Skeleton className=" h-10 w-full"/> <div className=" space-y-3"> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> <Skeleton className=" h-[120px] w-full"/> </div> </div>) ;
}if (matches.length === 0) {";
  return (<Card className=" bg-zion-blue-dark border-zion-blue-light text-center p-6"> <CardContent className=" pt-6"> <BarChart3 className=" h-12 w-12 mx-auto text-zion-slate-light mb-3"/> <p className=" text-white font-medium mb-2">No matches found</p> <p className=" text-zion-slate-light text-sm mb-4"> projectDescription && (<div className=" bg-zion-blue-light/20 p-3 rounded-md text-left"> <p className=" text-xs text-zion-slate-light">Your search:</p> <p className=" text-sm text-white"> {;
  projectDescription ;
}</p> </div>) ;
}</CardContent> </Card>) ";
}return () : (<AvatarFallback className=" bg-zion-purple/20"> <CategoryIcon className=" h-6 w-6 text-zion-purple"/> </AvatarFallback>) ";
}</Avatar> <div className=" flex-1"> <div className=" flex justify-between"> <div> </div> </div>) ;
}</div> </Badge>) ) ;
}</div> </div> </div> </div> </div> </Card>) ";
}) ) : (<div className="text-center py-8 text-zion-slate-light"> No {;
  tab ;
}matches found. </div>) ;
}</TabsContent>) ) ;
}</Tabs> </div>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/AIMatchingResults.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
