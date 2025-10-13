'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Brain, Shield } from 'lucide-react';

const TutorialsPage = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Development",
      description: "Learn the fundamentals of artificial intelligence and machine learning from scratch.",
      duration: "2 hours",
      level: "Beginner",
      category: "AI & Machine Learning",
      instructor: "Sarah Chen",
      thumbnail: "/images/tutorials/ai-basics.jpg"
    },
    {
      id: 2,
      title: "5G Network Implementation Guide",
      description: "Complete guide to implementing 5G networks in your organization.",
      duration: "3 hours",
      level: "Intermediate",
      category: "5G Technology",
      instructor: "David Kim",
      thumbnail: "/images/tutorials/5g-implementation.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity strategies to protect your business from threats.",
      duration: "1.5 hours",
      level: "Beginner",
      category: "Cybersecurity",
      instructor: "Emily Johnson",
      thumbnail: "/images/tutorials/cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies",
      description: "Step-by-step guide to migrating your infrastructure to the cloud.",
      duration: "2.5 hours",
      level: "Intermediate",
      category: "Cloud Computing",
      instructor: "Michael Rodriguez",
      thumbnail: "/images/tutorials/cloud-migration.jpg"
    },
    {
      id: 5,
      title: "Building Micro SaaS Applications",
      description: "Learn how to create and launch successful micro SaaS products.",
      duration: "4 hours",
      level: "Advanced",
      category: "SaaS Development",
      instructor: "Sarah Chen",
      thumbnail: "/images/tutorials/micro-saas.jpg"
    },
    {
      id: 6,
      title: "Data Analytics with Python",
      description: "Master data analysis and visualization using Python and modern tools.",
      duration: "3.5 hours",
      level: "Intermediate",
      category: "Data Science",
      instructor: "David Kim",
      thumbnail: "/images/tutorials/data-analytics.jpg"
    }
  ];

  const categories = [
    { name: "All Tutorials", icon: <BookOpen className="w-5 h-5" />, count: 24 },
    { name: "AI & Machine Learning", icon: <Brain className="w-5 h-5" />, count: 8 },
    { name: "5G Technology", icon: <Code className="w-5 h-5" />, count: 4 },
    { name: "Cybersecurity", icon: <Shield className="w-5 h-5" />, count: 6 },
    { name: "Cloud Computing", icon: <Code className="w-5 h-5" />, count: 3 },
    { name: "SaaS Development", icon: <Code className="w-5 h-5" />, count: 3 }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn cutting-edge technologies with our comprehensive tutorials on AI, 5G, cybersecurity, cloud computing, and more." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tutorials & Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the latest technologies with our comprehensive tutorials and hands-on learning experiences. 
            From AI to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                index === 0
                  ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                  : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs opacity-75">{category.count} tutorials</span>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Tutorial */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Tutorial</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">Tutorial Video</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tutorials[0].level)}`}>
                    {tutorials[0].level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tutorials[0].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {tutorials[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{tutorials[0].duration}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{tutorials[0].instructor}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.slice(1).map((tutorial) => (
            <div key={tutorial.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">Tutorial Video</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-medium">
                    {tutorial.category}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                    {tutorial.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{tutorial.instructor}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who are advancing their careers with our expert-led tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Browse All Tutorials
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Get Learning Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;