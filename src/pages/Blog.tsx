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
import { Search } from 'lucide-react'
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
// Categories for filtering
const CATEGORIES = $2;
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

export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo($2);
  const [searchQuery, setSearchQuery] = useState($2);
  const [selectedCategory, setSelectedCategory] = useState($2);
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce($2);
  const [isLoading, setIsLoading] = useState($2);
  const router = useRouter($2);
  // Reset state when navigating away to avoid cross-page leakage
  useEffect(() => {
    return () => {
      setSearchQuery($2);
      setSelectedCategory($2);
      setPosts([...initialPosts])
    }
  }, [router.asPath, initialPosts]),

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosts(prev => [...prev, generateRandomBlogPost()]),
  //   }, 120000), // every 2 minutes
  //   return () => clearInterval($2);
  // }, []),

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading($2);
      try {
        const data: BlogPost[] = await fetchWithRetry(
          `/api/blog?query = $2;
        setPosts(data)
      } catch (err) {
        logErrorToProduction('Failed to fetch blog posts', { data: err})
      } finally {
        setIsLoading(false)
      }
    },

    fetchPosts()
  }, [query]),

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter($2);
  // Get featured posts
  const featuredPosts = posts.filter($2);
  logInfo($2);
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
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (() => {
            const featuredPost = $2;
            if (!featuredPost) return null,
            
            return (
            <div className = $2;
                      target.src = $2;
                        target.src = $2;
                        target.src = $2;
                          target.src = "/images/blog-placeholder.svg"
                        }}
                      />
                      <span className="text-sm text-white">{post.author.name}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <span className="text-zion-cyan group-hover:text-zion-purple">Read More →</span>
                  </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          ) : null}

          {/* No Results Message - Show only if not loading and no posts */}
          {!isLoading && filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery($2);
                  setSelectedCategory("All Categories")
                }}
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
