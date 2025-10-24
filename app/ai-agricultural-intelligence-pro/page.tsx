'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Crop Monitoring',
      description: 'AI-powered crop health monitoring and disease detection using satellite imagery and IoT sensors.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction', 'Growth tracking']
    },
    {
      icon: BarChart,
      title: 'Yield Optimization',
      description: 'Maximize crop yields through data-driven insights and predictive analytics.',
      benefits: ['Yield forecasting', 'Optimization recommendations', 'Resource planning', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Implement precision farming techniques with AI-guided recommendations.',
      benefits: ['Variable rate application', 'Soil analysis', 'Weather integration', 'Cost optimization']
    },
    {
      icon: Zap,
      title: 'Automated Irrigation',
      description: 'Smart irrigation systems that optimize water usage based on AI predictions.',
      benefits: ['Water conservation', 'Automated scheduling', 'Soil moisture monitoring', 'Weather adaptation']
    },
    {
      icon: Shield,
      title: 'Pest Management',
      description: 'Early detection and management of pests and diseases using AI vision systems.',
      benefits: ['Pest identification', 'Treatment recommendations', 'Prevention strategies', 'Damage assessment']
    },
    {
      icon: Globe,
      title: 'Climate Adaptation',
      description: 'Adapt farming practices to changing climate conditions with AI insights.',
      benefits: ['Climate modeling', 'Adaptation strategies', 'Risk assessment', 'Sustainability metrics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group | Smart Farming Solutions</title>
        <meta name="description" content="Revolutionize your farming with AI-powered agricultural intelligence. Crop monitoring, yield optimization, and precision agriculture solutions." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, yield optimization, agricultural intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Agricultural
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your farming with AI-powered agricultural intelligence. 
              Monitor crops, optimize yields, and implement precision agriculture solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Smart Farming Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI agricultural intelligence platform provides comprehensive solutions 
                for modern farming challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
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

export default AIAgriculturalIntelligenceProPage;
