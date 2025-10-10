'use client';
import React from 'react';
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
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Analyze data at the edge for immediate insights and decision making.',
      benefits: ['Real-time insights', 'Edge analytics', 'Immediate decisions']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge computing environments.',
      benefits: ['Edge security', 'Data protection', 'Secure communication']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and management of edge computing infrastructure.',
      benefits: ['Continuous monitoring', 'Proactive maintenance', 'Instant alerts']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated edge computing experts with deep knowledge of distributed systems.',
      benefits: ['Expert consultation', 'Best practices', 'Ongoing support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Bring computing power closer to your data sources with our edge computing solutions. Reduce latency, improve performance, and enable real-time applications.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Edge Computing Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="text-cyan-400 mb-4">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
          <p className="text-gray-300 mb-8">
            Contact our edge computing experts to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Get Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdgeComputingPage;