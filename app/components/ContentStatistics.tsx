'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, Star, Zap, Shield } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered AI and IT solutions',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback and reviews',
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      number: '$50M+',
      label: 'Cost Savings',
      description: 'Total savings delivered to our clients',
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      number: '40%',
      label: 'Efficiency Gains',
      description: 'Average improvement in business processes',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical assistance',
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service with minimal downtime',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      color: 'from-red-500 to-rose-600'
    }
  ];

  const achievements = [
    {
      title: 'Fortune 500 Clients',
      description: 'Trusted by leading enterprises worldwide',
      icon: <Users className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Award-Winning Solutions',
      description: 'Recognized for innovation and excellence',
      icon: <Star className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Rapid Implementation',
      description: 'Deploy solutions in days, not months',
      icon: <Zap className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div id="stats-section" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the measurable results we've delivered to our clients across various industries.
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;