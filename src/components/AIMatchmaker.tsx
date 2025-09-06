
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",

import { Sparkles, Search } from 'lucide-react'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface AIMatchmakerProps {

  serviceType?: string
onMatchSelect?: (match: any) => void
className?: string
}if (!query.trim () ) {
  toast ({
  return;
}setIsMatchmaking (true)
setHasSearched (true)
serviceType
3)
}catch (error) {'
  logErrorToProduction ('Error during AI matching:', {
  data: error
})
toast ({

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
    } finally {
      setIsMatchmaking(false)

        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
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

              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
