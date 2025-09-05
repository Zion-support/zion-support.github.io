import React from 'react';
import Layout from '../../components/Layout';
import { DollarSign, Shield, TrendingUp, BarChart3, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    title: "Financial Data Security",
    description: "Advanced security measures to protect sensitive financial data",
    icon: Shield,
    features: ["Encryption at Rest", "Multi-Factor Authentication", "Fraud Detection", "Compliance Management"]
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies",
    icon: TrendingUp,
    features: ["Credit Risk Analysis", "Market Risk Assessment", "Operational Risk", "Regulatory Compliance"]
  },
  {
    title: "Financial Analytics",
    description: "Advanced analytics for better financial decision making",
    icon: BarChart3,
    features: ["Real-time Reporting", "Predictive Analytics", "Performance Metrics", "Cost Analysis"]
  },
  {
    title: "Payment Processing",
    description: "Secure and efficient payment processing solutions",
    icon: DollarSign,
    features: ["Payment Gateway Integration", "Transaction Monitoring", "Fraud Prevention", "Multi-Currency Support"]
  }
];

const benefits = [
  "Enhanced Security",
  "Regulatory Compliance",
  "Improved Risk Management",
  "Real-time Analytics",
  "Cost Optimization",
  "Scalable Solutions"
];

export default function FinanceSolutionsPage() {
  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Comprehensive financial technology solutions including risk management, payment processing, financial analytics, and regulatory compliance."
      keywords="finance solutions, fintech, risk management, payment processing, financial analytics, regulatory compliance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance
                <span className="block text-green-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Secure and efficient financial technology solutions for modern businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Get Finance Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Finance Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed for financial institutions and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Finance Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the complexities of financial technology and deliver secure, compliant solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Financial Future
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let us help you implement secure and efficient financial technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Finance Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}