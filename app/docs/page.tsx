import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Book, Code, FileText, Video, Download, Search, CheckCircle, Zap } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      items: ['Installation Guide', 'Configuration', 'First Steps', 'Troubleshooting']
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      items: ['Authentication', 'Endpoints', 'SDKs', 'Rate Limits']
    },
    {
      icon: FileText,
      title: 'User Guides',
      description: 'Step-by-step tutorials and best practices',
      items: ['Basic Usage', 'Advanced Features', 'Integration', 'Customization']
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Visual learning resources and demos',
      items: ['Quick Demos', 'Feature Walkthroughs', 'Use Cases', 'Tips & Tricks']
    }
  ];

  const quickLinks = [
    'Installation Guide',
    'API Authentication',
    'Configuration Options',
    'Error Handling',
    'Rate Limits',
    'SDK Downloads',
    'Changelog',
    'Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Documentation
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Complete Technical Documentation
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive documentation for all our AI and IT services. Find guides, API references, 
            tutorials, and everything you need to integrate our solutions into your projects.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Documentation Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <section.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{link}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Downloads & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SDK Downloads</h3>
                <p className="text-gray-300 text-sm mb-4">Get our SDKs for popular programming languages</p>
                <button className="cyber-button">Download SDKs</button>
              </div>
              <div className="text-center">
                <FileText className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">PDF Guides</h3>
                <p className="text-gray-300 text-sm mb-4">Download comprehensive PDF documentation</p>
                <button className="cyber-button">Download PDFs</button>
              </div>
              <div className="text-center">
                <Video className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Video Library</h3>
                <p className="text-gray-300 text-sm mb-4">Access our complete video tutorial collection</p>
                <button className="cyber-button">Watch Videos</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Need Help Getting Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical support team is here to help you integrate our solutions successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentationPage;
