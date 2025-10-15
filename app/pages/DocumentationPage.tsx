import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const DocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions for our AI and IT solutions.",
      icon: BookOpenIcon,
      articles: [
        "Installation Guide",
        "Configuration Setup",
        "First Steps Tutorial",
        "Common Issues"
      ]
    },
    {
      title: "API Reference",
      description: "Comprehensive API documentation for developers and integrators.",
      icon: CodeBracketIcon,
      articles: [
        "Authentication",
        "Endpoints Overview",
        "Request/Response Examples",
        "Error Handling"
      ]
    },
    {
      title: "User Guides",
      description: "Step-by-step guides for using our platform and services.",
      icon: DocumentTextIcon,
      articles: [
        "Dashboard Overview",
        "Creating Projects",
        "Managing Users",
        "Analytics & Reports"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions to help you resolve problems quickly.",
      icon: CheckCircleIcon,
      articles: [
        "FAQ",
        "Error Messages",
        "Performance Issues",
        "Contact Support"
      ]
    }
  ];

  const quickLinks = [
    { title: "API Documentation", href: "/api-docs" },
    { title: "SDK Downloads", href: "/downloads" },
    { title: "Code Examples", href: "/examples" },
    { title: "Video Tutorials", href: "/tutorials" },
    { title: "Community Forum", href: "/forum" },
    { title: "Support Center", href: "/support" }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. Guides, API reference, and troubleshooting." />
        <meta name="keywords" content="documentation, API reference, user guides, tutorials, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find everything you need to get started with our AI and IT solutions. 
              Comprehensive guides, API references, and troubleshooting resources.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                        {article}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="bg-slate-700 hover:bg-slate-600 rounded-lg p-6 transition-colors border border-slate-600 hover:border-slate-500"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{link.title}</span>
                    <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/support" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                to="/contact" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;
