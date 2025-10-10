'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Cpu, Brain, Shield, Zap, Target, BarChart } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI systems that can make independent decisions based on real-time data and learning.',
      benefits: ['Real-time decision making', 'Adaptive learning', 'Risk assessment', 'Predictive analysis']
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process data locally at the edge for ultra-low latency autonomous operations.',
      benefits: ['Low latency processing', 'Offline capabilities', 'Real-time response', 'Data privacy']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety mechanisms and security protocols for autonomous systems.',
      benefits: ['Fail-safe mechanisms', 'Security protocols', 'Compliance standards', 'Risk mitigation']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast processing capabilities for time-critical autonomous operations.',
      benefits: ['Microsecond response', 'High throughput', 'Parallel processing', 'Optimized algorithms']
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'High-precision control systems for accurate autonomous operations.',
      benefits: ['Sub-millimeter accuracy', 'Sensor fusion', 'Control algorithms', 'Calibration systems']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and optimization of autonomous system performance.',
      benefits: ['Real-time metrics', 'Performance analytics', 'Predictive maintenance', 'Optimization insights']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: '🚗'
    },
    {
      title: 'Industrial Automation',
      description: 'Smart manufacturing and industrial processes with autonomous control systems.',
      icon: '🏭'
    },
    {
      title: 'Robotics',
      description: 'Autonomous robots for various applications including service, manufacturing, and exploration.',
      icon: '🤖'
    },
    {
      title: 'Smart Infrastructure',
      description: 'Autonomous management of smart cities, buildings, and infrastructure systems.',
      icon: '🏙️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI technology. Self-driving vehicles, smart robotics, and autonomous infrastructure solutions." />
        <meta name="keywords" content="AI autonomous systems, self-driving, autonomous vehicles, robotics, edge computing, autonomous infrastructure" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build intelligent autonomous systems with our AI technology. Self-driving vehicles, smart robotics, and autonomous infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for autonomous systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diverse applications for autonomous systems across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
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
                Ready to Build Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your autonomous systems requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
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

export default AIAutonomousSystemsPage;