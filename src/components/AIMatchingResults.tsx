
interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void
  isLoading?: boolean
  projectDescription?: string

  serviceType?: string;interface AIMatchingResultsProps {
  matches: MatchResultItem[]
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
  const categories = {
    all: matches,
    talent: matches.filter (match =>;
      match.category.toLowerCase ().includes ('talent')),
    services: matches.filter (match =>;
      match.category.toLowerCase ().includes ('service')),
    equipment: matches.filter (match =>;
      match.category.toLowerCase ().includes ('equipment')),

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
            </div>;
          )}

        </CardContent>;
      </Card>;
    );

  }
  return (
    <div className='space-y-4'>;

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
                            ? 'bg-zion-cyan'
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'
                        )}
                      />;
                      <div className='flex-1 p-4'>;
                        <div className='flex items-start gap-4'>;
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>;
                            {match && match.image ? (;
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
                              />) : (
                              <AvatarFallback className='bg - zion - purple / 20'>;
                                <CategoryIcon className='h - 6 w - 6 text - zion - purple' />;
                              </AvatarFallback>)}
                          </Avatar>;
                          <div className='flex - 1'>;
                            <div className='flex justify - between'>;
                              <div>;
                                <h3 className='font - medium text - white'>;

                                  </div>
                                </div>
                              )}
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

