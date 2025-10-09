'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, Users, Star, ArrowRight, CheckCircle, BookOpen, Code, Zap } from 'lucide-react';

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI & Machine Learning', icon: Zap },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Code },
    { id: 'security', name: 'Security & Compliance', icon: CheckCircle }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Building Your First AI Chatbot',
      description: 'Learn to create an intelligent chatbot using modern AI frameworks and deploy it to production.',
      category: 'ai',
      duration: '2h 30m',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/tutorials/ai-chatbot.jpg',
      href: '/tutorials/building-ai-chatbot',
      featured: true
    },
    {
      id: 2,
      title: 'AWS Cloud Migration Masterclass',
      description: 'Complete guide to migrating your applications to AWS with zero downtime and optimal performance.',
      category: 'cloud',
      duration: '4h 15m',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 890,
      thumbnail: '/tutorials/aws-migration.jpg',
      href: '/tutorials/aws-cloud-migration',
      featured: true
    },
    {
      id: 3,
      title: 'Implementing Zero Trust Security',
      description: 'Step-by-step implementation of zero trust security architecture for modern organizations.',
      category: 'security',
      duration: '3h 45m',
      difficulty: 'Advanced',
      rating: 4.7,
      students: 650,
      thumbnail: '/tutorials/zero-trust.jpg',
      href: '/tutorials/zero-trust-implementation'
    },
    {
      id: 4,
      title: 'Machine Learning Model Deployment',
      description: 'Deploy ML models to production with MLOps best practices and monitoring.',
      category: 'ai',
      duration: '2h 15m',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 1100,
      thumbnail: '/tutorials/ml-deployment.jpg',
      href: '/tutorials/ml-model-deployment'
    },
    {
      id: 5,
      title: 'Kubernetes Orchestration Guide',
      description: 'Master container orchestration with Kubernetes for scalable applications.',
      category: 'cloud',
      duration: '3h 30m',
      difficulty: 'Advanced',
      rating: 4.8,
      students: 750,
      thumbnail: '/tutorials/kubernetes.jpg',
      href: '/tutorials/kubernetes-orchestration'
    },
    {
      id: 6,
      title: 'GDPR Compliance for AI Systems',
      description: 'Ensure your AI systems comply with GDPR and other data protection regulations.',
      category: 'security',
      duration: '2h 45m',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 420,
      thumbnail: '/tutorials/gdpr-compliance.jpg',
      href: '/tutorials/gdpr-ai-compliance'
    },
    {
      id: 7,
      title: 'Building Microservices Architecture',
      description: 'Design and implement scalable microservices architecture for modern applications.',
      category: 'cloud',
      duration: '4h 00m',
      difficulty: 'Advanced',
      rating: 4.7,
      students: 920,
      thumbnail: '/tutorials/microservices.jpg',
      href: '/tutorials/microservices-architecture'
    },
    {
      id: 8,
      title: 'AI-Powered Data Analytics',
      description: 'Transform your data into actionable insights using AI and machine learning techniques.',
      category: 'ai',
      duration: '2h 50m',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 680,
      thumbnail: '/tutorials/ai-analytics.jpg',
      href: '/tutorials/ai-data-analytics'
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-900/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-900/20';
      case 'Advanced': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Video Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Learn from the experts with hands-on video tutorials
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master cutting-edge technologies with our comprehensive video tutorials. 
              From beginner to advanced, we've got you covered with practical, real-world examples.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        {selectedCategory === 'all' && (
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Tutorials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tutorials.filter(t => t.featured).map((tutorial) => (
                  <div key={tutorial.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {tutorial.students.toLocaleString()} students
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white font-medium">{tutorial.rating}</span>
                      </div>
                      <a
                        href={tutorial.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                      >
                        Start Tutorial
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Tutorials Grid */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {tutorial.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-white text-sm font-medium">{tutorial.rating}</span>
                    </div>
                    <a
                      href={tutorial.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group"
                    >
                      Watch
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join thousands of professionals who are already mastering these technologies. 
                Get hands-on experience with real-world projects and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                >
                  Get Personalized Training
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}