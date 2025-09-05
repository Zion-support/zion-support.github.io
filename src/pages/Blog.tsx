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
import { BLOGPOSTS } from "@/data/blog-posts",import { Search } from 'lucide-react'
import { fetchWithRetry } from '@/utils/fetchWithRetry',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',

// Categories for filtering,
const CATEGORIES = [
import Link from "next/link";

// Categories for filtering,
const CATEGORIES = [
  "All Categories",
  "Trends",
  "Marketing",
  "Sustainability",
  "Ethics",
  "Recruitment",
  "Infrastructure"
],
export interface BlogProps {
  posts?: BlogPost[]
}

export default function Blog({ posts: initialPosts = BLOGPOSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOGPOSTS:', { data: initialPosts }),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("All Categories"),
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce(searchQuery, 300),
  const [isLoading, setIsLoading] = useState(false),
  const router = useRouter(),  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]);
  const query = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Reset state when navigating away to avoid cross-page leakage,
useEffect(() => {
    return () => {
      setSearchQuery(""),
      setSelectedCategory("All Categories"),
      setPosts([...initialPosts])
    }
  }, [router.asPath, initialPosts])  }, [router.asPath, initialPosts]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosts(prev => [...prev, generateRandomBlogPost()]),
  //   }, 120000), // every 2 minutes
  //   return () => clearInterval(interval),
  // }, []),

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true),
      try {
        const data: BlogPost[] = await fetchWithRetry(
          `/api/blog?query=${encodeURIComponent(query)}`
        ),
        setPosts(data)
      } catch (err) {
        logErrorToProduction('Failed to fetch blog posts', { data: err })
      } finally {
        setIsLoading(false)
      }
    },
    fetchPosts()
  }, [query]),

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory,
    return matchesCategory
  }),
  
  // Get featured posts,
const featuredPosts = posts.filter(post => post.isFeatured),

  logInfo('BlogPage filteredPosts:', { data: filteredPosts }),
  const filteredPosts = posts.filter(post => {const matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory;

    return matchesCategory});
  
  // Get featured posts,
const featuredPosts = posts.filter(post => post.isFeatured);

  logInfo('BlogPage filteredPosts:', {data: filteredPosts});
  
  return (_<>
      <SEO,
title=&quot;Blog - Latest from Zion Tech Marketplace&quot;
        description=&quot;Read expert insights and news on the Zion Tech Marketplace blog. Stay informed about trends, tips, and stories that help you succeed. Sign up for updates and never miss a breakthrough.&quot;
        keywords=&quot;AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT&quot;
        canonical=&quot;https://app.ziontechgroup.com/blog&quot;      />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <h1>Blog</h1>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (() => {
            const featuredPost = featuredPosts[0],
            if (!featuredPost) return null,
            
            return (
            <div className=&quot;mb-16&quot;>
              <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Featured Article</h2>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                <div className=&quot;aspect-video overflow-hidden rounded-lg&quot;>
                  <img,
src={featuredPost.featuredImage}
                    alt={featuredPost.featuredImageAlt || featuredPost.title}
                    className="object-cover w-full h-full hover: scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement,
                      target.src = "/images/blog-placeholder.svg"                    }}
                  />
                </div>
                <div className=&quot;flex flex-col justify-center&quot;>
                  <span className=&quot;text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2&quot;>
                    {featuredPost.category}
                  </span>
                  <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>
                    {featuredPost.title}
                  </h3>
                  <p className=&quot;text-zion-slate-light mb-6&quot;>
                    {featuredPost.excerpt}
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {_/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (() => {
            const featuredPost = featuredPosts[0];
            if (!featuredPost) return null;
            
            return (_<div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img,
src={featuredPost.featuredImage}
                    alt={featuredPost.featuredImageAlt || featuredPost.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={_(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "/images/blog-placeholder.svg"}}
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
                  <div className=&quot;flex items-center mb-6&quot;>
                    <img,
src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      className=&quot;w-10 h-10 rounded-full mr-3&quot;
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement,
                        target.src = "/images/blog-placeholder.svg"                      }}
                    />
                    <div>
                      <p className=&quot;text-white font-medium&quot;>{featuredPost.author.name}</p>
                      <p className=&quot;text-sm text-zion-slate-light&quot;>
                        {featuredPost.publishedDate} • {featuredPost.readTime}
                      src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={_(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg"}}
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPost.publishedDate} • {featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                  <Button,
asChild
                    className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit&quot;
                  >
                    <Link href={_`/blog/${featuredPost.slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            )
          })()}
        
          {/* Filters and Search */}
          <div className=&quot;bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot; />
                <Input,
type=&quot;text&quot;
                  placeholder=&quot;Search articles...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white&quot;
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot; aria-label=&quot;Filter by category&quot;>
                  <SelectValue placeholder=&quot;Select Category&quot; />
                </SelectTrigger>
                <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category} className=&quot;text-white&quot;>
                      {category}                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {isLoading && (
              <div className=&quot;text-center py-4 text-white&quot;>                Loading articles...
              </div>
            )}
          </div>

          {/* Blog Posts Grid */}
          {!isLoading && filteredPosts.length > 0 ? (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {filteredPosts.map((post) => (
                <Card                  key={post.id}
                  asChild,
className=&quot;bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg&quot;
                >
                  <Link href={`/blog/${post.slug}`} className=&quot;block group&quot;>
                  <div className=&quot;aspect-[16/9] relative overflow-hidden&quot;>
                    <img,
src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      className="object-cover w-full h-full hover: scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement,
                        target.src = "/images/blog-placeholder.svg"                      }}
                    />
                  </div>
                  <CardContent className=&quot;p-6&quot;>
                    <div className=&quot;flex items-center justify-between mb-3&quot;>
                      <span className=&quot;text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full&quot;>
                        {post.category}
                      </span>
                      <div className=&quot;text-xs text-zion-slate-light&quot;>
                        {post.publishedDate} • {post.readTime}
                      </div>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>
                      {post.title}
                    </h3>
                    <p className=&quot;text-zion-slate-light mb-4 line-clamp-3&quot;>
                      {post.excerpt}
                  <Link href={_`/blog/${post.slug}`} className="block group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img,
src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={_(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = "/images/blog-placeholder.svg"}}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="text-xs text-zion-slate-light">
                        {post.publishedDate} • {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className=&quot;flex items-center&quot;>
                      <img,
src={post.author.avatarUrl}
                        alt={post.author.name}
                        className=&quot;w-8 h-8 rounded-full mr-2&quot;
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement,
                          target.src = "/images/blog-placeholder.svg"                        }}
                      />
                      <span className=&quot;text-sm text-white&quot;>{post.author.name}</span>
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={_(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "/images/blog-placeholder.svg"}}
                      />
                      <span className="text-sm text-white">{post.author.name}</span>
                    </div>
                  </CardContent>
                  <CardFooter className=&quot;p-6 pt-0&quot;>
                    <span className=&quot;text-zion-cyan group-hover:text-zion-purple&quot;>Read More →</span>
                  </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          ) : null}

          {/* No Results Message - Show only if not loading and no posts */}
          {!isLoading && filteredPosts.length === 0 && (
            <div className=&quot;text-center py-16&quot;>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>No articles found</h3>
              <p className=&quot;text-zion-slate-light mb-6&quot;>Try adjusting your search or filter criteria</p>              <Button,
variant=&quot;outline&quot;
                onClick={() => {
                  setSearchQuery(""),
                  setSelectedCategory("All Categories")                }}
                  setSearchQuery("");
                  setSelectedCategory("All Categories")}}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
