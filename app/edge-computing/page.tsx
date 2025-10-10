'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Cloud, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Database, Code, Smartphone, Settings, Wifi } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const EdgeComputingPage: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState('iot');

  const useCases = [
    {
      id: 'iot',
      title: 'IoT & Smart Devices',
      description: 'Real-time processing for connected devices and sensors',
      icon: Wifi,
      benefits: ['Low latency', 'Real-time analytics', 'Offline capability', 'Cost efficiency']
    },
    {
      id: 'ai',
      title: 'Edge AI',
      description: 'AI inference at the edge for faster decision making',
      icon: Cpu,
      benefits: ['Faster inference', 'Privacy protection', 'Reduced bandwidth', 'Better performance']
    },
    {
      id: 'gaming',
      title: 'Gaming & AR/VR',
      description: 'Ultra-low latency for immersive gaming experiences',
      icon: Smartphone,
      benefits: ['Ultra-low latency', 'High performance', 'Global reach', 'Scalable infrastructure']
    },
    {
      id: 'autonomous',
      title: 'Autonomous Vehicles',
      description: 'Critical decision making for self-driving cars',
      icon: Globe,
      benefits: ['Safety critical', 'Real-time processing', 'Reliability', 'Compliance']
    }
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'High-performance computing at the edge of the network'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud',
      description: 'Seamless integration between edge and cloud infrastructure'
    },
    {
      icon: Database,
      title: 'Edge Data Storage',
      description: 'Local data storage and processing for better performance'
    },
    {
      icon: Code,
      title: 'Edge Applications',
      description: 'Custom applications optimized for edge deployment'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security for edge computing environments'
    },
    {
      icon: Settings,
      title: 'Edge Management',
      description: 'Centralized management of distributed edge infrastructure'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Process data locally for sub-millisecond response times'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep sensitive data local and reduce attack surface'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Reduce bandwidth costs and cloud processing expenses'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy applications closer to users worldwide'
    }
  ];

  const stats = [
    { number: '50ms', label: 'Average Latency', icon: Zap },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '60%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Edge Monitoring', icon: Clock }
  ];

  const selectedUseCaseData = useCases.find(useCase => useCase.id === selectedUseCase);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Edge Computing Solutions - Zion Tech Group"
        description="Deploy applications closer to users with edge computing. Reduce latency, improve performance, and enhance security with our edge solutions."
        keywords="edge computing, edge AI, IoT, low latency, distributed computing, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Edge <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Computing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Deploy applications closer to users with edge computing. Reduce latency, improve performance, and enhance security with our comprehensive edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how edge computing can transform your applications and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Case List */}
            <div className="space-y-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase.id}
                  onClick={() => setSelectedUseCase(useCase.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedUseCase === useCase.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedUseCase === useCase.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{useCase.title}</h3>
                      <p className="text-gray-300 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use Case Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <selectedUseCaseData?.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedUseCaseData?.title}
                </h3>
                <p className="text-gray-300">{selectedUseCaseData?.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedUseCaseData?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Edge Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions for modern applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your applications with edge computing benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven architecture ensures optimal performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Edge Nodes',
                description: 'Distributed computing nodes closer to users',
                features: ['Local processing', 'Data caching', 'Real-time analytics', 'Offline capability']
              },
              {
                title: 'Edge Gateway',
                description: 'Secure connection between edge and cloud',
                features: ['Data filtering', 'Protocol translation', 'Security enforcement', 'Load balancing']
              },
              {
                title: 'Cloud Integration',
                description: 'Seamless integration with cloud services',
                features: ['Data synchronization', 'Centralized management', 'Scalable resources', 'Global deployment']
              }
            ].map((layer, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{layer.title}</h3>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy at the Edge?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how edge computing can improve your application performance and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
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

export default EdgeComputingPage;