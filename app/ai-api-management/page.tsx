'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Comprehensive API security with authentication, authorization, and threat protection.',
      benefits: ['OAuth 2.0', 'API keys', 'Rate limiting', 'Threat detection']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics and performance monitoring.',
  
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group | Intelligent API Solutions</title>
        <meta name="description" content="Manage your APIs with AI-powered tools. Security, monitoring, rate limiting, and developer portal solutions." />
        <meta name="keywords" content="API management, API security, API monitoring, rate limiting, developer portal" />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI API Management</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Manage your APIs with AI-powered tools and comprehensive security.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIApiManagementPage;