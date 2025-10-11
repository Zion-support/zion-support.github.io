'use client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Clock, Users, BarChart, Settings, Server, Zap, Target, Brain, Code, Smartphone, Globe, Database } from 'lucide-react';

const CybersecuritySolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and rapid incident response',
      features: ['24/7 Monitoring', 'Real-time Alerts', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and access control',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Privileged Access Management']
    },
    {
      icon: Eye,
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security evaluations and compliance checks',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Audits', 'Risk Assessment']
    },
    {
      icon: AlertTriangle,
      title: 'Security Training & Awareness',
      description: 'Employee training and security awareness programs',
      features: ['Phishing Simulation', 'Security Training', 'Policy Development', 'Incident Reporting']
    }
  ];

  const solutions = [
    {
      name: 'Network Security',
      description: 'Protect your network infrastructure from cyber threats',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Monitoring'],
      icon: Globe
    },
    {
      name: 'Endpoint Security',
      description: 'Secure all devices and endpoints in your organization',
      features: ['Antivirus Protection', 'Device Management', 'Data Loss Prevention', 'Mobile Security'],
      icon: Smartphone
    },
    {
      name: 'Data Protection',
      description: 'Safeguard sensitive data with encryption and backup',
      features: ['Data Encryption', 'Backup Solutions', 'Data Classification', 'Privacy Compliance'],
      icon: Database
    },
    {
      name: 'Cloud Security',
      description: 'Secure your cloud infrastructure and applications',
      features: ['Cloud Access Security', 'Data Encryption', 'Compliance Monitoring', 'Threat Detection'],
      icon: Cloud
    }
  ];

  const compliance = [
    {
      name: 'SOC 2',
      description: 'Security, availability, and confidentiality controls',
      icon: CheckCircle
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      icon: CheckCircle
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: CheckCircle
    },
    {
      name: 'HIPAA',
      description: 'Healthcare data protection standards',
      icon: CheckCircle
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '15min', label: 'Average Response Time' },
    { number: '100+', label: 'Security Projects' },
    { number: '24/7', label: 'Monitoring & Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group | Advanced Security Services</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, identity management, security audits, and compliance. Protect your business with our expert security services." />
        <meta name="keywords" content="cybersecurity, security solutions, threat detection, identity management, security audits, compliance, data protection" />
        <meta property="og:title" content="Cybersecurity Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cybersecurity solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced Security Protection for Your Business
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. 
              We provide advanced threat detection, identity management, security audits, and compliance services to keep your data and systems secure.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Compliance & Certifications
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {compliance.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Secure Your Business Today</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Let our cybersecurity experts help you implement comprehensive 
                security measures to protect your business from evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;