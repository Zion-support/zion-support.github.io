
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",


  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
interface AIMatchmakerProps {
  serviceType?: string
  onMatchSelect?: (match: any,) => void
  className?: string
}


  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
=======
import { Textarea } from "@/components/ui/textarea";
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

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

              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
<<<<<<< HEAD
