'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical communications.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical communications', 'IoT applications']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps', 'Seamless streaming', 'Fast downloads', 'Real-time gaming']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your 5G network performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure 5G communications.',
      benefits: ['End-to-end encryption', 'Threat detection', 'Secure authentication', 'Privacy protection']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Leverage artificial intelligence for smart network management.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Automated optimization', 'Intelligent analytics']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols for 5G network protection.',
      benefits: ['End-to-end encryption', 'Threat detection', 'Secure authentication', 'Privacy protection']
    }
  ];

  const benefits = [
    'Increase network efficiency by up to 80%',
    'Reduce operational costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Enhanced security and compliance'
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced 5G Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge 5G technology for the next generation of connectivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="text-blue-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Implementation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of next-generation connectivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our 5G implementation services today and experience the future of connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default FiveGImplementationPage;
