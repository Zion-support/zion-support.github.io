<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebounce } from '@/hooks/useDebounce'
import { GradientHeading } from '@/components/GradientHeading'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select
  SelectValue
  SelectTrigger
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { BlogPost } from '@/types/blog'
import { generateRandomBlogPost } from '@/utils/generateRandomBlogPost'
import { BLOG_POSTS } from '@/data/blog-posts'

import { Search } from 'lucide-react'
<<<<<<< HEAD
import { fetchWithRetry  } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
=======
import { fetchWithRetry } from '@/utils/fetchWithRetry'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useDebounce } from "@/hooks/useDebounce"
import { GradientHeading } from "@/components/GradientHeading"
import { SEO } from "@/components/SEO"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { BlogPost } from "@/types/blog"
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost"
import { BLOG_POSTS } from "@/data/blog-posts"
// Categories for filtering
const CATEGORIES = [
  'All Categories',
  'Trends',
  'Marketing',
  'Sustainability',
  'Ethics',
  'Recruitment',
  'Infrastructure',
]
export interface BlogProps {
  posts?: BlogPost[]
export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts])
  const query = useDebounce(searchQuery, 300)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState, useEffect } from "react",
import Link from "next/link",
import { useRouter } from "next/router",
import { useDebounce } from "@/hooks/useDebounce",
import { GradientHeading } from "@/components/GradientHeading",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { BlogPost } from "@/types/blog",
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost",
import { BLOG_POSTS } from "@/data/blog-posts",
import { Search } from 'lucide-react'
import { fetchWithRetry } from '@/utils/fetchWithRetry',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebounce } from '@/hooks/useDebounce'
import { GradientHeading } from '@/components/GradientHeading'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select
  SelectValue
  SelectTrigger
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { BlogPost } from '@/types/blog'
import { generateRandomBlogPost } from '@/utils/generateRandomBlogPost'
import { BLOG_POSTS } from '@/data/blog-posts'

import { Search } from 'lucide-react'
import { fetchWithRetry  } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
// Categories for filtering

const CATEGORIES = [
  'All Categories'
  'Trends'
  'Marketing'
  'Sustainability'
  'Ethics'
  'Recruitment'
  'Infrastructure'
]
export interface BlogProps {
<<<<<<< HEAD
  posts?: BlogPost[];
export default /**
 * Blog - Function description
 */
function Blog() {
  log_info ('BlogPage rendering. Initial BLOG_POSTS:', { data: initial_posts });
  const [search_query, setSearchQuery] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('All Categories');
  const [posts, set_posts] = useState < BlogPost[]>([...initial_posts]);
  const query = use_debounce (search_query, 300);
  const [is_loading, setIsLoading] = useState (false);
  const router = use_router ();
  // Reset state when navigating away to avoid cross - page leakage;
  useEffect ((, ) => {
=======
  posts?: BlogPost[]
}

export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts }),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("All Categories"),
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce(searchQuery, 300),
  const [isLoading, setIsLoading] = useState(false),
  const router = useRouter(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Reset state when navigating away to avoid cross-page leakage
  useEffect(() => {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return () => {
      setSearchQuery ('');
      setSelectedCategory ('All Categories');
      set_posts ([...initial_posts]);
    }
  }, [router.as_path, initial_posts]);
  // useEffect (() => {
  //   const interval = set_interval (() => {
  //     set_posts (prev => [...prev, generateRandomBlogPost ()]);
  //   }, 120000); // every 2 minutes;
  //   return () => clear_interval (interval);
  // }, []);
  useEffect ((, ) => {
    const fetch_posts = async () => {
      setIsLoading (true);
      try {
<<<<<<< HEAD
        const data: BlogPost[] = await fetchWithRetry (
          `/api / blog?query=${encodeURIComponent (query)}`);
        set_posts (data);
=======
        const data: BlogPost[] = await fetchWithRetry(
          `/api/blog?query=${encodeURIComponent(query)}`
        ),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        setPosts(data)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      } catch (err) {
        logErrorToProduction ('Failed to fetch blog posts', { data: err });
      } finally {
        setIsLoading (false);
      }
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    }
    fetchPosts()
  }, [query])
<<<<<<< HEAD
=======
    },

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    fetchPosts()
  }, [query])
  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
<<<<<<< HEAD
      selectedCategory === 'All Categories' |
=======
<<<<<<< HEAD
      selectedCategory === 'All Categories' |
=======
  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory = null;
      selectedCategory === 'All Categories' ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      post.category === selectedCategory
    return matchesCategory
  })
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured)
  logInfo('BlogPage filteredPosts:', { data: filteredPosts })
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDebounce } from '@/hooks/useDebounce';
import { GradientHeading } from '@/components/GradientHeading';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { BlogPost } from '@/types/blog';
import { generateRandomBlogPost } from '@/utils/generateRandomBlogPost';
import { BLOG_POSTS } from '@/data/blog-posts';
=======
=======
<<<<<<< HEAD
=======
    },

    fetchPosts()
  }, [query]),

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      selectedCategory === "All Categories" || post.category === selectedCategory,

    return matchesCategory
  }),
  
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured),

  logInfo('BlogPage filteredPosts:', { data: filteredPosts }),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <>
      <SEO
        title="Blog - Latest from Zion Tech Marketplace"
        description="Read expert insights and news on the Zion Tech Marketplace blog. Stay informed about trends, tips, and stories that help you succeed. Sign up for updates and never miss a breakthrough."
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT"
        canonical="https://app.ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <h1>Blog</h1>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
<<<<<<< HEAD
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
              Expert perspectives on artificial intelligence, tech innovation
              and digital transformation
            </p>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 &&
            (() => {
              const featuredPost = featuredPosts[0]
              if (!featuredPost) return null
              return (
                <div className='mb-16'>
                  <h2 className='text-2xl font-bold text-white mb-6'>
                    Featured Article
                  </h2>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='aspect-video overflow-hidden rounded-lg'>
                      <img
                        src={featuredPost.featuredImage}
                        alt={
                          featuredPost.featuredImageAlt |featuredPost.title
                        }
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = '/images/blog-placeholder.svg'
                        }}
                      />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <span className='text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2'>
                        {featuredPost.category}
                      </span>
                      <h3 className='text-3xl font-bold text-white mb-4'>
                        {featuredPost.title}
                      </h3>
                      <p className='text-zion-slate-light mb-6'>
                        {featuredPost.excerpt}                      </p>
                      <div className='flex items-center mb-6'>
                        <img
                          src={featuredPost.author.avatarUrl}
                          alt={featuredPost.author.name}
                          className='w-10 h-10 rounded-full mr-3'
                          onError={e => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = '/images/blog-placeholder.svg'
                          }}
                        />
                        <div>
                          <p className='text-white font-medium'>
                            {featuredPost.author.name}
                          </p>
                          <p className='text-sm text-zion-slate-light'>
                            {featuredPost.publishedDate} •{' '}
                            {featuredPost.readTime}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit'
                      >
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read Article
                        </Link>
                      </Button>
=======
<<<<<<< HEAD
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (() => {
            const featuredPost = featuredPosts[0],
            if (!featuredPost) return null,
            
            return (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.featuredImageAlt || featuredPost.title}
                    className="object-cover w-full h-full hover: scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement,
                      target.src = "/images/blog-placeholder.svg"
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement,
                        target.src = "/images/blog-placeholder.svg"
                      }}
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPost.publishedDate} • {featuredPost.readTime}
                      </p>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"
                  >
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>

              </div>
            </div>
            )
