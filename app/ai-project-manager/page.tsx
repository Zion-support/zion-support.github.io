import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Target, Brain, Users, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      title: 'Intelligent Planning',
      description: 'AI-powered project planning with intelligent resource allocation and timeline optimization.',
      icon: Target,
      benefits: [
        'Smart planning',
        'Resource optimization',
        'Timeline forecasting',
        'Risk assessment'
      ]
    },
    {
      title: 'Task Management',
      description: 'Advanced task management with AI-powered prioritization and automation.',
      icon: Brain,
      benefits: [
        'Task prioritization',
        'Automated scheduling',
        'Progress tracking',
        'Deadline management'
      ]
    },
    {
      title: 'Team Coordination',
      description: 'Intelligent team coordination and communication for better collaboration.',
      icon: Users,
      benefits: [
        'Team coordination',
        'Communication optimization',
        'Workload balancing',
        'Performance monitoring'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights for project performance and optimization.',
      icon: BarChart3,
      benefits: [
        'Performance metrics',
        'Progress tracking',
        'ROI analysis',
        'Insights generation'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'Project Managers',
      description: 'AI-powered project management tools for project managers and team leads.',
      icon: Target
    },
    {
      title: 'Development Teams',
      description: 'Comprehensive project management for software development teams.',
      icon: Brain
    },
    {
      title: 'Consulting',
      description: 'Advanced project management for consulting and professional services.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered project manager that provides intelligent planning, task management, and team coordination. Advanced AI technology for better project success." />
        <meta name="keywords" content="AI project manager, project planning, task management, team coordination, project analytics" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Project
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Manager
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Manage projects with AI-powered project manager solutions. Intelligent planning, task management, 
              and team coordination for better project success and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Project Manager Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered project manager provides comprehensive tools for project success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Project Manager Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for project managers and teams that need to manage complex projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Project Manager?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered project management that transforms success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Manage Projects?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading project managers who trust our AI Project Manager.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Managing
                </button>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIProjectManagerPage;