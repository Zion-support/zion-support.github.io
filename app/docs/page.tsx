import React from 'react';
import SEOHead from '../components/SEOHead';

const DocsPage: React.FC = () => {
  const docSections = [
    {
      title: 'API Reference',
      description: 'Complete API documentation for all our services',
      icon: '📚',
      href: '/api-docs'
    },
    {
      title: 'Getting Started',
      description: 'Quick start guide for new users',
      icon: '🚀',
      href: '/tutorials'
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      icon: '🔧',
      href: '/tutorials'
    },
    {
      title: 'Best Practices',
      description: 'Recommended practices and patterns',
      icon: '⭐',
      href: '/tutorials'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: '🔍',
      href: '/help'
    },
    {
      title: 'Changelog',
      description: 'Latest updates and new features',
      icon: '📝',
      href: '/blog'
    }
  ];

  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
<<<<<<< HEAD
        description="Comprehensive documentation for all our AI and IT solutions. API docs, integration guides, and best practices."
        keywords="API documentation, integration guides, SDK docs, technical documentation, developer resources"
=======
        description="Comprehensive documentation for all our AI and IT solutions. API references, guides, and best practices."
        keywords="documentation, API reference, guides, tutorials, technical documentation, developer resources"
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Complete technical documentation for all our solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{section.title}</h3>
                <p className="text-gray-400 mb-4">{section.description}</p>
                <a 
                  href={section.link}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Documentation →
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Get API Key</h3>
                <p className="text-gray-400">Sign up and get your API key from the dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Choose Service</h3>
                <p className="text-gray-400">Select the AI or IT service that fits your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Start Building</h3>
                <p className="text-gray-400">Follow our guides to integrate and start using our services</p>
=======
              Comprehensive documentation for all our AI and IT solutions. API references, guides, and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {docSections.map((section, index) => (
              <a
                key={index}
                href={section.href}
                className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors group"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {section.description}
                </p>
              </a>
            ))}
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Developer Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/api-docs" className="text-blue-400 hover:text-blue-300 transition-colors">
                      REST API Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/tutorials" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Integration Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Support Center
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">User Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/tutorials" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Getting Started Guide
                    </a>
                  </li>
                  <li>
                    <a href="/tutorials" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Advanced Configuration
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Latest Updates
                    </a>
                  </li>
                </ul>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
              </div>
            </div>
          </div>
          
<<<<<<< HEAD
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="/help" 
                className="border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Help Center
              </a>
            </div>
=======
          <div className="text-center mt-12">
            <a
              href="/contact?service=documentation"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Help
            </a>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;