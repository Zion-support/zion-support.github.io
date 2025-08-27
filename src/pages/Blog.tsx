import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: 3 },
    { id: 'development', name: 'Development', icon: Code, count: 2 }
  ];
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
      excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches to understanding artificial intelligence.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Research', 'Innovation', '2025'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises in the Digital Age',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats and data breaches.',
      author: 'Emily Watson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Zero-Trust', 'Security', 'Enterprise', 'Cybersecurity'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1923,
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: 'Quantum Computing Revolution: What Businesses Need to Know',
      excerpt: 'Discover how quantum computing is transforming industries and what steps your business should take to prepare for the quantum future.',
      author: 'Dr. James Kim',
      authorRole: 'Chief Research Officer',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'emerging-tech',
      tags: ['Quantum Computing', 'Business Strategy', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1654,
      likes: 72,
      comments: 18
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale automatically and handle modern workloads.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud-Native', 'Development', 'Scalability', 'Microservices'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1432,
      likes: 65,
      comments: 12
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      excerpt: 'See how artificial intelligence is revolutionizing business intelligence and helping companies make data-driven decisions faster than ever.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Data Science'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1876,
      likes: 94,
      comments: 21
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Accelerating Software Delivery in 2025',
      excerpt: 'Learn the latest DevOps practices and tools that are helping development teams deliver software faster and more reliably.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'cloud',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Software Delivery'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1234,
      likes: 58,
      comments: 9
    }
  ];
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zion Tech <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, updates, and thought leadership from our team of technology experts. 
              Stay ahead of the curve with the latest in AI, cybersecurity, and emerging tech.
            </motion.p>
            {/* Search and Filter */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-zion-cyan" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Featured</span> Article
              </h2>
            </motion.div>
            <motion.div
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                      <p className="text-zion-slate-light">Featured Image</p>
                    </div>
                    {/* Featured Post Section */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="aspect-video overflow-hidden rounded-lg bg-zion-blue-dark">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Search className="w-8 h-8 text-zion-cyan" />
                                            </div>
                                            <p className="text-zion-slate-light">Featured Image</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                                        {featuredPosts[0].category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {featuredPosts[0].title}
                                    </h3>
                                    <p className="text-zion-slate-light mb-6">
                                        {featuredPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3">
                                            <User className="w-5 h-5 text-zion-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{featuredPosts[0].author}</p>
                                            <div className="flex items-center text-sm text-zion-slate-light">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].publishedDate}
                                                <span className="mx-2">•</span>
                                                <Clock className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">
                                        <Link to={`/blog/${featuredPosts[0].slug}`}>
                                            Read Article
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Search and Filter */}
                    <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                                />
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
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
                    </div>
                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300">
                                    <div className="aspect-[16/9] relative overflow-hidden bg-zion-blue-dark">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <Search className="w-6 h-6 text-zion-cyan" />
                                                </div>
                                                <p className="text-zion-slate-light text-sm">Blog Image</p>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-xs text-zion-slate-light">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {post.publishedDate}
                                                <span className="mx-1">•</span>
                                                <Clock className="w-3 h-3 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                                        <p className="text-zion-slate-light mb-4 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-2">
                                                <User className="w-4 h-4 text-zion-cyan" />
                                            </div>
                                            <span className="text-sm text-white">{post.author}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button variant="link" className="text-zion-cyan p-0 hover:text-zion-purple" asChild>
                                            <Link to={`/blog/${post.slug}`}>
                                                Read More →
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-zion-slate-light mb-6">
                                Try adjusting your search or filter criteria
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All Categories");
                                }}
                                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Blog;