import { useState, useEffect } from "react",;
import Link from "next/link",;
import { useRouter } from "next/router",;
import { useDebounce } from "@/hooks/useDebounce",;
import { GradientHeading } from "@/components/GradientHeading",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { BlogPost } from "@/types/blog",;
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost",;
import { BLOG_POSTS } from "@/data/blog-posts",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Search } from 'lucide-react';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDebounce } from "@/hooks/useDebounce";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { BlogPost } from "@/types/blog";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from 'lucide-react';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
// Categories for filtering;
const CATEGORIES = [;
  'All Categories',;
  'Trends',;
  'Marketing',;
  'Sustainability',;
  'Ethics',;
  'Recruitment',;
  'Infrastructure',;
];

export interface BlogProps {;
  posts?: BlogPost[];

export default function Blog(): any ({ posts: initialPosts = BLOG_POSTS }: BlogProps) {;
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]);
  const query = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Reset state when navigating away to avoid cross-page leakage;
  useEffect((,) => {;
    return () => {;
      setSearchQuery('');
      setSelectedCategory('All Categories');
      setPosts([...initialPosts]);
    };
  }, [router && router.asPath, initialPosts]);

  // useEffect(() => {;
  //   const interval = setInterval(() => {;
  //     setPosts(prev => [...prev, generateRandomBlogPost()]);
  //   }, 120000); // every 2 minutes;
  //   return () => clearInterval(interval);
  // }, []);
  useEffect((,) => {;
    const fetchPosts = async () => {;
      setIsLoading(true);
      try {;
        const data: BlogPost[] = await fetchWithRetry(;
          `/api/blog?query=${encodeURIComponent(query)}`;
        );
        setPosts(data);
      } catch (err) {;
        logErrorToProduction('Failed to fetch blog posts', { data: err });
      } finally {;
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [query]);

  // Filter blog posts based on selected category only.;
  // Search filtering is handled server-side.;
  const filteredPosts = posts && posts.filter(post => {;
    const matchesCategory =;
      selectedCategory === 'All Categories' ||;
      post && post.category === selectedCategory;

    return matchesCategory;
  });

  // Get featured posts;
  const featuredPosts = posts && posts.filter(post => post && post.isFeatured);

  logInfo('BlogPage filteredPosts:', { data: filteredPosts });

  return (
    <>;
      <SEO
        title='Blog - Latest from Zion Tech Marketplace'
        description='Read expert insights and news on the Zion Tech Marketplace blog. Stay informed about trends, tips, and stories that help you succeed. Sign up for updates and never miss a breakthrough.'
        keywords='AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT'
        canonical='https://app.ziontechgroup.com/blog'
      />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <h1>Blog</h1>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
              Expert perspectives on artificial intelligence, tech innovation
              and digital transformation
            </p>
          </div>
          {/* Featured Post Section - Only show if there are featured posts */}
          {featured_posts.length > 0 &&;
            (() => {
              const featuredPost = featuredPosts[0]
              if (!featuredPost) return null
              return (
                <div className='mb-16'>;
                  <h2 className='text-2xl font-bold text-white mb-6'>;
                    Featured Article;
                  </h2>;
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
                    <div className='aspect-video overflow-hidden rounded-lg'>;
                      <img
                        src={featuredPost && featuredPost.featuredImage}
                        alt={
                          featuredPost.featuredImageAlt |featuredPost.title
                        }
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = '/images/blog-placeholder.svg'
                        }}
                      />;
                    </div>;
                    <div className='flex flex-col justify-center'>;
                      <span className='text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2'>;
                        {featuredPost && featuredPost.category}
                      </span>;
                      <h3 className='text-3xl font-bold text-white mb-4'>;
                        {featuredPost && featuredPost.title}
                      </h3>;
                      <p className='text-zion-slate-light mb-6'>;
                        {featuredPost && featuredPost.excerpt}                      </p>;
                      <div className='flex items-center mb-6'>;
                        <img
                          src={featuredPost && featuredPost.author.avatarUrl}
                          alt={featuredPost && featuredPost.author.name}
                          className='w-10 h-10 rounded-full mr-3'
                          onError={e => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = '/images/blog-placeholder.svg'
                          }}
                        />;
                        <div>;
                          <p className='text-white font-medium'>;
                            {featuredPost && featuredPost.author.name}
                          </p>;
                          <p className='text-sm text-zion-slate-light'>;
                            {featuredPost && featuredPost.publishedDate} {' '}
                            {featuredPost && featuredPost.readTime}
                          </p>;
                        </div>;
                      </div>;
                      <Button
                        asChild
                        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit'
                      >
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read Article
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
                          Read Article;
                        </Link>;
                      </Button>;
                    </div>;
                  </div>;
                </div>;
              );
            })()}
          {/* Filters and Search */}
          <div className='bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light'>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              <div className='relative'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate' />;
                <Input
                  type='text'
                  placeholder='Search articles...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='pl-10 bg-zion-blue border border-zion-blue-light text-white'                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}>;
                <SelectTrigger
                  className='bg-zion-blue border border-zion-blue-light text-white'
                  aria-label='Filter by category'>;
                  <SelectValue placeholder='Select Category' />;
                </SelectTrigger>;
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;
                  {CATEGORIES && CATEGORIES.map(category => (;
                    <SelectItem
                      key={category}
                      value={category}
                      className='text-white'>                      {category}
                    </SelectItem>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
            {isLoading && (;
              <div className='text-center py-4 text-white'>;
                Loading articles...;
              </div>;
            )}
          </div>
          {/* Blog Posts Grid */}
<<<<<<< HEAD
          {!isLoading && filteredPosts && filteredPosts.length > 0 ? (;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {filteredPosts && filteredPosts.map(post => (                <Card
                  key = {post && post.id,}
=======

          {!isLoading && filteredPosts.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  asChild
                  className='bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg'>;
                  <Link href={`/blog/${post && post.slug}`} className='block group'>;
                    <div className='aspect-[16/9] relative overflow-hidden'>;
                      <img
<<<<<<< HEAD
                        src={post.featuredImage}
                        alt={post.featuredImageAlt |post.title}
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = '/images/blog-placeholder.svg' }}
=======
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement,
                          target.src = "/images/blog-placeholder.svg"
                        }}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                      />
                    </div>
                    <CardContent className='p-6'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full'>
                          {post.category}
                        </span>;
                        <div className='text - xs text - zion - slate - light'>;
                          {post.published_date}  {post.read_time}
                        </div>;
                      </div>;
                      <h3 className='text - xl font - bold text - white mb - 3'>;
                        {post.title}
                      </h3>;
                      <p className='text - zion - slate - light mb - 4 line - clamp - 3'>;
                        {post.excerpt}
                      </p>
                      <div className='flex items-center'>
                        <img
                          src={post && post.author.avatarUrl}
                          alt={post && post.author.name}
                          className='w-8 h-8 rounded-full mr-2'
                          onError={e => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = '/images/blog-placeholder.svg'
                          }}
                        />;
                        <span className='text-sm text-white'>;
                          {post && post.author.name}
                        </span>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p-6 pt-0'>;
                      <span className='text-zion-cyan group-hover:text-zion-purple'>;
                      </p>;
                      <div className='flex items - center'>;
                        <img;
                          src={post.author.avatar_url}
                          alt={post.author.name}
                          className='w - 8 h - 8 rounded - full mr - 2';
                          on_error={e => {
                            const target = e.current_target as HTMLImageElement;
                            target.src = '/images / blog - placeholder.svg';
                          }}
                        />;
                        <span className='text - sm text - white'>;
                          {post.author.name}
                        </span>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p - 6 pt - 0'>;
                      <span className='text - zion - cyan group - hover:text - zion - purple'>;
                        Read More ;
                      </span>;
                    </CardFooter>;
                  </Link>;
                </Card>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              ))}
            </div>;
          ) : null}
          {/* No Results Message - Show only if not loading and no posts */}
          {!isLoading && filteredPosts && filteredPosts.length === 0 && (;
            <div className='text-center py-16'>;
              <h3 className='text-xl font-bold text-white mb-2'>;
                No articles found;
              </h3>;
              <p className='text-zion-slate-light mb-6'>;
                Try adjusting your search or filter criteria;
              </p>;
              <Button
                variant='outline'
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Categories') }}
                className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'

              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}, [query])
