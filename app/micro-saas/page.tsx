'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
      id: '3',
      icon: Shield,
      title: 'Security Monitor',
      description: 'Comprehensive security monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Real-time alerts', 'Incident response'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Security'
      id: '4',
      icon: Cloud,
      title: 'Cloud Backup Pro',
      description: 'Automated cloud backup and disaster recovery solution with AI-powered optimization',
      features: ['Automated backups', 'Disaster recovery', 'Version control', 'Cross-platform sync', 'Encryption'],
      price: '$59/month',
      users: 'Unlimited',
      category: 'Backup'
      id: '5',
      icon: MessageSquare,
      title: 'AI Chat Support',
      description: 'Intelligent customer support chatbot with natural language processing and human handoff',
      features: ['AI chatbot', 'Multi-language support', 'Human handoff', 'Analytics dashboard', 'Custom training'],
      price: '$89/month',
      users: 'Up to 200 conversations',
      category: 'Support'
      id: '6',
      icon: TrendingUp,
      title: 'Marketing Automation',
      description: 'AI-driven marketing automation platform for email campaigns and social media management',
      features: ['Email campaigns', 'Social media scheduling', 'Lead nurturing', 'A/B testing', 'ROI tracking'],
      price: '$129/month',
      users: 'Up to 75 users',
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Backup', 'Support', 'Marketing'];

  const benefits = [
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
      title: 'Cloud-Native',
      description: 'Built for the cloud with automatic scaling and high availability'
      title: 'User-Friendly',
      description: 'Designed for non-technical users with intuitive interfaces'

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed for small to medium businesses. Analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, CRM, security, backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                View Pricing
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
              Our Micro SaaS Products
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}</span>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                  
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

        {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            <p className="text-xl text-purple-100 mb-8">
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
                View All Pricing
      </div>
    </>
  );
};

export default MicroSaasPage;