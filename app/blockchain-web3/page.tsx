import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Database, CheckCircle } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contracts',
      description: 'Secure, self-executing contracts with transparent terms and automated enforcement'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, trading, and yield farming'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with Web3 protocols and decentralized applications'
    },
    {
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      title: 'Blockchain Infrastructure',
      description: 'Robust, scalable blockchain infrastructure for enterprise applications'
    }
  ];

  const services = [
    {
      category: 'Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'NFT Marketplace', 'DeFi Protocols', 'Cross-chain Solutions']
    },
    {
      category: 'Security & Audit',
      items: ['Smart Contract Audits', 'Security Testing', 'Penetration Testing', 'Code Review', 'Vulnerability Assessment', 'Compliance Check']
    },
    {
      category: 'Consulting',
      items: ['Blockchain Strategy', 'Technology Selection', 'Architecture Design', 'Implementation Planning', 'Training & Support', 'Maintenance']
    },
    {
      category: 'Integration',
      items: ['API Development', 'Wallet Integration', 'Payment Processing', 'Data Migration', 'Legacy System Integration', 'Custom Solutions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Token deployment',
        'Basic security audit',
        'Documentation',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for medium-scale applications',
      features: [
        'Advanced smart contracts',
        'Complex DApp development',
        'DeFi protocol integration',
        'Comprehensive security audit',
        'Cross-chain compatibility',
        '3 months support',
        'Performance optimization',
        'User interface design'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$29,999',
      period: '/project',
      description: 'For large-scale enterprise solutions',
      features: [
        'Custom blockchain solutions',
        'Multi-chain architecture',
        'Advanced security features',
        'Full audit and compliance',
        'White-label solutions',
        '6 months support',
        'Dedicated team',
        'Custom integrations',
        'Training and documentation'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Crypto Finance Corp',
      content: 'The smart contract audit saved us from a potential $2M loss. Their expertise in blockchain security is unmatched.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'NFT Marketplace',
      content: 'Our NFT marketplace went live in record time with zero security issues. The team delivered beyond expectations.',
      rating: 5
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain development, smart contract auditing, and Web3 integration services. Secure, scalable, and innovative solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
              Blockchain & Web3
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain technology and Web3 solutions. 
            From smart contracts to DeFi protocols, we build the future of decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="#demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Blockchain Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive blockchain solutions for the decentralized future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From development to deployment, we cover every aspect of blockchain technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the package that fits your blockchain project needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-lg ${plan.popular ? 'bg-gradient-to-br from-cyan-500 to-purple-600 text-white' : 'bg-gray-800 text-white'}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-cyan-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-white text-cyan-600 hover:bg-gray-100' 
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Trusted by leading companies in the blockchain space
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your blockchain project and bring your Web3 vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Start Your Project
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}