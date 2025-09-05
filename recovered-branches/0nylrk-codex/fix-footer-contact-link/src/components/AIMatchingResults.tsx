import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",
import { Skeleton } from "@/components/ui/skeleton",
import { cn } from "@/lib/utils",interface AIMatchingResultsProps {
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
  projectDescription = "&quot;,
  serviceType: _serviceType = "&quot;
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
      <div className=&quot;space-y-4&quot;>
        <Skeleton className=&quot;h-10 w-full&quot; />
        <div className=&quot;space-y-3&quot;>
          <Skeleton className=&quot;h-[120px] w-full&quot; />
          <Skeleton className=&quot;h-[120px] w-full&quot; />
          <Skeleton className=&quot;h-[120px] w-full&quot; />
        </div>
      </div>
    )
  }
  
  if (matches.length === 0) {
    return (
      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light text-center p-6&quot;>
        <CardContent className=&quot;pt-6&quot;>
          <BarChart3 className=&quot;h-12 w-12 mx-auto text-zion-slate-light mb-3&quot; />
          <p className=&quot;text-white font-medium mb-2&quot;>No matches found</p>
          <p className=&quot;text-zion-slate-light text-sm mb-4&quot;>

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
            <div className=&quot;bg-zion-blue-light/20 p-3 rounded-md text-left&quot;>
              <p className=&quot;text-xs text-zion-slate-light&quot;>Your search:</p>
              <p className=&quot;text-sm text-white&quot;>{projectDescription}</p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
  
  return (
    <div className=&quot;space-y-4&quot;>
      <Tabs defaultValue=&quot;all&quot; value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
        <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full&quot;>
          <TabsTrigger value=&quot;all&quot; className=&quot;data-[state=active]:bg-zion-purple/20&quot;>
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger value=&quot;talent&quot; className=&quot;data-[state=active]:bg-zion-purple/20&quot;>
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value=&quot;services&quot; className=&quot;data-[state=active]:bg-zion-purple/20&quot;>
            Services ({categories.services.length})
          </TabsTrigger>
          <TabsTrigger value=&quot;equipment&quot; className=&quot;data-[state=active]:bg-zion-purple/20&quot;>
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
        
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className=&quot;mt-4 space-y-3&quot;>
            {items.length > 0 ? (
              items.map((match) => {
                const CategoryIcon = getCategoryIcon(match.category),
                return (
                  <Card 
                    key={match.id}
                    className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer&quot;
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                  >
                    <div className=&quot;flex&quot;>
                      <div className={cn(
                        &quot;w-2&quot;, 
                        match.category.toLowerCase().includes(&quot;talent&quot;) ? &quot;bg-zion-cyan&quot; : 
                        match.category.toLowerCase().includes(&quot;service&quot;) ? &quot;bg-zion-purple&quot; : 
                        &quot;bg-green-500&quot;
                      )} />
                      <div className=&quot;flex-1 p-4&quot;>
                        <div className=&quot;flex items-start gap-4&quot;>
                          <Avatar className=&quot;h-12 w-12 border border-zion-blue-light&quot;>
                            {match.image ? (                              <AvatarImage src={match.image} />
                            ) : (
                              <AvatarFallback className=&quot;bg-zion-purple/20&quot;>
                                <CategoryIcon className=&quot;h-6 w-6 text-zion-purple&quot; />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          
                          <div className=&quot;flex-1&quot;>
                            <div className=&quot;flex justify-between&quot;>
                              <div>
                                <h3 className=&quot;font-medium text-white&quot;>{match.title}</h3>
                                <p className=&quot;text-zion-slate-light text-sm&quot;>{match.description}</p>
                              </div>
                              {match.price && (
                                <div className=&quot;text-right ml-2&quot;>
                                  <div className=&quot;font-medium text-white&quot;>${match.price}</div>
                                  <div className=&quot;text-xs text-zion-slate-light&quot;>
                                    {match.category.toLowerCase().includes(&quot;talent&quot;) ? &quot;/hour&quot; : ""}                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="mt-2 flex flex-wrap gap-1&quot;>
                              <Badge variant=&quot;outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30&quot;>
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant=&quot;outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">
                                  {skill}                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
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
  )
}