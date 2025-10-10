'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Shield, Zap, Globe, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Link,
      title: 'Blockchain Experts',
      description: 'Certified blockchain developers and architects with years of experience'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security with smart contract audits and best practices'
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid prototyping and deployment of blockchain solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const services = [
    'Smart Contract Development',
    'DeFi Platform Development',
    'NFT Marketplace Creation',
    'Blockchain Integration',
    'Cryptocurrency Wallet Development',
    'Token Economics Design',
    'Blockchain Consulting',
    'Security Audits'
  ];

  const benefits = [
    'Transparent and immutable transactions',
    'Reduced costs and faster processing',
    'Enhanced security and trust',
    'Decentralized and autonomous systems',
    'Global accessibility and reach',
    'Smart contract automation',
    'Tokenization of assets',
    'Compliance and regulatory support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge blockchain technology and decentralized solutions from Zion Tech Group." />
        <meta name="keywords" content="blockchain, smart contracts, DeFi, NFTs, cryptocurrency, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Blockchain Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology and decentralized solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Explore Blockchain Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Blockchain Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Blockchain Services?
            </h2>
            <p className="text-xl text-gray-600">
              Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive blockchain solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-900 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Blockchain Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover how blockchain technology can revolutionize your business operations and create new opportunities for growth and innovation.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Contact our blockchain experts to discuss your project requirements and get a customized solution.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Experts
                </button>
                <button className="w-full border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Blockchain Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the blockchain revolution with our expert guidance and cutting-edge solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;