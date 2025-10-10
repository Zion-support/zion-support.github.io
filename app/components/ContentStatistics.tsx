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

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Highly rated by our clients',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      value: counters.years,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise and knowledge',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      value: counters.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global presence and reach',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Clock,
      value: counters.uptime,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Reliable service delivery',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the way in artificial intelligence solutions',
      metric: '50+ AI Models Deployed'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Zero security breaches across all projects',
      metric: '100% Security Record'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Delivering solutions that exceed expectations',
      metric: '40% Average Cost Reduction'
    },
    {
      icon: BarChart3,
      title: 'Growth',
      description: 'Consistent year-over-year growth',
      metric: '200% Revenue Growth'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateValue = (key: keyof typeof targetCounters) => {
        let current = 0;
        const target = targetCounters[key];
        const increment = target / steps;

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

      // Animate all counters
      Object.keys(targetCounters).forEach(key => {
        animateValue(key as keyof typeof targetCounters);
      });
    };

    // Start animation after a short delay
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-cyan-400 font-semibold">{stat.label}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 border border-white/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized for excellence in AI and IT solutions, delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <div className="text-cyan-400 font-semibold text-lg">{achievement.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Let us help you achieve similar results with our proven AI and IT solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
