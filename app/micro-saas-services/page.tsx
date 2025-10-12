import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Clock, Shield, Users, DollarSign, Star, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: '$15/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      duration: 'Instant setup'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and financial insights.',
      features: ['Receipt scanning', 'Category automation', 'Budget alerts', 'Financial reports'],
      pricing: '$12/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance',
      duration: 'Instant setup'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security scoring', 'Breach monitoring'],
      pricing: '$8/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      duration: 'Instant setup'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with automated scheduling and meeting optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$18/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity',
      duration: 'Instant setup'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness tips'],
      pricing: '$20/month',
      popular: true,
      link: '/ai-health-tracker',
      category: 'Health',
      duration: 'Instant setup'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      features: ['Smart templates', 'Payment tracking', 'Client management', 'Financial analytics'],
      pricing: '$25/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Finance',
      duration: 'Instant setup'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Health'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our easy-to-use micro SaaS solutions'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Cost-effective solutions starting from just $8/month'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS solutions. From AI task managers to expense trackers, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, AI tools, productivity apps, business software, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro SaaS
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of specialized micro SaaS solutions designed to solve specific business challenges. 
            From productivity tools to financial management, find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Browse Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Request Custom Solution
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized tools designed to solve specific business challenges with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span className="font-semibold text-green-400">{service.pricing}</span>
                  <span>{service.duration}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Try Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with user-friendly design to deliver exceptional value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We can create a custom micro SaaS solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Request Custom Solution
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;