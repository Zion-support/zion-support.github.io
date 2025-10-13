import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Clock, User, BookOpen, Download, ExternalLink, Star, CheckCircle, Code, Database, Shield, Globe, Zap } from 'lucide-react';

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Tutorials', count: 25 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'ai-services', name: 'AI Services', count: 10 },
    { id: 'api', name: 'API Integration', count: 4 },
    { id: 'advanced', name: 'Advanced Topics', count: 3 }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Analytics Platform",
      description: "Learn how to set up and configure your AI analytics dashboard from scratch.",
      category: 'getting-started',
      duration: '15 min',
      difficulty: 'Beginner',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/ai-analytics-getting-started',
      popular: true,
      tags: ['AI', 'Analytics', 'Dashboard']
    },
    {
      id: 2,
      title: "Building Your First AI Chatbot",
      description: "Step-by-step guide to creating an intelligent customer support chatbot.",
      category: 'ai-services',
      duration: '25 min',
      difficulty: 'Intermediate',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 2100,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/ai-chatbot-builder',
      popular: true,
      tags: ['AI', 'Chatbot', 'Customer Support']
    },
    {
      id: 3,
      title: "API Integration with Python",
      description: "Complete guide to integrating our APIs with Python applications.",
      category: 'api',
      duration: '30 min',
      difficulty: 'Intermediate',
      instructor: 'David Kim',
      rating: 4.7,
      students: 890,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/python-api-integration',
      popular: false,
      tags: ['API', 'Python', 'Integration']
    },
    {
      id: 4,
      title: "Advanced AI Model Training",
      description: "Learn how to train custom AI models for your specific business needs.",
      category: 'advanced',
      duration: '45 min',
      difficulty: 'Advanced',
      instructor: 'Emily Rodriguez',
      rating: 4.9,
      students: 456,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/advanced-ai-training',
      popular: true,
      tags: ['AI', 'Machine Learning', 'Training']
    },
    {
      id: 5,
      title: "5G Network Configuration",
      description: "Configure and optimize 5G network infrastructure for IoT applications.",
      category: 'ai-services',
      duration: '35 min',
      difficulty: 'Intermediate',
      instructor: 'Alex Thompson',
      rating: 4.6,
      students: 678,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/5g-network-config',
      popular: false,
      tags: ['5G', 'IoT', 'Network']
    },
    {
      id: 6,
      title: "Cloud Migration Best Practices",
      description: "Migrate your applications to the cloud with minimal downtime and maximum efficiency.",
      category: 'getting-started',
      duration: '20 min',
      difficulty: 'Beginner',
      instructor: 'Lisa Wang',
      rating: 4.8,
      students: 1450,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/cloud-migration',
      popular: true,
      tags: ['Cloud', 'Migration', 'DevOps']
    },
    {
      id: 7,
      title: "Cybersecurity Implementation Guide",
      description: "Implement comprehensive cybersecurity measures for your organization.",
      category: 'advanced',
      duration: '40 min',
      difficulty: 'Advanced',
      instructor: 'Robert Martinez',
      rating: 4.9,
      students: 567,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/cybersecurity-implementation',
      popular: false,
      tags: ['Security', 'Cybersecurity', 'Implementation']
    },
    {
      id: 8,
      title: "Data Visualization with AI",
      description: "Create stunning data visualizations using our AI-powered analytics tools.",
      category: 'ai-services',
      duration: '22 min',
      difficulty: 'Intermediate',
      instructor: 'Jennifer Lee',
      rating: 4.7,
      students: 1120,
      thumbnail: '/api/placeholder/400/225',
      videoUrl: '/tutorials/data-visualization-ai',
      popular: false,
      tags: ['Data', 'Visualization', 'AI']
    }
  ];

  const featuredTutorials = tutorials.filter(tutorial => tutorial.popular);

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Advanced': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>Video Tutorials - Learn AI & Technology | Zion Tech Group</title>
        <meta
          name="description"
          content="Learn how to use Zion Tech Group's AI and technology solutions with our comprehensive video tutorials. Step-by-step guides for all skill levels."
        />
        <meta
          name="keywords"
          content="video tutorials, learning, AI tutorials, technology guides, step-by-step, how-to, training videos"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Video
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Tutorials
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master our AI and technology solutions with step-by-step video tutorials designed for all skill levels.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        {selectedCategory === 'all' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {tutorial.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </span>
                        <div className="flex items-center text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1">{tutorial.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.instructor}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.students}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tutorial.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={tutorial.videoUrl}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Watch Tutorial
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Tutorials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              {selectedCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1">{tutorial.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.instructor}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tutorial.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={tutorial.videoUrl}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Watch Tutorial
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredTutorials.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of learners who are mastering AI and technology with our comprehensive tutorial library.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Personalized Training
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}