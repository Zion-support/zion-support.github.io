import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CogIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and risks in your systems.",
      icon: EyeIcon,
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Assessment", "Compliance Review"]
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and monitoring systems to identify and respond to security incidents.",
      icon: ExclamationTriangleIcon,
      features: ["Real-time Monitoring", "Anomaly Detection", "Incident Response", "Threat Intelligence"]
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption solutions to protect your sensitive data at rest and in transit.",
      icon: LockClosedIcon,
      features: ["Data at Rest Encryption", "Data in Transit Encryption", "Key Management", "Compliance Support"]
    },
    {
      title: "Access Management",
      description: "Identity and access management solutions to control who can access your systems and data.",
      icon: CogIcon,
      features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Privileged Access Management"]
    },
    {
      title: "Incident Response",
      description: "Rapid response services to contain, investigate, and recover from security incidents.",
      icon: ShieldCheckIcon,
      features: ["24/7 Monitoring", "Rapid Response", "Forensic Analysis", "Recovery Planning"]
    },
    {
      title: "Compliance Support",
      description: "Compliance management to help you meet industry standards and regulatory requirements.",
      icon: ChartBarIcon,
      features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2", "ISO 27001"]
    }
  ];

  const threats = [
    "Malware & Ransomware",
    "Phishing Attacks",
    "Data Breaches",
    "Insider Threats",
    "DDoS Attacks",
    "Advanced Persistent Threats",
    "Social Engineering",
    "Zero-Day Exploits"
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including security audits, threat detection, data encryption, and compliance support." />
        <meta name="keywords" content="cybersecurity, security audit, threat detection, data encryption, compliance, IT security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business from evolving cyber threats with our comprehensive security solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our expert cybersecurity team provides end-to-end protection for your digital assets, 
              ensuring your business remains secure and compliant in today's threat landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from all angles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Get Protected <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Threats We Protect Against
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security solutions defend against the most common and dangerous cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {threats.map((threat, index) => (
              <div 
                key={threat}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 text-center hover:border-red-500 transition-all duration-300"
              >
                <ExclamationTriangleIcon className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{threat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to securing your business infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                We conduct a comprehensive security assessment to identify vulnerabilities and risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300">
                We develop a customized security strategy based on your specific needs and risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                We implement security solutions and best practices to protect your systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Monitoring</h3>
              <p className="text-gray-300">
                We provide continuous monitoring and support to maintain your security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Don't wait for a security breach. Let us help you build a robust defense against cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Security Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}