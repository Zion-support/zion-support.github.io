import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Globe, Smartphone, Wifi, ArrowRight, Circle } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple regions',
      benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Optimized 5G solutions for mobile devices and applications',
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Connect thousands of IoT devices with 5G technology',
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
    }
  ];

  const solutions = [
    {
      title: '5G Network Infrastructure',
      description: 'Complete 5G network setup and optimization',
      price: 'Starting at $50,000',
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']
    },
    {
      title: '5G Mobile Applications',
      description: 'Custom mobile apps optimized for 5G networks',
      price: 'Starting at $25,000',
      features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']
    },
    {
      title: '5G IoT Solutions',
      description: 'IoT device connectivity and management platform',
      price: 'Starting at $35,000',
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']
    }
  ];

const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>PagePage - Zion Tech Group</title>
        <meta name="description" content="PagePage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">PagePage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </>
  );
};

export default PagePage;