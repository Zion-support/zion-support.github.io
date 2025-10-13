import { ArrowRight, Calendar, User, Tag, Clock, TrendingUp, BookOpen, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and discover how companies are leveraging artificial intelligence to drive innovation and growth.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Trends", "Innovation"],
      image: "ai-business-trends",
      featured: true
    },
    {
      id: 2,
      title: "How to Implement AI Customer Support: A Complete Guide",
      excerpt: "Learn the step-by-step process of implementing AI-powered customer support systems that can transform your customer service operations.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Customer Support",
      tags: ["AI", "Customer Support", "Automation", "Guide"],
      image: "ai-customer-support-guide",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Revolutionizing IoT and Edge Computing",
      excerpt: "Discover how 5G networks are enabling new possibilities in IoT, edge computing, and real-time applications across industries.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "5G & IoT",
      tags: ["5G", "IoT", "Edge Computing", "Technology"],
      image: "5g-iot-revolution",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity in the AI Era: Protecting Your Digital Assets",
      excerpt: "Understand the evolving cybersecurity landscape and learn how to protect your organization from AI-powered threats and vulnerabilities.",
      author: "David Kim",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "AI", "Security", "Protection"],
      image: "ai-cybersecurity",
      featured: false
    },
    {
      id: 5,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt: "Learn the essential strategies and best practices for building robust, scalable cloud infrastructure that can grow with your business.",
      author: "Lisa Wang",
      date: "2023-12-20",
      readTime: "14 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Infrastructure", "Scalability", "Best Practices"],
      image: "cloud-infrastructure",
      featured: false
    },
    {
      id: 6,
      title: "The ROI of AI Implementation: Measuring Success",
      excerpt: "Discover how to measure and maximize the return on investment from your AI initiatives with proven metrics and strategies.",
      author: "James Wilson",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Business Strategy",
      tags: ["ROI", "AI", "Metrics", "Business Strategy"],
      image: "ai-roi-measurement",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Customer Support",
    "5G & IoT",
    "Cybersecurity",
    "Cloud Computing",
    "Business Strategy"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and digital transformation. Expert articles, guides, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, digital transformation, machine learning, business automation, tech trends, industry news"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Technology Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Blog
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on AI, technology trends, and digital transformation. 
                Learn from our experiences and discover new possibilities for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="#featured-post"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Read Latest Post
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Subscribe to Updates
                  <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section id="featured-post" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Article
                </h2>
                <p className="text-xl text-gray-300">
                  Our most popular and impactful content
                </p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">Featured</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center w-fit shadow-lg hover:shadow-cyan-500/25"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of expert insights, guides, and industry analysis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-xs">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="group text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and never miss the latest trends, insights, and expert advice on AI and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Our Experts
                <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}