'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, Zap, Shield } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function FiveGImplementationPage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Ultra-Fast Connectivity',
      description: 'Experience lightning-fast 5G speeds with ultra-low latency for seamless connectivity.',
      benefits: ['10x Faster Speeds', 'Ultra-Low Latency', 'Massive Device Capacity', 'Enhanced Reliability']
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Real-time data analytics and insights powered by 5G infrastructure.',
      benefits: ['Real-Time Processing', 'Predictive Analytics', 'Smart Insights', 'Data Optimization']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Seamless integration with AI technologies for intelligent network management.',
      benefits: ['Smart Routing', 'Predictive Maintenance', 'Automated Optimization', 'Intelligent Monitoring']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Targeting',
      description: 'Targeted solutions for specific industry needs and use cases.',
      benefits: ['Industry-Specific Solutions', 'Custom Implementation', 'Scalable Architecture', 'Future-Proof Design']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Performance',
      description: 'Optimized performance for mission-critical applications and services.',
      benefits: ['High Performance', 'Low Latency', 'Reliable Connectivity', 'Scalable Solutions']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Advanced security features to protect your 5G infrastructure and data.',
      benefits: ['End-to-End Encryption', 'Network Security', 'Data Protection', 'Compliance Standards']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services and solutions." />
        <meta name="keywords" content="5g implementation, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology implementation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}