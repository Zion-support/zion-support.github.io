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
    uptime: 99.9
  };

  const statistics = [
    {
      icon: Users,
      title: 'Happy Clients',
      value: counters.clients,
      suffix: '+',
      description: 'Businesses transformed worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Projects Completed',
      value: counters.projects,
      suffix: '+',
      description: 'Successful implementations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Client Satisfaction',
      value: counters.satisfaction,
      suffix: '%',
      description: 'Customer satisfaction rate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Years Experience',
      value: counters.years,
      suffix: '+',
      description: 'Industry expertise',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Countries Served',
      value: counters.countries,
      suffix: '+',
      description: 'Global presence',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Uptime Guarantee',
      value: counters.uptime,
      suffix: '%',
      description: 'System reliability',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our clients see an average return on investment of 300% within the first year'
    },
    {
      icon: Zap,
      title: '50% Cost Reduction',
      description: 'Businesses typically reduce operational costs by 50% with our solutions'
    },
    {
      icon: Target,
      title: '95% Accuracy Rate',
      description: 'Our AI solutions achieve 95% accuracy in predictions and automation'
    },
    {
      icon: Rocket,
      title: '10x Faster Processing',
      description: 'Experience processing speeds up to 10x faster than traditional methods'
    }
  ];

  // Animate counters
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
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
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
              <div className="flex justify-center mb-6">
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-gray-300">Measurable results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Chart Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Growth Over Time</h3>
            <p className="text-gray-300">Our consistent growth reflects our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2021</div>
              <div className="text-gray-300 mb-4">2,500 Clients</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2022</div>
              <div className="text-gray-300 mb-4">5,000 Clients</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2023</div>
              <div className="text-gray-300 mb-4">10,000+ Clients</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-xl text-gray-200 mb-8">
              Be part of the next generation of businesses transforming with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;