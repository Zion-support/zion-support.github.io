import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      icon: AcademicCapIcon,
      title: 'AI Fundamentals',
      description: 'Learn the basics of artificial intelligence and machine learning concepts.',
      duration: '2 hours',
      level: 'Beginner',
      category: 'AI',
      href: '/tutorials/ai-fundamentals',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: PlayIcon,
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up cloud infrastructure on AWS, Azure, and GCP.',
      duration: '3 hours',
      level: 'Intermediate',
      category: 'Cloud',
      href: '/tutorials/cloud-setup',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: DocumentTextIcon,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your digital assets and data.',
      duration: '1.5 hours',
      level: 'Beginner',
      category: 'Security',
      href: '/tutorials/cybersecurity',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Digital Transformation Strategy',
      description: 'How to plan and execute a successful digital transformation initiative.',
      duration: '4 hours',
      level: 'Advanced',
      category: 'Strategy',
      href: '/tutorials/digital-transformation',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Strategy'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and digital transformation. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, AI tutorials, cloud tutorials, cybersecurity tutorials, digital transformation, learning, courses" />
        <meta property="og:title" content="Tutorials - Zion Tech Group" />
        <meta property="og:description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AcademicCapIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                Tutorials
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Learning</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and digital transformation. 
              Expert-led courses designed for all skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Learning
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {tutorials.map((tutorial, index) => {
                const Icon = tutorial.icon;
                return (
                  <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tutorial.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm mb-2 block">
                          {tutorial.level}
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          {tutorial.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-6">{tutorial.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-400">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <UserGroupIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{tutorial.level}</span>
                      </div>
                    </div>
                    <Link 
                      to={tutorial.href} 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center block transform hover:scale-105"
                    >
                      Start Tutorial
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have already enhanced their skills with our comprehensive tutorials. 
              Start your learning journey today and stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;