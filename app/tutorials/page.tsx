'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Download, Users, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Integration',
      description: 'Learn how to integrate AI solutions into your business processes',
      duration: '45 min',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      category: 'AI Integration'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      duration: '1h 30min',
      level: 'Intermediate',
      rating: 4.9,
      students: 890,
      thumbnail: '/api/placeholder/400/250',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your business',
      duration: '2h 15min',
      level: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '/api/placeholder/400/250',
      category: 'Security'
    },
    {
      title: 'Advanced Data Analytics',
      description: 'Master data analysis and visualization techniques',
      duration: '3h 20min',
      level: 'Advanced',
      rating: 4.9,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      category: 'Data Analytics'
    },
    {
      title: 'DevOps Automation',
      description: 'Automate your development and deployment processes',
      duration: '2h 45min',
      level: 'Intermediate',
      rating: 4.8,
      students: 1100,
      thumbnail: '/api/placeholder/400/250',
      category: 'DevOps'
    },
    {
      title: 'API Development Masterclass',
      description: 'Build robust and scalable APIs for your applications',
      duration: '4h 10min',
      level: 'Advanced',
      rating: 4.9,
      students: 750,
      thumbnail: '/api/placeholder/400/250',
      category: 'Development'
    }
  ];

  const categories = ['All', 'AI Integration', 'Cloud Computing', 'Security', 'Data Analytics', 'DevOps', 'Development'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and more. Expert-led courses for all skill levels." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learn from the Experts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive tutorials and courses. 
              From beginner to advanced, we have something for everyone.
            </p>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Tutorials Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Play className="w-16 h-16 text-cyan-400 opacity-50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {tutorial.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.students.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 font-medium">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who have already enhanced their skills with our tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TutorialsPage;