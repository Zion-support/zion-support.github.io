import React from 'react';
import SEOHead from '../components/SEOHead';

const DocsPage: React.FC = () => {
<<<<<<< HEAD
  const docSections = [
    {
      title: 'API Documentation',
      description: 'Complete API reference for all our services',
      icon: '🔌',
      link: '/api-docs'
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      icon: '⚙️',
      link: '/integration-guides'
    },
    {
      title: 'SDK Documentation',
      description: 'Software development kits for various languages',
      icon: '📚',
      link: '/sdk-docs'
    },
    {
      title: 'Best Practices',
      description: 'Recommended practices for optimal performance',
      icon: '⭐',
      link: '/best-practices'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: '🔧',
      link: '/troubleshooting'
    },
    {
      title: 'Changelog',
      description: 'Latest updates and version history',
      icon: '📝',
      link: '/changelog'
    }
  ];

=======
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
<<<<<<< HEAD
        description="Comprehensive documentation for all our AI and IT solutions. API docs, integration guides, and best practices."
        keywords="API documentation, integration guides, SDK docs, technical documentation, developer resources"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Documentation Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation for all our AI and IT solutions. Find everything you need to integrate and use our services effectively.
=======
        description="Comprehensive documentation for all our AI and IT solutions and services."
        keywords="documentation, API docs, technical docs, user guides, reference"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technical documentation for all our solutions and services.
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {docSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <a 
                  href={section.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Documentation →
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get API Key</h3>
                <p className="text-gray-600">Sign up and get your API key from the dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Service</h3>
                <p className="text-gray-600">Select the AI or IT service that fits your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Building</h3>
                <p className="text-gray-600">Follow our guides to integrate and start using our services</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="/help" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Help Center
=======
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">API Documentation</h3>
              <p className="text-gray-400 mb-4">
                Complete API reference for integrating with our services.
              </p>
              <a href="/api-docs" className="text-purple-400 hover:text-purple-300 transition-colors">
                View API Docs →
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">User Guides</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step user guides for all our applications.
              </p>
              <a href="/tutorials" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Tutorials →
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Developer Resources</h3>
              <p className="text-gray-400 mb-4">
                SDKs, libraries, and development tools for developers.
              </p>
              <a href="/api-docs" className="text-green-400 hover:text-green-300 transition-colors">
                Developer Portal →
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;