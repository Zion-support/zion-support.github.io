import { useState } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AIMatchingResults } from &quot;@/components/AIMatchingResults&quot;;
import { findMatches, MatchResult } from &quot;@/lib/ai-matchmaking&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Sparkles, Search } from &quot;lucide-react&quot;;

interface AIMatchmakerProps {
  serviceType?: string;
  onMatchSelect?: (match: any) => void;
  className?: string;
}

export function AIMatchmaker({ serviceType = "&quot;, onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState("&quot;);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: &quot;Please enter a description&quot;,
        description: &quot;Tell us what you're looking for so we can find matches.&quot;,
        variant: &quot;destructive&quot;});
      return;
    }

    setIsMatchmaking(true);
    setHasSearched(true);
    
    try {
      // console.log(&quot;Starting AI matching with query:&quot;, query, &quot;and service type:&quot;, serviceType);
      
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      );
      
      // console.log(&quot;AI matching results:&quot;, results);
      setMatches(results);
      
      toast({
        title: &quot;Matches Found&quot;,
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {
      console.error(&quot;Error during AI matching:&quot;, error);
      toast({
        title: &quot;Matching Error&quot;,
        description: &quot;We couldn't find matches for your request. Please try again.&quot;,
        variant: &quot;destructive&quot;});
      // Set empty matches to show no results found UI
      setMatches([]);
    } finally {
      setIsMatchmaking(false);
    }
  };
  
  const handleItemSelect = (item: any) => {
    if (onMatchSelect) {
      // Find the original MatchResult that contains this item
      const matchResult = matches.find(match => match.item.id === item.id);
      if (matchResult) {
        onMatchSelect(matchResult);
      }
    }
  };
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item);
  
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2&quot;>
            <Textarea
              placeholder=&quot;Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
            <Button 
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              {isMatchmaking ? (
                <>Analyzing your needs...</>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Find Matches
                </>
              )}
            </Button>
          </div>
          
          {hasSearched && (
            <AIMatchingResults 
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}