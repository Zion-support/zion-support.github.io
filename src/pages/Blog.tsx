import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/data/blog-posts';
import { BlogPost as BlogPostType } from '@/types/blog';
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

// Categories for filtering
const categories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'DevOps',
  'Data Science',
  'Cybersecurity',
  'Cloud Computing'
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showSkeleton = useSkeletonTimeout(isLoading, 1000);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call with retry logic
        const response = await fetchWithRetry('/api/blog-posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
        logInfo('Blog posts loaded successfully', { count: data.length });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog posts';
        setError(errorMessage);
        logErrorToProduction('Failed to load blog posts', err);
        
        // Fallback to static data
        setPosts(BLOG_POSTS);
        setFilteredPosts(BLOG_POSTS);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  if (showSkeleton) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Skeleton className="h-12 w-96 mx-auto mb-4" />
              <Skeleton className="h-6 w-64 mx-auto" />
            </div>
            
            <div className="mb-8">
              <Skeleton className="h-10 w-full mb-4" />
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Insights, tutorials, and updates from the Zion AI team
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {(searchTerm || selectedCategory !== 'All') && (
              <div className="flex justify-end">
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>

          {/* Error State */}
          {error && (
            <div className="text-center py-8">
              <p className="text-red-600 dark:text-red-400 mb-4">
                {error}
              </p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* No Results */}
          {!error && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}