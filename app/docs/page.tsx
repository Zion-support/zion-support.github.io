'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  DocumentTextIcon, 
  CodeBracketIcon, 
  CogIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpenIcon },
    { id: 'api', name: 'API Reference', icon: CodeBracketIcon },
    { id: 'ai', name: 'AI Solutions', icon: CpuChipIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: CloudIcon },
    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon },
    { id: 'guides', name: 'Guides', icon: DocumentTextIcon }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up your account and first project',
      category: 'guides',
      type: 'Guide',
      lastUpdated: '2025-01-08',
      estimatedRead: '15 min',
      difficulty: 'Beginner',
      icon: BookOpenIcon
    },
    {
      id: 2,
      title: 'API Authentication',
      description: 'Learn how to authenticate and secure your API requests',
      category: 'api',
      type: 'API Reference',
      lastUpdated: '2025-01-07',
      estimatedRead: '10 min',
      difficulty: 'Intermediate',
      icon: CodeBracketIcon
    },
    {
      id: 3,
      title: 'AI Model Configuration',
      description: 'Configure and customize AI models for your specific use cases',
      category: 'ai',
      type: 'Technical Guide',
      lastUpdated: '2025-01-06',
      estimatedRead: '25 min',
      difficulty: 'Advanced',
      icon: CpuChipIcon
    },
    {
      id: 4,
      title: 'Security Best Practices',
      description: 'Essential security measures and compliance guidelines',
      category: 'security',
      type: 'Security Guide',
      lastUpdated: '2025-01-05',
      estimatedRead: '20 min',
      difficulty: 'Intermediate',
      icon: ShieldCheckIcon
    },
    {
      id: 5,
      title: 'Cloud Deployment Guide',
      description: 'Deploy and manage your applications in the cloud',
      category: 'cloud',
      type: 'Deployment Guide',
      lastUpdated: '2025-01-04',
      estimatedRead: '30 min',
      difficulty: 'Intermediate',
      icon: CloudIcon
    },
    {
      id: 6,
      title: 'Analytics Dashboard API',
      description: 'Complete API reference for analytics and reporting features',
      category: 'api',
      type: 'API Reference',
      lastUpdated: '2025-01-03',
      estimatedRead: '35 min',
      difficulty: 'Advanced',
      icon: ChartBarIcon
    },
    {
      id: 7,
      title: 'Data Visualization Guide',
      description: 'Create powerful visualizations and interactive dashboards',
      category: 'analytics',
      type: 'User Guide',
      lastUpdated: '2025-01-02',
      estimatedRead: '18 min',
      difficulty: 'Intermediate',
      icon: ChartBarIcon
    },
    {
      id: 8,
      title: 'Integration Examples',
      description: 'Code examples and integration patterns for popular platforms',
      category: 'guides',
      type: 'Code Examples',
      lastUpdated: '2025-01-01',
      estimatedRead: '22 min',
      difficulty: 'Intermediate',
      icon: CodeBracketIcon
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const quickLinks = [
    { title: 'API Reference', href: '/api-docs', icon: CodeBracketIcon },
    { title: 'Getting Started', href: '#getting-started', icon: BookOpenIcon },
    { title: 'Authentication', href: '#authentication', icon: ShieldCheckIcon },
    { title: 'SDKs & Libraries', href: '#sdks', icon: CogIcon },
    { title: 'Code Examples', href: '#examples', icon: DocumentTextIcon },
    { title: 'Troubleshooting', href: '#troubleshooting', icon: CogIcon }
  ];

  return (
    <>
      <SEOHead 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for our AI solutions, APIs, and cloud infrastructure. Get started quickly with our guides and references."
        keywords="documentation, API reference, guides, AI solutions, cloud infrastructure, technical documentation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive guides, API references, and technical documentation to help you build amazing solutions with our platform.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <link.icon className="w-8 h-8 text-purple-400 mb-2" />
                  <span className="text-sm text-gray-300 text-center">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Documentation <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Library</span>
              </h2>
              <p className="text-lg text-gray-300">
                {filteredDocs.length} document{filteredDocs.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocs.map((doc) => (
                <div key={doc.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <doc.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                      {doc.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {doc.estimatedRead}
                    </span>
                    <span>{doc.type}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    Last updated: {doc.lastUpdated}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    Read Documentation
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Popular <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Topics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CpuChipIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                <p className="text-gray-300 text-sm mb-4">Learn how to implement and customize AI models</p>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>12 guides available</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CodeBracketIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">API Reference</h3>
                <p className="text-gray-300 text-sm mb-4">Complete API documentation and examples</p>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>8 endpoints documented</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <ShieldCheckIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm mb-4">Security best practices and compliance</p>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>6 security guides</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CloudIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm mb-4">Deploy and manage cloud resources</p>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>10 deployment guides</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </a>
              <a href="/tutorials" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Tutorials
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;