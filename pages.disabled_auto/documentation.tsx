import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Book, Code, Settings, Shield, Cloud, Zap, ArrowRight, Download } from 'lucide-react';

const Documentation: NextPage = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      icon: Book,
      articles: [
        { title: "Welcome to Zion Tech Group", href: "/docs/getting-started/welcome" },
        { title: "Account Setup", href: "/docs/getting-started/account-setup" },
        { title: "First Project", href: "/docs/getting-started/first-project" },
        { title: "Best Practices", href: "/docs/getting-started/best-practices" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      articles: [
        { title: "Authentication", href: "/docs/api/authentication" },
        { title: "Endpoints", href: "/docs/api/endpoints" },
        { title: "Rate Limits", href: "/docs/api/rate-limits" },
        { title: "Error Handling", href: "/docs/api/error-handling" }
      ]
    },
    {
      title: "Configuration",
      description: "System configuration and customization",
      icon: Settings,
      articles: [
        { title: "Environment Setup", href: "/docs/configuration/environment" },
        { title: "Security Settings", href: "/docs/configuration/security" },
        { title: "Performance Tuning", href: "/docs/configuration/performance" },
        { title: "Monitoring", href: "/docs/configuration/monitoring" }
      ]
    },
    {
      title: "Security",
      description: "Security guidelines and best practices",
      icon: Shield,
      articles: [
        { title: "Security Overview", href: "/docs/security/overview" },
        { title: "Access Control", href: "/docs/security/access-control" },
        { title: "Data Protection", href: "/docs/security/data-protection" },
        { title: "Compliance", href: "/docs/security/compliance" }
      ]
    },
    {
      title: "Cloud Services",
      description: "Cloud deployment and management",
      icon: Cloud,
      articles: [
        { title: "Cloud Architecture", href: "/docs/cloud/architecture" },
        { title: "Deployment Guide", href: "/docs/cloud/deployment" },
        { title: "Scaling", href: "/docs/cloud/scaling" },
        { title: "Backup & Recovery", href: "/docs/cloud/backup-recovery" }
      ]
    },
    {
      title: "AI Services",
      description: "AI and machine learning integration",
      icon: Zap,
      articles: [
        { title: "AI Overview", href: "/docs/ai/overview" },
        { title: "Model Integration", href: "/docs/ai/model-integration" },
        { title: "Training Data", href: "/docs/ai/training-data" },
        { title: "Performance Optimization", href: "/docs/ai/optimization" }
      ]
    }
  ];

  const quickLinks = [
    { title: "API Playground", href: "/api-playground", description: "Test our APIs interactively" },
    { title: "Status Page", href: "/status", description: "Check system status and uptime" },
    { title: "Changelog", href: "/changelog", description: "Latest updates and changes" },
    { title: "Support", href: "/help", description: "Get help and contact support" }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services, APIs, and integrations. Find guides, tutorials, and reference materials."
      keywords="documentation, API reference, guides, tutorials, technical documentation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Comprehensive guides, API references, and tutorials to help you integrate and use our services effectively.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documentation Sections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href={article.href}
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors group"
                        >
                          <span>{article.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Resources</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Download our comprehensive guides, SDKs, and tools to get started quickly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SDK & Libraries</h3>
                <p className="text-gray-600 mb-4">Download our official SDKs for popular programming languages</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download SDK
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF Guides</h3>
                <p className="text-gray-600 mb-4">Comprehensive PDF documentation for offline reference</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download PDF
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Examples</h3>
                <p className="text-gray-600 mb-4">Sample code and integration examples for quick start</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need More Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our technical team is here to help with implementation and integration questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Technical Support
              </Link>
              <Link
                href="/help"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Documentation;