'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, User, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'data', name: 'Data Analytics' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Solutions',
      description: 'Learn the basics of implementing AI solutions in your business.',
      category: 'ai',
      duration: '15 min',
      type: 'video',
      level: 'Beginner',
      author: 'AI Team'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your business.',
      category: 'security',
      duration: '25 min',
      type: 'article',
      level: 'Intermediate',
      author: 'Security Team'
    },
    {
      id: 3,
      title: 'Cloud Migration Guide',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud.',
      category: 'cloud',
      duration: '45 min',
      type: 'video',
      level: 'Advanced',
      author: 'Cloud Team'
    },
    {
      id: 4,
      title: 'Data Analytics Fundamentals',
      description: 'Introduction to data analysis and visualization techniques.',
      category: 'data',
      duration: '30 min',
      type: 'tutorial',
      level: 'Beginner',
      author: 'Data Team'
    },
    {
      id: 5,
      title: 'Advanced AI Implementation',
      description: 'Deep dive into advanced AI techniques and implementation strategies.',
      category: 'ai',
      duration: '60 min',
      type: 'video',
      level: 'Advanced',
      author: 'AI Team'
    },
    {
      id: 6,
      title: 'Security Compliance Checklist',
      description: 'Comprehensive checklist for maintaining security compliance.',
      category: 'security',
      duration: '20 min',
      type: 'article',
      level: 'Intermediate',
      author: 'Security Team'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'article':
        return <FileText className="w-5 h-5" />;
      case 'tutorial':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn with our comprehensive tutorials on AI, IT solutions, cybersecurity, and more. Step-by-step guides and video tutorials." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tutorials & Learning
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master our AI and IT solutions with comprehensive tutorials, 
            guides, and step-by-step instructions.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map(tutorial => (
              <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-blue-600">
                      {getTypeIcon(tutorial.type)}
                      <span className="ml-2 text-sm font-medium capitalize">{tutorial.type}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tutorial.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {tutorial.author}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Paths</h2>
            <p className="text-xl text-gray-600">
              Follow structured learning paths to master specific skills and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions Path</h3>
              <p className="text-gray-600 mb-6">
                Complete learning path for AI solutions, from basics to advanced implementation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Introduction to AI
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Machine Learning Basics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Implementation Strategies
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced AI Techniques
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Learning Path
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity Path</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive cybersecurity learning path for IT professionals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Security Fundamentals
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Network Security
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Threat Detection
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Incident Response
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Learning Path
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our comprehensive library of tutorials and start mastering new skills today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Tutorials
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Personalized Recommendations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;