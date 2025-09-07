<<<<<<< HEAD
interface AIMatchingResultsProps {
  // TODO: Implement
}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;interface AIMatchingResultsProps {
  // TODO: Implement
}
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem,) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}

import { useState } from 'react';''
import { MatchResultItem } from '@/lib / ai - matchmaking';''
import { Card, CardContent } from '@/components/ui/ card';''
import { Badge } from '@/components/ui/ badge';''
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/ avatar';''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/ tabs';''
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react';''
import Skeleton from '@/components/ui/ skeleton';''
import { cn } from '@/lib / utils';'
interface AIMatchingResultsProps {
  // TODO: Implement
}
  matches: MatchResultItem[];
  onSelectMatch?: (match: MatchResultItem) => void;
  is_loading?: boolean;
  project_description?: string;
  service_type?: string;interface AIMatchingResultsProps {
  // TODO: Implement
}
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem, ) => void,
  is_loading?: boolean,
  project_description?: string,
  service_type?: string;
}
export /**
 * AIMatchingResults - Function description;
 */
function AIMatchingResults() {'
  const [active_tab, setActiveTab] = useState ('all');'
  // Group matches by category;
  const categories = {
    all: matches,
    talent: matches.filter (match =>;)'
      match.category.toLowerCase ().includes ('talent')),'
    services: matches.filter (match =>;)'
      match.category.toLowerCase ().includes ('service')),'
    equipment: matches.filter (match =>;)'
      match.category.toLowerCase ().includes ('equipment')),'
  }
  // Get the icon for a category;
  const getCategoryIcon = (category: string) =>: any {
  // TODO: Implement
}
    const lower_category = category.toLowerCase ();
    if () return User) {
  $2;
}
    if () return Monitor) {
  $2;
}
    return BriefcaseIcon;
  }
  // Check condition;
if ( {) {
  $2;
}
    return ('
      <div className='space - y-4'>;'
</div>'
        <Skeleton className='h - 10 w - full' />;'
</Skeleton>'
        <div className='space - y-3'>;'
</div>'
          <Skeleton className='h-[120px] w - full' />;'
</Skeleton>'
          <Skeleton className='h-[120px] w - full' />;'
</Skeleton>'
          <Skeleton className='h-[120px] w - full' />;'
</Skeleton>
        </div>;)
      </div>);'
      <div className='space-y-4'>;'
</div>'
        <Skeleton className='h-10 w-full' />;'
</Skeleton>'
        <div className='space-y-3'>;'
</div>'
          <Skeleton className='h-[120px] w-full' />;'
</Skeleton>'
          <Skeleton className='h-[120px] w-full' />;'
</Skeleton>'
          <Skeleton className='h-[120px] w-full' />;'
</Skeleton>
        </div>;
      </div>;'
      <Card className='bg-zion-blue-dark border-zion-blue-light text-center p-6'>;'
</Card>'
        <CardContent className='pt-6'>;'
</CardContent>'
          <BarChart3 className='h-12 w-12 mx-auto text-zion-slate-light mb-3' />;'
</BarChart3>'
          <p className='text-white font-medium mb-2'>No matches found</p>;''
          <p className='text-zion-slate-light text-sm mb-4'>;'
</p>
          </p>;'
            <div className='bg-zion-blue-light/20 p-3 rounded-md text-left'>;'
</div>'
              <p className='text-xs text-zion-slate-light'>Your search:</p>;''
              <p className='text-sm text-white'>{projectDescription}</p>;'
            </div>;
        </CardContent>;
      </Card>;'
    <div className='space-y-4'>;'
</div>
      <Tabs;'
        defaultValue='all''
        value={activeTab}
        onValueChange={setActiveTab}'
        className='w-full'>;'
</Tabs>'
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>;'
</TabsList>
          <TabsTrigger;'
            value='all'''
            className='data-[state=active]:bg-zion-purple/20'>;'
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='talent'''
            className='data-[state=active]:bg-zion-purple/20'>;'
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='services'''
            className='data-[state=active]:bg-zion-purple/20'>;'
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='equipment'''
            className='data-[state=active]:bg-zion-purple/20'>;'
</TabsTrigger>
          </TabsTrigger>;
        </TabsList>;'
          <TabsContent key={tab} value={tab} className='mt-4 space-y-3'>;'
</TabsContent>'
                    <div className='flex'>;'
</div>
                      <div;
                        className={cn('
                          'w-2',')'
                          match && match.category.toLowerCase().includes('talent')''
                            ? 'bg-zion-cyan'''
                            : match && match.category.toLowerCase().includes('service')''
                              ? 'bg-zion-purple'''
                              : 'bg-green-500''
                        )}

                      />;
</div>'
                      <div className='flex-1 p-4'>;'
</div>'
                        <div className='flex items-start gap-4'>;'
</div>'
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>;'
</Avatar>
                              <AvatarImage;
                                src={match && match.image}
                                alt={match && match.title}
                              />;
</AvatarImage>'
                              <AvatarFallback className='bg-zion-purple/20'>;'
</AvatarFallback>'
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;'
</CategoryIcon>
                              </AvatarFallback>;'
      <Card className='bg - zion - blue - dark border - zion - blue - light text - center p - 6'>;'
</Card>'
        <CardContent className='pt - 6'>;'
</CardContent>'
          <BarChart3 className='h - 12 w - 12 mx - auto text - zion - slate - light mb - 3' />;'
</BarChart3>'
          <p className='text - white font - medium mb - 2'>No matches found</p>;''
          <p className='text - zion - slate - light text - sm mb - 4'>;'
</p>
          </p>;'
            <div className='bg - zion - blue - light / 20 p - 3 rounded - md text - left'>;'
