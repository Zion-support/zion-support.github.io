import React from 'react'
import { Link } from 'react-router-dom'

import { Shield, ArrowRight, CheckCircle, Brain, Star, Lock, Eye } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function CybersecurityConsulting() {
  const features = [

      icon: <Shield className="w-6h-6text-cyan-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
      icon: <Lock className="w-6h-6text-purple-400" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
      icon: <Eye className="w-6h-6text-yellow-400" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
      icon: <Brain className="w-6h-6text-green-400" />,

      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team to prevent human error attacks'
  ]

  const consultingFeatures = [
      category: 'Security Assessment',
      items: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Security Audits', 'Compliance Reviews', 'Gap Analysis']
    },
      category: 'Implementation',
      items: ['Security Architecture', 'Policy Development', 'Tool Implementation', 'Process Design', 'Training Programs', 'Change Management']
    },
      category: 'Monitoring & Response',
      items: ['24/7 SOC Services', 'Incident Response', 'Threat Hunting', 'Forensic Analysis', 'Security Monitoring', 'Alert Management']
    },
      category: 'Compliance',
      items: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'PCI-DSS Compliance', 'ISO 27001', 'NIST Framework']
  ]

  const pricingPlans = [
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
  ]

  const testimonials = [
      name: 'Jennifer Lee',
      company: 'Healthcare Provider',
      content: 'Cybersecurity Consulting helped us achieve HIPAA compliance and significantly improve our security posture.',
      rating: 5
    },
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      content: 'Their threat intelligence and incident response capabilities prevented a major security breach. Highly recommended.',
      rating: 5
    },
      name: 'Sarah Johnson',
      company: 'E-commerce Platform',
      content: 'The security training program transformed our team's awareness. We've seen a 90% reduction in security incidents.',
      rating: 5
  ]

  return (

        {/* Hero Section */}
    
                Expert Cybersecurity Consulting

              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Cybersecurity Consulting

              Protect your business with expert cybersecurity consulting. Security assessments, compliance management, 
                threat intelligence, and 24/7 monitoring to keep your data secure.
    
                  Get Free Security Audit

                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Case Studies

        {/* Features Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Security Solutions
                Expert cybersecurity services that protect your business from evolving threats

 (

                    {feature.icon}
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* Consulting Features */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Security Consulting
                End-to-end cybersecurity services to protect your organization

 (
    
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
 (

                        {item}
                    ))}

              ))}

        {/* Pricing Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Consulting Packages
                Choose the security consulting package that fits your needs

 (
                  {plan.popular && (

                      Most Popular
                  )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
 (

                        {feature}
                    ))}
                  
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}

Get Started
    
              ))}

        {/* Testimonials */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Industry Leaders
                See how our Cybersecurity Consulting protects organizations worldwide

 (

 (
                    ))}

                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>

              ))}

        {/* CTA Section */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Secure Your Business Today
                Don't wait for a security breach. Get expert cybersecurity consulting to protect your organization

                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Your Free Security Audit
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
  )
};

