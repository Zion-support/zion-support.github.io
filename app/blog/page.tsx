import { ArrowRight, Calendar, User, Clock, Tag, Search, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
      content: "Artificial Intelligence continues to revolutionize how businesses operate, with 2024 bringing unprecedented advances in machine learning, natural language processing, and automation...",
      author: "Dr. Sarah Chen",
      authorRole: "Chief AI Officer",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Technology", "Future"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS: The New Era of Software Solutions",
      excerpt: "Discover how micro SAAS solutions are changing the software landscape and benefiting small to medium businesses.",
      content: "Micro SAAS solutions are revolutionizing the software industry by offering specialized, focused tools that address specific business needs...",
      author: "Michael Rodriguez",
      authorRole: "Product Manager",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      category: "Micro SAAS",
      tags: ["Micro SAAS", "Software", "Business Tools", "Innovation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Transforming Connectivity and Business Operations",
      excerpt: "Learn how 5G technology is enabling new possibilities for businesses and creating opportunities for innovation.",
      content: "5G technology represents a quantum leap in connectivity, offering ultra-low latency, massive device connectivity, and unprecedented speeds...",
      author: "Jennifer Liu",
      authorRole: "5G Solutions Architect",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      category: "5G Technology",
      tags: ["5G", "Connectivity", "IoT", "Innovation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital age.",
      content: "As businesses become increasingly digital, cybersecurity has become a critical concern. Here are the essential strategies every business should implement...",
      author: "David Thompson",
      authorRole: "Cybersecurity Expert",
      publishDate: "2024-01-08",
      readTime: "9 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Security", "Best Practices", "Protection"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Businesses",
      excerpt: "Everything you need to know about migrating your business to the cloud successfully and securely.",
      content: "Cloud migration is a complex process that requires careful planning and execution. This comprehensive guide covers everything from strategy to implementation...",
      author: "Amanda Foster",
      authorRole: "Cloud Solutions Architect",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "Strategy", "Implementation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of AI-Powered Customer Service",
      excerpt: "How AI is revolutionizing customer service and improving customer experiences across industries.",
      content: "AI-powered customer service is transforming how businesses interact with their customers, providing faster, more accurate, and personalized support...",
      author: "Robert Kim",
      authorRole: "Customer Experience Director",
      publishDate: "2024-01-03",
      readTime: "6 min read",
      category: "Customer Service",
      tags: ["AI", "Customer Service", "Automation", "Experience"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = [
    "All", "AI & Machine Learning", "Micro SAAS", "5G Technology", 
    "Cybersecurity", "Cloud Computing", "Customer Service", "Business Strategy"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta
          name="description"
          content="Stay updated with the latest technology insights, AI trends, and industry news from Zion Tech Group. Expert articles on AI, micro SAAS, 5G, and more."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, micro SAAS, 5G technology, cybersecurity, cloud computing, business technology, industry news"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Latest Technology Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on AI, micro SAAS, 5G technology, cybersecurity, 
              and the latest trends shaping the future of business technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="#featured"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Read Latest Articles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/newsletter"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Subscribe to Newsletter
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Featured Article
                  </span>
                </h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                      <div className="text-cyan-400 text-sm">Featured Image</div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                      <span className="text-cyan-400 text-sm">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Latest Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of expert articles covering the latest trends and innovations in technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-cyan-400 text-sm">Article Image</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cyan-400 text-xs">{post.category}</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest technology insights, industry trends, 
              and expert articles delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}