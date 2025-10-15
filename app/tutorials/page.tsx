'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  AcademicCapIcon, 
  PlayIcon, 
  BookOpenIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const categories = [
    {
      title: 'AI & Machine Learning',
      description: 'Learn how to implement AI solutions and machine learning models',
      icon: AcademicCapIcon,
      color: 'from-purple-500 to-pink-500',
      tutorials: [
        { title: 'Getting Started with AI Chatbots', duration: '45 min', level: 'Beginner' },
        { title: 'Building Custom AI Models', duration: '2 hours', level: 'Intermediate' },
        { title: 'Advanced ML Pipeline Setup', duration: '3 hours', level: 'Advanced' }
      ]
    },
    {
      title: 'Web Development',
      description: 'Master modern web development technologies and frameworks',
      icon: BookOpenIcon,
      color: 'from-blue-500 to-cyan-500',
      tutorials: [
        { title: 'React Fundamentals', duration: '1 hour', level: 'Beginner' },
        { title: 'Next.js Advanced Patterns', duration: '2.5 hours', level: 'Intermediate' },
        { title: 'Full-Stack Architecture', duration: '4 hours', level: 'Advanced' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Learn cloud deployment and infrastructure management',
      icon: UserGroupIcon,
      color: 'from-green-500 to-emerald-500',
      tutorials: [
        { title: 'AWS Basics', duration: '1.5 hours', level: 'Beginner' },
        { title: 'Docker & Kubernetes', duration: '2 hours', level: 'Intermediate' },
        { title: 'Microservices Architecture', duration: '3.5 hours', level: 'Advanced' }
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with analytics tools',
      icon: StarIcon,
      color: 'from-orange-500 to-red-500',
      tutorials: [
        { title: 'Data Visualization Basics', duration: '1 hour', level: 'Beginner' },
        { title: 'Advanced SQL Queries', duration: '2 hours', level: 'Intermediate' },
        { title: 'Machine Learning for Analytics', duration: '3 hours', level: 'Advanced' }
      ]
    }
  ];

  const featuredTutorials = [
    {
      title: 'Complete AI Chatbot Development',
      description: 'Build a production-ready AI chatbot from scratch using modern technologies',
      duration: '4 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 1250,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Create a complete web application with React, Node.js, and MongoDB',
      duration: '6 hours',
      level: 'Advanced',
      rating: 4.8,
      students: 980,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Deploy and manage scalable cloud infrastructure on AWS and Azure',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 750,
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Tutorials - Learn AI, Web Development & Cloud Technologies | Zion Tech Group"
        description="Comprehensive tutorials on AI, machine learning, web development, cloud infrastructure, and data analytics. Learn from industry experts."
        keywords="tutorials, online courses, AI learning, web development, cloud computing, data analytics, programming tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <AcademicCapIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Learning Center</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                Learn <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master cutting-edge technologies with our comprehensive tutorials and hands-on learning experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Browse All Tutorials
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Start Learning
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300">Tutorials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                  <div className="text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tutorials</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and highly-rated tutorials to get you started.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div key={index} className="group bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <StarIcon className="w-4 h-4" />
                        <span className="ml-1 text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.students} students</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Start Learning
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Browse by <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of tutorials organized by technology and skill level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div key={tutorialIndex} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
                        <div>
                          <h4 className="text-white font-medium">{tutorial.title}</h4>
                          <div className="flex items-center mt-1">
                            <ClockIcon className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-400">{tutorial.duration}</span>
                            <span className="mx-2 text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{tutorial.level}</span>
                          </div>
                        </div>
                        <PlayIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-6 border-2 border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                    View All Tutorials
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Start Learning?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of developers and professionals advancing their skills with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Browse All Tutorials
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;