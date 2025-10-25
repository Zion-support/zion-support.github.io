'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Target, CheckCircle, Truck, Package, TrendingUp, Zap } from 'lucide-react';

const Page: React.FC = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = 'Supply Chain Optimizer - Zion Tech Group';
  }, []);

  const features = [
    {
      icon: 'truck',
      title: 'Logistics Optimization',
      description: 'AI-powered logistics optimization for efficient supply chain management.',
      benefits: ['Route optimization', 'Inventory management', 'Demand forecasting', 'Cost reduction']
    },
    {
      icon: 'package',
      title: 'Inventory Intelligence',
      description: 'Smart inventory management with predictive analytics and automation.',
      benefits: ['Stock optimization', 'Reorder automation', 'Waste reduction', 'Quality control']
    },
    {
      icon: 'trending-up',
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to track and improve supply chain performance.',
      benefits: ['Real-time monitoring', 'KPI tracking', 'Performance insights', 'ROI analysis']
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck':
        return <Truck className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'package':
        return <Package className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'trending-up':
        return <TrendingUp className="w-12 h-12 text-emerald-400 mb-4" />;
      default:
        return <Truck className="w-12 h-12 text-emerald-400 mb-4" />;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Supply Chain Optimizer
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              AI-powered supply chain optimization solutions for maximum efficiency and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                {renderIcon(feature.icon)}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Optimization Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Efficiency</h3>
                <p className="text-gray-300 text-sm">Streamline operations and reduce waste</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                <p className="text-gray-300 text-sm">Data-driven insights and reporting</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300 text-sm">Machine learning optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-300 text-sm">Accurate demand and supply matching</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
