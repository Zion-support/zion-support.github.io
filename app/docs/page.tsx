'use client';

import React from 'react';
import { 
  BookOpen,
  Code,
  Search,
  ArrowRight,
  CheckCircle,
  FileText,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      articles: [
        "Installation Guide",
        "Quick Start Tutorial",
        "Configuration Setup",
        "First Project"
      ]
    },
    {
      title: "AI Services",
      description: "Documentation for our AI services and APIs",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      articles: [
        "AI Workflow Automation",
        "AI Customer Support",
        "AI Data Analytics",
        "AI Content Generation"
      ]
    },
    {
      title: "IT Services",
      description: "Infrastructure and IT service documentation",
      icon: Cloud,
      color: "from-green-500 to-emerald-600",
      articles: [
        "Cloud Migration",
        "Cybersecurity Setup",
        "Database Management",
        "Network Configuration"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "from-orange-500 to-red-600",
      articles: [
        "Authentication",
        "Endpoints",
        "Error Codes",
        "SDKs and Libraries"
      ]
    }
  ];

  const quickLinks = [
    {
      title: "API Authentication",
      description: "Learn how to authenticate with our APIs",
      url: "/docs/api/authentication"
    },
    {
      title: "Webhook Setup",
      description: "Configure webhooks for real-time updates",
      url: "/docs/webhooks"
    },
    {
      title: "Error Handling",
      description: "Best practices for handling API errors",
      url: "/docs/errors"
    },
    {
      title: "Rate Limits",
      description: "Understanding API rate limits and quotas",
      url: "/docs/rate-limits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you get the most out of our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by service category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{section.description}</p>
                
                <div className="space-y-2 mb-6">
                  {section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{article}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${section.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Links
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Popular documentation articles and frequently accessed resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{link.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{link.description}</p>
                    <a
                      href={link.url}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <FileText className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New to our platform? Start here with our beginner-friendly guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Create Account</h3>
              <p className="text-gray-300 mb-6">Sign up for a free account and get access to our services.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                Sign Up →
              </button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Choose Service</h3>
              <p className="text-gray-300 mb-6">Select the AI or IT service that best fits your needs.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                Browse Services →
              </button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Start Building</h3>
              <p className="text-gray-300 mb-6">Follow our tutorials to build your first project.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                View Tutorials →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;