import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Book, Code, Database, Cloud, Shield, Users, ArrowRight, Search, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Documentation: NextPage = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Quick start guides and setup instructions',
      articles: [
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' }, { title: 'Quick Start Tutorial', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' }, { title: 'Configuration', description: 'Basic configuration and setup', link: '/docs/configuration' }, { title: 'First Project', description: 'Create your first project', link: '/docs/first-project' }
      ]
    }, {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', description: 'API authentication and security', link: '/docs/api/auth' }, { title: 'Endpoints', description: 'Complete API endpoint reference', link: '/docs/api/endpoints' }, { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }, { title: 'Rate Limits', description: 'API rate limiting and quotas', link: '/docs/api/rate-limits' }
      ]
    }, {
      title: 'Database',
      icon: Database,
      description: 'Database setup and management guides',
      articles: [
        { title: 'Database Setup', description: 'Configure your database', link: '/docs/database/setup' }, { title: 'Schema Design', description: 'Database schema best practices', link: '/docs/database/schema' }, { title: 'Migrations', description: 'Database migration guides', link: '/docs/database/migrations' }, { title: 'Backup & Recovery', description: 'Data backup and recovery', link: '/docs/database/backup' }
      ]
    }, {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud deployment and management',
      articles: [
        { title: 'AWS Deployment', description: 'Deploy to Amazon Web Services', link: '/docs/cloud/aws' }, { title: 'Azure Deployment', description: 'Deploy to Microsoft Azure', link: '/docs/cloud/azure' }, { title: 'Google Cloud', description: 'Deploy to Google Cloud Platform', link: '/docs/cloud/gcp' }, { title: 'Docker', description: 'Container deployment with Docker', link: '/docs/cloud/docker' }
      ]
    }, {
      title: 'Security',
      icon: Shield,
      description: 'Security best practices and guidelines',
      articles: [
        { title: 'Security Overview', description: 'Security features and capabilities', link: '/docs/security/overview' }, { title: 'Authentication', description: 'User authentication and authorization', link: '/docs/security/auth' }, { title: 'Data Protection', description: 'Protecting sensitive data', link: '/docs/security/data-protection' }, { title: 'Compliance', description: 'Regulatory compliance guidelines', link: '/docs/security/compliance' }
      ]
    }, {
      title: 'User Management',
      icon: Users,
      description: 'User roles, permissions, and management',
      articles: [
        { title: 'User Roles', description: 'Understanding user roles and permissions', link: '/docs/users/roles' }, { title: 'Access Control', description: 'Managing access and permissions', link: '/docs/users/access-control' }, { title: 'Team Management', description: 'Managing teams and organizations', link: '/docs/users/teams' }, { title: 'Single Sign-On', description: 'SSO integration and setup', link: '/docs/users/sso' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', description: 'Complete API documentation', link: '/docs/api', icon: Code }, { title: 'SDKs & Libraries', description: 'Download SDKs for your platform', link: '/docs/sdks', icon: Download }, { title: 'Code Examples', description: 'Sample code and tutorials', link: '/docs/examples', icon: Book }, { title: 'Status Page', description: 'Service status and uptime', link: '/status', icon: ExternalLink }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and best practices."
      keywords="documentation, API reference, guides, tutorials, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Book className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of 
              our technology solutions and services.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jump to the most commonly accessed documentation sections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <link.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{link.description}</p>
                  <Link href={link.link} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                    Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Sections</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by topic and use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                >
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center mb-4">
                      <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3">
                      {section.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          href={article.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                          <p className="text-sm text-gray-600">{article.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Help?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                  <p className="text-gray-600 mb-4">Search our comprehensive knowledge base for answers to common questions.</p>
                  <Link href="/help" className="text-blue-600 hover:text-blue-700 font-medium">
                    Browse Knowledge Base →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h3>
                  <p className="text-gray-600 mb-4">Connect with other users and get help from the community.</p>
                  <Link href="/community" className="text-blue-600 hover:text-blue-700 font-medium">
                    Join Community →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
                  <p className="text-gray-600 mb-4">Get direct help from our technical support team.</p>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default Documentation;
  );
};