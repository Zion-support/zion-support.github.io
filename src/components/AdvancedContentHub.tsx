import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Clock, 
  Eye,
  BookOpen,
  Video,
  FileText,
  Podcast,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

const AdvancedContentHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const contentTypes = [
    { id: 'All', label: 'All Content', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'articles', label: 'Articles', icon: <FileText className="h-4 w-4" /> },
    { id: 'videos', label: 'Videos', icon: <Video className="h-4 w-4" /> },
    { id: 'podcasts', label: 'Podcasts', icon: <Podcast className="h-4 w-4" /> },
    { id: 'tutorials', label: 'Tutorials', icon: <BookOpen className="h-4 w-4" /> }
  ];

  const categories = [
    'All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 
    'Data Analytics', 'DevOps', 'Blockchain', 'IoT', 'Mobile Development'
  ];

  const content = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Strategic Guide",
      type: 'articles',
      category: 'AI & Machine Learning',
      description: "Comprehensive guide to implementing AI strategies in enterprise environments with real-world case studies.",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-15",
      readTime: "12 min",
      views: 15420,
      rating: 4.9,
      tags: ['AI', 'Enterprise', 'Strategy', 'Case Studies'],
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Kubernetes",
      type: 'tutorials',
      category: 'DevOps',
      description: "Step-by-step tutorial on building and deploying microservices using Kubernetes best practices.",
      author: "Alex Rodriguez",
      publishDate: "2025-01-14",
      readTime: "25 min",
      views: 8930,
      rating: 4.8,
      tags: ['Kubernetes', 'Microservices', 'DevOps', 'Tutorial'],
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: "Zero-Trust Security Architecture: Implementation Guide",
      type: 'videos',
      category: 'Cybersecurity',
      description: "Deep dive into zero-trust security principles and practical implementation strategies.",
      author: "Michael Thompson",
      publishDate: "2025-01-13",
      readTime: "45 min",
      views: 12750,
      rating: 4.7,
      tags: ['Security', 'Zero-Trust', 'Architecture', 'Implementation'],
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: "The Future of Cloud Computing: Edge Computing Revolution",
      type: 'podcasts',
      category: 'Cloud Computing',
      description: "Industry experts discuss the evolution of cloud computing and the rise of edge computing.",
      author: "Tech Talk Podcast",
      publishDate: "2025-01-12",
      readTime: "60 min",
      views: 5620,
      rating: 4.6,
      tags: ['Cloud', 'Edge Computing', 'Future Tech', 'Podcast'],
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: "Advanced Data Analytics with Python and Pandas",
      type: 'tutorials',
      category: 'Data Analytics',
      description: "Master data manipulation and analysis using Python's most powerful libraries.",
      author: "Jennifer Liu",
      publishDate: "2025-01-11",
      readTime: "30 min",
      views: 18900,
      rating: 4.9,
      tags: ['Python', 'Data Science', 'Pandas', 'Analytics'],
      featured: true,
      trending: true
    },
    {
      id: 6,
      title: "Blockchain in Supply Chain: Real-World Applications",
      type: 'articles',
      category: 'Blockchain',
      description: "Exploring how blockchain technology is revolutionizing supply chain management.",
      author: "David Park",
      publishDate: "2025-01-10",
      readTime: "18 min",
      views: 7450,
      rating: 4.5,
      tags: ['Blockchain', 'Supply Chain', 'Applications', 'Innovation'],
      featured: false,
      trending: false
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'articles': return <FileText className="h-4 w-4" />;
      case 'videos': return <Video className="h-4 w-4" />;
      case 'podcasts': return <Podcast className="h-4 w-4" />;
      case 'tutorials': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'articles': return 'bg-blue-100 text-blue-800';
      case 'videos': return 'bg-red-100 text-red-800';
      case 'podcasts': return 'bg-purple-100 text-purple-800';
      case 'tutorials': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            <Sparkles className="h-3 w-3 mr-1" />
            Advanced Content Hub
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Premium Tech Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access cutting-edge articles, tutorials, videos, and podcasts from industry experts. 
            Stay ahead with the latest insights in AI, cloud computing, cybersecurity, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search content, tags, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {contentTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className={`${getTypeColor(item.type)} border-0`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type}</span>
                    </Badge>
                    {item.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {item.trending && (
                      <Badge className="bg-gradient-to-r from-red-400 to-pink-500 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {item.author}</span>
                  <span>{item.publishDate}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {item.rating}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{item.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Load More Content
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Content Hub Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Premium Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">75+</div>
              <div className="text-blue-100">Podcast Episodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentHub;