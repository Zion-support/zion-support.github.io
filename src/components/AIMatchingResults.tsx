interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void
  isLoading?: boolean
  projectDescription?: string
  serviceType?: string;interface AIMatchingResultsProps {
  onSelectMatch?: (match: MatchResultItem,) => void

  serviceType?: string
}

  const categories = {
    all: matches,
    talent: matches.filter (match =>;
      match.category.toLowerCase ().includes ('talent')),
    services: matches.filter (match =>;
      match.category.toLowerCase ().includes ('service')),
    equipment: matches.filter (match =>;
      match.category.toLowerCase ().includes ('equipment')),

  // Get the icon for a category;
  const getCategoryIcon = (category: string) =>: any {
    const lower_category = category.toLowerCase ();
    if () return User) {
  $2
    if () return Monitor) {
    return BriefcaseIcon;
  // Check condition
if ( {) {
    return (
      <div className='space - y-4'>;
        <Skeleton className='h - 10 w - full' />;
        <div className='space - y-3'>;
          <Skeleton className='h-[120px] w - full' />;
        </div>;
      </div>);

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
    equipment: matches && matches.filter(match =>;
      match && match.category.toLowerCase().includes('equipment');
  };

  const getCategoryIcon = (category: string) => {;
    const lowerCategory = category && category.toLowerCase();
    if (lowerCategory && lowerCategory.includes('talent')) return User;
    if (lowerCategory && lowerCategory.includes('equipment')) return Monitor;
  if (isLoading) {;
      <div className='space-y-4'>;
        <Skeleton className='h-10 w-full' />;
        <div className='space-y-3'>;
          <Skeleton className='h-[120px] w-full' />;
    );

  if (matches && matches.length === 0) {;
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
          )}

        </CardContent>;
      </Card>;

      <Tabs
        defaultValue='all'
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full'>;
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>;
          <TabsTrigger
            value='all'
            className='data-[state=active]:bg-zion-purple/20'>;
            All ({categories && categories.all.length});
          </TabsTrigger>;
            value='talent'
            Talent ({categories && categories.talent.length});
            value='services'
            Services ({categories && categories.services.length});
            value='equipment'

            Equipment ({categories && categories.equipment.length});
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

                            ? 'bg-zion-cyan'
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'

                      />;
                      <div className='flex-1 p-4'>;
                        <div className='flex items-start gap-4'>;
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>;
                            {match && match.image ? (;

                              <AvatarImage
                                src={match && match.image}
                                alt={match && match.title}
                            ) : (;
                              <AvatarFallback className='bg-zion-purple/20'>;
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;
                              </AvatarFallback>;

      <Card className='bg - zion - blue - dark border - zion - blue - light text - center p - 6'>;
        <CardContent className='pt - 6'>;
          <BarChart3 className='h - 12 w - 12 mx - auto text - zion - slate - light mb - 3' />;
          <p className='text - white font - medium mb - 2'>No matches found</p>;
          <p className='text - zion - slate - light text - sm mb - 4'>;
          {project_description && (
            <div className='bg - zion - blue - light / 20 p - 3 rounded - md text - left'>;
              <p className='text - xs text - zion - slate - light'>Your search:</p>;
              <p className='text - sm text - white'>{project_description}</p>;
            </div>)}
      </Card>);
      <Tabs;
        default_value='all';
        value={active_tab}
        className='w - full';
      >;
        <TabsList className='bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full'>;
          <TabsTrigger;
            value='all';
            className='data-[state = active]:bg - zion - purple / 20';
            All ({categories.all.length});
            value='talent';
            Talent ({categories.talent.length});
            value='services';
            Services ({categories.services.length});
            value='equipment';
            Equipment ({categories.equipment.length});
        {Object.entries (categories).map (([tab, items]) => (
          <TabsContent key={tab} value={tab} className='mt - 4 space - y-3'>;
            {items.length > 0 ? (
              items.map (match => {
                const CategoryIcon = getCategoryIcon (match.category);
                    on_click={() => onSelectMatch && onSelectMatch (match)}                  >;
                      <div;
                        className={cn (
                          'w - 2',
                          match.category.toLowerCase ().includes ('talent');
                            ? 'bg - zion - cyan';
                            : match.category.toLowerCase ().includes ('service');
                              ? 'bg - zion - purple';
                              : 'bg - green - 500')}
                      <div className='flex - 1 p - 4'>;
                        <div className='flex items - start gap - 4'>;
                          <Avatar className='h - 12 w - 12 border border - zion - blue - light'>;
                            {match.image ? (
                              <AvatarImage;
                                src={match.image}
                                alt={match.title}

                                  </div>
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
                  </Card>
                )
              })
            ) : (
              <div className='text-center py-8 text-zion-slate-light'>
                No {tab} matches found.

                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline">
                                {match.category}
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant="outline">
                                </Badge>;
                              ))}

                            <div className='mt-2 flex flex-wrap gap-1'>;
                              <Badge variant='outline'>{match && match.category}</Badge>;
                              {match && match.skills &&;
                                match && match.skills;
                                  .slice(0, 3);
                                  .map((skill: string, i: number) => (;
                                    <Badge key={i} variant='outline'>;
                                  ))}                            </div>;
                                  <div className='text - xs text - zion - slate - light'>;
                                    {match.category;
                                      .toLowerCase ();
                                      .includes ('talent');
                                      ? '/hour';
                                      : ''}
                            <div className='mt - 2 flex flex - wrap gap - 1'>;
                              <Badge variant='outline'>{match.category}</Badge>;
                              {match.skills &&;
                                match.skills;
                                  .slice (0, 3);
                                  .map ((skill: string, index: number) => (
                                    </Badge>))}                            </div>;

          </TabsContent>;

      </Tabs>;

              })) : (
              <div className='text - center py - 8 text - zion - slate - light'>;
                No {tab} matches found.;
          </TabsContent>))}