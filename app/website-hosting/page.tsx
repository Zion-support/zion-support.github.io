'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Globe, Zap, Shield, ArrowRight, Clock, Server } from 'lucide-react';

const WebsiteHostingPage: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: 'High-Performance Servers',
      description: 'Fast, reliable hosting with SSD storage and optimized configurations'
    },
    {
      icon: Shield,
      title: 'Security & SSL',
      description: 'Free SSL certificates and advanced security measures to protect your site'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Content delivery network for lightning-fast loading times worldwide'
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Guaranteed uptime with redundant systems and 24/7 monitoring'
    }
  ];

  const benefits = [
    'Lightning-fast loading speeds',
    'Free SSL certificates',
    '24/7 technical support',
    'Automatic backups',
    'Scalable hosting plans',
    'DDoS protection included'
  ];

  return (
    <>
      <Helmet>
        <title>Website Hosting | Zion Tech Group - Reliable Web Hosting Solutions</title>
        <meta name="description" content="Get reliable, fast, and secure website hosting with our high-performance servers, global CDN, and 24/7 support." />
        <meta name="keywords" content="website hosting, web hosting, cloud hosting, VPS hosting, dedicated servers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hosting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Reliable, fast, and secure website hosting with high-performance servers, global CDN, and 24/7 support.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Premium Hosting Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our hosting solutions provide everything you need for a successful website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Hosting?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference with our premium hosting solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get Started with Reliable Hosting
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect hosting plan for your website and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  View Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebsiteHostingPage;