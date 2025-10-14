import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'WCAG Compliance',
      description: 'Full compliance with WCAG 2.1 AA standards'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Screen Reader Support',
      description: 'Optimized for all major screen readers'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusive Design',
      description: 'Designed for users of all abilities'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="Accessibility Solutions - Zion Tech Group"
        description="Comprehensive accessibility solutions for web applications. WCAG compliance, screen reader support, and inclusive design."
        keywords="accessibility, WCAG compliance, screen reader, inclusive design, web accessibility"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Making technology accessible to everyone
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;