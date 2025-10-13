import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  FileText, 
  Calendar, 
  User, 
  ArrowRight, 
  Star, 
  Award,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  HelpCircle,
  ExternalLink,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WhitepapersPage = () => {
  const featuredWhitepapers = [
    {
      id: 1,
      title: "The Future of AI in Business: A Comprehensive Guide to Implementation",
      description: "Explore how artificial intelligence is transforming business operations across industries. This comprehensive guide covers implementation strategies, ROI analysis, and real-world case studies.",
      author: "Dr. Sarah Johnson",
      authorTitle: "Chief AI Officer",
      authorCompany: "Zion Tech Group",
      publishDate: "2024-01-10",
      readTime: "25 min read",
      downloads: 12500,
      category: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      featured: true,
      tags: ["AI", "Business Transformation", "Implementation", "ROI"]
    },
    {
      id: 2,
      title: "Cybersecurity in the Digital Age: Protecting Your Business from Advanced Threats",
      description: "Comprehensive analysis of modern cybersecurity challenges and solutions. Learn about threat landscapes, security frameworks, and best practices for enterprise protection.",
      author: "Michael Chen",
      authorTitle: "Security Expert",
      authorCompany: "Zion Tech Group",
      publishDate: "2024-01-05",
      readTime: "20 min read",
      downloads: 8900,
      category: "IT Services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      featured: true,
      tags: ["Cybersecurity", "Threat Protection", "Enterprise Security", "Best Practices"]
    },
    {
      id: 3,
      title: "Micro SAAS Revolution: How Small Software Solutions Are Changing Business",
      description: "Discover the power of micro SAAS solutions and how they're enabling rapid digital transformation for businesses of all sizes. Includes implementation strategies and success metrics.",
      author: "Emily Rodriguez",
      authorTitle: "Product Manager",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-12-28",
      readTime: "18 min read",
      downloads: 6700,
      category: "Micro SAAS",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      featured: true,
      tags: ["Micro SAAS", "Digital Transformation", "Business Solutions", "Implementation"]
    }
  ];

  const recentWhitepapers = [
    {
      id: 4,
      title: "5G Technology: Transforming Connectivity and Business Operations",
      description: "In-depth analysis of 5G technology and its impact on business operations, IoT implementations, and future connectivity solutions.",
      author: "David Kim",
      authorTitle: "5G Solutions Architect",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-12-20",
      readTime: "22 min read",
      downloads: 4200,
      category: "5G Solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      featured: false,
      tags: ["5G", "Connectivity", "IoT", "Business Operations"]
    },
    {
      id: 5,
      title: "Cloud Migration Strategies: A Step-by-Step Guide for Enterprises",
      description: "Complete guide to cloud migration including planning, execution, and optimization strategies for enterprise environments.",
      author: "Alex Thompson",
      authorTitle: "Cloud Solutions Architect",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-12-15",
      readTime: "30 min read",
      downloads: 5600,
      category: "IT Services",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      featured: false,
      tags: ["Cloud Migration", "Enterprise", "Strategy", "Optimization"]
    },
    {
      id: 6,
      title: "AI-Powered Analytics: Turning Data into Business Intelligence",
      description: "Learn how to leverage AI for advanced analytics and business intelligence. Includes case studies and implementation frameworks.",
      author: "Dr. James Wilson",
      authorTitle: "Data Science Lead",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-12-10",
      readTime: "24 min read",
      downloads: 7800,
      category: "AI Services",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      featured: false,
      tags: ["AI Analytics", "Business Intelligence", "Data Science", "Frameworks"]
    },
    {
      id: 7,
      title: "Digital Transformation: A Complete Roadmap for Modern Businesses",
      description: "Comprehensive roadmap for digital transformation including technology selection, change management, and success metrics.",
      author: "Lisa Wang",
      authorTitle: "Digital Transformation Consultant",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-12-05",
      readTime: "28 min read",
      downloads: 9100,
      category: "IT Services",
      icon: <Settings className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      featured: false,
      tags: ["Digital Transformation", "Strategy", "Change Management", "Technology"]
    },
    {
      id: 8,
      title: "The Economics of Micro SAAS: Building Profitable Software Solutions",
      description: "Financial analysis and business models for micro SAAS solutions. Learn about pricing strategies, customer acquisition, and revenue optimization.",
      author: "Mark Stevens",
      authorTitle: "Business Development Director",
      authorCompany: "Zion Tech Group",
      publishDate: "2023-11-28",
      readTime: "19 min read",
      downloads: 3500,
      category: "Micro SAAS",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      featured: false,
      tags: ["Micro SAAS", "Business Models", "Pricing", "Revenue"]
    }
  ];

  const categories = [
    { name: "AI Services", count: 15, icon: <Brain className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "IT Services", count: 12, icon: <Shield className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Micro SAAS", count: 8, icon: <Zap className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "5G Solutions", count: 6, icon: <Globe className="w-5 h-5" />, color: "from-orange-500 to-red-500" }
  ];

  const stats = [
    { number: "50+", label: "Whitepapers Published", icon: <FileText className="w-6 h-6" /> },
    { number: "100K+", label: "Total Downloads", icon: <Download className="w-6 h-6" /> },
    { number: "25+", label: "Industry Experts", icon: <User className="w-6 h-6" /> },
    { number: "4.8/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Whitepapers - Zion Tech Group | Technology Research & Insights"
        description="Access our comprehensive collection of whitepapers on AI, IT services, micro SAAS, and 5G technology. Expert insights and research from industry leaders."
        keywords="whitepapers, technology research, AI whitepapers, IT whitepapers, business insights, industry reports"
        canonical="https://ziontechgroup.com/whitepapers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <FileText className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Research & Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Whitepapers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Access comprehensive research and insights from our technology experts. 
            Download our whitepapers to stay ahead of industry trends and best practices.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore whitepapers organized by technology category
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-cyan-400 text-center text-sm font-medium">
                  {category.count} whitepapers
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Whitepapers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful research papers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWhitepapers.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  whitepaper.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {whitepaper.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${whitepaper.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {whitepaper.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {whitepaper.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {whitepaper.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{whitepaper.author}</p>
                    <p className="text-gray-400 text-xs">{whitepaper.authorTitle}</p>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Whitepapers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Whitepapers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest research and insights from our technology experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWhitepapers.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${whitepaper.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {whitepaper.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {whitepaper.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{whitepaper.author}</p>
                    <p className="text-gray-400 text-xs">{whitepaper.authorTitle}</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center group">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Informed with Our Research
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get access to our latest whitepapers and research insights. 
            Join our community of technology professionals and thought leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Request Custom Research
              <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;