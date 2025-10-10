'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, MessageSquare, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Reporting'],
      price: '$299/month'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent chatbot solution for customer service and support automation.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard'],
      price: '$199/month'
    },
    {
      icon: FileText,
      title: 'Zion Document AI',
      description: 'Automated document processing and analysis with intelligent data extraction.',
      features: ['Document Classification', 'Text Extraction', 'Form Processing', 'Data Validation'],
      price: '$399/month'
    },
    {
      icon: Users,
      title: 'Zion CRM Pro',
      description: 'Customer relationship management with AI-powered insights and automation.',
      features: ['Lead Management', 'Sales Automation', 'Customer Analytics', 'Integration Hub'],
      price: '$249/month'
    }
  ];

  const benefits = [
    'Quick Setup',
    'Scalable Solutions',
    '24/7 Support',
    'Regular Updates',
    'Easy Integration',
    'Cost Effective'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS | Zion Tech Group - Specialized Software Solutions</title>
        <meta name="description" content="Discover our micro SaaS products designed for specific business needs. Analytics, chatbots, document processing, and CRM solutions." />
        <meta name="keywords" content="micro SaaS, software as a service, analytics, chatbots, document processing, CRM, business tools" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges with focused functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Focused solutions that deliver specific value without the complexity of large enterprise software.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-cyan-600">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Micro SaaS products offer focused solutions that are easier to implement and maintain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Our Micro SaaS Different?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS products are built with modern technology and designed for ease of use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modern Technology Stack</h3>
                <p className="text-gray-600 mb-6">
                  Built with the latest technologies including React, Node.js, and cloud-native architecture for optimal performance and scalability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Cloud-native architecture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    API-first design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Real-time updates
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy Integration</h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly integrate with your existing tools and workflows through our comprehensive API and pre-built connectors.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    RESTful APIs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Webhook support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Third-party integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Try Our Micro SaaS Products?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with a free trial and experience the power of focused software solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MicroSaasPage;