import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const DocumentationPage: React.FC = () => {
  const sections = [
    {
      icon: CodeBracketIcon,
      title: 'API Documentation',
      description: 'Comprehensive API reference for all our services and integrations.',
      links: [
        { name: 'Authentication', href: '/docs/api/authentication' },
        { name: 'AI Services API', href: '/docs/api/ai-services' },
        { name: 'Cloud Management API', href: '/docs/api/cloud-management' },
        { name: 'Webhooks', href: '/docs/api/webhooks' }
      ]
    },
    {
      icon: CogIcon,
      title: 'Integration Guides',
      description: 'Step-by-step guides for integrating our solutions with your systems.',
      links: [
        { name: 'Getting Started', href: '/docs/integration/getting-started' },
        { name: 'SDK Installation', href: '/docs/integration/sdk-installation' },
        { name: 'Configuration', href: '/docs/integration/configuration' },
        { name: 'Best Practices', href: '/docs/integration/best-practices' }
      ]
    },
    {
      icon: DocumentTextIcon,
      title: 'User Guides',
      description: 'Detailed user guides and tutorials for all our products and services.',
      links: [
        { name: 'Quick Start', href: '/docs/user/quick-start' },
        { name: 'Feature Overview', href: '/docs/user/features' },
        { name: 'Troubleshooting', href: '/docs/user/troubleshooting' },
        { name: 'FAQ', href: '/docs/user/faq' }
      ]
    },
    {
      icon: QuestionMarkCircleIcon,
      title: 'Support',
      description: 'Get help and support for all your questions and issues.',
      links: [
        { name: 'Contact Support', href: '/support' },
        { name: 'Community Forum', href: '/community' },
        { name: 'Video Tutorials', href: '/tutorials' },
        { name: 'Release Notes', href: '/docs/releases' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI solutions, APIs, and integration guides." />
        <meta name="keywords" content="documentation, API docs, integration guides, user guides, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of our solutions.
            </p>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className="text-purple-400 hover:text-purple-300 text-sm flex items-center group"
                      >
                        {link.name}
                        <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need More Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/tutorials"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;