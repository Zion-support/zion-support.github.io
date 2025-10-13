'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, ArrowRight, Brain, Code, BarChart, Users, Globe, Shield, Smartphone, Target, TrendingUp, Settings, Calendar, FileText, Lock, Cpu, Database } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const saasProducts = [
    {
      icon: Code,
      title: 'API Builder',
      description: 'No-code API development and integration platform',
      category: 'Development',
      price: '$59/month',
      features: ['Visual API Designer', 'Auto Documentation', 'Testing Tools', 'Deployment'],
      benefits: ['Faster Development', 'No Coding Required', 'Scalable APIs', 'Easy Integration']
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracker',
      description: 'Track and optimize business growth metrics',
      category: 'Analytics',
      price: '$39/month',
      features: ['Real-time Metrics', 'Custom Dashboards', 'Growth Insights', 'Alerts'],
      benefits: ['Data-Driven Decisions', 'Performance Tracking', 'Growth Optimization', 'ROI Analysis']
    },
    {
      icon: Users,
      title: 'Team Manager',
      description: 'Comprehensive team collaboration and management tool',
      category: 'Productivity',
      price: '$79/month',
      features: ['Task Management', 'Team Chat', 'File Sharing', 'Time Tracking'],
      benefits: ['Improved Collaboration', 'Better Organization', 'Increased Productivity', 'Remote Work Support']
    },
    {
      icon: Shield,
      title: 'Security Monitor',
      description: 'Advanced security monitoring and threat detection',
      category: 'Security',
      price: '$99/month',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance Assurance', 'Peace of Mind']
    },
    {
      icon: BarChart,
      title: 'Analytics Pro',
      description: 'Advanced business intelligence and data analytics',
      category: 'Analytics',
      price: '$89/month',
      features: ['Custom Reports', 'Data Visualization', 'Predictive Analytics', 'Integration'],
      benefits: ['Better Insights', 'Informed Decisions', 'Competitive Advantage', 'Growth Opportunities']
    },
    {
      icon: Globe,
      title: 'Global Connect',
      description: 'International business expansion and localization tool',
      category: 'Business',
      price: '$149/month',
      features: ['Multi-language Support', 'Currency Conversion', 'Local Compliance', 'Market Analysis'],
      benefits: ['Global Reach', 'Market Expansion', 'Cultural Adaptation', 'International Success']
    }
  ];

  const categories = ['All', 'Development', 'Analytics', 'Productivity', 'Security', 'Business'];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to solve specific business challenges with powerful, focused tools." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation onSidebarToggle={() => {}} />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of micro SAAS solutions designed to solve specific business challenges 
              with powerful, focused tools that integrate seamlessly into your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Explore Solutions
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each solution is designed to address a specific business need with precision and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full mb-2">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-gray-300 mb-4">{product.description}</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the micro SAAS solutions that fit your needs and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;
