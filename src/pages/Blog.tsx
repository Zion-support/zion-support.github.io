import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Footer } from '@/components/Footer';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const CATEGORIES = ['All Categories', 'AI & ML', 'Cybersecurity', 'Cloud & DevOps', 'Emerging Tech'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
      excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches.',
      author: 'Dr. Sarah Chen',
      publishedDate: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & ML',
      slug: 'ai-consciousness-2025'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats.',
      author: 'Emily Watson',
      publishedDate: '2025-01-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      slug: 'zero-trust-security'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights, updates, and thought leadership from our team of technology experts.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700 border border-slate-600 text-white"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-slate-700 border border-slate-600 text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border border-slate-600">
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-white">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-cyan-400 bg-slate-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-slate-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.publishedDate}
                      <span className="mx-1">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-slate-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mr-2">
                      <User className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm text-white">{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="text-cyan-400 p-0 hover:text-cyan-300" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More →
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-slate-300 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
