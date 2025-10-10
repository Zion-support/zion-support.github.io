'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Cpu, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Low-Latency Processing',
      description: 'Process data at the edge for ultra-low latency applications and real-time decision making.',
      benefits: ['< 1 ms latency', 'Real-time processing', 'Instant responses']
    },
    {
      icon: Zap,
      title: 'Distributed Architecture',
      description: 'Deploy computing resources closer to data sources for optimal performance and efficiency.',
      benefits: ['Reduced bandwidth', 'Faster processing', 'Cost optimization']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Ensure continuous operation with edge nodes that work independently of central infrastructure.',
      benefits: ['High availability', 'Fault tolerance', 'Resilient design']
    },
    {
      icon: Users,
      title: 'IoT Integration',
      description: 'Seamlessly integrate with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['IoT connectivity', 'Sensor integration', 'Device management']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Optimize application performance with edge computing and intelligent caching.',
      benefits: ['Performance boost', 'Intelligent caching', 'Bandwidth optimization']
    }
  ];

  const benefits = [
    'Reduce latency by up to 90%',
    'Improve application performance by 80%',
    'Cut bandwidth costs by 70%',
    'Enhance data privacy and security',
    'Enable real-time applications',
    'Support offline functionality'
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of production lines',
      icon: '🏭'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-low latency processing for safety-critical decisions',
      icon: '🚗'
    },
    {
      title: 'Smart Cities',
      description: 'Manage traffic, utilities, and public services efficiently',
      icon: '🏙️'
    },
    {
      title: 'Healthcare',
      description: 'Support real-time medical monitoring and diagnostics',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group | Distributed Computing</title>
        <meta name="description" content="Transform your applications with edge computing solutions. Low-latency processing, real-time analytics, and distributed computing for modern applications." />
        <meta name="keywords" content="edge computing, distributed computing, IoT, real-time processing, low latency, edge analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge Computing
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bring computing power closer to your data and users with our edge computing solutions. 
            Reduce latency, improve performance, and enable real-time applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Edge Computing Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solution designed for modern applications and IoT deployments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Edge computing solutions are perfect for applications that require low latency, 
              real-time processing, and distributed computing power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Edge Computing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Edge computing brings processing power closer to where data is generated, 
                enabling faster response times and more efficient resource utilization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Latency Reduction</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Performance Improvement</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Cost Reduction</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your applications with edge computing solutions. 
            Get started with our expert consultation and implementation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Edge Computing Project
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeComputingPage;