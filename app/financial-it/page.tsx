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
      title: 'SOX Compliance',
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Financial Data Security',
      description: 'Bank-level security for financial data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'High-frequency trading and real-time financial data processing capabilities.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics']
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance with financial regulations including PCI DSS, GDPR, and more.',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI-powered fraud detection and prevention systems for financial transactions.',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive analytics and reporting for financial operations and compliance.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']
    }
  ];

  const benefits = [
    'Ensure regulatory compliance with automated controls',
    'Protect sensitive financial data with enterprise security',
    'Process transactions in real-time with low latency',
    'Detect and prevent fraud with AI-powered systems',
    'Generate comprehensive reports and analytics',
    'Scale operations with cloud-based infrastructure'
  ];

  return (
    <>
      <Helmet>
        <title>Financial IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive financial IT solutions including SOX compliance, fraud detection, and real-time processing for financial institutions." />
        <meta name="keywords" content="financial IT, SOX compliance, fraud detection, financial security, banking technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Financial IT Solutions
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Secure, compliant, and high-performance IT solutions designed specifically 
                  for financial institutions and fintech companies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">SOX Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Bank-Level Security</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Real-time Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Comprehensive Financial IT Solutions
                  </h2>
                  <p className="text-xl text-gray-300">
                    Everything you need to secure, monitor, and optimize your financial operations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Why Choose Our Financial IT Solutions?
                  </h2>
                  <p className="text-xl text-gray-300">
                    Proven expertise in financial technology and regulatory compliance
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Financial Operations?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Contact our financial IT experts to discuss your compliance and security needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FinancialITPage;