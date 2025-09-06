
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
interface AIMatchmakerProps {
  serviceType?: string
  onMatchSelect?: (match: any,) => void
  className?: string
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",

        variant: "destructive"}),
      return
    }

    setIsMatchmaking(true),
    setHasSearched(true),

    try {
      logInfo("Starting AI matching", { data: { query, serviceType } }),

      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      ),

      logInfo('AI matching results:', { data: results }),
      setMatches(results),

      toast({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      logErrorToProduction('Error during AI matching:', { data: error }),
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      // Set empty matches to show no results found UI
      setMatches([])
import { useState } from 'react';
import { toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { AIMatchingResults } from '@/components / AIMatchingResults';
import { find_matches, MatchResult } from '@/lib / ai - matchmaking';
import { Textarea } from '@/components / ui / textarea';
import { Sparkles, Search } from 'lucide-react';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
interface AIMatchmakerProps {
  service_type?: string;
onMatchSelect?: (match: any) => void;
class_name?: string;
}if () {) {
  $2
}
  toast ({
  return;
}setIsMatchmaking (true);
setHasSearched (true);
service_type;
3);
}catch (error) {';
  logErrorToProduction ('Error during AI matching:', {
  data: error;
});
toast ({
  //Set empty matches to show no results found UI set_matches ([]);
}finally {
  setIsMatchmaking (false) ; import { log_info, logErrorToProduction } from '@/utils / production_logger';
interface AIMatchmakerProps {
  service_type?: string,
  onMatchSelect?: (match: any, ) => void,
  class_name?: string;
}
export /**
 * AIMatchmaker - Function description
 */
function AIMatchmaker() {
  const [query, set_query] = useState ('');
  const [is_matchmaking, setIsMatchmaking] = useState (false);
  const [matches, set_matches] = useState ([] as MatchResult[]);
  const [has_searched, setHasSearched] = useState (false);
  const handle_search = async () => {
    if () {) {
  $2
}
      toast ({
        title: 'Please enter a description',
        description: "Tell us what you're looking for so we can find matches.",
        variant: 'destructive',
      });
      return;
      logErrorToProduction ('Error during AI matching:', { data: error });
      toast ({
        title: 'Matching Error',
        description:;
          "We couldn't find matches for your request. Please try again.",
        variant: 'destructive',
      });
      // Set empty matches to show no results found UI;
      set_matches ([]);
    } finally {
      setIsMatchmaking(false)
    }
  }
  const handleItemSelect = (item: any) => {    if (onMatchSelect) {
      // Find the original MatchResult that contains this item
      const matchResult = matches.find(match => match.item.id === item.id)
      if (matchResult) {
        onMatchSelect(matchResult)
      }
    }
  }
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item)
    >
      <CardHeader className='pb-2'>
        <CardTitle className='flex items-center text-white'>
          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />

<<<<<<< HEAD
        variant: "destructive"}),
      return
    }

    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
      logInfo("Starting AI matching", { data: { query, serviceType } }),
      
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
      ),
      
      logInfo('AI matching results:', { data: results }),
      setMatches(results),
      
      toast({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      logErrorToProduction('Error during AI matching:', { data: error }),
      toast({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Set empty matches to show no results found UI
      setMatches([])
    } finally {
      setIsMatchmaking(false)
    }
  }
  const handleItemSelect = (item: any) => {    if (onMatchSelect) {
      // Find the original MatchResult that contains this item
      const matchResult = matches.find(match => match.item.id === item.id)
      if (matchResult) {
        onMatchSelect(matchResult)
      }
    }
  }
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item)
    >
      <CardHeader className='pb-2'>
        <CardTitle className='flex items-center text-white'>
<<<<<<< HEAD
          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />

          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;
          AI Matchmaker;
        </CardTitle>;
        <p className='text-sm text-zion-slate-light'>;
          Describe what you&apos;re looking for and our AI will find the best
          matches
<<<<<<< HEAD
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Describe what you need... (e && e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;
                setQuery(e && e.target.value);
              }
              className='min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white';
            />;
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
=======
              className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'            >
              {isMatchmaking ? (
                <>Analyzing your needs...</>
              ) : (
                <>
                  <Search className='h-4 w-4 mr-2' />
                  Find Matches
                </>
              )}
            </Button>
          </div>
          {hasSearched && (
            <AIMatchingResults
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;

              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
                  <Search className='h-4 w-4 mr-2' />;
                  Find Matches;
                </>;
              )}

            </Button>;
          </div>;

          {hasSearched && (;
<<<<<<< HEAD
<<<<<<< HEAD

              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
<<<<<<< HEAD



}
}

              projectDescription={query}
            />;
          )}

        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
