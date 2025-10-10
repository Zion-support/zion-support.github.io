import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Brain, Target, ArrowRight, Shield, Users, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILoadTestingPage: React.FC = () => {
  const features = [
    {
      title: 'Automated Testing',
      description: 'AI-powered automated load testing with intelligent test generation.',
      icon: Zap,
      benefits: [
        'Test automation',
        'Scenario generation',
        'Load simulation',
        'Performance monitoring'
      ]
    },
    {
      title: 'Performance Analysis',
      description: 'Advanced performance analysis with AI-powered insights and recommendations.',
      icon: Brain,
      benefits: [
        'Performance metrics',
        'Bottleneck detection',
        'Optimization suggestions',
        'Trend analysis'
      ]
    },
    {
      title: 'Scalability Testing',
      description: 'Comprehensive scalability testing for applications and infrastructure.',
      icon: Target,
      benefits: [
        'Load scaling',
        'Capacity planning',
        'Stress testing',
        'Resource optimization'
      ]
    },
    {
      title: 'Real-time Monitoring',
      description: 'Real-time monitoring and alerting during load testing operations.',
      icon: BarChart3,
      benefits: [
        'Live monitoring',
        'Alert systems',
        'Performance tracking',
        'Issue detection'
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
      title: 'Web Applications',
      description: 'Comprehensive load testing solutions for web applications and APIs.',
      icon: Zap
    },
    {
      title: 'Mobile Apps',
      description: 'AI-powered load testing for mobile applications and services.',
      icon: Target
    },
    {
      title: 'Infrastructure',
      description: 'Advanced load testing for infrastructure and cloud services.',
      icon: Brain
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Load Testing - Zion Tech Group</title>
        <meta name="description" content="AI-powered load testing solutions that automate testing, analyze performance, and ensure scalability. Advanced AI technology for better application performance." />
        <meta name="keywords" content="AI load testing, performance testing, automated testing, scalability testing, load simulation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Load
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Testing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Test and optimize application performance with AI-powered load testing solutions. 
              Automated testing, performance analysis, and scalability testing for better reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
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
                Load Testing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered load testing provides comprehensive tools for performance testing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Load Testing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for development teams that need to ensure application performance and scalability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
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
                Why Choose Our Load Testing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered load testing that transforms performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
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
                Ready to Test Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading development teams who trust our AI Load Testing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Testing
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

export default AILoadTestingPage;