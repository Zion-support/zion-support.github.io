'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Award, DollarSign, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Return on investment",
      color: "text-green-400"
    },
    {
      icon: Users,
      value: "50+",
      label: "Enterprise Clients",
      description: "Trusted worldwide",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      value: "90%",
      label: "Efficiency Boost",
      description: "Productivity increase",
      color: "text-yellow-400"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      description: "Project completion",
      color: "text-purple-400"
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Cost Savings",
      description: "Annual savings delivered",
      color: "text-cyan-400"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance",
      color: "text-pink-400"
    }
  ];

  return (
    <div className="py-16 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Proven Results
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI and IT solutions have delivered measurable results for enterprise clients worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${stat.color.split('-')[1]}-500 to-${stat.color.split('-')[1]}-600 flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color} neon-pulse`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
