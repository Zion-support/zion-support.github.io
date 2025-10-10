'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentCarouselPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 text-sm">Transform your business with cutting-edge AI technology</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300 text-sm">Scalable cloud infrastructure for modern businesses</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Protect your business from evolving cyber threats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarouselPage;