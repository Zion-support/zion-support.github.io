import React from 'react';
import { Link } from 'react-router-dom';

const Docs: React.FC = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      articles: [
        { title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "5 min", difficulty: "Beginner" },
        { title: "First Steps", description: "Create your first project and basic configuration", readTime: "10 min", difficulty: "Beginner" },
        { title: "Quick Start Tutorial", description: "Build your first AI model in minutes", readTime: "15 min", difficulty: "Beginner" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Comprehensive guides for AI development and ML workflows",
      articles: [
        { title: "Model Training", description: "Train custom AI models with your data", readTime: "20 min", difficulty: "Intermediate" },
        { title: "Data Preparation", description: "Prepare and format data for training", readTime: "12 min", difficulty: "Intermediate" },
        { title: "Hyperparameter Tuning", description: "Optimize model performance", readTime: "18 min", difficulty: "Advanced" },
        { title: "Model Deployment", description: "Deploy models to production", readTime: "25 min", difficulty: "Advanced" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      articles: [
        { title: "Authentication", description: "API keys and authentication methods", readTime: "8 min", difficulty: "Beginner" },
        { title: "Endpoints", description: "All available API endpoints", readTime: "30 min", difficulty: "Intermediate" },
        { title: "Rate Limits", description: "Understanding API rate limits", readTime: "5 min", difficulty: "Beginner" },
        { title: "Error Handling", description: "Common errors and solutions", readTime: "10 min", difficulty: "Intermediate" }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Security best practices and compliance guidelines",
      articles: [
        { title: "Data Security", description: "Protect your data and models", readTime: "15 min", difficulty: "Intermediate" },
        { title: "Access Control", description: "Manage user permissions and roles", readTime: "12 min", difficulty: "Intermediate" },
        { title: "SOC2 Compliance", description: "Meet compliance requirements", readTime: "20 min", difficulty: "Advanced" },
        { title: "Audit Logging", description: "Track and monitor system access", readTime: "10 min", difficulty: "Intermediate" }
      ]
    }
  ];

  const popularDocs = [
    {
      title: "Building Your First AI Model",
      category: "AI & Machine Learning",
      readTime: "15 min",
      views: "2.1k",
      lastUpdated: "2 days ago"
    },
    {
      title: "API Integration Best Practices",
      category: "API Reference",
      readTime: "12 min",
      views: "1.8k",
      lastUpdated: "1 week ago"
    },
    {
      title: "Security Configuration Guide",
      category: "Security & Compliance",
      readTime: "18 min",
      views: "1.5k",
      lastUpdated: "3 days ago"
    },
    {
      title: "Performance Optimization Tips",
      category: "AI & Machine Learning",
      readTime: "22 min",
      views: "1.3k",
      lastUpdated: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation, guides, and references to help you 
              build, deploy, and manage AI solutions with Zion Tech Group
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation, guides, or examples..."
                className="w-full pl-6 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Documentation Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Documentation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.articles.map((article, idx) => (
                      <div key={idx} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium">{article.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            'bg-red-500/20 text-red-300 border border-red-500/30'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{article.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.readTime} read</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Documentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularDocs.map((doc, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500">{doc.lastUpdated}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{doc.title}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{doc.readTime}</span>
                      <span>{doc.views} views</span>
                    </div>
                    <span className="text-blue-400 text-sm">Read Guide →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/tutorials"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
                <p className="text-gray-300 text-sm">Step-by-step video guides for visual learners</p>
              </Link>
              
              <Link
                to="/help-center"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Help Center</h3>
                <p className="text-gray-300 text-sm">Find answers to common questions and issues</p>
              </Link>
              
              <Link
                to="/support"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆘</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Technical Support</h3>
                <p className="text-gray-300 text-sm">Get help from our expert support team</p>
              </Link>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our documentation team is constantly 
                updating and improving our guides. Let us know what you need!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Request Documentation
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;