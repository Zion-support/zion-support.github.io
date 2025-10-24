'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: Settings
      ,
      title: 'API Configuration'
      ,
      description: 'Centralized API configuration and management with AI-powered optimization.'
      benefits: ['Auto-configuration', 'Performance tuning', 'Load balancing', 'Failover setup']
    }
    ,
    { icon: BarChart3
      ,
      title: 'Performance Analytics'
      ,
      description: 'Advanced analytics and insights for API performance optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group | Intelligent API Administration</title>
        <meta name="description" content="Manage and optimize your APIs with AI-powered administration tools. Configuration, analytics, auto-scaling, and team management." />
        <meta name="keywords" content="API manager, API administration, API optimization, auto-scaling, team management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI API Manager</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Intelligent API administration and optimization platform.</p>
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

export default AIApiManagerPage;