//Filter blog posts based on selected category only. //Search filtering is handled server-side. return matchesCategory
})
//Get featured posts const featuredPosts = posts.filter (post => post.isFeatured);'
logInfo ('BlogPage filteredPosts:', {
  data: filteredPosts
});"
min-h-screen bg-zion-blue pt-12 pb-20 px-4"> <h1>Blog</h1> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI & Tech Insights</GradientHeading>
}"
}/> </div> <div className=" flex flex-col justify-center"> <span className=" text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2"> {
  featuredPost.category "
}</span> <h3 className=" text-3xl font-bold text-white mb-4"> {
  featuredPost.title "
}</h3> <p className=" text-zion-slate-light mb-6"> {
  featuredPost.excerpt "
}flex items-center mb-6" > <img
}"
}/> <div> <p className="text-white font-medium" > {
  featuredPost.author.name "
}</p> <p className="text-sm text-zion-slate-light" > {
  featuredPost.publishedDate
} {
  featured_post.read_time ";
}bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple w - fit"> <Link href= {
  `/blog/$ {
  featuredPost.slug
}`
}> Read Article </Link> </Button> </div> </div> </div>)
}) ()
}</SelectItem>) )
}</SelectContent> </Select> </div> Loading articles... </div>)
}</div> key= {
  post.id "
}asChild className=" bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg">
}"
}/> </div> <CardContent className=" p-6"> <div className=" flex items-center justify-between mb-3"> <span className=" text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full"> {
  post.category "
}</span> <div className=" text-xs text-zion-slate-light"> {
  post.publishedDate
} {
  post.readTime "
}</div> </div> <h3 className=" text-xl font-bold text-white mb-3"> {
  post.title "
}</h3> <p className=" text-zion-slate-light mb-4 line-clamp-3"> {
  post.excerpt "
}flex items-center" > <img
}"
}/> <span className="text-sm text-white" > {
  post.author.name "
}</span> p-6 pt-0"> <span className=" text-zion-cyan group-hover:text-zion-purple">Read More </span> </CardFooter> </Link> </Card>) )
}</div>) : null "
}<Button variant=" outline" onClick={
  () => {
}</div> </div> </>)
}'"  const featuredPosts = blogPosts.filter(post => post.featured)
}
  const regular_posts = blog_posts.filter (post => !post.featured);
}
  return (
    <>"
      <SEO ;"
        title="Blog - Zion Tech Group | Technology Insights & Industry News";"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group"s expert team.";"
        keywords="technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news">
     />;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* comment */}"
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;"
          <div className="container mx-auto px-4">
            <motion.div;"
              initial = "{{" opacity: 0, y: 20 }}"
              animate="{{" opacity: 1, y: 0 }}"
              transition="{{" duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto">
            >;"
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Technology Insights
              </h1>,"
              <p className = "text-xl text-gray-300 mb-8">
                Stay ahead of the curve with expert insights on AI, quantum computing
                cybersecurity, and the latest technology trends shaping our future.
              </p>;"
              <div className="flex flex-wrap justify-center gap-4">
                {categories.slice(0, 4).map((category, index) => (
                  <span;"
                    key = "{category.name}
                    className="px - 4 py - 2 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - sm">;
                  >;
                    {category.name}
                  </span>
export default function Blog() {
  const blogPosts = [], image: "/api/placeholder/600/400"
  {"
      id: 1, title: "The Future of AI in Enterprise: 2025 Trends and Predictions","
      excerpt: "Explore the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.", author: "Dr. Sarah Chen","
      date: "2025-01-15", readTime: "8 min read","
      category: "AI & Machine Learning", tags: ["AI,Enterprise,Technology"], image: "/api/placeholder/600/400"
      featured: true}, { id: 2}, {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      id: 2
      title: &quot,Quantum Computing Breakthroug,h: What It Means for Your Business&quot
      excerpt: &quot,Understanding the latest quantum computing advances and their practical applications in solving complex business problems.&quot
      author: &quot,Prof. Michael Rodriguez&quot
      date: &quot,2025-01-12&quot
      readTime: &quot,12 min read&quot
      category: &quot,Quantum Computing&quot
      tags: [&quot,Quantum&quot, &quot;Computing&quot, &quot;Innovation&quot]
<<<<<<< HEAD
=======
=======
      id: 2,
      title: &quot,Quantum Computing Breakthroug,h: What It Means for Your Business&quot,
      excerpt: &quot,Understanding the latest quantum computing advances and their practical applications in solving complex business problems.&quot,
      author: &quot,Prof. Michael Rodriguez&quot,
      date: &quot,2025-01-12&quot,
      readTime: &quot,12 min read&quot,;
      category: &quot,Quantum Computing&quot;
      tags: [&quot,Quantum&quot, &quot;Computing&quot, &quot;Innovation&quot],
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      image: &quot,/api/placeholder/600/400&quot,"
      title: "Quantum Computing Breakthrough: What It Means for Your Business", excerpt: "Understanding the latest quantum computing advances and their practical applications in solving complex business problems.","
      author: "Prof. Michael Rodriguez", date: "2025-01-12","
      readTime: "12 min read", category: "Quantum Computing","
      tags: ["Quantum", "Computing", "Innovation"], image: "/api/placeholder/600/400","
      tags: ["Quantum,Computing,Innovation"], image: "/api/placeholder/600/400"
      featured: true}, { id: 3}, {
      id: 3
      title: &quot,Micro SaaS Revolutio,n: Building Scalable Solutions&quot
      excerpt: &quot,How micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.&quot
      author: &quot,Alex Thompson&quot
      date: &quot,2025-01-10&quot
      readTime: &quot,6 min read&quot
      category: &quot,Micro SaaS&quot
      tags: [&quot,SaaS&quot, &quot;Software&quot, &quot;Business&quot]
      image: &quot,/api/placeholder/600/400&quot,"
      title: "Micro SaaS Revolution: Building Scalable Solutions", excerpt: "How micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.","
      author: "Alex Thompson", date: "2025-01-10","
      readTime: "6 min read", category: "Micro SaaS","
      tags: ["SaaS", "Software", "Business"], image: "/api/placeholder/600/400","
      tags: ["SaaS,Software,Business"], image: "/api/placeholder/600/400"
      featured: false}, { id: 4}, {
      id: 4
      title: &quot,Cybersecurity in the Age of A,I: New Threats and Solutions&quot
      excerpt: &quot,Examining how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.&quot
      author: &quot,Lisa Park&quot
      date: &quot,2025-01-08&quot
      readTime: &quot,10 min read&quot
      category: &quot,Cybersecurity&quot
      tags: [&quot,Security&quot, &quot;AI&quot, &quot;Enterprise&quot]
      image: &quot,/api/placeholder/600/400&quot,"
      title: "Cybersecurity in the Age of AI: New Threats and Solutions", excerpt: "Examining how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.","
      author: "Lisa Park", date: "2025-01-08","
      readTime: "10 min read", category: "Cybersecurity","
      tags: ["Security", "AI", "Enterprise"], image: "/api/placeholder/600/400","
      tags: ["Security,AI,Enterprise"], image: "/api/placeholder/600/400"
      featured: false}, { id: 5}, {
      id: 5
      title: &quot,Digital Transformatio,n: A Complete Guide for 2025&quot
      excerpt: &quot,Comprehensive strategies for successful digital transformation initiatives in modern enterprises.&quot
      author: &quot,David Kumar&quot
      date: &quot,2025-01-05&quot
      readTime: &quot,15 min read&quot
      category: &quot,Digital Transformation&quot
      tags: [&quot,Digital&quot, &quot;Transformation&quot, &quot;Strategy&quot]
      image: &quot,/api/placeholder/600/400&quot,"
      title: "Digital Transformation: A Complete Guide for 2025", excerpt: "Comprehensive strategies for successful digital transformation initiatives in modern enterprises.","
      author: "David Kumar", date: "2025-01-05","
      readTime: "15 min read", category: "Digital Transformation","
      tags: ["Digital", "Transformation", "Strategy"], image: "/api/placeholder/600/400","
      tags: ["Digital,Transformation,Strategy"], image: "/api/placeholder/600/400"
      featured: false}, { id: 6}, {
      id: 6
      title: &quot,Cloud Infrastructure Best Practices for Global Enterprises&quot
      excerpt: &quot,Essential guidelines for designing and managing cloud infrastructure that scales with your business needs.&quot
      author: &quot,Maria Santos&quot
      date: &quot,2025-01-03&quot
      readTime: &quot,9 min read&quot
      category: &quot,Cloud Computing&quot
      tags: [&quot,Cloud&quot, &quot;Infrastructure&quot, &quot;Enterprise&quot]
      image: &quot,/api/placeholder/600/400&quot
      featured: false}
  ]&quot
  const categories = []&quot
"
      title: "Cloud Infrastructure Best Practices for Global Enterprises", excerpt: "Essential guidelines for designing and managing cloud infrastructure that scales with your business needs.","
      author: "Maria Santos", date: "2025-01-03","
      readTime: "9 min read", category: "Cloud Computing","
      tags: ["Cloud", "Infrastructure", "Enterprise"], image: "/api/placeholder/600/400","
      tags: ["Cloud,Infrastructure,Enterprise"], image: "/api/placeholder/600/400"
      featured: false}
  ]
  const categories = []
  const featuredPosts = blogPosts.filter(post => post.featured)
}
  const regular_posts = blog_posts.filter ();
}
  return (
    <>"
      <SEO title="&quot;Blog" - Zion Tech Group | Technology Insights & Industry News&quot;"
        description="&quot;Stay" updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group&apos;s expert team.&quot;"
        keywords="&quot;technology" blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news&quot>
     />&quot;"
        title = "Blog - Zion Tech Group | Technology Insights & Industry News
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group&apos;s expert team.
        keywords = "technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group"s expert team. "
        keywords="technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news" />
      "
      <div className="&quot;min-h-screen" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* comment */}&quot;"
        <section className="&quot;py-20" bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot
          <div className="&quot;container" mx-auto px-4&quot;>&quot;"
            <motion.div,"
