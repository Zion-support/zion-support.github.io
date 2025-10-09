'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, DollarSign, Zap, Shield, Globe } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    savings: 0,
    uptime: 0
  });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20'
    },
    {
      icon: Award,
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful implementations',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: DollarSign,
      value: 50,
      suffix: 'M+',
      label: 'Cost Savings',
      description: 'Annual savings for clients',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Clock,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'System reliability',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: TrendingUp,
      value: 300,
      suffix: '%',
      label: 'Average ROI',
      description: 'Return on investment',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20'
    },
    {
      icon: Zap,
      value: 95,
      suffix: '%',
      label: 'Process Automation',
      description: 'Automated workflows',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Shield,
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    },
    {
      icon: Globe,
      value: 50,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global presence',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps
        const increment = targetValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(current)
          }));
        }, duration / steps);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
          Proven Results & Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our AI and IT solutions have delivered measurable results for businesses worldwide, 
          from startups to Fortune 500 companies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${stat.bgColor}`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            
            <div className="mb-2">
              <span className="text-3xl font-bold text-white neon-text">
                {stat.label.toLowerCase().includes('uptime') ? 
                  `${stat.value}${stat.suffix}` : 
                  `${Math.floor(stat.value)}${stat.suffix}`
                }
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {stat.label}
            </h3>
            
            <p className="text-sm text-gray-300">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Industry Recognition</h3>
          <p className="text-gray-300">
            Awarded "Best AI Solutions Provider" by TechCrunch and featured in Forbes.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
          <p className="text-gray-300">
            Bank-level security with SOC 2 Type II compliance and ISO 27001 certification.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
          <p className="text-gray-300">
            Serving clients across 50+ countries with 24/7 multilingual support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;