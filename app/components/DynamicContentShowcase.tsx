'use client';
import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI Analytics Dashboard",
      description: "Real-time insights and predictive analytics for your business",
      icon: "📊",
      stats: "45% revenue increase"
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your specific business needs",
      icon: "🧠",
      stats: "70% accuracy improvement"
    },
    {
      title: "Automation Tools",
      description: "Streamline your workflows with intelligent automation",
      icon: "⚡",
      stats: "80% time saved"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure for modern businesses",
      icon: "☁️",
      stats: "99.9% uptime"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
              <div className="text-cyan-400 font-semibold text-sm">{item.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;