'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Award, CheckCircle, Star } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetCounters = {
    projects: 500,
    clients: 150,
    countries: 25,
    satisfaction: 98
  };

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Projects Completed',
      value: counters.projects,
      suffix: '+',
      description: 'Successful implementations across various industries'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Happy Clients',
      value: counters.clients,
      suffix: '+',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Countries Served',
      value: counters.countries,
      suffix: '+',
      description: 'Global presence and reach'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Client Satisfaction',
      value: counters.satisfaction,
      suffix: '%',
      description: 'Consistently high satisfaction ratings'
    }
  ];

  const achievements = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'ISO 27001 Certified',
      description: 'Information security management system'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'AWS Advanced Partner',
      description: 'Certified cloud solutions provider'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Microsoft Gold Partner',
      description: 'Authorized Microsoft solutions provider'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'SOC 2 Compliant',
      description: 'Security and availability standards'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      Object.keys(targetCounters).forEach((key) => {
        const target = targetCounters[key as keyof typeof targetCounters];
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
            [key]: Math.floor(current)
          }));
        }, 16);
      });
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div id="stats-section" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure our success by the value we deliver to our clients and the positive impact we create
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certifications & Achievements
              </h3>
              <p className="text-gray-600">
                Our commitment to excellence is recognized by industry-leading certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {achievement.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
