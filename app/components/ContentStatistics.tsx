import React from 'react';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentStatisticsPage: React.FC = () => {
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';
    years: 0
    years: 0;,});

const ContentStatistics: React.FC = () => {,
  const [counters, setCounters] = useState({)
'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react'
'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';
import React from 'react';
const ContentStatistics: React.FC = () => {
}
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0;,});

  const targetCounters = {clients: 500,
  })
  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10;,};
import React from 'react';
    years: 10
  };

const ContentStatistics: React.FC = React.memo((props) => {
    years: 10
    years: 15,
    countries: 50,
    uptime: 99
  };
      color: 'text-cyan-400'
      color: 'text-cyan-400',},
    {icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',},
    {icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',},
    {icon: Clock,
  const statistics = [
[

import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Globe, Award, Star, Zap, Shield, Brain } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: number;
  suffix: string;
  description: string;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  const stats: StatItem[] = [
    {
      id: '1',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Happy Customers',
      value: 10000,
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
      color: 'text-yellow-400',}];

  const achievements = [
    {icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry with cutting-edge AI solutions',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries',},
    {icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response',}];

  useEffect(() => {const timers = Object.keys(targetCounters).map(key => {)
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds;
      const increment = target / (duration / 16); // 60fps;
      return setInterval(() => {
        setCounters(prev => {)
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {...prev,}
              [key]: Math.min(current + increment, target)};
  ];];];
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
      description: 'Leading AI solutions for modern businesses'
  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {;
      const timer = setInterval(() => {
        setCounters(prev => {;
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry with cutting-edge AI solutions'
      description: 'Leading the industry with cutting-edge AI solutions'
      description: 'Leading AI solutions for modern businesses'
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
];;
  const features = [
[
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
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'
    },
        {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response'
    }
  ];

  useEffect(() => {
    const animateCounter = (key: keyof typeof targetCounters) => {
      const target = targetCounters[key];
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
      title: 'Success Rate',
      value: 99,
      suffix: '%',
      description: 'Project completion rate',
      color: 'from-green-500 to-blue-600'
    },
        {
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
    }
];;
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;
      return setInterval(() => {
        setCounters(prev => {
          const current = prev[key];
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

    return () => {timers.forEach(timer => clearInterval(timer));};
  }, []);

  return(<div className="py-16 px-4">)</div>
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Numbers that speak for themselves - our track record of success and client satisfaction.</p>
          </p>
        </div>

        {/* Statistics Grid */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
          {statistics.map((stat, index) => (
            <div key={index}className="text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.color}mb-2`}>{Math.floor(stat.value)</div>}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label</div>}</div>
      setTimeout(() => clearInterval(timer), duration);
    };

    // Start animations with slight delays
    Object.keys(targetCounters).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key as keyof typeof targetCounters);
      }, index * 100);
    });
  }, []);

  return (
    <div className="py-16 px-4">
    });
    {
      id: '3',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Countries Served',
      value: 50,
      suffix: '+',
      description: 'Global presence',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: '4',
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Awards Won',
      value: 25,
      suffix: '+',
      description: 'Industry recognition',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: '5',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Client Rating',
      value: 49,
      suffix: '/5',
      description: 'Average client satisfaction',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: '6',
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Uptime',
      value: 999,
      suffix: '%',
      description: 'Service reliability',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const targetCounters = stats.reduce((acc, stat) => {
    acc[stat.id] = stat.value;
    return acc;
  }, {} as { [key: string]: number });

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach((stat) => {
        const target = targetCounters[stat.id];
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, 16);
      });
    };

    animateCounters();
  }, [isVisible, stats, targetCounters]);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - see how we've transformed businesses worldwide.
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
    <div id="statistics-section" className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform with our AI-powered solutions.
          </p>
        </div>
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className={`w-16 h-16 ${stat.color} mx-auto mb-4 rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentStatistics | Zion Tech Group</title>
        <meta name="description" content="Professional ContentStatistics services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentStatistics, AI solutions, IT services, Zion Tech Group, contentstatistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentStatistics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentstatistics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentStatistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentstatistics solutions deliver unmatched performance, security, and scalability.
export default ContentStatistics;
          ))
        </div>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact of our AI and IT solutions across industries worldwide
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center group">
              <div className={`w-16 h-16 ${stat.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat .icon className="w-8 h-8" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))};
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We Lead the Industry</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our cutting-edge technology and proven expertise deliver unmatched results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
      </section>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentstatistics needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          ))}
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <achievement.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Performance Improvement</h3>
            <p className="text-3xl font-bold text-white mb-2">300%</p>
            <p className="text-gray-300">Average system performance boost</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentStatistics;

export default ContentStatistics;
