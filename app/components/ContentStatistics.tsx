'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Companies trust us with their AI transformation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Cost Savings",
      description: "Annual savings delivered to our clients",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      value: "95%",
      label: "Process Automation",
      description: "Average automation achieved for clients",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock expert assistance",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="statistics-section" className="py-16 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our AI solutions have delivered measurable results for businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {isVisible ? stat.value : '0'}
              </div>
              <div className="text-cyan-400 font-semibold text-lg mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">300%</div>
            <div className="text-cyan-100 font-semibold">Average ROI</div>
            <div className="text-cyan-200 text-sm">Return on investment for our clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-purple-100 font-semibold">Uptime Guarantee</div>
            <div className="text-purple-200 text-sm">Reliable service delivery</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">48hrs</div>
            <div className="text-green-100 font-semibold">Quick Setup</div>
            <div className="text-green-200 text-sm">Average deployment time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;