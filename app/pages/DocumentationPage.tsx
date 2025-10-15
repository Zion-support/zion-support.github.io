import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search,
  BookOpen,
  Code,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  FileText,
  Video,
  Image,
  Database,
  Settings,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Brain,
  BarChart3,
  Users,
  Mail,
  Phone
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running in 5 minutes',
          type: 'guide',
          readTime: '5 min',
          difficulty: 'Beginner'
        },
        {
          title: 'Installation & Setup',
          description: 'Complete installation instructions',
          type: 'tutorial',
          readTime: '15 min',
          difficulty: 'Beginner'
        },
        {
          title: 'First Project',
          description: 'Build your first AI application',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Beginner'
        },
        {
          title: 'Configuration',
          description: 'Configure your environment',
          type: 'guide',
          readTime: '10 min',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'AI and machine learning documentation',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      articles: [
        {
          title: 'AI API Reference',
          description: 'Complete API documentation for AI services',
          type: 'reference',
          readTime: '45 min',
          difficulty: 'Advanced'
        },
        {
          title: 'Machine Learning Models',
          description: 'Available ML models and their usage',
          type: 'guide',
          readTime: '20 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Natural Language Processing',
          description: 'NLP capabilities and examples',
          type: 'tutorial',
          readTime: '25 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis features',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Predictive Analytics',
          description: 'Building predictive models',
          type: 'tutorial',
          readTime: '40 min',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Cloud services and infrastructure guides',
      icon: Cloud,
      color: 'from-green-500 to-emerald-600',
      articles: [
        {
          title: 'Cloud Setup Guide',
          description: 'Setting up cloud infrastructure',
          type: 'guide',
          readTime: '20 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'AWS Integration',
          description: 'Integrating with Amazon Web Services',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Azure Integration',
          description: 'Microsoft Azure cloud integration',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Docker & Kubernetes',
          description: 'Containerization and orchestration',
          type: 'tutorial',
          readTime: '35 min',
          difficulty: 'Advanced'
        },
        {
          title: 'Monitoring & Logging',
          description: 'Infrastructure monitoring setup',
          type: 'guide',
          readTime: '25 min',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Mobile app development documentation',
      icon: Smartphone,
      color: 'from-orange-500 to-red-600',
      articles: [
        {
          title: 'React Native Setup',
          description: 'Setting up React Native development',
          type: 'tutorial',
          readTime: '20 min',
          difficulty: 'Beginner'
        },
        {
          title: 'iOS Development',
          description: 'Building iOS applications',
          type: 'tutorial',
          readTime: '45 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Android Development',
          description: 'Building Android applications',
          type: 'tutorial',
          readTime: '45 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Cross-Platform Testing',
          description: 'Testing across platforms',
          type: 'guide',
          readTime: '30 min',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Web application development guides',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      articles: [
        {
          title: 'React Development',
          description: 'Building React applications',
          type: 'tutorial',
          readTime: '40 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Node.js Backend',
          description: 'Server-side development with Node.js',
          type: 'tutorial',
          readTime: '35 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'API Development',
          description: 'Building RESTful APIs',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Database Integration',
          description: 'Working with databases',
          type: 'tutorial',
          readTime: '25 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimizing web application performance',
          type: 'guide',
          readTime: '35 min',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Security best practices and implementation',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      articles: [
        {
          title: 'Security Overview',
          description: 'Security best practices and guidelines',
          type: 'guide',
          readTime: '20 min',
          difficulty: 'Beginner'
        },
        {
          title: 'Authentication & Authorization',
          description: 'Implementing secure authentication',
          type: 'tutorial',
          readTime: '30 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'Data Encryption',
          description: 'Encrypting sensitive data',
          type: 'tutorial',
          readTime: '25 min',
          difficulty: 'Intermediate'
        },
        {
          title: 'API Security',
          description: 'Securing your APIs',
          type: 'guide',
          readTime: '20 min',
          difficulty: 'Intermediate'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: Code,
      type: 'API',
      items: 25
    },
    {
      title: 'SDK Downloads',
      description: 'Software development kits for various languages',
      icon: Download,
      type: 'SDK',
      items: 8
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      type: 'Videos',
      items: 15
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code snippets and examples',
      icon: FileText,
      type: 'Examples',
      items: 50
    }
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. API references, tutorials, guides, and developer resources." />
        <meta name="keywords" content="documentation, API reference, developer resources, tutorials, guides, AI documentation, IT solutions" />
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
              Comprehensive guides, API references, and tutorials to help you build amazing applications 
              with our AI and IT solutions.
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
                <BookOpen className="w-5 h-5 mr-2" />
                View Tutorials
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

      {/* Documentation Sections */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Documentation Sections</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive documentation organized by topic and difficulty level.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                        <p className="text-gray-300">{section.description}</p>
                      </div>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedSection === section.id && (
                  <div className="px-6 pb-6 border-t border-slate-700/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {section.articles.map((article, index) => (
                        <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-4 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {article.title}
                            </h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              article.type === 'guide' ? 'bg-blue-500/20 text-blue-300' :
                              article.type === 'tutorial' ? 'bg-green-500/20 text-green-300' :
                              'bg-purple-500/20 text-purple-300'
                            }`}>
                              {article.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{article.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-400">
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {article.readTime}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                {article.difficulty}
                              </div>
                            </div>
                            <Link
                              to={`/docs/${section.id}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center"
                            >
                              Read More
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
                <p className="text-gray-400">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download SDKs, explore code examples, and access additional developer resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to="/resources"
                className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  <span className="mr-2">{resource.items} {resource.type}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get help via email within 24 hours</p>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  support@ziontechgroup.com
                </a>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak with our technical experts</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our support team in real-time</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our documentation and start building amazing applications with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/tutorials"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Tutorials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentationPage;