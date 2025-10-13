'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { 
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Cloud, BarChart3, Globe, Zap } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can transform your business operations immediately.",
      features: ["AI Tools", "Business Automation", "Quick Deployment", "No Setup Required"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage the power of 5G technology for next-generation connectivity and IoT solutions.",
      features: ["5G Infrastructure", "IoT Solutions", "Edge Computing", "Smart Cities"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of AI-powered solutions and IT services designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
  ArrowRight
} from 'lucide-react';
      description: 'Cutting-edge artificial intelligence solutions to transform your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $5,000/month',
      path: '/ai-solutions'
      description: 'Tailored software solutions built to your exact specifications',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      pricing: 'Starting at $8,000/project',
      path: '/custom-development'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics platforms',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports'],
      pricing: 'From $3,000/month',
      path: '/data-analytics'
    <>
  </>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
        {/* Search and Filter Section */}
        <section className="py-8 px-4">
        </section>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value</div>
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value</div>
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                {service.popular && (
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                    POPULAR
                  </span>
                )}
                <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
    </React.Fragment>)

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Services services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
            ))
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
            </div>
        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
    </>
  );
}
