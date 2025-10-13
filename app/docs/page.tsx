import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Download,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Database,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function Docs() {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      guides: [
        { title: "Quick Start Guide", description: "Get up and running in 5 minutes", link: "/docs/quick-start" },
        { title: "Installation Guide", description: "Step-by-step installation instructions", link: "/docs/installation" },
        { title: "First Project", description: "Create your first AI project", link: "/docs/first-project" },
        { title: "API Overview", description: "Understanding our API structure", link: "/docs/api-overview" }
      ]
    },
    {
      title: "AI Services",
      description: "Comprehensive guides for AI solutions",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      guides: [
        { title: "AI Analytics", description: "Advanced analytics and insights", link: "/docs/ai-analytics" },
        { title: "Machine Learning", description: "ML model development and deployment", link: "/docs/machine-learning" },
        { title: "Neural Networks", description: "Building and training neural networks", link: "/docs/neural-networks" },
        { title: "Natural Language Processing", description: "Text analysis and language understanding", link: "/docs/nlp" }
      ]
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure and deployment guides",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      guides: [
        { title: "Cloud Migration", description: "Migrate your applications to the cloud", link: "/docs/cloud-migration" },
        { title: "Containerization", description: "Docker and Kubernetes best practices", link: "/docs/containerization" },
        { title: "Serverless Computing", description: "Building serverless applications", link: "/docs/serverless" },
        { title: "Monitoring & Logging", description: "Application monitoring and observability", link: "/docs/monitoring" }
      ]
    },
    {
      title: "Security",
      description: "Security best practices and implementation",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      guides: [
        { title: "Security Overview", description: "Understanding our security model", link: "/docs/security-overview" },
        { title: "Authentication", description: "User authentication and authorization", link: "/docs/authentication" },
        { title: "Data Protection", description: "Protecting sensitive data", link: "/docs/data-protection" },
        { title: "Compliance", description: "Meeting regulatory requirements", link: "/docs/compliance" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Mobile app development guides",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      guides: [
        { title: "Mobile SDK", description: "Integrating our mobile SDK", link: "/docs/mobile-sdk" },
        { title: "iOS Development", description: "Building iOS applications", link: "/docs/ios-development" },
        { title: "Android Development", description: "Building Android applications", link: "/docs/android-development" },
        { title: "Cross-Platform", description: "React Native and Flutter guides", link: "/docs/cross-platform" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and references",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      guides: [
        { title: "REST API", description: "RESTful API endpoints and methods", link: "/docs/rest-api" },
        { title: "GraphQL", description: "GraphQL schema and queries", link: "/docs/graphql" },
        { title: "Webhooks", description: "Real-time event notifications", link: "/docs/webhooks" },
        { title: "SDKs", description: "Software development kits", link: "/docs/sdks" }
      ]
    }
  ];

  const quickLinks = [
    { title: "API Reference", description: "Complete API documentation", icon: <Code className="w-5 h-5" />, link: "/docs/api" },
    { title: "SDKs", description: "Download our SDKs", icon: <Download className="w-5 h-5" />, link: "/docs/sdks" },
    { title: "Changelog", description: "Latest updates and changes", icon: <FileText className="w-5 h-5" />, link: "/docs/changelog" },
    { title: "Support", description: "Get help and support", icon: <Globe className="w-5 h-5" />, link: "/support" }
  ];

  const popularGuides = [
    {
      title: "Getting Started with AI Analytics",
      description: "Learn how to implement AI analytics in your application",
      readTime: "10 min read",
      difficulty: "Beginner",
      category: "AI Services"
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Step-by-step guide to migrating your infrastructure",
      readTime: "15 min read",
      difficulty: "Intermediate",
      category: "Cloud Services"
    },
    {
      title: "Building Secure Applications",
      description: "Security best practices for modern applications",
      readTime: "20 min read",
      difficulty: "Advanced",
      category: "Security"
    },
    {
      title: "Mobile App Integration",
      description: "Integrate our services into your mobile app",
      readTime: "12 min read",
      difficulty: "Intermediate",
      category: "Mobile Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. Guides, API references, and tutorials." />
        <meta name="keywords" content="documentation, API docs, guides, tutorials, AI documentation, cloud docs" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Documentation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Documentation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive guides, API references, and tutorials to help you build amazing 
            applications with our AI and IT solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-gray-400">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the documentation you need organized by topic and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {section.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-3">
                  {section.guides.slice(0, 3).map((guide, guideIndex) => (
                    <Link
                      key={guideIndex}
                      to={guide.link}
                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 group-hover:translate-x-1"
                    >
                      {guide.title}
                    </Link>
                  ))}
                  {section.guides.length > 3 && (
                    <Link
                      to={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-1 font-medium"
                    >
                      View all guides →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most read documentation and tutorials from our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularGuides.map((guide, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {guide.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="bg-cyan-500/20 px-2 py-1 rounded">{guide.category}</span>
                    <span>{guide.readTime}</span>
                    <span className={`px-2 py-1 rounded ${
                      guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <Link
                    to="/docs/guide"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our support team is here to help. Contact us for personalized assistance 
            or to request additional documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Request Documentation
              <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}