'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Play, Clock, User, ArrowRight } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI',
      description: 'Learn the basics of artificial intelligence and how to implement it in your business.',
      duration: '30 min',
      level: 'Beginner',
      author: 'Dr. Sarah Johnson',
      videoUrl: '#'
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Deep dive into machine learning algorithms and their practical applications.',
      duration: '45 min',
      level: 'Advanced',
      author: 'Prof. Michael Chen',
      videoUrl: '#'
    },
    {
      title: 'AI Ethics and Best Practices',
      description: 'Understanding the ethical implications of AI and implementing responsible practices.',
      duration: '25 min',
      level: 'Intermediate',
      author: 'Dr. Emily Rodriguez',
      videoUrl: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion AI | Learn AI & Technology</title>
        <meta name="description" content="Comprehensive tutorials on AI, machine learning, and technology to help you master the latest innovations." />
        <meta name="keywords" content="AI tutorials, machine learning, technology education, online courses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn AI &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest AI and technology skills with our comprehensive tutorials 
              designed for all skill levels.
            </p>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{tutorial.author}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Start Tutorial</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are mastering AI and technology with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 bg-white/10 text-white border border-gray-600 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;
