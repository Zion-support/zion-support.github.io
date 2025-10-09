'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Zap, Target, Globe, Award, Users, Brain, Cpu, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Behavioral analysis', 'Threat intelligence']
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with continuous verification and authentication',
      benefits: ['Identity verification', 'Access controls', 'Device trust', 'Network segmentation']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring with AI-powered incident response',
      benefits: ['Continuous monitoring', 'Automated response', 'Incident management', 'Forensic analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning and patch management with AI prioritization',
      benefits: ['Automated scanning', 'Risk assessment', 'Patch management', 'Compliance tracking']
    },
    {
      icon: Brain,
      title: 'Predictive Security',
      description: 'AI-powered predictive analytics to anticipate and prevent security breaches',
      benefits: ['Threat prediction', 'Risk modeling', 'Attack simulation', 'Security forecasting']
    },
    {
      icon: Globe,
      title: 'Global Threat Intelligence',
      description: 'Comprehensive threat intelligence from global sources with AI analysis',
      benefits: ['Global threat feeds', 'IOC tracking', 'Threat hunting', 'Intelligence sharing']
    }
  ];

  const securityServices = [
    {
      name: 'AI Security Assessment',
      price: '$2,999',
      description: 'Comprehensive security evaluation using AI-powered analysis',
      features: [
        'AI vulnerability scanning',
        'Penetration testing',
        'Security architecture review',
        'Compliance assessment',
        'Risk analysis report',
        'Remediation recommendations'
      ]
    },
    {
      name: 'Managed Security Operations',
      price: '$1,299/month',
      description: '24/7 AI-powered security monitoring and incident response',
      features: [
        '24/7 SOC monitoring',
        'AI threat detection',
        'Incident response',
        'Security reporting',
        'Threat hunting',
        'Compliance monitoring'
      ]
    },
    {
      name: 'AI Security Training',
      price: '$499/person',
      description: 'Comprehensive cybersecurity training with AI-powered simulations',
      features: [
        'Phishing simulation',
        'Security awareness training',
        'Incident response training',
        'Compliance training',
        'Certification programs',
        'Ongoing education'
      ]
    },
    {
      name: 'Security Compliance',
      price: '$1,899/month',
      description: 'AI-assisted compliance management for various frameworks',
      features: [
        'GDPR compliance',
        'SOC 2 preparation',
        'HIPAA compliance',
        'PCI DSS compliance',
        'ISO 27001 support',
        'Audit preparation'
      ]
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', description: 'Service Organization Control 2 compliance' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'ISO 27001', description: 'Information Security Management System' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ];

  const threatTypes = [
    {
      type: 'Ransomware',
      description: 'AI-powered detection and prevention of ransomware attacks',
      protection: '99.9% detection rate'
    },
    {
      type: 'Phishing',
      description: 'Advanced email security with AI content analysis',
      protection: '98.5% phishing prevention'
    },
    {
      type: 'DDoS',
      description: 'Intelligent traffic analysis and DDoS mitigation',
      protection: '100% uptime guarantee'
    },
    {
      type: 'Insider Threats',
      description: 'Behavioral analysis to detect malicious insider activity',
      protection: 'Real-time detection'
    }
  ];

  return (
    <div><Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, zero trust security, and 24/7 monitoring. Protect your business from evolving cyber threats." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, zero trust, vulnerability management, compliance, SOC 2, GDPR" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-red-400 mb-8">
                Advanced Protection Against Evolving Cyber Threats
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform provides real-time threat detection, 
                zero trust security architecture, and 24/7 monitoring to protect your business 
                from the most sophisticated cyber attacks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover:scale-105"
                >
                  View Services
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-red-400 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-red-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 bg-gradient-to-r from-red-600/10 to-orange-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-red-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600/10 to-orange-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Threat Protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threatTypes.map((threat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{threat.type}</h3>
                  <p className="text-gray-300 mb-6">{threat.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{threat.protection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a cyber attack. Get comprehensive AI-powered security protection now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AICybersecurityPage;