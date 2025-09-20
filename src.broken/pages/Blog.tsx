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

export default function Page() {
,
    { id: 'ai', name: 'AI & Machine Learning', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'quantum', name: 'Quantum Computing', count: 2 },
    { id: 'saas', name: 'Micro SaaS', count: 2 },
    { id: 'business', name: 'Business Insights', count: 1 }
  ],

  const blogPosts: BlogPost[] = [{
      id: '1',
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt:
        "Explore the latest developments in AI technology and how they're reshaping enterprise operations.",
      content: 'Full article content here...',
      author: 'Dr.Sarah Johnson',
      date: '2024 - 01 - 15',
      category: 'ai',
      tags: ['AIEnterprise', 'TechnologyInnovation'],
      readTime: '5 min read',
      views: 1247,
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt:
        "A comprehensive look at quantum computing's current state and practical applications.",
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024 - 01 - 10',
      category: 'quantum',
      tags: ['Quantum ComputingTechnology', 'Research'],
      readTime: '8 min read',
      views: 892,
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt:
        'How AI is both creating new security challenges and providing innovative solutions.',
      content: 'Full article content here...',
      author: 'Emily Rodriguez',
      date: '2024 - 01 - 08',
      category: 'cybersecurity',
      tags: ['CybersecurityAI', 'Security'],
      readTime: '6 min read',
      views: 756,
      featured: false
    },
    {
      id: '4',
      title: 'Building Successful Micro SaaS Products: Lessons Learned',
      excerpt:
        'Key insights from building and scaling micro SaaS solutions for modern businesses.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2024 - 01 - 05',
      category: 'saas',
      tags: ['SaaSBusiness', 'Startup'],
      readTime: '7 min read',
      views: 634,
      featured: false
    }
  ],

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
        post.excerpt.toLowerCase () .includes(searchTerm.toLowerCase () ) ||
        post.tags.some(tag =>
          tag.toLowerCase () .includes(searchTerm.toLowerCase () ) ) ,

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory,

      return matchesSearch && matchesCategory,
    }) ,
  }, [searchTerm, selectedCategory]) ,

  const formatDate = (dateString: string) => {
    return new Date(dateString) .toLocaleDateString('en - US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) ,
  },

  return (<div  className="min - h-screen bg-gradient - to - br from - blue - 900 via - purple - 900 to - indigo -900">
      {/* Header */}
      <section className="pt - 32 pb - 16 px-4">
        <div  className="max - w-7xl mx - auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font - bold text-white mb-6"
          >
            Zion Tech Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray - 300 mb-8 max - w-3xl mx -auto"
          >
            Insights, trends, and expert analysis on AI, cybersecurity, quantum
            computing, and business technology.</motion.p>

    fetchPosts(),
  }, [query]),

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory,

    return matchesCategory,
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
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
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
                        target.src = "/images/blog-placeholder.svg",
                      }}
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPost.publishedDate} • {featuredPost.readTime}
                      </p>
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
            ),
          })()}
        
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" aria-label="Filter by category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category} className="text-white">
                      {category}
                    </SelectItem>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  asChild
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      className="object-cover w-full h-full hover: scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement,
                        target.src = "/images/blog-placeholder.svg"
                      }}
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
                    <div className="flex items-center">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement,
                          target.src = "/images/blog-placeholder.svg",
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
                  setSearchQuery(""),
                  setSelectedCategory("All Categories"),
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      {filteredPosts.filter(post => post.featured) .length > 0 && (<section className="py-16 px-4">
          <div  className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              Featured Articles
            </motion.h2>

            <div  className="grid grid - cols - 1 lg:grid - cols - 2 gap-8">
              {filteredPosts
                .filter(post => post.featured) .map((post, index) => (<motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate - 800 / 50 backdrop - blur - sm rounded-xl overflow-hidden border border-slate - 700 / 50 hover:border-slate - 600 / 50 transition - all duration -300 group"
                  >
                    <div  className="aspect - video bg-gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 flex items - center justify -center">
                      <BookOpen className="w-16 h-16 text-blue - 400 opacity -60" />
                    </div>
                    <div  className="p -6">
                      <div  className="flex items - center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue - 500 / 20 text-blue - 400 text-xs font -medium rounded">
                          {categories.find(c => c.id === post.category) ?.name}
                        </span>
                        <span className="text-slate - 400 text-sm">•</span>
                        <span className="text-slate - 400 text-sm">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font - bold text-white mb-3 group - hover:text-blue - 400 transition -colors">
                        {post.title}
                      </h3>

                      <p className="text-slate - 300 mb-4 line - clamp -3">
                        {post.excerpt}
                      </p>

                      <div  className="flex items - center justify -between">
                        <div  className="flex items - center gap-4 text-sm text-slate -400">
                          <span className="flex items - center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items - center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date) }
                          </span>
                        </div>

                        <div  className="flex items - center gap-2 text-slate - 400 text-sm">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                      </div>

                      <div  className="mt-4 flex flex - wrap gap-2">
                        {post.tags.slice(0, 3) .map(tag => (<span
                            key={tag}
                            className="px-2 py-1 bg-slate - 700 / 50 text-slate - 300 text-xs rounded"
                          >
                            {tag}
                          </span>) ) }
                      </div>

                      <button     className="text-zion - cyan hover:text-zion - cyan - light transition - colors group - hover:translate - x-1">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.article>) ) }
            </div>
          </div>
        </section>) }

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div  className="max - w-7xl mx -auto">
          <div  className="grid grid - cols - 1 lg:grid - cols - 4 gap-8">
            {/* Sidebar */}
            <div  className="lg:col - span -1">
              <div  className="sticky top - 24 space - y-6">
                {/* Categories */}
                <div  className="bg-zion - blue - dark border border-zion - purple / 20 rounded-lg p -6">
                  <h3 className="text-lg font - semibold text-white mb-4 flex items - center gap-2">
                    <Filter className="w-5 h-5 text-zion -cyan" />
                    Categories
                  </h3>
                  <div  className="space - y-2">
                    {categories.map(category => (<button     key={category.id}
                        onClick={ () => setSelectedCategory(category.id) }
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition - colors flex items - center justify - between ${selectedCategory === category.id
                            ? 'bg-zion - cyan text-zion - blue'
                            : 'text-gray - 300 hover:bg-zion - purple / 20'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs opacity -75"> ({category.count}) </span>
                      </button>) ) }
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div  className="lg:col - span -3">
              <div  className="grid grid - cols - 1 md:grid - cols - 2 gap-6">
                {filteredPosts
                  .filter(post => !post.featured) .map((post, index) => (<motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate - 800 / 30 backdrop - blur - sm rounded-lg overflow-hidden border border-slate - 700 / 30 hover:border-slate - 600 / 50 transition - all duration -300"
                    >
                      <div  className="aspect - video bg-gradient - to - br from - blue - 500 / 10 to - purple - 500 / 10 flex items - center justify -center">
                        <BookOpen className="w-12 h-12 text-blue - 400 opacity -40" />
                      </div>
                      <div  className="p -4">
                        <div  className="flex items - center gap-2 mb-2">
                          <span className="px-2 py-1 bg-blue - 500 / 20 text-blue - 400 text-xs font -medium rounded">
                            {categories.find(c => c.id === post.category) ?.name}
                          </span>
                          <span className="text-slate - 400 text-xs">•</span>
                          <span className="text-slate - 400 text-xs">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font - semibold text-white mb-2 line - clamp -2">
                          {post.title}
                        </h3>

                        <p className="text-slate - 300 text-sm mb-3 line - clamp -2">
                          {post.excerpt}
                        </p>

                        <div  className="flex items - center justify - between text-xs text-slate -400">
                          <span>{post.author}</span>
                          <span>{formatDate(post.date) }</span>
                        </div>
                      </div>
                    </motion.article>) ) }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div  className="max - w-4xl mx - auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 backdrop - blur - sm rounded-2xl p - 8 border border-white / 10"
          >
            <h2 className="text-3xl font - bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray - 300 mb-6">
              Get the latest articles, industry trends, and expert analysis
              delivered to your inbox.</p>
            <div  className="flex flex - col sm: flex - row gap-4 max - w-md mx -auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex - 1 px-4 py-3 bg-white / 10 border border-white / 20 rounded-lg text-white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue -500"
              />
              <button     className="px-6 py-3 bg-blue - 600 hover:bg-blue - 700 text-white font - semibold rounded-lg transition - colors flex items - center justify - center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) 
},