initial = "{{" opacity: 0, y: 20 }}"
              animate="{{" opacity: 1, y: 0 }}"
              transition="{{" duration: 0.8   }}"
              className="text-center max-w-4xl mx-auto">"
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Technology Insights,"
transition="{{" duration: 0.8 }}"
              className="&quot;text-center" max-w-4xl mx-auto&quot
            >&quot;"
              <h1 className="&quot;text-5xl" md: text-6xl font-bold text-white mb-6&quot,>
                Technology Insights&quot
              </h1>"
              <p className = "&quot,text-xl" text-gray-300 mb-8&quot,>
                Stay ahead of the curve with expert insights on AI, quantum computing
                cybersecurity, and the latest technology trends shaping our future.&quot;"
              <p className = "text-xl text-gray-300 mb-8">
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends shaping our future.
              </p>"
              <div className="&quot;flex" flex-wrap justify-center gap-4&quot;>
                {categories.slice(0, 4).map((category, index) => (&quot}"
                  <span key = "{category.name}
                    className="&quot;px-4" py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm&quot>
                  >
                    {category.name}&quot
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
"
        <div className="container mx-auto px-4 py-16">;"
          <div className = "grid grid-cols-1 lg: grid-cols-4 gap-12">
            {/* comment */}"
            <div className="lg: col-span-3">
              {/* comment */}
              {featuredPosts.length > 0 && (;"
                <section className="mb-16">;"
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">;"
                    <TrendingUp className="w-8 h-8 mr-3 text-blue-400"  />
                    Featured Articles
                  </h2>;"
                  <div className = "grid grid-cols-1 md: grid-cols-2 gap-8">
                    {featuredPosts.map((post, index) => (
                      <motion.article;"
        <div className="&quot;container" mx-auto px-4 py-16&quot;>&quot
          <div className="&quot;grid" grid-cols-1 lg: grid-cols-4 gap-12&quot,>
            {/* comment */}&quot;"
            <div className="&quot;lg:" col-span-3&quot,>"
        <div className = "container mx-auto px-4 py-16">"
          <div className="grid grid-cols-1 lg: grid-cols-4 gap-12">
            {/* comment */}"
            <div className="lg: col-span-3">
              {/* comment */}
              {featuredPosts.length > 0 && (&quot}"
                <section className="&quot;mb-16&quot;">&quot
                  <h2 className="&quot;text-3xl" font-bold text-white mb-8 flex items-center&quot;>&quot
                    <TrendingUp className="&quot;w-8" h-8 mr-3 text-blue-400&quot;       />
                    Featured Articles&quot
                  </h2>"
                  <div className="&quot;grid" grid-cols-1 md: grid-cols-2 gap-8&quot,>
                    {featuredPosts.map((post, index) => (&quot}
                      <motion.article,"
key = "{post.id}
                        initial="{{" opacity: 0, y: 20 }}"
                        animate="{{" opacity: 1, y: 0 }}"
                        transition="{{" duration: 0.8, delay: index * 0.1 }}">
                        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover: border-blue-400/50 transition-all duration-300 hover:scale-105"
                      >,"
                        <div className = "h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">,"
                          <div className="text-6xl opacity-20">,"
                            {post.category === "AI & Machine Learning" && <Brain  />}"
                            {post.category === "Quantum Computing" && <Atom  />}"
                            {post.category === "Micro SaaS" && <Rocket  />}"
                            {post.category === "Cybersecurity" && <Shield  />}
                          </div>
                        </div>;"
                        <div className="p-6">;"
                          <div className="flex items-center gap-4 mb-3">;"
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                              {post.category}
                            </span>;"
                            <span className="text-yellow-400 text-xs font-medium">Featured</span>
                          </div>;"
                          <h3 className = "{"text-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors">,"
                            <Link to="{"/blog/${post.id}"}">{post.title}</Link>
                          </h3>;"
                          <p className=""text-gray-300" mb-4 line-clamp-3"}>{post.excerpt}</p>;"
                          <div className="flex items-center justify-between text-sm text-gray-400">;"
                            <div className="flex items-center gap-4">;"
                              <span className="flex items-center">;"
                                <User className="w-4 h-4 mr-1"  />
                                {post.author}
                              </span>;"
                              <span className="flex items-center">;"
                                <Calendar className="w-4 h-4 mr-1"  />
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>;"
                            <span className="flex items-center">;"
                              <Clock className="w-4 h-4 mr-1"  />
                              {post.readTime}
                            </span>
                          </div>
                      </motion.article>;"
                        className="&quot;bg-gradient-to-br" from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hove,r: scale-105&quot
                      >&quot;"
                        <div className="&quot;h-48" bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center&quot;>&quot
                          <div className="&quot,text-6xl" opacity-20&quot,>"
                            {post.category === &quot,AI & Machine Learning&quot, &&"}&quot <Brain  />}"
                            {post.category === &quot;Quantum Computing&quot; &&"}&quot <Atom  />}"
                            {post.category === &quot;Micro SaaS&quot; &&"}&quot <Rocket  />}"
                            {post.category === &quot;Cybersecurity&quot; &&"}&quot <Shield  />}
                          </div>
                        </div>"
                        <div className="&quot;p-6&quot;">&quot
                          <div className="&quot;flex" items-center gap-4 mb-3&quot;>&quot
                            <span className="&quot;px-3" py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot;>
                              {post.category}&quot
                            </span>"
                            <span className="&quot;text-yellow-400" text-xs font-medium&quot;>Featured&quot </span>
                          </div>"
                          <h3 className="&quot;text-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors&quot,>&quot
                            <Link to = "{"/blog/${post.id}"}">{post.title}</Link>
                          </h3>"
                          <p className="&quot;text-gray-300" mb-4 line-clamp-3&quot;>{post.excerpt}&quot </p>"
                          <div className="&quot;flex" items-center justify-between text-sm text-gray-400&quot;>&quot
                            <div className="&quot;flex" items-center gap-4&quot;>&quot
                              <span className="&quot;flex" items-center&quot;>&quot
                                <User className="&quot;w-4" h-4 mr-1&quot;       />
                                {post.author}&quot
                              </span>"
                              <span className="&quot;flex" items-center&quot;>&quot
                                <Calendar className="&quot;w-4" h-4 mr-1&quot;       />
                                {new Date(post.date).toLocaleDateString()}&quot
                              </span>
                            </div>"
                            <span className="&quot;flex" items-center&quot;>&quot
                              <Clock className="&quot;w-4" h-4 mr-1&quot;       />
                              {post.readTime}&quot
                            </span>
                          </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              )}
              {/* comment */}
              <section>;"
                <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>;"
                <div className="space-y-8">
                  {regularPosts.map((post, index) => (
                    <motion.article>
              <section>"
                <h2 className="&quot;text-3xl" font-bold text-white mb-8&quot;>Latest Articles&quot </h2>"
                <div className="&quot;space-y-8&quot;">
                  {regularPosts.map((post, index) => (&quot}
                    <motion.article,"
key = "{post.id}
                      initial="{{" opacity: 0, y: 20 }}"
                      animate="{{" opacity: 1, y: 0 }}"
<<<<<<< HEAD
                      transition="{{" duration: 0.8, delay: index * 0.1 }}"
                      className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50 transition-all duration-300">
                    >,"
                      <div className="flex flex-col md:flex-row gap-6">,"
                        <div className = "md:w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">,"
                          <div className="text-4xl opacity-20">,"
                            {post.category === "AI & Machine Learning" && <Brain  />}"
                            {post.category === "Quantum Computing" && <Atom  />}"
                            {post.category === "Micro SaaS" && <Rocket  />}"
                            {post.category === "Cybersecurity" && <Shield  />}"
                            {post.category === "Digital Transformation" && <Globe  />}"
=======
                      transition="{{" duration: 0 && 0.8, delay: index * 0 && 0.1 }}"
                      className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50 transition-all duration-300">;
                    >,";
                      <div className="flex flex-col md:flex-row gap-6">,",;
                        <div className = "md:w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">,";
                          <div className="text-4xl opacity-20">,";
                            {post && post.category === "AI & Machine Learning" && <Brain  />}";
                            {post && post.category === "Quantum Computing" && <Atom  />}";
                            {post && post.category === "Micro SaaS" && <Rocket  />}";
                            {post && post.category === "Cybersecurity" && <Shield  />}";
                            {post && post.category === "Digital Transformation" && <Globe  />}";
                            {post && post.category === "Cloud Computing" && <Code  />}

                          </div>;
                        </div>;";
                        <div className="flex-1">;";
                          <div className="flex items-center gap-4 mb-3">;";
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">;
                              {post && post.category}

                            </span>;
                          </div>;";
                          <h3 className = "{"text-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors">,";
                            <Link to="{"/blog/${post && post.id}"}">{post && post.title}</Link>;
                          </h3>;";
                          <p className=""text-gray-300" mb-4"}>{post && post.excerpt}</p>;";
                          <div className="flex items-center justify-between">;";
                            <div className="flex items-center gap-4 text-sm text-gray-400">;";
                              <span className="flex items-center">;";
                                <User className="w-4 h-4 mr-1"  />;
                                {post && post.author}

                              </span>;";
                              <span className="flex items-center">;";
                                <Calendar className="w-4 h-4 mr-1"  />;
                                {new Date(post && post.date).toLocaleDateString()}

                              </span>;";
                              <span className="flex items-center">;";
                                <Clock className="{"w-4" h-4 mr-1"  />;
                                {post && post.readTime}

                              </span>;
                            </div>;
                            <Link"
                              to = "{"/blog/${post && post.id}"}
                              className=""flex" items-center text-blue-400 hover:text-blue-300 transition-colors"}>;
                            >;
                              Read More;";
                              <ArrowRight className="w-4 h-4 ml-1"  />;
                            </Link>;
                          </div>;
                    </motion && motion.article>;";
                      className="&quot;bg-gradient-to-br" from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50 transition-all duration-300&quot,;
                    >&quot,",;
                      <divclassName="&quotflex" flex-col md: flex-row gap-6&quot,>&quot,;
                        <divclassName="&quot,m,d: " w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot>&quot,;
                          <div className="&quot,text-4xl" opacity-20&quot,>",;
                            {post && post.category === &quot,AI & Machine Learning&quot, &&"}&quot; <Brain  />}";
                            {post && post.category === &quot;Quantum Computing&quot; &&"}&quot; <Atom  />}";
                            {post && post.category === &quot;Micro SaaS&quot; &&"}&quot; <Rocket  />}";
                            {post && post.category === &quot;Cybersecurity&quot; &&"}&quot; <Shield  />}";
                            {post && post.category === &quot;Digital Transformation&quot; &&"}&quot; <Globe  />}";
                            {post && post.category === &quot;Cloud Computing&quot; &&"}&quot; <Code  />}

                          </div>;
                        </div>";
                        <divclassName="&quotflex-1&quot">&quot;
                          <divclassName="&quotflex" items-center gap-4 mb-3&quot>&quot;
                            <spanclassName="&quotpx-3" py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot>;
                              {post && post.category}&quot;
                            </span>;
                          </div>";
                          <h3className="&quottext-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors&quot,>&quot,;
                            <Link to = "{"/blog/${post && post.id}"}">{post && post.title}</Link>;
                          </h3>";
                          <pclassName="&quottext-gray-300" mb-4&quot>{post && post.excerpt}&quot;</p>";
                          <divclassName="&quotflex" items-center justify-between&quot>&quot;
                            <divclassName="&quotflex" items-center gap-4 text-sm text-gray-400&quot>&quot;
                              <spanclassName="&quotflex" items-center&quot>&quot;
                                <UserclassName="&quotw-4" h-4 mr-1&quot       />;
                                {post && post.author}&quot;
                              </span>";
                              <spanclassName="&quotflex" items-center&quot>&quot;
                                <CalendarclassName="&quotw-4" h-4 mr-1&quot       />;
                                {new Date(post && post.date).toLocaleDateString()}&quot;
                              </span>";
                              <spanclassName="&quotflex" items-center&quot>&quot;
                                <ClockclassName="&quotw-4" h-4 mr-1&quot       />;
                                {post && post.readTime}&quot;
                              </span>;
                            </div>";
                            <Link to = "{"/blog/${post && post.id}"}"">;
                              className="&quot;flex" items-center text-blue-400 hover: text-blue-300 transition-colors&quot,";
                              className = ""flex" items-center text-blue-400 hover: text-blue-300 transition-colors">,;
                              Read More&quot,",;
                              <ArrowRightclassName="&quotw-4" h-4 ml-1&quot,       />&quot,;
                            </Link>;
                          </div>;
                    </motion && motion.article>;
                  ))}

                </div>;
              </section>;
            </div>;
            {/* comment */}";
            <div className="lg: col-span-1">;";
              <div className="sticky top-8 space-y-8">;";
            <div className="&quot,lg:col-span-1&quot,">&quot,",;
              <div className = "&quot,sticky" top-8 space-y-8&quot,>;
                {/* comment */}&quot;";
                <divclassName="&quotbg-gradient-to-br" from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50&quot>&quot;
                  <h3className="&quottext-xl" font-bold text-white mb-4&quot>Categories&quot;</h3>";
                  <divclassName="&quotspace-y-3&quot">;
                    {categories && categories.map((category, index) => (&quot}";
                      <Link key = "{category && category.name}"">;
                        to="{"/blog/category/${category && category.name.toLowerCase().replace(/\s+/g," &apos;-&apos)}"}";
                        className="&quot;flex" items-center justify-between p-3 rounded-lg hover: bg-slate-700/50 transition-colors group&quot>;
                      >&quot;&apos;";
                        <div className="&quot,flex" items-center&quot,>&quot,",;
                          <category&& category.icon className="&quotw-5" h-5 text-blue-400 mr-3 group-hover: text-blue-300&quot, />&quot,";
                          <span className="&quot,text-gray-300" group-hove,r: text-white&quot,>{category && category.name}&quot;</span>";
            <div className = "lg: col-span-1">";
              <div className="sticky top-8 space-y-8">,;
                {/* comment */}";
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;";
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>;";
                  <div className="{"space-y-3"">;
                    {categories && categories.map((category, index) => (;
                      <Link"
                        key = "{category && category.name}
                        to="{"/blog/category/${category && category.name.toLowerCase().replace(/\s+/g," "-")}"}"
                        className=""flex" items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"}>;
                      >;";
                        <div className="flex items-center">;";
                          <category && category.icon className = "w-5 h-5 text-blue-400 mr-3 group-hover: text-blue-300" />,";
                          <span className="text-gray-300 group-hover:text-white">{category && category.name}</span>;
                        </div>;";
                        <span className="{"text-sm" text-gray-400">{category && category.count}</span>;
                      </Link>;";
                        to = "{"/blog/category/${category && category.name.toLowerCase().replace(/\s+/g," "-')}"}";
                        className=""flex" items-center justify-between p-3 rounded-lg hover: bg-slate-700/50 transition-colors group"}

                      >";
                        <div className="flex items-center">";
                          <category && category.icon className="w-5 h-5 text-blue-400 mr-3 group-hover: text-blue-300" />",;
                          <span className="text-gray-300 group-hover:text-white">{category && category.name}</span>;
                        </div>";
                        <spanclassName="&quottext-sm" text-gray-400&quot>{category && category.count}&quot;</span>;
                      </Link>;
                    ))}
                  </div>
                {/* comment */}"
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">;"
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>;"
                  <p className="text-gray-300 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>;"
                  <div className="space-y-3">
                    <input;"
                      type="email";"
                      placeholder="Enter your email";"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500">
                   />;"
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
    </>"
                <div className="&quot;bg-gradient-to-br" from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30&quot;>&quot
                  <h3 className="&quot;text-xl" font-bold text-white mb-4&quot;>Stay Updated&quot </h3>"
                  <p className="&quot,text-gray-300" mb-4&quot,>
                    Get the latest technology insights delivered to your inbox.&quot
                  </p>"
                  <div className="&quot;space-y-3&quot;">&quot
                    <input type="&quot;email&quot
                      placeholder="&quot;Enter" your email&quot;"
                      className="&quot;w-full" px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500&quot,>
                   />&quot,"
                    <button className = "&quot,w-full" px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r: to-purple-700 transition-all duration-200&quot,>
                      Subscribe&quot,"
                      type="email
                      placeholder="Enter your email
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500" />"
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
</>
  )
  )})))))))))
}
<<<<<<< HEAD
=======
    <>";
      <SEO title="&quot;Blog" - Zion Tech Group | Technology Insights & Industry News & quot;";
        description="&quot;Stay" updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group & apos;s expert team.&quot;";
        keywords="&quot;technology" blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news & quot>;
    />&quot;";
        title = "Blog - Zion Tech Group | Technology Insights & Industry News;
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group & apos;s expert team.;
        keywords = "technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news;
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group"s expert team. ";
        keywords="technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news" />;
      ";
      <div className="&quot;min - h-screen" bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 & quot;>;
        {/* comment */}&quot;";
        <section className="&quot;py - 20" bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 & quot;>&quot;
          <div className="&quot;container" mx - auto px - 4&quot;>&quot;";
            <motion.div, ";
