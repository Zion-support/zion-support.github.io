import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search,
  BookOpen,
  Code,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Play,
  Users,
  Star,
  Clock,
  Tag,
  Filter,
  Globe,
  Shield,
  Zap,
  Database,
  Cloud,
  Smartphone,
  BarChart3
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'api', name: 'API Reference', count: 15 },
    { id: 'guides', name: 'Guides & Tutorials', count: 10 },
    { id: 'sdk', name: 'SDKs & Libraries', count: 8 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5" />,
      description: 'Quick start guides and setup instructions',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with our platform in minutes',
          readTime: '5 min read',
          difficulty: 'Beginner',
          tags: ['Setup', 'Quick Start', 'Basics']
        },
        {
          title: 'Installation & Setup',
          description: 'Detailed installation instructions for all platforms',
          readTime: '10 min read',
          difficulty: 'Beginner',
          tags: ['Installation', 'Setup', 'Configuration']
        },
        {
          title: 'First Project',
          description: 'Create your first project with our platform',
          readTime: '15 min read',
          difficulty: 'Beginner',
          tags: ['Tutorial', 'Project', 'Basics']
        },
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our services',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          tags: ['Auth', 'Security', 'API']
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      description: 'Complete API documentation and reference',
      articles: [
        {
          title: 'REST API Overview',
          description: 'Complete overview of our REST API endpoints',
          readTime: '20 min read',
          difficulty: 'Intermediate',
          tags: ['API', 'REST', 'Endpoints']
        },
        {
          title: 'Authentication API',
          description: 'API endpoints for user authentication',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['Auth', 'API', 'Security']
        },
        {
          title: 'AI Services API',
          description: 'API endpoints for AI and machine learning services',
          readTime: '25 min read',
          difficulty: 'Advanced',
          tags: ['AI', 'ML', 'API']
        },
        {
          title: 'Webhooks',
          description: 'Configure and use webhooks for real-time updates',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['Webhooks', 'Real-time', 'Events']
        }
      ]
    },
    {
      id: 'guides',
      title: 'Guides & Tutorials',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Comprehensive guides and step-by-step tutorials',
      articles: [
        {
          title: 'Building AI Applications',
          description: 'Complete guide to building AI-powered applications',
          readTime: '30 min read',
          difficulty: 'Advanced',
          tags: ['AI', 'Development', 'Tutorial']
        },
        {
          title: 'Cloud Integration',
          description: 'Integrate with major cloud providers',
          readTime: '20 min read',
          difficulty: 'Intermediate',
          tags: ['Cloud', 'Integration', 'AWS', 'Azure']
        },
        {
          title: 'Mobile App Development',
          description: 'Build mobile apps with our platform',
          readTime: '25 min read',
          difficulty: 'Intermediate',
          tags: ['Mobile', 'iOS', 'Android', 'React Native']
        },
        {
          title: 'Data Analytics Setup',
          description: 'Set up analytics and monitoring for your applications',
          readTime: '18 min read',
          difficulty: 'Intermediate',
          tags: ['Analytics', 'Monitoring', 'Data']
        }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: <Database className="w-5 h-5" />,
      description: 'Software development kits and libraries',
      articles: [
        {
          title: 'JavaScript SDK',
          description: 'Official JavaScript SDK for web applications',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['JavaScript', 'SDK', 'Web']
        },
        {
          title: 'Python SDK',
          description: 'Python SDK for data science and AI applications',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['Python', 'SDK', 'Data Science']
        },
        {
          title: 'React Components',
          description: 'Pre-built React components for quick integration',
          readTime: '10 min read',
          difficulty: 'Beginner',
          tags: ['React', 'Components', 'UI']
        },
        {
          title: 'Mobile SDKs',
          description: 'Native SDKs for iOS and Android development',
          readTime: '20 min read',
          difficulty: 'Advanced',
          tags: ['Mobile', 'iOS', 'Android', 'SDK']
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running in minutes',
      category: 'Getting Started',
      readTime: '5 min read',
      views: 1250,
      rating: 4.9
    },
    {
      title: 'REST API Overview',
      description: 'Complete API reference',
      category: 'API Reference',
      readTime: '20 min read',
      views: 980,
      rating: 4.8
    },
    {
      title: 'Building AI Applications',
      description: 'Comprehensive AI development guide',
      category: 'Guides',
      readTime: '30 min read',
      views: 750,
      rating: 4.9
    },
    {
      title: 'Authentication API',
      description: 'Secure your applications',
      category: 'API Reference',
      readTime: '12 min read',
      views: 650,
      rating: 4.7
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory === 'all') return true;
    return section.id === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. API references, guides, tutorials, and SDKs for developers." />
        <meta name="keywords" content="documentation, API reference, developer guides, tutorials, SDKs, developer resources" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Developer
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build amazing applications with our AI and IT solutions. 
              Comprehensive guides, API references, and code examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/tutorials"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {filteredSections.map((section) => (
                <div key={section.id} className="bg-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-slate-700/70 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                          <p className="text-gray-300 text-sm">{section.description}</p>
                        </div>
                      </div>
                      {expandedSections.has(section.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedSections.has(section.id) && (
                    <div className="border-t border-slate-600/50 p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.articles.map((article, index) => (
                          <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-6 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                              <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {article.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                              {article.description}
                            </p>
                            <div className="flex items-center justify-between mb-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                article.difficulty === 'Beginner' 
                                  ? 'bg-green-500/20 text-green-300'
                                  : article.difficulty === 'Intermediate'
                                  ? 'bg-yellow-500/20 text-yellow-300'
                                  : 'bg-red-500/20 text-red-300'
                              }`}>
                                {article.difficulty}
                              </span>
                              <div className="flex space-x-1">
                                {article.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <span key={tagIndex} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
                              <span>Read Article</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and highly rated documentation articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {popularArticles.map((article, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{article.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium text-sm">{article.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More resources to help you succeed with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center group hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">SDKs & Tools</h3>
              <p className="text-gray-300 mb-6">Download our official SDKs and development tools</p>
              <Link
                to="/downloads"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <span>Download</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center group hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Video Tutorials</h3>
              <p className="text-gray-300 mb-6">Watch step-by-step video guides and tutorials</p>
              <Link
                to="/tutorials"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <span>Watch Now</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center group hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">Join our developer community for support and discussions</p>
              <Link
                to="/community"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <span>Join Community</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center group hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
              <p className="text-gray-300 mb-6">Get help from our technical support team</p>
              <Link
                to="/support"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <span>Get Support</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Help Getting Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentationPage;