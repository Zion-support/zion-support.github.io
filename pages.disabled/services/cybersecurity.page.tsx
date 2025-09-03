import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Users, Globe, Database, Zap } from 'lucide-react';
import Link from 'next/link';

const CybersecurityPage: NextPage = () => {
  const securityServices = [;
    {
      icon: <Shield className="w-8 h-8" />,;
      title: 'Security Assessment',;
      description: 'Comprehensive security audits to identify vulnerabilities and risks',;
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Review']},;
    {
      icon: <Lock className="w-8 h-8" />,;
      title: 'Identity & Access Management',;
      description: 'Secure user authentication and authorization systems',;
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Privileged Access Management']},;
    {
      icon: <Eye className="w-8 h-8" />,;
      title: 'Security Monitoring',;
      description: '24/7 monitoring and threat detection services',;
      features: ['SIEM Implementation', 'Threat Detection', 'Incident Response', 'Security Analytics']},;
    {
      icon: <Database className="w-8 h-8" />,;
      title: 'Data Protection',;
      description: 'Comprehensive data security and privacy solutions',;
      features: ['Data Encryption', 'Backup & Recovery', 'Data Loss Prevention', 'Privacy Compliance']}
  ];

  const complianceFrameworks = [;
    {
      name: 'SOC 2',;
      description: 'Security, availability, and confidentiality controls',;
      icon: <CheckCircle className="w-6 h-6" />},;
    {
      name: 'ISO 27001',;
      description: 'Information security management system',;
      icon: <CheckCircle className="w-6 h-6" />},;
    {
      name: 'GDPR',;
      description: 'General Data Protection Regulation compliance',;
      icon: <CheckCircle className="w-6 h-6" />},;
    {
      name: 'HIPAA',;
      description: 'Healthcare information privacy and security',;
      icon: <CheckCircle className="w-6 h-6" />},;
    {
      name: 'PCI DSS',;
      description: 'Payment card industry data security standards',;
      icon: <CheckCircle className="w-6 h-6" />},;
    {
      name: 'NIST',;
      description: 'National Institute of Standards and Technology',;
      icon: <CheckCircle className="w-6 h-6" />}
  ];

  const threats = [;
    {
      icon: <AlertTriangle className="w-8 h-8" />,;
      title: 'Ransomware Protection',;
      description: 'Advanced protection against ransomware attacks and data encryption threats'},;
    {
      icon: <Users className="w-8 h-8" />,;
      title: 'Phishing Prevention',;
      description: 'Employee training and technical controls to prevent phishing attacks'},;
    {
      icon: <Globe className="w-8 h-8" />,;
      title: 'DDoS Mitigation',;
      description: 'Protection against distributed denial-of-service attacks'},;
    {
      icon: <Database className="w-8 h-8" />,;
      title: 'Data Breach Prevention',;
      description: 'Comprehensive measures to prevent unauthorized data access'}
  ];

  const benefits = [;
    {
      icon: <Shield className="w-8 h-8" />,;
      title: 'Enhanced Security',;
      description: 'Protect your business from cyber threats with enterprise-grade security solutions'},;
    {
      icon: <CheckCircle className="w-8 h-8" />,;
      title: 'Compliance',;
      description: 'Meet regulatory requirements and industry standards with our compliance solutions'},;
    {
      icon: <Zap className="w-8 h-8" />,;
      title: 'Peace of Mind',;
      description: '24/7 monitoring and support give you confidence in your security posture'},;
    {
      icon: <Users className="w-8 h-8" />,;
      title: 'Expert Support',;
      description: 'Access to certified security professionals and incident response teams'}
  ];

  return (;
    <MainLayout>;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">Cybersecurity</span> Solutions;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Protect your business with comprehensive cybersecurity solutions and expert threat management;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">;
              Get Security Assessment;
            </Link>;
            <Link href="/case-studies" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Case Studies;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* Security Services */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Our Security Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive cybersecurity solutions to protect your business from evolving threats;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {securityServices.map((service, index) => (;
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">;
                <div className="text-red-500 mb-4">;
                  {service.icon}
                </div>;
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>;
                <p className="text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
                      <span className="text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Threat Protection */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Threat Protection</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Advanced protection against the most common and dangerous cyber threats;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {threats.map((threat, index) => (;
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">;
                <div className="text-red-500 mb-4 flex justify-center">;
                  {threat.icon}
                </div>;
                <h3 className="text-xl font-semibold mb-3">{threat.title}</h3>;
                <p className="text-gray-600 text-sm">{threat.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Compliance Frameworks */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Compliance & Standards</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We help you meet industry standards and regulatory requirements;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {complianceFrameworks.map((framework, index) => (;
              <div key={index} className="bg-gray-50 p-6 rounded-lg">;
                <div className="flex items-center mb-4">;
                  <div className="text-green-500 mr-3">;
                    {framework.icon}
                  </div>;
                  <h3 className="text-xl font-semibold">{framework.name}</h3>;
                </div>;
                <p className="text-gray-600">{framework.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Benefits */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Security Solutions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive protection with expert support and proven results;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">;
                <div className="text-zion-cyan mb-4 flex justify-center">;
                  {benefit.icon}
                </div>;
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Secure Your Business Today</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Don't wait for a security breach. Let our experts help you build a robust cybersecurity posture;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link href="/pricing" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default CybersecurityPage;
import React from 'react';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import SEOHead from '../../src/components/SEOHead';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, Users, Zap, Globe, Database, Network, Target, Award, Clock, Brain, Cloud, Server, FileText, BarChart3 } from 'lucide-react';

const Cybersecurity = () => {
  const structuredData = {
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Cybersecurity Services - Zion Tech Group",;
    "url": "https://ziontechgroup.com/services/cybersecurity",;
    "description": "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security monitoring",;
    "publisher": {
      "@type": "Organization",;
      "name": "Zion Tech Group",;
      "url": "https://ziontechgroup.com"}
  }
  const services = [;
    {
      title: 'Threat Detection & Response',;
      description: 'Advanced threat detection and incident response services',;
      icon: AlertTriangle,;
      features: [;
        '24/7 Security Monitoring',;
        'Real-time Threat Detection',;
        'Incident Response Planning',;
        'Forensic Analysis',;
        'Threat Intelligence';
      ],;
      pricing: 'Starting at $5,000/month'},;
    {
      title: 'Vulnerability Assessment',;
      description: 'Comprehensive security assessments and penetration testing',;
      icon: Target,;
      features: [;
        'Network Penetration Testing',;
        'Web Application Security',;
        'Mobile Security Testing',;
        'Social Engineering Tests',;
        'Compliance Audits';
      ],;
      pricing: 'Starting at $3,000/assessment'},;
    {
      title: 'Security Architecture',;
      description: 'Design and implement secure infrastructure and systems',;
      icon: Shield,;
      features: [;
        'Zero Trust Architecture',;
        'Identity & Access Management',;
        'Network Security Design',;
        'Cloud Security Implementation',;
        'Security Policy Development';
      ],;
      pricing: 'Starting at $10,000/project'},;
    {
      title: 'Compliance & Governance',;
      description: 'Ensure compliance with industry standards and regulations',;
      icon: FileText,;
      features: [;
        'SOC 2 Compliance',;
        'ISO 27001 Implementation',;
        'GDPR Compliance',;
        'HIPAA Security',;
        'PCI DSS Compliance';
      ],;
      pricing: 'Starting at $7,500/project'},;
    {
      title: 'Security Training',;
      description: 'Comprehensive security awareness and training programs',;
      icon: Users,;
      features: [;
        'Security Awareness Training',;
        'Phishing Simulation',;
        'Incident Response Training',;
        'Executive Security Briefings',;
        'Technical Security Training';
      ],;
      pricing: 'Starting at $2,500/session'},;
    {
      title: 'Managed Security Services',;
      description: 'Ongoing security management and monitoring services',;
      icon: Server,;
      features: [;
        'Managed Firewall Services',;
        'Security Information Management',;
        'Log Management & Analysis',;
        'Patch Management',;
        'Security Operations Center';
      ],;
      pricing: 'Starting at $8,000/month'}
  ];

  const stats = [;
    { number: '99.9%', label: 'Threat Detection Rate' },;
    { number: '< 15 min', label: 'Average Response Time' },;
    { number: '500+', label: 'Security Assessments' },;
    { number: '24/7', label: 'Monitoring Coverage' }
  ];

  const complianceStandards = [;
    'SOC 2 Type II',;
    'ISO 27001',;
    'GDPR',;
    'HIPAA',;
    'PCI DSS',;
    'NIST Framework',;
    'CIS Controls',;
    'OWASP Top 10';
  ];

  return (;
    <>;
      <SEOHead ;
        title="Cybersecurity Services - Zion Tech Group";
        description="Comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, and compliance management.";
        keywords="cybersecurity, security services, threat detection, vulnerability assessment, penetration testing, compliance, SOC 2, ISO 27001";
        structuredData={structuredData}
      />;
      <Navigation />;

      <main className="min-h-screen bg-gray-900 text-white">;
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Advanced;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Cybersecurity</span>;
              </h1>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Protect your business with our comprehensive cybersecurity services. ;
                From threat detection to compliance management, we keep your digital assets secure.;
              </p>;
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">;
                <div className="flex items-center">;
                  <Shield className="w-4 h-4 text-cyan-400 mr-2" />;
                  24/7 Protection;
                </div>;
                <div className="flex items-center">;
                  <Lock className="w-4 h-4 text-cyan-400 mr-2" />;
                  Enterprise Security;
                </div>;
                <div className="flex items-center">;
                  <Eye className="w-4 h-4 text-cyan-400 mr-2" />;
                  Real-time Monitoring;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {stats.map((stat, index) => (;
                <div key={index} className="text-center">;
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>;
                  <div className="text-gray-300">{stat.label}</div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Services Section */}
        <section className="py-16">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">Our Cybersecurity Services</h2>;
              <p className="text-gray-300 max-w-2xl mx-auto">;
                Comprehensive security solutions tailored to protect your business from evolving threats;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services.map((service, index) => (;
                <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">;
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6">;
                    <service.icon className="w-8 h-8 text-cyan-400" />;
                  </div>;

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>;
                  <p className="text-gray-300 mb-6">{service.description}</p>;

                  <ul className="space-y-3 mb-6">;
                    {service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center">;
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                        <span className="text-gray-300 text-sm">{feature}</span>;
                      </li>;
                    ))}
                  </ul>;

                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>;

                  <Link;
                    href="/contact";
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">;
                    Get Started;
                    <ArrowRight className="w-5 h-5 ml-2" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Compliance Section */}
        <section className="py-16 bg-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">Compliance Standards</h2>;
              <p className="text-gray-300 max-w-2xl mx-auto">;
                We help you meet and maintain compliance with industry standards and regulations;
              </p>;
            </div>;

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
              {complianceStandards.map((standard, index) => (;
                <div key={index} className="bg-gray-700 rounded-lg p-6 text-center">;
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Award className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <h3 className="font-semibold">{standard}</h3>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Process Section */}
        <section className="py-16">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">Our Security Process</h2>;
              <p className="text-gray-300 max-w-2xl mx-auto">;
                A systematic approach to securing your business;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl font-bold text-cyan-400">1</span>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>;
                <p className="text-gray-300 text-sm">;
                  Comprehensive security assessment and risk analysis;
                </p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl font-bold text-cyan-400">2</span>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>;
                <p className="text-gray-300 text-sm">;
                  Develop customized security strategy and roadmap;
                </p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl font-bold text-cyan-400">3</span>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>;
                <p className="text-gray-300 text-sm">;
                  Deploy security solutions and monitoring systems;
                </p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <span className="text-2xl font-bold text-cyan-400">4</span>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Monitoring</h3>;
                <p className="text-gray-300 text-sm">;
                  Continuous monitoring and security management;
                </p>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>;
            <p className="text-xl mb-8 text-cyan-100">;
              Don&apos;t wait for a security breach. Get comprehensive protection now.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                href="/contact";
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Get Security Assessment;
              </Link>;
              <Link;
                href="/contact";
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
                Contact Security Expert;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;

      <Footer />;
    </>;
  )}
export default Cybersecurity;
