import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Book, Code, Zap, Users, ArrowRight, Download, ExternalLink } from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and setup instructions',
      docs: [
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Quick Start', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Configuration', description: 'Configure your AI solutions', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'REST API', description: 'RESTful API endpoints and methods', link: '/api-docs/rest' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', link: '/api-docs/graphql' },
        { title: 'Webhooks', description: 'Event-driven integrations', link: '/api-docs/webhooks' }
      ]
    },
    {
      title: 'AI Services',
      icon: Book,
      description: 'Documentation for our AI services',
      docs: [
        { title: 'AI Solutions', description: 'Core AI service documentation', link: '/docs/ai-solutions' },
        { title: 'Machine Learning', description: 'ML model training and deployment', link: '/docs/machine-learning' },
        { title: 'Natural Language Processing', description: 'NLP capabilities and usage', link: '/docs/nlp' }
      ]
    },
    {
      title: 'Integration Guides',
      icon: Users,
      description: 'Integration guides for popular platforms',
      docs: [
        { title: 'Cloud Platforms', description: 'AWS, Azure, and GCP integration', link: '/docs/cloud-integration' },
        { title: 'Third-party Tools', description: 'Integrate with popular business tools', link: '/docs/third-party' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/sdks' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', description: 'Check API health and status', link: '/status', icon: Zap },
    { title: 'Support Center', description: 'Get help and support', link: '/support', icon: Users },
    { title: 'Changelog', description: 'Latest updates and changes', link: '/docs/changelog', icon: Book },
    { title: 'Community Forum', description: 'Connect with other developers', link: '/community', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation <span className="text-cyan-400">Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive documentation to help you integrate and use our AI solutions effectively. 
            Find guides, API references, and examples to get started quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#getting-started"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </a>
            <a
              href="#api-reference"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
            >
              API Reference
            </a>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Documentation Categories */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Documentation Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{doc.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">SDK Downloads</h3>
              </div>
              <p className="text-gray-300 mb-4">Download our SDKs for popular programming languages</p>
              <div className="space-y-2">
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Python SDK</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">JavaScript SDK</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Java SDK</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Code Examples</h3>
              </div>
              <p className="text-gray-300 mb-4">Real-world code examples and tutorials</p>
              <div className="space-y-2">
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Basic Integration</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Advanced Features</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Best Practices</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Community</h3>
              </div>
              <p className="text-gray-300 mb-4">Connect with other developers and get help</p>
              <div className="space-y-2">
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">GitHub Discussions</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Stack Overflow</a>
                <a href="#" className="block text-cyan-400 hover:text-cyan-300 transition-colors">Discord Community</a>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
              >
                Email Us
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
