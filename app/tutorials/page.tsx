'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Shield } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy your first AI chatbot using our platform',
      duration: '45 min',
      level: 'Beginner',
      category: 'AI Development',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud',
      duration: '2 hours',
      level: 'Intermediate',
      category: 'Cloud Computing',
      icon: Database,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your business from cyber threats',
      duration: '1.5 hours',
      level: 'Beginner',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'API Development with Node.js',
      description: 'Build robust RESTful APIs using Node.js and Express',
      duration: '3 hours',
      level: 'Intermediate',
      category: 'Web Development',
      icon: Code,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning concepts and practical applications',
      duration: '4 hours',
      level: 'Beginner',
      category: 'AI Development',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'DevOps Pipeline Setup',
      description: 'Set up CI/CD pipelines for automated deployment',
      duration: '2.5 hours',
      level: 'Advanced',
      category: 'DevOps',
      icon: Code,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const categories = ['All', 'AI Development', 'Cloud Computing', 'Security', 'Web Development', 'DevOps'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI, IT solutions, and technology with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, IT tutorials, technology guides" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn with <span className="text-cyan-400">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI, IT solutions, and cutting-edge technologies with our comprehensive tutorials and hands-on guides.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${tutorial.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tutorial.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/10 text-cyan-400 text-sm font-semibold rounded-full">
                    {tutorial.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {tutorial.level}
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Learning Paths */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">AI Developer Path</h3>
                <p className="text-gray-300 mb-6">
                  Complete learning path to become an AI developer, from basics to advanced concepts.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Machine Learning Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Deep Learning with Python
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    AI Model Deployment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Advanced AI Applications
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Start AI Path
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineer Path</h3>
                <p className="text-gray-300 mb-6">
                  Master DevOps practices and tools for modern software development and deployment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Containerization with Docker
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Kubernetes Orchestration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    CI/CD Pipeline Setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    Infrastructure as Code
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Start DevOps Path
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105">
                Browse All Tutorials
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Get Personalized Learning Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;