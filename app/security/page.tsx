'use client';
import React from 'react';
import { Brain, Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin, CheckCircle, ArrowRight, Zap, Settings, Code, BarChart, Cloud, Target, MessageSquare, Cpu, FileText, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Home, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Award, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption',
      icon: Lock,
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Perfect Forward Secrecy',
        'Key rotation and management'
      ]
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA for all user accounts and administrative access',
      icon: Shield,
      details: [
        'SMS and authenticator app support',
        'Hardware security key support',
        'Biometric authentication',
        'Risk-based authentication'
      ]
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify approach to network security and access control',
      icon: Eye,
      details: [
        'Identity-based access control',
        'Micro-segmentation',
        'Continuous verification',
        'Least privilege access'
      ]
    },
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Certified compliance with SOC 2 Type II standards for security and availability',
      icon: Award,
      details: [
        'Annual third-party audits',
        'Security control documentation',
        'Continuous monitoring',
        'Regular compliance reviews'
      ]
    },
    {
      title: 'GDPR & Privacy Compliance',
      description: 'Full compliance with GDPR and other privacy regulations worldwide',
      icon: FileText,
      details: [
        'Data subject rights management',
        'Privacy by design',
        'Data processing agreements',
        'Breach notification procedures'
      ]
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring and threat detection using advanced AI systems',
      icon: Activity,
      details: [
        'Real-time threat detection',
        'Automated incident response',
        'Security operations center',
        'Threat intelligence integration'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security and availability controls',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management',
      status: 'Certified',
      icon: Award,
      color: 'text-blue-400'
    },
    {
      name: 'GDPR Compliance',
      description: 'Data protection regulation',
      status: 'Compliant',
      icon: FileText,
      color: 'text-purple-400'
    },
    {
      name: 'HIPAA Ready',
      description: 'Healthcare data protection',
      status: 'Ready',
      icon: Heart,
      color: 'text-pink-400'
    },
    {
      name: 'PCI DSS',
      description: 'Payment card industry security',
      status: 'Compliant',
      icon: CreditCard,
      color: 'text-orange-400'
    },
    {
      name: 'FedRAMP',
      description: 'Federal cloud security',
      status: 'In Process',
      icon: Cloud,
      color: 'text-cyan-400'
    }
  ];

  const securityMeasures = [
    {
      category: 'Infrastructure Security',
      icon: Settings,
      measures: [
        'Secure data centers with 24/7 physical security',
        'Redundant power and cooling systems',
        'Environmental monitoring and controls',
        'Access control and surveillance systems',
        'Regular security assessments and penetration testing'
      ]
    },
    {
      category: 'Network Security',
      icon: Globe,
      measures: [
        'DDoS protection and mitigation',
        'Web Application Firewall (WAF)',
        'Intrusion Detection and Prevention Systems',
        'Network segmentation and micro-segmentation',
        'Secure VPN and remote access solutions'
      ]
    },
    {
      category: 'Application Security',
      icon: Code,
      measures: [
        'Secure coding practices and code reviews',
        'Automated security testing in CI/CD pipeline',
        'Dependency vulnerability scanning',
        'API security and rate limiting',
        'Regular security updates and patches'
      ]
    },
    {
      category: 'Data Security',
      icon: Database,
      measures: [
        'Data classification and handling procedures',
        'Encryption key management and rotation',
        'Data loss prevention (DLP) systems',
        'Secure data backup and recovery',
        'Data retention and disposal policies'
      ]
    },
    {
      category: 'Identity & Access Management',
      icon: Users,
      measures: [
        'Single Sign-On (SSO) integration',
        'Role-based access control (RBAC)',
        'Privileged access management',
        'Identity governance and lifecycle management',
        'Regular access reviews and audits'
      ]
    },
    {
      category: 'Incident Response',
      icon: AlertTriangle,
      measures: [
        '24/7 security operations center',
        'Incident response playbooks and procedures',
        'Automated threat detection and response',
        'Forensic analysis capabilities',
        'Regular incident response drills and training'
      ]
    }
  ];

  const threatProtection = [
    {
      threat: 'Malware & Ransomware',
      protection: 'Advanced endpoint protection with AI-powered detection',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      threat: 'Phishing Attacks',
      protection: 'Email security gateway with machine learning filters',
      icon: Mail,
      color: 'text-orange-400'
    },
    {
      threat: 'DDoS Attacks',
      protection: 'Multi-layered DDoS protection and traffic filtering',
      icon: Globe,
      color: 'text-yellow-400'
    },
    {
      threat: 'Insider Threats',
      protection: 'User behavior analytics and access monitoring',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      threat: 'API Attacks',
      protection: 'API security gateway with rate limiting and validation',
      icon: Code,
      color: 'text-blue-400'
    },
    {
      threat: 'Data Breaches',
      protection: 'Data loss prevention and encryption at rest',
      icon: Database,
      color: 'text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, certifications, and data protection practices."
        keywords={['security', 'data protection', 'encryption', 'compliance', 'Zion Tech Group', 'cybersecurity']}
        canonicalUrl="https://ziontechgroup.com/security"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your data security is our top priority. We implement enterprise-grade security measures 
            and maintain the highest compliance standards to protect your information.
          </p>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <cert.icon className={`w-12 h-12 ${cert.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 mb-3">{cert.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  cert.status === 'Certified' || cert.status === 'Compliant' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Comprehensive Security Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((category, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start text-gray-300">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Protection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Threat Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatProtection.map((protection, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <protection.icon className={`w-8 h-8 ${protection.color} mr-3`} />
                  <h3 className="text-lg font-bold text-white">{protection.threat}</h3>
                </div>
                <p className="text-gray-300">{protection.protection}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Security Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
              <div className="text-sm text-gray-400 mt-1">Security monitoring</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
              <div className="text-sm text-gray-400 mt-1">Security operations</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">Data Breaches</div>
              <div className="text-sm text-gray-400 mt-1">Since inception</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-gray-300">Certifications</div>
              <div className="text-sm text-gray-400 mt-1">Security & compliance</div>
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Security Questions?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Have questions about our security measures or need to report a security issue? 
            Our security team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@ziontechgroup.com"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              Contact Security Team
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              General Contact
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;