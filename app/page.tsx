"use client";

import React from 'react';
import Link from 'next/link';
import { Brain, Shield, Zap, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that provide reliability, security, and performance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime",
      link: "/cloud-services"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50% faster delivery",
      link: "/digital-transformation"
    },
    {
      title: "IT Support",
      description: "Comprehensive IT support and maintenance services for your business",
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "24/7 support",
      link: "/it-support"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
              Get Started
            </Link>
            <Link href="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">
                      {feature.stats}
                    </span>
                    <Link 
                      href={feature.link}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
                <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
                <Link href="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
                <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
                <Link href="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
                <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
                <Link href="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
                <Link href="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="text-blue-400 hover:text-blue-300 font-medium">View All Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
