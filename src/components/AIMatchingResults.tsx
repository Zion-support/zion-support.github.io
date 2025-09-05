import Skeleton from "@/components/ui/skeleton";

interface AIMatchingResultsProps {_matches: MatchResultItem[];
  onSelectMatch?: (_match: MatchResultItem) => void;
  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;}

export function AIMatchingResults(_{_matches, _onSelectMatch, _isLoading = false, _projectDescription = "", _serviceType: _serviceType = ""}: AIMatchingResultsProps) {_const [activeTab, _setActiveTab] = useState("all");
  
  // Group matches by category
  const _categories = {
    all: matches, _talent: matches.filter(match => match.category.toLowerCase().includes("talent")), _services: matches.filter(match => match.category.toLowerCase().includes("service")), _equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))};
  
  // Get the icon for a category
  const _getCategoryIcon = (_category: string) => {_const _lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("talent")) return User;
    if (lowerCategory.includes("equipment")) return Monitor;
    return BriefcaseIcon;};
  
  if (isLoading) {_return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <div className="space-y-3">
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
        </div>
      </div>
    );}
  
  if (matches.length === 0) {_return (
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
          )}
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={_activeTab} onValueChange={_setActiveTab} className="w-full">
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({_categories.all.length})
          </TabsTrigger>
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({_categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({_categories.services.length})
          </TabsTrigger>
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">
            Equipment ({_categories.equipment.length})
          </TabsTrigger>
        </TabsList>
        
        {_Object.entries(categories).map(_([tab, _items]) => (_<TabsContent key={tab} value={_tab} className="mt-4 space-y-3">
            {_items.length > 0 ? (
              items.map((match) => {
                const _CategoryIcon = getCategoryIcon(match.category);
                return (_<Card 
                    key={match.id}
                    className="bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer"
                    onClick={_() => onSelectMatch && onSelectMatch(match)}
                  >
                    <div className="flex">
                      <div className={_cn(
                        "w-2", _match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" : 
                        match.category.toLowerCase().includes("service") ? "bg-zion-purple" : 
                        "bg-green-500"
                      )} />
                      <div className="flex-1 p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 border border-zion-blue-light">
                            {_match.image ? (
                              <AvatarImage src={match.image} alt={_match.title} />
                            ) : (
                              <AvatarFallback className="bg-zion-purple/20">
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium text-white">{_match.title}</h3>
                                <p className="text-zion-slate-light text-sm">{_match.description}</p>
                              </div>
                              {_match.price && (
                                <div className="text-right ml-2">
                                  <div className="font-medium text-white">${match.price}</div>
                                  <div className="text-xs text-zion-slate-light">
                                    {_match.category.toLowerCase().includes("talent") ? "/hour" : ""}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline">
                                {_match.category}
                              </Badge>
                              {_match.skills && match.skills.slice(0, _3).map(_(skill: string, _i: number) => (
                                <Badge key={i} variant="outline">
                                  {_skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-8 text-zion-slate-light">
                No {_tab} matches found.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}