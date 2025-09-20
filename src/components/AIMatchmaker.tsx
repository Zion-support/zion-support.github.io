import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIMatchingResults } from "@/components/AIMatchingResults";
import { MatchResultItem } from "@/lib/ai-matchmaking";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from 'lucide-react';
import { logInfoToProduction, logErrorToProduction } from '@/utils/productionLogger';

interface AIMatchmakerProps {
  onMatchSelect?: (match: MatchResultItem) => void;
}

export function AIMatchmaker({ onMatchSelect }: AIMatchmakerProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<MatchResultItem[]>([]);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!query.trim()) {
      toast('Please describe what you are looking for', 'error');
      return;
    }

    setIsLoading(true);
    try {
      logInfoToProduction('Starting AI matchmaking search', { query });
      
      // Mock AI matching - replace with actual API call
      const mockResults: MatchResultItem[] = [
        {
          id: '1',
          title: 'AI Consulting Services',
          description: 'Expert AI consulting for your business needs',
          price: 150,
          rating: 4.8,
          category: 'ai',
          tags: ['ai', 'consulting', 'automation'],
          provider: {
            name: 'Tech Solutions Inc',
            verified: true
          },
          matchScore: 95
        },
        {
          id: '2',
          title: 'Cloud Migration Services',
          description: 'Seamless cloud migration and optimization',
          price: 200,
          rating: 4.9,
          category: 'tech',
          tags: ['cloud', 'migration', 'aws'],
          provider: {
            name: 'Cloud Experts LLC',
            verified: true
          },
          matchScore: 88
        }
      ];
      
      setResults(mockResults);
      toast('Found matches for your search!', 'success');
    } catch (error) {
      logErrorToProduction('AI matchmaking search failed', error);
      toast('Search failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Matchmaker
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Describe what you&apos;re looking for and our AI will find the best matches
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Describe your project needs, budget, timeline, and any specific requirements..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px] bg-zion-slate-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
          />
          <Button 
            onClick={handleSearch} 
            disabled={isLoading || !query.trim()}
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-white"
          >
            {isLoading ? (
              <>
                <Search className="h-4 w-4 mr-2 animate-spin" />
                Finding Matches...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Find AI Matches
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <AIMatchingResults 
          results={results} 
          isLoading={isLoading}
        />
      )}
    </div>
  );
}