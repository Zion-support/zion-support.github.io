import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Brain, BookOpen, TrendingUp, Star, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function AI2026ContentDiscoveryWidget() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Development Masterclass',
      type: 'Tutorial',
      category: 'Neural Computing',
      description: 'Learn to build revolutionary brain-computer interfaces',
      rating: 4.9,
      duration: '8 hours',
      students: '2.5K',
      trending: true,
      url: '/ai-tutorials-2026',
      icon: Brain
    },
    {
      id: 2,
      title: 'Quantum AI Optimizer Tool',
      type: 'Tool',
      category: 'Quantum Computing',
      description: 'Breakthrough quantum machine learning platform',
      rating: 4.9,
      duration: 'Enterprise',
      students: '5K+',
      trending: true,
      url: '/ai-tools-showcase-2026',
      icon: Brain
    },
    {
      id: 3,
      title: 'AI Market Analysis Report 2026',
      type: 'Insight',
      category: 'Market Analysis',
      description: 'Comprehensive analysis of AI market trends and predictions',
      rating: 4.8,
      duration: '15 min read',
      students: '10K+',
      trending: false,
      url: '/ai-industry-insights-2026',
      icon: TrendingUp
    },
    {
      id: 4,
      title: 'Autonomous Agent Architecture Course',
      type: 'Tutorial',
      category: 'AI Automation',
      description: 'Build sophisticated autonomous AI agents',
      rating: 4.9,
      duration: '15 hours',
      students: '3.2K',
      trending: true,
      url: '/ai-tutorials-2026',
      icon: BookOpen
    },
    {
      id: 5,
      title: 'Multimodal AI Systems Design',
      type: 'Tutorial',
      category: 'Multimodal AI',
      description: 'Create AI systems that understand multiple data types',
      rating: 4.7,
      duration: '10 hours',
      students: '4.1K',
      trending: false,
      url: '/ai-tutorials-2026',
      icon: BookOpen
    },
    {
      id: 6,
      title: 'AI Security Guardian Platform',
      type: 'Tool',
      category: 'Cybersecurity',
      description: 'Advanced AI-powered cybersecurity platform',
      rating: 4.9,
      duration: 'Enterprise',
      students: '15K+',
      trending: true,
      url: '/ai-tools-showcase-2026',
      icon: Brain
    }
  ];

  const categories = ['All', 'Tutorial', 'Tool', 'Insight', 'Neural Computing', 'Quantum Computing', 'AI Automation', 'Cybersecurity', 'Market Analysis'];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           item.category === selectedCategory || 
                           item.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Brain className="h-6 w-6 mr-2 text-blue-600" />
              AI Content Discovery Hub 2026
            </CardTitle>
            <CardDescription>
              Discover the latest AI tools, tutorials, and insights
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Star className="h-3 w-3 mr-1" />
            New Content
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search AI tools, tutorials, and insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className="cursor-pointer hover:bg-blue-100"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs mb-1">
                          {item.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs ml-1">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    {item.trending && (
                      <Badge variant="destructive" className="text-xs">
                        Trending
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      {item.rating}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {item.students}
                    </div>
                  </div>

                  <Link href={item.url}>
                    <Button size="sm" className="w-full">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Show More */}
        <div className="text-center mt-6">
          <Button variant="outline">
            View All Content
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}