import { useState } from 'react'
<<<<<<< HEAD
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
=======
import { MatchResultItem } from '@/lib/ai-matchmaking'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, BriefcaseIcon, Monitor, User, Star } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface AIMatchingResultsProps {
  serviceType?: string;
}

const mockMatches: MatchResultItem[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Advanced analytics dashboard with AI-driven insights and real-time data visualization.',
    category: 'AI Tools',
    price: 299,
    rating: 4.8,
    imageUrl: '/images/analytics-dashboard.jpg',
    tags: ['AI', 'Analytics', 'Dashboard', 'Real-time'],
    matchScore: 95,
    provider: {
      name: 'Tech Solutions Inc.',
      avatar: '/avatars/tech-solutions.jpg',
      verified: true
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    title: 'Cloud Migration Service',
    description: 'Complete cloud migration service with zero downtime and comprehensive support.',
    category: 'Cloud Services',
    price: 1500,
    rating: 4.9,
    imageUrl: '/images/cloud-migration.jpg',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
    matchScore: 92,
    provider: {
      name: 'Cloud Experts LLC',
      avatar: '/avatars/cloud-experts.jpg',
      verified: true
    },
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai tools':
      return <BarChart3 className="h-6 w-6" />;
    case 'cloud services':
      return <Monitor className="h-6 w-6" />;
    case 'security':
      return <BriefcaseIcon className="h-6 w-6" />;
    default:
      return <User className="h-6 w-6" />;
  }
};

export function AIMatchingResults({ serviceType }: AIMatchingResultsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<MatchResultItem[]>(mockMatches);

  const tabs = [
    { value: 'all', label: 'All Matches', count: matches.length },
    { value: 'ai', label: 'AI Tools', count: matches.filter(m => m.category === 'AI Tools').length },
    { value: 'cloud', label: 'Cloud Services', count: matches.filter(m => m.category === 'Cloud Services').length },
    { value: 'security', label: 'Security', count: matches.filter(m => m.category === 'Security').length }
  ];

  const filteredMatches = (tabValue: string) => {
    if (tabValue === 'all') return matches;
    return matches.filter(match => 
      match.category.toLowerCase().includes(tabValue.toLowerCase())
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          AI-Powered Matching Results
        </h2>
        <p className="text-gray-600">
          Find the perfect {serviceType || 'service'} for your needs
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label} ({tab.count})
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                        <div className="flex space-x-2">
                          <Skeleton className="h-6 w-16" />
                          <Skeleton className="h-6 w-20" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : filteredMatches(tab.value).length > 0 ? (
              filteredMatches(tab.value).map((match) => (
                <Card key={match.id} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      {match.imageUrl ? (
                        <AvatarImage
                          src={match.imageUrl}
                          alt={match.title}
                        />
                      ) : (
                        <AvatarFallback className="bg-blue-100">
                          {getCategoryIcon(match.category)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {match.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {match.description}
                          </p>
                          <div className="flex items-center mt-2 space-x-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">
                                {match.rating}
                              </span>
                            </div>
                            <Badge variant="secondary">{match.category}</Badge>
                            <span className="text-sm text-gray-500">
                              {match.matchScore}% match
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">
                            ${match.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            by {match.provider.name}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {match.tags.slice(0, 4).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No {tab.label.toLowerCase()} matches found.
              </div>
            )}
          </TabsContent>
        ))}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
      </Tabs>
    </div>
  );
}