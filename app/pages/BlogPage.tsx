import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  Tag, 
  Eye, 
  MessageSquare, 
  Share2, 
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Settings,
  Award,
  Target,
  Rocket,
  Star,
  Heart,
  ThumbsUp,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      content: "Artificial intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete. In 2024, we're seeing several key trends emerge that will shape the future of AI in business...",
      author: "Dr. Sarah Chen",
      authorRole: "CTO",
      authorAvatar: "SC",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Business", "Trends", "Future"],
      image: "/api/placeholder/600/400",
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Success Stories: How Small Apps Are Making Big Impact",
      excerpt: "Discover how micro SAAS applications are revolutionizing business operations and creating new opportunities for entrepreneurs.",
      content: "Micro SAAS applications are proving that size doesn't matter when it comes to making a significant impact. These focused, specialized tools are solving specific business problems with remarkable efficiency...",
      author: "Michael Rodriguez",
      authorRole: "Head of Engineering",
      authorAvatar: "MR",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      category: "Micro SAAS",
      tags: ["Micro SAAS", "Success Stories", "Entrepreneurship", "Business"],
      image: "/api/placeholder/600/400",
      views: 980,
      likes: 67,
      comments: 18,
      featured: true
    },
    {
      id: 3,
      title: "Cloud Security Best Practices for Enterprise Organizations",
      excerpt: "Learn essential cloud security strategies to protect your organization's data and infrastructure in an increasingly connected world.",
      content: "As organizations migrate to cloud environments, security becomes a critical concern. Implementing robust cloud security measures is essential to protect sensitive data and maintain business continuity...",
      author: "Emily Johnson",
      authorRole: "Head of Product",
      authorAvatar: "EJ",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      category: "Cybersecurity",
      tags: ["Cloud Security", "Enterprise", "Best Practices", "Data Protection"],
      image: "/api/placeholder/600/400",
      views: 1100,
      likes: 78,
      comments: 31,
      featured: false
    },
    {
      id: 4,
      title: "Digital Transformation: A Step-by-Step Guide for Modern Businesses",
      excerpt: "Navigate the complex world of digital transformation with our comprehensive guide designed for businesses of all sizes.",
      content: "Digital transformation is no longer optional for businesses that want to remain competitive. However, the process can be overwhelming without proper planning and execution...",
      author: "Kleber Santos",
      authorRole: "CEO & Founder",
      authorAvatar: "KS",
      publishDate: "2024-01-08",
      readTime: "12 min read",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Business Strategy", "Technology", "Innovation"],
      image: "/api/placeholder/600/400",
      views: 1450,
      likes: 95,
      comments: 42,
      featured: false
    },
    {
      id: 5,
      title: "The Rise of AI-Powered Customer Service: What You Need to Know",
      excerpt: "Discover how AI is revolutionizing customer service and learn how to implement AI solutions in your support operations.",
      content: "Customer service is undergoing a dramatic transformation thanks to artificial intelligence. From chatbots to predictive analytics, AI is enabling businesses to provide better, faster, and more personalized support...",
      author: "Dr. Sarah Chen",
      authorRole: "CTO",
      authorAvatar: "SC",
      publishDate: "2024-01-05",
      readTime: "7 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Customer Service", "Automation", "Support"],
      image: "/api/placeholder/600/400",
      views: 890,
      likes: 56,
      comments: 19,
      featured: false
    },
    {
      id: 6,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Explore how 5G technology is reshaping industries and creating new possibilities for businesses and consumers alike.",
      content: "5G technology represents a quantum leap in wireless communication, offering unprecedented speed, reliability, and connectivity. This next-generation network is already transforming industries...",
      author: "Michael Rodriguez",
      authorRole: "Head of Engineering",
      authorAvatar: "MR",
      publishDate: "2024-01-03",
      readTime: "9 min read",
      category: "5G & IoT",
      tags: ["5G", "Technology", "Innovation", "Connectivity"],
      image: "/api/placeholder/600/400",
      views: 1200,
      likes: 72,
      comments: 28,
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length, active: true },
    { name: "AI & Machine Learning", count: blogPosts.filter(post => post.category === "AI & Machine Learning").length },
    { name: "Micro SAAS", count: blogPosts.filter(post => post.category === "Micro SAAS").length },
    { name: "Cybersecurity", count: blogPosts.filter(post => post.category === "Cybersecurity").length },
    { name: "Digital Transformation", count: blogPosts.filter(post => post.category === "Digital Transformation").length },
    { name: "5G & IoT", count: blogPosts.filter(post => post.category === "5G & IoT").length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group | AI, IT & Technology Insights"
        description="Stay updated with the latest insights on AI, IT solutions, micro SAAS, and technology trends. Expert articles from our team of technology professionals."
        keywords="technology blog, ai insights, it solutions blog, micro saas blog, technology trends, business technology"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with expert insights on AI, IT solutions, micro SAAS, 
              and the latest technology trends shaping the future of business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#featured" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Featured Articles
            </a>
            <a 
              href="#newsletter" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and insightful articles on the latest technology trends and innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{post.author}</div>
                      <div className="text-gray-400 text-sm">{post.authorRole}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of technology insights and expert analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={post.id} className="bg-slate-700 rounded-xl overflow-hidden hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-800 text-cyan-400 text-xs font-bold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.authorRole}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="bg-slate-600 text-cyan-400 text-xs px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                    >
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and get the latest technology insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Don't just read about technology trends - implement them. 
            Contact us for a free consultation on how our solutions can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;