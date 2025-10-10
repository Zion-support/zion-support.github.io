'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  };

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-cyan-400'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'
=======
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ];

  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      return setInterval(() => {
        setCounters(prev => {
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
          }
          return prev;
        });
      }, 16);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
=======
      description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
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

  // Counter animation effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key: keyof typeof targetCounters) => {
      const target = targetCounters[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses and delivered exceptional results.
=======
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI and IT solutions have helped businesses worldwide achieve remarkable results and transform their operations.
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
          </p>
        </div>

        {/* Statistics Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
=======
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
=======
        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why We're Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                <div className="space-y-2">
                  {achievement.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;