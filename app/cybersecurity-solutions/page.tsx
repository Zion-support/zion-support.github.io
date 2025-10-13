'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function CybersecuritySolutionsPage() {
  const services = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response system that identifies and neutralizes cyber threats in real-time.",
      icon: EyeIcon,
      features: [
        "Real-time threat monitoring",
        "AI-powered anomaly detection",
        "Automated incident response",
        "Behavioral analysis",
        "Threat intelligence integration",
        "24/7 security operations center"
      ],
      price: "Starting at $2,500/month"
    },
    {
      title: "Zero Trust Security Architecture",
      description: "Comprehensive zero trust implementation that verifies every user and device before granting access.",
      icon: LockClosedIcon,
      features: [
        "Identity verification",
        "Device compliance checking",
        "Micro-segmentation",
        "Least privilege access",
        "Continuous monitoring",
        "Policy enforcement"
      ],
      price: "Starting at $3,000/month"
    },
    {
      title: "Penetration Testing & Vulnerability Assessment",
      description: "Comprehensive security testing to identify and remediate vulnerabilities before attackers can exploit them.",
      icon: ShieldCheckIcon,
      features: [
        "Automated vulnerability scanning",
        "Manual penetration testing",
        "Social engineering testing",
        "Compliance assessment",
        "Remediation guidance",
        "Regular security audits"
      ],
      price: "Starting at $1,500/month"
    },
    {
      title: "Security Awareness Training",
      description: "Comprehensive cybersecurity training program to educate employees and reduce human error risks.",
      icon: UserGroupIcon,
      features: [
        "Interactive training modules",
        "Phishing simulation",
        "Security awareness campaigns",
        "Compliance training",
        "Progress tracking",
        "Certification programs"
      ],
      price: "Starting at $800/month"
    },
    {
      title: "Incident Response & Forensics",
      description: "Rapid incident response and digital forensics services to minimize damage and investigate security breaches.",
      icon: DocumentTextIcon,
      features: [
        "24/7 incident response",
        "Digital forensics analysis",
        "Evidence collection",
        "Legal support",
        "Recovery planning",
        "Post-incident review"
      ],
      price: "Starting at $2,000/month"
    },
    {
      title: "Compliance Management",
      description: "Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.",
      icon: GlobeAltIcon,
      features: [
        "Compliance assessment",
        "Policy development",
        "Audit preparation",
        "Risk management",
        "Documentation",
        "Ongoing monitoring"
      ],
      price: "Starting at $1,800/month"
    }
  ];

  const benefits = [
    "99.9% threat detection accuracy",
    "50% reduction in security incidents",
    "24/7 monitoring and response",
    "Compliance guarantee",
    "Rapid incident response",
    "Cost-effective security"
  ];

  const compliance = [
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Healthcare data protection standards" },
    { name: "SOX", description: "Sarbanes-Oxley financial compliance" },
    { name: "PCI DSS", description: "Payment card industry security standards" },
    { name: "ISO 27001", description: "Information security management systems" },
    { name: "NIST", description: "National Institute of Standards framework" }
  ];

  const pricing = {
    basic: {
      price: "$1,200",
      period: "month",
      features: [
        "Basic threat monitoring",
        "Vulnerability scanning",
        "Email security",
        "Firewall management",
        "Monthly security reports",
        "Email support"
      ]
    },
    professional: {
      price: "$2,500",
      period: "month",
      features: [
        "Advanced threat detection",
        "24/7 monitoring",
        "Incident response",
        "Security awareness training",
        "Compliance support",
        "Priority support",
        "Weekly reports"
      ]
    },
    enterprise: {
      price: "$5,000",
      period: "month",
      features: [
        "Full security suite",
        "Dedicated security team",
        "Custom security policies",
        "White-label solution",
        "Advanced forensics",
        "24/7 phone support",
        "Daily reports",
        "SLA guarantee"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, zero trust architecture, penetration testing, and compliance management. Protect your business with enterprise-grade security." />
        <meta name="keywords" content="cybersecurity, threat detection, zero trust, penetration testing, compliance, security audit, incident response" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade cybersecurity that protects your business from evolving threats
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your digital assets, ensure compliance, 
              and provide peace of mind. Our expert team and advanced AI technology work together to 
              defend against the latest cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity solutions tailored to your business needs and risk profile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-red-400">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-red-400 hover:text-red-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-red-700 hover:to-orange-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and advanced technology for maximum protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements and industry standards with our compliance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{standard.name}</h3>
                  <p className="text-gray-300">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Service Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your business needs and risk profile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${index === 1 ? 'border-red-500 relative' : 'border-slate-600'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">
                  {details.price}<span className="text-lg text-gray-400">/{details.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full ${index === 1 ? 'bg-white text-red-900' : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'} px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Don't wait for a security breach. Get comprehensive protection now with our expert cybersecurity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Security Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-red-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-red-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}