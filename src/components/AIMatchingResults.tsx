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
  }
  return (
    <div className='space-y-4'>;
      <Tabs
        defaultValue='all'
        value={activeTab}
        onValueChange={setActiveTab}
                            ? 'bg-zion-cyan'
                            : match && match.category.toLowerCase().includes('service')
                              ? 'bg-zion-purple'
                              : 'bg-green-500'
                        )}
                              <AvatarImage
                                src={match && match.image}
                                alt={match && match.title}
                              />;
                            ) : (;
                              <AvatarFallback className='bg-zion-purple/20'>;
                                <CategoryIcon className='h-6 w-6 text-zion-purple' />;
                              </AvatarFallback>;
                            )}

                                  </div>;
                                </div>;
                              )}







                                  </div>
                                </div>
                              )}
                            </div>
                          </div>;
                        </div>;
                      </div>;
                    </div>;



            )}
          </TabsContent>
        ))}
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
