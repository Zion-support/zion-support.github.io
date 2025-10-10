'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Clock, Users, Star, Search, Filter, BookOpen, Code, Brain, Cloud, Shield, ArrowRight } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy your first AI-powered chatbot using our platform.',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '🤖',
      features: ['Step-by-step guide', 'Code examples', 'Live demo', 'Best practices']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS, Azure, and GCP.',
      category: 'cloud',
      duration: '2 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 980,
      thumbnail: '☁️',
      features: ['Multi-cloud setup', 'Security configuration', 'Cost optimization', 'Monitoring setup']
    },
    {
      id: 3,
      title: 'Data Analytics with AI',
      description: 'Transform your data into actionable insights using AI-powered analytics tools.',
      category: 'analytics',
      duration: '1.5 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 756,
      thumbnail: '📊',
      features: ['Data visualization', 'Predictive modeling', 'Dashboard creation', 'Report automation']
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity strategies to protect your business from threats.',
      category: 'security',
      duration: '1 hour',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 1100,
      thumbnail: '🔒',
      features: ['Threat assessment', 'Security policies', 'Incident response', 'Compliance guidelines']
    },
    {
      id: 5,
      title: 'API Development Fundamentals',
      description: 'Build robust and scalable APIs using modern development practices.',
      category: 'development',
      duration: '3 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 650,
      thumbnail: '⚡',
      features: ['RESTful design', 'Authentication', 'Documentation', 'Testing strategies']
    },
    {
      id: 6,
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning concepts and practical implementation.',
      category: 'ai',
      duration: '2.5 hours',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      thumbnail: '🧠',
      features: ['ML algorithms', 'Data preprocessing', 'Model training', 'Performance evaluation']
    }
  ];

  const categories = ['all', 'ai', 'cloud', 'analytics', 'security', 'development'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, cybersecurity, and development. Learn from industry experts and advance your technical skills." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud computing, cybersecurity, development, programming, machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tutorials & Learning
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT skills with our comprehensive tutorials designed by industry experts.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 w-full md:w-80"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="cloud">Cloud Computing</option>
                <option value="analytics">Data Analytics</option>
                <option value="security">Cybersecurity</option>
                <option value="development">Development</option>
              </select>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{tutorial.thumbnail}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tutorial.title}</h3>
                      <span className="text-sm text-cyan-400 capitalize">{tutorial.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {tutorial.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
                </div>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No tutorials found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;