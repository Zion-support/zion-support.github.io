'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Wifi,
  Clock,
  Users,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  CheckCircle,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Connectivity',
      description: 'Lightning-fast 5G speeds up to 10 Gbps for seamless data transfer and real-time communication.',
      benefits: ['10 Gbps peak speeds', 'Ultra-low latency', 'Massive device capacity']
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Enterprise-grade 5G infrastructure that scales with your business needs.',
      benefits: ['Auto-scaling', 'Load balancing', 'High availability']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade security protocols to protect your 5G network and data.',
      benefits: ['End-to-end encryption', 'Zero-trust architecture', 'Threat detection']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes with 5G connectivity.',
      icon: Cpu
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for autonomous vehicle networks and traffic management.',
      icon: Smartphone
    },
    {
      title: 'Remote Healthcare',
      description: 'High-bandwidth telemedicine and remote surgery capabilities.',
      icon: Globe
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for intelligent city management and citizen services.',
      icon: Database
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group | Next-Gen Connectivity</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-fast connectivity, real-time monitoring, and scalable infrastructure solutions." />
        <meta name="keywords" content="5G implementation, 5G services, ultra-fast connectivity, network monitoring, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                5G Implementation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, 
                real-time monitoring, and scalable infrastructure for the digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get 5G Consultation
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Implementation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive 5G solutions deliver unmatched performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology can revolutionize your industry and business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let us help you harness the power of 5G technology for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start 5G Implementation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default FiveGImplementationPage;