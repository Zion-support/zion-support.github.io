'use client';
import React from 'react';
import { Shield, CheckCircle, FileText, Award, Lock, Eye, Database, UserCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, processing integrity, confidentiality, and privacy',
      status: 'Certified',
      icon: Award,
      details: [
        'Annual third-party audits by independent auditors',
        'Comprehensive control testing and validation',
        'Management attestation and reporting',
        'Continuous monitoring and improvement'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: Shield,
      details: [
        'Information security management system (ISMS)',
        'Risk assessment and treatment procedures',
        'Security controls and implementation guidelines',
        'Regular audits and continuous improvement'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      icon: Lock,
      details: [
        'Data protection by design and by default',
        'Privacy impact assessments (PIAs)',
        'Data subject rights management',
        'Data breach notification procedures'
      ]
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance for California residents',
      status: 'Compliant',
      icon: Eye,
      details: [
        'Consumer privacy rights management',
        'Data collection and processing transparency',
        'Opt-out mechanisms for data sales',
        'Privacy policy and notice requirements'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act for healthcare data',
      status: 'Compliant',
      icon: Database,
      details: [
        'Protected health information (PHI) safeguards',
        'Administrative, physical, and technical safeguards',
        'Business associate agreements (BAAs)',
        'Workforce training and access controls'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment processing',
      status: 'Compliant',
      icon: UserCheck,
      details: [
        'Secure payment card data handling',
        'Network security and monitoring',
        'Regular security testing and vulnerability management',
        'Information security policy and procedures'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      icon: Shield,
      description: 'Comprehensive data protection measures and privacy controls',
      measures: [
        'Data encryption at rest and in transit',
        'Data classification and handling procedures',
        'Privacy by design principles',
        'Data retention and disposal policies'
      ]
    },
    {
      title: 'Access Controls',
      icon: Lock,
      description: 'Robust access management and authentication systems',
      measures: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Privileged access management (PAM)',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Security Monitoring',
      icon: Eye,
      description: 'Continuous security monitoring and incident response',
      measures: [
        'Security information and event management (SIEM)',
        'Real-time threat detection and response',
        'Vulnerability scanning and management',
        'Security incident response procedures'
      ]
    },
    {
      title: 'Audit & Reporting',
      icon: FileText,
      description: 'Regular audits and compliance reporting',
      measures: [
        'Internal and external security audits',
        'Compliance monitoring and reporting',
        'Risk assessments and management',
        'Continuous improvement processes'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      validUntil: '2025-12-31',
      scope: 'Security, Availability, Confidentiality'
    },
    {
      name: 'ISO 27001:2013',
      issuer: 'ISO',
      validUntil: '2025-06-30',
      scope: 'Information Security Management'
    },
    {
      name: 'GDPR Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'Data Protection and Privacy'
    },
    {
      name: 'CCPA Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'California Privacy Rights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Compliance</h1></h1> & Certifications<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Award className="w-5 h-5 text-green-400" /></Awar>
              <span className="text-white font-medium">SOC 2 Type II</spa>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"></div>
              <Shield className="w-5 h-5 text-blue-400" /></Shiel>
              <span className="text-white font-medium">ISO 27001</spa>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-purple-400" /></CheckCircl>
              <span className="text-white font-medium">GDPR Compliant</spa>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Compliance</h2></<<h2>Frameworks</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{complianceFrameworks.map((framework, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <framework.icon className="w-8 h-8 text-cyan-400" /></framewor>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"></spa>{framework.status}<h3 className="text-xl font-bold text-white mb-2">{framework.name}</h>
                <p className="text-gray-300 mb-4 text-sm"></p>{framework.description}<ul className="space-y-2">{framework.details.map((detail, detailIndex) => (</u>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Compliance</h2></<<h2>Areas</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{complianceAreas.map((area, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <area.icon className="w-8 h-8 text-cyan-400 mr-3" /></are>
                  <h3 className="text-xl font-bold text-white"></h>{area.title}<p className="text-gray-300 mb-4"></p>{area.description}<ul className="space-y-2">{area.measures.map((measure, measureIndex) => (</u>
                    <li key={measureIndex} className="flex items-start text-sm text-gray-300"></l>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{measure}</spa>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Current Certifications */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text">Current Certifications</h>
            <div className="overflow-x-auto"></div>
              <table className="w-full text-left"></tabl>
                <thead></thea>
                  <tr className="border-b border-gray-700"></t>
                    <th className="pb-3 text-cyan-400 font-semibold">Certification</th><th className="pb-3 text-cyan-400 font-semibold">Issuer</t>
                    <th className="pb-3 text-cyan-400 font-semibold">Valid Until</th><th className="pb-3 text-cyan-400 font-semibold">Scope</th><th className="pb-3 text-cyan-400 font-semibold">Status</th><tbody>{certifications.map((cert, index) => (</tbod>
                    <tr key={index} className="border-b border-gray-800"></t>
                      <td className="py-3 text-white font-semibold">{cert.name}</td><td className="py-3 text-gray-300">{cert.issuer}</t>
                      <td className="py-3 text-gray-300">{cert.validUntil}</td><td className="py-3 text-gray-300">{cert.scope}</t>
                      <td className="py-3"></t>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"></spa>
                          <CheckCircle className="w-3 h-3 mr-1" >Active</CheckCircl>
                        </CheckCircle>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text">Our Compliance Process</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Continuous Monitoring</h>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Real</span></span>-time compliance monitoring and alerting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Automated</span></<<span>compliance</span> checks and reporting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>risk</span> assessments and gap analysis</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Ongoing</span></<<span>training</span> and awareness programs</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Audit & Assessment</h>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Annual</span></<<span>third</span>-party security audits</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Penetration</span></<<span>testing</span> and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Compliance</span></<<span>gap</span> analysis and remediation</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Management</span></<<span>review</span> and attestation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Compliance */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Industry</h2></h2>-Specific Compliance<p className="text-gray-300 mb-8">We understand that different industries have unique compliance requirements. Our solutions are designed to meet the specific needs of various sectors.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPAA)</h>
                <ul className="space-y-2 text-sm text-gray-300"></u>
                  <li>• Protected Health Information (PHI) safeguards</li><li>• Administrative, physical, and technical safeguards</l>
                  <li>• Business Associate Agreements (BAAs)</li><li>• Workforce training and access controls</l>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Financial Services</h>
                <ul className="space-y-2 text-sm text-gray-300"></u>
                  <li>• PCI DSS compliance for payment processing</li><li>• SOX compliance for financial reporting</l>
                  <li>• GLBA compliance for financial privacy</li><li>• FFIEC guidelines for cybersecurity</l>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Government</h>
                <ul className="space-y-2 text-sm text-gray-300"></u>
                  <li>• FedRAMP compliance for cloud services</li><li>• FISMA compliance for federal systems</l>
                  <li>• NIST Cybersecurity Framework</li><li>• Security clearance requirements</l>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Documentation */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Compliance</h2></<<h2>Documentation</h2><p className="text-gray-300 mb-6">We maintain comprehensive documentation of our compliance efforts and are happy to provide relevant documentation to our clients and prospects.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Available Documents</h>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>SOC</span></span> 2 Type II Report</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>ISO</span></span> 27001 Certificate</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Privacy</span></<<span>Policy</span> and Data Processing Agreement</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Security</span></<<span>and</span> Compliance Overview</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4"></h3></<<<h3>Request</h3></<<h3>Documentation</h3><p className="text-gray-300 mb-4">To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
                </p>
                <a
                  href="mailto:compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                ></a>
                  <FileText className="w-4 h-4 mr-2" >Request Documentation</FileTex>
                </FileText>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Compliance</h2></<<h2>Questions</h2>?<p className="text-gray-300 mb-6">If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Team</h>
                <div className="space-y-2 text-gray-300"></div>
                  <p></p></<<<p>Chief</p></<<p>Compliance</p> Officer<<<<p>Zion</p></<<p>Tech</p> Group</p>
                  <p></p>364 E Main St STE 1008<<<<p>Middletown</p>, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h>
                <div className="space-y-2 text-gray-300"></div>
                  <p></p></<<<p>Email</p>: <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">compliance@ziontechgroup.com</a>
                  <p></p></<<<p>Phone</p>: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a><<<<p>Response</p></<<p>Time</p>: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default CompliancePage;