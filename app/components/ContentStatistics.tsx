'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0
  });

  const targetValues = {
    clients: 1000,
    projects: 500,
    satisfaction: 99,
    years: 10,
    countries: 25,
    uptime: 99.9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targetValues.clients * progress),
          projects: Math.floor(targetValues.projects * progress),
          satisfaction: Math.floor(targetValues.satisfaction * progress),
          years: Math.floor(targetValues.years * progress),
          countries: Math.floor(targetValues.countries * progress),
          uptime: Math.floor(targetValues.uptime * progress * 10) / 10
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    // Start animation after a short delay
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-emerald-400'
    },
    {
      icon: Star,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      value: counters.uptime,
      label: 'Uptime',
      suffix: '%',
      color: 'text-green-400'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for deep insights and predictions.',
      color: 'text-blue-400'
    },
    {
      icon: BarChart,
      title: 'Real-time Monitoring',
      description: 'Live dashboards with instant updates and comprehensive reporting.',
      color: 'text-emerald-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance.',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that grows with your business needs.',
      color: 'text-cyan-400'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing tools and workflows.',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous optimization for maximum efficiency and speed.',
      color: 'text-green-400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Content Statistics | Zion Tech Group</title>
        <meta name="description" content="Advanced content statistics and analytics platform for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Content Statistics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced analytics and statistics platform for modern businesses. Track, analyze, and optimize your content performance with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
                <p className="text-gray-300 text-lg">
                  Numbers that speak for themselves - our commitment to excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
                <p className="text-gray-300 text-lg">
                  Powerful tools and capabilities to transform your content strategy.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <feature.icon className={`w-12 h-12 mb-6 ${feature.color}`} />
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of businesses already using our content statistics platform to optimize their performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContentStatistics;