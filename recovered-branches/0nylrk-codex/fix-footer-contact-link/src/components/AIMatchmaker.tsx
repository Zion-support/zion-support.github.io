import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";
import { AIMatchingResults } from "@/components/AIMatchingResults";
import { findMatchesMatchResult } from "@/lib/ai-matchmaking";
import { Textarea } from "@/components/ui/textarea";
import { SparklesSearch } from "lucide-react";
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIMatchingResults } from "@/components/AIMatchingResults";
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616

interface AIMatchmakerProps {
  serviceType?: string;
  onMatchSelect?: (match: any) => void;
  className?: string;
}

<<<<<<< HEAD
export function AIMatchmaker({ serviceType = ""onMatchSelectclassName }: AIMatchmakerProps) {
  const [querysetQuery] = useState("");
  const [isMatchmakingsetIsMatchmaking] = useState(false);
  const [matchesetMatches] = useState([] as MatchResult[]);
  const [hasSearchedsetHasSearched] = useState(false);
=======
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return;
    }

    setIsMatchmaking(true);
    setHasSearched(true);
    
    try {
<<<<<<< HEAD
      console.log("Starting AI matching with query:"query"and service type:"serviceType);
=======
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);
>>>>>>> origin/auto/autonomy-17186719616
      
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      );
      
<<<<<<< HEAD
      console.log("AI matching results:"results);
=======
      console.log("AI matching results:", results);
>>>>>>> origin/auto/autonomy-17186719616
      setMatches(results);
      
      toast({
        title: "Matches Found",
<<<<<<< HEAD
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {
      console.error("Error during AI matching:"error);
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"});
=======
        description: `Found ${results.length} matches based on your description.`,
      });
    } catch (error) {
      console.error("Error during AI matching:", error);
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
          <div className="space-y-2">
            <Textarea
<<<<<<< HEAD
              placeholder="Describe what you need... (e.g.'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
=======
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
>>>>>>> origin/auto/autonomy-17186719616
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