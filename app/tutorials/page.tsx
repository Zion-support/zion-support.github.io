'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, Clock, Star, ArrowRight, CheckCircle, ExternalLink, Download } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: any;
}

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
        prerequisites: ['Basic programming knowledge', 'API understanding', 'JSON knowledge'],
        steps: [
          'Sign up for an API key',
          'Install the SDK',
          'Configure your environment',
          'Make your first API call',
          'Handle responses and errors'
        ]
      }
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure using our IT services.',
      category: 'it',
      difficulty: 'Intermediate',
      duration: '45 min',
      rating: 4.9,
      students: 890,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'],
      content: {
        overview: 'Learn how to set up and configure cloud infrastructure for your applications.',
        prerequisites: ['Cloud computing basics', 'Server management', 'Networking knowledge'],
        steps: [
          'Choose your cloud provider',
          'Set up virtual machines',
          'Configure load balancers',
          'Set up monitoring',
          'Implement security measures'
        ]
      }
    },
    {
      id: 3,
      title: 'Building Your First Micro SaaS',
      description: 'Step-by-step guide to creating and launching your first micro SaaS product.',
      category: 'saas',
      difficulty: 'Advanced',
      duration: '2 hours',
      rating: 4.7,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      tags: ['SaaS', 'Business', 'Product', 'Launch'],
      content: {
        overview: 'Complete guide to building, launching, and scaling a micro SaaS product.',
        prerequisites: ['Business knowledge', 'Product development', 'Marketing basics'],
        steps: [
          'Identify your target market',
          'Build your MVP',
          'Set up payment processing',
          'Implement user management',
          'Launch and market your product'
        ]
      }
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your applications and data.',
      category: 'security',
      difficulty: 'Intermediate',
      duration: '30 min',
      rating: 4.6,
      students: 1100,
      thumbnail: '/api/placeholder/400/250',
      tags: ['Security', 'Best Practices', 'Protection', 'Compliance'],
      content: {
        overview: 'Learn essential cybersecurity practices to protect your applications and data.',
        prerequisites: ['Basic security knowledge', 'Application development'],
        steps: [
          'Implement authentication',
          'Set up encryption',
          'Configure firewalls',
          'Regular security audits',
          'Employee training'
        ]
      }
    },
    {
      id: 5,
      title: 'API Integration Masterclass',
      description: 'Master the art of API integration with our comprehensive guide.',
      category: 'integration',
      difficulty: 'Advanced',
      duration: '1.5 hours',
      rating: 4.9,
      students: 750,
      thumbnail: '/api/placeholder/400/250',
      tags: ['API', 'Integration', 'REST', 'GraphQL'],
      content: {
        overview: 'Comprehensive guide to API integration covering REST, GraphQL, and best practices.',
        prerequisites: ['API knowledge', 'HTTP understanding', 'JSON/XML'],
        steps: [
          'Understand API documentation',
          'Set up authentication',
          'Handle rate limiting',
          'Implement error handling',
          'Test and monitor integrations'
        ]
      }
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn how to use our AI and IT services with comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, guides, AI tutorials, IT tutorials, learning, documentation" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <main className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Tutorials & <span className="text-cyan-400">Guides</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn how to use our AI and IT services with step-by-step tutorials and comprehensive guides
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{tutorial.students} students</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Start Tutorial</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need Help Getting Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our expert team is here to help you get the most out of our AI and IT services. 
                  Get personalized guidance and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Expert Help
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TutorialsPage;