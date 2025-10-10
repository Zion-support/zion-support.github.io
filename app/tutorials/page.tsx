'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Brain, Cloud, Shield, Code, Play, Clock, Users } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      category: 'ai',
      duration: '15 min',
      difficulty: 'Beginner',
      description: 'Learn how to build and deploy your first AI chatbot using our platform.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      category: 'it',
      duration: '30 min',
      difficulty: 'Intermediate',
      description: 'A comprehensive guide to migrating your applications to the cloud.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      category: 'security',
      duration: '45 min',
      difficulty: 'Beginner',
      description: 'Essential cybersecurity concepts and best practices for businesses.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Building REST APIs with Node.js',
      category: 'development',
      duration: '60 min',
      difficulty: 'Intermediate',
      description: 'Step-by-step guide to creating robust REST APIs using Node.js.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 5,
      title: 'AI Data Analytics Dashboard',
      category: 'ai',
      duration: '25 min',
      difficulty: 'Advanced',
      description: 'Create interactive dashboards with AI-powered analytics.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 6,
      title: 'DevOps CI/CD Pipeline Setup',
      category: 'it',
      duration: '40 min',
      difficulty: 'Advanced',
      description: 'Set up automated deployment pipelines for your applications.',
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Tutorials | Zion Tech Group - Learning Resources</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and development. Step-by-step guides for all skill levels." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud computing, cybersecurity, development, programming, guides" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master new skills with our comprehensive tutorials on AI, cloud computing, cybersecurity, and development.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our curated collection of tutorials organized by topic and skill level.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {tutorial.description}
                    </p>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-600">Tutorials Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-600">Students Learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already mastering new skills with our tutorials.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Browse All Tutorials
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TutorialsPage;