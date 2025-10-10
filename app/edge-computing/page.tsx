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
      title: 'Scalable Infrastructure',
      description: 'Easily scale your edge computing infrastructure as your needs grow.',
      benefits: ['Auto-scaling', 'Flexible deployment', 'Resource optimization']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security measures designed specifically for edge computing environments.',
      benefits: ['Data protection', 'Secure communication', 'Compliance ready']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Monitor edge performance with real-time analytics and optimization recommendations.',
      benefits: ['Live monitoring', 'Performance insights', 'Proactive optimization']
    }
  ];

  const benefits = [
    'Reduce latency by up to 90%',
    'Lower bandwidth costs by 60%',
    'Improve application performance',
    'Enable real-time decision making',
    'Scale infrastructure efficiently',
    'Ensure high availability and reliability'
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your applications with edge computing solutions. Reduce latency, improve performance, and enable real-time processing at the edge." />
        <meta name="keywords" content="edge computing, low latency, distributed computing, real-time processing, IoT" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Edge Computing Solutions
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Bring computing power closer to your data sources. Reduce latency, improve performance, 
                  and enable real-time processing with our edge computing solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Low Latency</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Real-time Processing</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Secure & Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Advanced Edge Computing Capabilities
                  </h2>
                  <p className="text-xl text-gray-300">
                    Comprehensive solutions for modern edge computing needs
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Transform Your Applications with Edge Computing
                  </h2>
                  <p className="text-xl text-gray-300">
                    Achieve measurable improvements in performance, latency, and cost efficiency
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Deploy Edge Computing?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Start your edge computing transformation today and experience the future of distributed computing
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EdgeComputingPage;