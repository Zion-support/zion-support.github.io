'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Leaf, Droplets, Sun, Wheat } from 'lucide-react';

const AiAgriculturalIntelligenceProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Crop Analysis',
      description: 'Advanced AI algorithms analyze crop health, soil conditions, and weather patterns.',
      benefits: ['Crop health monitoring', 'Disease detection', 'Yield prediction', 'Growth optimization']
    },
    {
      icon: Leaf,
      title: 'Smart Irrigation',
      description: 'Intelligent water management system that optimizes irrigation based on real-time data.',
      benefits: ['Water conservation', 'Automated scheduling', 'Soil moisture monitoring', 'Cost reduction']
    },
    {
      icon: BarChart,
      title: 'Precision Agriculture',
      description: 'Data-driven farming decisions with comprehensive analytics and reporting.',
      benefits: ['Field mapping', 'Variable rate application', 'Resource optimization', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Predict weather patterns, pest outbreaks, and optimal planting times.',
      benefits: ['Weather forecasting', 'Pest prediction', 'Planting optimization', 'Risk management']
    }
  ];

  const benefits = [
    'Increase crop yield by up to 40%',
    'Reduce water usage by 30% with smart irrigation',
    'Minimize pesticide use through AI monitoring',
    'Optimize planting schedules for maximum yield',
    'Reduce farming costs while increasing productivity'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">AI Agricultural Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Agricultural Intelligence Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-400 mb-8 font-medium">
            Revolutionize Your Farming with AI
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your agricultural operations with our AI-powered intelligence platform. 
            Optimize crop yields, reduce resource usage, and make data-driven farming decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-gray-300">Yield Increase</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300">Water Savings</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Smart Agriculture Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-emerald-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
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
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Why Choose Our AI Agricultural Solution?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of farmers using our AI Agricultural Intelligence platform to maximize their yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiAgriculturalIntelligenceProPage;