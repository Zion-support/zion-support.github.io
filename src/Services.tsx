import React;, { useState } from 'react';
import { useState;, useMemo } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES;, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
import React;, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import React from 'react';;
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import {;;
Brain,;
Cpu,;
Cloud,;
Shield,;
Rocket,;
Zap,;
ArrowRight,;
CheckCircle,;
Star,;
Users,;
Target,;
Award,;
Globe,;
Settings,;
Database,;
Network
} from 'lucide-react';
export default function Services() {;
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all');
const serviceCategories = [;
    {
id: 'ai-ml',;,
title: 'AI & Machine Learning',;,
icon: Brain,;,
color: 'from-purple-500 to-pink-500',;,
description: 'Intelligent solutions powered by artificial intelligence',;,
services: [
        {,
name: 'AI Autonomous Systems',;,
path: '/services/ai-autonomous-systems',;,
description: 'Advanced autonomous AI systems that operate independently',;,
icon: Brain,;,
features: ['Self-learning algorithms', 'Predictive analytics', 'Automated decision making'],;,
pricing: 'Starting from $5,000/month'
}
        },
        {
name: 'AI Research Assistant',;,
path: '/ai-autonomous-research-assistant',;,
description: 'AI-powered research automation and insights',;,
icon: Brain,;,
features: ['Data analysis', 'Literature review', 'Trend identification'],;,
pricing: 'Starting from $3,000/month'
        },
        {
name: 'AI Business Intelligence',;,
path: '/services/ai-business-intelligence',;,
description: 'Advanced analytics and business insights',;,
icon: BarChart3,;,
features: ['Real-time dashboards', 'Predictive modeling', 'Performance tracking'],;,
pricing: 'Starting from $4,000/month'
        },
        {
name: 'AI Marketing Automation',;,
path: '/services/ai-marketing-automation',;,
description: 'Smart marketing optimization and automation',;,
icon: Target,;,
features: ['Customer segmentation', 'Campaign optimization', 'ROI tracking'],;,
pricing: 'Starting from $2,500/month'
        }
      ]
    },
    {
id: 'quantum',;,
title: 'Quantum Technology',;,
icon: Brain,;,
color: 'from-blue-500 to-cyan-500',;,
description: 'Next-generation quantum computing solutions',;,
services: [
        {,
name: 'Quantum Neural Networks',;,
path: '/quantum-neural-network-platform',;,
description: 'Quantum-powered neural networks for complex problems',;,
icon: Brain,;,
features: ['Quantum algorithms', 'Superior performance', 'Future-proof technology'],;,
pricing: 'Starting from $15,000/month'
        },
        {
name: 'Quantum Computing',;,
path: '/services/quantum-technology',;,
description: 'Quantum computing platforms and solutions',;,
icon: Cpu,;,
features: ['Quantum supremacy', 'Complex simulations', 'Cryptography'],;,
pricing: 'Starting from $20,000/month'
        }
      ]
    },
    {
id: 'cybersecurity',;,
title: 'Cybersecurity',;,
icon: Shield,;,
color: 'from-red-500 to-pink-500',;,
description: 'Comprehensive security and compliance solutions',;,
services: [
        {,
name: 'Cybersecurity Services',;,
path: '/services/cybersecurity',;,
description: 'Complete security solutions for your business',;,
icon: Shield,;,
features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],;,
pricing: 'Starting from $3,500/month'
        },
        {
name: 'SOC2 Compliance Automation',;,
path: '/soc2-compliance-automation',;,
description: 'Automated compliance management and monitoring',;,
icon: Lock,;,
features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],;,
pricing: 'Starting from $4,500/month'
        }
      ]
    },
    {
id: 'infrastructure',;,
title: 'Cloud & Infrastructure',;,
icon: Cpu,;,
color: 'from-blue-500 to-indigo-500',;,
description: 'Scalable cloud solutions and infrastructure management',;,
services: [
        {,
name: 'Cloud DevOps',;,
path: '/cloud-devops',;,
description: 'Cloud development and operations automation',;,
icon: Cloud,;,
features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],;,
pricing: 'Starting from $3,000/month'
        },
        {
name: 'IT Infrastructure',;,
path: '/services/it-infrastructure',;,
description: 'Complete IT infrastructure solutions',;,
icon: Network,;,
features: ['Network design', 'Hardware management', 'Performance optimization'],;,
pricing: 'Starting from $2,500/month'
        },
        {
name: '5G Enterprise Solutions',;,
path: '/5g-enterprise-solutions',;,
description: 'High-speed 5G connectivity solutions',;,
icon: Network,;,
features: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth'],;,
pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
id: 'business',;,
title: 'Business Operations',;,
icon: Building,;,
color: 'from-green-500 to-emerald-500',;,
description: 'Streamlined business process automation',;,
services: [
        {,
name: 'Autonomous Business Platform',;,
path: '/autonomous-business-operations-platform',;,
description: 'Self-operating business systems and automation',;,
icon: Building,;,
features: ['Process automation', 'Workflow optimization', 'Performance analytics'],;,
pricing: 'Starting from $6,000/month'
        },
        {
name: 'AI Asset Management',;,
path: '/ai-powered-it-asset-management',;,
description: 'Intelligent IT asset management and tracking',;,
icon: Database,;,
features: ['Asset tracking', 'Lifecycle management', 'Cost optimization'],;,
pricing: 'Starting from $2,000/month'
        }
      ]
    },
    {
id: 'industry',;,
title: 'Industry Solutions',;,
icon: Target,;,
color: 'from-orange-500 to-yellow-500',;,
description: 'Tailored solutions for specific industries',;,
services: [
        {,
name: 'Healthcare Technology',;,
path: '/solutions/healthcare',;,
description: 'Technology solutions for healthcare industry',;,
icon: Heart,;,
features: ['Patient management', 'Medical analytics', 'Compliance'],;,
pricing: 'Starting from $8,000/month'
        },
        {
name: 'Financial Services',;,
path: '/services/financial-services',;,
description: 'Fintech solutions and financial technology',;,
icon: DollarSign,;,
features: ['Risk management', 'Fraud detection', 'Compliance'],;,
pricing: 'Starting from $7,000/month'
        },
        {
name: 'Manufacturing Intelligence',;,
path: '/services/manufacturing-intelligence',;,
description: 'Smart manufacturing and Industry 4.0 solutions',;,
icon: Cpu,;,
features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],;,
pricing: 'Starting from $6,500/month'
        }
      ]
    }
  ];
const filteredCategories = selectedCategory === 'all'; 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);
const filteredServices = filteredCategories.flatMap(cat =>;;
cat.services.filter(service =>;
service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
return (;
      {/* Hero Section */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              {" "}Micro SAAS Services
      {/* Hero Section */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">;
Our Services
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">;
Comprehensive technology solutions designed to transform your business;
and drive sustainable growth in the digital age.
              <$2 />;
to="/contact";
className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >;
Get Started
              <$2 />;
to="/request-quote";
className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >;
Request Quote
      {/* Hero Section */}
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>;
import React from 'react';;
import React from 'react';;
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import {;;
Brain,;
Cloud,;
Shield,;
Zap,;
Globe,;
Database,;
Smartphone, 
          {/* Category Pills */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <$2 />;
onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${};
selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'}`}
            >;
Get Started
            <$2 />;
to="/pricing";
className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >;
View Pricing

      {/* Service Categories */}
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">;
Service Categories
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">;
Explore our comprehensive range of technology services designed to meet;
every aspect of your digital transformation journey.
            {serviceCategories.map((category), index) => (
                  {category.title}
      {/* Service Categories */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Service Categories</h2>
            {serviceCategories.map((category), index) => (
      {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s'}}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s'}}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s'}}}></div>

        {/* Hero Section */}
className="text-center"
      {/* Hero Section */}
        {/* Animated Background */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
initial={{ opacity: 0}}, y: 30 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}}
          >;
className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 backdrop-blur-sm"
              />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
Comprehensive AI-powered technology solutions designed to transform your business and drive innovation across all industries.
          
          {/* Search and Filter */}
type="text";
placeholder="Search services...";
value={searchQuery}
                onChange={(e) =>
  </input> setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
          </div>;
key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${};
selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'}`}
              >
                {category.name}
            <$2 />;
onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${};
selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >;
All Services
            {serviceCategories.map((category) => (
              <$2 />;
key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${};
selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {category.title}
            ))}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">;
Revolutionary Technology Services
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">;
Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business.;
From AI-powered analytics to quantum computing platforms, we're building the future today.
                {services.length}+ Revolutionary Services
                99.9% Uptime Guarantee
                <Brain className="w-4 h-4 text-zion-cyan" />;
AI-Powered Solutions
                <Star className="w-4 h-4 text-zion-cyan" />;
Competitive Pricing

      {/* Filters and Search */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
              {/* Category Filter */}
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300";
className="mb-12"
        >
            {/* Search Bar */}
type="text";
placeholder="Search services, features, or use cases...";
value={searchTerm}
                onChange={(e) =>
  </input> setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />

            {/* Filters */}
              {/* Category Filter */}
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Category</label>
value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map(category => ()
                    <option key={category} value={category}>{category}</option>
                  ))}

              {/* Pricing Filter */}
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {pricingModels.map(model => ()
                    <option key={model} value={model}>{model.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                  ))}

variants={containerVariants}
            initial="hidden";
animate="visible";
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredServices.map((service) => (
key={service.id}
                variants={itemVariants}
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
              >
                {/* Service Header */}
                      {service.category}
                    {service.badge && (
                      < className={`px-3 py-1 text-xs font-medium rounded-full border ${$2 />};
service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :;
service.badge === 'New' ? 'bg-green-500/20 text-green-400 border-green-500/30' :;
service.badge === 'Featured' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :;
service.badge === 'Premium' ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30' :
                        'bg-zion-purple/20 text-zion-purple border-zion-purple/30'}`}>
                        {service.badge}
                    )}
                    {service.title}
                    {service.description}

                {/* Pricing */}
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    <span className="text-zion-slate-light text-sm">/month</span>
                  {service.price.yearly && (
                      {service.price.currency}{service.price.yearly.toLocaleString()}/year (Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                  )}

                {/* Key Features */}
                  <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature), idx) => (
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                    ))}

key={service.id}
                initial={{ opacity: 0}}, y: 20 }}
                animate={{ opacity: 1}}, y: 0 }}
                transition={{ duration: 0.6}}, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                    {service.popular && (
                      <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                    )}
                    {service.new && (
                      <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                    )}

                {/* Service Content */}
                  {service.name}
                  {service.description}

                {/* Price Comparison */}
                    {service.price}
                  <div className="text-sm text-zion-slate-light">;,
Market: {service.marketPrice}

                {/* Key Benefits */}
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />;
Key Benefits:
                    {service.benefits.slice(0, 2).map((benefit), idx) => (
                        {benefit}
                    ))}

                {/* Tags */}
                    {service.tags.slice(0, 4).map((tag), idx) => (
                      <$2 />;
key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
                      >
                        {tag}
                    ))}
          initial={{ opacity: 0}}}
          animate={{ opacity: 1}}}
          transition={{ duration: 0.8}}, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service), index) => {;
const IconComponent = service.icon;;
return (;
}
key={service.id}
                initial={{ opacity: 0}}, y: 20 }}
                animate={{ opacity: 1}}, y: 0 }}
                transition={{ duration: 0.6}}, delay: 0.4 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                  {service.name}
                  {service.description}
                  {service.features.map((feature), featureIndex) => (
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                  ))}
                <$2 />;
