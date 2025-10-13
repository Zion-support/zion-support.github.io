import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const TutorialsPage = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Analytics',
      description: 'Learn how to set up and use our AI analytics platform to gain insights from your data.',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'AI Services',
      icon: Code
    },
    {
      id: 2,
      title: '5G Network Configuration',
      description: 'Step-by-step guide to configuring your 5G network infrastructure for optimal performance.',
      duration: '25 min',
      difficulty: 'Intermediate',
      category: '5G Solutions',
      icon: Zap
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security practices to protect your business from cyber threats.',
      duration: '20 min',
      difficulty: 'Beginner',
      category: 'IT Services',
      icon: BookOpen
    },
    {
      id: 4,
      title: 'Micro SAAS Deployment',
      description: 'How to deploy and manage your micro SAAS applications effectively.',
      duration: '30 min',
      difficulty: 'Advanced',
      category: 'Micro SAAS',
      icon: Code
    }
  ];

  const categories = ['All', 'AI Services', '5G Solutions', 'IT Services', 'Micro SAAS'];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Tutorials - Zion Tech Group"
        description="Learn how to use Zion Tech Group services with our comprehensive tutorials and guides. From beginner to advanced levels."
        keywords="tutorials, guides, learning, AI tutorials, 5G tutorials, IT tutorials, how-to guides"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tutorials & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn how to use our services effectively with step-by-step tutorials and comprehensive guides.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutorials.map((tutorial) => {
            const IconComponent = tutorial.icon;
            return (
              <div key={tutorial.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{tutorial.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Tutorial
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us for personalized assistance or to request new tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Contact Support <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/support" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Support Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
