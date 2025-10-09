import React from 'react';
import Link from 'next/link';
import { ArrowRight, Book, Code, FileText, Play, Download, Search, Filter } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: '🚀',
      color: 'blue',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', readTime: '10 min', difficulty: 'Beginner' },
        { title: 'Configuration', description: 'Configure your environment and settings', readTime: '15 min', difficulty: 'Intermediate' },
        { title: 'First Project', description: 'Create your first AI project', readTime: '20 min', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'AI Services',
      description: 'Comprehensive guides for our AI services',
      icon: '🤖',
      color: 'purple',
      articles: [
        { title: 'AI Services Overview', description: 'Introduction to our AI service offerings', readTime: '8 min', difficulty: 'Beginner' },
        { title: 'Machine Learning APIs', description: 'Using our ML APIs in your applications', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Natural Language Processing', description: 'NLP capabilities and implementation', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Computer Vision', description: 'Image recognition and analysis features', readTime: '35 min', difficulty: 'Advanced' },
        { title: 'Predictive Analytics', description: 'Building predictive models with our platform', readTime: '40 min', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and references',
      icon: '🔌',
      color: 'green',
      articles: [
        { title: 'Authentication', description: 'API keys, tokens, and authentication methods', readTime: '10 min', difficulty: 'Beginner' },
        { title: 'REST API', description: 'Complete REST API reference', readTime: '45 min', difficulty: 'Intermediate' },
        { title: 'GraphQL API', description: 'GraphQL endpoint documentation', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Webhooks', description: 'Setting up and using webhooks', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Rate Limits', description: 'Understanding API rate limits and quotas', readTime: '5 min', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for different languages',
      icon: '📚',
      color: 'orange',
      articles: [
        { title: 'Python SDK', description: 'Python client library and examples', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'JavaScript SDK', description: 'Node.js and browser JavaScript SDK', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Java SDK', description: 'Java client library documentation', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Go SDK', description: 'Go client library and examples', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'PHP SDK', description: 'PHP client library documentation', readTime: '20 min', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and walkthroughs',
      icon: '🎓',
      color: 'pink',
      articles: [
        { title: 'Building a Chatbot', description: 'Create an AI-powered chatbot from scratch', readTime: '60 min', difficulty: 'Intermediate' },
        { title: 'Image Classification', description: 'Build an image classification system', readTime: '45 min', difficulty: 'Advanced' },
        { title: 'Text Analysis Pipeline', description: 'Process and analyze text data', readTime: '50 min', difficulty: 'Intermediate' },
        { title: 'Real-time Predictions', description: 'Implement real-time prediction systems', readTime: '40 min', difficulty: 'Advanced' },
        { title: 'Model Deployment', description: 'Deploy models to production', readTime: '35 min', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Best Practices',
      description: 'Recommended practices and guidelines',
      icon: '⭐',
      color: 'indigo',
      articles: [
        { title: 'Security Best Practices', description: 'Secure your AI applications', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Performance Optimization', description: 'Optimize your AI model performance', readTime: '30 min', difficulty: 'Advanced' },
        { title: 'Error Handling', description: 'Proper error handling and debugging', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Monitoring & Logging', description: 'Monitor your AI applications', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Scaling AI Applications', description: 'Scale your AI solutions', readTime: '35 min', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', description: 'Check API status and uptime', icon: '📊', url: '/status' },
    { title: 'Changelog', description: 'Latest updates and changes', icon: '📝', url: '/changelog' },
    { title: 'Community Forum', description: 'Get help from the community', icon: '💬', url: '/community' },
    { title: 'Support Center', description: 'Contact our support team', icon: '🎧', url: '/support' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'green': return 'from-green-500 to-green-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      case 'pink': return 'from-pink-500 to-pink-600';
      case 'indigo': return 'from-indigo-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Everything you need to know to build amazing AI applications with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Building
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View API Reference
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600">
              Popular resources and tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="text-3xl mb-4">{link.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides and references
            </p>
          </div>
          <div className="space-y-12">
            {documentationSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${getColorClasses(section.color)} text-white p-6`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{section.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="text-blue-100">{section.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{article.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{article.readTime}</span>
                          <a 
                            href={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              More tools and resources to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8">
              <Book className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Code Examples</h3>
              <p className="text-blue-100 mb-4">Browse our collection of code examples and sample applications</p>
              <a href="/docs/examples" className="text-white hover:text-blue-200 font-medium inline-flex items-center">
                View Examples
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-8">
              <Play className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-purple-100 mb-4">Watch step-by-step video tutorials and walkthroughs</p>
              <a href="/docs/videos" className="text-white hover:text-purple-200 font-medium inline-flex items-center">
                Watch Videos
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-8">
              <Download className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Download Center</h3>
              <p className="text-green-100 mb-4">Download SDKs, tools, and sample projects</p>
              <a href="/docs/downloads" className="text-white hover:text-green-200 font-medium inline-flex items-center">
                Download Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Can't find what you're looking for? Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 support@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;