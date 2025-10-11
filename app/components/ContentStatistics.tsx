<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentStatisticsPage: React.FC = () => {
=======
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react';
=======
<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';
=======

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock, Star, BarChart3, Target, Rocket } from 'lucide-react';
>>>>>>> origin/main
>>>>>>> origin/main

const ContentStatistics: React.FC = () => {,
  const [counters, setCounters] = useState({)
    clients: 0,
    projects: 0,
    satisfaction: 0,
<<<<<<< HEAD
    years: 0
=======
<<<<<<< HEAD
<<<<<<< HEAD
    years: 0;,});
=======
    years: 0
=======
    years: 0,
    countries: 0,
    uptime: 0
>>>>>>> origin/main
>>>>>>> origin/main
  });
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> main

<<<<<<< HEAD
  const targetCounters = {clients: 500,
    projects: 1000,
    satisfaction: 99,
<<<<<<< HEAD
<<<<<<< HEAD
    years: 10;,};
=======
    years: 10;
=======
=======
'use client'
<<<<<<< HEAD
import React from 'react';

const ContentStatistics: React.FC = React.memo((props) => {
=======
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react'
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState()
  })
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
  const targetCounters = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
<<<<<<< HEAD
    years: 10
=======
<<<<<<< HEAD
    years: 15,
    countries: 50,
    uptime: 99
>>>>>>> origin/main
>>>>>>> origin/main
  };
>>>>>>> origin/main
=======
    years: 10
  };
>>>>>>> main

=======
    years: 10
  }
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
  const statistics = [
    {icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
<<<<<<< HEAD
      color: 'text-cyan-400'
=======
<<<<<<< HEAD
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
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
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
=======
      color: 'text-yellow-400'
    }
<<<<<<< HEAD
  ];];];
=======
  ];

>>>>>>> main
=======
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'
>>>>>>> origin/main
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
<<<<<<< HEAD
  ];

>>>>>>> origin/main
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
<<<<<<< HEAD
      description: 'Bank-level security with encryption and compliance standards'
=======
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
=======
  ]
>>>>>>> origin/main
  const achievements = [
    {
      icon: Brain,
      title: 'AI Innovation',
<<<<<<< HEAD
      description: 'Leading AI solutions for modern businesses'
=======
      description: 'Leading the industry with cutting-edge AI solutions'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

<<<<<<< HEAD
  useEffect(() => {
<<<<<<< HEAD
    const timers = Object.keys(targetCounters).map(key => {;
=======
    const timers = Object.keys(targetCounters).map(key => {
>>>>>>> main
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
<<<<<<< HEAD
      const timer = setInterval(() => {
        setCounters(prev => {;
=======
      return setInterval(() => {
        setCounters(prev => {
>>>>>>> main
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> main
          }
          return prev;
        });
      }, 16);
<<<<<<< HEAD
<<<<<<< HEAD
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
              </div>
=======
=======
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
>>>>>>> origin/main

<<<<<<< HEAD
>>>>>>> origin/main
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
=======
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
  ];

>>>>>>> origin/main
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
          clearInterval(timers[0]);
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
=======
  ]
  useEffect(() => {
    const timers = Object.keys(targetCounters).map()
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        setCounters()
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev
        })
      }, 16)
      return timer
    })
    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Statistics Grid */}
      </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {statistics.map((stat, index) => (
          </div><$2 />
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            </div><div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
              </div><stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className={`text-4xl font-bold ${stat.color} mb-2`}>
              {Math.floor(stat.value)}{stat.suffix}
            </div>
            <div className="text-gray-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

      {/* Achievements Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
        </div><h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            </div><div key={index} className="text-center">
              </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                </div><achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300">{achievement.description}</p>
>>>>>>> origin/main
=======
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. Join thousands of satisfied clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
<<<<<<< HEAD
=======
              <div className="text-4xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
>>>>>>> main
>>>>>>> origin/main
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Achievements Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12">,</div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why We're Different</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Our commitment to excellence and innovation sets us apart in the industry.</p>
            </p>
          </div>
          
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
                </div>
=======
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
>>>>>>> main
              </div>
            </div>
          ))}
        </div>
=======
      {/* CTA Section */}
      <div className="text-center">
        </div><h3 className="text-2xl font-bold text-white mb-4">
          Ready to Join Our Success Story?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
          Let us help you achieve similar results with our proven AI and IT solutions.
        </p>
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300" /></button>
          Get Started Today
          </button><ArrowRight className="w-5 h-5 ml-2" />
        </button>
>>>>>>> origin/main
      </div>
    </div>
<<<<<<< HEAD
  );
});

export default ContentStatistics;
=======
  )
}
export default ContentStatistics
          return prev
        })
      }, 16)
    })
    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])
  return (
<<<<<<< HEAD
          ))
        </div>
=======
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
<<<<<<< HEAD
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
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why We Lead the Industry</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our cutting-edge technology and proven expertise deliver unmatched results
>>>>>>> origin/main
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-xs text-purple-300 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                      {stat}
                    </div>
                  ))}
                </div>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======
>>>>>>> origin/main

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Recognition & Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry recognition and awards that validate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
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
          </div>
        </div>
      </section>
=======

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that make our solutions the preferred choice for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the thousands of businesses that have transformed their operations with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
>>>>>>> origin/main
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ContentStatisticsPage;
=======
export default ContentStatistics;
=======
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses and delivered exceptional results.
        {/* Statistics Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {Math.floor(stat.value)}{stat.suffix}
              <div className="text-gray-300">{stat.label}
          ))}
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}
              <p className="text-gray-300 text-sm">{achievement.description}
          ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-slate-900" />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}{stat.suffix}
              <div className="text-lg font-semibold text-white mb-2">{stat.label}
              <div className="text-gray-400 text-sm">{stat.description}
          ))}
        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the powerful features that make our solutions stand out.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}
                <p className="text-gray-300 text-sm mb-4">{feature.description}
                <div className="space-y-2">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{stat}
                  ))}
            ))}
        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}
                <p className="text-gray-300 text-sm">{achievement.description}
            ))}
        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that make our solutions the preferred choice.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Today
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">View Case Studies
  )
}
export default ContentStatistics</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></a></a></p></p></p></p></p></p></p></p></h2></h3></h3></h3></h3></h3></h4></h4>
</a>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
>>>>>>> origin/main
