'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock, Navigation as NavIcon, TrendingUp } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Decision Making',
      description: 'Advanced AI algorithms for autonomous decision making in complex environments.',
      benefits: ['Real-time processing', 'Adaptive learning', 'Risk assessment', 'Optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast processing capabilities for immediate response to environmental changes.',
      benefits: ['Low latency', 'High throughput', 'Parallel processing', 'Edge computing']
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Comprehensive safety mechanisms and fail-safe systems for autonomous operations.',
      benefits: ['Fail-safe design', 'Redundancy', 'Emergency protocols', 'Compliance']
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'Precise control systems for accurate autonomous operations and navigation.',
      benefits: ['High accuracy', 'Fine control', 'Stability', 'Calibration']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human operators and autonomous systems.',
      benefits: ['Intuitive interfaces', 'Collaborative control', 'Training systems', 'Monitoring']
    },
    {
      icon: Settings,
      title: 'Adaptive Systems',
      description: 'Self-learning and self-optimizing systems that improve over time.',
      benefits: ['Machine learning', 'Self-optimization', 'Continuous improvement', 'Adaptation']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: Car
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous robots and systems for industrial automation and production.',
      icon: Factory
    },
    {
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and systems for patient care and treatment.',
      icon: Stethoscope
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous infrastructure systems for urban management and optimization.',
      icon: Building
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI solutions. Self-driving vehicles, smart manufacturing, and autonomous infrastructure for the future." />
      </Helmet>

      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Autonomous
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Systems
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build intelligent autonomous systems that can operate independently and adapt to changing environments. 
            From self-driving vehicles to smart manufacturing, the future is autonomous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Autonomous Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems provide comprehensive solutions for intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-violet-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems are used across various industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our autonomous systems experts to learn how our AI solutions can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIAutonomousSystemsPage;