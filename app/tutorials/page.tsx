import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Play, 
  Clock, 
  User, 
  Star, 
  ArrowRight, 
  Search, 
  Filter, 
  BookOpen, 
  Video, 
  FileText, 
  Code, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  CheckCircle,
  Calendar,
  Award,
  Target,
  TrendingUp
} from "lucide-react";

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tutorials', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', label: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', label: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
    { id: 'development', label: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'business', label: 'Business Solutions', icon: <Target className="w-5 h-5" /> }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Analytics",
      description: "Learn how to set up and configure our AI analytics platform for maximum insights and performance.",
      category: "ai",
      duration: "45 min",
      difficulty: "Beginner",
      type: "Video",
      rating: 4.8,
      students: 1250,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Dr. Sarah Chen",
      tags: ["AI", "Analytics", "Dashboard", "Setup"],
      featured: true
    },
    {
      id: 2,
      title: "Advanced Cybersecurity Best Practices",
      description: "Comprehensive guide to implementing enterprise-grade security measures and threat detection.",
      category: "cybersecurity",
      duration: "2 hours",
      difficulty: "Advanced",
      type: "Video",
      rating: 4.9,
      students: 890,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Michael Rodriguez",
      tags: ["Security", "Threat Detection", "Compliance", "Enterprise"],
      featured: true
    },
    {
      id: 3,
      title: "Cloud Infrastructure Optimization",
      description: "Master cloud resource management, cost optimization, and performance tuning techniques.",
      category: "cloud",
      duration: "1.5 hours",
      difficulty: "Intermediate",
      type: "Video",
      rating: 4.7,
      students: 1100,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Alex Thompson",
      tags: ["Cloud", "AWS", "Azure", "Optimization"],
      featured: false
    },
    {
      id: 4,
      title: "Building AI-Powered Chatbots",
      description: "Step-by-step guide to creating intelligent chatbots with natural language processing.",
      category: "ai",
      duration: "3 hours",
      difficulty: "Intermediate",
      type: "Video",
      rating: 4.6,
      students: 750,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Dr. Sarah Chen",
      tags: ["AI", "Chatbot", "NLP", "Automation"],
      featured: false
    },
    {
      id: 5,
      title: "API Integration Fundamentals",
      description: "Learn how to integrate our services with your existing systems using REST APIs.",
      category: "development",
      duration: "1 hour",
      difficulty: "Beginner",
      type: "Video",
      rating: 4.5,
      students: 950,
      thumbnail: "/api/placeholder/400/250",
      instructor: "David Kim",
      tags: ["API", "Integration", "REST", "Development"],
      featured: false
    },
    {
      id: 6,
      title: "Data Privacy and Compliance",
      description: "Understanding GDPR, CCPA, and other privacy regulations in the context of AI and data analytics.",
      category: "business",
      duration: "1.5 hours",
      difficulty: "Intermediate",
      type: "Video",
      rating: 4.8,
      students: 680,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Lisa Wang",
      tags: ["Privacy", "Compliance", "GDPR", "Legal"],
      featured: false
    },
    {
      id: 7,
      title: "Machine Learning Model Deployment",
      description: "Best practices for deploying and monitoring machine learning models in production environments.",
      category: "ai",
      duration: "2.5 hours",
      difficulty: "Advanced",
      type: "Video",
      rating: 4.9,
      students: 420,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Dr. Sarah Chen",
      tags: ["ML", "Deployment", "Production", "Monitoring"],
      featured: true
    },
    {
      id: 8,
      title: "Network Security Fundamentals",
      description: "Essential concepts and practices for securing network infrastructure and communications.",
      category: "cybersecurity",
      duration: "1.5 hours",
      difficulty: "Beginner",
      type: "Video",
      rating: 4.4,
      students: 820,
      thumbnail: "/api/placeholder/400/250",
      instructor: "Michael Rodriguez",
      tags: ["Network", "Security", "Firewall", "VPN"],
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Tutorials Available", icon: <BookOpen className="w-6 h-6" /> },
    { number: "10,000+", label: "Students Enrolled", icon: <User className="w-6 h-6" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Access Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const searchResults = searchQuery 
    ? filteredTutorials.filter(tutorial => 
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredTutorials;

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Solutions</title>
        <meta 
          name="description" 
          content="Master AI and IT solutions with our comprehensive tutorials. Learn from experts about analytics, cybersecurity, cloud computing, and more." 
        />
        <meta 
          name="keywords" 
          content="tutorials, AI learning, IT training, cybersecurity tutorials, cloud computing, machine learning, business solutions" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Learn from Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Tutorials
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master AI and IT solutions with our comprehensive tutorial library. 
              Learn from industry experts and advance your technical skills.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials, topics, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Tutorials
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and highly-rated tutorials across all categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    tutorial.featured ? 'border-cyan-500/50 ring-2 ring-cyan-500/30' : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {tutorial.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {tutorial.rating}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Category and Difficulty */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {categories.find(cat => cat.id === tutorial.category)?.label}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {tutorial.description}
                    </p>

                    {/* Instructor and Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{tutorial.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{tutorial.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {tutorial.type === 'Video' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          <span>{tutorial.type}</span>
                        </div>
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
                <p className="text-gray-300">Try searching with different keywords or browse our categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Ready to Start Learning?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who are advancing their careers with our expert-led tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
