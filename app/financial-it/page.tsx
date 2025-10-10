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
    'Ensure SOX compliance',
    'Reduce financial risk by 85%',
    'Improve audit efficiency by 90%',
    'Enhanced data security',
    'Real-time fraud detection',
    'Automated compliance reporting'
  ];

  const useCases = [
    {
      title: 'Banks & Credit Unions',
      description: 'Comprehensive IT solutions for financial institutions',
      icon: '🏦'
    },
    {
      title: 'Investment Firms',
      description: 'High-performance trading and portfolio management systems',
      icon: '📈'
    },
    {
      title: 'Insurance Companies',
      description: 'Risk assessment and claims processing automation',
      icon: '🛡️'
    },
    {
      title: 'Fintech Startups',
      description: 'Scalable infrastructure for financial technology companies',
      icon: '💳'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Financial IT - Zion Tech Group | SOX Compliance & Security</title>
        <meta name="description" content="Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements. Trusted by financial institutions worldwide." />
        <meta name="keywords" content="financial IT, SOX compliance, financial security, regulatory compliance, fraud detection, financial analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Financial Services
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized IT solutions for financial services with SOX compliance, security, 
            and regulatory requirements. Trusted by financial institutions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              Get Financial IT Demo
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized financial IT solutions ensure compliance, security, and performance 
              for financial institutions of all sizes.
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Financial IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of specialized financial IT solutions with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial IT solutions serve various sectors within the financial services industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Financial IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our financial IT solutions can ensure compliance, security, and performance. 
            Get started with a free consultation and demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;