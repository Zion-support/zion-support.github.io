import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle, Target, BarChart, Brain, Settings, Globe, Database } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence', 'Incident investigation'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 90%', 'Minimize security incidents'],
      marketPrice: '$8,000-25,000/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML Security']
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      icon: '🔐',
      price: 'Starting at $6,500/month',
      features: ['Identity verification', 'Micro-segmentation', 'Least privilege access', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Eliminate lateral movement', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$12,000-40,000/month',
      category: 'Zero Trust',
      technologies: ['Identity Management', 'Network Segmentation', 'Policy Engines', 'Access Controls']
    },
    {
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities and assess security posture.',
      icon: '🔍',
      price: 'Starting at $3,500/assessment',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security testing', 'Compliance testing'],
      benefits: ['Identify security gaps', 'Prevent data breaches', 'Ensure compliance'],
      marketPrice: '$6,000-20,000/assessment',
      category: 'Security Testing',
      technologies: ['OWASP', 'NIST', 'OSSTMM', 'Custom Tools', 'Automated Scanners']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts.',
      icon: '🏢',
      price: 'Starting at $8,000/month',
      features: ['24/7 monitoring', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
      benefits: ['Round-the-clock protection', 'Faster incident response', 'Proactive threat hunting'],
      marketPrice: '$15,000-50,000/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Incident Management']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security solutions with compliance monitoring and data protection.',
      icon: '☁️',
      price: 'Starting at $5,500/month',
      features: ['Cloud security assessment', 'Compliance monitoring', 'Data encryption', 'Access controls', 'Security policies'],
      benefits: ['Secure cloud environments', 'Meet compliance requirements', 'Protect sensitive data'],
      marketPrice: '$10,000-30,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'CSPM', 'CASB']
    },
    {
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics to minimize damage and recover from security breaches.',
      icon: '🚨',
      price: 'Starting at $7,500/incident',
      features: ['Incident containment', 'Digital forensics', 'Evidence collection', 'Recovery planning', 'Post-incident analysis'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Prevent future incidents'],
      marketPrice: '$10,000-50,000/incident',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Incident Management', 'Evidence Collection', 'Recovery Tools']
    }
  ];

  const categories = [...new Set(securityServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity services including threat detection, zero trust architecture, penetration testing, and 24/7 SOC monitoring." />
        <meta name="keywords" content="cybersecurity, threat detection, zero trust, penetration testing, SOC, incident response" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
                Protect your business with advanced cybersecurity solutions and 24/7 threat monitoring
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

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cybersecurity Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Expert cybersecurity professionals with proven track record of protecting businesses from cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Protection</h3>
                <p className="text-gray-600">Cutting-edge security technologies and AI-powered threat detection</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Round-the-clock security monitoring and rapid incident response</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Meet industry standards and regulatory compliance requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">99% threat prevention rate with rapid response times</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map((category) => {
          const categoryServices = securityServices.filter(service => service.category === category);
          return (
            <section key={category} className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category} Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    Specialized {category.toLowerCase()} solutions for comprehensive security protection
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-red-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Get Security Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive security expertise across all major platforms and threat vectors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Detection</h3>
                <p className="text-gray-600">AI-powered threat detection and behavioral analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Trust</h3>
                <p className="text-gray-600">Identity verification and micro-segmentation architecture</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC Services</h3>
                <p className="text-gray-600">24/7 security monitoring and incident response</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response</h3>
                <p className="text-gray-600">Rapid response and digital forensics capabilities</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Security</h3>
                <p className="text-gray-600">Comprehensive cloud security and compliance solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">Meet industry standards and regulatory requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Contact our cybersecurity experts for a free security assessment and custom protection strategy
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
            <div className="mt-8 text-sm text-red-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;