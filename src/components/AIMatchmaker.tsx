<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AIMatchingResults } from &quot;@/components/AIMatchingResults&quot;;
import { findMatches, MatchResult } from &quot;@/lib/ai-matchmaking&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Sparkles, Search } from 'lucide-react'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',


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
=======


interface AIMatchmakerProps {_serviceType?: string;
  onMatchSelect?: (_match: unknown) => void;
  className?: string;}

export function AIMatchmaker(_{_serviceType = "", _onMatchSelect, _className}: AIMatchmakerProps) {_const [query, _setQuery] = useState("");
  const [isMatchmaking, _setIsMatchmaking] = useState(false);
  const [matches, _setMatches] = useState([] as MatchResult[]);
  const [hasSearched, _setHasSearched] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleSearch = async () => {
    if (!query.trim()) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
        variant: "destructive"}),
      return
=======
        title: &quot;Please enter a description&quot;,
        description: &quot;Tell us what you're looking for so we can find matches.&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Please enter a description", _description: "Tell us what you're looking for so we can find matches.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsMatchmaking(true),
    setHasSearched(true),
    
<<<<<<< HEAD
    try {
<<<<<<< HEAD
      logInfo("Starting AI matching", { data: { query, serviceType } }),
=======
      logInfo(&quot;Starting AI matching&quot;, { data: { query, serviceType } });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    try {_logInfo("Starting AI matching", _{ data: { query, _serviceType} });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Get AI matches
      const _results = await findMatches(
        query,
        serviceType,
        3
      ),
      
<<<<<<< HEAD
      logInfo('AI matching results:', { data: results }),
      setMatches(results),
      
      toast({
<<<<<<< HEAD
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
=======
        title: &quot;Matches Found&quot;,
        description: `Found ${results.length} matches based on your description.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error) {
      logErrorToProduction('Error during AI matching:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),
=======
        title: &quot;Matching Error&quot;,
        description: &quot;We couldn't find matches for your request. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      // Set empty matches to show no results found UI
      setMatches([])
    } finally {
      setIsMatchmaking(false)
    }
  },
=======
      logInfo('AI matching results:', {_data: results});
      setMatches(results);
      
      toast({_title: "Matches Found", _description: `Found ${results.length} matches based on your description.`});
    } catch (error) {_logErrorToProduction('Error during AI matching:', _{ data: error});
      toast({_title: "Matching Error", _description: "We couldn't find matches for your request. Please try again.", _variant: "destructive"});
      // Set empty matches to show no results found UI
      setMatches([]);
    } finally {_setIsMatchmaking(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleItemSelect = (_item: unknown) => {_if (onMatchSelect) {
      // Find the original MatchResult that contains this item
<<<<<<< HEAD
      const matchResult = matches.find(match => match.item.id === item.id),
      if (matchResult) {
        onMatchSelect(matchResult)
      }
=======
      const _matchResult = matches.find(match => match.item.id === item.id);
      if (matchResult) {
        onMatchSelect(matchResult);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
  // Extract just the items from each MatchResult
<<<<<<< HEAD
  const matchItems = matches.map(match => match.item),
=======
  const _matchItems = matches.map(match => match.item);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card className={_`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>
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
<<<<<<< HEAD
              placeholder=&quot;Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
=======
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={_query}
              onChange={_(_e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
            <Button 
              onClick={_handleSearch}
              disabled={_isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              {_isMatchmaking ? (
                <>Analyzing your needs...</>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Find Matches
                </>
              )}
            </Button>
          </div>
          
          {_hasSearched && (
            <AIMatchingResults 
              matches={matchItems}
              onSelectMatch={_handleItemSelect}
              isLoading={_isMatchmaking}
              serviceType={_serviceType}
              projectDescription={_query}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}