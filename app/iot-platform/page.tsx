'use client';
import React from 'react';
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Device Management',
      description: 'Comprehensive IoT device management with remote monitoring, updates, and configuration.',
      benefits: ['Remote monitoring', 'OTA updates', 'Device configuration']
    },
    {
      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Process IoT data in real-time with edge computing and cloud analytics capabilities.',
      benefits: ['Real-time processing', 'Edge computing', 'Cloud analytics']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights from IoT data with machine learning and AI capabilities.',
      benefits: ['Predictive analytics', 'Machine learning', 'Data insights']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security for IoT devices and data with compliance management.',
      benefits: ['Device security', 'Data encryption', 'Compliance management']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and management of IoT infrastructure and devices.',
      benefits: ['Continuous monitoring', 'Proactive maintenance', 'Instant alerts']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated IoT experts with deep knowledge of connected devices and platforms.',
      benefits: ['Expert consultation', 'Best practices', 'Ongoing support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IoT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IoT platform for managing connected devices, processing data, and gaining insights. Build, deploy, and scale your IoT solutions with ease.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our IoT Platform Solutions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your IoT Solution?</h2>
          <p className="text-gray-300 mb-8">
            Contact our IoT experts to discuss your specific requirements and get a customized solution.
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

export default IoTPlatformPage;