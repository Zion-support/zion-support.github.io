'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: 'analytics-pro',
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Export', 'API Integration'],
      price: '$99/month',
      popular: true
    },
    {
      id: 'chat-ai',
      icon: Users,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing.',
      features: ['24/7 Support', 'Multi-language', 'Custom Training', 'Analytics'],
      price: '$49/month'
    },
    {
      id: 'security-shield',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection system.',
      features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance'],
      price: '$199/month'
    },
    {
      id: 'cloud-vault',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and recovery solution for business data.',
      features: ['Automated Backup', 'Data Encryption', 'Disaster Recovery', 'Version Control'],
      price: '$79/month'
    },
    {
      id: 'content-studio',
      icon: Brain,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform.',
      features: ['Content Generation', 'SEO Optimization', 'Multi-platform', 'Analytics'],
      price: '$149/month'
    },
    {
      id: 'crm-intelligence',
      icon: Database,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics.',
      features: ['Lead Scoring', 'Predictive Analytics', 'Automation', 'Integration'],
      price: '$129/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | AI-Powered Solutions</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to solve specific business problems with AI and automation." />
        <meta name="keywords" content="micro SAAS, AI solutions, business tools, automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our collection of specialized micro SAAS solutions designed to solve specific business problems.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                    product.popular
                      ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 text-sm">per month</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                We can create a custom micro SAAS solution tailored to your specific business needs.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;