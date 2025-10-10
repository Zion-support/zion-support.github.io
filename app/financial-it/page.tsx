'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Shield, BarChart, Clock, Users, ArrowRight } from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Financial Security',
      description: 'Bank-level security and compliance solutions for financial institutions.',
      benefits: ['PCI DSS compliance', 'End-to-end encryption', 'Fraud detection']
    },
    {
      icon: BarChart,
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools for financial operations.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Automated alerts']
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'High-frequency trading and real-time financial data processing.',
      benefits: ['Microsecond latency', 'High throughput', 'Reliable processing']
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with financial regulations and reporting requirements.',
      benefits: ['Automated reporting', 'Audit trails', 'Regulatory updates']
    },
    {
      icon: Zap,
      title: 'Payment Processing',
      description: 'Secure and efficient payment processing solutions for financial services.',
      benefits: ['Multiple payment methods', 'Global reach', 'Instant settlements']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting for financial decision making.',
      benefits: ['Custom dashboards', 'Predictive modeling', 'Performance tracking']
    }
  ];

  const benefits = [
    'Ensure regulatory compliance',
    'Reduce operational risk by 80%',
    'Improve transaction speed by 95%',
    'Enhance security posture',
    'Automate compliance reporting',
    'Scale financial operations efficiently'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Secure and compliant financial IT solutions. Banking-grade security, risk management, and regulatory compliance for financial institutions." />
        <meta name="keywords" content="financial IT, banking solutions, fintech, compliance, risk management, payment processing, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Financial IT
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure, compliant, and innovative IT solutions designed specifically for financial institutions. 
              Meet regulatory requirements while driving digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial IT solutions are designed to meet the unique challenges and 
              regulatory requirements of the financial services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Financial IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built specifically for financial institutions with security, compliance, 
              and performance as top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our financial IT experts help you build secure, compliant, 
            and innovative solutions for your financial institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Case Study
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;