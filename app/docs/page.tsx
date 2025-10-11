'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface DocumentationItem {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  lastUpdated: string;
  sections: string[];
  icon: React.ComponentType<any>;
  url: string;
  featured: boolean;
}

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 0 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it-services', name: 'IT Services', icon: Cloud, count: 0 },
    { id: 'api', name: 'API Reference', icon: Code, count: 0 },
    { id: 'security', name: 'Security', icon: Shield, count: 0 },
    { id: 'deployment', name: 'Deployment', icon: Zap, count: 0 },
    { id: 'tutorials', name: 'Tutorials', icon: Users, count: 0 }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels', count: 0 },
    { id: 'Beginner', name: 'Beginner', count: 0 },
    { id: 'Intermediate', name: 'Intermediate', count: 0 },
    { id: 'Advanced', name: 'Advanced', count: 0 }
  ];

  const documentation: DocumentationItem[] = [
    {
      id: 'ai-services-guide',
      title: 'AI Services Documentation',
      description: 'Comprehensive guide to our AI-powered services including chatbots, NLP, and machine learning.',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-14',
      sections: [
        'Getting Started',
        'AI Chat API',
        'Content Generation',
        'Data Analytics',
        'Custom Models',
        'Best Practices'
      ],
      icon: Brain,
      url: '/docs/ai-services',
      featured: true
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation with endpoints, parameters, and code examples.',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      sections: [
        'Authentication',
        'Endpoints',
        'Request/Response',
        'Error Handling',
        'Rate Limits',
        'SDKs'
      ],
      icon: Code,
      url: '/docs/api',
      featured: true
    },
    {
      id: 'cloud-deployment',
      title: 'Cloud Deployment Guide',
      description: 'Step-by-step guide for deploying applications on various cloud platforms.',
      category: 'deployment',
      difficulty: 'Advanced',
      readTime: '60 min',
      lastUpdated: '2024-01-10',
      sections: [
        'AWS Deployment',
        'Azure Setup',
        'Google Cloud',
        'Docker Configuration',
        'CI/CD Pipeline',
        'Monitoring'
      ],
      icon: Cloud,
      url: '/docs/deployment',
      featured: false
    },
    {
      id: 'security-guide',
      title: 'Security Best Practices',
      description: 'Essential security guidelines for protecting your applications and data.',
      category: 'security',
      difficulty: 'Intermediate',
      readTime: '30 min',
      lastUpdated: '2024-01-08',
      sections: [
        'Authentication',
        'Data Encryption',
        'API Security',
        'Compliance',
        'Audit Logging',
        'Incident Response'
      ],
      icon: Shield,
      url: '/docs/security',
      featured: false
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guide for new users to get up and running with our platform.',
      category: 'tutorials',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-15',
      sections: [
        'Account Setup',
        'First Project',
        'Basic Configuration',
        'Testing',
        'Next Steps'
      ],
      icon: BookOpen,
      url: '/docs/getting-started',
      featured: true
    },
    {
      id: 'it-services-guide',
      title: 'IT Services Documentation',
      description: 'Complete documentation for our IT infrastructure and managed services.',
      category: 'it-services',
      difficulty: 'Intermediate',
      readTime: '35 min',
      lastUpdated: '2024-01-11',
      sections: [
        'Infrastructure Setup',
        'Monitoring',
        'Backup & Recovery',
        'Performance Tuning',
        'Troubleshooting'
      ],
      icon: Settings,
      url: '/docs/it-services',
      featured: false
    },
    {
      id: 'database-guide',
      title: 'Database Management',
      description: 'Guide to database setup, optimization, and maintenance.',
      category: 'it-services',
      difficulty: 'Advanced',
      readTime: '40 min',
      lastUpdated: '2024-01-09',
      sections: [
        'Database Setup',
        'Performance Optimization',
        'Backup Strategies',
        'Scaling',
        'Monitoring'
      ],
      icon: Database,
      url: '/docs/database',
      featured: false
    },
    {
      id: 'tutorials-collection',
      title: 'Video Tutorials',
      description: 'Collection of video tutorials covering various aspects of our platform.',
      category: 'tutorials',
      difficulty: 'Beginner',
      readTime: '20 min',
      lastUpdated: '2024-01-13',
      sections: [
        'Platform Overview',
        'Creating Projects',
        'API Integration',
        'Troubleshooting',
        'Advanced Features'
      ],
      icon: Users,
      url: '/docs/tutorials',
      featured: false
    }
  ];

  // Update category and difficulty counts
  categories.forEach(category => {
    category.count = documentation.filter(doc => 
      category.id === 'all' || doc.category === category.id
    ).length;
  });

  difficulties.forEach(difficulty => {
    difficulty.count = documentation.filter(doc => 
      difficulty.id === 'all' || doc.difficulty === difficulty.id
    ).length;
  });

  const filteredDocs = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || doc.difficulty === selectedDifficulty;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.sections.some(section => section.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const featuredDocs = documentation.filter(doc => doc.featured);

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive documentation for our AI and IT services. Find guides, API references, tutorials, and best practices." />
        <meta name="keywords" content="documentation, API, guides, tutorials, developer resources, AI services, IT services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-cyan-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most 
              out of our AI and IT services.
            </p>
          </div>
        </section>

        {/* Featured Documentation */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDocs.map((doc) => {
                const IconComponent = doc.icon;
                return (
                  <div key={doc.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-400 font-medium">Featured</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{doc.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {doc.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">Updated {doc.lastUpdated}</span>
                      <a
                        href={doc.url}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {category.name} ({category.count})
                    </button>
                  );
                })}
              </div>

              {/* Difficulty Filter */}
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedDifficulty === difficulty.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {difficulty.name} ({difficulty.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Documentation */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc) => {
                const IconComponent = doc.icon;
                return (
                  <div key={doc.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{doc.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Sections:</h4>
                      <div className="flex flex-wrap gap-1">
                        {doc.sections.slice(0, 3).map((section, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded">
                            {section}
                          </span>
                        ))}
                        {doc.sections.length > 3 && (
                          <span className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded">
                            +{doc.sections.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {doc.readTime}
                      </div>
                      <a
                        href={doc.url}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredDocs.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need <span className="text-cyan-400">Help?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="/tutorials"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                View Tutorials
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DocsPage;