'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

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
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools powered by AI and machine learning.',
      benefits: ['AI-powered risk analysis', 'Real-time monitoring', 'Predictive analytics']
    },
    {
      icon: Clock,
      title: 'Real-Time Trading',
      description: 'Ultra-low latency trading systems for high-frequency and algorithmic trading.',
      benefits: ['Microsecond latency', 'High-frequency trading', 'Algorithm optimization']
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Comprehensive customer behavior analysis and personalized financial services.',
      benefits: ['Behavioral analytics', 'Personalized services', 'Customer insights']
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Streamline financial operations with intelligent automation and workflow optimization.',
      benefits: ['Process automation', 'Workflow optimization', 'Cost reduction']
    }
  ];

  const services = [
    {
      title: 'Core Banking Systems',
      description: 'Modernize your core banking infrastructure with cloud-native solutions.',
      icon: DollarSign
    },
    {
      title: 'Payment Processing',
      description: 'Secure and efficient payment processing systems for all transaction types.',
      icon: Zap
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection and prevention systems for financial security.',
      icon: Shield
    },
    {
      title: 'Regulatory Reporting',
      description: 'Automated regulatory reporting and compliance management solutions.',
      icon: BarChart
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve transaction processing speed by 90%',
    'Enhance security and fraud prevention',
    'Ensure regulatory compliance',
    'Enable real-time decision making',
    'Scale efficiently with business growth'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Financial IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your financial services with cutting-edge IT solutions designed for banking, fintech, and financial institutions." />
        <meta name="keywords" content="financial IT, banking solutions, fintech, compliance, risk management, payment processing" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Financial IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Transform your financial services with cutting-edge technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Empower your financial institution with secure, compliant, and innovative IT solutions 
              designed for the modern banking and fintech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Financial Technology Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive financial IT solutions address every aspect of modern banking and financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Financial Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored for financial institutions of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Our Financial IT Solutions?</h2>
              <p className="text-xl text-gray-300">
                Our financial technology solutions deliver measurable results and competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Services?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our financial IT experts to discuss your specific requirements and challenges.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Modernize Your Financial IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions that have transformed their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;