initial = "{{" opacity: 0, coordinate_y: 20 }}";
              animate="{{" opacity: 1, coordinate_y: 0 }}";
              transition="{{" duration: 0.8   }}";
              className="text - center max - w-4xl mx - auto">";
              <h1 className="text - 5xl md: text - 6xl font - bold text - white mb - 6">,
                Technology Insights, ";
transition="{{" duration: 0.8 }}";
              className="&quot;text - center" max - w-4xl mx - auto & quot;
            >&quot;";
              <h1 className="&quot;text - 5xl" md: text - 6xl font - bold text - white mb - 6&quot, >;
                Technology Insights & quot,
              </h1>",
              <p class_name = "&quot, text - xl" text - gray - 300 mb - 8&quot, >;
                Stay ahead of the curve with expert insights on AI, quantum computing,
                cybersecurity, and the latest technology trends shaping our future.&quot;";
              <p class_name = "text - xl text - gray - 300 mb - 8">;
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends shaping our future.;
              </p>";
              <div className="&quot;flex" flex - wrap justify - center gap - 4&quot;>;
                {categories.slice (0, 4).map ((category, index) => (&quot}";
                  <span key = "{category.name}
                    className="&quot;px - 4" py - 2 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - sm & quot>;
                  >;
                    {category.name}&quot;
                  </span>))}
              </div>;
            </motion.div>;
          </div>;
        </section>;
