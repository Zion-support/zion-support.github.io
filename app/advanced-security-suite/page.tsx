import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCircle, Brain, Lock, Star, Eye } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function Advanced Security Suite() {
  const features = [
    {
      icon: <S hield class Name="w-6h-6t ext-cyan-400" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      icon: <B rain class Name="w-6h-6t ext-purple-400" />,
      title: 'A I Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      icon: <E ye class Name="w-6h-6t ext-yellow-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      icon: <L ock class Name="w-6h-6t ext-green-400" />,
      title: 'Compliance Ready',
      description: 'Meet G DP R, H IP AA, S OX, and other regulatory requirements with built-in compliance tools'
    }
  ]

  const security Modules = [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'U SB Protection', 'Application Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'V PN Solutions', 'Network Segmentation', 'D Do S Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'A PI Security', 'Container Security']
    },
    {
      category: 'Threat Intelligence',
      items: ['Threat Hunting', 'Vulnerability Scanning', 'Penetration Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  const pricing Plans = [
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
        'Advanced A I protection',
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
        'Custom A I models',
        'White-label solution',
        'Dedicated support',
        'Full compliance suite',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The A I detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'H IP AA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
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
    <L ayout
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with A I threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, A I security" />
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="i nline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
        </d iv>
                <S hield class Name="w-4h-4m r-2" / />
                Enterprise Cybersecurity

              </d iv>
              <h1 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Advanced Security Suite
              </h1>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your business with our comprehensive cybersecurity solution. A I-powered threat detection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Assessment

                  <A rrow Right class Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Security Features
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Advanced protection against the latest cyber threats

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>
                    {feature.icon}

                    <h3 c lass Name="t ext-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t ext-gray-300">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Security Modules */}

        <s ection class Name="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Security Coverage
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Protect every aspect of your digital infrastructure

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {security Modules.map((module, index) => (

                <d iv key="{index}" class Name="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t ext-xl font-semiboldtext-whitemb-4">{module.category}</h3>
                  <u l class Name="s pace-y-2" />
                    {module.items.map((item, item Index) => (

                      <l i key="{item Index}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-4 h-4t ext-red-400mr-2" / />
                        {item}
                      </l i>
                    ))}

                  </u l>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Security Plans
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the security level that fits your organization

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i nline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
        </d iv>
                      <S tar class Name="w-4h-4m r-1" / />
                      Most Popular
                    </d iv>
                  )}

                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300mb-6">{plan.description}</p>
                  <d iv class Name="m b-6">
        </d iv>
                    <s pan class Name="t ext-4 xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-400">{plan.period}</s pan>
                  </d iv>
                  <u l class Name="s pace-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-5 h-5t ext-red-400mr-3" / />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name="{`w-f ull" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Trusted by Industry Leaders
              </h2>
              <p c lass Name="t ext-gray-300" />
                See how our security suite protects organizations worldwide

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d iv key="{index}" class Name="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t ext-gray-300mb-4">"{testimonial.content}"</p>
                  <d iv />
                    <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t ext-smtext-gray-400">{testimonial.company}</d iv>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-4 xlmx-autotext-center">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
        </d iv>
              <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Secure Your Business Today
              </h2>
              <p c lass Name="t ext-lgtext-gray-300mb-8" />
                Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Free Security Assessment
                </L ink>
                <L ink to="/about" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
    </L ayout>
  )
};