to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >;
Learn More
            )
          })}
          {filteredServices.map((service), idx) => (
            <$2 />;
key={idx}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Header */}
                    {service.name}
                    {service.description}

              {/* Features */}
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  {service.features.map((feature), featureIdx) => (
                      <span>{feature}</span>
                  ))}

              {/* Pricing */}
                  <span>{service.pricing}</span>

              {/* CTA Button */}
              <$2 />;
to={service.path}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
              >
                <span>Learn More</span>
          ))}

        {/* Empty State */}
        {filteredServices.length === 0 && (
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        )}

        {/* Enhanced Services Section */}
                <span className="text-purple-400 font-medium">New & Enhanced</span>
              <h2 className="text-3xl font-bold text-white mb-4">;
Ready to Transform Your Business?
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
Let our AI experts help you implement the right technology solutions to drive growth and innovation.
                <$2 />;
to="/contact";
className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >;
Get Started Today
                <$2 />;
to="/innovative-services-showcase";
className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >;
View All Innovative Services
                <$2 />;
to="/request-quote";
className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >;
Request Custom Quote

        {/* Additional Services Links */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore More Services</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
Discover our comprehensive portfolio of innovative micro SAAS and specialized IT solutions.
              <$2 />;
to="/services/comprehensive";
className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Services</h3>
                <p className="text-zion-slate-light mb-4">;
Explore our complete portfolio of micro SAAS and IT solutions with transparent pricing and detailed features.
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">;
View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              
              <$2 />;
to="/services/innovative-showcase";
className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Innovative Showcase</h3>
                <p className="text-zion-slate-light mb-4">;
Discover cutting-edge solutions including AI-powered business intelligence and advanced cybersecurity platforms.
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">;
Explore Innovations <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />

        {/* CTA Section */}
            <h2 className="text-3xl font-bold text-white mb-4">;
Ready to Transform Your Business?
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
Let's discuss how our technology solutions can accelerate your growth and;
give you a competitive edge in the market.
              <$2 />;
to="/contact";
className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >;
Get Started Today
              <$2 />;
to="/comprehensive-services-showcase";
className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
    { name: "Healthcare", icon: "🏥", description: "HIPAA compliant solutions for healthcare providers" },
    { name: "Finance", icon: "🏦", description: "Secure financial technology solutions" },
    { name: "Retail", icon: "🛍️", description: "E-commerce and retail technology platforms" },
    { name: "Manufacturing", icon: "🏭", description: "Industry 4.0 and smart manufacturing" },
    { name: "Education", icon: "🎓", description: "EdTech solutions for modern learning" },
    { name: "Government", icon: "🏛️", description: "Secure government technology solutions" }
  ];
const categories = ['all';, 'AI/ML', 'Security', 'Cloud', 'Transformation', 'Consulting', 'Global'];
useEffect(() => {;
setIsVisible(true)
}
  }, []);
