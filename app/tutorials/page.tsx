'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, Clock, Star, ArrowRight, CheckCircle, ExternalLink, Download } from 'lucide-react';

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  rating: number;
  students: number;
  thumbnail: string;
  tags: string[];
  content: {
    overview: string;
    prerequisites: string[];
    steps: string[];
  };
}

interface Category {
  id: string;
  name: string;
  icon: any;
}

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'integration', name: 'Integration', icon: Code }
  ];

  const tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Getting Started with AI Chat API',
      description: 'Learn how to integrate our AI chat API into your application with step-by-step examples.',
      category: 'ai',
      difficulty: 'Beginner',
      duration: '15 min',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      tags: ['API', 'AI', 'Chat', 'Integration'],
      content: {
        overview: 'This tutorial covers the basics of integrating our AI chat API into your application.',
        prerequisites: ['Basic programming knowledge', 'API key', 'HTTP client'],
        steps: [
          'Set up your development environment',
          'Get your API key from the dashboard',
          'Make your first API call',
          'Handle responses and errors',
          'Implement advanced features'
        ]
      }
    },
    {
      id: 2,
      title: 'Building a Secure Cloud Infrastructure',
      description: 'Complete guide to setting up secure cloud infrastructure using our IT services.',
      category: 'it',
      difficulty: 'Intermediate',
      duration: '45 min',
      rating: 4.9,
      students: 890,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Cloud', 'Security', 'Infrastructure', 'DevOps'],
      content: {
        overview: 'Learn how to build and secure cloud infrastructure using best practices.',
        prerequisites: ['AWS/Azure knowledge', 'Docker basics', 'Security concepts'],
        steps: [
          'Plan your infrastructure architecture',
          'Set up cloud resources',
          'Configure security groups and firewalls',
          'Implement monitoring and logging',
          'Deploy and test your infrastructure'
        ]
      }
    },
    {
      id: 3,
      title: 'Creating Your First Micro SaaS Application',
      description: 'Build a complete micro SaaS application from scratch using our platform.',
      category: 'saas',
      difficulty: 'Advanced',
      duration: '2 hours',
      rating: 4.7,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      tags: ['SaaS', 'Full-stack', 'Database', 'Authentication'],
      content: {
        overview: 'Complete tutorial on building a micro SaaS application with user management and billing.',
        prerequisites: ['React/Node.js knowledge', 'Database concepts', 'Payment integration'],
        steps: [
          'Set up the project structure',
          'Implement user authentication',
          'Create the main application features',
          'Add payment processing',
          'Deploy and monitor your application'
        ]
      }
    },
    {
      id: 4,
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'Build an intelligent analytics dashboard using our AI data analytics services.',
      category: 'ai',
      difficulty: 'Intermediate',
      duration: '30 min',
      rating: 4.6,
      students: 980,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Analytics', 'Dashboard', 'AI', 'Visualization'],
      content: {
        overview: 'Create a powerful analytics dashboard with AI-powered insights and visualizations.',
        prerequisites: ['JavaScript/React', 'Chart.js knowledge', 'API integration'],
        steps: [
          'Set up the dashboard framework',
          'Connect to our analytics API',
          'Create interactive charts and graphs',
          'Implement AI-powered insights',
          'Add real-time data updates'
        ]
      }
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential cybersecurity practices to protect your applications and data.',
      category: 'security',
      difficulty: 'Beginner',
      duration: '25 min',
      rating: 4.9,
      students: 2100,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Security', 'Best Practices', 'Compliance', 'Protection'],
      content: {
        overview: 'Essential cybersecurity practices every developer should know.',
        prerequisites: ['Basic security concepts', 'Application development experience'],
        steps: [
          'Understand common security threats',
          'Implement secure authentication',
          'Use encryption properly',
          'Set up monitoring and logging',
          'Follow compliance guidelines'
        ]
      }
    },
    {
      id: 6,
      title: 'API Integration Patterns',
      description: 'Master different patterns for integrating with external APIs and services.',
      category: 'integration',
      difficulty: 'Intermediate',
      duration: '35 min',
      rating: 4.5,
      students: 750,
      thumbnail: '/api/placeholder/400/250',
      tags: ['API', 'Integration', 'Patterns', 'Architecture'],
      content: {
        overview: 'Learn various patterns and best practices for API integration.',
        prerequisites: ['API knowledge', 'Design patterns', 'Error handling'],
        steps: [
          'Understand different integration patterns',
          'Implement retry and circuit breaker patterns',
          'Handle rate limiting and throttling',
          'Manage API versioning',
          'Monitor and debug integrations'
        ]
      }
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const featuredTutorials = tutorials.filter(tutorial => tutorial.rating >= 4.8).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn how to use our AI and IT services with comprehensive tutorials, guides, and learning paths. Master our platform with step-by-step instructions and real-world examples." />
        <meta name="keywords" content="tutorials, guides, learning, AI services, IT services, micro SaaS, documentation, examples" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-cyan-400">Tutorials</span> & Guides
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master our AI and IT services with comprehensive tutorials, step-by-step guides, 
                and real-world examples. Learn at your own pace with our structured learning paths.
              </p>
            </div>

            {/* Featured Tutorials */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-400 font-medium">{tutorial.difficulty}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.students}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={`/tutorials/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Category Filter */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* All Tutorials */}
            <section id="all-tutorials" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">All Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-400 font-medium">{tutorial.difficulty}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.students}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={`/tutorials/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Paths */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">AI Developer Path</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Master AI development from basics to advanced implementations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      AI Fundamentals
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      API Integration
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Advanced AI Features
                    </li>
                  </ul>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" />
                  </a>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <Cloud className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Cloud Architect Path</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Learn cloud architecture and infrastructure management.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Cloud Fundamentals
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Security & Compliance
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Advanced Architecture
                    </li>
                  </ul>
                  <a href="#" className="text-green-400 hover:text-green-300 font-semibold">
                    Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" />
                  </a>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">SaaS Entrepreneur Path</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Build and scale your own SaaS business from scratch.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      SaaS Fundamentals
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Business Models
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Scaling & Growth
                    </li>
                  </ul>
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
                  <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Ready-to-use code examples for all our services
                  </p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Browse Examples <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
                  <Download className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">SDKs & Libraries</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Official SDKs for popular programming languages
                  </p>
                  <a href="/api" className="text-green-400 hover:text-green-300 text-sm">
                    View SDKs <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Join our developer community for support and discussions
                  </p>
                  <a href="/community" className="text-purple-400 hover:text-purple-300 text-sm">
                    Join Community <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center">
                  <BookOpen className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Comprehensive API and service documentation
                  </p>
                  <a href="/docs" className="text-orange-400 hover:text-orange-300 text-sm">
                    View Docs <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
                <p className="text-gray-300 mb-6">
                  Join thousands of developers who are already building amazing applications with our services.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Started Free
                  </a>
                  <a href="/demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default TutorialsPage;
