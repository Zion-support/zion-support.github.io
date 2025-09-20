import { useState } from "react"
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
  )
}