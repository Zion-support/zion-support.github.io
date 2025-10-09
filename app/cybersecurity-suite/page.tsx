'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle, Users, Clock, Phone, Mail } from 'lucide-react';

const CybersecuritySuitePage: React.FC = () => {
  const securityServices = [
    {
      title: 'Advanced Threat Detection & Response',
      description: 'AI-powered threat detection with real-time monitoring, automated response, and 24/7 security operations center.',
      icon: '🛡️',
      price: '$3,500/month',
      features: ['AI threat detection', 'Real-time monitoring', 'Automated response', 'SOC services', 'Incident response', 'Threat hunting'],
      benefits: ['Detect threats 10x faster', 'Reduce response time by 80%', 'Prevent 99.9% of attacks', '24/7 protection'],
      marketPrice: '$8,000-25,000/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'EDR', 'XDR', 'AI/ML', 'SOAR', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification, network segmentation, and continuous monitoring.',
      icon: '🔐',
      price: '$2,800/month',
      features: ['Identity verification', 'Network segmentation', 'Device trust', 'Application security', 'Data protection', 'Continuous monitoring'],
      benefits: ['Eliminate trust assumptions', 'Reduce attack surface by 90%', 'Improve compliance', 'Enhanced security posture'],
      marketPrice: '$5,000-15,000/month',
      category: 'Zero Trust',
      technologies: ['Okta', 'Azure AD', 'Cisco', 'Palo Alto', 'Zscaler', 'Custom Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security with compliance automation, data protection, and multi-cloud security management.',
      icon: '☁️',
      price: '$2,200/month',
      features: ['Cloud security posture', 'Compliance automation', 'Data encryption', 'Access management', 'Audit logging', 'Risk assessment'],
      benefits: ['Ensure cloud compliance', 'Protect sensitive data', 'Reduce compliance costs', 'Automate security controls'],
      marketPrice: '$4,000-12,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'Prisma Cloud', 'CloudTrail', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Regular security assessments with automated vulnerability scanning, penetration testing, and security recommendations.',
      icon: '🔍',
      price: '$1,800/month',
      features: ['Automated scanning', 'Manual testing', 'Vulnerability assessment', 'Security recommendations', 'Compliance testing', 'Remediation support'],
      benefits: ['Identify vulnerabilities early', 'Meet compliance requirements', 'Improve security posture', 'Reduce risk exposure'],
      marketPrice: '$3,000-8,000/month',
      category: 'Security Testing',
      technologies: ['Nessus', 'OpenVAS', 'Burp Suite', 'OWASP ZAP', 'Custom Tools', 'Manual Testing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Awareness Training',
      description: 'Comprehensive security training program with phishing simulation, awareness campaigns, and compliance training.',
      icon: '🎓',
      price: '$1,200/month',
      features: ['Phishing simulation', 'Security awareness', 'Compliance training', 'Incident reporting', 'Progress tracking', 'Custom content'],
      benefits: ['Reduce human error by 70%', 'Improve security culture', 'Meet compliance requirements', 'Lower security incidents'],
      marketPrice: '$2,000-5,000/month',
      category: 'Training',
      technologies: ['KnowBe4', 'Proofpoint', 'Custom LMS', 'Phishing Simulators', 'Training Content', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response with digital forensics, evidence collection, and post-incident analysis and improvement.',
      icon: '🚨',
      price: '$2,500/month',
      features: ['Incident response', 'Digital forensics', 'Evidence collection', 'Root cause analysis', 'Recovery planning', 'Lessons learned'],
      benefits: ['Minimize incident impact', 'Faster recovery times', 'Improve security posture', 'Compliance with regulations'],
      marketPrice: '$4,000-12,000/month',
      category: 'Incident Response',
      technologies: ['Splunk', 'Wireshark', 'Volatility', 'EnCase', 'Custom Tools', 'Forensic Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'Threat Detection', count: securityServices.filter(s => s.category === 'Threat Detection').length },
    { name: 'Zero Trust', count: securityServices.filter(s => s.category === 'Zero Trust').length },
    { name: 'Cloud Security', count: securityServices.filter(s => s.category === 'Cloud Security').length },
    { name: 'Security Testing', count: securityServices.filter(s => s.category === 'Security Testing').length },
    { name: 'Training', count: securityServices.filter(s => s.category === 'Training').length },
    { name: 'Incident Response', count: securityServices.filter(s => s.category === 'Incident Response').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="Cybersecurity Suite - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, zero trust architecture, cloud security, and incident response. Protect your business with advanced security technology."
        keywords={['cybersecurity', 'threat detection', 'zero trust', 'cloud security', 'penetration testing', 'incident response', 'security compliance']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity-suite"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cybersecurity Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure compliance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <span
                key={category.name}
                className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30"
              >
                {category.name} ({category.count})
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <span className="text-red-400 text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-red-400 text-xs rounded border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-red-400 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-400">{service.contactInfo}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cybersecurity Suite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Protection</h3>
              <p className="text-gray-300">Cutting-edge security technology to protect against the latest threats</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock security monitoring and rapid incident response</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified security professionals with years of experience</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free security assessment and customized protection plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-slate-800 text-red-400 font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center border border-red-500/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CybersecuritySuitePage;
