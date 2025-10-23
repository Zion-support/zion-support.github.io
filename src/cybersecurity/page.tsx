import React from 'react'

import { Lock } from 'lucide-react'
import { CheckCircle, Star, Eye, Shield, Database, Helmet } from 'lucide-react'
import { Globe, AlertTriangle } from 'lucide-react'

const CybersecurityPage: React.FC = () => {
  const securityServices = [
=======
import {Lock, CheckCircle, Star, Eye, Database, Shield, Helmet, Globe, Globe} from 'lucide-react';;;
constCybersecurityPage: React.FC= () =>{constsecurityServices= [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.',
      icon: '🛡️',
      price: 'Starting at $4,50 0/month',
      features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence', 'Incident investigation'],
      benefits: ['Prevent99% of cyber attacks', 'Reduce response time by90%', 'Minimize security incidents'],
      marketPrice: '$8,00 0-2 5,00 0/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML Security']
   },
    {title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      icon: '🔐',
      price: 'Starting at $6,50 0/month',
      features: ['Identity verification', 'Micro-segmentation', 'Least privilege access', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Eliminate lateral movement', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$1 2,00 0-4 0,00 0/month',
      category: 'Zero Trust',
      technologies: ['Identity Management', 'Network Segmentation', 'Policy Engines', 'Access Controls']
   },
    {title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities and assess security posture.',
      icon: '🔍',
      price: 'Starting at $3,50 0/assessment',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security testing', 'Compliance testing'],
      benefits: ['Identify security gaps', 'Prevent data breaches', 'Ensure compliance'],
      marketPrice: '$6,00 0-2 0,00 0/assessment',
      category: 'Security Testing',
      technologies: ['OWASP', 'NIST', 'OSSTMM', 'Custom Tools', 'Automated Scanners']
   },
    {title: 'Security Operations Center (SOC)',
      description: '2 4/7 security monitoring and incident response with dedicated security analysts.',
      icon: '🏢',
      price: 'Starting at $8,00 0/month',
      features: ['2 4/7 monitoring', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
      benefits: ['Round-the-clock protection', 'Faster incident response', 'Proactive threat hunting'],
      marketPrice: '$1 5,00 0-5 0,00 0/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Incident Management']
   },
    {title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security for AWS, Azure, and Google Cloud with compliance monitoring.',
      icon: '☁️',
      price: 'Starting at $3,20 0/month',
      features: ['Cloud security posture', 'Identity & access management', 'Data encryption', 'Compliance monitoring', 'Threat detection'],
      benefits: ['Secure cloud environments', 'Ensure compliance', 'Prevent data breaches'],
      marketPrice: '$6,00 0-2 0,00 0/month',
      category: 'Cloud Security',
      technologies: ['CSPM', 'CWPP', 'CASB', 'Cloud IAM', 'Encryption']
   },
    {title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection solutions including encryption, DLP, and privacy compliance.',
      icon: '🔒',
      price: 'Starting at $2,80 0/month',
      features: ['Data encryption', 'Data loss prevention', 'Privacy compliance', 'Data class ificatio n', 'Access controls'],
      benefits: ['Protect sensitive data', 'Ensure privacy compliance', 'Prevent data leaks'],
      marketPrice: '$5,00 0-1 8,00 0/month',
      category: 'Data Protection',
      technologies: ['DLP', 'Encryption', 'GDPR Tools', 'Data Classification', 'Privacy Management']
   },
    {title: 'Network Security & Firewall Management',
      description: 'Advanced network security with next-generation firewalls and intrusion prevention systems.',
      icon: '🌐',
      price: 'Starting at $2,50 0/month',
      features: ['Next-gen firewalls', 'Intrusion prevention', 'Network segmentation', 'VPN management', 'Traffic analysis'],
      benefits: ['Block malicious traffic', 'Prevent network attacks', 'Improve network performance'],
      marketPrice: '$4,50 0-1 5,00 0/month',
      category: 'Network Security',
      technologies: ['NGFW', 'IPS', 'VPN', 'SD-WAN', 'Network Monitoring']
   },
    {title: 'Email Security & Phishing Protection',
      description: 'Advanced email security solutions to prevent phishing, malware, and email-based attacks.',
      icon: '📧',
      price: 'Starting at $1,80 0/month',
      features: ['Phishing protection', 'Malware scanning', 'Email encryption', 'Spam filtering', 'User training'],
      benefits: ['Prevent email attacks', 'Reduce phishing success', 'Protect sensitive communications'],
      marketPrice: '$3,50 0-1 2,00 0/month',
      category: 'Email Security',
      technologies: ['Email Gateways', 'Sandboxing', 'AI Detection', 'User Training', 'Encryption']
   },
    {title: 'Mobile Security Solutions',
      description: 'Comprehensive mobile device security with MDM, app security, and threat protection.',
      icon: '📱',
      price: 'Starting at $2,20 0/month',
      features: ['Mobile device management', 'App security', 'Threat protection', 'Compliance monitoring', 'Remote wipe'],
      benefits: ['Secure mobile devices', 'Prevent mobile threats', 'Ensure compliance'],
      marketPrice: '$4,00 0-1 5,00 0/month',
      category: 'Mobile Security',
      technologies: ['MDM', 'EMM', 'App Security', 'Threat Detection', 'Compliance Tools']
   },
    {title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      icon: '📋',
      price: 'Starting at $3,50 0/month',
      features: ['Compliance assessment', 'Risk management', 'Policy development', 'Audit support', 'Training programs'],
      benefits: ['Ensure compliance', 'Reduce regulatory risks', 'Avoid penalties'],
      marketPrice: '$6,50 0-2 5,00 0/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Assessment', 'Compliance Tools', 'Audit Management']
   },
    {title: 'Security Awareness Training',
      description: 'Comprehensive security awareness training programs to educate employees about cyber threats.',
      icon: '🎓',
      price: 'Starting at $1,50 0/month',
      features: ['Interactive training modules', 'Phishing simulations', 'Security assessments', 'Progress tracking', 'Custom content'],
      benefits: ['Reduce human error', 'Improve security culture', 'Prevent social engineering'],
      marketPrice: '$2,50 0-8,00 0/month',
      category: 'Security Training',
      technologies: ['LMS', 'Phishing Simulators', 'Interactive Content', 'Assessment Tools']
   },
    {title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics services for security breaches and investigations.',
      icon: '🚨',
      price: 'Starting at $5,00 0/incident',
      features: ['Rapid response', 'Digital forensics', 'Evidence collection', 'Incident analysis', 'Recovery planning'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Accelerate recovery'],
      marketPrice: '$1 0,00 0-5 0,00 0/incident',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Incident Management', 'Evidence Collection', 'Recovery Tools']
    }
  ]
  const categories = [...new Set(securityServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced cybersecurity services including threat detection, penetration testing, zero trust security, and comprehensive security solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cybersecurity services, threat detection, penetration testing, zero trust, security consulting, SOC services&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-red-50&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-700 text-white py-20&quot;></section>
          <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                Cybersecurity Services
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto&quot;>
                Protect your business with advanced cybersecurity solutions and expert threat protection
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <button className=&quot;bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors&quot;>
                  Get Security Assessment
                </button>
                <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors&quot;>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Expert security professionals delivering comprehensive protection against evolving cyber threats
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-red-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Advanced Protection</h3>
                <p className=&quot;text-gray-600&quot;>Cutting-edge security technologies and AI-powered threat detection</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Eye className=&quot;w-8 h-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>24/7 Monitoring</h3>
                <p className=&quot;text-gray-600&quot;>Round-the-clock security monitoring and incident response</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Lock className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Compliance Ready</h3>
                <p className=&quot;text-gray-600&quot;>Ensure compliance with GDPR, HIPAA, SOX, and other regulations</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <AlertTriangle className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Rapid Response</h3>
                <p className=&quot;text-gray-600&quot;>Quick incident response and recovery to minimize business impact</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className=&quot;py-16 bg-gray-50&quot;></section>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
              <div className=&quot;text-center mb-12&quot;></div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                  {category} Solutions
                </h2>
                <p className=&quot;text-xl text-gray-600&quot;>
                  Specialized {category.toLowerCase()} services for comprehensive security protection
                </p>
              </div>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
                {securityServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;></div>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                      <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                      <div className=&quot;mb-4&quot;></div>
                        <div className=&quot;flex items-center justify-between mb-2&quot;></div>
                          <span className=&quot;text-2xl font-bold text-red-600&quot;>{service.price}</span>
                          <span className=&quot;text-sm text-gray-500&quot;>Market: {service.marketPrice}</span>
                        </div>
                        <div className=&quot;text-sm text-green-600 font-semibold&quot;></div>
                          Save up to 50% vs market rates
                        </div>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className=&quot;bg-red-100 text-red-800 text-xs px-2 py-1 rounded&quot;>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className=&quot;mb-6&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Business Benefits:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-500 mr-2 flex-shrink-0&quot; />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className=&quot;w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors&quot;>
                        Get Security Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* Cybersecurity Capabilities Showcase */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our Cybersecurity Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive security solutions covering all aspects of cyber protection
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg&quot;></div>
                <Shield className=&quot;w-12 h-12 text-red-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Threat Detection</h3>
                <p className=&quot;text-gray-600&quot;>AI-powered threat detection and response systems</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg&quot;></div>
                <Lock className=&quot;w-12 h-12 text-blue-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Zero Trust</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive zero trust security architecture</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg&quot;></div>
                <Eye className=&quot;w-12 h-12 text-green-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>SOC Services</h3>
                <p className=&quot;text-gray-600&quot;>24/7 security operations center monitoring</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg&quot;></div>
                <Database className=&quot;w-12 h-12 text-purple-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Data Protection</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive data protection and privacy solutions</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg&quot;></div>
                <Globe className=&quot;w-12 h-12 text-orange-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Cloud Security</h3>
                <p className=&quot;text-gray-600&quot;>Advanced cloud security and compliance solutions</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg&quot;></div>
                <AlertTriangle className=&quot;w-12 h-12 text-indigo-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Incident Response</h3>
                <p className=&quot;text-gray-600&quot;>Rapid incident response and digital forensics</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Secure Your Business?
            </h2>
            <p className=&quot;text-xl mb-8 text-red-100&quot;>
              Contact our cybersecurity experts for a free security assessment and custom protection strategy
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors&quot;
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className=&quot;mt-8 text-sm text-red-200&quot;></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default CybersecurityPage
