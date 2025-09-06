export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts }),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("All Categories"),
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce(searchQuery, 300),
  const [isLoading, setIsLoading] = useState(false),
  const router = useRouter(),

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
        setPosts(data)
      } catch (err) {
        logErrorToProduction ('Failed to fetch blog posts', { data: err });
      } finally {
        setIsLoading (false);
      }
  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      post.category === selectedCategory
    return matchesCategory
  })
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured)
  logInfo('BlogPage filteredPosts:', { data: filteredPosts })
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
  
  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured),

  logInfo('BlogPage filteredPosts:', { data: filteredPosts }),
  
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
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger
                  className='bg-zion-blue border border-zion-blue-light text-white'
                  aria-label='Filter by category'
                >
                  <SelectValue placeholder='Select Category' />
                </SelectTrigger>
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                  {CATEGORIES.map(category => (
                    <SelectItem
                      key={category}
                      value={category}
                      className='text-white'
                    >                      {category}
                    </SelectItem>
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
                  ))}
                </SelectContent>;
              </Select>;
            </div>;
            {isLoading && (;
              <div className='text-center py-4 text-white'>;
                Loading articles...;
              </div>;
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement,
                          target.src = "/images/blog-placeholder.svg"
                        }}
                        <img
                          src={post && post.author.avatarUrl}
                          alt={post && post.author.name}
                          className='w-8 h-8 rounded-full mr-2'
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
                        />
                        <span className='text-sm text-white'>
                          {post.author.name}
                        </span>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p - 6 pt - 0'>;
                      <span className='text - zion - cyan group - hover:text - zion - purple'>;
                      </span>;
                      <div className="text-xs text-zion-slate-light">;
                        {post.publishedDate} • {post.readTime}
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3">;
                      {post.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 line-clamp-3">;
                      {post.excerpt}
                    </p>;
                    <div className="flex items-center">;
                      <img;
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2";
                        onError={(e) => {;
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "/images/blog-placeholder.svg";
                        }}
                      />;
                      <span className="text-sm text-white">{post.author.name}</span>;
                    </div>;
                  </CardContent>;
                  <CardFooter className="p-6 pt-0">;
                    <span className="text-zion-cyan group-hover:text-zion-purple">Read More →</span>;
                  </CardFooter>;
                  </Link>;
              ))}
            </div>;
          ) : null}
          {/* No Results Message - Show only if not loading and no posts */}
}
  const regular_posts = blog_posts.filter (post => !post.featured);
}
  return (
                    key = "{category.name}
                    className="px - 4 py - 2 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - sm">;
                  >;
                    {category.name}
      id: 2,
      title: &quot,Quantum Computing Breakthroug,h: What It Means for Your Business&quot,
      excerpt: &quot,Understanding the latest quantum computing advances and their practical applications in solving complex business problems.&quot,
      author: &quot,Prof. Michael Rodriguez&quot,
      date: &quot,2025-01-12&quot,
      readTime: &quot,12 min read&quot,;
      category: &quot,Quantum Computing&quot;
      tags: [&quot,Quantum&quot, &quot;Computing&quot, &quot;Innovation&quot],
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
              >;
                Clear all filters;
              </Button>;
            </div>;
          )}
        </div>;
      </div>;
    </>;
  );
