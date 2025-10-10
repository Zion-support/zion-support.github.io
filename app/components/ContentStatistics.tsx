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

<<<<<<< HEAD
  useEffect(() => {}
    const observer = new IntersectionObserver()
      ([entry]) => {}
        if (entry.isIntersecting) {}
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {}
      observer.observe(element);
    }

    return () => {}
      if (element) {}
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds;
  useEffect(() => {}
    if (isVisible) {}
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat) => {}
        let currentStep = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {}
          currentStep++;
          setCounts((prev) => ({}
            ...prev,
            [stat.id]: Math.min(Math.floor(increment * currentStep), stat.value)
          }));

          if (currentStep >= steps) {}
            clearInterval(timer);
            setCounts((prev) => ({}
              ...prev,
              [stat.id]: stat.value;
            }));
          }
        }, stepDuration);
      }
    }
  }, [isVisible, stats]);

  return(<section id="statistics-section" className="py-16" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">Our Impact<p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{stats.map((stat) => (</div>
  return (
    <section id="statistics-section" className="py-16" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4"></section>
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">Our Impact</h2><p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{stats.map((stat) => (</div>
      <div className="container mx-auto px-4">
        <h2 id="statistics-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (}</div>
            <div
        <h2 id="statistics-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-4 neon-text">
          Our Impact;</div>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">)
          Numbers that speak for themselves. We've been delivering exceptional results for our clients across the globe.)
        </p>)
)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">),
          {stats.map((stat) => (,</div>
            <div;
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cyber-card`}
            ></div>
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}></div>
                  <stat.icon className="w-8 h-8" />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.id === 'uptime' || stat.id === 'satisfaction'</div>
              </div>

              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.id === 'uptime' || stat.id === 'satisfaction'}
                  ? `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                  : `${counts[stat.id as keyof typeof counts]}${stat.suffix}`</div>
                }</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3><p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">Industry Recognition</h3>
          <h3 className="text-2xl font-bold text-white text-center mb-8 neon-text">
            Industry Recognition;
          </h3>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆<h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div><h4 className="font-semibold text-white mb-1">Best AI Company 2024<p className="text-gray-400 text-sm">Tech Innovation Awards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div><h4 className="font-semibold text-white mb-1">5-Star Rating<p className="text-gray-400 text-sm">Client Reviews</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div><h4 className="font-semibold text-white mb-1">ISO 27001 Certified<p className="text-gray-400 text-sm">Security Standards</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div><h4 className="font-semibold text-white mb-1">Fastest Growing<p className="text-gray-400 text-sm">AI Solutions Provider</p>
            </div>,
        </div>,
      </div>,
    </section>);
};

export default ContentStatistics;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentStatisticsPage: React.FC = () => {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
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
=======
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - our track record of success and client satisfaction.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p className="text-xl text-gray-300">
              Our solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Key Benefits</h3>
            <p className="text-xl text-gray-300">
              Discover why thousands of businesses trust our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that speak to our success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (</div>
            <div key={index} className="text-center cyber-card p-6">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
          ))}
        </div>
    </section>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
  );
};

export default ContentStatistics;