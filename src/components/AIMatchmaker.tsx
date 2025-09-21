import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIMatchingResults } from "@/components/AIMatchingResults"
import { findMatches, MatchResultItem } from "@/lib/ai-matchmaking"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Search } from 'lucide-react'

interface AIMatchmakerProps {
  serviceType?: string, }

export function AIMatchmaker({ serviceType }: AIMatchmakerProps) {
  const [query, setQuery] = useState("")
  const [isMatchmaking, setIsMatchmaking] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [matchItems, setMatchItems] = useState<MatchResultItem[]>([])
  const { toast } = useToast()

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Empty Query",
        description: "Please describe what you're looking for.",
        variant: "destructive",
      })
      return
    }

    setIsMatchmaking(true)
    setHasSearched(true)
    
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const results = await findMatches({
        category: serviceType,
        tags: query.toLowerCase().split(' ').filter(word => word.length > 3)
      })
      
      setMatchItems(results.items)
      
      toast({
        title: "Matches Found",
        description: `Found ${results.items.length} potential matches for your needs.`,
      })
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "Failed to find matches. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsMatchmaking(false)
    }
  }

  const handleItemSelect = (item: MatchResultItem) => {
    toast({
      title: "Item Selected";
      description: `You selected: ${item.title}`, })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-gray-900">
          <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-gray-600">
          Describe what you're looking for and our AI will find the best matches
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
              className="min-h-24 bg-white border-gray-300 focus:border-blue-500 text-gray-900"
            />
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
              serviceType={serviceType}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}