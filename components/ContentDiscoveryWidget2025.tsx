import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  BookOpen, 
  TrendingUp, 
  DollarSign, 
  Lightbulb, 
  Users, 
  Star,
  Clock,
  ArrowRight,
  X
} from 'lucide-react';
import Link from 'next/link';

const contentCategories = [
  { id: 'all', label: 'All Content', icon: Search, count: 247 },
  { id: 'tutorials', label: 'Tutorials', icon: BookOpen, count: 89 },
  { id: 'insights', label: 'Insights', icon: TrendingUp, count: 67 },
  { id: 'guides', label: 'Guides', icon: Lightbulb, count: 45 },
  { id: 'case-studies', label: 'Case Studies', icon: Users, count: 46 }
];

const difficultyLevels = [
  { id: 'beginner', label: 'Beginner', color: 'bg-green-100 text-green-800' },
  { id: 'intermediate', label: 'Intermediate', color: 'bg-blue-100 text-blue-800' },
  { id: 'advanced', label: 'Advanced', color: 'bg-purple-100 text-purple-800' }
];

const featuredContent = [
  {
    id: 1,
    title: 'AI Implementation Masterclass 2025',
    description: 'Comprehensive guide to implementing AI in your organization',
    category: 'tutorials',
    difficulty: 'intermediate',
    duration: '12+ Hours',
    rating: 4.9,
    students: 2847,
    price: '$299',
    url: '/tutorials/ai-implementation-masterclass-2025',
    badges: ['New', 'Popular'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'AI Industry Trends Analysis',
    description: 'Deep dive into AI market trends and future predictions',
    category: 'insights',
    difficulty: 'beginner',
    duration: '30 Min',
    rating: 4.8,
    students: 1523,
    price: 'Free',
    url: '/insights/ai-industry-trends-2025',
    badges: ['Trending', 'Free'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'AI Startup Funding Guide',
    description: 'Complete guide to securing funding for AI ventures',
    category: 'guides',
    difficulty: 'beginner',
    duration: '45 Min',
    rating: 4.9,
    students: 2189,
    price: 'Free',
    url: '/guides/ai-startup-funding-guide-2025',
    badges: ['Popular', 'Free'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Fortune 500 AI Transformation',
    description: 'How global enterprises successfully implemented AI',
    category: 'case-studies',
    difficulty: 'advanced',
    duration: '25 Min',
    rating: 4.7,
    students: 987,
    price: 'Free',
    url: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
    badges: ['Case Study', 'Enterprise'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'AI Ethics & Governance Framework',
    description: 'Building responsible AI systems in your organization',
    category: 'guides',
    difficulty: 'intermediate',
    duration: '60 Min',
    rating: 4.8,
    students: 1456,
    price: '$199',
    url: '/guides/ai-ethics-governance-framework-2025',
    badges: ['Critical', 'Compliance'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Quantum AI Revolution 2026',
    description: 'The future of quantum-enhanced artificial intelligence',
    category: 'insights',
    difficulty: 'advanced',
    duration: '40 Min',
    rating: 4.9,
    students: 2341,
    price: 'Free',
    url: '/insights/quantum-ai-revolution-2026',
    badges: ['Future Tech', 'Quantum'],
    image: '/api/placeholder/300/200'
  }
];

export default function ContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || content.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = contentCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Search;
  };

  const getDifficultyColor = (difficulty: string) => {
    const difficultyData = difficultyLevels.find(diff => diff.id === difficulty);
    return difficultyData ? difficultyData.color : 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive library of AI tutorials, insights, guides, and case studies.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search AI content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {contentCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="p-4">
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Difficulty Level
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedDifficulty === 'all' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDifficulty('all')}
                    >
                      All
                    </Button>
                    {difficultyLevels.map((level) => (
                      <Button
                        key={level.id}
                        variant={selectedDifficulty === level.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDifficulty(level.id)}
                      >
                        {level.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => {
            const CategoryIcon = getCategoryIcon(content.category);
            return (
              <Card key={content.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-blue-600" />
                      <Badge variant="outline" className="text-xs capitalize">
                        {content.category.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      {content.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {content.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {content.students}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      {content.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={`${getDifficultyColor(content.difficulty)} capitalize`}>
                        {content.difficulty}
                      </Badge>
                      <span className="font-semibold text-gray-900">{content.price}</span>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={content.url}>
                        View
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            <Link href="/content-showcase">
              View All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}