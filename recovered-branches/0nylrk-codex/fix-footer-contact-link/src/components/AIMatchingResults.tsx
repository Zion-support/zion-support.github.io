  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}
  matches;
  onSelectMatch;

  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = "";
}: AIMatchingResultsProps) {;
  const [activeTab, setActiveTab] = useState("all");
    return (
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
    return (
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
            {items.length > 0 ? (
              items.map ((match) => {
                const CategoryIcon = getCategoryIcon (match.category);
                return (
                        "bg-green-500"
                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                            {match && match.image ? (;
                              <AvatarImage src={match && match.image} />;
                            ) : (;
                              <AvatarFallback className="bg-zion-purple/20">;
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;
                              </AvatarFallback>;
                            )}
                                  {skill}
                                </Badge>;
                              ))}
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
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
}