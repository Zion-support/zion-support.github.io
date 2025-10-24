<<<<<<< HEAD
"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Award, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
=======
'use client';
import React, { useState, useEffect } from 'react';
import { BarChart, Brain, TrendingUp, Target, Users, Award, ArrowRight } from 'lucide-react';
>>>>>>> origin/main

interface ContentStatisticsProps {
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '' }) => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
<<<<<<< HEAD
    uptime: 0
  })

  const targetCounters = useMemo(() => ({
    clients: 1000,
    projects: 500,
    satisfaction: 99,
    years: 10,
    countries: 25,
    uptime: 99.9
  }), [])

  useEffect(() => {
    const targetCounters = {
      clients: 1000,
      projects: 500,
      satisfaction: 99,
      years: 10,
      countries: 25,
      uptime: 99.9
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev }
        let allComplete = true

        Object.keys(targetCounters).forEach(key => {
          const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps

          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment,
              target
            )
            allComplete = false
          }
        })

        if (allComplete) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(interval)
  }, [targetCounters])
=======
    uptime: 0,
  });
>>>>>>> origin/main

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
<<<<<<< HEAD
      description: 'Get instant insights into your content performance with advanced analytics.'
=======
      description: 'Get instant insights into your content performance with advanced analytics.',
>>>>>>> origin/main
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
<<<<<<< HEAD
      description: 'Leverage artificial intelligence to understand content trends and patterns.'
=======
      description: 'Leverage artificial intelligence to understand content trends and patterns.',
>>>>>>> origin/main
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
<<<<<<< HEAD
      description: 'Monitor and track content performance across all platforms.'
=======
      description: 'Monitor and track content performance across all platforms.',
>>>>>>> origin/main
    },
    {
      icon: Target,
      title: 'Goal Setting',
<<<<<<< HEAD
      description: 'Set and track content goals with intelligent recommendations.'
    }
  ]
=======
      description: 'Set and track content goals with intelligent recommendations.',
    },
  ];
>>>>>>> origin/main

  const stats = [
    { label: 'Happy Clients', value: Math.round(counters.clients), suffix: '+' },
    { label: 'Projects Completed', value: Math.round(counters.projects), suffix: '+' },
    { label: 'Client Satisfaction', value: counters.satisfaction, suffix: '%' },
    { label: 'Years Experience', value: Math.round(counters.years), suffix: '+' },
    { label: 'Countries Served', value: Math.round(counters.countries), suffix: '+' },
<<<<<<< HEAD
    { label: 'Uptime', value: counters.uptime, suffix: '%' }
  ]

  return (
    <>
      <Helmet>
        <title>Content Statistics - Zion Tech Group</title>
        <meta name="description" content="Advanced content statistics and analytics solutions for modern businesses." />
        <meta name="keywords" content="content statistics, analytics, data insights, business intelligence" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Content Statistics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced content statistics and analytics solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your content analytics
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak for themselves
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our content analytics solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
=======
    { label: 'Uptime', value: counters.uptime, suffix: '%' },
  ];

  useEffect(() => {
    const targetValues = {
      clients: 500,
      projects: 1000,
      satisfaction: 99,
      years: 10,
      countries: 25,
      uptime: 99.9,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        clients: targetValues.clients * progress,
        projects: targetValues.projects * progress,
        satisfaction: targetValues.satisfaction * progress,
        years: targetValues.years * progress,
        countries: targetValues.countries * progress,
        uptime: targetValues.uptime * progress,
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Content Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track and analyze your content performance with our advanced statistics dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Page
=======
export default ContentStatistics;
>>>>>>> origin/main
