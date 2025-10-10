'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Autonomy',
      description: 'Advanced AI algorithms that enable systems to operate independently and make intelligent decisions.',
      benefits: ['Self-learning capabilities', 'Adaptive behavior', 'Intelligent decision making', 'Autonomous operation']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety mechanisms and security protocols to ensure reliable autonomous operation.',
      benefits: ['Fail-safe systems', 'Security protocols', 'Risk assessment', 'Emergency protocols']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'High-speed processing capabilities for real-time decision making and response.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics', 'Instant response']
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Designed to scale from single systems to complex multi-system networks.',
      benefits: ['Horizontal scaling', 'Distributed processing', 'Network coordination', 'Resource optimization']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems and infrastructure.',
      benefits: ['API compatibility', 'Legacy support', 'Modular design', 'Plug-and-play']
    },
    {
      icon: Monitor,
      title: 'Advanced Monitoring',
      description: 'Comprehensive monitoring and analytics for autonomous system performance.',
      benefits: ['Performance tracking', 'Predictive maintenance', 'Health monitoring', 'Analytics dashboard']
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve efficiency and productivity',
    'Enable 24/7 autonomous operation',
    'Reduce human error and risk',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
    {
      title: 'Manufacturing Automation',
      description: 'Autonomous robots and systems for manufacturing processes',
      icon: Settings
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving vehicles and transportation systems',
      icon: Globe
    },
    {
      title: 'Smart Infrastructure',
      description: 'Autonomous management of smart cities and infrastructure',
      icon: Database
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automated business processes and workflows',
      icon: Brain
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered autonomous systems for modern applications. Intelligent, safe, and scalable autonomous solutions." />
        <meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous robots, smart automation, intelligent systems" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Systems
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build intelligent, self-operating systems that can think, learn, and adapt. 
                Our AI-powered autonomous solutions are designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Autonomous Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems are equipped with cutting-edge AI technology for intelligent operation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our autonomous systems can transform your operations across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Autonomous Systems?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered autonomous systems are designed to operate independently while maintaining 
                  safety, efficiency, and reliability in complex environments.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Intelligent Operation</h3>
                    <p className="text-gray-300 mb-6">
                      Our systems learn and adapt to their environment, continuously improving performance.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Reliability</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">24/7</div>
                        <div className="text-gray-300 text-sm">Operation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building intelligent autonomous systems with our AI-powered platform. 
                Get started today and see the difference autonomous technology can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiAutonomousSystemsPage;