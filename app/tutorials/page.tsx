'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Download, Users, Clock, Star } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and how to build your first AI application.',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      category: 'AI Development'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS, Azure, and GCP.',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 890,
      thumbnail: '/api/placeholder/400/250',
      category: 'Cloud Computing'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your applications and data.',
      duration: '1.5 hours',
      level: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '/api/placeholder/400/250',
      category: 'Security'
    },
    {
      id: 4,
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced machine learning techniques and algorithms.',
      duration: '4 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      category: 'AI Development'
    },
    {
      id: 5,
      title: 'DevOps and CI/CD Pipeline',
      description: 'Build robust DevOps pipelines for continuous integration and deployment.',
      duration: '2.5 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 1100,
      thumbnail: '/api/placeholder/400/250',
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'API Development and Management',
      description: 'Create, document, and manage RESTful and GraphQL APIs effectively.',
      duration: '2 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: 950,
      thumbnail: '/api/placeholder/400/250',
      category: 'API Development'
    }
  ];

  const categories = ['All', 'AI Development', 'Cloud Computing', 'Security', 'DevOps', 'API Development'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT skills with our comprehensive tutorials and courses." />
        <meta name="keywords" content="tutorials, courses, AI development, cloud computing, cybersecurity, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tutorials & Courses
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master AI and IT skills with our comprehensive tutorials, hands-on courses, and expert guidance.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <BookOpen className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-cyan-400 font-medium">{tutorial.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {tutorial.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.students}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Browse All Tutorials
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TutorialsPage;
