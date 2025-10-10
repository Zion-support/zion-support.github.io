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
        <title>Financial IT Solutions - Zion Tech Group | Banking & Finance Technology</title>
        <meta name="description" content="Transform your financial institution with our comprehensive IT solutions. Secure, compliant, and efficient technology for banking, payments, and financial services." />
        <meta name="keywords" content="financial IT, banking technology, payment processing, financial compliance, core banking, risk management" />
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
            Transform your financial institution with secure, compliant, and efficient technology solutions. 
            From core banking to payment processing, we deliver cutting-edge financial IT services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Financial IT Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial IT solutions are designed to meet the unique needs of financial institutions, 
              ensuring security, compliance, and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
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
                </ul>              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for all aspects of financial services and banking operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
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
              Why Choose Our Financial IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern financial technology with our proven solutions.
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Financial IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your financial institution with our cutting-edge IT solutions. 
            Get started with a free consultation and discover how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />    </div>
  );
};

export default PagePage;