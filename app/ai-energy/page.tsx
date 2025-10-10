import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Brain, Target, ArrowRight, Shield, Users, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEnergyPage: React.FC = () => {
  const features = [
    {
      title: 'Energy Optimization',
      description: 'AI-powered energy optimization for better efficiency and cost savings.',
      icon: Zap,
      benefits: [
        'Energy efficiency',
        'Cost optimization',
        'Demand management',
        'Performance tracking'
      ]
    },
    {
      title: 'Renewable Integration',
      description: 'Smart integration of renewable energy sources with AI-powered management.',
      icon: Globe,
      benefits: [
        'Solar integration',
        'Wind integration',
        'Storage management',
        'Grid stability'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced predictive analytics for energy consumption and generation.',
      icon: Brain,
      benefits: [
        'Consumption forecasting',
        'Generation prediction',
        'Load balancing',
        'Risk assessment'
      ]
    },
    {
      title: 'Smart Grid',
      description: 'Intelligent grid management with real-time monitoring and control.',
      icon: Target,
      benefits: [
        'Real-time monitoring',
        'Automated control',
        'Fault detection',
        'Grid optimization'
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
      title: 'Utility Companies',
      description: 'Comprehensive energy management solutions for utility companies.',
      icon: Zap
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent energy management for smart city infrastructure.',
      icon: Globe
    },
    {
      title: 'Industrial Facilities',
      description: 'Advanced energy management for industrial and manufacturing facilities.',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Energy - Zion Tech Group</title>
        <meta name="description" content="AI-powered energy solutions that optimize consumption, integrate renewables, and manage smart grids. Advanced AI technology for better energy efficiency." />
        <meta name="keywords" content="AI energy, energy optimization, renewable integration, smart grid, energy management, energy efficiency" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,179,8,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Energy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Optimize energy consumption and generation with AI-powered solutions. Energy optimization, 
              renewable integration, and smart grid management for better efficiency and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300">
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
                Energy Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered energy solutions provide comprehensive tools for energy management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-yellow-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Energy Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for energy companies and utilities that need to optimize energy operations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-yellow-500 transition-all duration-300 text-center">
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
                Why Choose Our Energy Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered energy management that transforms operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
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
                Ready to Optimize Energy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading energy companies who trust our AI Energy solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Optimizing
                </button>
                <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

export default AIEnergyPage;