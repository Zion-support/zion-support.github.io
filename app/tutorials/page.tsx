'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Brain, Cloud, Shield, Code, Play, Clock, Users, Zap } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'integration', name: 'Integration', icon: Code }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy intelligent chatbots for your business',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-15',
      tags: ['AI', 'Chatbots', 'NLP', 'Automation']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS',
      category: 'it',
      duration: '2 hours',
      difficulty: 'Intermediate',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-10',
      tags: ['Cloud', 'AWS', 'Infrastructure', 'DevOps']
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Create powerful analytics dashboards with AI-powered insights',
      category: 'ai',
      duration: '1.5 hours',
      difficulty: 'Intermediate',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-08',
      tags: ['AI', 'Analytics', 'Dashboard', 'Data Visualization']
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures to protect your business',
      category: 'security',
      duration: '1 hour',
      difficulty: 'Beginner',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-05',
      tags: ['Security', 'Cybersecurity', 'Best Practices', 'Protection']
    },
    {
      id: 5,
      title: 'Micro SaaS Development',
      description: 'Build and launch your own micro SaaS application',
      category: 'saas',
      duration: '3 hours',
      difficulty: 'Advanced',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-03',
      tags: ['SaaS', 'Development', 'Business', 'Startup']
    },
    {
      id: 6,
      title: 'API Integration Guide',
      description: 'Learn how to integrate various APIs into your applications',
      category: 'integration',
      duration: '1.5 hours',
      difficulty: 'Intermediate',
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '#',
      author: 'Zion Tech Team',
      publishedAt: '2024-01-01',
      tags: ['API', 'Integration', 'Development', 'Connectivity']
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Tutorials | Zion Tech Group - Learn AI & IT Solutions</title>
        <meta name="description" content="Comprehensive tutorials and guides for AI services, IT solutions, and Micro SaaS development. Learn from our experts." />
        <meta name="keywords" content="tutorials, guides, AI learning, IT training, SaaS development, technology education" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Guides
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn from our experts with comprehensive tutorials on AI services, IT solutions, and Micro SaaS development.
              </p>
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
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <Play className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {tutorial.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tutorial.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.publishedAt}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Custom Training?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our experts can provide personalized training sessions tailored to your specific needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Request Custom Training
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TutorialsPage;