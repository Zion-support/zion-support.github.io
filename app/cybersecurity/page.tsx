import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and weaknesses',
      price: 'Starting at $2,500/test',
      features: [
        'Network penetration testing',
        'Web application testing',
        'Mobile app security',
        'Social engineering tests',
        'Detailed reporting'
      ],
      icon: '🔍',
      popular: true
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation of your IT infrastructure and applications',
      price: 'Starting at $3,000/assessment',
      features: [
        'Vulnerability scanning',
        'Risk assessment',
        'Compliance review',
        'Security recommendations',
        'Remediation planning'
      ],
      icon: '📊',
      popular: true
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents and breaches',
      price: 'Starting at $5,000/incident',
      features: [
        '24/7 incident response',
        'Forensic analysis',
        'Containment strategies',
        'Recovery planning',
        'Post-incident review'
      ],
      icon: '🚨',
      popular: false
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous monitoring and threat detection for your systems',
      price: 'Starting at $2,000/month',
      features: [
        'SIEM implementation',
        'Threat detection',
        'Log analysis',
        'Alert management',
        'Incident escalation'
      ],
      icon: '👁️',
      popular: false
    },
    {
      title: 'Compliance Management',
      description: 'Help achieve and maintain compliance with security standards',
      price: 'Starting at $4,000/month',
      features: [
        'SOC 2 compliance',
        'ISO 27001 certification',
        'GDPR compliance',
        'HIPAA compliance',
        'Audit support'
      ],
      icon: '📋',
      popular: false
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness and technical training programs',
      price: 'Starting at $1,500/session',
      features: [
        'Security awareness training',
        'Phishing simulation',
        'Technical training',
        'Certification programs',
        'Ongoing education'
      ],
      icon: '🎓',
      popular: false
    }
  ];

  const threats = [
    {
      title: 'Ransomware',
      description: 'Malicious software that encrypts data and demands payment',
      icon: '🔒',
      impact: 'High',
      prevention: ['Regular backups', 'Email filtering', 'User training', 'Patch management']
    },
    {
      title: 'Phishing',
      description: 'Social engineering attacks to steal credentials',
      icon: '🎣',
      impact: 'High',
      prevention: ['Email security', 'User training', 'Multi-factor authentication', 'DNS filtering']
    },
    {
      title: 'Data Breaches',
      description: 'Unauthorized access to sensitive information',
      icon: '💥',
      impact: 'Critical',
      prevention: ['Access controls', 'Encryption', 'Monitoring', 'Data classification']
    },
    {
      title: 'Insider Threats',
      description: 'Security risks from within the organization',
      icon: '👤',
      impact: 'Medium',
      prevention: ['Background checks', 'Access monitoring', 'User behavior analytics', 'Privileged access management']
    },
    {
      title: 'DDoS Attacks',
      description: 'Distributed denial of service attacks',
      icon: '⚡',
      impact: 'Medium',
      prevention: ['DDoS protection', 'Load balancing', 'CDN services', 'Traffic filtering']
    },
    {
      title: 'Zero-Day Exploits',
      description: 'Attacks using unknown vulnerabilities',
      icon: '🕳️',
      impact: 'High',
      prevention: ['Threat intelligence', 'Behavioral analysis', 'Network segmentation', 'Rapid patching']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Protect your business from cyber threats with comprehensive security solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Cybersecurity Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cyber attacks are increasing in frequency and sophistication. A single breach can 
                cost millions in damages, regulatory fines, and reputational harm. Our comprehensive 
                security solutions protect your business from evolving threats.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Protect Sensitive Data</h3>
                    <p className="text-gray-600">Safeguard customer and business data from unauthorized access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Maintain Compliance</h3>
                    <p className="text-gray-600">Meet regulatory requirements and industry standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Monitor Threats</h3>
                    <p className="text-gray-600">Continuous monitoring and threat detection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Statistics</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600">$4.45M</div>
                    <div className="text-sm text-gray-600">Average cost of a data breach</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600">287 days</div>
                    <div className="text-sm text-gray-600">Average time to identify a breach</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600">83%</div>
                    <div className="text-sm text-gray-600">Of organizations have been breached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive security solutions to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-red-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Cyber Threats
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the threats is the first step in protecting your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{threat.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{threat.title}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      threat.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                      threat.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {threat.impact} Impact
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prevention:</h4>
                  <ul className="space-y-1">
                    {threat.prevention.map((prevention, preventionIndex) => (
                      <li key={preventionIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {prevention}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Framework
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive approach to cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600">Identify vulnerabilities and security gaps</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Protect</h3>
              <p className="text-gray-600">Implement security controls and measures</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detect</h3>
              <p className="text-gray-600">Monitor for threats and security incidents</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Respond</h3>
              <p className="text-gray-600">Rapid response and recovery from incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading cybersecurity expertise with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600">CISSP, CISM, and other security certifications</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successfully protected 500+ organizations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Round-the-clock threat detection and response</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">Quick incident response and recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact our cybersecurity experts for a free security assessment and custom protection plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecurityPage;