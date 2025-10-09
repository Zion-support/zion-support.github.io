'use client';
import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    { number: "300%", label: "Average ROI", icon: "📈" },
    { number: "95%", label: "Process Automation", icon: "⚡" },
    { number: "50M+", label: "Annual Savings", icon: "💰" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "🔒" }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Proven Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;