'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, Users, Star, ArrowRight, BookOpen, Video, Code } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning from scratch.',
      duration: '2 hours',
      level: 'Beginner',
      students: '1.2K',
      rating: 4.8,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Applications',
      description: 'Master cloud architecture and deployment strategies for modern applications.',
      duration: '3.5 hours',
      level: 'Intermediate',
      students: '856',
      rating: 4.9,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Advanced Machine Learning Techniques',
      description: 'Deep dive into advanced ML algorithms and neural network architectures.',
      duration: '4 hours',
      level: 'Advanced',
      students: '634',
      rating: 4.7,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security practices for protecting your applications and data.',
      duration: '1.5 hours',
      level: 'Intermediate',
      students: '2.1K',
      rating: 4.6,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'React Native Mobile Development',
      description: 'Build cross-platform mobile applications with React Native.',
      duration: '5 hours',
      level: 'Intermediate',
      students: '1.5K',
      rating: 4.8,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Database Design and Optimization',
      description: 'Learn to design efficient databases and optimize query performance.',
      duration: '2.5 hours',
      level: 'Intermediate',
      students: '987',
      rating: 4.5,
      type: 'Video',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  const categories = [
    { name: 'All', count: tutorials.length },
    { name: 'AI & ML', count: 3 },
    { name: 'Cloud', count: 2 },
    { name: 'Mobile', count: 1 },
    { name: 'Security', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and hands-on learning experiences.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="bg-white/10 text-gray-300 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 h-48 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {tutorial.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {tutorial.level}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{tutorial.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join thousands of developers who are already mastering new technologies with our tutorials.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Browse All Tutorials
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutorialsPage;