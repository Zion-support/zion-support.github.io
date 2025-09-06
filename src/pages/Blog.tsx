<<<<<<< HEAD
// Categories for filtering

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

export default function Blog({ posts: initialPosts = BLOG_POSTS }: BlogProps) {
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts }),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("All Categories"),
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce(searchQuery, 300),
  const [isLoading, setIsLoading] = useState(false),
  const router = useRouter(),


  // Reset state when navigating away to avoid cross-page leakage
  useEffect(() => {
    return () => {
      setSearchQuery('')
      setSelectedCategory('All Categories')
      setPosts([...initialPosts])
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

  // Reset state when navigating away to avoid cross-page leakage
  useEffect(() => {
    return () => {
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
  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory = null;
      selectedCategory === 'All Categories' ||
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
                  asChild
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className='block group'>
                    <div className='aspect-[16/9] relative overflow-hidden'>
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt |post.title}
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = '/images/blog-placeholder.svg' }}
                  <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit'
                      >
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read Article
                        </Link>
                      </Button>
          
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
                    </div>
                  </div>
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement,
                          target.src = "/images/blog-placeholder.svg"
                        }}

                      />
                    </div>
                    <CardContent className='p-6'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full'>
                          {post.category}
                        </span>
                        <div className='text-xs text-zion-slate-light'>
                          {post.publishedDate} • {post.readTime}
                        </div>
                      </div>
                      <h3 className='text-xl font-bold text-white mb-3'>
                        {post.title}
                      </h3>
                      <p className='text-zion-slate-light mb-4 line-clamp-3'>
                        {post.excerpt}

                        src={post && post.featuredImage}
                        alt={post && post.featuredImageAlt || post && post.title}
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {;
                          const target = e && e.currentTarget as HTMLImageElement;
                          target && target.src = '/images/blog-placeholder && placeholder.svg';                        }}
                      />;
                    </div>;
                    <CardContent className='p-6'>;
                      <div className='flex items-center justify-between mb-3'>;
                        <span className='text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full'>;
                          {post && post.category}
                        </span>;
                        <div className='text-xs text-zion-slate-light'>;
                          {post && post.publishedDate} • {post && post.readTime}
                        </div>;
                      </div>;
                      <h3 className='text-xl font-bold text-white mb-3'>;
                        {post && post.title}
                      </h3>;
                      <p className='text-zion-slate-light mb-4 line-clamp-3'>;
                        {post && post.excerpt}
                      </p>;
                      <div className='flex items-center'>;

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
                    </CardFooter>;
                  </Link>;


                  <Button 
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"
                  >
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {isLoading && (
              <div className="text-center py-4 text-white">
                Loading articles...
              </div>
            )}
          </div>
          {/* Blog Posts Grid */}
          {!isLoading && filteredPosts.length > 0 ? (
                  asChild
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"
                >
                      />
                    </div>
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
                  setSearchQuery('');
                  setSelectedCategory('All Categories');                }}
                className='border-zion-purple text-zion-purple hover:bg-zion-purple/10';
              >;
                Clear all filters;
              </Button>;
            </div>;
          )}
        </div>;
      </div>;
    </>;
  );
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
import { BLOG_POSTS } from "@/data/blog-posts";
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
const CATEGORIES = null;
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
  );
}, [query]);
//Filter blog posts based on selected category only. //Search filtering is handled server-side. return matchesCategory;
});
//Get featured posts const featuredPosts = posts.filter (post => post.isFeatured);';
logInfo ('BlogPage filteredPosts:', {;
  data: filteredPosts ;
});";
min-h-screen bg-zion-blue pt-12 pb-20 px-4"> <h1>Blog</h1> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI & Tech Insights</GradientHeading> ;
}";
}/> </div> <div className=" flex flex-col justify-center"> <span className=" text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2"> {;
  featuredPost.category ";
}</span> <h3 className=" text-3xl font-bold text-white mb-4"> {;
  featuredPost.title ";
}</h3> <p className=" text-zion-slate-light mb-6"> {;
  featuredPost.excerpt ";
}flex items-center mb-6" > <img ;
}";
}/> <div> <p className="text-white font-medium" > {;
  featuredPost.author.name ";
}</p> <p className="text-sm text-zion-slate-light" > {;
  featuredPost.publishedDate ;
}• {;
  featuredPost.readTime ";
}bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"> <Link href= {;
  `/blog/$ {;
  featuredPost.slug ;
}` ;
}> Read Article </Link> </Button> </div> </div> </div>) ;
}) () ;
}</SelectItem>) ) ;
}</SelectContent> </Select> </div> Loading articles... </div>) ;
}</div> key= {;
  post.id ";
}asChild className=" bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"> ;
}";
}/> </div> <CardContent className=" p-6"> <div className=" flex items-center justify-between mb-3"> <span className=" text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full"> {;
  post.category ";
}</span> <div className=" text-xs text-zion-slate-light"> {;
  post.publishedDate ;
}• {;
  post.readTime ";
}</div> </div> <h3 className=" text-xl font-bold text-white mb-3"> {;
  post.title ";
}</h3> <p className=" text-zion-slate-light mb-4 line-clamp-3"> {;
  post.excerpt ";
}flex items-center" > <img ;
}";
}/> <span className="text-sm text-white" > {;
  post.author.name ";
}</span> p-6 pt-0"> <span className=" text-zion-cyan group-hover:text-zion-purple">Read More →</span> </CardFooter> </Link> </Card>) ) ;
}</div>) : null ";
}<Button variant=" outline" onClick={;
  () => {;
  ;


}</div> </div> </>) ;
}'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
