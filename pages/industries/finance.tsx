import React from 'react';
import Layout from '../../components/Layout';
import { DollarSign, Shield, TrendingUp, Brain, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: DollarSign,
    title: 'Fintech Solutions',
    description: 'Modern financial technology platforms and applications',
    features: ['Digital Banking', 'Payment Processing', 'Mobile Wallets', 'Cryptocurrency Integration']
  },
  {
    icon: Shield,
    title: 'Financial Security',
    description: 'Advanced security solutions for financial institutions',
    features: ['Fraud Detection', 'Risk Management', 'Compliance Monitoring', 'Secure Transactions']
  },
  {
    icon: TrendingUp,
    title: 'Investment Analytics',
    description: 'AI-powered analytics for investment and trading',
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Analysis', 'Algorithmic Trading']
  },
  {
    icon: Brain,
    title: 'Regulatory Compliance',
    description: 'Automated compliance and regulatory reporting',
    features: ['KYC/AML Automation', 'Regulatory Reporting', 'Audit Trails', 'Compliance Monitoring']
  }
];

const benefits = [
  'Enhanced Security',
  'Improved Efficiency',
  'Better Risk Management',
  'Regulatory Compliance',
  'Cost Reduction',
  'Customer Experience'
];

export default function FinancePage() {
  return (
    <Layout
      title="Financial Services Technology - Zion Tech Group"
      description="Transform financial services with our comprehensive technology solutions. Fintech platforms, security, analytics, and compliance for financial institutions."
      keywords="fintech, financial services, banking technology, payment processing, fraud detection, compliance, investment analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Financial Services
                <span className="block text-blue-600">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform financial services with our comprehensive technology solutions. 
                From fintech platforms to security and compliance, we help financial 
                institutions innovate and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Explore Financial Solutions
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Financial Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Services Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for financial institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Financial Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in financial technology and regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Financial Services
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our financial technology experts help you innovate and grow in the digital age.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Financial Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}