'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Financial Data Management',
      description: 'Secure and efficient management of financial data with real-time processing and compliance.',
      benefits: ['Real-time processing', 'Data security', 'Compliance ready']
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure full compliance with financial regulations including SOX, PCI-DSS, and GDPR.',
      benefits: ['SOX compliance', 'PCI-DSS ready', 'GDPR compliant']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting tools for financial insights and decision making.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Custom dashboards']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of financial systems with automated alerts and responses.',
      benefits: ['Round-the-clock monitoring', 'Automated alerts', 'System health checks']
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Secure multi-user access with role-based permissions and audit trails.',
      benefits: ['Role-based access', 'Audit trails', 'User management']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline financial processes with automated workflows and integrations.',
      benefits: ['Process automation', 'System integrations', 'Workflow optimization']
    }
  ];

  const benefits = [
    'Reduce financial processing time by 80%',
    'Improve compliance accuracy by 95%',
    'Cut operational costs by 70%',
    'Enhance data security and privacy',
    'Streamline financial workflows',
    'Real-time financial insights'
  ];

  const services = [
    {
      title: 'Core Banking Systems',
      description: 'Modernize your core banking infrastructure with cloud-native solutions',
      icon: '🏦'
    },
    {
      title: 'Payment Processing',
      description: 'Secure and fast payment processing with fraud detection',
      icon: '💳'
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools',
      icon: '⚠️'
    },
    {
      title: 'Trading Systems',
      description: 'High-performance trading platforms with real-time data',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial IT - Zion Tech Group | Banking & Financial Solutions</title>
        <meta name="description" content="Transform your financial operations with advanced IT solutions. Secure, compliant, and efficient financial technology services for banks and financial institutions." />
        <meta name="keywords" content="financial IT, banking solutions, fintech, compliance, payment processing, risk management, core banking" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Financial IT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial operations with secure, compliant, and efficient IT solutions. 
            Modernize your banking infrastructure and streamline financial processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Financial IT Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial technology solutions for modern banking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Financial IT?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your financial operations with proven technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Financial Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial technology solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with financial IT solutions today and modernize your banking infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;