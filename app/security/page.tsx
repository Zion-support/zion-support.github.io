import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Award, CheckCircle, FileText, ArrowRight, Users } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      details: [
        'TLS 1.3 for data in transit',
        'AES-256 for data at rest',
        'Perfect Forward Secrecy',
        'Encrypted backups'
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Access Controls',
      description: 'Multi-layered access controls with role-based permissions and multi-factor authentication.',
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Single Sign-On (SSO) integration',
        'Regular access reviews'
      ],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring with real-time threat detection and automated response.',
      details: [
        'Real-time threat detection',
        'Automated incident response',
        'Security event logging']
        'Anomaly detection']]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Compliance Certifications',
      description: 'We maintain industry-leading security certifications and compliance standards.',
      details: [
        'SOC 2 Type II certified',
        'ISO 27001 compliant',
        'GDPR compliant']
        'Regular security audits']]
    }
  ];

const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, processing integrity, confidentiality, and privacy',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment processing',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'NIST Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework',
      status: 'Aligned',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

const securityMeasures = [
    {
      category: 'Infrastructure Security',
      measures: [
        'Secure cloud infrastructure with AWS/Azure',
        'Network segmentation and firewalls',
        'DDoS protection and mitigation',
        'Regular security updates and patches',
        'Intrusion detection systems']
        'Vulnerability scanning and management']]
    },
    {
      category: 'Application Security',
      measures: [
        'Secure coding practices and code reviews',
        'Automated security testing in CI/CD',
        'Web Application Firewall (WAF)',
        'API security and rate limiting',
        'Input validation and sanitization']
        'Regular penetration testing']]
    },
    {
      category: 'Data Protection',
      measures: [
        'Data classification and handling procedures',
        'Encryption at rest and in transit',
        'Secure data backup and recovery',
        'Data loss prevention (DLP)',
        'Secure data disposal']
        'Privacy by design principles']]
    },
    {
      category: 'Operational Security',
      measures: [
        'Security awareness training',
        'Incident response procedures',
        'Regular security assessments',
        'Third-party security reviews',
        'Security monitoring and alerting']
        'Business continuity planning']]
    }
  ];

const incidentResponse = [
    {
      phase: 'Detection',
      description: 'Automated monitoring detects potential security incidents',
      timeline: 'Immediate'
    },
    {
      phase: 'Analysis',
      description: 'Security team analyzes the incident and determines severity',
      timeline: 'Within 1 hour'
    },
    {
      phase: 'Containment',
      description: 'Immediate steps to contain and prevent further damage',
      timeline: 'Within 2 hours'
    },
    {
      phase: 'Eradication',
      description: 'Remove the threat and vulnerabilities from the system',
      timeline: 'Within 24 hours'
    },
    {
      phase: 'Recovery',
      description: 'Restore systems to normal operation with enhanced security',
      timeline: 'Within 48 hours'
    },
    {
      phase: 'Lessons Learned',
      description: 'Post-incident review and security improvements',
      timeline: 'Within 1 week'
    }
  ];
  return (
    <>
      <Helmet>
        <title>Security - Zion Tech Group | Enterprise Security & Compliance</title>
        <meta name="description" content="Learn about Zion Tech Group's enterprise-grade security measures, compliance certifications, and data protection practices." />
        <meta name="keywords" content="security, cybersecurity, data protection, compliance, SOC 2, ISO 27001, encryption, privacy" />
        <meta property="og:title" content="Security - Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade security and compliance" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Security</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Your data security is our top priority. We implement enterprise-grade security measures and maintain industry-leading compliance standards.
              </p>
            </div>
          </div>
        </section>
        {/* Security Features */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Features</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    
        <div className="flex items-center mb-6">
                      
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-6">
                        
        <div className="text-white">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                    </div>
                    
          <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Compliance Standards */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance & Certifications</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    
        <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{standard.name}</h3>
                      
        <div className="flex items-center text-green-400">
                        {standard.icon}
                        <span className="ml-2 text-sm font-semibold">{standard.status}</span>
                      </div>
                    </div>
                    
          <p className="text-gray-300 text-sm">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Security Measures */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Security Measures</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityMeasures.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                    <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.measures.map((measure, measureIndex) => (
                        <li key={measureIndex} className="flex items-start">
                          <Shield className="w-4 h-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Incident Response */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Incident Response Process</h2>
              
        <div className="space-y-6">
                {incidentResponse.map((phase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                    
        <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {phase.timeline}
                      </span>
                    </div>
                    
          <p className="text-gray-300">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Security Resources */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Resources</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Security Whitepaper</h3>
                  
          <p className="text-gray-300 mb-6">Download our comprehensive security whitepaper</p>
                  <a
    href="/security-whitepaper.pdf"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Download PDF
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Security Training</h3>
                  
          <p className="text-gray-300 mb-6">Security awareness training for your team</p>
                  <a
    href="/contact?type=security-training"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Security Audit</h3>
                  
          <p className="text-gray-300 mb-6">Request a security audit of your systems</p>
                  <a
    href="/contact?type=security-audit"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Request Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Security Team */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Security Questions?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Our security team is available to answer any questions about our security measures and compliance.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="mailto:security@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Security Team
                </a>
                <a
    href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SecurityPage;