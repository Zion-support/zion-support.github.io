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

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
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

  useEffect(() => {
    const duration = 2000; // 2 seconds
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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We measure our success by the success of our clients. Here are some key metrics that showcase our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of our growing community of successful businesses. Let's achieve great results together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentStatistics;