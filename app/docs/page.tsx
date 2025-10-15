import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Quick start guides and tutorials to get you up and running with our services.",
      topics: ["Installation", "Configuration", "First Steps", "Basic Usage"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Documentation",
      description: "Comprehensive API reference and integration guides for developers.",
      topics: ["REST API", "GraphQL", "Authentication", "Rate Limits"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Guides for managing and optimizing your data with our platform.",
      topics: ["Data Import", "Data Export", "Data Security", "Backup & Recovery"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Documentation for our cloud infrastructure and deployment services.",
      topics: ["Cloud Setup", "Deployment", "Scaling", "Monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Security best practices and implementation guides for your applications.",
      topics: ["Authentication", "Authorization", "Data Encryption", "Security Audits"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Mobile app development guides and SDK documentation.",
      topics: ["iOS SDK", "Android SDK", "React Native", "Flutter"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group services including API guides, tutorials, and developer resources." />
        <meta name="keywords" content="documentation, API docs, developer resources, tutorials, guides, integration" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Find everything you need to integrate with our services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive guides, API documentation, and developer resources to help you 
                integrate and make the most of our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the resources you need to get started and build amazing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Topics Covered:</h4>
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all">
                    View Documentation <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quick Links</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Popular documentation sections and frequently accessed resources
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a href="#" className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">API Reference</h3>
                <p className="text-gray-300 text-sm">Complete API documentation</p>
              </a>
              
              <a href="#" className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6 text-center hover:border-purple-400/50 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Tutorials</h3>
                <p className="text-gray-300 text-sm">Step-by-step guides</p>
              </a>
              
              <a href="#" className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6 text-center hover:border-green-400/50 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Examples</h3>
                <p className="text-gray-300 text-sm">Code samples and demos</p>
              </a>
              
              <a href="#" className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-6 text-center hover:border-orange-400/50 transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Support</h3>
                <p className="text-gray-300 text-sm">Get help and support</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Need Help Getting Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is here to help you integrate our services and build amazing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a 
                  href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;
