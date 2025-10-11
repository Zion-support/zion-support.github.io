'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  i: d: string;
  ico: n: React.ComponentType<any>;
  titl: e: string;
  descriptio: n: string;
  feature: s: string[];
  pric: e: string;
  user: s: string;
  popula: r: boolean;
  categor: y: string;
}

const MicroSaasPage: React.FC = () => {
  const: microSaasProducts: MicroSaasProduct[] = [
    {
      i: d: '1',
      ico: n: BarChart3,
      titl: e: 'AI Analytics Dashboard',
      descriptio: n: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      feature: s: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      pric: e: '$99/month',
      user: s: 'Up to 50 users',
      popula: r: true,
      categor: y: 'Analytics'
    },
    {
      i: d: '2',
      ico: n: Users,
      titl: e: 'AI-Powered CRM',
      descriptio: n: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      feature: s: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      pric: e: '$149/month',
      user: s: 'Up to 100 users',
      popula: r: false,
      categor: y: 'CRM'
    },
    {
      i: d: '3',
      ico: n: Shield,
      titl: e: 'Security Monitor',
      descriptio: n: 'Comprehensive security monitoring and threat detection for small businesses',
      feature: s: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Real-time alerts', 'Incident response'],
      pric: e: '$79/month',
      user: s: 'Up to 25 users',
      popula: r: false,
      categor: y: 'Security'
    },
    {
      i: d: '4',
      ico: n: Cloud,
      titl: e: 'Cloud Backup Pro',
      descriptio: n: 'Automated cloud backup and disaster recovery solution with AI-powered optimization',
      feature: s: ['Automated backups', 'Disaster recovery', 'Version control', 'Cross-platform sync', 'Encryption'],
      pric: e: '$59/month',
      user: s: 'Unlimited',
      popula: r: true,
      categor: y: 'Backup'
    },
    {
      i: d: '5',
      ico: n: MessageSquare,
      titl: e: 'AI Chat Support',
      descriptio: n: 'Intelligent customer support chatbot with natural language processing and human handoff',
      feature: s: ['AI chatbot', 'Multi-language support', 'Human handoff', 'Analytics dashboard', 'Custom training'],
      pric: e: '$89/month',
      user: s: 'Up to 200 conversations',
      popula: r: false,
      categor: y: 'Support'
    },
    {
      i: d: '6',
      ico: n: TrendingUp,
      titl: e: 'Marketing Automation',
      descriptio: n: 'AI-driven marketing automation platform for email campaigns and social media management',
      feature: s: ['Email campaigns', 'Social media scheduling', 'Lead nurturing', 'A/B testing', 'ROI tracking'],
      pric: e: '$129/month',
      user: s: 'Up to 75 users',
      popula: r: true,
      categor: y: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Backup', 'Support', 'Marketing'];

  const benefits = [
    {
      ico: n: Zap,
      titl: e: 'Quick Setup',
      descriptio: n: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Bank-level security with encryption and compliance standards'
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud-Native',
      descriptio: n: 'Built for the cloud with automatic scaling and high availability'
    },
    {
      ico: n: Users,
      titl: e: 'User-Friendly',
      descriptio: n: 'Designed for non-technical users with intuitive interfaces'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed for small to medium businesses. Analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, CRM, security, backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br />
              <span className="text-white">Solutions>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              >
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid: md:grid-cols-2: lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}>
              ))}
            >

        {/* Products Grid */}
        <section className="py-20 px-4: sm:px-6: lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Products
            </h2>
            <div className="grid: md:grid-cols-2: lg:grid-cols-3 gap-8">
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
                      <span className="text-yellow-400 text-sm font-medium">Most Popular>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}>
                  
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
                    <div>
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}>
                  
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  >
              ))}
            >

        {/* CTA Section */}
        <section className="py-20 px-4: sm:px-6: lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl: md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold: hover:bg-white: hover:text-gray-900 transition-all duration-300"
              >
                View All Pricing
              >
        >
      >
      >
      >
    </>
  );
};

export default MicroSaasPage;