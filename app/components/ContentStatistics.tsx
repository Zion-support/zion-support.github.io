'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  });

  const targetCounters = {
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99
  };

  const statistics = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'
    },
    {
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Global presence'
    },
    {
      icon: BarChart3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'
    }
  ];

  const features = [
    {
      icon: Brain,
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
    },
    {
      icon: Globe,
      title: 'Global Reach',
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

  const achievements = [
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider 2024',
      value: '25+'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'
    },
    {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
    }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact we've made for businesses worldwide through our innovative AI and IT solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group">
              <div className={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We're the Best Choice</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-xs text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognized excellence and proven track record in delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center group hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that make our solutions the perfect choice for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Our Success Story?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the growing number of businesses that have transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;