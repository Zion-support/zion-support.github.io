import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Brain, Zap, Rocket } from 'lucide-react';
export const metadata = {
  title: 'Blog — Zion Tech Group AI Insights & Technology Trends',
  description: 'Latest AI insights, technology trends, and revolutionary breakthroughs from Zion Tech Group. Stay ahead with cutting-edge AI knowledge and industry expertise.',
  keywords: 'AI blog, technology trends, AI insights, artificial intelligence news, AI breakthroughs, enterprise AI, quantum computing',
  openGraph: {
    title: 'Blog — Zion Tech Group AI Insights & Technology Trends',
    description: 'Latest AI insights, technology trends, and revolutionary breakthroughs from Zion Tech Group.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Blog - AI Insights & Technology Trends',
      },
    ],
  },
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "AI 2026: Revolutionary Breakthroughs in Quantum Computing",
      excerpt: "Discover the latest quantum AI breakthroughs delivering 1000x performance improvements and transforming enterprise operations.",
      author: "Zion Tech Group AI Team",
      date: "2026-01-15",
      readTime: "8 min read",
      category: "Quantum AI",
      image: "/blog/quantum-ai-2026.jpg",
      link: "/blog/ai-2026-quantum-computing-breakthrough",
      featured: true
    },
    {
      title: "Autonomous Enterprise Systems: The Future of Business Operations",
      excerpt: "Learn how autonomous AI systems are achieving 95% automation rates and revolutionizing enterprise operations worldwide.",
      author: "Dr. Sarah Chen",
      date: "2026-01-12",
      readTime: "6 min read",
      category: "Enterprise AI",
      image: "/blog/autonomous-enterprise.jpg",
      link: "/blog/ai-2026-autonomous-enterprise-operations",
      featured: true
    },
    {
      title: "Neural Architecture Breakthroughs: Next-Generation AI Systems",
      excerpt: "Exploring revolutionary neural architectures that are pushing the boundaries of artificial intelligence and machine learning.",
      author: "AI Research Team",
      date: "2026-01-10",
      readTime: "7 min read",
      category: "AI Research",
      image: "/blog/neural-architecture.jpg",
      link: "/blog/ai-2026-neural-architecture-breakthrough",
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "AI ROI Optimization: Achieving $150M+ Returns",
      excerpt: "Proven strategies for maximizing AI investment returns and achieving unprecedented ROI in enterprise implementations.",
      author: "Financial AI Team",
      date: "2026-01-08",
      readTime: "5 min read",
      category: "AI ROI",
      link: "/blog/ai-2026-cost-optimization-blueprint"
    },
    {
      title: "Quantum Consciousness: The Next Frontier in AI",
      excerpt: "Exploring the intersection of quantum computing and artificial consciousness in next-generation AI systems.",
      author: "Quantum AI Lab",
      date: "2026-01-05",
      readTime: "9 min read",
      category: "Quantum AI",
      link: "/blog/ai-2026-quantum-consciousness-breakthrough"
    },
    {
      title: "Autonomous Business Intelligence: Self-Managing Analytics",
      excerpt: "How autonomous BI systems are transforming data analysis and business intelligence with self-managing capabilities.",
      author: "BI Solutions Team",
      date: "2026-01-03",
      readTime: "6 min read",
      category: "Business Intelligence",
      link: "/blog/ai-2026-autonomous-business-intelligence"
    },
    {
      title: "AI Security & Governance: Enterprise-Grade Protection",
      excerpt: "Comprehensive AI security frameworks and governance models for enterprise-scale AI implementations.",
      author: "Security Team",
      date: "2025-12-30",
      readTime: "7 min read",
      category: "AI Security",
      link: "/blog/ai-governance-2026-enterprise-safety"
    },
    {
      title: "Edge AI Revolution: Real-Time Intelligence at Scale",
      excerpt: "The future of edge computing with AI-powered real-time decision making and distributed intelligence.",
      author: "Edge Computing Team",
      date: "2025-12-28",
      readTime: "8 min read",
      category: "Edge AI",
      link: "/blog/ai-2026-edge-computing-revolution"
    },
    {
      title: "Multimodal AI Integration: The Next Wave",
      excerpt: "How multimodal AI systems are combining vision, language, and reasoning for unprecedented capabilities.",
      author: "Multimodal AI Team",
      date: "2025-12-25",
      readTime: "6 min read",
      category: "Multimodal AI",
      link: "/blog/ai-multimodal-integration-2025"
    }
  ];

  const categories = [
    { name: "Quantum AI", count: 25, icon: Brain },
    { name: "Enterprise AI", count: 18, icon: Zap },
    { name: "AI Research", count: 22, icon: TrendingUp },
    { name: "AI ROI", count: 12, icon: Rocket },
    { name: "Business Intelligence", count: 15, icon: TrendingUp },
    { name: "AI Security", count: 10, icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Insights Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with the latest AI breakthroughs, technology trends, 
              and revolutionary insights from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful articles on AI breakthroughs and technology trends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    to={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-4 hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <Link
                        to={post.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-4 hover:translate-x-1 transition-all duration-300"
                      >
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest AI insights and technology trends delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our revolutionary AI solutions can deliver unprecedented results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}