'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Clock, Users, Star, BookOpen, Code, Brain, Shield, BarChart3, Search, Filter } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Analytics Dashboard',
      description: 'Learn how to set up and configure your AI analytics dashboard for maximum insights.',
      category: 'ai',
      duration: '15 min',
      difficulty: 'Beginner',
      views: 1250,
      rating: 4.8,
      thumbnail: '/images/tutorials/ai-analytics.jpg',
      instructor: 'Dr. Sarah Chen',
      published: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Building Your First AI Chatbot',
      description: 'Step-by-step guide to creating an intelligent chatbot using our AI platform.',
      category: 'ai',
      duration: '25 min',
      difficulty: 'Intermediate',
      views: 2100,
      rating: 4.9,
      thumbnail: '/images/tutorials/ai-chatbot.jpg',
      instructor: 'Michael Rodriguez',
      published: '2024-01-10',
      featured: true
    },
    {
      id: 3,
      title: 'Advanced Security Configuration',
      description: 'Configure advanced security settings and implement best practices for your applications.',
      category: 'security',
      duration: '30 min',
      difficulty: 'Advanced',
      views: 890,
      rating: 4.7,
      thumbnail: '/images/tutorials/security.jpg',
      instructor: 'Alex Thompson',
      published: '2024-01-08',
      featured: false
    },
    {
      id: 4,
      title: 'API Integration Best Practices',
      description: 'Learn how to properly integrate APIs and handle authentication in your applications.',
      category: 'development',
      duration: '20 min',
      difficulty: 'Intermediate',
      views: 1650,
      rating: 4.6,
      thumbnail: '/images/tutorials/api-integration.jpg',
      instructor: 'Emily Wilson',
      published: '2024-01-05',
      featured: false
    },
    {
      id: 5,
      title: 'Data Visualization with AI',
      description: 'Create stunning data visualizations using AI-powered analytics tools.',
      category: 'analytics',
      duration: '18 min',
      difficulty: 'Beginner',
      views: 980,
      rating: 4.8,
      thumbnail: '/images/tutorials/data-viz.jpg',
      instructor: 'Dr. Sarah Chen',
      published: '2024-01-03',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies',
      description: 'Comprehensive guide to migrating your applications to the cloud safely and efficiently.',
      category: 'development',
      duration: '35 min',
      difficulty: 'Advanced',
      views: 1200,
      rating: 4.9,
      thumbnail: '/images/tutorials/cloud-migration.jpg',
      instructor: 'Michael Rodriguez',
      published: '2024-01-01',
      featured: true
    }
  ];

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);
  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  );

  const stats = [
    { label: 'Total Tutorials', value: '150+', icon: BookOpen },
    { label: 'Hours of Content', value: '500+', icon: Clock },
    { label: 'Students', value: '25,000+', icon: Users },
    { label: 'Average Rating', value: '4.8/5', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & Technology</title>
        <meta name="description" content="Learn AI and technology with our comprehensive tutorials. Step-by-step guides for AI solutions, development, security, and analytics." />
        <meta name="keywords" content="tutorials, AI tutorials, technology learning, programming guides, AI education, tech tutorials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span> with Experts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Master AI and technology with our comprehensive tutorials. Learn from industry experts with step-by-step guides and hands-on projects.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tutorials, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        {selectedCategory === 'all' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Featured Tutorials</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Start with these popular tutorials recommended by our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center relative">
                      <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                          {tutorial.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm">{tutorial.views} views</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {tutorial.instructor.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-gray-300 text-sm">{tutorial.instructor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-300 text-sm">{tutorial.rating}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tutorial
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Tutorials */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">All Tutorials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete library of tutorials covering AI, development, security, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 relative">
                    <Play className="w-12 h-12 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-semibold">
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-400 text-xs">{tutorial.views} views</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{tutorial.instructor}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm">
                    Watch Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of learners who are mastering AI and technology with our expert-led tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
