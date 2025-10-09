import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Book, Code, FileText, Download, Search, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first AI project', link: '/docs/first-project' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'REST API', description: 'RESTful API endpoints and methods', link: '/docs/api/rest' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', link: '/docs/api/graphql' },
        { title: 'Webhooks', description: 'Event-driven integrations', link: '/docs/api/webhooks' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Services',
      icon: FileText,
      description: 'AI service documentation and tutorials',
      docs: [
        { title: 'Machine Learning', description: 'ML models and training guides', link: '/docs/ai/machine-learning' },
        { title: 'Natural Language Processing', description: 'NLP tools and examples', link: '/docs/ai/nlp' },
        { title: 'Computer Vision', description: 'Image and video processing', link: '/docs/ai/computer-vision' },
        { title: 'Predictive Analytics', description: 'Data analysis and forecasting', link: '/docs/ai/analytics' }
      ]
    },
    {
      title: 'Integration Guides',
      icon: ExternalLink,
      description: 'Third-party integrations and plugins',
      docs: [
        { title: 'Cloud Platforms', description: 'AWS, Azure, GCP integration', link: '/docs/integrations/cloud' },
        { title: 'Databases', description: 'Database connectivity and setup', link: '/docs/integrations/databases' },
        { title: 'CI/CD', description: 'Continuous integration setup', link: '/docs/integrations/cicd' },
        { title: 'Monitoring', description: 'Logging and monitoring setup', link: '/docs/integrations/monitoring' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', description: 'Check API availability', link: '/status' },
    { title: 'Changelog', description: 'Latest updates and changes', link: '/docs/changelog' },
    { title: 'Migration Guide', description: 'Upgrade your implementation', link: '/docs/migration' },
    { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/troubleshooting' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build 
            amazing AI-powered applications with our platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center neon-text">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Documentation Categories
          </h2>
          <div className="space-y-8">
            {docCategories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{doc.title}</h4>
                      <p className="text-gray-300 text-sm">{doc.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Beginner's Guide</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Complete guide for newcomers to get started with our AI platform.
              </p>
              <a href="/docs/beginner-guide" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read Guide →
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Best Practices</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Learn industry best practices for AI development and deployment.
              </p>
              <a href="/docs/best-practices" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read Guide →
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Security Guide</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Secure your AI applications with our comprehensive security guide.
              </p>
              <a href="/docs/security-guide" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read Guide →
              </a>
            </div>
          </div>
        </section>

        {/* Download Resources */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Download Resources
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Download our comprehensive documentation, API references, and code examples 
              for offline access and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/download"
                className="cyber-button inline-flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
              <a
                href="/docs/api-reference"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Code className="w-4 h-4 mr-2" />
                API Reference
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
