import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Network, Lock, AlertTriangle, Monitor } from 'lucide-react';

const NetworkSecurityPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and prevention using machine learning algorithms and behavioral analysis.',
      benefits: ['Real-time threat detection', 'Zero-day protection', 'Automated response', 'Reduced false positives']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network Monitoring',
      description: '24/7 network monitoring with real-time alerts and comprehensive security analytics.',
      benefits: ['Continuous monitoring', 'Instant alerts', 'Performance optimization', 'Proactive security']
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Firewall Management',
      description: 'Next-generation firewall configuration and management with advanced security policies.',
      benefits: ['Enhanced protection', 'Granular control', 'Easy management', 'High performance']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Security Auditing',
      description: 'Comprehensive security audits and vulnerability assessments with detailed reporting.',
      benefits: ['Identify vulnerabilities', 'Compliance reporting', 'Risk assessment', 'Actionable insights']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Incident Response',
      description: 'Rapid incident response and recovery services with 24/7 security operations center.',
      benefits: ['Quick response time', 'Minimal damage', 'Expert guidance', 'Business continuity']
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards including SOC2, HIPAA, PCI-DSS, and GDPR.',
      benefits: ['Regulatory compliance', 'Audit readiness', 'Risk mitigation', 'Peace of mind']
    }
  ];

  const securityServices = [
    {
      name: 'Network Security Assessment',
      description: 'Comprehensive evaluation of your network security posture',
      price: '$2,499',
      duration: '1-2 weeks',
      features: ['Vulnerability scanning', 'Penetration testing', 'Security audit', 'Detailed report']
    },
    {
      name: 'Managed Security Services',
      description: '24/7 security monitoring and management',
      price: '$1,999/month',
      duration: 'Ongoing',
      features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Security updates']
    },
    {
      name: 'Security Implementation',
      description: 'Complete security infrastructure setup and configuration',
      price: '$4,999',
      duration: '2-4 weeks',
      features: ['Firewall setup', 'VPN configuration', 'Security policies', 'Staff training']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'SecureTech Corp',
      role: 'CISO',
      content: 'Network security implementation was flawless. Our security posture improved dramatically with zero downtime.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'DataGuard Inc',
      role: 'IT Director',
      content: 'The managed security services provide peace of mind. 24/7 monitoring caught threats we would have missed.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'CyberSafe Solutions',
      role: 'VP of Technology',
      content: 'Compliance management made our audit process smooth. Highly professional and thorough service.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Network Security Services - Zion Tech Group</title>
        <meta name="description" content="Advanced network security services with AI-powered threat detection, 24/7 monitoring, and comprehensive compliance management." />
        <meta name="keywords" content="network security, cybersecurity, threat detection, firewall management, security auditing, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/network-security" />
      </Head>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Network Security Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced Cybersecurity with AI-Powered Protection
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Protect your network with enterprise-grade security solutions. Our AI-powered threat detection, 
              24/7 monitoring, and comprehensive compliance management ensure your business stays secure 
              and compliant with industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Security Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Our Network Security Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Protection</h3>
              <p className="text-gray-300">Advanced threat detection using machine learning and behavioral analysis.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous network monitoring with real-time alerts and rapid response.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
              <p className="text-gray-300">Meet SOC2, HIPAA, PCI-DSS, and GDPR requirements with confidence.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Comprehensive Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <div className="text-sm text-gray-400 mb-6">Duration: {service.duration}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full text-center py-3 px-6 rounded-lg font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Protect your business with enterprise-grade network security solutions. Get a free security assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NetworkSecurityPage;