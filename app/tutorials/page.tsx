'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Download, Users, Clock, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      category: 'AI Development'
    },
    {
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
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices for protecting your applications and data.',
      duration: '1.5 hours',
      level: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '/api/placeholder/400/250',
      category: 'Security'
    },
    {
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns and performance optimization techniques.',
      duration: '4 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      category: 'Web Development'
    },
    {
      title: 'DevOps CI/CD Pipeline',
      description: 'Build and deploy automated CI/CD pipelines for modern applications.',
      duration: '2.5 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 1100,
      thumbnail: '/api/placeholder/400/250',
      category: 'DevOps'
    },
    {
      title: 'Data Analytics with Python',
      description: 'Comprehensive data analysis using Python, pandas, and visualization libraries.',
      duration: '3.5 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: 1800,
      thumbnail: '/api/placeholder/400/250',
      category: 'Data Science'
    }
  ];

  const categories = ['All', 'AI Development', 'Cloud Computing', 'Security', 'Web Development', 'DevOps', 'Data Science'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials covering AI development, cloud computing, cybersecurity, and more." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Learn from the Experts
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Master cutting-edge technologies with our comprehensive tutorials and hands-on projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>50+ Tutorials</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 text-white font-medium"
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
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/60 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {tutorial.category}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                        {tutorial.level}
                      </span>
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
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span>{tutorial.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{tutorial.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
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
                Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TutorialsPage;