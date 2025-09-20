import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'

interface MatchResultItem {
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

interface AIMatchingResultsProps {
  serviceType?: string;
  results?: MatchResultItem[];
}

export function AIMatchingResults({ serviceType, results = [] }: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState('all')

  const mockResults: MatchResultItem[] = results.length > 0 ? results : [
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

  const filteredResults = activeTab === 'all' 
    ? mockResults 
    : mockResults.filter(result => result.matchScore >= 90)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          AI Matching Results
          {serviceType && (
            <span className="text-zion-cyan ml-2">for {serviceType}</span>
          )}
        </h2>
        <Badge variant="secondary" className="bg-zion-cyan text-white">
          {mockResults.length} matches found
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All Results</TabsTrigger>
          <TabsTrigger value="top">Top Matches</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredResults.map((match) => (
            <Card key={match.id} className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-zion-blue-light/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-zion-cyan" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{match.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          {match.matchScore}% match
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white text-sm">{match.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-zion-cyan font-medium">{match.title}</h4>
                    <p className="text-zion-slate-light text-sm">{match.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-1">
                        <BriefcaseIcon className="h-4 w-4" />
                        <span>{match.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {match.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-blue-light/20 text-zion-cyan">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}