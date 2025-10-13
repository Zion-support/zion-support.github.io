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
  Globe,
  BookOpen,
  Eye,
  Clock,
  TrendingUp,
  Shield,
  Brain,
  Zap
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WhitepapersPage = () => {
  const featuredWhitepapers = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: A Comprehensive Guide",
      description: "Explore how artificial intelligence is transforming enterprise operations, from automation to decision-making processes. This comprehensive whitepaper covers implementation strategies, ROI analysis, and real-world case studies.",
      author: "Dr. Sarah Johnson",
      authorTitle: "Chief AI Officer",
      date: "2024-01-10",
      readTime: "15 min read",
      downloads: 12500,
      category: "AI Solutions",
      pages: 24,
      fileSize: "2.3 MB",
      featured: true,
      image: "/images/whitepaper-ai-enterprise.jpg",
      tags: ["AI", "Enterprise", "Automation", "ROI"]
    },
    {
      id: 2,
      title: "5G Implementation Strategies for Smart Cities",
      description: "Discover how 5G technology is enabling smart city initiatives worldwide. This detailed analysis covers infrastructure requirements, use cases, and implementation best practices for urban environments.",
      author: "Michael Chen",
      authorTitle: "5G Solutions Architect",
      date: "2024-01-05",
      readTime: "12 min read",
      downloads: 8900,
      category: "5G Solutions",
      pages: 18,
      fileSize: "1.8 MB",
      featured: true,
      image: "/images/whitepaper-5g-smart-cities.jpg",
      tags: ["5G", "Smart Cities", "Infrastructure", "IoT"]
    },
    {
      id: 3,
      title: "Micro SAAS: Building Scalable Software Solutions",
      description: "Learn how to create and scale micro SAAS applications for maximum impact. This guide covers architecture patterns, monetization strategies, and growth tactics for modern software businesses.",
      author: "Emily Rodriguez",
      authorTitle: "Product Manager",
      date: "2023-12-28",
      readTime: "18 min read",
      downloads: 15200,
      category: "Micro SAAS",
      pages: 32,
      fileSize: "3.1 MB",
      featured: true,
      image: "/images/whitepaper-micro-saas.jpg",
      tags: ["Micro SAAS", "Scalability", "Architecture", "Monetization"]
    }
  ];

  const whitepapers = [
    {
      id: 4,
      title: "Cybersecurity in the AI Era: New Challenges and Solutions",
      description: "Explore emerging cybersecurity threats and AI-powered defense strategies for modern enterprises.",
      author: "David Kim",
      authorTitle: "Security Expert",
      date: "2023-12-20",
      readTime: "14 min read",
      downloads: 6800,
      category: "Cybersecurity",
      pages: 20,
      fileSize: "2.1 MB",
      featured: false,
      image: "/images/whitepaper-cybersecurity.jpg",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Defense"]
    },
    {
      id: 5,
      title: "Digital Transformation: From Strategy to Implementation",
      description: "A comprehensive guide to digital transformation success, covering strategy development, technology selection, and change management.",
      author: "Lisa Wang",
      authorTitle: "Digital Transformation Lead",
      date: "2023-12-15",
      readTime: "16 min read",
      downloads: 11200,
      category: "Digital Transformation",
      pages: 28,
      fileSize: "2.7 MB",
      featured: false,
      image: "/images/whitepaper-digital-transformation.jpg",
      tags: ["Digital Transformation", "Strategy", "Implementation", "Change Management"]
    },
    {
      id: 6,
      title: "Cloud Migration Best Practices and Strategies",
      description: "Learn proven strategies for successful cloud migration projects, including planning, execution, and optimization phases.",
      author: "James Wilson",
      authorTitle: "Cloud Solutions Architect",
      date: "2023-12-10",
      readTime: "13 min read",
      downloads: 9500,
      category: "Cloud Solutions",
      pages: 22,
      fileSize: "2.4 MB",
      featured: false,
      image: "/images/whitepaper-cloud-migration.jpg",
      tags: ["Cloud Migration", "AWS", "Azure", "Best Practices"]
    },
    {
      id: 7,
      title: "IoT Security: Protecting Connected Devices",
      description: "Comprehensive analysis of IoT security challenges and solutions for protecting connected devices in enterprise environments.",
      author: "Maria Garcia",
      authorTitle: "IoT Security Specialist",
      date: "2023-12-05",
      readTime: "11 min read",
      downloads: 7200,
      category: "IoT Security",
      pages: 19,
      fileSize: "1.9 MB",
      featured: false,
      image: "/images/whitepaper-iot-security.jpg",
      tags: ["IoT", "Security", "Connected Devices", "Enterprise"]
    },
    {
      id: 8,
      title: "Blockchain Applications in Supply Chain Management",
      description: "Explore how blockchain technology is revolutionizing supply chain transparency, traceability, and efficiency.",
      author: "Alex Thompson",
      authorTitle: "Blockchain Solutions Lead",
      date: "2023-11-28",
      readTime: "17 min read",
      downloads: 5800,
      category: "Blockchain",
      pages: 26,
      fileSize: "2.8 MB",
      featured: false,
      image: "/images/whitepaper-blockchain-supply-chain.jpg",
      tags: ["Blockchain", "Supply Chain", "Transparency", "Traceability"]
    },
    {
      id: 9,
      title: "Data Analytics: Driving Business Intelligence",
      description: "Learn how advanced data analytics can transform raw data into actionable business insights and competitive advantages.",
      author: "Jennifer Lee",
      authorTitle: "Data Analytics Director",
      date: "2023-11-20",
      readTime: "15 min read",
      downloads: 10300,
      category: "Data Analytics",
      pages: 25,
      fileSize: "2.6 MB",
      featured: false,
      image: "/images/whitepaper-data-analytics.jpg",
      tags: ["Data Analytics", "Business Intelligence", "Insights", "Competitive Advantage"]
    }
  ];

  const categories = [
    "All Whitepapers",
    "AI Solutions",
    "5G Solutions",
    "Micro SAAS",
    "Cybersecurity",
    "Digital Transformation",
    "Cloud Solutions",
    "IoT Security",
    "Blockchain",
    "Data Analytics"
  ];

  const stats = [
    { number: "50+", label: "Whitepapers", icon: <FileText className="w-6 h-6" /> },
    { number: "100K+", label: "Downloads", icon: <Download className="w-6 h-6" /> },
    { number: "25+", label: "Industry Experts", icon: <User className="w-6 h-6" /> },
    { number: "95%", label: "Reader Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Whitepapers - Zion Tech Group | Technology Research & Insights"
        description="Access our comprehensive collection of whitepapers on AI, 5G, micro SAAS, cybersecurity, and digital transformation. Download free research reports from industry experts."
        keywords="whitepapers, technology research, AI whitepapers, 5G whitepapers, cybersecurity research, digital transformation reports"
        canonical="https://ziontechgroup.com/whitepapers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Research</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Whitepapers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Access our comprehensive collection of research reports and whitepapers on the latest technology trends. 
            Learn from industry experts and stay ahead of the innovation curve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Request Custom Research
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Sample
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Whitepapers
            </h2>
            <p className="text-xl text-gray-300">
              Our most popular and comprehensive research reports
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredWhitepapers.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ring-2 ring-cyan-500/50"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {whitepaper.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.author}, {whitepaper.authorTitle}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.date}</span>
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {whitepaper.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {whitepaper.pages} pages • {whitepaper.fileSize}
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                    Download
                    <Download className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Whitepapers
            </h2>
            <p className="text-xl text-gray-300">
              Browse our complete collection of research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {whitepaper.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{whitepaper.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {whitepaper.downloads.toLocaleString()} downloads
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group">
                    Download
                    <Download className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Research
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified about new whitepapers and exclusive research content. 
            Join thousands of professionals who trust our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;