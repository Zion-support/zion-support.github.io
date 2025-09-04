import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Search, FileText, Code, Users, HelpCircle, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first project', link: '/docs/first-project' }
      ]
    },
    {
      title: 'API Reference',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      docs: [
        { title: 'REST API', description: 'Complete REST API documentation', link: '/docs/api/rest' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', link: '/docs/api/graphql' },
        { title: 'Webhooks', description: 'Event-driven integrations', link: '/docs/api/webhooks' },
        { title: 'SDKs', description: 'Client libraries and SDKs', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'Guides & Tutorials',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Services Guide', description: 'Implementing AI solutions', link: '/docs/guides/ai-services' },
        { title: 'Micro SaaS Development', description: 'Building micro SaaS products', link: '/docs/guides/micro-saas' },
        { title: 'Cloud Migration', description: 'Migrating to the cloud', link: '/docs/guides/cloud-migration' },
        { title: 'Security Best Practices', description: 'Security implementation guide', link: '/docs/guides/security' }
      ]
    },
    {
      title: 'Support & Community',
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/faq' },
        { title: 'Community Forum', description: 'Connect with other developers', link: '/community' },
        { title: 'Support Tickets', description: 'Get help from our team', link: '/support' },
        { title: 'Status Page', description: 'Service status and updates', link: '/status' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started with Zion Tech Group services', link: '/docs/quick-start', downloads: '1.2k' },
    { title: 'API Authentication', description: 'Learn how to authenticate with our APIs', link: '/docs/api/authentication', downloads: '890' },
    { title: 'AI Services Overview', description: 'Comprehensive guide to AI services', link: '/docs/guides/ai-services', downloads: '756' },
    { title: 'Deployment Guide', description: 'Deploy your applications with confidence', link: '/docs/guides/deployment', downloads: '634' },
    { title: 'Security Checklist', description: 'Essential security practices', link: '/docs/guides/security', downloads: '521' }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's services including API references, guides, tutorials, and best practices." />
        <meta name="keywords" content="documentation, API reference, guides, tutorials, developer resources, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive documentation for Zion Tech Group's services including API references, guides, tutorials, and best practices." />
        <meta property="og:url" content="https://ziontechgroup.com/docs" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <BookOpen className="w-16 h-16 inline-block mr-4 text-blue-400" />
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of our technology solutions.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-lg"
              />
            </div>
          </div>

          {/* Popular Documentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Popular Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDocs.map((doc, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>{doc.downloads}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{doc.description}</p>
                  <Link 
                    href={doc.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Categories */}
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.docs.map((doc, docIndex) => (
                    <div key={docIndex} className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">{doc.description}</p>
                      <Link 
                        href={doc.link} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        View Documentation
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Support Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mt-16">
            <div className="text-center">
              <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Contact Support
                </Link>
                <Link href="/faq" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}