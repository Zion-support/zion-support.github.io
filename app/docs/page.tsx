import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Database, FileText, Download, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and setup instructions',
      articles: [
        { title: 'Welcome to Zion Tech Group', url: '/docs/welcome', type: 'guide' },
        { title: 'Quick Start Guide', url: '/docs/quick-start', type: 'guide' },
        { title: 'Account Setup', url: '/docs/account-setup', type: 'tutorial' },
        { title: 'First Project', url: '/docs/first-project', type: 'tutorial' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning service documentation',
      articles: [
        { title: 'AI Services Overview', url: '/docs/ai-services/overview', type: 'guide' },
        { title: 'Machine Learning Models', url: '/docs/ai-services/ml-models', type: 'reference' },
        { title: 'Natural Language Processing', url: '/docs/ai-services/nlp', type: 'reference' },
        { title: 'Computer Vision', url: '/docs/ai-services/computer-vision', type: 'reference' },
        { title: 'Predictive Analytics', url: '/docs/ai-services/predictive-analytics', type: 'reference' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'API Overview', url: '/docs/api/overview', type: 'reference' },
        { title: 'Authentication', url: '/docs/api/authentication', type: 'reference' },
        { title: 'Endpoints', url: '/docs/api/endpoints', type: 'reference' },
        { title: 'SDKs', url: '/docs/api/sdks', type: 'reference' },
        { title: 'Rate Limits', url: '/docs/api/rate-limits', type: 'reference' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      description: 'Security best practices and compliance',
      articles: [
        { title: 'Security Overview', url: '/docs/security/overview', type: 'guide' },
        { title: 'Data Protection', url: '/docs/security/data-protection', type: 'guide' },
        { title: 'Authentication', url: '/docs/security/authentication', type: 'guide' },
        { title: 'Compliance', url: '/docs/security/compliance', type: 'guide' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Cloud services and infrastructure guides',
      articles: [
        { title: 'Cloud Services', url: '/docs/cloud/services', type: 'guide' },
        { title: 'Deployment', url: '/docs/cloud/deployment', type: 'tutorial' },
        { title: 'Scaling', url: '/docs/cloud/scaling', type: 'tutorial' },
        { title: 'Monitoring', url: '/docs/cloud/monitoring', type: 'guide' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: FileText,
      description: 'Common issues and solutions',
      articles: [
        { title: 'Common Issues', url: '/docs/troubleshooting/common-issues', type: 'guide' },
        { title: 'Error Codes', url: '/docs/troubleshooting/error-codes', type: 'reference' },
        { title: 'Performance', url: '/docs/troubleshooting/performance', type: 'guide' },
        { title: 'Debugging', url: '/docs/troubleshooting/debugging', type: 'tutorial' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Quick Start Guide', url: '/docs/quick-start', views: '12.5k' },
    { title: 'API Authentication', url: '/docs/api/authentication', views: '8.2k' },
    { title: 'AI Services Overview', url: '/docs/ai-services/overview', views: '6.7k' },
    { title: 'Common Issues', url: '/docs/troubleshooting/common-issues', views: '5.1k' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return BookOpen;
      case 'tutorial': return FileText;
      case 'reference': return Code;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'text-blue-400';
      case 'tutorial': return 'text-green-400';
      case 'reference': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/docs" className="text-cyan-400 font-semibold">Documentation</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation <span className="text-cyan-400">Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and API references to help you get the most out of our services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Articles</h3>
              <div className="space-y-2 mb-8">
                {popularArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.url}
                    className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <div className="text-white font-medium text-sm">{article.title}</div>
                    <div className="text-gray-400 text-xs">{article.views} views</div>
                  </Link>
                ))}
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/api-docs" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    <Code className="w-4 h-4 mr-2" />
                    API Reference
                  </Link>
                  <Link to="/support" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Support Center
                  </Link>
                  <a href="/docs/download" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDFs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {documentationSections.map((section) => (
                <div key={section.id} className="bg-slate-800 rounded-lg border border-slate-700">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                        <p className="text-gray-400 text-sm">{section.description}</p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.articles.map((article, index) => {
                          const TypeIcon = getTypeIcon(article.type);
                          return (
                            <Link
                              key={index}
                              to={article.url}
                              className="flex items-center space-x-3 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                            >
                              <TypeIcon className={`w-5 h-5 ${getTypeColor(article.type)}`} />
                              <div className="flex-1">
                                <div className="text-white font-medium">{article.title}</div>
                                <div className={`text-xs ${getTypeColor(article.type)} capitalize`}>
                                  {article.type}
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Getting Started CTA */}
            <div className="mt-12 bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Follow our quick start guide to set up your first AI project in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/docs/quick-start"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Start Building
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;