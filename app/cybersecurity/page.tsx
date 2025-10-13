'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WifiIcon,
  CircleStackIcon,
  ServerIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: "Security Assessment & Auditing",
      description: "Comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits",
        "Compliance reviews",
        "Risk assessments",
        "Security gap analysis"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,500",
      benefits: ["Comprehensive analysis", "Detailed reports", "Actionable recommendations"],
      useCases: ["Security audits", "Compliance", "Risk management"],
      href: "/security-assessment"
    },
    {
      title: "Threat Monitoring & Detection",
      description: "24/7 threat monitoring and detection services to protect your digital assets from cyber threats.",
      icon: EyeIcon,
      features: [
        "Real-time monitoring",
        "Threat detection",
        "Incident response",
        "Security alerts",
        "Threat intelligence",
        "Forensic analysis"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $3,000/month",
      benefits: ["24/7 monitoring", "Rapid response", "Threat prevention"],
      useCases: ["Threat monitoring", "Incident response", "Security operations"],
      href: "/threat-monitoring"
    },
    {
      title: "Network Security",
      description: "Advanced network security solutions including firewalls, VPNs, and intrusion detection systems.",
      icon: WifiIcon,
      features: [
        "Firewall management",
        "VPN solutions",
        "Intrusion detection",
        "Network segmentation",
        "Traffic analysis",
        "Security policies"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,200/month",
      benefits: ["Network protection", "Secure connectivity", "Traffic monitoring"],
      useCases: ["Network security", "VPN management", "Traffic analysis"],
      href: "/network-security"
    },
    {
      title: "Data Protection & Encryption",
      description: "Comprehensive data protection services including encryption, backup, and recovery solutions.",
      icon: LockClosedIcon,
      features: [
        "Data encryption",
        "Backup solutions",
        "Recovery planning",
        "Data classification",
        "Access controls",
        "Compliance support"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,800/month",
      benefits: ["Data security", "Compliance", "Backup protection"],
      useCases: ["Data encryption", "Backup solutions", "Compliance"],
      href: "/data-protection"
    },
    {
      title: "Security Training & Awareness",
      description: "Comprehensive security training programs to educate your team on cybersecurity best practices.",
      icon: UserGroupIcon,
      features: [
        "Security awareness training",
        "Phishing simulations",
        "Policy development",
        "Incident response training",
        "Compliance training",
        "Security workshops"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,500/month",
      benefits: ["Team education", "Risk reduction", "Compliance"],
      useCases: ["Security training", "Awareness programs", "Policy development"],
      href: "/security-training"
    },
    {
      title: "Incident Response & Recovery",
      description: "Rapid incident response and recovery services to minimize damage and restore operations quickly.",
      icon: ExclamationTriangleIcon,
      features: [
        "Incident response planning",
        "Emergency response",
        "Forensic analysis",
        "Recovery procedures",
        "Communication management",
        "Post-incident review"
      ],
      color: "from-red-600 to-pink-600",
      price: "Starting at $4,000/incident",
      benefits: ["Rapid response", "Damage minimization", "Quick recovery"],
      useCases: ["Incident response", "Emergency recovery", "Forensic analysis"],
      href: "/incident-response"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat monitoring, network security, data protection, and incident response. Protect your business from cyber threats." />
        <meta name="keywords" content="cybersecurity, threat monitoring, network security, data protection, incident response, security training, compliance" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business from evolving cyber threats with our comprehensive security solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From threat monitoring to incident response, our expert cybersecurity team ensures 
              your digital assets are protected with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
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

      {/* Why Choose Our Cybersecurity */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert cybersecurity services backed by years of experience and cutting-edge security technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified security professionals with years of experience in enterprise-level cybersecurity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">
                Round-the-clock threat monitoring and incident response to protect your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <LockClosedIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance with industry standards and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proactive Protection</h3>
              <p className="text-gray-300">
                Proactive security measures that prevent threats before they can cause damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our cybersecurity experts help you build a robust security foundation
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
                Schedule Security Demo
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