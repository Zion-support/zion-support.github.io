'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Cpu, Server, Shield, Zap, BarChart, CheckCircle, ArrowRight, Star, Clock, Target, Phone, Mail, MapPin, Database, Settings, Lock, TrendingUp, Award, Brain, Globe, Users, Settings2, Wifi, HardDrive, DollarSign } from 'lucide-react';

const QuantumComputingInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Hardware Management',
      description: 'Complete management of quantum computing hardware and infrastructure',
      benefits: ['Quantum processor optimization', 'Hardware monitoring', 'Performance tuning', 'Maintenance automation']
    },
    {
      icon: Server,
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable cloud-based quantum computing infrastructure',
      benefits: ['Multi-cloud quantum access', 'Auto-scaling capabilities', 'Global quantum network', 'High availability']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Advanced security for quantum computing environments',
      benefits: ['Quantum-safe encryption', 'Access control', 'Data protection', 'Compliance management']
    },
    {
      icon: Zap,
      title: 'Quantum Performance Optimization',
      description: 'AI-powered optimization for quantum computing performance',
      benefits: ['Algorithm optimization', 'Resource allocation', 'Load balancing', 'Performance analytics']
    }
  ];

  const services = [
    {
      title: 'Quantum Data Centers',
      description: 'Design and deployment of quantum computing data centers',
      icon: Server,
      marketPrice: '$500,000-2,000,000/project',
      features: ['Custom quantum hardware', 'Environmental controls', 'Power management', 'Security systems']
    },
    {
      title: 'Quantum Network Infrastructure',
      description: 'Quantum communication networks and quantum internet',
      icon: Wifi,
      marketPrice: '$1,000,000-5,000,000/project',
      features: ['Quantum repeaters', 'Quantum routers', 'Network security', 'Global connectivity']
    },
    {
      title: 'Quantum Software Platform',
      description: 'Complete software stack for quantum computing',
      icon: Brain,
      marketPrice: '$300,000-1,500,000/project',
      features: ['Quantum SDK', 'Development tools', 'API management', 'Integration services']
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic consulting for quantum computing adoption',
      icon: Users,
      marketPrice: '$500-2,000/hour',
      features: ['Technology assessment', 'Implementation planning', 'Training programs', 'Ongoing support']
    }
  ];

  const pricing = [
    {
      name: 'Quantum Infrastructure Basic',
      price: '$50,000',
      period: '/month',
      description: 'Basic quantum computing infrastructure',
      features: [
        'Up to 10 quantum processors',
        'Standard cloud access',
        'Basic monitoring',
        'Email support',
        'Standard security'
      ],
      marketPrice: '$100,000/month',
      savings: '50%'
    },
    {
      name: 'Quantum Infrastructure Pro',
      price: '$150,000',
      period: '/month',
      description: 'Advanced quantum computing infrastructure',
      features: [
        'Up to 50 quantum processors',
        'Priority cloud access',
        'Advanced monitoring',
        '24/7 support',
        'Enhanced security',
        'Custom integrations'
      ],
      marketPrice: '$300,000/month',
      savings: '50%',
      popular: true
    },
    {
      name: 'Quantum Infrastructure Enterprise',
      price: '$500,000',
      period: '/month',
      description: 'Full-scale quantum computing infrastructure',
      features: [
        'Unlimited quantum processors',
        'Dedicated infrastructure',
        'Custom hardware',
        'Dedicated support team',
        'On-premise deployment',
        'White-label solutions'
      ],
      marketPrice: '$1,000,000/month',
      savings: '50%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Complete quantum computing infrastructure solutions including hardware, software, and cloud services. 50% cost savings vs market rates." />
        <meta name="keywords" content="quantum computing, quantum infrastructure, quantum hardware, quantum software, quantum cloud" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Next-Generation Computing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum Computing <span className="text-blue-400">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete quantum computing infrastructure solutions including hardware, software, 
                cloud services, and consulting. Build the future of computing today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore Quantum Infrastructure
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Hardware</h3>
                <p className="text-gray-300">State-of-the-art quantum processors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable quantum cloud services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Security</h3>
                <p className="text-gray-300">Advanced quantum-safe security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50% Savings</h3>
                <p className="text-gray-300">vs market rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum Infrastructure <span className="text-blue-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum computing infrastructure solutions designed for 
                enterprise-scale quantum computing adoption.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum <span className="text-blue-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end quantum computing services from infrastructure design to implementation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-sm text-blue-400 font-semibold mb-3">
                      Market Rate: {service.marketPrice}
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum Infrastructure <span className="text-blue-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options with 50% savings compared to market rates. 
                All plans include quantum computing infrastructure and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-400 line-through mr-2">Market: {plan.marketPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">Save {plan.savings}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' 
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build <span className="text-blue-400">Quantum Infrastructure</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our quantum computing experts for a free consultation and discover 
              how quantum infrastructure can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default QuantumComputingInfrastructurePage;