<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",
=======
import { useState } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AIMatchingResults } from &quot;@/components/AIMatchingResults&quot;;
import { findMatches, MatchResult } from &quot;@/lib/ai-matchmaking&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Sparkles, Search } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
  className?: string
}

<<<<<<< HEAD
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState(""),
  const [isMatchmaking, setIsMatchmaking] = useState(false),
  const [matches, setMatches] = useState([] as MatchResult[]),
  const [hasSearched, setHasSearched] = useState(false),
=======
export function AIMatchmaker({ serviceType = "&quot;, onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState("&quot;);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
<<<<<<< HEAD
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
        variant: "destructive"}),
      return
=======
        title: &quot;Please enter a description&quot;,
        description: &quot;Tell us what you're looking for so we can find matches.&quot;,
        variant: &quot;destructive&quot;});
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
<<<<<<< HEAD
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
=======
      // console.log(&quot;Starting AI matching with query:&quot;, query, &quot;and service type:&quot;, serviceType);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      ),
      
<<<<<<< HEAD
      // // // console.log("AI matching results:", results),
      setMatches(results),
      
      toast({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      console.error("Error during AI matching:", error),
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      // Set empty matches to show no results found UI
      setMatches([])
    } finally {
      setIsMatchmaking(false)
=======
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles, Search } from "lucide-react",;
interface AIMatchmakerProps {;
  serviceType?: string,;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
;
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
  const [query, setQuery] = useState(""),;
  const [isMatchmaking, setIsMatchmaking] = useState(false),;
  const [matches, setMatches] = useState([] as MatchResult[]),;
  const [hasSearched, setHasSearched] = useState(false),;
  const handleSearch = async () => {;
    if (!query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
    }
;
    setIsMatchmaking(true),;
    setHasSearched(true),;
    try {;
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),;
      // Get AI matches;
      const results = await findMatches(;
        query,;
        serviceType,;
        3;
      ),;
      // // // console.log("AI matching results:", results),;
      setMatches(results),;
      toast({;
        title: "Matches Found",;
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {;
      console.error("Error during AI matching:", error),;
      toast({;
        title: "Matching Error",;
        description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;
      // Set empty matches to show no results found UI;
      setMatches([]);
    } finally {;
      setIsMatchmaking(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches.find(match => match.item.id === item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }
<<<<<<< HEAD
  },
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),
  
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
=======
  };
  // Extract just the items from each MatchResult;
  const matchItems = matches.map(match => match.item);
  return (;
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>;
      <CardHeader className="pb-2">;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Matchmaker;
        </CardTitle>;
        <p className="text-sm text-zion-slate-light">;
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="space-y-2">;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
            <Button;
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
                  <Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
            </Button>;
          </div>;
          {hasSearched && (;
            <AIMatchingResults;
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
            />;
          )}
        </div>;
      </CardContent>;
    </Card>;
  );
}