import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Categories for filtering
const CATEGORIES = [
  'AI & Machine Learning',
  'Cloud Computing',
  'Cybersecurity',
  'DevOps',
  'Web Development',
  'Mobile Development'
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetchWithRetry('/api/blog/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts || []);
          logInfo('Blog posts loaded successfully');
        }
      } catch (error) {
        logErrorToProduction('Error fetching blog posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>AI & Tech Insights</GradientHeading>
          <p className="text-zion-cyan mt-4 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in AI and technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {(searchQuery || selectedCategory) && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
                className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-zion-blue"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Blog Posts */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-zion-blue-dark border-zion-cyan/20">
                <CardHeader>
                  <div className="h-4 bg-zion-cyan/20 rounded animate-pulse"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-zion-cyan/20 rounded animate-pulse"></div>
                    <div className="h-3 bg-zion-cyan/20 rounded animate-pulse"></div>
                    <div className="h-3 bg-zion-cyan/20 rounded animate-pulse w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-cyan/20 hover:border-zion-cyan/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-zion-cyan">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-cyan/80 text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zion-cyan/80 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}