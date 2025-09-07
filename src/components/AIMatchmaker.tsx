<<<<<<< HEAD
import { Sparkles, Search } from 'lucide-react'''
import React from 'react';''
import { useState } from 'react';''
import { toast } from '@/hooks/use-toast';''
import { Button } from '@/components/ui/button';''
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';''
import { AIMatchingResults } from '@/components/AIMatchingResults';''
import { findMatches, MatchResult } from '@/lib/ai-matchmaking';''
import { Textarea } from '@/components/ui/textarea';''
import { Sparkles, Search } from 'lucide-react';''
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';'
interface AIMatchmakerProps {
  // TODO: Implement
}
  //Set empty matches to show no results found UI setMatches ([]) ;
}finally {;

'
  setIsMatchmaking (false) ; import { logInfo, logErrorToProduction } from '@/utils/productionLogger''
interface AIMatchmakerProps {
  // TODO: Implement
}
  serviceType?: string;
  onMatchSelect?: (match: any,) => void;
  className?: string;
}




'
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {""
  const [query, setQuery] = useState(""),"
  const [isMatchmaking, setIsMatchmaking] = useState(false),
  const [matches, setMatches] = useState([] as MatchResult[]),
  const [hasSearched, setHasSearched] = useState(false),


  const handleSearch = async () => {
    if (!query.trim()) {
      toast({"
        title: "Please enter a description",""
        description: "Tell us what you're looking for so we can find matches.","
      // Set empty matches to show no results found UI;)
      setMatches([])"
import { useState } from 'react';''
import { toast } from '@/hooks/ use - toast';''
import { Button } from '@/components/ui/ button';''
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/ card';''
import { AIMatchingResults } from '@/components/ AIMatchingResults';''
import { find_matches, MatchResult } from '@/lib / ai - matchmaking';''
import { Textarea } from '@/components/ui/ textarea';''
import { Sparkles, Search } from 'lucide-react';''
import { log_info, logErrorToProduction } from '@/utils/ production_logger';'
interface AIMatchmakerProps {
  // TODO: Implement
}
  service_type?: string;
onMatchSelect?: (match: any) => void;
class_name?: string;
}if () {) {
  $2;
}
  toast ({
  return;)
}setIsMatchmaking (true);
setHasSearched (true);
service_type;
3);'
}catch (error) {';''
  logErrorToProduction ('Error during AI matching:', {'
  data: error;)
});
toast ({)
  //Set empty matches to show no results found UI set_matches ([]);
}finally {
  // TODO: Implement
}'
  setIsMatchmaking (false) ; import { log_info, logErrorToProduction } from '@/utils/ production_logger';'
interface AIMatchmakerProps {
  // TODO: Implement
}
  service_type?: string,
  onMatchSelect?: (match: any, ) => void,
  class_name?: string;
}
export /**
 * AIMatchmaker - Function description;
 */
function AIMatchmaker() {'
  const [query, set_query] = useState ('');'
  const [is_matchmaking, setIsMatchmaking] = useState (false);
  const [matches, set_matches] = useState ([] as MatchResult[]);
  const [has_searched, setHasSearched] = useState (false);
  const handle_search = async () => {
    if () {) {
  $2;
}
      toast ({'
        title: 'Please enter a description',''
        description: "Tell us what you're looking for so we can find matches.",""
        variant: 'destructive',')
      });
      return;
    }
    setIsMatchmaking (true);
    setHasSearched (true);
    try {
  // TODO: Implement
}'
      log_info ('Starting AI matching', { data: { query, service_type } });'
      // Get AI matches;
      const results = await find_matches (query, service_type, 3);'
      log_info ('AI matching results:', { data: results });'
      set_matches (results);
      toast ({'
        title: 'Matches Found','
        description: `Found ${results.length} matches based on your description.`,)
      });
    } catch (error) {'
      logErrorToProduction ('Error during AI matching:', { data: error });'
      toast ({'
        title: 'Matching Error','
        description:;'
          "We couldn't find matches for your request. Please try again.",""
        variant: 'destructive',')
      });
      // Set empty matches to show no results found UI;
      set_matches ([]);
    } finally {
  // TODO: Implement
}
      setIsMatchmaking(false)
'
          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;'
</Sparkles>
        </CardTitle>;'
        <p className='text-sm text-zion-slate-light'>;'
