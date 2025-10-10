'use client';

import React from 'react';
import { Brain, Zap, Shield, Globe, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms provide deep insights into your business data'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Real-time data processing and analysis for instant decision making'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Deploy anywhere in the world with our cloud infrastructure'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Comprehensive dashboards and customizable reports for all stakeholders'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams and remote work'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Data Processed', value: '1TB+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Countries', value: '50+' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and capabilities that make our platform 
            the perfect choice for your business transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="cyber-card p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Businesses Worldwide</h3>
            <p className="text-gray-300">Join thousands of companies already using our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Experience the power of our platform with a free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-3 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;