</div>'
              <p className='text - xs text - zion - slate - light'>Your search:</p>;''
              <p className='text - sm text - white'>{project_description}</p>;'
            </div>)}
        </CardContent>;
      </Card>);'
    <div className='space - y-4'>;'
</div>
      <Tabs;'
        default_value='all';'
        value={active_tab}
        onValueChange={setActiveTab}'
        className='w - full';'
      >;
</Tabs>'
        <TabsList className='bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full'>;'
</TabsList>
          <TabsTrigger;'
            value='all';''
            className='data-[state = active]:bg - zion - purple / 20';'
          >;
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='talent';''
            className='data-[state = active]:bg - zion - purple / 20';'
          >;
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='services';''
            className='data-[state = active]:bg - zion - purple / 20';'
          >;
</TabsTrigger>
          </TabsTrigger>;
          <TabsTrigger;'
            value='equipment';''
            className='data-[state = active]:bg - zion - purple / 20';'
          >;
</TabsTrigger>
          </TabsTrigger>;
        </TabsList>;'
          <TabsContent key={tab} value={tab} className='mt - 4 space - y-3'>;'
</TabsContent>'
                    <div className='flex'>;'
</div>
                      <div;
                        className={cn ('
                          'w - 2',')'
                          match.category.toLowerCase ().includes ('talent');''
                            ? 'bg - zion - cyan';''
                            : match.category.toLowerCase ().includes ('service');''
                              ? 'bg - zion - purple';''
                              : 'bg - green - 500')}'
                      />;
</div>'
                      <div className='flex - 1 p - 4'>;'
</div>'
                        <div className='flex items - start gap - 4'>;'
</div>'
                          <Avatar className='h - 12 w - 12 border border - zion - blue - light'>;'
</Avatar>
                              <AvatarImage;
                                src={match.image}
                                alt={match.title}
                              />) : (
</AvatarImage>'
                              <AvatarFallback className='bg - zion - purple / 20'>;'
</AvatarFallback>'
                                <CategoryIcon className='h - 6 w - 6 text - zion - purple' />;'
</CategoryIcon>)
                              </AvatarFallback>)}
                          </Avatar>;'
                          <div className='flex - 1'>;'
</div>'
                            <div className='flex justify - between'>;'
</div>
                              <div>;
</div>'
                                <h3 className='font - medium text - white'>;'
</h3>
                                </h3>;'
                                <p className='text - zion - slate - light text - sm'>;'
</p>
                                </p>;
                              </div>;'
                                <div className='text - right ml - 2'>;'
</div>'
                                  <div className='font - medium text - white'>;'
</div>
                          </Avatar>;'
                          <div className='flex-1'>;'
</div>'
                            <div className='flex justify-between'>;'
</div>
                              <div>;
</div>'
                                <h3 className='font-medium text-white'>;'
</h3>
                                </h3>;'
                                <p className='text-zion-slate-light text-sm'>;'
</p>
                                </p>;
                              </div>;'
                                <div className='text-right ml-2'>;'
</div>'
                                  <div className='font-medium text-white'>;'
</div>
                                  </div>;'
                                  <div className='text-xs text-zion-slate-light'>;'
</div>
                                  </div>;
                                </div>;
                                  </div>
                                </div>
                            </div>

                            '
                            <div className="mt-2 flex flex-wrap gap-1">"
</div>"
                              <Badge variant="outline">"
</Badge>
                              </Badge>"
                                <Badge key={i} variant="outline">"
</Badge>
                                </Badge>;
                            </div>;"
                            <div className='mt-2 flex flex-wrap gap-1'>;'
</div>'
                              <Badge variant='outline'>{match && match.category}</Badge>;''
                                    <Badge key={i} variant='outline'>;'
</Badge>
                                    </Badge>;
                                  ))}                            </div>;
                                  </div>;'
                                  <div className='text - xs text - zion - slate - light'>;'
</div>
                                  </div>;
                                </div>)}
                            </div>;'
                            <div className='mt - 2 flex flex - wrap gap - 1'>;'
</div>'
                              <Badge variant='outline'>{match.category}</Badge>;''
                                    <Badge key={i} variant='outline'>;'
</Badge>
                                    </Badge>))}                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
          </TabsContent>;
      </Tabs>;
    </div>;
                  </Card>);'
              <div className='text - center py - 8 text - zion - slate - light'>;'
</div>
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);'
=======
import { useState } from 'react';
import { MatchResultItem } from '@/lib/ai-matchmaking';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, DollarSign, Search } from 'lucide-react';

interface AIMatchingResultsProps {
  matches: MatchResultItem[];
  onSelectMatch?: (match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}

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
    return (
      <div className="space-y-4">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Finding the best matches for you...</p>
        </div>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-4">
          <Search className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">No matches found</h3>
          <p className="text-sm">Try adjusting your search criteria or project description.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Found {matches.length} {matches.length === 1 ? 'match' : 'matches'}
        </h3>
        {serviceType && (
          <Badge variant="secondary">{serviceType}</Badge>
        )}
      </div>

      <div className="grid gap-4">
        {matches.map((match, index) => (
          <Card 
            key={match.id || index}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedMatch?.id === match.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => handleSelectMatch(match)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={match.avatar} alt={match.name} />
                  <AvatarFallback>
                    {match.name?.charAt(0) || 'T'}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{match.name}</h4>
                      <p className="text-sm text-gray-600">{match.title}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{match.rating}</span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    {match.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{match.location}</span>
                      </div>
                    )}
                    {match.availability && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{match.availability}</span>
                      </div>
                    )}
                    {match.hourlyRate && (
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${match.hourlyRate}/hr</span>
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                    {match.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {match.skills?.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {match.skills && match.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{match.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Match Score: <span className="font-medium text-green-600">{match.matchScore}%</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