</p>'
      <CardHeader className='pb - 2'>;'
</CardHeader>'
        <CardTitle className='flex items - center text - white'>;'
</CardTitle>'
          <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;'
</Sparkles>
        </CardTitle>;'
        <p className='text - sm text - zion - slate - light'>;'
</p>
        </p>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>"
</Card>"
      <CardHeader className="pb-2">"
</CardHeader>"
        <CardTitle className="flex items-center text-white">"
</CardTitle>"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />"
</Sparkles>
        </CardTitle>"
        <p className="text-sm text-zion-slate-light">"
</p>
        </p>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="space-y-4">"
</div>"
          <div className="space-y-2">"
</div>
            <Textarea;"
              placeholder="Describe what you need... (e && e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')""
              value={query}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;
</Textarea>
            <Button;
              onClick={handleSearch}
              disabled={isMatchmaking}

"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
            >;
</Button>
                <>Analyzing your needs...</>;
              ) : (;
                <>;"
                  <Search className='h-4 w-4 mr-2' />;'
</Search>
                </>;)
              )}

            </Button>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;'
        <div className='space - y-4'>;'
</div>'
          <div className='space - y-2'>;'
</div>
            <Textarea;'
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')";"
              value={query}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
</Textarea>
            <Button;
              on_click={handle_search}
              disabled={is_matchmaking}"
              className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'            >;'
</Button>
                <>Analyzing your needs...</>) : (
                <>;'
                  <Search className='h - 4 w - 4 mr - 2' />;'
</Search>)
                </>)}
            </Button>;
          </div>;
            <AIMatchingResults;
              matches={match_items}
              onSelectMatch={handleItemSelect}
              is_loading={is_matchmaking}
              service_type={service_type}
              project_description={query}            />)}
</AIMatchingResults>
        </div>;
      </CardContent>;
    </Card>);'
=======
import { Sparkles, Search } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIMatchingResults } from '@/components/AIMatchingResults';
import { findMatches, MatchResult } from '@/lib/ai-matchmaking';
import { Textarea } from '@/components/ui/textarea';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface AIMatchmakerProps {
  onMatchSelected?: (match: any) => void;
}

export function AIMatchmaker({ onMatchSelected }: AIMatchmakerProps) {
  const [projectDescription, setProjectDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isMatchmaking, setIsMatchmaking] = useState(false);

  const handleFindMatches = async () => {
    if (!projectDescription.trim()) {
      toast({
        title: "Project description required",
        description: "Please describe your project to find the best matches.",
        variant: "destructive",
      });
      return;
    }

    setIsMatchmaking(true);
    setMatches([]);

    try {
      logInfo('Starting AI matchmaking process', { projectDescription, serviceType });
      
      const results = await findMatches({
        description: projectDescription,
        serviceType: serviceType || undefined,
      });

      setMatches(results);
      
      if (results.length === 0) {
        toast({
          title: "No matches found",
          description: "Try adjusting your project description or service type.",
        });
      } else {
        toast({
          title: `Found ${results.length} matches`,
          description: "Review the results below to find your perfect match.",
        });
      }

      logInfo('AI matchmaking completed', { matchCount: results.length });
    } catch (error) {
      logErrorToProduction('AI matchmaking failed', error);
      toast({
        title: "Matchmaking failed",
        description: "There was an error finding matches. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsMatchmaking(false);
    }
  };

  const handleSelectMatch = (match: any) => {
    onMatchSelected?.(match);
    toast({
      title: "Match selected",
      description: `You've selected ${match.name} for your project.`,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span>AI-Powered Talent Matching</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">
              Service Type (Optional)
            </label>
            <select
              id="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service type</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="data-science">Data Science</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <Textarea
              id="project-description"
              placeholder="Describe your project in detail. Include technologies, timeline, budget range, and any specific requirements..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={4}
              className="w-full"
            />
          </div>

          <Button 
            onClick={handleFindMatches}
            disabled={isMatchmaking || !projectDescription.trim()}
            className="w-full"
          >
            {isMatchmaking ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Finding Matches...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Find My Perfect Match
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {matches.length > 0 && (
        <AIMatchingResults
          matches={matches}
          onSelectMatch={handleSelectMatch}
          isLoading={isMatchmaking}
          projectDescription={projectDescription}
          serviceType={serviceType}
        />
      )}
    </div>
  );
}
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
