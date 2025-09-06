import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDebounce } from '@/hooks/useDebounce';
import { GradientHeading } from '@/components/GradientHeading';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { BlogPost } from '@/types/blog';
import { generateRandomBlogPost } from '@/utils/generateRandomBlogPost';
import { BLOG_POSTS } from '@/data/blog-posts';
import { Search } from 'lucide-react';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Categories for filtering
const CATEGORIES = [
  'All Categories',
  'Trends',
  'Marketing',
  'Sustainability',
  'Ethics',
  'Recruitment',
  'Infrastructure',
];

export interface BlogProps {
  posts?: BlogPost[];
}

export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]);
  const query = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Reset state when navigating away to avoid cross-page leakage
  useEffect(() => {
    const handleRouteChange = () => {
      setSearchQuery('');
      setSelectedCategory('All Categories');
      setPosts([...initialPosts]);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, initialPosts]);

  // Filter posts based on search query and category
  useEffect(() => {
    const filteredPosts = initialPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(query.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                           post.content.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Categories' || 
                             post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    setPosts(filteredPosts);
  }, [query, selectedCategory, initialPosts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, and digital transformation from our expert team."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <GradientHeading
            title="Our Blog"
            subtitle="Insights, trends, and expert perspectives on technology"
            className="text-center mb-16"
          />
          
          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-64">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-slate-800 hover:bg-slate-700 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                }}
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