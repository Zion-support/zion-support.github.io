import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCircle, Brain, Lock, Star, Eye } from 'lucide-react';
import Layout from '../layout'
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AdvancedSecuritySuite() {
  features = [
    {
      icon: <Shield className="w-6 h-6text-cyan-400" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      icon: <Brain className="w-6 h-6text-purple-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      icon: <Eye className="w-6 h-6text-yellow-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      icon: <Lock className="w-6 h-6text-green-400" />,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools'
    }
  ]

  securityModules = [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'USB Protection', 'Application Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'API Security', 'Container Security']
    },
    {
      category: 'Threat Intelligence',
      items: ['Threat Hunting', 'Vulnerability Scanning', 'Penetration Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 endpoints',
        'Basic threat protection',
        'Email security',
        '24/7 monitoring',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 endpoints',
        'Advanced AI protection',
        'Full security suite',
        'Priority support',
        'Compliance tools',
        'Custom policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Full compliance suite',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The AI detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturing Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security" />
      <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-center">
              <div className="inlin e-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
                <Shield className="w-4 h-4mr-2" />
                Enterprise Cybersecurity
    <>
              </div>
              <h1 className="tex t-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />Advanced Security Suite
              </h1>
              <p className="tex t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.
    <>
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Get Free Assessment
                  
          <ArrowRight className="w-5 h-5ml-2"  />
        </Link>
                <Link to="#demo" className="borde r-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Comprehensive Security Features
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Advanced protection against the latest cyber threats
              </p>
            </div>
            
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="b g-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className="fle x items-centermb-4">
                    {feature.icon}
    <>
                    <h3 className="tex t-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <p className="tex t-gray-300">
              {feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Security Modules */}
    <>
        <section className="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Complete Security Coverage
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Protect every aspect of your digital infrastructure
              </p>
            </div>
            
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {securityModules.map((module, index) => (
    <>
                <div key="{index}" className="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="tex t-xl font-semiboldtext-white mb-4"   />{module.category}</h3>
                  <ul className="spac e-y-2" />
                    {module.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4tex t-red-400mr-2" />
                        {item}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Pricing Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Flexible Security Plans
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Choose the security level that fits your organization
              </p>
            </div>
            
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
        </div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className="inlin e-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
                      <Star className="w-4 h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="tex t-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="tex t-gray-300 mb-6">
              {plan.description}</p>
                  <div className="m b-6">
                    <span className="tex t-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="tex t-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="spac e-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5tex t-red-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-ful l" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Testimonials */}
    <>
        <section className="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-12">
              <h2 className="tex t-3 xl font-bold text-white mb-4"  />Trusted by Industry Leaders
              </h2>
              <p className="tex t-gray-300">
              See how our security suite protects organizations worldwide
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="fle x items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5tex t-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <p className="tex t-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="fon t-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="tex t-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-4 xlmx-autotext-center">
            <div className="b g-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
              <h2 className="tex t-3 xl font-bold text-white mb-4"  />Secure Your Business Today
              </h2>
              <p className="tex t-lg text-gray-300 mb-8">
              Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Free Security Assessment
                </Link>
                <Link to="/about" className="borde r-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>