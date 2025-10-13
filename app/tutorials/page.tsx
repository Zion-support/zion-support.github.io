'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Shield } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy your first AI chatbot in 30 minutes',
      duration: '30 min',
      difficulty: 'Beginner',
      author: 'Sarah Chen',
      category: 'AI & Machine Learning',
      icon: <Code className="w-6 h-6" />,
      link: '/tutorials/ai-chatbots'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud',
      duration: '45 min',
      difficulty: 'Intermediate',
      author: 'Michael Rodriguez',
      category: 'Cloud Computing',
      icon: <Database className="w-6 h-6" />,
      link: '/tutorials/cloud-migration'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your digital assets',
      duration: '60 min',
      difficulty: 'Beginner',
      author: 'Emily Johnson',
      category: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      link: '/tutorials/cybersecurity'
    },
    {
      id: 4,
      title: 'Data Analytics with Python',
      description: 'Analyze and visualize data using Python and popular libraries',
      duration: '90 min',
      difficulty: 'Advanced',
      author: 'David Kim',
      category: 'Data Analytics',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/tutorials/data-analytics'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials. Step-by-step guides for all skill levels." />
        <meta name="keywords" content="tutorials, AI learning, IT guides, programming, cloud computing, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how to implement AI and IT solutions with our comprehensive step-by-step guides. 
              From beginner to advanced, we have tutorials for every skill level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    {tutorial.icon}
                  </div>
                  <div>
                    <span className="text-purple-400 text-sm font-medium">{tutorial.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{tutorial.author}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <Link
                  to={tutorial.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers and IT professionals who are already learning with our tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;