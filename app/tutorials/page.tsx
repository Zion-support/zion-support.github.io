import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Users, Star, ArrowRight, Search, Filter } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const TutorialsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All',
    'AI Services',
    'IT Solutions',
    'Micro SAAS',
    '5G Solutions',
    'Getting Started',
    'Advanced Topics'
  ];

  const tutorials = [
    {
      title: "Getting Started with AI Analytics",
      description: "Learn how to set up and use our AI analytics platform to gain insights from your data.",
      category: "AI Services",
      duration: "15 min",
      difficulty: "Beginner",
      views: "2.5k",
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250",
      slug: "getting-started-ai-analytics",
      featured: true
    },
    {
      title: "Automating Business Processes with AI",
      description: "Discover how to automate repetitive tasks and streamline your business workflows.",
      category: "AI Services",
      duration: "25 min",
      difficulty: "Intermediate",
      views: "1.8k",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/250",
      slug: "automating-business-processes-ai",
      featured: true
    },
    {
      title: "Cloud Infrastructure Setup Guide",
      description: "Complete guide to setting up and managing cloud infrastructure for your business.",
      category: "IT Solutions",
      duration: "45 min",
      difficulty: "Advanced",
      views: "3.2k",
      rating: 4.7,
      thumbnail: "/api/placeholder/400/250",
      slug: "cloud-infrastructure-setup-guide",
      featured: false
    },
    {
      title: "Micro SAAS Integration Tutorial",
      description: "Learn how to integrate our micro SAAS solutions into your existing workflow.",
      category: "Micro SAAS",
      duration: "20 min",
      difficulty: "Beginner",
      views: "1.5k",
      rating: 4.6,
      thumbnail: "/api/placeholder/400/250",
      slug: "micro-saas-integration-tutorial",
      featured: false
    },
    {
      title: "5G Network Implementation",
      description: "Step-by-step guide to implementing 5G solutions for your organization.",
      category: "5G Solutions",
      duration: "35 min",
      difficulty: "Advanced",
      views: "2.1k",
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250",
      slug: "5g-network-implementation",
      featured: false
    },
    {
      title: "AI Content Generation Best Practices",
      description: "Master the art of creating high-quality content using AI tools and techniques.",
      category: "AI Services",
      duration: "30 min",
      difficulty: "Intermediate",
      views: "2.8k",
      rating: 4.9,
      thumbnail: "/api/placeholder/400/250",
      slug: "ai-content-generation-best-practices",
      featured: true
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Essential cybersecurity practices to protect your business and data.",
      category: "IT Solutions",
      duration: "40 min",
      difficulty: "Intermediate",
      views: "3.5k",
      rating: 4.7,
      thumbnail: "/api/placeholder/400/250",
      slug: "cybersecurity-fundamentals",
      featured: false
    },
    {
      title: "Data Visualization with AI",
      description: "Create stunning data visualizations and dashboards using AI-powered tools.",
      category: "AI Services",
      duration: "22 min",
      difficulty: "Intermediate",
      views: "1.9k",
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250",
      slug: "data-visualization-with-ai",
      featured: false
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Tutorials - Learn AI & Technology | Zion Tech Group"
        description="Comprehensive tutorials and guides for AI services, IT solutions, and technology. Learn from our experts with step-by-step video tutorials and documentation."
        keywords="tutorials, learning, AI tutorials, technology guides, video tutorials, how-to guides, training"
        canonical="https://ziontechgroup.com/tutorials"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Master
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Master our AI solutions and technology with comprehensive tutorials, guides, and hands-on learning experiences.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category === 'All' ? 'all' : category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Tutorials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these popular tutorials to get the most out of our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.category}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
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
                        {tutorial.views}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  <Link
                    to={`/tutorials/${tutorial.slug}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Watch Tutorial
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              All Tutorials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete library of tutorials and learning resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.category}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.difficulty}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
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
                        {tutorial.views}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>
                  <Link
                    to={`/tutorials/${tutorial.slug}`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    Watch Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of learners who are mastering AI and technology with our comprehensive tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;