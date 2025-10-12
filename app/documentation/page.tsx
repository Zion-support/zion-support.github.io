import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Code, Zap, Shield, Users, Globe, Search, Download, Play, FileText, Settings, HelpCircle } from 'lucide-react';

const DocumentationPage = () => {
  const sections = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Getting Started",
      description: "Quick start guides and tutorials to get you up and running",
      links: [
        { name: "Quick Start Guide", href: "#quick-start" },
        { name: "Installation", href: "#installation" },
        { name: "First Steps", href: "#first-steps" },
        { name: "Configuration", href: "#configuration" }
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "API Reference",
      description: "Complete API documentation with examples and code snippets",
      links: [
        { name: "Authentication", href: "#auth" },
        { name: "Endpoints", href: "#endpoints" },
        { name: "SDKs", href: "#sdks" },
        { name: "Webhooks", href: "#webhooks" }
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Security",
      description: "Security best practices and implementation guides",
      links: [
        { name: "Security Overview", href: "#security-overview" },
        { name: "Authentication", href: "#auth-security" },
        { name: "Data Protection", href: "#data-protection" },
        { name: "Compliance", href: "#compliance" }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "User Guides",
      description: "Step-by-step guides for different user roles and use cases",
      links: [
        { name: "Admin Guide", href: "#admin-guide" },
        { name: "Developer Guide", href: "#dev-guide" },
        { name: "End User Guide", href: "#user-guide" },
        { name: "Troubleshooting", href: "#troubleshooting" }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      title: "Integration",
      description: "Integration guides for popular platforms and services",
      links: [
        { name: "Third-party Integrations", href: "#integrations" },
        { name: "Webhooks", href: "#webhooks-guide" },
        { name: "SSO Setup", href: "#sso" },
        { name: "Custom Integrations", href: "#custom" }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: "Advanced Topics",
      description: "Advanced configuration and customization options",
      links: [
        { name: "Customization", href: "#customization" },
        { name: "Performance Tuning", href: "#performance" },
        { name: "Scaling", href: "#scaling" },
        { name: "Monitoring", href: "#monitoring" }
      ]
    }
  ];

  const quickLinks = [
    { name: "API Reference", href: "/api-reference", icon: <Code className="w-5 h-5" /> },
    { name: "Support Center", href: "/support", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Status Page", href: "/status", icon: <Globe className="w-5 h-5" /> },
    { name: "Download SDKs", href: "#download", icon: <Download className="w-5 h-5" /> }
  ];

  const tutorials = [
    {
      title: "Building Your First AI Application",
      description: "Learn how to create your first AI-powered application using our platform",
      duration: "15 min read",
      difficulty: "Beginner",
      icon: <Play className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Advanced API Integration",
      description: "Master advanced API integration techniques and best practices",
      duration: "30 min read",
      difficulty: "Advanced",
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      title: "Security Implementation Guide",
      description: "Implement robust security measures for your applications",
      duration: "25 min read",
      difficulty: "Intermediate",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: "Performance Optimization",
      description: "Optimize your applications for maximum performance and efficiency",
      duration: "20 min read",
      difficulty: "Intermediate",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. Get started, integrate APIs, and build amazing applications." />
        <meta name="keywords" content="documentation, API reference, developer guide, integration, tutorials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need to build amazing applications with our AI and IT solutions. 
                From quick start guides to advanced API documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-center"
                >
                  <div className="flex flex-col items-center">
                    {link.icon}
                    <span className="text-white font-medium mt-2">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Documentation Sections</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by topic and skill level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Popular Tutorials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step tutorials to help you master our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    {tutorial.icon}
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                      <p className="text-gray-300 mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{tutorial.duration}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tutorial.difficulty === 'Beginner' ? 'bg-green-600/20 text-green-400' :
                          tutorial.difficulty === 'Intermediate' ? 'bg-yellow-600/20 text-yellow-400' :
                          'bg-red-600/20 text-red-400'
                        }`}>
                          {tutorial.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Start Tutorial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                More resources to help you succeed with our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <Book className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Knowledge Base</h3>
                <p className="text-gray-300 mb-6">Browse our extensive knowledge base for answers to common questions</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Browse Articles
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
                <p className="text-gray-300 mb-6">Connect with other developers and get help from the community</p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Join Community
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <HelpCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Support Center</h3>
                <p className="text-gray-300 mb-6">Get personalized help from our support team</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Request Feature
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;