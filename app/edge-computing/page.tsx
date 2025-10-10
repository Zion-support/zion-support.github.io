'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Cpu, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Low-Latency Processing',
      description: 'Process data at the edge for ultra-low latency applications and real-time decision making.',
      benefits: ['Ultra-low latency', 'Real-time processing', 'Local data processing']
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Analyze data streams in real-time at the edge for immediate insights and actions.',
      benefits: ['Instant insights', 'Stream processing', 'Real-time alerts']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep sensitive data local and secure with edge-based processing and encryption.',
      benefits: ['Data privacy', 'Local encryption', 'Reduced attack surface']
    },
    {
      icon: Clock,
      title: 'Offline Capability',
      description: 'Continue operations even when disconnected from the central cloud infrastructure.',
      benefits: ['Offline operation', 'Resilient systems', 'Local failover']
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Easily scale your edge infrastructure as your business grows and requirements change.',
      benefits: ['Horizontal scaling', 'Flexible deployment', 'Cost optimization']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Optimize application performance by reducing network latency and bandwidth usage.',
      benefits: ['Faster response times', 'Reduced bandwidth', 'Better user experience']
    }
  ];

  const useCases = [
    {
      title: 'Industrial IoT',
      description: 'Monitor and control industrial equipment with real-time edge processing.',
      icon: Cpu
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable real-time decision making for autonomous vehicle systems.',
      icon: Zap
    },
    {
      title: 'Smart Cities',
      description: 'Process sensor data from smart city infrastructure at the edge.',
      icon: Shield
    },
    {
      title: 'Healthcare',
      description: 'Enable real-time patient monitoring and medical device control.',
      icon: Clock
    }
  ];

  const benefits = [
    'Reduce latency by up to 90%',
    'Improve data privacy and security',
    'Enable offline operations',
    'Reduce bandwidth costs',
    'Enhance real-time processing',
    'Scale efficiently with demand'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with edge computing solutions that bring processing power closer to your data sources." />
        <meta name="keywords" content="edge computing, IoT, real-time processing, low latency, distributed computing" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Edge Computing Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Bring processing power closer to your data
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business with edge computing solutions that deliver ultra-low latency, 
              real-time processing, and enhanced security for your critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Edge Computing Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge computing solutions provide the performance, security, and scalability your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Edge Computing?</h2>
              <p className="text-xl text-gray-300">
                Edge computing offers significant advantages for modern applications and business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our edge computing experts to learn how we can optimize your infrastructure.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Edge computing is transforming industries across the board with real-time processing capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies that have transformed their operations with edge computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeComputingPage;