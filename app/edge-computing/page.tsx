'use client';
import React from 'react';
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

  const stats = [
    { label: 'Latency Reduction', value: '90%', icon: Clock },
    { label: 'Cost Savings', value: '60%', icon: BarChart },
    { label: 'Uptime', value: '99.9%', icon: Shield },
    { label: 'Happy Clients', value: '300+', icon: Users }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Edge Computing Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Bring computing power closer to your data sources for ultra-low latency and real-time processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <stat.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Edge Computing Capabilities
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {feature.description}
                          </p>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Deploy Edge Computing?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our edge computing experts help you implement distributed infrastructure that delivers ultra-low latency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    View Case Studies
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