";
        <div className="container mx - auto px - 4 py - 16">;";
          <div class_name = "grid grid - cols - 1 lg: grid - cols - 4 gap - 12">,
            {/* comment */}";
            <div className="lg: col - span - 3">,
              {/* comment */}
              {featured_posts.length > 0 && (";
                <section className="mb - 16">;";
                  <h2 className="text - 3xl font - bold text - white mb - 8 flex items - center">;";
                    <TrendingUp className="w - 8 h - 8 mr - 3 text - blue - 400"  />;
                    Featured Articles;
                  </h2>;";
                  <div class_name = "grid grid - cols - 1 md: grid - cols - 2 gap - 8">,
                    {featured_posts.map ((post, index) => (
                      <motion.article;";
        <div className="&quot;container" mx - auto px - 4 py - 16 & quot;>&quot;
          <div className="&quot;grid" grid - cols - 1 lg: grid - cols - 4 gap - 12 & quot, >;
            {/* comment */}&quot;";
            <div className="&quot;lg:" col - span - 3&quot, >";
        <div class_name = "container mx - auto px - 4 py - 16">";
          <div className="grid grid - cols - 1 lg: grid - cols - 4 gap - 12">,
            {/* comment */}";
            <div className="lg: col - span - 3">,
              {/* comment */}
              {featured_posts.length > 0 && (&quot}";
                <section className="&quot;mb - 16 & quot;">&quot;
                  <h2 className="&quot;text - 3xl" font - bold text - white mb - 8 flex items - center & quot;>&quot;
                    <TrendingUp className="&quot;w - 8" h - 8 mr - 3 text - blue - 400 & quot;       />;
                    Featured Articles & quot;
                  </h2>";
                  <div className="&quot;grid" grid - cols - 1 md: grid - cols - 2 gap - 8&quot, >;
                    {featured_posts.map ((post, index) => (&quot}
                      <motion.article, ";
key = "{post.id}
                        initial="{{" opacity: 0, coordinate_y: 20 }}";
                        animate="{{" opacity: 1, coordinate_y: 0 }}";
                        transition="{{" duration: 0.8, delay: index * 0.1 }}">;
                        className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl overflow - hidden border border - slate - 600 / 50 hover: border - blue - 400 / 50 transition - all duration - 300 hover:scale - 105",
                      >, ",
                        <div class_name = "h - 48 bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 flex items - center justify - center">, ";
                          <div className="text - 6xl opacity - 20">, ";
                            {post.category === "AI & Machine Learning" && <Brain  />}";
                            {post.category === "Quantum Computing" && <Atom  />}";
                            {post.category === "Micro SaaS" && <Rocket  />}";
                            {post.category === "Cybersecurity" && <Shield  />}
                          </div>;
                        </div>;";
                        <div className="p - 6">;";
                          <div className="flex items - center gap - 4 mb - 3">;";
                            <span className="px - 3 py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs">;
                              {post.category}
                            </span>;";
                            <span className="text - yellow - 400 text - xs font - medium">Featured</span>;
                          </div>;";
                          <h3 class_name = "{"text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors">, ";
                            <Link to="{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>;";
                          <p className=""text - gray - 300" mb - 4 line - clamp - 3"}>{post.excerpt}</p>;";
                          <div className="flex items - center justify - between text - sm text - gray - 400">;";
                            <div className="flex items - center gap - 4">;";
                              <span className="flex items - center">;";
                                <User className="w - 4 h - 4 mr - 1"  />;
                                {post.author}
                              </span>;";
                              <span className="flex items - center">;";
                                <Calendar className="w - 4 h - 4 mr - 1"  />;
                                {new Date (post.date).toLocaleDateString ()}
                              </span>;
                            </div>;";
                            <span className="flex items - center">;";
                              <Clock className="w - 4 h - 4 mr - 1"  />;
                              {post.read_time}
                            </span>;
                          </div>;
                      </motion.article>;";
                        className="&quot;bg - gradient - to - br" from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl overflow - hidden border border - slate - 600 / 50 hover:border - blue - 400 / 50 transition - all duration - 300 hove, r: scale - 105 & quot;
                      >&quot;";
                        <div className="&quot;h - 48" bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 flex items - center justify - center & quot;>&quot,
                          <div className="&quot, text - 6xl" opacity - 20 & quot, >",
                            {post.category === &quot, AI & Machine Learning & quot, &&"}&quot <Brain  />}";
                            {post.category === &quot;Quantum Computing & quot; &&"}&quot <Atom  />}";
                            {post.category === &quot;Micro SaaS & quot; &&"}&quot <Rocket  />}";
                            {post.category === &quot;Cybersecurity & quot; &&"}&quot <Shield  />}
                          </div>;
                        </div>";
                        <div className="&quot;p - 6&quot;">&quot;
                          <div className="&quot;flex" items - center gap - 4 mb - 3&quot;>&quot;
                            <span className="&quot;px - 3" py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs & quot;>;
                              {post.category}&quot;
                            </span>";
                            <span className="&quot;text - yellow - 400" text - xs font - medium & quot;>Featured & quot </span>;
                          </div>";
                          <h3 className="&quot;text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors & quot, >&quot,
                            <Link to = "{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>";
                          <p className="&quot;text - gray - 300" mb - 4 line - clamp - 3&quot;>{post.excerpt}&quot </p>";
                          <div className="&quot;flex" items - center justify - between text - sm text - gray - 400 & quot;>&quot;
                            <div className="&quot;flex" items - center gap - 4&quot;>&quot;
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <User className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {post.author}&quot;
                              </span>";
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <Calendar className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {new Date (post.date).toLocaleDateString ()}&quot;
                              </span>;
                            </div>";
                            <span className="&quot;flex" items - center & quot;>&quot;
                              <Clock className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                              {post.read_time}&quot;
                            </span>;
                          </div>;
                      </motion.article>))}
                  </div>;
                </section>)}
              {/* comment */}
              <section>;";
                <h2 className="text - 3xl font - bold text - white mb - 8">Latest Articles</h2>;";
                <div className="space - y-8">;
                  {regular_posts.map ((post, index) => (
                    <motion.article>;
              <section>";
                <h2 className="&quot;text - 3xl" font - bold text - white mb - 8&quot;>Latest Articles & quot </h2>";
                <div className="&quot;space - y-8 & quot;">;
                  {regular_posts.map ((post, index) => (&quot}
                    <motion.article, ";
key = "{post.id}
                      initial="{{" opacity: 0, coordinate_y: 20 }}";
                      animate="{{" opacity: 1, coordinate_y: 0 }}";
                      transition="{{" duration: 0.8, delay: index * 0.1 }}";
                      className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - blue - 400 / 50 transition - all duration - 300">;
                    >, ";
                      <div className="flex flex - col md:flex - row gap - 6">, ",
                        <div class_name = "md:w - 48 h - 32 bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 rounded - lg flex items - center justify - center flex - shrink - 0">, ";
                          <div className="text - 4xl opacity - 20">, ";
                            {post.category === "AI & Machine Learning" && <Brain  />}";
                            {post.category === "Quantum Computing" && <Atom  />}";
                            {post.category === "Micro SaaS" && <Rocket  />}";
                            {post.category === "Cybersecurity" && <Shield  />}";
                            {post.category === "Digital Transformation" && <Globe  />}";
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                            {post.category === "Cloud Computing" && <Code  />}
                          </div>
                        </div>;"
                        <div className="flex-1">;"
                          <div className="flex items-center gap-4 mb-3">;"
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                              {post.category}
                            </span>
                          </div>;"
                          <h3 className = "{"text-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors">,"
                            <Link to="{"/blog/${post.id}"}">{post.title}</Link>
                          </h3>;"
                          <p className=""text-gray-300" mb-4"}>{post.excerpt}</p>;"
                          <div className="flex items-center justify-between">;"
                            <div className="flex items-center gap-4 text-sm text-gray-400">;"
                              <span className="flex items-center">;"
                                <User className="w-4 h-4 mr-1"  />
                                {post.author}
                              </span>;"
                              <span className="flex items-center">;"
                                <Calendar className="w-4 h-4 mr-1"  />
                                {new Date(post.date).toLocaleDateString()}
                              </span>;"
                              <span className="flex items-center">;"
                                <Clock className="{"w-4" h-4 mr-1"  />
                                {post.readTime}
                              </span>
                            </div>
                            <Link;"
                              to = "{"/blog/${post.id}"}
                              className=""flex" items-center text-blue-400 hover:text-blue-300 transition-colors"}>
                            >
                              Read More;"
                              <ArrowRight className="w-4 h-4 ml-1"  />
                            </Link>
                          </div>
                    </motion.article>;"
                      className="&quot;bg-gradient-to-br" from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50 transition-all duration-300&quot
                    >&quot,"
                      <div className="&quot;flex" flex-col md: flex-row gap-6&quot,>&quot
                        <div className="&quot,m,d: " w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;>&quot
                          <div className="&quot,text-4xl" opacity-20&quot,>"
                            {post.category === &quot,AI & Machine Learning&quot, &&"}&quot <Brain  />}"
                            {post.category === &quot;Quantum Computing&quot; &&"}&quot <Atom  />}"
                            {post.category === &quot;Micro SaaS&quot; &&"}&quot <Rocket  />}"
                            {post.category === &quot;Cybersecurity&quot; &&"}&quot <Shield  />}"
                            {post.category === &quot;Digital Transformation&quot; &&"}&quot <Globe  />}"
                            {post.category === &quot;Cloud Computing&quot; &&"}&quot <Code  />}
                          </div>
                        </div>"
                        <div className="&quot;flex-1&quot;">&quot
                          <div className="&quot;flex" items-center gap-4 mb-3&quot;>&quot
                            <span className="&quot;px-3" py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot;>
                              {post.category}&quot
                            </span>
                          </div>"
                          <h3 className="&quot;text-xl" font-bold text-white mb-3 hover: text-blue-400 transition-colors&quot,>&quot
                            <Link to = "{"/blog/${post.id}"}">{post.title}</Link>
                          </h3>"
                          <p className="&quot;text-gray-300" mb-4&quot;>{post.excerpt}&quot </p>"
                          <div className="&quot;flex" items-center justify-between&quot;>&quot
                            <div className="&quot;flex" items-center gap-4 text-sm text-gray-400&quot;>&quot
                              <span className="&quot;flex" items-center&quot;>&quot
                                <User className="&quot;w-4" h-4 mr-1&quot;       />
                                {post.author}&quot
                              </span>"
                              <span className="&quot;flex" items-center&quot;>&quot
                                <Calendar className="&quot;w-4" h-4 mr-1&quot;       />
                                {new Date(post.date).toLocaleDateString()}&quot
                              </span>"
                              <span className="&quot;flex" items-center&quot;>&quot
                                <Clock className="&quot;w-4" h-4 mr-1&quot;       />
                                {post.readTime}&quot
                              </span>
                            </div>"
                            <Link to = "{"/blog/${post.id}"}"">
                              className="&quot;flex" items-center text-blue-400 hover: text-blue-300 transition-colors&quot,"
                              className = ""flex" items-center text-blue-400 hover: text-blue-300 transition-colors">
                              Read More&quot,"
                              <ArrowRight className="&quot;w-4" h-4 ml-1&quot,       />&quot
                            </Link>
                          </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            </div>
            {/* comment */}"
            <div className="lg: col-span-1">;"
              <div className="sticky top-8 space-y-8">;"
            <div className="&quot,lg:col-span-1&quot,">&quot,"
              <div className = "&quot,sticky" top-8 space-y-8&quot,>
                {/* comment */}&quot;"
                <div className="&quot;bg-gradient-to-br" from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50&quot;>&quot
                  <h3 className="&quot;text-xl" font-bold text-white mb-4&quot;>Categories&quot </h3>"
                  <div className="&quot;space-y-3&quot;">
                    {categories.map((category, index) => (&quot}"
                      <Link key = "{category.name}"">
                        to="{"/blog/category/${category.name.toLowerCase().replace(/\s+/g," &apos;-&apos)}"}"
                        className="&quot;flex" items-center justify-between p-3 rounded-lg hover: bg-slate-700/50 transition-colors group&quot>
                      >&quot;&apos;"
                        <div className="&quot,flex" items-center&quot,>&quot,"
                          <category.icon className="&quot;w-5" h-5 text-blue-400 mr-3 group-hover: text-blue-300&quot, />&quot,"
                          <span className="&quot,text-gray-300" group-hove,r: text-white&quot,>{category.name}&quot </span>"
            <div className = "lg: col-span-1">"
              <div className="sticky top-8 space-y-8">
                {/* comment */}"
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;"
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>;"
                  <div className="{"space-y-3"">
                    {categories.map((category, index) => (
                      <Link;"
                        key = "{category.name}
                        to="{"/blog/category/${category.name.toLowerCase().replace(/\s+/g," "-")}"}"
                        className=""flex" items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"}>
                      >;"
                        <div className="flex items-center">;"
                          <category.icon className = "w-5 h-5 text-blue-400 mr-3 group-hover: text-blue-300" />,"
                          <span className="text-gray-300 group-hover:text-white">{category.name}</span>
                        </div>;"
                        <span className="{"text-sm" text-gray-400">{category.count}</span>
                      </Link>;"
                        to = "{"/blog/category/${category.name.toLowerCase().replace(/\s+/g," "-')}"}"
                        className=""flex" items-center justify-between p-3 rounded-lg hover: bg-slate-700/50 transition-colors group"}
                      >"
                        <div className="flex items-center">"
                          <category.icon className="w-5 h-5 text-blue-400 mr-3 group-hover: text-blue-300" />"
                          <span className="text-gray-300 group-hover:text-white">{category.name}</span>
                        </div>"
                        <span className="&quot;text-sm" text-gray-400&quot;>{category.count}&quot </span>
                      </Link>
                    ))}
                  </div>
                {/* comment */}"
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">;"
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>;"
                  <p className="text-gray-300 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>;"
                  <div className="space-y-3">
                    <input;"
                      type="email";"
                      placeholder="Enter your email";"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500">
                   />;"
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
    </>"
                <div className="&quot;bg-gradient-to-br" from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30&quot;>&quot
                  <h3 className="&quot;text-xl" font-bold text-white mb-4&quot;>Stay Updated&quot </h3>"
                  <p className="&quot,text-gray-300" mb-4&quot,>
                    Get the latest technology insights delivered to your inbox.&quot
                  </p>"
                  <div className="&quot;space-y-3&quot;">&quot
                    <input type="&quot;email&quot
                      placeholder="&quot;Enter" your email&quot;"
                      className="&quot;w-full" px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500&quot,>
                   />&quot,"
                    <button className = "&quot,w-full" px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r: to-purple-700 transition-all duration-200&quot,>
                      Subscribe&quot,"
                      type="email
                      placeholder="Enter your email
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500" />"
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
</>
  )
  )})))))))))
}
                      Subscribe;
                    </button>;
                  </div>;
    </>";
                <divclassName="&quotbg-gradient-to-br" from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30&quot>&quot;
                  <h3className="&quottext-xl" font-bold text-white mb-4&quot>Stay Updated&quot;</h3>";
                  <p className="&quot,text-gray-300" mb-4&quot,>;
                    Get the latest technology insights delivered to your inbox.&quot,;
                  </p>",;
                  <divclassName="&quotspace-y-3&quot">&quot,;
                    <inputtype="&quotemail&quot
                      placeholder="&quotEnter" your email&quot"
                      className="&quotw-full" px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500&quot,>;
                   />&quot,";
                    <button className = "&quot,w-full" px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r: to-purple-700 transition-all duration-200&quot,>;
                      Subscribe&quot,";
                      type="email;
                      placeholder="Enter your email;
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500" />";
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">;
                      Subscribe,;
                    </button>;
                  </div>;
