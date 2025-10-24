<<<<<<< HEAD
'use client'
import React from 'react';
=======
'use client';
import React, { useState, useEffect } from 'react';
import { BarChart, Brain, TrendingUp, Target, Users, Award, ArrowRight } from 'lucide-react';
>>>>>>> origin/main

interface ContentStatisticsProps {
  className?: string;
}

<<<<<<< HEAD
const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Content Statistics</h2>
      <p className="text-gray-600">This is a placeholder component for Content Statistics.</p>
=======
const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '' }) => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0,
  });

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your content performance with advanced analytics.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to understand content trends and patterns.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor and track content performance across all platforms.',
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track content goals with intelligent recommendations.',
    },
  ];

  const stats = [
    { label: 'Happy Clients', value: Math.round(counters.clients), suffix: '+' },
    { label: 'Projects Completed', value: Math.round(counters.projects), suffix: '+' },
    { label: 'Client Satisfaction', value: counters.satisfaction, suffix: '%' },
    { label: 'Years Experience', value: Math.round(counters.years), suffix: '+' },
    { label: 'Countries Served', value: Math.round(counters.countries), suffix: '+' },
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
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ContentStatistics;
=======
export default ContentStatistics;
>>>>>>> origin/main
