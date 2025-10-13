import { ArrowRight, Calendar, User, Clock, Tag, Search, Filter, TrendingUp, BookOpen, Zap, Brain, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024. From automation to predictive analytics, explore the latest AI innovations.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "5G Implementation: Revolutionizing Enterprise Connectivity",
      excerpt: "Learn how 5G technology is changing the game for businesses. From ultra-low latency to massive IoT connectivity, discover the benefits of 5G implementation.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["5G", "Connectivity", "Enterprise", "IoT"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Protect your business from cyber threats with our comprehensive guide to cybersecurity best practices. Learn about the latest security measures and compliance requirements.",
      author: "David Martinez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cybersecurity", "Security", "Compliance", "Best Practices"]
    },
    {
      id: 4,
      title: "How AI Analytics Can Transform Your Data Strategy",
      excerpt: "Unlock the power of your data with AI analytics. Learn how to implement intelligent data analysis and gain actionable insights for your business growth.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI Analytics", "Data", "Business Intelligence", "Insights"]
    },
    {
      id: 5,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Navigate your cloud migration journey with confidence. Our comprehensive guide covers planning, execution, and best practices for successful cloud adoption.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Cloud", "Migration", "Enterprise", "Infrastructure"]
    },
    {
      id: 6,
      title: "The Rise of Micro SAAS: Building Scalable Solutions",
      excerpt: "Explore the micro SAAS revolution and learn how to build scalable, focused software solutions that solve specific business problems effectively.",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Micro SAAS", "Software", "Scalability", "Business"]
    },
    {
      id: 7,
      title: "AI-Powered Customer Support: The Future is Here",
      excerpt: "Discover how AI is revolutionizing customer support with intelligent chatbots, automated responses, and personalized customer experiences.",
      author: "Jennifer Adams",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["AI", "Customer Support", "Automation", "Chatbots"]
    },
    {
      id: 8,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Explore the real-world applications of blockchain technology in supply chain management, digital identity, and smart contracts for business innovation.",
      author: "Robert Kim",
      date: "2023-12-28",
      readTime: "11 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Blockchain", "Technology", "Innovation", "Business"]
    },
    {
      id: 9,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Learn how to successfully navigate digital transformation with a strategic approach that aligns technology with business objectives and drives growth.",
      author: "Maria Garcia",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Digital Transformation", "Strategy", "Business", "Technology"]
    },
    {
      id: 10,
      title: "Machine Learning in Healthcare: Improving Patient Outcomes",
      excerpt: "Discover how machine learning is revolutionizing healthcare with predictive analytics, personalized treatment, and improved patient care outcomes.",
      author: "Dr. Sarah Chen",
      date: "2023-12-22",
      readTime: "8 min read",
      category: "ai",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Machine Learning", "Healthcare", "AI", "Patient Care"]
    },
    {
      id: 11,
      title: "The Future of Work: Remote Teams and Technology",
      excerpt: "Explore how technology is shaping the future of work with remote collaboration tools, virtual reality meetings, and digital workplace solutions.",
      author: "Alex Thompson",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "business",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Remote Work", "Technology", "Collaboration", "Future of Work"]
    },
    {
      id: 12,
      title: "IoT Security: Protecting Connected Devices",
      excerpt: "Learn about the critical importance of IoT security and best practices for protecting connected devices in your smart home or business environment.",
      author: "Kevin Lee",
      date: "2023-12-18",
      readTime: "10 min read",
      category: "technology",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["IoT", "Security", "Connected Devices", "Protection"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT solutions from our expert team." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, software development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500"></div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-gray-400 text-sm">{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest articles on AI, technology trends, and business insights delivered directly to your inbox. Join thousands of professionals who trust our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <Zap className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}