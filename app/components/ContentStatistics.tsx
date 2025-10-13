<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentStatisticsPage: React.FC = () => {
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';
    years: 0
    years: 0;,});
=======
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, Brain, Globe, Zap } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5

const ContentStatistics: React.FC = () => {,
  const [counters, setCounters] = useState({)
=======
'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react'
=======
'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const ContentStatistics: React.FC = () => {
}
  const [counters, setCounters] = useState({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    clients: 0,
    projects: 0,
    satisfaction: 0,
<<<<<<< HEAD
    years: 0;,});
=======
    years: 0
<<<<<<< HEAD
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  const targetCounters = {clients: 500,
=======
  })
  const targetCounters = {
<<<<<<< HEAD
    clients: 500,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    projects: 1000,
    satisfaction: 99,
<<<<<<< HEAD
    years: 10;,};
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import { Zap, TrendingUp } from "lucide-react";
interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
=======
    years: 10
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

<<<<<<< HEAD
const ContentStatistics: React.FC = React.memo((props) => {
    years: 10
=======
=======
};
};
};
}
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    years: 15,
    countries: 50,
    uptime: 99
  };
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const statistics = [
[
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Leading the industry with cutting-edge AI solutions'
=======
      description: 'Leading the industry in AI-powered solutions'
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
      description: 'Leading the industry with cutting-edge AI solutions'
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
      description: 'Leading AI solutions for modern businesses'
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
        {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
    const animateCounter = (key: keyof typeof targetCounters) => {
      const target = targetCounters[key];
=======
    const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters];
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
<<<<<<< HEAD
      const timer = setInterval(() => {
=======
=======
      description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
    }
];;
  const benefits = [
];
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
[
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
];;
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const increment = target / steps;
      let current = 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      return setInterval(() => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        setCounters(prev => {
<<<<<<< HEAD
<<<<<<< HEAD
          const current = prev[key];
=======
          const current = prev[key as keyof typeof prev];
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
          const current = prev[key as keyof typeof prev];
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          }
<<<<<<< HEAD
          return prev;
        });
      }, 16);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
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
=======

      // Clear timer after duration
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
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
=======
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
=======
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - see how we've transformed businesses worldwide.
=======
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
=======
          return prev
        })
      }, 16)
    })
    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
<<<<<<< HEAD
  }, [])
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
=======
  }, []);
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform with our AI-powered solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. See why thousands of companies choose Zion Tech Group for their AI and IT needs.
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          </p>
        </div>
        {/* Statistics Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
            <div key={index} className="text-center">
<<<<<<< HEAD
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className={`w-16 h-16 ${stat.color} mx-auto mb-4 rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8" />
=======
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
<<<<<<< HEAD
                <div className="text-gray-300 text-lg">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
                <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
              </div>
<<<<<<< HEAD
  return (
<<<<<<< HEAD
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
=======
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
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
<<<<<<< HEAD
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
=======
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
=======
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          ))};
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Features Section */}
        <div className="mb-16">
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Achievements Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12">,</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We Lead the Industry</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our cutting-edge technology and proven expertise deliver unmatched results
            </p>
          </div>
<<<<<<< HEAD

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {achievements.map((achievement, index) => (
              <div key={index}className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description</p>}</p>
=======
        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why We're Different</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself - here's what sets us apart in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
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
<<<<<<< HEAD
=======
            </div>
          </div>
=======
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-8fa5
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default ContentStatistics;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
  )
}

export default ContentStatistics
=======
        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We're the Right Choice</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our comprehensive solutions deliver measurable results across all key business metrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature .icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {stat}
                    </div>
                  ))};
                </div>
              </div>
            ))};
          </div>
        </div>
        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Recognition and awards that validate our commitment to excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <achievement .icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))};
          </div>
        </div>
        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Benefits</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))};
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our growing community of successful businesses. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
