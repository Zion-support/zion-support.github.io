'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Cloud, Shield, Star, Users, Zap, Brain, BarChart, Target, TrendingUp, Globe, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  author: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  rating: number;
  students: number;
}

const TutorialsPage: React.FC = () => {
  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI/ML',
      author: 'Dr. Sarah Chen',
      thumbnail: '/tutorials/ai-fundamentals.jpg',
      videoUrl: '/tutorials/ai-fundamentals.mp4',
      rating: 4.8,
      students: 1250
    },
    {
      id: '2',
      title: 'Cloud Architecture Fundamentals',
      description: 'Master cloud computing concepts and design scalable, reliable systems.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Cloud',
      author: 'Michael Rodriguez',
      thumbnail: '/tutorials/cloud-architecture.jpg',
      videoUrl: '/tutorials/cloud-architecture.mp4',
      rating: 4.9,
      students: 980
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your applications and data.',
      level: 'Intermediate',
      duration: '2.5 hours',
      category: 'Security',
      author: 'Alex Thompson',
      thumbnail: '/tutorials/cybersecurity.jpg',
      videoUrl: '/tutorials/cybersecurity.mp4',
      rating: 4.7,
      students: 756
    },
    {
      id: '4',
      title: 'React Development Masterclass',
      description: 'Build modern web applications with React, TypeScript, and best practices.',
      level: 'Advanced',
      duration: '4 hours',
      category: 'Development',
      author: 'Emma Wilson',
      thumbnail: '/tutorials/react-masterclass.jpg',
      videoUrl: '/tutorials/react-masterclass.mp4',
      rating: 4.9,
      students: 2100
    },
    {
      id: '5',
      title: 'Database Design & Optimization',
      description: 'Learn to design efficient databases and optimize query performance.',
      level: 'Intermediate',
      duration: '3.5 hours',
      category: 'Database',
      author: 'David Kim',
      thumbnail: '/tutorials/database-design.jpg',
      videoUrl: '/tutorials/database-design.mp4',
      rating: 4.6,
      students: 890
    },
    {
      id: '6',
      title: 'DevOps & CI/CD Pipeline',
      description: 'Set up automated deployment pipelines and infrastructure as code.',
      level: 'Advanced',
      duration: '5 hours',
      category: 'DevOps',
      author: 'Sarah Johnson',
      thumbnail: '/tutorials/devops-cicd.jpg',
      videoUrl: '/tutorials/devops-cicd.mp4',
      rating: 4.8,
      students: 1450
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'AI/ML', name: 'AI/ML', icon: Brain },
    { id: 'Cloud', name: 'Cloud', icon: Cloud },
    { id: 'Security', name: 'Security', icon: Shield },
    { id: 'Development', name: 'Development', icon: Code },
    { id: 'Database', name: 'Database', icon: Database },
    { id: 'DevOps', name: 'DevOps', icon: Settings }
  ];

  const stats = [
    { number: '50+', label: 'Tutorials', icon: BookOpen },
    { number: '10K+', label: 'Students', icon: Users },
    { number: '4.8', label: 'Average Rating', icon: Star },
    { number: '100+', label: 'Hours of Content', icon: Clock }
  ];

  const featuredTutorial = tutorials[0]; // First tutorial as featured

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive collection of tutorials covering AI, cloud computing, cybersecurity, and software development." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, cybersecurity, software development, online courses" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Grow</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive collection of tutorials and courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Browse All Tutorials
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorial */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tutorial
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our most popular tutorial and build your foundation.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-400/50 shadow-lg shadow-cyan-400/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-300">Tutorial Preview</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-cyan-400 text-sm font-medium">{featuredTutorial.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredTutorial.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredTutorial.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredTutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredTutorial.author}
                    </div>
                    <div className="flex items-center">
                      <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {featuredTutorial.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(featuredTutorial.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {featuredTutorial.rating} ({featuredTutorial.students} students)
                      </span>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Start Learning
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Tutorials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of tutorials covering various technologies and skill levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.slice(1).map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-300">Tutorial Preview</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{tutorial.category}</span>
                      <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{tutorial.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {tutorial.author}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(tutorial.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {tutorial.rating} ({tutorial.students})
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      Start Learning
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are already learning with our comprehensive tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Browse All Tutorials
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Get Learning Path
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default TutorialsPage;