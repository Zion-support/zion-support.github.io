import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Code, Download, ExternalLink } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guide and basic setup instructions',
      icon: BookOpen,
      links: [
        { name: 'Installation Guide', href: '/docs/installation' },
        { name: 'Quick Start', href: '/docs/quick-start' },
        { name: 'Configuration', href: '/docs/configuration' },
        { name: 'First Steps', href: '/docs/first-steps' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: Code,
      links: [
        { name: 'Authentication', href: '/docs/api/auth' },
        { name: 'AI Services API', href: '/docs/api/ai-services' },
        { name: 'IT Services API', href: '/docs/api/it-services' },
        { name: 'Webhooks', href: '/docs/api/webhooks' }
      ]
    },
    {
      title: 'Guides & Tutorials',
      description: 'Step-by-step tutorials and best practices',
      icon: FileText,
      links: [
        { name: 'AI Implementation Guide', href: '/docs/guides/ai-implementation' },
        { name: 'Cloud Migration', href: '/docs/guides/cloud-migration' },
        { name: 'Security Best Practices', href: '/docs/guides/security' },
        { name: 'Performance Optimization', href: '/docs/guides/performance' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Documentation
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and tutorials to help you get the most out of our AI and IT solutions.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {documentationSections.map((section, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="cyber-card hologram-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/guides"
              className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              <span>Guides</span>
            </Link>
            <Link
              to="/api"
              className="flex items-center justify-center p-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all"
            >
              <Code className="w-5 h-5 mr-2" />
              <span>API Reference</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              <span>Support</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center justify-center p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all"
            >
              <FileText className="w-5 h-5 mr-2" />
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
