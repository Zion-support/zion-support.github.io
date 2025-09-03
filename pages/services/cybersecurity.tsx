import React from 'react';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import SEOHead from '../../src/components/SEOHead';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, Users, Zap, Globe, Database, Network, Target, Award, Clock, Brain, Cloud, Server, FileText, BarChart3 } from 'lucide-react';

const Cybersecurity = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cybersecurity Services - Zion Tech Group",
    "url": "https://ziontechgroup.com/services/cybersecurity",
    "description": "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security monitoring",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const services = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and incident response services',
      icon: AlertTriangle,
      features: [
        '24/7 Security Monitoring',
        'Real-time Threat Detection',
        'Incident Response Planning',
        'Forensic Analysis',
        'Threat Intelligence'
      ],
      pricing: 'Starting at $5,000/month'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments and penetration testing',
      icon: Target,
      features: [
        'Network Penetration Testing',
        'Web Application Security',
        'Mobile Security Testing',
        'Social Engineering Tests',
        'Compliance Audits'
      ],
      pricing: 'Starting at $3,000/assessment'
    },
    {
      title: 'Security Architecture',
      description: 'Design and implement secure infrastructure and systems',
      icon: Shield,
      features: [
        'Zero Trust Architecture',
        'Identity & Access Management',
        'Network Security Design',
        'Cloud Security Implementation',
        'Security Policy Development'
      ],
      pricing: 'Starting at $10,000/project'
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and regulations',
      icon: FileText,
      features: [
        'SOC 2 Compliance',
        'ISO 27001 Implementation',
        'GDPR Compliance',
        'HIPAA Security',
        'PCI DSS Compliance'
      ],
      pricing: 'Starting at $7,500/project'
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness and training programs',
      icon: Users,
      features: [
        'Security Awareness Training',
        'Phishing Simulation',
        'Incident Response Training',
        'Executive Security Briefings',
        'Technical Security Training'
      ],
      pricing: 'Starting at $2,500/session'
    },
    {
      title: 'Managed Security Services',
      description: 'Ongoing security management and monitoring services',
      icon: Server,
      features: [
        'Managed Firewall Services',
        'Security Information Management',
        'Log Management & Analysis',
        'Patch Management',
        'Security Operations Center'
      ],
      pricing: 'Starting at $8,000/month'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '< 15 min', label: 'Average Response Time' },
    { number: '500+', label: 'Security Assessments' },
    { number: '24/7', label: 'Monitoring Coverage' }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Framework',
    'CIS Controls',
    'OWASP Top 10'
  ];

  return (
    <>
      <SEOHead 
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, and compliance management."
        keywords="cybersecurity, security services, threat detection, vulnerability assessment, penetration testing, compliance, SOC 2, ISO 27001"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Cybersecurity</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with our comprehensive cybersecurity services. 
                From threat detection to compliance management, we keep your digital assets secure.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                  24/7 Protection
                </div>
                <div className="flex items-center">
                  <Lock className="w-4 h-4 text-cyan-400 mr-2" />
                  Enterprise Security
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-cyan-400 mr-2" />
                  Real-time Monitoring
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Cybersecurity Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions tailored to protect your business from evolving threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance Standards</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We help you meet and maintain compliance with industry standards and regulations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold">{standard}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Security Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A systematic approach to securing your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive security assessment and risk analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">
                  Develop customized security strategy and roadmap
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">
                  Deploy security solutions and monitoring systems
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
                <p className="text-gray-300 text-sm">
                  Continuous monitoring and security management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Don&apos;t wait for a security breach. Get comprehensive protection now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Security Assessment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Security Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cybersecurity;