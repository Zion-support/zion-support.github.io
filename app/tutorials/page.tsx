'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Play, Clock, Users, Star, ArrowRight, BookOpen, Brain, Cloud, Shield, BarChart3, MessageSquare, Eye, Zap, Target, Settings, Code, Database, Smartphone, Globe, Headphones, Mail, Phone, MapPin, Calendar, TrendingUp, Heart, FileText, Cpu, Package, Monitor, Wifi, Lock, Award, CheckCircle, ExternalLink, Video, Download, Share2, ThumbsUp, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3 },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'automation', name: 'Automation', icon: Zap }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy intelligent chatbots using our AI platform. This comprehensive tutorial covers everything from setup to advanced features.',
      category: 'ai',
      duration: '45 minutes',
      difficulty: 'Beginner',
      rating: 4.8,
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
      thumbnail: '/images/tutorials/ai-chatbot.jpg',
      instructor: 'Dr. Sarah Johnson',
      instructorRole: 'AI Research Director',
      instructorImage: '/images/instructors/sarah-johnson.jpg',
      publishedDate: '2024-01-15',
      tags: ['AI', 'Chatbots', 'Natural Language Processing', 'Machine Learning'],
      videoUrl: '/videos/ai-chatbot-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Code examples', 'API documentation', 'Sample datasets']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup Guide',
      description: 'Step-by-step guide to setting up scalable cloud infrastructure using AWS, Azure, and Google Cloud Platform.',
      category: 'cloud',
      duration: '60 minutes',
      difficulty: 'Intermediate',
      rating: 4.7,
      views: 980,
      likes: 67,
      comments: 18,
      featured: true,
      thumbnail: '/images/tutorials/cloud-infrastructure.jpg',
      instructor: 'Michael Chen',
      instructorRole: 'Cloud Solutions Architect',
      instructorImage: '/images/instructors/michael-chen.jpg',
      publishedDate: '2024-01-12',
      tags: ['Cloud Computing', 'AWS', 'Azure', 'Infrastructure'],
      videoUrl: '/videos/cloud-infrastructure-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Terraform scripts', 'Architecture diagrams', 'Cost calculator']
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your business from threats and ensure compliance with industry standards.',
      category: 'security',
      duration: '30 minutes',
      difficulty: 'Beginner',
      rating: 4.9,
      views: 1450,
      likes: 112,
      comments: 31,
      featured: false,
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      instructor: 'Emily Rodriguez',
      instructorRole: 'Cybersecurity Expert',
      instructorImage: '/images/instructors/emily-rodriguez.jpg',
      publishedDate: '2024-01-10',
      tags: ['Security', 'Compliance', 'Threat Protection', 'Best Practices'],
      videoUrl: '/videos/cybersecurity-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Security checklist', 'Compliance guide', 'Tool recommendations']
    },
    {
      id: 4,
      title: 'Data Analytics with AI',
      description: 'Transform your data into actionable insights using AI-powered analytics tools and machine learning algorithms.',
      category: 'analytics',
      duration: '75 minutes',
      difficulty: 'Advanced',
      rating: 4.6,
      views: 890,
      likes: 54,
      comments: 15,
      featured: false,
      thumbnail: '/images/tutorials/data-analytics.jpg',
      instructor: 'David Kim',
      instructorRole: 'Data Science Lead',
      instructorImage: '/images/instructors/david-kim.jpg',
      publishedDate: '2024-01-08',
      tags: ['Data Analytics', 'Machine Learning', 'Business Intelligence', 'Visualization'],
      videoUrl: '/videos/data-analytics-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Sample datasets', 'Jupyter notebooks', 'Dashboard templates']
    },
    {
      id: 5,
      title: 'Web Development with React',
      description: 'Build modern, responsive web applications using React, TypeScript, and best practices for performance and accessibility.',
      category: 'development',
      duration: '90 minutes',
      difficulty: 'Intermediate',
      rating: 4.7,
      views: 1100,
      likes: 78,
      comments: 22,
      featured: true,
      thumbnail: '/images/tutorials/react-development.jpg',
      instructor: 'Lisa Wang',
      instructorRole: 'Senior Developer',
      instructorImage: '/images/instructors/lisa-wang.jpg',
      publishedDate: '2024-01-05',
      tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
      videoUrl: '/videos/react-development-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Starter templates', 'Component library', 'Deployment guide']
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Pipeline',
      description: 'Set up automated deployment pipelines and implement DevOps practices for faster, more reliable software delivery.',
      category: 'automation',
      duration: '50 minutes',
      difficulty: 'Intermediate',
      rating: 4.5,
      views: 750,
      likes: 45,
      comments: 12,
      featured: false,
      thumbnail: '/images/tutorials/devops-cicd.jpg',
      instructor: 'Alex Thompson',
      instructorRole: 'DevOps Engineer',
      instructorImage: '/images/instructors/alex-thompson.jpg',
      publishedDate: '2024-01-03',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Docker', 'Kubernetes'],
      videoUrl: '/videos/devops-cicd-tutorial.mp4',
      transcript: 'Full transcript available',
      resources: ['Pipeline templates', 'Docker files', 'Kubernetes manifests']
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from experts with step-by-step guides, video tutorials, and hands-on exercises." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, education, video courses, step-by-step guides" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Learn from <span className="text-cyan-400">Experts</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Master AI and IT skills with our comprehensive tutorials. 
                Learn from industry experts with step-by-step guides and hands-on exercises.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Star className="w-6 h-6 text-cyan-400 mr-2" />
                  Featured Tutorials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <Play className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                            {tutorial.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h3>
                        <p className="text-gray-300 mb-4">{tutorial.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {tutorial.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {tutorial.views}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {tutorial.rating}
                          </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                          Start Learning
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Tutorials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">
                {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'All Tutorials'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                    <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </span>
                        {tutorial.featured && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{tutorial.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {tutorial.duration}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {tutorial.views}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          {tutorial.rating}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tutorial.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                        Start Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTutorials.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who are already learning with our tutorials. 
                Get access to expert knowledge and practical skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Started
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TutorialsPage;