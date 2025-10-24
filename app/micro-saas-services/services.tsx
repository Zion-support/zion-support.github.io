'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Regular audits']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Built to handle millions of users'
    },
    {
      icon: Database,
      title: 'Reliable Data',
      description: '99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Intuitive and easy to use'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS services and solutions from Zion Tech Group." />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-purple-400 max-w-3xl mx-auto">
              Professional micro SaaS services and solutions from Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Our Micro SaaS Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;