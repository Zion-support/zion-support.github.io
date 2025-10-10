'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, User, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Zap } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Brain },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'integration', name: 'Integration', icon: Code }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.',
      category: 'ai',
      duration: '45 min',
      author: 'Zion Tech Team',
      level: 'Beginner',
      thumbnail: '/tutorials/ai-basics.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud safely and efficiently.',
      category: 'cloud',
      duration: '60 min',
      author: 'Zion Tech Team',
      level: 'Intermediate',
      thumbnail: '/tutorials/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals for Businesses',
      description: 'Essential security practices to protect your digital assets and customer data.',
      category: 'security',
      duration: '30 min',
      author: 'Zion Tech Team',
      level: 'Beginner',
      thumbnail: '/tutorials/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Building AI-Powered Chatbots',
      description: 'Create intelligent chatbots using natural language processing and machine learning.',
      category: 'ai',
      duration: '90 min',
      author: 'Zion Tech Team',
      level: 'Advanced',
      thumbnail: '/tutorials/chatbot-ai.jpg'
    },
    {
      id: 5,
      title: 'API Integration and Management',
      description: 'Learn how to integrate and manage APIs for seamless data flow between systems.',
      category: 'integration',
      duration: '75 min',
      author: 'Zion Tech Team',
      level: 'Intermediate',
      thumbnail: '/tutorials/api-integration.jpg'
    },
    {
      id: 6,
      title: 'Data Analytics with AI',
      description: 'Transform your data into actionable insights using AI-powered analytics tools.',
      category: 'ai',
      duration: '50 min',
      author: 'Zion Tech Team',
      level: 'Intermediate',
      thumbnail: '/tutorials/data-analytics.jpg'
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn AI, cloud computing, cybersecurity, and IT solutions with our comprehensive tutorials and guides." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tutorials & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn AI, cloud computing, cybersecurity, and IT solutions with our comprehensive tutorials
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {tutorial.author}
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Start Tutorial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly adding new tutorials and guides. Contact us to request specific topics or get personalized training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Request Tutorial
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                📧 Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;