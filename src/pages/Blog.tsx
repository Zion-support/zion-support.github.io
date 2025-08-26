
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  tags: string[];
  featured: boolean;
  image: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 4 },
    { id: 'business', name: 'Business & Strategy', count: 2 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Business Operations in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '2.4k',
      tags: ['AI', 'Automation', 'Business', 'Future'],
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Enterprise Adoption',
      excerpt: 'Understanding the practical applications of quantum computing and how businesses can start preparing for the quantum revolution.',
      category: 'quantum',
      author: 'Dr. James Kim',
      date: '2025-01-12',
      readTime: '12 min read',
      views: '1.8k',
      tags: ['Quantum Computing', 'Enterprise', 'Technology', 'Innovation'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Why zero-trust security architecture is becoming essential for modern enterprises and how to implement it effectively.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      views: '3.1k',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise', 'Security'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'DevOps Transformation: From Theory to Practice',
      excerpt: 'Real-world strategies for implementing DevOps practices and achieving faster, more reliable software delivery.',
      category: 'cloud',
      author: 'Emily Watson',
      date: '2025-01-08',
      readTime: '15 min read',
      views: '2.7k',
      tags: ['DevOps', 'Cloud', 'Automation', 'Software Development'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI-Powered Decision Making: Transforming Business Intelligence',
      excerpt: 'How artificial intelligence is enhancing business intelligence and enabling data-driven decision making at scale.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-05',
      readTime: '9 min read',
      views: '1.9k',
      tags: ['AI', 'Business Intelligence', 'Data', 'Decision Making'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Exploring the benefits of edge computing and how it\'s reshaping the future of IoT and real-time applications.',
      category: 'cloud',
      author: 'David Chen',
      date: '2025-01-03',
      readTime: '11 min read',
      views: '2.2k',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Technology'],
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO
        title="Blog | Zion AI Marketplace"
        description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services."
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news"
        canonical="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI & Tech Insights
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-zion-purple/20 text-zion-cyan">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <Card className="bg-zion-blue-dark border-zion-purple/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <CardTitle className="text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light text-lg mb-6">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center gap-6 text-zion-slate-light mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span className="text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-zion-purple hover:bg-zion-purple-dark" asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-zion-slate-light flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-zion-slate-light text-sm mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-zion-cyan hover:text-zion-cyan-light" asChild>
                      <Link to={`/blog/${post.id}`}>
                        <BookOpen className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">
                No articles found matching your search criteria.
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
