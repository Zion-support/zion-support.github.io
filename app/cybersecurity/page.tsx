import React from 'react';
import { CheckCircle, Shield, Eye, Lock, AlertTriangle, ArrowRight, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audit to identify vulnerabilities and risks in your systems.',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance audit'],
      pricing: 'Starting at $2,000',
      duration: '1-2 weeks'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and threat detection for your infrastructure.',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts'],
      pricing: 'Starting at $1,500/month',
      duration: 'Ongoing'
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-500" />,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection solutions to secure your sensitive information.',
      features: ['Data encryption', 'Access control', 'Backup security', 'Compliance management'],
      pricing: 'Starting at $1,200/month',
      duration: 'Ongoing'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Incident Response',
      description: 'Rapid response and recovery services when security incidents occur.',
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Post-incident review'],
      pricing: 'Starting at $3,000',
      duration: 'As needed'
    }
  ];

  const threats = [
    {
      title: 'Ransomware',
      description: 'Protect against ransomware attacks with advanced detection and prevention systems.',
      icon: '🦠'
    },
    {
      title: 'Phishing',
      description: 'Combat phishing attempts with email security and user training programs.',
      icon: '🎣'
    },
    {
      title: 'DDoS Attacks',
      description: 'Defend against distributed denial-of-service attacks with traffic filtering.',
      icon: '⚡'
    },
    {
      title: 'Data Breaches',
      description: 'Prevent unauthorized access to sensitive data with multi-layered security.',
      icon: '🔒'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including security assessment, monitoring, data protection, and incident response. Protect your business from cyber threats." />
        <meta name="keywords" content="cybersecurity, security assessment, threat monitoring, data protection, incident response, cyber security" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business from evolving cyber threats with our comprehensive security solutions. 
              Stay ahead of attackers with expert cybersecurity services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Threat Landscape */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Cyber Threats</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stay protected against the most common cybersecurity threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">{threat.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{threat.title}</h3>
                  <p className="text-gray-300 text-sm">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't Wait for a Breach</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Protect your business today with our comprehensive cybersecurity solutions. 
                Contact us for a free security assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Security Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CybersecurityPage;
