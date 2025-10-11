'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, User, ArrowRight, BookOpen } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning',
      duration: '45 min',
      level: 'Beginner',
      category: 'AI & ML',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      duration: '60 min',
      level: 'Intermediate',
      category: 'Cloud Computing',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your digital assets',
      duration: '30 min',
      level: 'Beginner',
      category: 'Security',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Advanced Data Analytics',
      description: 'Deep dive into data analysis techniques and visualization',
      duration: '90 min',
      level: 'Advanced',
      category: 'Data Science',
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  const categories = ['All', 'AI & ML', 'Cloud Computing', 'Security', 'Data Science'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Tutorials & Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and learning resources.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <Play className="text-white w-16 h-16" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {tutorial.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.level}
                      </div>
                    </div>
                    <a
                      href={`/tutorials/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-1"
                    >
                      Start Learning
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of learners and stay updated with the latest tutorials and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Join Community
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TutorialsPage;
