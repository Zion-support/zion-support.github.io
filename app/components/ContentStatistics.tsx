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

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance',
      stats: ['50+ Countries', '24/7 Support', 'Local Compliance']
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced algorithms for accurate targeting and personalization'
    },
    {
      icon: Rocket,
      title: 'Rocket Performance',
      description: 'Lightning-fast processing and real-time analytics'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions with unmatched reliability'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targetCounters.clients * progress),
          projects: Math.floor(targetCounters.projects * progress),
          satisfaction: Math.floor(targetCounters.satisfaction * progress),
          years: Math.floor(targetCounters.years * progress),
          countries: Math.floor(targetCounters.countries * progress),
          uptime: Math.floor(targetCounters.uptime * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetCounters);
        }
      }, stepDuration);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the impressive results we've achieved for our clients and the measurable impact of our solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Key Achievements</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has resulted in remarkable achievements across all areas of our business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why We Stand Out</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our unique combination of technology, expertise, and dedication sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our growing community of successful businesses. Let us help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Start Your Journey</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;