import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCircle, Brain, Star, Lock, Eye } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function Cybersecurity Consulting() {
  const features = [
    {
      icon: <S hield class Name="w-6h-6t ext-cyan-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <L ock class Name="w-6h-6t ext-purple-400" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with G DP R, H IP AA, S OX, P CI-D SS, and other regulatory requirements'
    },
    {
      icon: <E ye class Name="w-6h-6t ext-yellow-400" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <B rain class Name="w-6h-6t ext-green-400" />,
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team to prevent human error attacks'
    }
  ]

  const consulting Features = [
    {
      category: 'Security Assessment',
      items: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Security Audits', 'Compliance Reviews', 'Gap Analysis']
    },
    {
      category: 'Implementation',
      items: ['Security Architecture', 'Policy Development', 'Tool Implementation', 'Process Design', 'Training Programs', 'Change Management']
    },
    {
      category: 'Monitoring & Response',
      items: ['24/7 S OC Services', 'Incident Response', 'Threat Hunting', 'Forensic Analysis', 'Security Monitoring', 'Alert Management']
    },
    {
      category: 'Compliance',
      items: ['G DP R Compliance', 'H IP AA Compliance', 'S OX Compliance', 'P CI-D SS Compliance', 'I SO 27001', 'N IS T Framework']
    }
  ]

  const pricing Plans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: '/project',
      description: 'Comprehensive security assessment',
      features: [
        'Security audit',
        'Vulnerability assessment',
        'Risk analysis',
        'Compliance review',
        'Detailed report',
        'Recommendations'
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: '$9,999',
      period: '/project',
      description: 'Complete security implementation',
      features: [
        'Security assessment',
        'Tool implementation',
        'Policy development',
        'Team training',
        '3 months support',
        'Compliance guidance'
      ],
      popular: true
    },
    {
      name: 'Ongoing',
      price: '$4,999',
      period: '/month',
      description: 'Continuous security management',
      features: [
        '24/7 monitoring',
        'Incident response',
        'Regular assessments',
        'Compliance management',
        'Security updates',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'Healthcare Provider',
      content: 'Cybersecurity Consulting helped us achieve H IP AA compliance and significantly improve our security posture.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      content: 'Their threat intelligence and incident response capabilities prevented a major security breach. Highly recommended.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Platform',
      content: 'The security training program transformed our team's awareness. We've seen a 90% reduction in security incidents.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="Cybersecurity Consulting - Expert Security Solutions | Zion Tech Group"
      description="Protect your business with expert cybersecurity consulting. Security assessments, compliance management, threat intelligence, and 24/7 monitoring. Get your free security audit today."
      keywords="cybersecurity consulting, security assessment, compliance management, threat intelligence, security training, penetration testing" />
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
                Expert Cybersecurity Consulting

              </d iv>
              <h1 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Cybersecurity Consulting
              </h1>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your business with expert cybersecurity consulting. Security assessments, compliance management, 
                threat intelligence, and 24/7 monitoring to keep your data secure.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Security Audit

                  <A rrow Right class Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Case Studies
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
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Security Solutions
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Expert cybersecurity services that protect your business from evolving threats

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

        {/* Consulting Features */}

        <s ection class Name="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Security Consulting
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                End-to-end cybersecurity services to protect your organization

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {consulting Features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t ext-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
                  <u l class Name="s pace-y-2" />
                    {feature.items.map((item, item Index) => (

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
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Consulting Packages
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the security consulting package that fits your needs

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
                See how our Cybersecurity Consulting protects organizations worldwide

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
                Don't wait for a security breach. Get expert cybersecurity consulting to protect your organization

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Your Free Security Audit
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
