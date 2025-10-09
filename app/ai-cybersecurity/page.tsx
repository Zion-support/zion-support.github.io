import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle, Zap, Brain, Target, BarChart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'AI Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with real-time monitoring, automated response, and behavioral analysis.',
      icon: '🛡️',
      price: '$1,999/month',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Threat intelligence', 'Incident response', 'Forensic analysis'],
      benefits: ['Detect threats 10x faster', 'Prevent 95% of attacks', 'Reduce false positives', 'Automate security operations'],
      marketPrice: '$3,000-8,000/month',
      category: 'Threat Detection',
      technologies: ['Machine Learning', 'Behavioral Analysis', 'Threat Intelligence', 'SIEM', 'SOAR'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Vulnerability Assessment',
      description: 'Intelligent vulnerability scanning with automated assessment, prioritization, and remediation recommendations.',
      icon: '🔍',
      price: '$1,499/month',
      features: ['Automated scanning', 'Vulnerability prioritization', 'Risk assessment', 'Remediation guidance', 'Compliance checking', 'Continuous monitoring'],
      benefits: ['Identify vulnerabilities faster', 'Prioritize critical issues', 'Reduce security gaps', 'Ensure compliance'],
      marketPrice: '$2,500-6,000/month',
      category: 'Vulnerability Management',
      technologies: ['Vulnerability Scanners', 'AI Analysis', 'Risk Assessment', 'Compliance Tools', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Security Operations Center (SOC)',
      description: '24/7 AI-powered security monitoring with intelligent alerting, incident response, and threat hunting.',
      icon: '🏢',
      price: '$4,999/month',
      features: ['24/7 monitoring', 'AI-powered alerting', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
      benefits: ['24/7 security coverage', 'Faster incident response', 'Proactive threat hunting', 'Reduced security risks'],
      marketPrice: '$8,000-20,000/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'AI/ML', 'Threat Intelligence', 'Security Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Security',
      description: 'Advanced email security with AI-powered phishing detection, spam filtering, and email threat analysis.',
      icon: '📧',
      price: '$799/month',
      features: ['Phishing detection', 'Spam filtering', 'Email threat analysis', 'URL scanning', 'Attachment analysis', 'User training'],
      benefits: ['Block 99.9% of threats', 'Reduce phishing attacks', 'Protect sensitive data', 'Educate users'],
      marketPrice: '$1,200-3,000/month',
      category: 'Email Security',
      technologies: ['AI/ML', 'Email Security', 'Threat Intelligence', 'User Training', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Network Security',
      description: 'Intelligent network security with AI-powered monitoring, anomaly detection, and automated threat response.',
      icon: '🌐',
      price: '$1,299/month',
      features: ['Network monitoring', 'Anomaly detection', 'Traffic analysis', 'Threat response', 'Firewall management', 'VPN security'],
      benefits: ['Detect network threats', 'Prevent intrusions', 'Optimize network security', 'Automate responses'],
      marketPrice: '$2,000-5,000/month',
      category: 'Network Security',
      technologies: ['Network Monitoring', 'AI/ML', 'Firewall Management', 'VPN', 'Traffic Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Management',
      description: 'Automated compliance management with AI-powered monitoring, reporting, and regulatory adherence.',
      icon: '📋',
      price: '$1,799/month',
      features: ['Compliance monitoring', 'Automated reporting', 'Policy management', 'Risk assessment', 'Audit preparation', 'Regulatory updates'],
      benefits: ['Ensure compliance', 'Reduce audit costs', 'Automate reporting', 'Stay updated on regulations'],
      marketPrice: '$3,000-7,000/month',
      category: 'Compliance',
      technologies: ['Compliance Tools', 'AI/ML', 'Policy Management', 'Risk Assessment', 'Reporting Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: securityServices.length },
    { name: 'Threat Detection', count: securityServices.filter(s => s.category === 'Threat Detection').length },
    { name: 'Vulnerability Management', count: securityServices.filter(s => s.category === 'Vulnerability Management').length },
    { name: 'SOC Services', count: securityServices.filter(s => s.category === 'SOC Services').length },
    { name: 'Email Security', count: securityServices.filter(s => s.category === 'Email Security').length },
    { name: 'Network Security', count: securityServices.filter(s => s.category === 'Network Security').length },
    { name: 'Compliance', count: securityServices.filter(s => s.category === 'Compliance').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for threat detection, vulnerability assessment, and security operations. Protect your business with intelligent security." />
        <meta name="keywords" content="ai cybersecurity, threat detection, security operations, vulnerability assessment, ai security, cyber defense" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with advanced AI-powered cybersecurity solutions that detect threats, prevent attacks, and ensure compliance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-gray-300">Attack Prevention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$799</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Detection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our AI Cybersecurity Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for a free security assessment and custom cybersecurity solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;