const filteredServices = services.filter(service => {;;
const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;;
service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;;
return matchesSearch && matchesCategory;
}
  });
const getCategoryColor = (category: string) => {}
const colors={'AI/ML': 'from-purple-500 to-pink-500';},
      'Security': 'from-red-500 to-orange-500',
      'Cloud': 'from-blue-500 to-cyan-500',
      'Transformation': 'from-green-500 to-teal-500',
      'Consulting': 'from-indigo-500 to-purple-500',
      'Global': 'from-yellow-500 to-orange-500'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  }
  return (;
title="Comprehensive Technology Services - Zion Tech Group";
description="Transform your business with our comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Digital Transformation, IT Consulting, and Global Solutions. Expert consulting and implementation services.";
url="https://ziontechgroup.com/services";
keywords="AI services, cybersecurity, cloud computing, digital transformation, IT consulting, technology services, Zion Tech Group";
ogImage="https://ziontechgroup.com/services-og-image.jpg";
twitterCard="summary_large_image"
      />

      {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>

      {/* Hero Section */}
              <span className="neon-text">;
Our Services
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">;
Comprehensive technology solutions designed to transform your business and drive innovation.;
From AI to cybersecurity, we deliver the expertise you need to succeed.
            
            {/* Search and Filter */}
type="text";
placeholder="Search services...";
value={searchTerm}
                  onChange={(e) =>
  </input> setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              
              {/* Category Filter */}
                {categories.map((category) => (
                  <$2 />;
key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${};
selectedCategory === category
                        ? 'bg-cyan-500 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                  >
                    {category === 'all' ? 'All Services' : category}
                ))}

      {/* Services Grid */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
What We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
            <p className="text-gray-300">;
Showing {filteredServices.length} of {allServices.length} total services
          
            {filteredServices.map((service), index) => (
              <$2 />;
key={index} ;
className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}}s` }}
              >
                {/* Service Header */}
                  <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                    < className={`px-3 py-1 rounded-full text-xs font-medium ${$2 />};
service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Freemium' ? 'bg-green-500/20 text-green-400' :;
service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Professional' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'}`}>
                      {service.serviceType === 'Micro SAAS' ? (service as any).pricing : service.serviceType}
                )}
                
                  {service.icon}

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing */}
                    {service.serviceType === 'IT Service' 
                      ? `$${(service as any).hourlyRate}/hour or $${(service as any).projectRate.toLocaleString()} project`
                      : formatPrice((service as any).price, (service as any).pricingModel)
                    }
                  <div className="text-sm text-gray-400">;
Market Price: {service.marketPrice}
                  {service.serviceType !== 'Micro SAAS' && (
                      {service.serviceType}
                  )}
                
                {/* Rating */}
                    {[...Array(5)].map((_), i) => (
key={i} ;
className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}}`} 
                      />
                    ))}
                  <span className="text-gray-400 text-sm ml-2">{service.rating}</span>
                
                {/* Features */}
                  <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature), idx) => (
                        {feature}
                    ))}

                {/* Benefits */}
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                    {service.benefits.slice(0, 3).map((benefit), idx) => (
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                    ))}

                {/* Additional Info */}
                  {service.serviceType === 'Micro SAAS' ? (
                    <>
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{(service as any).setupTime}</span>
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{(service as any).roi}</span>
                        <span className="text-gray-400">Users:</span>
                        <span className="text-white">{(service as any).userLimit}</span>
                    </>
                  ) : service.serviceType === 'IT Service' ? (
                    <>
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-white">{(service as any).responseTime}</span>
                        <span className="text-gray-400">SLA:</span>
                        <span className="text-green-400">{(service as any).sla}</span>
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white">{(service as any).deliveryTime}</span>
                    </>
                  ) : (
                    <>
                        <span className="text-gray-400">AI Score:</span>
                        <span className="text-green-400">{(service as any).aiScore}/100</span>
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-white">{(service as any).accuracy}</span>
                        <span className="text-gray-400">Models:</span>
                        <span className="text-white">{(service as any).aiModels?.length || 0}</span>
                    </>
                  )}

                {/* Tags */}
                  {service.tags.map((tag), idx) => (
                    <$2 />;
key={idx} ;
className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                  ))}
                
                {/* CTA */}
                <$2 />;
to={`/services/${service.category.toLowerCase()}}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >;
Learn More 
            ))}
          
          {filteredServices.length === 0 && (
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
          {/* Filters and Sort Controls */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
              <$2 />;
onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />;
              
              {Object.keys(filters).length > 0 && (
                <$2 />;
onClick={clearFilters}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors"
                >;
Clear Filters
              )}

              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <$2 />;
onClick={() => handleSort('title')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${};
sortBy === 'title' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'}`}
              >;
                {sortBy === 'title' && (;
sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              <$2 />;
onClick={() => handleSort('price')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${};
sortBy === 'price' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'}`}
              >;
                {sortBy === 'price' && (;
sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}

          {/* Filters Panel */}
          {showFilters && (
initial={{ opacity: 0}}, height: 0 }}
              animate={{ opacity: 1}}, height: 'auto' }}
              exit={{ opacity: 0}}, height: 0 }}
              className="bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
value={filters.pricingModel || ''}
                    onChange={(e) => setFilter('pricingModel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Models</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom</option>
                
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Level</label>
value={filters.supportLevel || ''}
                    onChange={(e) => setFilter('supportLevel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Levels</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Price Range</label>
type="number";
placeholder="Min";
value={filters.minPrice || ''}
                      onChange={(e) =>
  </input> setFilter('minPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
type="number";
placeholder="Max";
value={filters.maxPrice || ''}
                      onChange={(e) =>
  </input> setFilter('maxPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
          )}
      </section>;
const Services = () => {;;
const services = [;
    {
}
icon: Brain},;,
title: "AI & Machine Learning",;,
description: "Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems.",;,
features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Automation"],;,
price: "From $2,500/month",;,
color: "from-purple-500 to-pink-500",;,
link: "/ai-services"
    },
    {
icon: Cpu,;,
title: "Micro SAAS Services",;,
description: "Custom software solutions designed for modern businesses, from workflow automation to customer relationship management systems.",;,
features: ["Custom Development", "Workflow Automation", "CRM Systems", "API Integration"],;,
price: "From $15,000",;,
color: "from-blue-500 to-cyan-500",;,
link: "/micro-saas-services"
    },
    {
icon: Cloud,;,
title: "Cloud & DevOps",;,
description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle.",;,
features: ["Cloud Migration", "DevOps Automation", "Kubernetes", "Infrastructure as Code"],;,
price: "From $35,000",;,
color: "from-green-500 to-emerald-500",;,
link: "/cloud-devops"
    },
    {
icon: Shield,;,
title: "Enterprise Solutions",;,
description: "Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation.",;,
features: ["Digital Transformation", "Enterprise Security", "System Integration", "Compliance Management"],;,
price: "From $50,000",;,
color: "from-orange-500 to-red-500",;,
link: "/enterprise-solutions"
    },
    {
icon: Rocket,;,
title: "Digital Transformation",;,
description: "End-to-end business modernization through strategic digital transformation, process optimization, and innovation management.",;,
features: ["Strategy Development", "Process Optimization", "Change Management", "Innovation Labs"],;,
price: "From $75,000",;,
color: "from-indigo-500 to-purple-500",;,
link: "/digital-transformation"
    },
    {
icon: Zap,;,
title: "Emerging Technology",;,
description: "Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology.",;,
features: ["Quantum Computing", "Blockchain Solutions", "IoT Platforms", "AR/VR Applications"],;,
price: "From $75,000",;,
color: "from-yellow-500 to-orange-500",;,
link: "/emerging-tech"
    }
  ];
const benefits = [;
    {
icon: Target,;,
title: "Custom Solutions",;,
description: "Tailored technology solutions designed specifically for your business needs and requirements."
    },
    {
icon: Award,;,
title: "Proven Expertise",;,
description: "15+ years of experience delivering complex technology solutions across industries."
    },
    {
icon: Globe,;,
title: "Global Reach",;,
description: "Serve customers worldwide with scalable, cloud-based solutions and global infrastructure."
    },
    {
icon: Shield,;,
title: "Enterprise Security",;,
description: "Bank-level security protocols and compliance frameworks for enterprise environments.";
BarChart3,;
CheckCircle,;
ArrowRight,;
Star,;
Users,;
Clock} from 'lucide-react';
export default function Services() {;
const services = [;
    {
}
icon: Brain},;,
title: 'AI Solutions & Machine Learning',;,
description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',;,
features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation',
        'Custom AI Solutions'
      ],;,
href: '/services/ai',;,
color: 'from-purple-500 to-pink-500',;,
bgColor: 'bg-purple-500/10',;,
borderColor: 'border-purple-500/30'
    },
    {
icon: Cloud,;,
title: 'Cloud Infrastructure & DevOps',;,
description: 'Scalable cloud solutions and automated deployment pipelines for modern applications.',;,
features: [
        'AWS, Azure & GCP Migration',
        'Container Orchestration',
        'Serverless Architecture',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Compliance'
      ],;,
href: '/services/cloud',;,
color: 'from-blue-500 to-cyan-500',;,
bgColor: 'bg-blue-500/10',;,
borderColor: 'border-blue-500/30'
    },
    {
icon: Shield,;,
title: 'Cybersecurity & Compliance',;,
description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',;,
features: [
        'Zero Trust Security',
        'Penetration Testing',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],;,
href: '/services/security',;,
color: 'from-green-500 to-emerald-500',;,
bgColor: 'bg-green-500/10',;,
borderColor: 'border-green-500/30'
    },
    {
icon: Zap,;,
title: 'Digital Transformation',;,
description: 'End-to-end business process modernization and digital strategy implementation.',;,
features: [
        'Process Automation',
        'Legacy System Modernization',
        'API Integration',
        'Data Migration',
        'Change Management',
        'Digital Strategy Consulting'
      ],;,
href: '/services/transformation',;,
color: 'from-yellow-500 to-orange-500',;,
bgColor: 'bg-yellow-500/10',;,
borderColor: 'border-yellow-500/30'
    },
    {
icon: Smartphone,;,
title: 'Web & Mobile Development',;,
description: 'Custom web and mobile applications built with modern technologies and best practices.',;,
features: [
        'React & Next.js Development',
        'Mobile App Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development',
        'Performance Optimization'
      ],;,
href: '/services/development',;,
color: 'from-indigo-500 to-purple-500',;,
bgColor: 'bg-indigo-500/10',;,
borderColor: 'border-indigo-500/30'
    },
    {
icon: BarChart3,;,
title: 'Data Analytics & BI',;,
description: 'Transform your data into actionable insights with advanced analytics and visualization.',;,
features: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
        'Data Governance'
      ],;,
href: '/services/analytics',;,
color: 'from-red-500 to-pink-500',;,
bgColor: 'bg-red-500/10',;,
borderColor: 'border-red-500/30'
    }
  ];
const stats = [;
        {/* No Results */}
        {sortedServices.length === 0 && (
initial={{ opacity: 0}}}
            animate={{ opacity: 1}}}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
            <$2 />;
onClick={() => {};
setSearchTerm('');
setSelectedCategory('all');
}
setSelectedSubcategory('all')}}
              className="futuristic-btn neon-glow neon-cyan"
            >;
Clear Filters
        )}

              {/* Contact Info */}
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                  <p>📱 +1 (302) 464-0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge AI and quantum technologies that keep you ahead of the competition</p>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
                <p className="text-gray-300">Trusted by enterprises worldwide with a track record of successful implementations</p>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 expert support and dedicated success managers for your business</p>
            
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>

                {/* Rating and Reviews */}
                    {[...Array(5)].map((_), i) => (
key={i}
                        className={`w-4 h-4 ${};
i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`}
                      />
                    ))}
                      {service.rating} ({service.reviewCount} reviews)
                  <div className="text-zion-cyan text-sm font-medium">;
AI Score: {service.aiScore}%

                {/* Contact Info */}
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Contact Information:</h4>
                  <p>📧 {service.author.name}</p>
                  <p>📱 {service.author.id}</p>

                {/* Action Buttons */}
                  <$2 />;
to={service.link}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >;
Learn More
                  <$2 />;
to="/contact";
className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >;
Get Quote
            ))}

          {/* No Results Message */}
          {filteredServices.length === 0 && (
initial={{ opacity: 0}}, y: 20 }}
              animate={{ opacity: 1}}, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">;
Try adjusting your search terms or category filter
              <$2 />;
onClick={() => {};
setSearchTerm('');
}
setSelectedCategory('all')}}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                {/* Technology Stack */}
                    <Code className="w-4 h-4 text-zion-cyan" />;,
Technology:
                    {service.technology.slice(0, 3).map((tech), idx) => (
                        {tech}
                    ))}

                {/* CTA Button */}
                <$2 />;
href={service.link}
                  target="_blank";
rel="noopener noreferrer";
className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <span>Learn More</span>
            ))}

          {filteredServices.length === 0 && (
initial={{ opacity: 0}}}
              animate={{ opacity: 1}}}
              className="text-center py-16"
            >
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <$2 />;
onClick={() => {};
setSelectedCategory('All');
setSearchTerm('');
}
setPriceRange('all')}}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >;
Clear Filters
          )}
      {/* Featured Services */}
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">;
Featured Services
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">;
Our most popular and impactful solutions that are transforming businesses worldwide.
    { value: '200+', label: 'Projects Delivered', icon: CheckCircle, color: 'text-green-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-blue-400' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-400' },
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' }
  ];
const process = [;
    {
step: '01',;,
title: 'Discovery & Analysis',;,
description: 'We analyze your requirements and business objectives to understand your needs.',;,
icon: Globe
    },
    {
step: '02',;,
title: 'Solution Design',;,
description: 'Our experts design a tailored solution that aligns with your goals and budget.',;,
icon: Brain
    },
    {
step: '03',;,
title: 'Development & Testing',;,
description: 'We build and thoroughly test your solution using industry best practices.',;,
icon: Zap
    },
    {
step: '04',;,
title: 'Deployment & Support',;,
description: 'Smooth deployment followed by ongoing support and maintenance.',;,
icon: Cloud
    }
  ];
return (;
      {/* Hero Section */}
initial={{ opacity: 0}}, y: 30 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">;
Our Services
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">;
Comprehensive technology solutions designed to transform your business and drive innovation.;
From AI and cloud infrastructure to cybersecurity and digital transformation.
            {featuredServices.map((service), index) => (
      {/* Services Grid */}
          {/* Results Summary */}
              {isLoading ? 'Searching...' : `Showing ${totalResults}} services`}
              {query && ` for "${query}}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}}`}

          {/* Services Grid */}
variants={containerVariants}
            initial="hidden";
animate="visible";
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedResults.results.map((service) => (
                  {/* Service Image */}
src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                        {service.category}
                  
                  {/* Service Content */}
                      {service.title}
                    
                      {service.description}
                    
                    {/* Tags */}
                      {service.tags.slice(0, 3).map((tag), index) => (
                          {tag}
                      ))}
                    
                    {/* Service Details */}
                        <span>Delivery: {service.estimatedDelivery}</span>
                        <span>Support: {service.supportLevel}</span>
                    
                    {/* Price and CTA */}
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105">;
Get Quote
                  {service.title}
                  {service.description}
                  {service.features.map((feature), featureIndex) => (
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                  ))}
                  <$2 />;
to={service.link}
                    className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    {service.cta}
            ))}

          {/* Pagination */}
          {paginatedResults.totalPages > 1 && (
              <$2 />;
onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >;
              
              <span className="px-4 py-2 text-zion-slate-light">;
Page {currentPage} of {paginatedResults.totalPages}
              
              <$2 />;
onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!paginatedResults.hasNextPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >;
          )}
  )
}
export default Services;
transition={{ duration: 0.8}}, delay: 0.8 }}
          className="text-center mt-20"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">;
Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Let's discuss how our services can transform your business and drive growth.
              <$2 />;
to="/contact";
className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >;
Get Free Consultation
              <$2 />;
to="/request-quote";
className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >;
Request Quote
  )
}
export default Services
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      {service}
                  ))}
                <$2 />;
to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"
                >;
Learn More
            ))}

      {/* Emerging Technologies */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
            {emergingTech.map((tech), index) => (
                  {tech.icon}
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                  {tech.description}
            ))}

      {/* Why Choose Us */}
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                    <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
                    <p className="text-zion-slate-light">15+ years of experience in cutting-edge technologies</p>
                    <h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
                    <p className="text-zion-slate-light">500+ successful projects delivered worldwide</p>
                    <h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
                    <h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                    <p className="text-zion-slate-light">Built to grow with your business needs</p>
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-zion-slate-light mb-6">;
Let's discuss your project requirements and create a custom solution that drives results.
                <$2 />;
to="/contact";
className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >;
Schedule a Consultation
                <$2 />;
to="/request-quote";
className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >;
Get a Free Quote

      {/* CTA Section */}
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business Today</h2>
          <p className="text-lg text-zion-slate-light mb-8">;
Join hundreds of companies already leveraging our technology solutions to achieve unprecedented growth.
            <$2 />;
to="/contact";
className="bg-zion-cyan hover: bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >;
Start Your Project
            <$2 />;
to="/about";
className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >,
Call: +1 302 464 0950
            <$2 />;
to="/enhanced-services";
className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >;
View Complete Services Portfolio →
  )
      {/* Stats Section */}
            {stats.map((stat), index) => {;
const IconComponent = stat.icon;;
return (;
}
key={stat.label}
                  initial={{ opacity: 0}}, y: 20 }}
                  whileInView={{ opacity: 1}}, y: 0 }}
                  transition={{ duration: 0.6}}, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
              )
            })}

      {/* Services Section */}
initial={{ opacity: 0}}, y: 20 }}
            whileInView={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Our Technology Services
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
Comprehensive solutions designed to drive innovation and transform your business

            {services.map((service), index) => {;
const IconComponent = service.icon;;
return (;
}
key={service.title}
                  initial={{ opacity: 0}}, y: 20 }}
                  whileInView={{ opacity: 1}}, y: 0 }}
                  transition={{ duration: 0.6}}, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                      {service.features.map((feature), featureIndex) => (
                          {feature}
                      ))}
                  
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <$2 />;
to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >;
Learn More
              )
            })}

      {/* Industries Section */}
initial={{ opacity: 0}}, y: 20 }}
            whileInView={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Industries We Serve
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
Proven expertise across diverse industries and business sectors

            {industries.map((industry), index) => (
key={industry.name}
                initial={{ opacity: 0}}, scale: 0.8 }}
                whileInView={{ opacity: 1}}, scale: 1 }}
                transition={{ duration: 0.6}}, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
            ))}

      {/* Benefits Section */}
initial={{ opacity: 0}}, y: 20 }}
            whileInView={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Why Choose Our Services?
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
Experience the benefits of professional technology services

            {benefits.map((benefit), index) => {;
const IconComponent = benefit.icon;;
return (;
}
key={benefit.title}
                  initial={{ opacity: 0}}, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1}}, x: 0 }}
                  transition={{ duration: 0.6}}, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
              )
            })}

      {/* CTA Section */}
