import React from 'react';
import Head from 'next/head';
import { 
  FileText, 
  Search, 
  BookOpen, 
  Code, 
  Download, 
  ExternalLink,
  Brain,
  Shield,
  Cpu,
  Zap,
  Cloud,
  Database,
  Target,
  TrendingUp,
  Award,
  Star,
  Video,
  Filter,
  SortAsc,
  SortDesc,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  PlayCircle,
  Bookmark,
  Share2,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  GitBranch,
  Terminal,
  Settings,
  Wrench,
  Layers,
  Server,
  Network,
  Lock,
  Key,
  Eye,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Heart,
  ThumbsUp,
  AlertCircle,
  Info
} from 'lucide-react';

export default function Documentation() {
  const documentationSections = [
    {
      id: 1,
      title: "Getting Started",
      description: "Quick start guides and setup instructions for all our services and platforms.",
      icon: PlayCircle,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Quick Start Guide", description: "Get up and running in minutes", difficulty: "Beginner", time: "5 min read" },
        { title: "Installation Guide", description: "Step-by-step installation instructions", difficulty: "Beginner", time: "10 min read" },
        { title: "Configuration", description: "Configure your environment and settings", difficulty: "Intermediate", time: "15 min read" },
        { title: "First Project", description: "Create your first project with our platform", difficulty: "Beginner", time: "20 min read" }
      ]
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Comprehensive documentation for AI services, APIs, and machine learning models.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      articles: [
        { title: "AI API Reference", description: "Complete API documentation for AI services", difficulty: "Intermediate", time: "30 min read" },
        { title: "Model Training", description: "Train and deploy custom AI models", difficulty: "Advanced", time: "45 min read" },
        { title: "Natural Language Processing", description: "Text analysis and language understanding", difficulty: "Intermediate", time: "25 min read" },
        { title: "Computer Vision", description: "Image and video analysis capabilities", difficulty: "Intermediate", time: "25 min read" }
      ]
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Security documentation, best practices, and implementation guides.",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      articles: [
        { title: "Security Best Practices", description: "Implement security measures effectively", difficulty: "Intermediate", time: "20 min read" },
        { title: "Authentication & Authorization", description: "User management and access control", difficulty: "Intermediate", time: "30 min read" },
        { title: "Threat Detection", description: "Monitor and detect security threats", difficulty: "Advanced", time: "40 min read" },
        { title: "Incident Response", description: "Handle security incidents and breaches", difficulty: "Advanced", time: "35 min read" }
      ]
    },
    {
      id: 4,
      title: "Quantum Technology",
      description: "Documentation for quantum computing services and quantum-safe cryptography.",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Quantum Computing Basics", description: "Understanding quantum computing concepts", difficulty: "Advanced", time: "50 min read" },
        { title: "Quantum Algorithms", description: "Implement quantum algorithms and circuits", difficulty: "Advanced", time: "60 min read" },
        { title: "Quantum-Safe Cryptography", description: "Post-quantum cryptographic solutions", difficulty: "Advanced", time: "45 min read" },
        { title: "Quantum API Reference", description: "API documentation for quantum services", difficulty: "Advanced", time: "40 min read" }
      ]
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, deployment, and DevOps automation documentation.",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      articles: [
        { title: "Cloud Deployment", description: "Deploy applications to cloud platforms", difficulty: "Intermediate", time: "25 min read" },
        { title: "Container Orchestration", description: "Manage containers with Kubernetes", difficulty: "Advanced", time: "40 min read" },
        { title: "CI/CD Pipelines", description: "Set up continuous integration and deployment", difficulty: "Intermediate", time: "30 min read" },
        { title: "Infrastructure as Code", description: "Manage infrastructure with code", difficulty: "Advanced", time: "35 min read" }
      ]
    },
    {
      id: 6,
      title: "API Reference",
      description: "Complete API documentation with examples and integration guides.",
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      articles: [
        { title: "REST API Guide", description: "RESTful API endpoints and methods", difficulty: "Intermediate", time: "35 min read" },
        { title: "GraphQL API", description: "GraphQL schema and queries", difficulty: "Intermediate", time: "30 min read" },
        { title: "WebSocket API", description: "Real-time communication APIs", difficulty: "Advanced", time: "25 min read" },
        { title: "SDK Documentation", description: "Client libraries and SDKs", difficulty: "Intermediate", time: "20 min read" }
      ]
    }
  ];

  const popularArticles = [
    {
      id: 1,
      title: "Getting Started with AI Services",
      section: "AI & Machine Learning",
      views: 15420,
      lastUpdated: "2 days ago",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Implementing Zero-Trust Security",
      section: "Cybersecurity",
      views: 12850,
      lastUpdated: "1 week ago",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Quantum Computing API Quick Start",
      section: "Quantum Technology",
      views: 9870,
      lastUpdated: "3 days ago",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Deploying to Multi-Cloud Environment",
      section: "Cloud & DevOps",
      views: 8760,
      lastUpdated: "5 days ago",
      difficulty: "Advanced"
    }
  ];

  const searchCategories = [
    "All",
    "Getting Started",
    "AI & Machine Learning",
    "Cybersecurity",
    "Quantum Technology",
    "Cloud & DevOps",
    "API Reference"
  ];

  return (
    <>
      <Head>
        <title>Documentation & Guides | Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical documentation, API references, and implementation guides for all Zion Tech Group services. Get started quickly with our detailed guides." />
        <meta name="keywords" content="documentation, API reference, technical guides, AI, cybersecurity, quantum computing, cloud, DevOps, implementation guides" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Documentation & Guides | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technical documentation, API references, and implementation guides for all our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/documentation" />
        <link rel="canonical" href="https://ziontechgroup.com/documentation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and implementation examples for all our services. 
              Get started quickly and build amazing solutions with our detailed documentation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Browse Documentation</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section) => (
                <div key={section.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-6 text-center">
                      {section.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {section.articles.map((article, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white mb-1">{article.title}</h4>
                            <p className="text-xs text-gray-400">{article.description}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <span className="px-2 py-1 bg-white/10 rounded">{article.difficulty}</span>
                            <span>{article.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>View Section</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {popularArticles.map((article) => (
                <div key={article.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {article.section}
                      </span>
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs font-medium rounded-full">
                        {article.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {article.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>Updated {article.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-3 bg-blue-600/20 text-blue-400 font-semibold rounded-lg hover:bg-blue-600/30 transition-all duration-200 flex items-center justify-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Read Article</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="#" className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">User Guides</h3>
                <p className="text-sm text-gray-400">Step-by-step tutorials</p>
              </a>
              
              <a href="#" className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <Code className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
                <p className="text-sm text-gray-400">Ready-to-use code snippets</p>
              </a>
              
              <a href="#" className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <Wrench className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">Tools & SDKs</h3>
                <p className="text-sm text-gray-400">Development tools</p>
              </a>
              
              <a href="#" className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <MessageSquare className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-sm text-gray-400">Get help when needed</p>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Documentation</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get notified about new documentation, API updates, and technical guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help with Implementation?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our technical team is here to help you implement our services and get the most out of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}