</>;
  ),;
  )})))))))));
}

                <div className="&quot;bg - gradient - to - br" from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 6 border border - blue - 400 / 30 & quot;>&quot;
                  <h3 className="&quot;text - xl" font - bold text - white mb - 4&quot;>Stay Updated & quot </h3>";
                  <p className="&quot, text - gray - 300" mb - 4&quot, >;
                    Get the latest technology insights delivered to your inbox.&quot,
                  </p>",
                  <div className="&quot;space - y-3 & quot;">&quot,
                    <input type="&quot;email & quot;
                      placeholder="&quot;Enter" your email & quot;";
                      className="&quot;w - full" px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - blue - 500 & quot, >;
                  />&quot, ";
                    <button class_name = "&quot, w - full" px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hove, r: to - purple - 700 transition - all duration - 200 & quot, >;
                      Subscribe & quot, ";
                      type="email;
                      placeholder="Enter your email;
                      className="w - full px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - blue - 500" />";
                    <button className="w - full px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 200">;
                      Subscribe,
                    </button>;
                  </div>;
</>),
  )})))))))));
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                variant="outline"
                onClick={() => {
                  setSearchQuery(""),
                  setSelectedCategory("All Categories")
          {!isLoading && filteredPosts.length === 0 && (;
            <div className="text-center py-16">;
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>;
              <Button;
                variant="outline";
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Clear all filters;
              </Button>;
            </div>;
          )}
        </div>;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
