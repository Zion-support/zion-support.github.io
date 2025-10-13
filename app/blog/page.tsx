import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage = () => {
  const featuredPost = {
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest trends in artificial intelligence and how they're reshaping the business landscape. From machine learning to automation, discover what's next.",
    author: "Kleber Santos",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/api/placeholder/800/400",
    slug: "future-of-ai-in-business-2024"
  };

  const blogPosts = [
    {
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "How 5G networks are revolutionizing industries from healthcare to manufacturing.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "5G Solutions",
      image: "/api/placeholder/400/250",
      slug: "5g-technology-transforming-industries"
    },
    {
      title: "Micro SAAS: The Future of Business Software",
      excerpt: "Why micro SAAS solutions are becoming the preferred choice for modern businesses.",
      author: "Michael Chen",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/400/250",
      slug: "micro-saas-future-business-software"
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect their data.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-best-practices-small-businesses"
    },
    {
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Everything you need to know about migrating your business to the cloud successfully.",
      author: "David Kim",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Cloud Solutions",
      image: "/api/placeholder/400/250",
      slug: "cloud-migration-step-by-step-guide"
    },
    {
      title: "AI-Powered Analytics: Making Data-Driven Decisions",
      excerpt: "How artificial intelligence is revolutionizing business analytics and decision-making.",
      author: "Lisa Wang",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "AI & Analytics",
      image: "/api/placeholder/400/250",
      slug: "ai-powered-analytics-data-driven-decisions"
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Exploring how edge computing is enabling real-time IoT applications and services.",
      author: "James Wilson",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "IoT & Edge Computing",
      image: "/api/placeholder/400/250",
      slug: "rise-edge-computing-iot-applications"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "5G Solutions",
    "Micro SAAS",
    "Cybersecurity",
    "Cloud Solutions",
    "IoT & Edge Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - AI, Technology & Business Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, business solutions, and industry best practices from Zion Tech Group experts."
        keywords="technology blog, AI insights, business technology, 5G solutions, micro SAAS, cybersecurity, cloud computing"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, technology trends, 
            and business solutions from our team of industry professionals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="flex items-center text-sm text-cyan-400">
                    <Tag className="w-4 h-4 mr-1" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="flex items-center text-xs text-cyan-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-xs text-gray-400">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest insights on technology, 
            AI, and business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;