'use client';
import React from 'react';
import {Shield, CheckCircle, FileText, Award, Lock, Eye, Database, UserCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {,
  const complianceFrameworks = [,
    {,
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, processing integrity, confidentiality, and privacy',
      status: 'Certified',
    icon: Award;,
    details: [,
        'Annual third-party audits by independent auditors',
        'Comprehensive control testing and validation',
        'Management attestation and reporting',
        'Continuous monitoring and improvement'
      ]
    },
    {name: 'ISO 27001',
    description: 'International standard for information security management systems',
    status: 'Certified',
    icon: Shield;,
    details: [,
        'Information security management system (ISMS)',
        'Risk assessment and treatment procedures',
        'Security controls and implementation guidelines',
        'Regular audits and continuous improvement'
      ]
    },
    {name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: Lock;,
    details: [,
        'Data protection by design and by default',
        'Privacy impact assessments (PIAs)',
        'Data subject rights management',
        'Data breach notification procedures'
      ]
    },
    {name: 'CCPA',
    description: 'California Consumer Privacy Act compliance for California residents',
    status: 'Compliant',
    icon: Eye;,
    details: [,
        'Consumer privacy rights management',
        'Data collection and processing transparency',
        'Opt-out mechanisms for data sales',
        'Privacy policy and notice requirements'
      ]
    },
    {name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act for healthcare data',
    status: 'Compliant',
    icon: Database;,
    details: [,
        'Protected health information (PHI) safeguards',
        'Administrative, physical, and technical safeguards',
        'Business associate agreements (BAAs)',
        'Workforce training and access controls'
      ]
    },
    {name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard for payment processing',
    status: 'Compliant',
    icon: UserCheck;,
    details: [,
        'Secure payment card data handling',
        'Network security and monitoring',
        'Regular security testing and vulnerability management',
        'Information security policy and procedures'
      ]
    }
  ];

  const complianceAreas = [
    {title: 'Data Protection',
    icon: Shield;,
    description: 'Comprehensive data protection measures and privacy controls',
      measures: [,
        'Data encryption at rest and in transit',
        'Data classification and handling procedures',
        'Privacy by design principles',
        'Data retention and disposal policies'
      ]
    },
    {title: 'Access Controls',
    icon: Lock;,
    description: 'Robust access management and authentication systems',
      measures: [,
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Privileged access management (PAM)',
        'Regular access reviews and audits'
      ]
    },
    {title: 'Security Monitoring',
    icon: Eye;,
    description: 'Continuous security monitoring and incident response',
      measures: [,
        'Security information and event management (SIEM)',
        'Real-time threat detection and response',
        'Vulnerability scanning and management',
        'Security incident response procedures'
      ]
    },
    {title: 'Audit & Reporting',
    icon: FileText;,
    description: 'Regular audits and compliance reporting',
      measures: [,
        'Internal and external security audits',
        'Compliance monitoring and reporting',
        'Risk assessments and management',
        'Continuous improvement processes'
      ]
    }
  ];

  const certifications = [
    {name: 'SOC 2 Type II',
      issuer: 'AICPA',
      validUntil: '2025-12-31',
      scope: 'Security, Availability, Confidentiality'
    },
    {name: 'ISO 27001:2013',
      issuer: 'ISO',
      validUntil: '2025-06-30',
      scope: 'Information Security Management',
    },
    {name: 'GDPR Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'Data Protection and Privacy',
    },
    {name: 'CCPA Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'California Privacy Rights',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" >
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24" >{/* Header */}</main>
        <section className="text-center mb-16" >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text" >Compliance & Certifications<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" >We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text" >Compliance & Certifications</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" >We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4" ></section>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg" ></div>
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium" >SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg" ></div>
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium" >ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg" ></div>
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium" >GDPR Compliant</span>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="mb-16" >
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text" >Compliance Frameworks<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >{complianceFrameworks.map((framework, index) => (</div>
              <div key={index} className="cyber-card p-6" >
                <div className="flex items-center justify-between mb-4" >
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text" >Compliance Frameworks</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >{complianceFrameworks.map((framework, index) => (</section>
              <div key={index} className="cyber-card p-6" ></div>
                <div className="flex items-center justify-between mb-4" ></div>
                  <framework.icon className="w-8 h-8 text-cyan-400" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400" >{framework.status}</span><h3 className="text-xl font-bold text-white mb-2" >{framework.name}</h3>
                <p className="text-gray-300 mb-4 text-sm" >{framework.description}</p><ul className="space-y-2" >{framework.details.map((detail, detailIndex) => (</ul>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300" >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="mb-16" >
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text" >Compliance Areas<div className="grid grid-cols-1 md:grid-cols-2 gap-8" >{complianceAreas.map((area, index) => (</div>
              <div key={index} className="cyber-card p-6" >
                <div className="flex items-center mb-4" >
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text" >Compliance Areas</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8" >{complianceAreas.map((area, index) => (</section>
              <div key={index} className="cyber-card p-6" ></div>
                <div className="flex items-center mb-4" ></div>
                  <area.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white" >{area.title}</h3><p className="text-gray-300 mb-4" >{area.description}</p><ul className="space-y-2" >{area.measures.map((measure, measureIndex) => (</ul>
                    <li key={measureIndex} className="flex items-start text-sm text-gray-300" >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" >{measure}</span>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Current Certifications */}
        <section className="mb-16" >
          <div className="cyber-card p-8" ></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text" >Current Certifications</h2>
            <div className="overflow-x-auto" ></div>
              <table className="w-full text-left" >
                <thead>
                  <tr className="border-b border-gray-700" >
                    <th className="pb-3 text-cyan-400 font-semibold" >Certification<th className="pb-3 text-cyan-400 font-semibold" >Issuer</th>
                    <th className="pb-3 text-cyan-400 font-semibold" >Valid Until<th className="pb-3 text-cyan-400 font-semibold" >Scope<th className="pb-3 text-cyan-400 font-semibold" >Status<tbody>{certifications.map((cert, index) => (</tbody>
                    <tr key={index} className="border-b border-gray-800" >
                      <td className="py-3 text-white font-semibold" >{cert.name}<td className="py-3 text-gray-300" >{cert.issuer}</td>
                      <td className="py-3 text-gray-300" >{cert.validUntil}<td className="py-3 text-gray-300" >{cert.scope}</td>
                      <td className="py-3" >
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400" >
                          <CheckCircle className="w-3 h-3 mr-1" >Active</CheckCircle>
                        </CheckCircle>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Active;
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="mb-16" >
          <div className="cyber-card p-8" ></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text" >Our Compliance Process</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8" >
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4" >Continuous Monitoring</h3>
                <ul className="space-y-2 text-gray-300" >
                  <li className="flex items-start" >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time compliance monitoring and alerting</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Automated</span></span>compliance</span> checks and reporting</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Regular</span></span>risk</span> assessments and gap analysis</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Ongoing</span></span>training</span> and awareness programs</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4" >Audit & Assessment</h3>
                <ul className="space-y-2 text-gray-300" >
                  <li className="flex items-start" >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Annual third-party security audits</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Penetration</span></span>testing</span> and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Compliance</span></span>gap</span> analysis and remediation</span>
                  </li>
                  <li className="flex items-start" ></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<span>Management</span></span>review</span> and attestation</span>
                  </li>
                </ul>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Industry-Specific Compliance */}
        <section className="mb-16" >
          <div className="cyber-card p-8" ></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text" >Industry-Specific Compliance</h2><p className="text-gray-300 mb-8" >We understand that different industries have unique compliance requirements. Our solutions are designed to meet the specific needs of various sectors.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
              <div className="bg-slate-800/50 rounded-lg p-6" >
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Healthcare (HIPAA)</h3>
                <ul className="space-y-2 text-sm text-gray-300" >
                  <li>• Protected Health Information (PHI) safeguards<li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)<li>• Workforce training and access controls</li>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6" >,
              <div className="bg-slate-800/50 rounded-lg p-6" >,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Healthcare (HIPAA)</h3>,
                <ul className="space-y-2 text-sm text-gray-300" >,
                  <li>• Protected Health Information (PHI) safeguards</li>,
                  <li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)</li>
                  <li>• Workforce training and access controls</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6" ></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Financial Services</h3>
                <ul className="space-y-2 text-sm text-gray-300" >
                  <li>• PCI DSS compliance for payment processing<li>• SOX compliance for financial reporting</li>
                  <li>• GLBA compliance for financial privacy<li>• FFIEC guidelines for cybersecurity</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6" ></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Government</h3>
                <ul className="space-y-2 text-sm text-gray-300" >
                  <li>• FedRAMP compliance for cloud services<li>• FISMA compliance for federal systems</li>
                  <li>• NIST Cybersecurity Framework<li>• Security clearance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Documentation */}
        <section className="mb-16" >
          <div className="cyber-card p-8" ></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text" >Compliance Documentation</h2><p className="text-gray-300 mb-6" >We maintain comprehensive documentation of our compliance efforts and are happy to provide relevant documentation to our clients and prospects.</p>
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6" >
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4" >Available Documents</h3>
                <ul className="space-y-2 text-gray-300" >
                  <li className="flex items-center" >
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>SOC 2 Type II Report</span>
                  </li>
                  <li className="flex items-center" ></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<span>ISO</span></span> 27001 Certificate</span>
                  </li>
                  <li className="flex items-center" ></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<span>Privacy</span></span>Policy</span> and Data Processing Agreement</span>
                  </li>
                  <li className="flex items-center" ></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<span>Security</span></span>and</span> Compliance Overview</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4" >Request Documentation<p className="text-gray-300 mb-4" >To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4" >Request Documentation</h3><p className="text-gray-300 mb-4" >To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
                </p>
                <a;
                  href="mailto: compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors" >
                  <FileText className="w-4 h-4 mr-2" >Request Documentation</FileText>
                </FileText>
              </div>
            </div>
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16" >
          <div className="cyber-card p-8" >
            <h2 className="text-2xl font-bold text-white mb-6 neon-text" >Compliance Questions?<p className="text-gray-300 mb-6" >If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Compliance Team</h3>
                <div className="space-y-2 text-gray-300" >
                  <p>Chief Compliance Officer<p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709</p>
                <div className="space-y-2 text-gray-300" ></div>
                  <p>Chief Compliance Officer</p><p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3" >Contact Information</h3>
                <div className="space-y-2 text-gray-300" ></div>
                  <p>Email:</p> <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300" >compliance@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300" >+1 302 464 0950<p>Response Time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>,
  );
};

export default CompliancePage;
