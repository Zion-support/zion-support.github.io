import { useState } from "react"
<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIMatchingResults } from "@/components/AIMatchingResults"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Search } from 'lucide-react'

interface MatchResult {
  id: string;
  name: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  rating: number;
  matchScore: number;
  image?: string;
}

interface AIMatchmakerProps {
  onMatchFound?: (matches: MatchResult[]) => void;
}

export function AIMatchmaker({ onMatchFound }: AIMatchmakerProps) {
  const [description, setDescription] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [matches, setMatches] = useState<MatchResult[]>([])

  const handleSearch = async () => {
    if (!description.trim()) return

    setIsSearching(true)
    try {
      // Simulate AI matching
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockMatches: MatchResult[] = [
        {
          id: '1',
          name: 'John Doe',
          title: 'Senior AI Developer',
          description: 'Experienced AI developer with 5+ years in machine learning and deep learning.',
          skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
          experience: '5+ years',
          rating: 4.8,
          matchScore: 95,
          image: '/placeholder-avatar.jpg'
        },
        {
          id: '2',
          name: 'Jane Smith',
          title: 'Full Stack Developer',
          description: 'Full stack developer specializing in React and Node.js applications.',
          skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
          experience: '3+ years',
          rating: 4.6,
          matchScore: 88,
          image: '/placeholder-avatar.jpg'
        }
      ]
      
      setMatches(mockMatches)
      onMatchFound?.(mockMatches)
    } catch (error) {
      console.error('Error finding matches:', error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Talent Matchmaker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-zion-slate-light">
              Describe your project or requirements
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you're looking for in a developer, designer, or other professional..."
              className="min-h-[120px]"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={isSearching || !description.trim()}
            className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"
          >
            {isSearching ? (
              <>Finding Matches...</>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Find AI Matches
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {matches.length > 0 && (
        <AIMatchingResults 
          serviceType="AI Matching" 
          results={matches}
        />
      )}
    </div>
=======
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIMatchingResults } from "@/components/AIMatchingResults"
import { findMatches, MatchResultItem } from "@/lib/ai-matchmaking"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Search } from 'lucide-react'

interface AIMatchmakerProps {
  serviceType?: string;
}

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
      title: "Item Selected",
      description: `You selected: ${item.title}`,
    })
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
  )
}