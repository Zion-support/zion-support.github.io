'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Zap, Users, Clock, CheckCircle, ArrowRight, Star, Shield, Globe, Smartphone, Brain, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainDevelopmentPage: React.FC = () => {
  const features = [
    'Smart contract development and auditing',
    'DeFi protocol design and implementation',
    'NFT marketplace and token development',
    'Cross-chain interoperability solutions',
    'Blockchain consulting and architecture',
    'Security audits and penetration testing',
    'Tokenomics design and implementation',
    'DApp development and deployment',
    'Blockchain integration services',
    'Compliance and regulatory guidance'
  ];

  const benefits = [
    'Build secure and scalable blockchain solutions',
    'Reduce development time with proven frameworks',
    'Ensure compliance with industry standards',
    'Access to cutting-edge blockchain technology',
    'Expert guidance throughout the development process',
    'Long-term support and maintenance'
  ];

  const services = [
    'Smart Contract Development',
    'DeFi Protocol Development',
    'NFT Marketplace Development',
    'Token Development (ERC-20, ERC-721, ERC-1155)',
    'DApp Development',
    'Blockchain Consulting',
    'Security Audits',
    'Cross-chain Solutions',
    'Tokenomics Design',
    'Compliance Services'
  ];

  const pricingPlans = [
    {
      name: 'Smart Contract',
      price: '$5,000',
      period: '/project',
      description: 'Basic smart contract development',
      features: [
        'Simple smart contract development',
        'Basic testing and deployment',
        'Documentation',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'DApp Development',
      price: '$25,000',
      period: '/project',
      description: 'Complete DApp development',
      features: [
        'Full DApp development',
        'Smart contract integration',
        'Frontend and backend development',
        'Testing and deployment',
        'Documentation',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$100,000',
      period: '/project',
      description: 'Complex blockchain solutions',
      features: [
        'Custom blockchain development',
        'Multi-chain integration',
        'Advanced security features',
        'Performance optimization',
        'Dedicated team',
        '12 months support',
        'Training and documentation'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'DeFi Startup',
      content: 'Zion Tech Group delivered an exceptional DeFi protocol that exceeded our expectations. Their expertise in blockchain technology is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'NFT Marketplace',
      content: 'The NFT marketplace they built for us is robust, secure, and user-friendly. We have processed millions of dollars in transactions without any issues.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'CEO',
      company: 'Fintech Company',
      content: 'Their smart contract audit saved us from potential security vulnerabilities. The team is professional and thorough in their approach.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Development Services - DeFi, NFT, Smart Contracts | Zion Tech Group</title>
        <meta name="description" content="Expert blockchain development services including DeFi protocols, NFT marketplaces, smart contracts, and DApp development. Secure, scalable, and compliant solutions." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT, DApp, cryptocurrency, token development, blockchain consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Link className="w-4 h-4 mr-2" />
                Blockchain Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blockchain Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Expert blockchain development services for DeFi protocols, NFT marketplaces, smart contracts, 
                and DApp development. Build secure, scalable, and compliant blockchain solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </a>
                <a
                  href="#consultation"
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Free Consultation
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$100M+</div>
                  <div className="text-gray-400">Value Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-gray-400">Security Record</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">4.9★</div>
                  <div className="text-gray-400">Client Rating</div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Blockchain Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Blockchain Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-lg p-6 border border-orange-500/20">
                    <Link className="w-8 h-8 text-orange-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service}</h3>
                    <p className="text-gray-300 text-sm">
                      Professional blockchain development services with industry-leading security and compliance standards.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Our Blockchain Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-lg p-6 border border-orange-500/20">
                    <div className="text-orange-400 text-2xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefit {index + 1}</h3>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Blockchain Development Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white'
                          : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-orange-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section id="consultation" className="text-center">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-lg p-12 border border-orange-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Build on Blockchain?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our blockchain experts help you build secure, scalable, and innovative blockchain solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  📧 Email: kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlockchainDevelopmentPage;