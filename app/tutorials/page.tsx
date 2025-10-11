'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Brain, Cloud, Shield, Code, Play, Clock, Users } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Tutorials' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'web', name: 'Web Development' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'data', name: 'Data Science' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      category: 'ai',
      duration: '15 min',
      difficulty: 'Beginner',
      description: 'Learn how to build your first AI chatbot using modern frameworks.',
      instructor: 'Sarah Johnson',
      students: 1250,
      rating: 4.8,
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'React.js Fundamentals',
      category: 'web',
      duration: '45 min',
      difficulty: 'Beginner',
      description: 'Master the basics of React.js development with hands-on examples.',
      instructor: 'Mike Chen',
      students: 2100,
      rating: 4.9,
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'AWS Cloud Architecture',
      category: 'cloud',
      duration: '60 min',
      difficulty: 'Intermediate',
      description: 'Design scalable cloud architectures using AWS services.',
      instructor: 'Alex Rodriguez',
      students: 1800,
      rating: 4.7,
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      category: 'security',
      duration: '30 min',
      difficulty: 'Intermediate',
      description: 'Essential security practices for protecting your applications.',
      instructor: 'Emma Wilson',
      students: 1650,
      rating: 4.8,
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Machine Learning with Python',
      category: 'ai',
      duration: '90 min',
      difficulty: 'Advanced',
      description: 'Build machine learning models using Python and scikit-learn.',
      instructor: 'David Kim',
      students: 3200,
      rating: 4.9,
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 6,
      title: 'Data Visualization with D3.js',
      category: 'data',
      duration: '75 min',
      difficulty: 'Intermediate',
      description: 'Create interactive data visualizations using D3.js.',
      instructor: 'Lisa Zhang',
      students: 1400,
      rating: 4.6,
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return Brain;
      case 'web':
        return Code;
      case 'cloud':
        return Cloud;
      case 'security':
        return Shield;
      case 'data':
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, web development, cloud computing, and more." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Tutorials</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn from our comprehensive tutorials on AI, web development, cloud computing, and more.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => {
                const CategoryIcon = getCategoryIcon(tutorial.category);
                return (
                  <div
                    key={tutorial.id}
                    className={`bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                      tutorial.featured ? 'border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'border border-gray-700 hover:border-cyan-500/50'
                    }`}
                  >
                    {tutorial.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="relative">
                      <img
                        src={tutorial.image}
                        alt={tutorial.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <CategoryIcon className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-cyan-400 text-sm font-semibold">
                          {categories.find(cat => cat.id === tutorial.category)?.name}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-white mb-2">{tutorial.title}</h2>
                      <p className="text-gray-300 mb-4">{tutorial.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.students.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(tutorial.rating) ? 'text-yellow-400' : 'text-gray-400'}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-300 text-sm">{tutorial.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">by {tutorial.instructor}</span>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tutorial
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No tutorials found</h3>
                <p className="text-gray-300">Try selecting a different category.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of students learning with our comprehensive tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Get Started
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Request Custom Tutorial
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TutorialsPage;
