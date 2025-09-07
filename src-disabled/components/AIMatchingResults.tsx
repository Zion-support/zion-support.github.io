

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
                        match.category.toLowerCase().includes('talent') ? 'bg-zion-cyan' : 
                        match.category.toLowerCase().includes('service') ? 'bg-zion-purple' : 
                        'bg-green-500'
                      )} />
                      <div className='flex-1 p-4'>
                        <div className='flex items-start gap-4'>
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>

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
    <div className='space-y-4'>
      <Tabs defaultValue='all' value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full'>
          <TabsTrigger value='all' className='data-[state=active]:bg-zion-purple/20'>
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger value='talent' className='data-[state=active]:bg-zion-purple/20'>
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value='services' className='data-[state=active]:bg-zion-purple/20'>
            Services ({categories.services.length})
          </TabsTrigger>
          <TabsTrigger value='equipment' className='data-[state=active]:bg-zion-purple/20'>
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className='mt-4 space-y-3'>
            {items.length > 0 ? (
              items.map((match) => {
                const CategoryIcon = getCategoryIcon(match.category),
                return (
                  <Card 
                    key={match.id}
                    className='bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer'
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                  >
                    <div className='flex'>
                      <div className={cn(
                        'w-2', 
                        match.category.toLowerCase().includes('talent') ? 'bg-zion-cyan' : 
                        match.category.toLowerCase().includes('service') ? 'bg-zion-purple' : 
                        'bg-green-500'
                      )} />
                      <div className='flex-1 p-4'>
                        <div className='flex items-start gap-4'>
                          <Avatar className='h-12 w-12 border border-zion-blue-light'>
                            {match.image ? (
                              <AvatarImage src={match.image} alt={match.title} />
                            ) : (
                              <AvatarFallback className='bg-zion-purple/20'>
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className='flex-1'>
                            <div className='flex justify-between'>
                              <div>
                                <h3 className='font-medium text-white'>{match.title}</h3>
                                <p className='text-zion-slate-light text-sm'>{match.description}</p>
                              </div>
                              {match.price && (
                                <div className='text-right ml-2'>
                                  <div className='font-medium text-white'>${match.price}</div>
                                  <div className='text-xs text-zion-slate-light'>
                                    {match.category.toLowerCase().includes('talent') ? '/hour' : ''}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className='mt-2 flex flex-wrap gap-1'>
                              <Badge variant='outline'>
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant='outline'>
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
              <div className='text-center py-8 text-zion-slate-light'>;
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

                            <div className='mt-2 flex flex-wrap gap-1'>'
</div>'
                              <Badge variant='outline'>'

                              '
                                <Badge key={i} variant='outline'>'

                            </div>;'
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
      <div className='space-y-4'>
        <div className='text-center py-8'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-2 text-gray-600'>Finding the best matches for you...</p>

  if (matches.length === 0) {
        <div className='text-gray-500 mb-4'>
          <Search className='h-12 w-12 mx-auto mb-4' />
          <h3 className='text-lg font-semibold'>No matches found</h3>
          <p className='text-sm'>Try adjusting your search criteria or project description.</p>

      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>
          Found {matches.length} {matches.length === 1 ? 'match' : 'matches'}
        {serviceType && (
          <Badge variant='secondary'>{serviceType}

      <div className='grid gap-4'>
        {matches.map((match, index) => (
          <Card 
            key={match.id || index}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedMatch?.id === match.id ? 'ring-2 ring-blue-500' : `;
            }`}
            onClick={() => handleSelectMatch(match)}
          >
            <CardContent className='p-6'>
              <div className='flex items-start space-x-4'>
                <Avatar className='h-12 w-12'>
                  <AvatarImage src={match.avatar} alt={match.name} />
                  <AvatarFallback>
                    {match.name?.charAt(0) || 'T'}

                <div className='flex-1 min-w-0'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h4 className='font-semibold text-lg'>{match.name}</h4>
                      <p className='text-sm text-gray-600'>{match.title}</p>
                    <div className='flex items-center space-x-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='text-sm font-medium'>{match.rating}</span>

                  <div className='mt-2 flex items-center space-x-4 text-sm text-gray-500'>
                    {match.location && (
                        <MapPin className='h-4 w-4' />
                        <span>{match.location}</span>
                    {match.availability && (
                        <Clock className='h-4 w-4' />
                        <span>{match.availability}</span>
                    {match.hourlyRate && (
                        <DollarSign className='h-4 w-4' />
                        <span>${match.hourlyRate}/hr</span>

                  <p className='mt-3 text-sm text-gray-700 line-clamp-2'>
                    {match.description}

                  <div className='mt-3 flex flex-wrap gap-2'>
                    {match.skills?.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant='outline' className='text-xs'>
                        {skill}
                    {match.skills && match.skills.length > 3 && (
                      <Badge variant='outline' className='text-xs'>
                        +{match.skills.length - 3} more

                  <div className='mt-4 flex items-center justify-between'>
                    <div className='text-sm text-gray-500'>
                      Match Score: <span className='font-medium text-green-600'>{match.matchScore}%</span>
                    <Button size='sm' variant='outline'>
                      View Profile
`;
pr-12325
