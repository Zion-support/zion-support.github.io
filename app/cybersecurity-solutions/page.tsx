'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Globe, Database, Users, Settings } from 'lucide-react';

const CybersecuritySolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach covering all attack vectors',
      benefits: ['Network security', 'Endpoint protection', 'Data encryption']
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and threat detection with instant response',
      benefits: ['Real-time alerts', 'Threat hunting', 'Incident response']
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      benefits: ['GDPR compliance', 'HIPAA support', 'SOC 2 Type II']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence and proactive defense',
      benefits: ['Threat research', 'Vulnerability assessment', 'Risk analysis']
    }
  ];

  const solutions = [
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure from external threats',
      icon: '🌐',
      features: ['Firewall management', 'Intrusion detection', 'VPN solutions']
    },
    {
      title: 'Endpoint Security',
      description: 'Secure all devices and endpoints in your organization',
      icon: '💻',
      features: ['Antivirus protection', 'Device management', 'Access control']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data with encryption and access controls',
      icon: '🔒',
      features: ['Data encryption', 'Backup solutions', 'Leak prevention']
    },
    {
      title: 'Identity Management',
      description: 'Secure user authentication and access management',
      icon: '👤',
      features: ['Multi-factor auth', 'Single sign-on', 'Privileged access']
    },
    {
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices',
      icon: '🎓',
      features: ['Phishing simulation', 'Security awareness', 'Compliance training']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      icon: '🚨',
      features: ['24/7 support', 'Forensic analysis', 'Recovery planning']
    }
  ];

  const securityStats = [
    { metric: '99.9%', description: 'Threat detection accuracy' },
    { metric: '< 1 min', description: 'Average response time' },
    { metric: '24/7', description: 'Monitoring coverage' },
    { metric: '100%', description: 'Compliance success rate' }
  ];

  return (
    <>
      <Helmet>
        </Helmet><title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />
        <meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div><div className="container mx-auto px-4 py-16">
          </div><div className="text-center mb-16">
            </div><h1 className="text-5xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with comprehensive cybersecurity solutions including 
              threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            </div><div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection systems to identify and respond to security threats in real-time.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• Real-time monitoring</li>
                <li>• Behavioral analysis</li>
                <li>• Threat intelligence</li>
                <li>• Automated response</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive vulnerability scanning and assessment to identify security weaknesses.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• Network scanning</li>
                <li>• Penetration testing</li>
                <li>• Code analysis</li>
                <li>• Risk prioritization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Monitoring</h3>
              <p className="text-gray-300 mb-4">
                24/7 security operations center (SOC) monitoring and incident response.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• 24/7 monitoring</li>
                <li>• Incident response</li>
                <li>• Log analysis</li>
                <li>• Threat hunting</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4">
                Ensure compliance with industry regulations and security standards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOX compliance</li>
                <li>• Audit preparation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Advanced data protection and encryption solutions for sensitive information.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Data loss prevention</li>
                <li>• Backup solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Training</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security awareness training for your employees.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                </ul><li>• Phishing simulation</li>
                <li>• Security awareness</li>
                <li>• Best practices</li>
                <li>• Incident reporting</li>
              </ul>
            </div>
          </div>
        </section>

          <div className="text-center">
            </div><button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Secure Your Organization
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive cybersecurity features to protect every aspect of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Cybersecurity?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Industry expertise combined with cutting-edge technology for maximum protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified security professionals with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored security solutions for your specific needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Support</h3>
                <p className="text-gray-300">24/7 support and monitoring from our global team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Secure Your Business Today</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Get a free security audit and discover how our 
                cybersecurity solutions can protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Security Audit
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CybersecuritySolutionsPage;