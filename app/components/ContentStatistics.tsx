'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, Brain, Globe, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetValues = {
    clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10
  };

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

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key: keyof typeof targetValues) => {
      let current = 0;
      const increment = targetValues[key] / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValues[key]) {
          current = targetValues[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    Object.keys(targetValues).forEach(key => {
      animateCounter(key as keyof typeof targetValues);
    });
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: TrendingUp,
      value: counters.projects,
      label: 'Projects Completed',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Award,
      value: counters.satisfaction,
      label: 'Client Satisfaction %',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years of Experience',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  return (
    <section id="statistics-section" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves. We've been delivering exceptional results for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value.toLocaleString()}
                  {stat.label.includes('%') && '%'}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to achieve your business goals with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium border border-cyan-400 px-8 py-4 rounded-lg"
              >
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;