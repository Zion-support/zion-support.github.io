import React from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CybersecurityConsulting() {
  const features = [
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-5 h-5 ml-2" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
    {
      icon: <Eye className="w-5 h-5 ml-2" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Shield className="w-5 h-5 ml-2" />
                Expert Cybersecurity Consulting
              </div>
              <h1 className="w-5 h-5 ml-2">Cybersecurity Consulting
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Protect your business with expert cybersecurity consulting. Security assessments, compliance management, 
                threat intelligence, and 24/7 monitoring to keep your data secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        >
          Get Free Security Audit
                  
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
                <Link to="#demo" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">View Case Studies
                </Link>
                      </div>
      </section>

        {/* Features Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Security Solutions
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Expert cybersecurity services that protect your business from evolving threats
              </p>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-all duration-300" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5 ml-2" />{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Consulting Features */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete Security Consulting
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">End-to-end cybersecurity services to protect your organization
              </p>
          </div>
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {consultingFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700" />
                  <h3 className="w-5 h-5 ml-2" />{feature.category}</h3>
                  <ul className="w-5 h-5 ml-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Flexible Consulting Packages
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Choose the security consulting package that fits your needs
              </p>
          </div>
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Star className="w-5 h-5 ml-2" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="w-5 h-5 ml-2" />{plan.name}</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5 ml-2" />{plan.price}</span>
                    <span className="w-5 h-5 ml-2" />{plan.period}</span>
                  </div>
                  <ul className="w-5 h-5 ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by Industry Leaders
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">See how our Cybersecurity Consulting protects organizations worldwide
              </p>
          </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"{testimonial.content}"</p>
                  <div />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Don't wait for a security breach. Get expert cybersecurity consulting to protect your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-all duration-300">Get Your Free Security Audit
                </Link>
                <Link to="/about" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
                </Link>
                      </div>
      </section>
      </div>
    </Layout>
  )
};