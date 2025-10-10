'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Cpu, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Low-Latency Processing',
      description: 'Process data at the edge for ultra-low latency applications and real-time decision making.',
      benefits: ['Ultra-low latency', 'Real-time processing', 'Local data processing']
    },
    {
      icon: Zap,
      title: 'Distributed Computing',
      description: 'Distribute computing power across edge nodes for improved performance and reliability.',
      benefits: ['Distributed processing', 'Improved reliability', 'Scalable architecture']
    },
    {
      icon: Clock,
      title: 'Real-Time Analytics',
      description: 'Analyze data in real-time at the edge for immediate insights and responses.',
      benefits: ['Real-time insights', 'Immediate responses', 'Edge analytics']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep sensitive data at the edge with advanced security measures and encryption.',
      benefits: ['Data privacy', 'Edge security', 'Encrypted processing']
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
      title: 'Smart Cities',
      description: 'Power smart city infrastructure with edge computing',
      icon: '🏙️'
    },
    {
      title: 'Industrial IoT',
      description: 'Optimize manufacturing with edge-based monitoring',
      icon: '🏭'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable real-time decision making for autonomous systems',
      icon: '🚗'
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge computing solutions bring processing power closer to your data, 
              enabling faster, more efficient, and more secure applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
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

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of edge computing with our proven solutions and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Embrace Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your applications with edge computing solutions. 
            Get started with a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default PagePage;