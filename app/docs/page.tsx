import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, Cloud, Code, Database, Download, Filter, Search, Shield, User, Zap, FileText } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6" />,
      description: 'Quick start guides and setup instructions for all our services',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', readTime: '10 min' },
        { title: 'Configuration', description: 'Configure your services and settings', readTime: '15 min' },
        { title: 'First Steps', description: 'Your first project with our platform', readTime: '20 min' }
      ]
    },
    {
      title: 'API Documentation',
      icon: <FileText className="w-6 h-6" />,
      description: 'Complete API reference and integration guides',
      articles: [
        { title: 'API Overview', description: 'Introduction to our REST API', readTime: '10 min' },
        { title: 'Authentication', description: 'API keys and authentication methods', readTime: '8 min' },
        { title: 'Rate Limits', description: 'Understanding API rate limits', readTime: '5 min' },
        { title: 'Error Handling', description: 'Common errors and how to handle them', readTime: '12 min' }
      ]
    },
    {
      title: 'AI Services',
      icon: <Code className="w-6 h-6" />,
      description: 'Documentation for all AI-powered services and features',
      articles: [
        { title: 'AI Analytics', description: 'Using our AI analytics platform', readTime: '25 min' },
        { title: 'Content Generation', description: 'AI-powered content creation tools', readTime: '20 min' },
        { title: 'Machine Learning', description: 'ML model training and deployment', readTime: '30 min' },
        { title: 'Natural Language Processing', description: 'NLP services and capabilities', readTime: '18 min' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: <Database className="w-6 h-6" />,
      description: 'Cloud infrastructure and deployment documentation',
      articles: [
        { title: 'Cloud Migration', description: 'Migrating to our cloud platform', readTime: '45 min' },
        { title: 'Container Services', description: 'Docker and Kubernetes deployment', readTime: '35 min' },
        { title: 'Database Management', description: 'Managing databases in the cloud', readTime: '25 min' },
        { title: 'Monitoring & Logging', description: 'System monitoring and log analysis', readTime: '20 min' }
      ]
    },
    {
      title: 'Security',
      icon: <Shield className="w-6 h-6" />,
      description: 'Security best practices and compliance guidelines',
      articles: [
        { title: 'Security Overview', description: 'Our security measures and protocols', readTime: '15 min' },
        { title: 'Data Protection', description: 'Protecting sensitive data and privacy', readTime: '20 min' },
        { title: 'Compliance', description: 'SOC 2, GDPR, and other compliance standards', readTime: '30 min' },
        { title: 'Access Control', description: 'User permissions and access management', readTime: '12 min' }
      ]
    },
    {
      title: 'Tutorials',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Step-by-step tutorials and hands-on guides',
      articles: [
        { title: 'Building Your First App', description: 'Complete tutorial for beginners', readTime: '60 min' },
        { title: 'Advanced Features', description: 'Exploring advanced platform features', readTime: '45 min' },
        { title: 'Integration Examples', description: 'Real-world integration examples', readTime: '40 min' },
        { title: 'Best Practices', description: 'Industry best practices and tips', readTime: '25 min' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Quick Start Guide', category: 'Getting Started', readTime: '5 min', views: '12.5k' },
    { title: 'API Authentication', category: 'API Documentation', readTime: '8 min', views: '8.2k' },
    { title: 'AI Analytics Setup', category: 'AI Services', readTime: '25 min', views: '6.8k' },
    { title: 'Cloud Migration Guide', category: 'Cloud Services', readTime: '45 min', views: '5.4k' },
    { title: 'Security Best Practices', category: 'Security', readTime: '20 min', views: '4.9k' }
  ];

  const categories = ['All', 'Getting Started', 'API Documentation', 'AI Services', 'Cloud Services', 'Security', 'Tutorials'];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Complete Developer Guide</title>
        <meta name="description" content="Comprehensive documentation for all Zion Tech Group services. Find guides, API references, tutorials, and best practices for developers and users." />
        <meta name="keywords" content="documentation, API docs, developer guide, tutorials, integration guide, technical documentation" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete developer documentation and guides" />
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete guides, API references, and tutorials to help you get the most out of our platform.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{section.icon}</div>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <a
                        key={articleIndex}
                        href={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{article.description}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span>{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
              <p className="text-xl text-gray-300">Most viewed documentation articles</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href={`/docs/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.views} views</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference Quick Access */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">API Reference</h2>
              <p className="text-xl text-gray-300">Quick access to our API documentation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">REST API</h3>
                <p className="text-gray-300 mb-6">Complete REST API reference with examples and interactive testing</p>
                <a
                  href="/docs/api/rest"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View REST API Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SDKs</h3>
                <p className="text-gray-300 mb-6">Official SDKs for Python, JavaScript, Java, and more</p>
                <a
                  href="/docs/sdks"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View SDKs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Postman Collection</h3>
                <p className="text-gray-300 mb-6">Import our Postman collection for easy API testing</p>
                <a
                  href="/docs/postman"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Download Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;