>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState} from "react";
import {MatchResultItem} from "@/lib/ai-matchmaking";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";
export function AIMatchingResults(): any ({;

  matches;
  onSelectMatch;

interface AIMatchingResultsProps {
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,
  serviceType?: string
}

export function AIMatchingResults({;
  matches;
  onSelectMatch;
  isLoading = false;
  projectDescription = "";
export function AIMatchingResults({
  matches;
  onSelectMatch;

  isLoading = false;
  projectDescription = "";
  serviceType: _serviceType = ""
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState("all");
  matches,
  onSelectMatch,
  isLoading = false,
  projectDescription = "",
  serviceType: _serviceType = ""
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState("all"),
  
=======
=======  serviceType?: string
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  if (matches && matches.length === 0) {;

    return (
          )}
        </CardContent>;
      </Card>;
    );
  }
  

=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
            All ({categories.all.length})
          </TabsTrigger>
          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">
            Talent ({categories.talent.length})
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">
            Services ({categories.services.length})
          </TabsTrigger>
          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">
            Equipment ({categories.equipment.length})
          </TabsTrigger>
        </TabsList>
        {Object.entries(categories).map(([tab, items]) => (
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">

  return (    <div className="space-y-4">;
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;
        {Object && Object.entries(categories).map(([tab, items]) => (;
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">;
            {items && items.length > 0 ? (;
              items && items.map((match) => {;
                const CategoryIcon = getCategoryIcon(match && match.category);
                return (
                  <Card
                    key={match && match.id}
                    className="bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer"
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                  >;
                    <div className="flex">;
                      <divclassName={cn(
                        "w-2", 
                        match && match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" : 
                        match && match.category.toLowerCase().includes("service") ? "bg-zion-purple" : 

                        "bg-green-500"                      )} />;
                      <div className="flex-1 p-4">;
                        <div className="flex items-start gap-4">;
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;
                          </Avatar>;

                          <div className="flex-1">;
                            <div className="flex justify-between">;
                              <div>;
                                <h3 className="font-medium text-white">{match && match.title}</h3>;
                                <p className="text-zion-slate-light text-sm">{match && match.description}</p>;
                              </div>;
                              {match && match.price && (;
                                <div className="text-right ml-2">;
                                  <div className="font-medium text-white">${match && match.price}</div>;
                                  <div className="text-xs text-zion-slate-light">;
                                    {match && match.category.toLowerCase().includes("talent") ? "/hour" : ""}                                  </div>;
                                </div>;
                              )}
                            </div>;
                            <div className="mt-2 flex flex-wrap gap-1">;
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">;
                                {match && match.category}
                              </Badge>;
                              {match && match.skills && match && match.skills.slice(0, 3).map((skill: string, i: number) => (;
                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;

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
                                </Badge>))}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </Card>);
              })) : (
              <div className="text - center py - 8 text - zion - slate - light">;
                No {tab} matches found.;
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);
}