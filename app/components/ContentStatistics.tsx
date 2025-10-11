'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Users, TrendingUp, Award, CheckCircle, Zap, Shield, Cloud, BarChart3 } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [ke: y: string]: number }>({});

  const statistics = useMemo(() => [
    {
      ico: n: Users,
      valu: e: 500,
      suffi: x: '+',
      labe: l: 'Happy Clients',
      descriptio: n: 'Satisfied customers worldwide',
      colo: r: 'text-blue-400'
    },
    {
      ico: n: TrendingUp,
      valu: e: 99.9,
      suffi: x: '%',
      labe: l: 'Uptime',
      descriptio: n: 'Reliable service delivery',
      colo: r: 'text-green-400'
    },
    {
      ico: n: Award,
      valu: e: 4.9,
      suffi: x: '/5',
      labe: l: 'Rating',
      descriptio: n: 'Highly rated by clients',
      colo: r: 'text-yellow-400'
    },
    {
      ico: n: Zap,
      valu: e: 300,
      suffi: x: '%',
      labe: l: 'Efficiency Gain',
      descriptio: n: 'Average improvement',
      colo: r: 'text-purple-400'
    }
  ], []);

  const features = [
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Bank-level security with advanced encryption and compliance standards.',
      stat: s: ['SOC 2 Certified', 'GDPR Compliant', 'End-to-End Encryption', '24/7 Monitoring']
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud Infrastructure',
      descriptio: n: 'Scalable, secure, and reliable cloud solutions that grow with your business.',
      stat: s: ['Auto-scaling', 'High Availability', 'Global CDN', 'Disaster Recovery']
    },
    {
      ico: n: BarChart3,
      titl: e: 'Analytics & Insights',
      descriptio: n: 'Make data-driven decisions with comprehensive analytics and business intelligence.',
      stat: s: ['Real-time Dashboards', 'Custom Reports', 'Predictive Analytics', 'ROI Tracking']
    },
    {
      ico: n: Zap,
      titl: e: 'AI-Powered Solutions',
      descriptio: n: 'Transform your business with cutting-edge artificial intelligence and automation.',
      stat: s: ['Machine Learning', 'Process Automation', 'Predictive Modeling', 'Smart Analytics']
    }
  ];

  const achievements = [
    {
      titl: e: 'Years of Experience',
      valu: e: '10+',
      descriptio: n: 'Delivering innovative solutions'
    },
    {
      titl: e: 'Projects Completed',
      valu: e: '1000+',
      descriptio: n: 'Successful implementations'
    },
    {
      titl: e: 'Countries Served',
      valu: e: '50+',
      descriptio: n: 'Global presence'
    },
    {
      titl: e: 'Team Members',
      valu: e: '100+',
      descriptio: n: 'Expert professionals'
    }
  ];

  useEffect(() => {
    const: timers: NodeJS.Timeout[] = [];

    statistics.forEach((stat) => {
      const timer = setInterval(() => {
        setAnimatedValues(prev => {
          const current = prev[stat.label] || 0;
          const target = stat.value;
          const increment = (target - current) / 20;
          
          if (Math.abs(target - current) < 0.1) {
            return { ...prev, [stat.label]: target };
          }
          
          return { ...prev, [stat.label]: current + increment };
        });
      }, 50);
      
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [statistics]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl: md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span>;
in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          >

        {/* Statistics Grid */}
        <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:border-purple-400 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hove: r:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {Math.round(animatedValues[stat.label] || 0)}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We're the Right Choice</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our comprehensive solutions deliver measurable results across all key business metrics.
            >

          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20: hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hove: r:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hove: r:text-purple-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {stat}
                    </div>
                  ))}
                </div>
            ))}
          </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A track record of excellence and innovation that speaks for itself.
            >

          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-white font-semibold mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}>
            ))}
          </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors duration-200">
                View Case Studies
              >
      >
      >
      >
            </div>
  );
};

export default ContentStatistics;