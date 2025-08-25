
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  BookOpen
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Quantum Computing',
    'Digital Transformation',
    'Cloud & Infrastructure',
    'Emerging Technologies',
    'Industry Insights'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Autonomous Systems in 2025",
      excerpt: "Discover how autonomous AI systems are revolutionizing industries and what this means for the future of business operations.",
      content: "AI autonomous systems represent the next evolution in artificial intelligence, where machines can operate independently, make decisions, and learn from their experiences without human intervention...",
      author: "Dr. Sarah Chen",
      authorAvatar: "/images/team/sarah-chen.jpg",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      views: "2.4k",
      category: "AI & Machine Learning",
      tags: ["AI", "Autonomous Systems", "Machine Learning", "Future Tech"],
      featured: true,
      image: "/images/blog/ai-autonomous-systems.jpg"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next?",
      excerpt: "Exploring the latest developments in quantum computing and their implications for cybersecurity and computational power.",
      content: "Quantum computing has moved beyond theoretical discussions into practical applications. Recent breakthroughs in quantum supremacy and error correction have opened new possibilities...",
      author: "Dr. Michael Rodriguez",
      authorAvatar: "/images/team/michael-rodriguez.jpg",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      views: "1.8k",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Cybersecurity", "Research", "Innovation"],
      featured: true,
      image: "/images/blog/quantum-computing.jpg"
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: A Complete Guide",
      excerpt: "Learn how to streamline your SOC2 compliance process with automated tools and best practices for continuous monitoring.",
      content: "SOC2 compliance is crucial for organizations handling customer data, but the process can be complex and time-consuming. Automation tools are changing this landscape...",
      author: "Lisa Thompson",
      authorAvatar: "/images/team/lisa-thompson.jpg",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      views: "3.1k",
      category: "Cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      featured: false,
      image: "/images/blog/soc2-compliance.jpg"
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity",
      excerpt: "How 5G technology is enabling new business models and revolutionizing enterprise network infrastructure.",
      content: "5G technology is not just about faster mobile internet. For enterprises, it represents a fundamental shift in how networks are designed and operated...",
      author: "James Wilson",
      authorAvatar: "/images/team/james-wilson.jpg",
      publishDate: "2025-01-08",
      readTime: "7 min read",
      views: "1.6k",
      category: "Emerging Technologies",
      tags: ["5G", "Enterprise", "Networking", "Innovation"],
      featured: false,
      image: "/images/blog/5g-enterprise.jpg"
    },
    {
      id: 5,
      title: "Micro SAAS: The Future of Business Software",
      excerpt: "Exploring the rise of micro SAAS solutions and how they're democratizing access to powerful business tools.",
      content: "Micro SAAS solutions are changing how businesses access and implement software. These focused, affordable tools are making enterprise-grade capabilities accessible to organizations of all sizes...",
      author: "Alex Kim",
      authorAvatar: "/images/team/alex-kim.jpg",
      publishDate: "2025-01-05",
      readTime: "9 min read",
      views: "2.2k",
      category: "Industry Insights",
      tags: ["Micro SAAS", "Business Software", "Digital Transformation", "Innovation"],
      featured: false,
      image: "/images/blog/micro-saas.jpg"
    },
    {
      id: 6,
      title: "AI-Powered IT Asset Management: Best Practices",
      excerpt: "Discover how artificial intelligence is revolutionizing IT asset management and improving operational efficiency.",
      content: "IT asset management has traditionally been a manual, error-prone process. AI-powered solutions are changing this by providing intelligent automation and predictive insights...",
      author: "Dr. Sarah Chen",
      authorAvatar: "/images/team/sarah-chen.jpg",
      publishDate: "2025-01-03",
      readTime: "11 min read",
      views: "1.9k",
      category: "AI & Machine Learning",
      tags: ["AI", "IT Management", "Asset Management", "Automation"],
      featured: false,
      image: "/images/blog/ai-it-management.jpg"
    },
    {
      id: 7,
      title: "Digital Transformation in Healthcare: A Case Study",
      excerpt: "How one healthcare provider transformed their operations using AI and digital technologies to improve patient care.",
      content: "Healthcare organizations face unique challenges in digital transformation, from regulatory compliance to patient privacy concerns. This case study explores how one provider overcame these obstacles...",
      author: "Dr. Emily Johnson",
      authorAvatar: "/images/team/emily-johnson.jpg",
      publishDate: "2025-01-01",
      readTime: "14 min read",
      views: "2.7k",
      category: "Digital Transformation",
      tags: ["Healthcare", "Digital Transformation", "AI", "Case Study"],
      featured: false,
      image: "/images/blog/healthcare-digital.jpg"
    },
    {
      id: 8,
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Understanding how edge computing is enabling real-time IoT applications and reducing latency in critical systems.",
      content: "Edge computing is becoming essential for IoT applications that require real-time processing and low latency. This technology is enabling new use cases in manufacturing, healthcare, and smart cities...",
      author: "David Park",
      authorAvatar: "/images/team/david-park.jpg",
      publishDate: "2024-12-30",
      readTime: "6 min read",
      views: "1.4k",
      category: "Emerging Technologies",
      tags: ["Edge Computing", "IoT", "Real-time Processing", "Innovation"],
      featured: false,
      image: "/images/blog/edge-computing.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, analysis, and thought leadership on the latest trends in AI, 
              cybersecurity, quantum computing, and digital transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Eye className="w-4 h-4 mr-2" />
                      {post.views}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, industry insights, and technology updates 
              delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. Read our{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

