'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      id: 'ai-chatbot-setup',
      title: 'Setting Up Your First AI Chatbot',
      description: 'Learn how to create and deploy an AI-powered chatbot for your business in under 30 minutes.',
      category: 'ai',
      duration: '15 min',
      difficulty: 'Beginner',
      views: 1250,
      icon: Brain,
      videoUrl: '#'
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Cloud Migration Guide',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud with zero downtime.',
      category: 'it',
      duration: '45 min',
      difficulty: 'Intermediate',
      views: 890,
      icon: Cloud,
      videoUrl: '#'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'Building AI Analytics Dashboard',
      description: 'Create powerful data visualization dashboards with AI-powered insights and predictions.',
      category: 'ai',
      duration: '30 min',
      difficulty: 'Intermediate',
      views: 2100,
      icon: Brain,
      videoUrl: '#'
    },
    {
      id: 'cybersecurity-basics',
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures every business should implement to protect their data.',
      category: 'security',
      duration: '25 min',
      difficulty: 'Beginner',
      views: 1800,
      icon: Shield,
      videoUrl: '#'
    },
    {
      id: 'micro-saas-launch',
      title: 'Launching Your Micro SaaS',
      description: 'From idea to launch: Complete guide to building and launching a successful micro SaaS product.',
      category: 'saas',
      duration: '60 min',
      difficulty: 'Advanced',
      views: 3200,
      icon: Zap,
      videoUrl: '#'
    },
    {
      id: 'api-integration-guide',
      title: 'API Integration Masterclass',
      description: 'Learn how to integrate third-party APIs and build robust, scalable integrations.',
      category: 'integration',
      duration: '40 min',
      difficulty: 'Intermediate',
      views: 1500,
      icon: Code,
      videoUrl: '#'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    return selectedCategory === 'all' || tutorial.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Solutions</title>
        <meta name="description" content="Master AI and IT solutions with our comprehensive tutorials. Learn from beginner to advanced levels with step-by-step guides and video tutorials." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, cloud migration, cybersecurity, micro saas, learning" />
        <meta property="og:title" content="Tutorials - Zion Tech Group" />
        <meta property="og:description" content="Learn AI and IT solutions with our comprehensive tutorials" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Learn AI & IT Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Master cutting-edge AI and IT solutions with our comprehensive tutorials. 
              From beginner to advanced levels, learn at your own pace with step-by-step guides.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
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
          </section>

          {/* Tutorials Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <tutorial.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tutorial.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-400">{tutorial.duration}</span>
                        <span className="text-sm text-gray-400">{tutorial.difficulty}</span>
                        <span className="text-sm text-gray-400">{tutorial.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/tutorials/${tutorial.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Tutorial
                    </Link>
                    <span className="text-sm text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are mastering AI and IT solutions with our tutorials. 
                Start your learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <Play className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;
