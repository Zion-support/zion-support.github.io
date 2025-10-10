'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Bot, Cpu, Network } from 'lucide-react';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Autonomy',
      description: 'Advanced AI systems that can operate independently and make intelligent decisions.',
      benefits: ['Self-learning algorithms', 'Adaptive behavior', 'Predictive maintenance', 'Autonomous decision making']
    },
    {
      icon: Bot,
      title: 'Intelligent Robotics',
      description: 'Robotic systems with advanced AI capabilities for complex tasks.',
      benefits: ['Computer vision', 'Natural language processing', 'Motion planning', 'Human-robot interaction']
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process data locally for real-time autonomous operations.',
      benefits: ['Low latency', 'Offline operation', 'Data privacy', 'Reduced bandwidth']
    },
    {
      icon: Network,
      title: 'Distributed Systems',
      description: 'Coordinated autonomous systems working together seamlessly.',
      benefits: ['Multi-agent coordination', 'Fault tolerance', 'Scalable architecture', 'Real-time communication']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety mechanisms and security protocols for autonomous operations.',
      benefits: ['Fail-safe mechanisms', 'Security protocols', 'Compliance standards', 'Risk assessment']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems and infrastructure.',
      benefits: ['API integration', 'Legacy system support', 'Cloud connectivity', 'Modular design']
    }
  ];

  const services = [
    {
      title: 'Autonomous Fleet Management',
      description: 'AI-powered fleet management for autonomous vehicles and drones.',
      features: ['Route optimization', 'Predictive maintenance', 'Real-time monitoring', 'Safety protocols'],
      price: 'Starting at $499/month'
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous manufacturing systems with AI-driven optimization.',
      features: ['Quality control', 'Production optimization', 'Predictive maintenance', 'Supply chain management'],
      price: 'Starting at $799/month'
    },
    {
      title: 'Autonomous Infrastructure',
      description: 'Self-managing infrastructure systems for smart cities and buildings.',
      features: ['Energy management', 'Traffic optimization', 'Environmental monitoring', 'Maintenance automation'],
      price: 'Starting at $999/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems | Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with AI-powered robotics, edge computing, and distributed coordination. Safety-first approach with seamless integration." />
        <meta name="keywords" content="autonomous systems, AI robotics, edge computing, smart manufacturing, autonomous vehicles" />
        <meta property="og:title" content="AI Autonomous Systems | Zion Tech Group" />
        <meta property="og:description" content="Build intelligent autonomous systems with AI-powered robotics, edge computing, and distributed coordination. Safety-first approach with seamless integration." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Autonomous Systems | Zion Tech Group" />
        <meta name="twitter:description" content="Build intelligent autonomous systems with AI-powered robotics, edge computing, and distributed coordination. Safety-first approach with seamless integration." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems with AI-powered robotics, edge computing, 
              and distributed coordination. Safety-first approach with seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Autonomous System Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Autonomous System Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of autonomous technology with our AI-powered solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiAutonomousSystemsPage;