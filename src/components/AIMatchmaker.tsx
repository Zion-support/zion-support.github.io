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