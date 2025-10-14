'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  RocketLaunchIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Solutions',
      description: 'Learn the fundamentals of AI and how to implement our AI solutions in your business.',
      duration: '45 min',
      level: 'Beginner',
      rating: 4.9,
      students: 1250,
      category: 'AI Solutions',
      color: 'from-purple-500 to-cyan-500',
      href: '/tutorials/ai-fundamentals'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up and managing cloud infrastructure for your business.',
      duration: '2 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 980,
      category: 'Cloud Computing',
      color: 'from-blue-500 to-indigo-500',
      href: '/tutorials/cloud-setup'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      duration: '1.5 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 1100,
      category: 'Security',
      color: 'from-red-500 to-pink-500',
      href: '/tutorials/cybersecurity'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and deploy your own micro SaaS applications using our platform.',
      duration: '3 hours',
      level: 'Advanced',
      rating: 4.7,
      students: 750,
      category: 'Development',
      color: 'from-green-500 to-emerald-500',
      href: '/tutorials/micro-saas'
    },
    {
      title: 'Data Analytics & Visualization',
      description: 'Master data analytics and create stunning visualizations with our tools.',
      duration: '2.5 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 890,
      category: 'Analytics',
      color: 'from-orange-500 to-red-500',
      href: '/tutorials/data-analytics'
    },
    {
      title: 'API Integration Guide',
      description: 'Learn how to integrate our APIs with your existing systems and applications.',
      duration: '1 hour',
      level: 'Advanced',
      rating: 4.6,
      students: 650,
      category: 'Integration',
      color: 'from-teal-500 to-cyan-500',
      href: '/tutorials/api-integration'
    }
  ];

  const categories = [
    'All Tutorials',
    'AI Solutions',
    'Cloud Computing',
    'Security',
    'Development',
    'Analytics',
    'Integration'
  ];

  const levels = [
    { name: 'Beginner', color: 'from-green-500 to-emerald-500' },
    { name: 'Intermediate', color: 'from-yellow-500 to-orange-500' },
    { name: 'Advanced', color: 'from-red-500 to-pink-500' }
  ];

  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of experience in AI and IT solutions.',
      icon: UserGroupIcon,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      title: 'Hands-on Learning',
      description: 'Practical tutorials with real-world examples and hands-on exercises.',
      icon: AcademicCapIcon,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with lifetime access to all tutorial materials.',
      icon: ClockIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Certification',
      description: 'Earn certificates upon completion to showcase your new skills.',
      icon: StarIcon,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Solutions</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, AI learning, IT training, cloud computing, cybersecurity, micro SaaS" />
        <meta property="og:title" content="Tutorials - Zion Tech Group" />
        <meta property="og:description" content="Master AI and IT solutions with our expert-led tutorials and courses." />
        <meta property="og:url" content="https://ziontechgroup.com/tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">Learn & Master</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Tutorials
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Master <span className="text-cyan-400 font-semibold">AI and IT solutions</span> with our comprehensive 
                tutorials and expert-led courses designed for all skill levels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                >
                  <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  View Demo
                </Link>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Tutorials Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Featured Tutorials
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Learn from our comprehensive collection of tutorials designed to help you master AI and IT solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <Link 
                    key={index} 
                    to={tutorial.href}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                  >
                    {/* Category Badge */}
                    <div className="inline-block bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {tutorial.category}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tutorial.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <PlayIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {tutorial.description}
                    </p>

                    {/* Tutorial Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Duration</span>
                        <span className="text-white font-semibold">{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Level</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Rating</span>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white font-semibold">{tutorial.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Students</span>
                        <span className="text-white font-semibold">{tutorial.students.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
                      Start Learning <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Learn With Us?
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Our tutorials are designed to provide the best learning experience with practical, real-world applications.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Start Learning?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join thousands of students already learning with our comprehensive tutorials and courses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Start Learning
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    View Sample
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;