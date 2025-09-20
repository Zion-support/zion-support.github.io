import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Categories for filtering
const categories = [
  { name: 'AI & Machine Learning', value: 'ai-ml' },
  { name: 'Technology', value: 'technology' },
  { name: 'Business', value: 'business' },
  { name: 'Innovation', value: 'innovation' },
];

// Sample blog posts data
const samplePosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    excerpt: "Explore the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.",
    author: "Dr. Sarah Chen",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Enterprise", "Technology"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough: What It Means for Your Business",
    excerpt: "Understanding the latest quantum computing advances and their practical applications in solving complex business problems.",
    author: "Prof. Michael Rodriguez",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Quantum Computing", "Innovation"],
    image: "/api/placeholder/600/400",
    featured: false
  },
];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState(samplePosts);

  // Filter blog posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(query.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                           post.author.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, query, selectedCategory]);

  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured);

  logInfo('BlogPage filteredPosts:', {
    data: filteredPosts
  });

  return (
    <>
      <SEO
        title="Blog | Zion AI - Latest Insights and Technology Trends"
        description="Stay updated with the latest AI trends, technology insights, and business innovations from Zion AI experts."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <GradientHeading
              level="h1"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              AI Insights & Technology Blog
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover the latest trends, insights, and innovations in artificial intelligence and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="text-sm"
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.name ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.name)}
                    className="text-sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-400 text-xs font-medium">{post.category}</span>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{post.author}</span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">All Articles</h2>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-400 text-xs font-medium">{post.category}</span>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{post.author}</span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}