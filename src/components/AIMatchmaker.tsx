import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from 'lucide-react'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface AIMatchmakerProps {
  serviceType?: string;
  onMatchSelect?: (match: any) => void;
  className?: string
}

export function AIMatchmaker({ serviceType;
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Matchmaker
        </CardTitle>
        <p className='text-sm text-zion-slate-light'>
          Describe what you&apos;re looking for and our AI will find the best
          matches
        </p>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Textarea
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setQuery(e.target.value)
              }
              className='min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white'
            />
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
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
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
