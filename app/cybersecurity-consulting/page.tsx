import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function CybersecurityConsulting() {
  const features = [
    {
      icon: <Shield className="w-6h-6text-cyan-400" / />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-6h-6text-purple-400" / />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
    {
      icon: <Eye className="w-6h-6text-yellow-400" / />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <Brain className="w-6h-6text-green-400" / />,
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team to prevent human error attacks'
    }
  ]

  const consultingFeatures = [
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
      items: ['24/7 SOC Services', 'Incident Response', 'Threat Hunting', 'Forensic Analysis', 'Security Monitoring', 'Alert Management']
    },
    {
      category: 'Compliance',
      items: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'PCI-DSS Compliance', 'ISO 27001', 'NIST Framework']
    }
  ]

  const pricingPlans = [
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
      content: 'Cybersecurity Consulting helped us achieve HIPAA compliance and significantly improve our security posture.',
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
    <Layout
      title="Cybersecurity Consulting - Expert Security Solutions | Zion Tech Group"
      description="Protect your business with expert cybersecurity consulting. Security assessments, compliance management, threat intelligence, and 24/7 monitoring. Get your free security audit today."
      keywords="cybersecurity consulting, security assessment, compliance management, threat intelligence, security training, penetration testing" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
        </div>
            <div className="text-center" />
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
        </div>
                <Shield className="w-4h-4mr-2" / />
                Expert Cybersecurity Consulting
    <>
              </div>
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Cybersecurity Consulting
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8" />
                Protect your business with expert cybersecurity consulting. Security assessments, compliance management, 
                threat intelligence, and 24/7 monitoring to keep your data secure.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Security Audit
    <>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Case Studies
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Security Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Expert cybersecurity services that protect your business from evolving threats
    <>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className="flexitems-centermb-4">
        </div>
                    {feature.icon}
    <>
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Consulting Features */}
    <>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Security Consulting
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                End-to-end cybersecurity services to protect your organization
    <>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {consultingFeatures.map((feature, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
                  <ul className="space-y-2" />
                    {feature.items.map((item, itemIndex) => (
    <>
                      <li key="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-4 h-4text-red-400mr-2" / />
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
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Consulting Packages
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the security consulting package that fits your needs
    <>
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
    <>
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
        </div>
                      <Star className="w-4h-4mr-1" / />
                      Most Popular
                    </div>
                  )}
    <>
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                  <div className="mb-6">
        </div>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5text-red-400mr-3" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-12">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300" />
                See how our Cybersecurity Consulting protects organizations worldwide
    <>
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="flexitems-centermb-4">
        </div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                    ))}
    <>
                  </div>
                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center">
        </div>
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Secure Your Business Today
              </h2>
              <p className="text-lgtext-gray-300mb-8" />
                Don't wait for a security breach. Get expert cybersecurity consulting to protect your organization
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Your Free Security Audit
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>