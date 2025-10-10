'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Users, Clock, CheckCircle, ArrowRight, Star, Globe, Smartphone, Brain, BarChart, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityAdvancedPage: React.FC = () => {
  const features = [
    'Advanced threat detection and response (XDR)',
    'Zero-trust security architecture implementation',
    'AI-powered security monitoring and analysis',
    'Penetration testing and vulnerability assessments',
    'Security incident response and forensics',
    'Compliance management (SOC2, ISO27001, GDPR)',
    'Security awareness training and phishing simulation',
    'Endpoint detection and response (EDR)',
    'Network security monitoring and analysis',
    'Cloud security posture management'
  ];

  const benefits = [
    'Protect against advanced persistent threats (APTs)',
    'Reduce security incidents by 95%',
    'Ensure compliance with industry regulations',
    'Minimize business disruption from cyber attacks',
    'Improve security posture and risk management',
    '24/7 monitoring and rapid incident response'
  ];

  const services = [
    'Threat Hunting & Analysis',
    'Penetration Testing',
    'Security Architecture Review',
    'Incident Response',
    'Compliance Auditing',
    'Security Training',
    'Vulnerability Management',
    'Cloud Security Assessment',
    'Network Security Monitoring',
    'Security Operations Center (SOC)'
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$2,500',
      period: '/month',
      description: 'Basic security monitoring',
      features: [
        '24/7 security monitoring',
        'Basic threat detection',
        'Monthly security reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive security solution',
      features: [
        'Everything in Essential',
        'Advanced threat hunting',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'Full security operations center',
      features: [
        'Everything in Professional',
        'Dedicated security team',
        'Custom security solutions',
        'Advanced analytics',
        'White-label reporting',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CISO',
      company: 'Financial Services',
      content: 'Zion Tech Group\'s advanced cybersecurity services have significantly improved our security posture. Their threat hunting capabilities are exceptional.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'IT Director',
      company: 'Healthcare Provider',
      content: 'Their incident response team helped us recover from a ransomware attack in record time. The expertise and professionalism were outstanding.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      role: 'CTO',
      company: 'E-commerce Platform',
      content: 'The compliance audit and security training programs have made our organization much more security-aware. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cybersecurity Services - Threat Detection & Response | Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity services including threat hunting, penetration testing, incident response, and compliance management. Protect your business with expert security solutions." />
        <meta name="keywords" content="cybersecurity, threat detection, penetration testing, incident response, security monitoring, compliance, SOC" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Advanced Security
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced Cybersecurity
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with advanced cybersecurity services including threat hunting, 
                penetration testing, incident response, and compliance management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                </a>
                <a
                  href="#consultation"
                  className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Free Consultation
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
                  <div className="text-gray-400">Threat Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                  <div className="text-gray-400">Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">4.9★</div>
                  <div className="text-gray-400">Client Rating</div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Advanced Security Features
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
                Our Security Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-lg p-6 border border-red-500/20">
                    <Shield className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service}</h3>
                    <p className="text-gray-300 text-sm">
                      Professional cybersecurity services with industry-leading expertise and cutting-edge technology.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Our Security Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-lg p-6 border border-red-500/20">
                    <div className="text-red-400 text-2xl mb-4">🛡️</div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefit {index + 1}</h3>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Security Service Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-red-400">{plan.price}</span>
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
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white'
                          : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
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
                      <div className="text-red-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section id="consultation" className="text-center">
              <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-lg p-12 border border-red-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our cybersecurity experts help you protect your business from advanced threats and ensure compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Security Assessment
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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

export default CybersecurityAdvancedPage;