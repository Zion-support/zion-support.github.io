import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, Zap, Shield, Cloud, ArrowRight, ChevronRight, FileText, Video, Download } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const docSections = [
    {
      title: 'Getting Started',
      icon: Zap,
      color: 'text-yellow-400',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', path: '/docs/quick-start' },
        { title: 'Installation', description: 'Install and configure our platform', path: '/docs/installation' },
        { title: 'First Project', description: 'Create your first AI project', path: '/docs/first-project' },
        { title: 'Basic Concepts', description: 'Understanding core concepts', path: '/docs/basic-concepts' }
      ]
    },
    {
      title: 'AI Services',
      icon: BookOpen,
      color: 'text-purple-400',
      articles: [
        { title: 'AI Models Overview', description: 'Available AI models and capabilities', path: '/docs/ai-models' },
        { title: 'Machine Learning', description: 'ML algorithms and training', path: '/docs/machine-learning' },
        { title: 'Natural Language Processing', description: 'NLP tools and techniques', path: '/docs/nlp' },
        { title: 'Computer Vision', description: 'Image and video processing', path: '/docs/computer-vision' },
        { title: 'Predictive Analytics', description: 'Data analysis and forecasting', path: '/docs/predictive-analytics' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      color: 'text-green-400',
      articles: [
        { title: 'Authentication', description: 'API keys and authentication', path: '/docs/api/auth' },
        { title: 'Endpoints', description: 'Complete API endpoint reference', path: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', path: '/docs/api/sdks' },
        { title: 'Rate Limits', description: 'API usage limits and quotas', path: '/docs/api/rate-limits' },
        { title: 'Error Codes', description: 'Error handling and status codes', path: '/docs/api/errors' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      color: 'text-red-400',
      articles: [
        { title: 'Security Overview', description: 'Security best practices', path: '/docs/security/overview' },
        { title: 'Data Protection', description: 'Data encryption and privacy', path: '/docs/security/data-protection' },
        { title: 'Access Control', description: 'User permissions and roles', path: '/docs/security/access-control' },
        { title: 'Compliance', description: 'SOC 2, ISO 27001 compliance', path: '/docs/security/compliance' }
      ]
    },
    {
      title: 'Deployment',
      icon: Cloud,
      color: 'text-blue-400',
      articles: [
        { title: 'Cloud Deployment', description: 'Deploy to cloud platforms', path: '/docs/deployment/cloud' },
        { title: 'On-Premise', description: 'Local installation and setup', path: '/docs/deployment/on-premise' },
        { title: 'Docker', description: 'Container deployment', path: '/docs/deployment/docker' },
        { title: 'Kubernetes', description: 'K8s orchestration', path: '/docs/deployment/kubernetes' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Documentation', description: 'Complete API reference', icon: Code, path: '/api-docs' },
    { title: 'Video Tutorials', description: 'Step-by-step video guides', icon: Video, path: '/tutorials' },
    { title: 'Download SDKs', description: 'Get our software development kits', icon: Download, path: '/downloads' },
    { title: 'Status Page', description: 'Check system status', icon: Zap, path: '/status' }
  ];

  const popularArticles = [
    { title: 'Getting Started with AI Services', views: '12.5k', path: '/docs/quick-start' },
    { title: 'API Authentication Guide', views: '8.2k', path: '/docs/api/auth' },
    { title: 'Deploying to Production', views: '6.7k', path: '/docs/deployment/production' },
    { title: 'Security Best Practices', views: '5.9k', path: '/docs/security/best-practices' }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing AI-powered applications.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="cyber-card p-6 text-center hover:scale-105 transition-transform duration-200"
              >
                <link.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{link.title}</h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Documentation Sections
          </h2>
          <div className="max-w-6xl mx-auto space-y-6">
            {docSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="cyber-card">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <section.icon className={`w-8 h-8 ${section.color}`} />
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <ChevronRight 
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedSection === section.title ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {expandedSection === section.title && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                      {section.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          to={article.path}
                          className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                          <p className="text-gray-300 text-sm">{article.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="cyber-card p-6 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white pr-4">{article.title}</h3>
                  <span className="text-cyan-400 text-sm font-medium">{article.views} views</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="cyber-button inline-flex items-center"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Consultation
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DocsPage;