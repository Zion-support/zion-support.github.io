import { useState } from 'react'
import { MatchResultItem } from '@/lib/ai-matchmaking'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface AIMatchingResultsProps {
  serviceType?: string;
  results?: MatchResultItem[];
  isLoading?: boolean;
}

export function AIMatchingResults({ serviceType, results = [], isLoading = false }: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredResults = results.filter(result => 
    activeTab === 'all' || result.category === activeTab
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ai">AI Services</TabsTrigger>
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="consulting">Consulting</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="space-y-4">
          {filteredResults.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No matches found for your criteria.</p>
              </CardContent>
            </Card>
          ) : (
            filteredResults.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      {match.provider.avatar ? (
                        <AvatarImage
                          src={match.provider.avatar}
                          alt={match.title}
                        />
                      ) : (
                        <AvatarFallback className="bg-zion-purple/20">
                          <BriefcaseIcon className="h-6 w-6 text-zion-purple" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{match.title}</h3>
                          <p className="text-muted-foreground">{match.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">${match.price}</p>
                          <p className="text-sm text-muted-foreground">
                            ⭐ {match.rating}/5
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{match.category}</Badge>
                        {match.provider.verified && (
                          <Badge variant="outline">Verified</Badge>
                        )}
                        <Badge variant="outline">
                          {Math.round(match.matchScore)}% match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{match.provider.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Monitor className="h-4 w-4" />
                          <span>{match.tags.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}