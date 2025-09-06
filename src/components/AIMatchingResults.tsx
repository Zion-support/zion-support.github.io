export function AIMatchingResults({
  matches,
  onSelectMatch,
  isLoading = false,
  projectDescription = '',
  serviceType: _serviceType = '',
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState('all');

  // Group matches by category
  const categories = {
    all: matches,
    talent: matches.filter(match =>
      match.category.toLowerCase().includes('talent')
    ),
    services: matches.filter(match =>
      match.category.toLowerCase().includes('service')
    ),
    equipment: matches.filter(match =>
      match.category.toLowerCase().includes('equipment')
    ),
  };

  // Get the icon for a category

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
    );
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
    );
  }

  return (
    <div className='space-y-4'>
      <Tabs
        defaultValue='all'
        value={activeTab}
        onValueChange={setActiveTab}
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

                  >
                    <div className='flex'>
                      <div
                        className={cn(
                          'w-2',
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
                                  </div>
                                  <div className='text-xs text-zion-slate-light'>
                                    {match.category
                                      .toLowerCase()
                                      .includes('talent')
                                      ? '/hour'
                                      : ''}
                                  </div>
                                </div>
                              )}
                            </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <div className='text-center py-8 text-zion-slate-light'>
                No {tab} matches found.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );