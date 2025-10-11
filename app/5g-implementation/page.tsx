'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, Brain, Target, Zap, Shield, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      description: 'Seamless integration with AI and machine learning capabilities.',
      benefits: ['Edge Computing', 'AI Processing', 'Smart Automation', 'Intelligent Networks']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Implementation',
      description: 'Targeted 5G deployment strategies for maximum efficiency and coverage.',
      benefits: ['Strategic Planning', 'Coverage Optimization', 'Cost Efficiency', 'Scalable Solutions']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Boost',
      description: 'Significant performance improvements across all connected applications.',
      benefits: ['Enhanced Performance', 'Faster Response Times', 'Improved User Experience', 'Optimized Workflows']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and compliance for 5G networks.',
      benefits: ['Advanced Security', 'Compliance Ready', 'Data Protection', 'Network Security']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-fast connectivity, AI integration, and enterprise-grade security." />
        <meta name="keywords" content="5G implementation, 5G services, ultra-fast connectivity, AI integration, network security, edge computing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, AI integration, and enterprise-grade security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Implement 5G?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us today to learn more about our 5G implementation services and transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}