initial={{ opacity: 0}}, y: 20 }}
            whileInView={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Ready to Transform Your Business?
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">;
Let's discuss how our technology services can drive innovation and growth for your organization
              <$2 />;
to="/contact";
className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >;
Schedule Consultation
              <$2 />;
to="/request-quote";
className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >;
Get Free Quote

      {/* CTA Section */}
        {/* Animated Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
initial={{ opacity: 0}}, y: 30 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">;
Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition.;
Our team of experts is ready to guide you through the digital transformation journey.
              <$2 />;
href="mailto:kleber@ziontechgroup.com";
className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
              <$2 />;
href="tel:+13024640950";
className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Call Now</span>
  )
                  {category.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                  {category.services.map((service), serviceIndex) => (
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {service}
                  ))}
                <$2 />;
to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >;
Learn More
            ))}

      {/* Emerging Technologies */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <p className="text-lg text-zion-slate-light text-center max-w-3xl mx-auto mb-12">;
Stay ahead of the curve with our cutting-edge technology solutions that are shaping the future.
            {emergingTechServices.map((service), index) => (
                  {service.icon}
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
            ))}

      {/* Why Choose Us */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">;
Our team of experienced professionals brings 15+ years of expertise;
in cutting-edge technologies and industry best practices.

              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">;
We've successfully delivered 500+ projects across various industries,;
consistently exceeding client expectations and driving measurable results.

              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-zion-slate-light">;
Enterprise-grade security and compliance standards ensure your data;
and systems remain protected at all times.

              <h3 className="text-xl font-semibold text-white mb-3">Innovation Driven</h3>
              <p className="text-zion-slate-light">;
We stay at the forefront of technology trends, continuously innovating;
to deliver cutting-edge solutions that give you a competitive advantage.

              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">;
Serving clients worldwide with 24/7 support and localized expertise;
to ensure your success regardless of your location.

              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-zion-slate-light">;
Agile development methodologies and efficient processes ensure;
rapid delivery without compromising quality or security.

      {/* Service Process */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Process</h2>
                1
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">;
We analyze your requirements, understand your business goals,;
and design a tailored solution strategy.

                2
              <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-zion-slate-light">;
Detailed project planning, architecture design, and timeline;
development to ensure successful execution.

                3
              <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
              <p className="text-zion-slate-light">;
Agile development with regular updates, testing, and quality;
assurance to deliver exceptional results.

                4
              <h3 className="text-xl font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-zion-slate-light">;
Smooth deployment, comprehensive training, and ongoing support;
to ensure long-term success.

      {/* CTA Section */}
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">;
Let's discuss your project requirements and explore how our innovative;
solutions can drive your success.
            <$2 />;
to="/contact";
className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >;
Start Your Project
            <$2 />;
to="/request-quote";
className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >;
Get Free Quote
  )
}
export default Services
}
}
              {/* Results Count */}
                  {filteredServices.length} services found

        {/* Services Grid */}
initial={{ opacity: 0}}, y: 20 }}
          animate={{ opacity: 1}}, y: 0 }}
          transition={{ duration: 0.8}}, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service), index) => (
key={service.id}
              initial={{ opacity: 0}}, y: 20 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.6}}, delay: index * 0.1 }}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
                    {getCategoryIcon(service.category)}
                      {service.title}
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                    {getPricingDisplay(service)}
                    {service.pricingModel.replace('-', ' ')}

              {/* Description */}
                {service.description}

              {/* Key Features */}
                  <Star className="w-4 h-4 text-zion-cyan" />;
Key Features
                  {service.features.slice(0, 3).map((feature), idx) => (
                      <span className="line-clamp-1">{feature}</span>
                  ))}

              {/* Service Details */}
                  <span>{service.estimatedDelivery}</span>
                  <span className="capitalize">{service.supportLevel}</span>

              {/* Market Price */}
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
                <div className="text-zion-cyan font-medium">{service.marketPrice}</div>

              {/* Tags */}
                {service.tags.slice(0, 3).map((tag), idx) => (
                  <$2 />;
key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                ))}

              {/* Contact Info */}
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
whileHover={{ scale: 1.05}}}
                    whileTap={{ scale: 0.95}}}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >;
Get Quote
          ))}

        {/* Call to Action */}
initial={{ opacity: 0}}, y: 20 }}
          animate={{ opacity: 1}}, y: 0 }}
          transition={{ duration: 0.8}}, delay: 0.6 }}
          className="mt-20 text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">;
Ready to Transform Your Business?
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
whileHover={{ scale: 1.05}}}
                whileTap={{ scale: 0.95}}}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >;
Schedule Consultation
whileHover={{ scale: 1.05}}}
                whileTap={{ scale: 0.95}}}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >;
View Case Studies
  )
}
}
</div></div></div></div></div></div></div></p></p></p></p></section></section></section></section></section>