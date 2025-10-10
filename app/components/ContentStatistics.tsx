'use client';

import React from 'react';
import { TrendingUp, Users, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Businesses worldwide trust our platform'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Typical return on investment for our clients'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Reliable service you can count on'
    },
    {
      icon: Shield,
      value: '50+',
      label: 'Security Certifications',
      description: 'Enterprise-grade security and compliance'
    }
  ];

  const achievements = [
    'Trusted by Fortune 500 companies',
    'Award-winning AI technology',
    '24/7 expert support team',
    'Global infrastructure network',
    'Continuous innovation and updates'
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Proven Results & Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform delivers measurable results and has earned the trust of businesses worldwide
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="cyber-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Industry Leaders Choose Us</h3>
            <p className="text-gray-300">Our track record speaks for itself</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6">
              Start your transformation journey today and see why thousands of businesses trust us.
            </p>
            <a
              href="/contact"
              className="cyber-button px-8 py-3 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;