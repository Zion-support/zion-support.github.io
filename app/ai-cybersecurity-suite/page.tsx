'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Brain,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Settings,
  Activity,
  Database,
  Server,
  Network,
  FileShield,
  Key,
  Monitor,
  Smartphone,
  Laptop,
  Cloud,
  Users
} from 'lucide-react';

export default function AICybersecuritySuitePage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent 99.7% of cyber threats in real-time, including zero-day attacks.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Multi-Layer Protection',
      description: 'Comprehensive security stack including firewall, antivirus, intrusion detection, and behavioral analysis.'
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 security operations center with AI-powered threat hunting and automated incident response.'
    },
    {
      icon: <Lock className="w-6 h-6 text-yellow-400" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access controls.'
    },
    {
      icon: <Database className="w-6 h-6 text-red-400" />,
      title: 'Data Protection',
      description: 'End-to-end encryption, data loss prevention, and compliance with GDPR, HIPAA, and SOC 2 standards.'
    },
    {
      icon: <Network className="w-6 h-6 text-blue-400" />,
      title: 'Network Security',
      description: 'Advanced network segmentation, VPN management, and secure remote access solutions.'
    }
  ];

  const securityServices = [
    {
      category: 'Threat Protection',
      services: [
        'AI-powered malware detection',
        'Real-time threat intelligence',
        'Behavioral analysis & anomaly detection',
        'Zero-day attack prevention',
        'Advanced persistent threat (APT) protection',
        'Email security & phishing prevention'
      ]
    },
    {
      category: 'Network Security',
      services: [
        'Next-generation firewall (NGFW)',
        'Intrusion detection & prevention (IDS/IPS)',
        'Network segmentation & micro-segmentation',
        'VPN & secure remote access',
        'DDoS protection & mitigation',
        'Wireless network security'
      ]
    },
    {
      category: 'Data Security',
      services: [
        'Data encryption at rest & in transit',
        'Data loss prevention (DLP)',
        'Database security & monitoring',
        'Cloud security & CASB',
        'Backup & disaster recovery',
        'Compliance & audit management'
      ]
    },
    {
      category: 'Identity & Access',
      services: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO) solutions',
        'Privileged access management (PAM)',
        'Identity governance & administration',
        'Role-based access control (RBAC)',
        'Password management & policies'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat protection',
        'Email security',
        'Firewall management',
        '24/7 monitoring',
        'Monthly security reports',
        'Email support',
        'Up to 25 users',
        '99.5% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI threat detection',
        'Multi-layer protection',
        'Real-time monitoring & alerts',
        'Incident response team',
        'Weekly security reports',
        'Priority support',
        'Up to 100 users',
        '99.9% uptime SLA',
        'Compliance reporting',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Complete security suite',
        'Custom AI model training',
        'Dedicated security team',
        'Real-time threat hunting',
        'Daily security reports',
        'Dedicated account manager',
        'Unlimited users',
        '99.99% uptime SLA',
        'Full compliance suite',
        'White-label solution',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    {
      standard: 'SOC 2 Type II',
      description: 'Comprehensive security controls and monitoring for service organizations.',
      features: ['Security controls audit', 'Availability monitoring', 'Confidentiality protection']
    },
    {
      standard: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations.',
      features: ['Data privacy controls', 'Right to be forgotten', 'Consent management']
    },
    {
      standard: 'HIPAA Compliance',
      description: 'Healthcare data protection and privacy controls.',
      features: ['PHI protection', 'Access controls', 'Audit logging']
    },
    {
      standard: 'ISO 27001',
      description: 'International standard for information security management.',
      features: ['ISMS implementation', 'Risk management', 'Continuous improvement']
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant security solutions protecting patient data and medical systems.',
      threats: ['Ransomware attacks', 'Data breaches', 'Insider threats', 'IoT vulnerabilities']
    },
    {
      industry: 'Financial Services',
      description: 'Bank-level security for financial institutions and fintech companies.',
      threats: ['Payment fraud', 'Account takeover', 'API attacks', 'Regulatory violations']
    },
    {
      industry: 'E-commerce',
      description: 'Protect customer data, payment information, and business operations.',
      threats: ['Credit card fraud', 'DDoS attacks', 'Data theft', 'Supply chain attacks']
    },
    {
      industry: 'Government',
      description: 'High-security solutions for government agencies and critical infrastructure.',
      threats: ['Nation-state attacks', 'Espionage', 'Critical infrastructure', 'Classified data']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'MedTech Solutions',
      role: 'CISO',
      content: 'The AI threat detection prevented 3 major ransomware attempts in the first month. Our security posture improved dramatically.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Marcus Thompson',
      company: 'FinanceFlow Inc',
      role: 'Head of Security',
      content: 'SOC 2 compliance was achieved in record time. The automated monitoring and reporting saved us months of work.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Kim',
      company: 'RetailMax Corp',
      role: 'IT Director',
      content: 'Zero security incidents since implementation. The AI learns and adapts to new threats faster than traditional solutions.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group | Advanced Threat Protection & Security</title>
        <meta name="description" content="Protect your business with our AI-powered cybersecurity suite. 99.7% threat detection, 24/7 monitoring, compliance solutions. Starting at $499/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, compliance, SOC 2, HIPAA, GDPR, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite" />
        
        <meta property="og:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta property="og:description" content="Protect your business with our AI-powered cybersecurity suite. 99.7% threat detection, 24/7 monitoring, compliance solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-suite" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta name="twitter:description" content="Protect your business with our AI-powered cybersecurity suite. 99.7% threat detection, 24/7 monitoring, compliance solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Suite
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with AI-powered cybersecurity that detects and prevents 99.7% of threats in real-time. 
                Comprehensive protection with 24/7 monitoring and compliance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">False Positives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                AI-powered security that adapts and evolves with emerging threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Complete protection across all attack vectors and compliance requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Compliance & Standards</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Meet regulatory requirements with automated compliance monitoring and reporting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{standard.standard}</h3>
                  <p className="text-gray-300 mb-6">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industry-Specific Protection</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored security solutions for your industry's unique threats and compliance requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.industry}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Common Threats:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.threats.map((threat, threatIndex) => (
                        <span key={threatIndex} className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Security Pricing Plans</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security level that matches your business needs. All plans include 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Security Success Stories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                See how leading organizations are protecting their assets with our AI security suite
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-red-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Don't Wait for a Breach - Secure Your Business Today
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free security assessment and see how vulnerable your business is to cyber threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free security assessment • ✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Need Immediate Security Help?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-red-400 mr-2" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-red-400 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-red-400 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}