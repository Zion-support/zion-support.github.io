<<<<<<< HEAD
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
description="Comprehensive documentation for all our AI and IT solutions. API references, guides, and best practices."
        keywords="documentation, API reference, guides, tutorials, technical documentation, developer resources"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              </div>
            </div>
          </div>
          
<div className="text-center mt-12">
            <a
              href="/contact?service=documentation"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Help
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Docs | Zion Tech Group</title>
        <meta name="description" content="Professional docs solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Docs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional docs solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with docs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
