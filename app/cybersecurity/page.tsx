import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Globe, Database } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and risks",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Compliance Reviews"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization across your organization",
      features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Privileged Access Management"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Threat Detection & Response",
      description: "Advanced monitoring and rapid response to security threats",
      features: ["SIEM Solutions", "Threat Hunting", "Incident Response", "Security Monitoring"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Protection",
      description: "Comprehensive data security and privacy protection solutions",
      features: ["Data Encryption", "Data Loss Prevention", "Privacy Compliance", "Backup & Recovery"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const threatTypes = [
    {
      name: "Ransomware",
      description: "Protect against ransomware attacks with advanced detection and prevention",
      icon: "🔒",
      severity: "High"
    },
    {
      name: "Phishing",
      description: "Combat phishing attempts with email security and user training",
      icon: "🎣",
      severity: "Medium"
    },
    {
      name: "DDoS Attacks",
      description: "Defend against distributed denial-of-service attacks",
      icon: "⚡",
      severity: "High"
    },
    {
      name: "Insider Threats",
      description: "Monitor and prevent internal security risks",
      icon: "👤",
      severity: "Medium"
    },
    {
      name: "Advanced Persistent Threats",
      description: "Detect and respond to sophisticated long-term attacks",
      icon: "🕵️",
      severity: "Critical"
    },
    {
      name: "Zero-Day Exploits",
      description: "Protect against unknown vulnerabilities and exploits",
      icon: "⚠️",
      severity: "High"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Security, availability, and confidentiality controls",
      icon: "🏢"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      icon: "🌍"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      icon: "🇪🇺"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      icon: "🏥"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      icon: "💳"
    },
    {
      name: "NIST",
      description: "National Institute of Standards and Technology framework",
      icon: "🇺🇸"
    }
  ];

  const stats = [
    {
      number: "99.9%",
      label: "Threat Detection Rate",
      description: "Advanced AI-powered threat detection"
    },
    {
      number: "24/7",
      label: "Security Monitoring",
      description: "Round-the-clock security operations center"
    },
    {
      number: "< 5min",
      label: "Response Time",
      description: "Average incident response time"
    },
    {
      number: "100%",
      label: "Compliance",
      description: "Meet all regulatory requirements"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Protect your business with our comprehensive cybersecurity services including threat detection, compliance, and security assessments." />
        <meta name="keywords" content="cybersecurity, security services, threat detection, compliance, data protection, security assessment" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business from evolving cyber threats with our comprehensive security solutions. 
                Stay ahead of attackers with cutting-edge technology and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Security Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Security Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from all angles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Threats We Protect Against</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our security solutions defend against the most sophisticated cyber threats targeting businesses today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threatTypes.map((threat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{threat.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      threat.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                      threat.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{threat.name}</h3>
                  <p className="text-gray-600">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance & Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ensure your business meets all regulatory requirements with our compliance expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{framework.name}</h3>
                  <p className="text-gray-600">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Security Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results in protecting businesses from cyber threats and ensuring compliance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-red-500 mb-4">{stat.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Security Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to securing your business and maintaining ongoing protection.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
                <p className="text-gray-600">Comprehensive security assessment and risk analysis.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
                <p className="text-gray-600">Develop customized security strategy and implementation plan.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">Deploy security solutions and establish monitoring systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring</h3>
                <p className="text-gray-600">Continuous monitoring and ongoing security management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Let our experts help you build a robust defense against cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Download Security Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;