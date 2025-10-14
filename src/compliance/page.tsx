'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
const CompliancePage: React.FC = () => {}
,
};
;,
};
const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];
const complianceFrameworks = [
    {}
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      validUntil: '2025-12-31',
      icon: Shield,
      details: [,
        'Security controls implemented and tested',
        'Availability monitoring and incident response',
        'Confidentiality protection measures',
        'Regular third-party audits'
      ]
    },
    {}
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      validUntil: '2025-11-30',
      icon: FileText,
      details: [,
        'Risk assessment and management',
        'Security policies and procedures',
        'Continuous improvement processes',
        'Management commitment and oversight'
      ]
    },
    {}
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: Lock,
      details: [,
        'Data protection by design and default',
        'Privacy impact assessments',
        'Data subject rights management',
        'Breach notification procedures'
      ]
    }
  ];
const complianceAreas = [
    {}
      title: 'Data Protection',
      description: 'Comprehensive data privacy and protection measures',
      icon: Lock,
      frameworks: ['GDPR', 'CCPA', 'PIPEDA']
    },
    {}
      title: 'Information Security',
      description: 'Robust security controls and monitoring systems',
      icon: Shield,
      frameworks: ['ISO 27001', 'SOC 2', 'NIST']
    },
    {}
      title: 'Financial Services',
      description: 'Banking and financial services compliance',
      icon: Award,
      frameworks: ['PCI DSS', 'SOX', 'Basel III']
    },
    {}
      title: 'Healthcare',
      description: 'Healthcare data protection and privacy',
      icon: Users,
      frameworks: ['HIPAA', 'HITECH', 'FDA']
    }
  ];
const auditSchedule = [
    {}
      quarter: 'Q1 2024',
      status: 'Completed',
      audits: [,
        'SOC 2 Type II Audit',
        'ISO 27001 Review',
        'GDPR Compliance Assessment'
      ]
    },
    {}
      quarter: 'Q2 2024',
      status: 'Completed',
      audits: [,
        'Penetration Testing',
        'Security Policy Review',
        'Data Privacy Assessment'
      ]
    },
    {}
      quarter: 'Q3 2024',
      status: 'In Progress',
      audits: [,
        'Annual Security Audit',
        'Compliance Framework Review',
        'Risk Assessment Update'
      ]
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>""
        <Navigation />
        
        {/* Header */}""
        <section className="bg-white shadow-sm border-b">""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6"></div>""
            <div className="flex items-center"></div>""
              <Link ">"
                to="/privacy" ""
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
              >""
                <ArrowLeft className="w-4 h-4 mr-2" />""
                Back to Privacy Policy
              </Link>
            </div>
            <div></div>""
              <h1 className="text-3xl font-bold text-gray-900">Compliance</h1>""
              <p className="text-gray-600 mt-1">""
                Our commitment to regulatory compliance and industry standards
              </p>
            </div>
          </div>
        </section>,
,
        {/* Hero Section */}""
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>""
            <div className="text-center"></div>""
              <h2 className="text-4xl md:text-5xl font-bold mb-6">""
                Compliance Excellence
              </h2>""
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">""
                We maintain the highest standards of compliance with industry regulations and security frameworks.
              </p>""
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
                <Link ">"
                  to="/contact"""
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Request Compliance Report
                </Link>
                <Link ">"
                  to="/security"""
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Security Information
                </Link>
              </div>
            </div>
          </div>
        </section>,
,
        {/* Compliance Frameworks */}""
        <section className="py-16 bg-white">""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>""
            <div className="text-center mb-12"></div>""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">""
                Compliance Frameworks
              </h2>""
              <p className="text-xl text-gray-600">""
                Third-party verified compliance with industry standards
              </p>
            </div>"",
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>)","
              {complianceFrameworks.map((framework, index) => (""}
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8"></div>""
                  <div className="flex items-center mb-6"></div>""
                    <framework.icon className="w-8 h-8 text-blue-600 mr-4" />""
                    <div></div>""
                      <h3 className="text-2xl font-semibold text-gray-900">{framework.name}</h3>""
                      <p className="text-gray-600">{framework.description}</p>""
                    </div>
                  </div>""
                  <div className="flex items-center justify-between mb-6"></div>""
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${>}
                      framework.status === 'Certified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {framework.status}
                    </span>""
                    <span className="text-sm text-gray-500">Valid until: {framework.validUntil}</span>""
                  </div>""
                  <ul className="space-y-3">)""
                    {framework.details.map((detail, detailIndex) => (""}
                      <li key={detailIndex} className="flex items-start">""
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />""
                        <span className="text-gray-700">{detail}</span>""
                      </li>)
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}""
        <section className="py-16 bg-gray-50">""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>""
            <div className="text-center mb-12"></div>""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">""
                Compliance Areas
              </h2>""
              <p className="text-xl text-gray-600">""
                Key areas of compliance and regulatory adherence
              </p>
            </div>"",
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>","
              {complianceAreas.map((area, index) => (""}
                <div key={index} className="bg-white rounded-lg shadow-lg p-6"></div>""
                  <div className="text-center"></div>""
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>""
                      <area.icon className="w-8 h-8 text-blue-600" />""
                    </div>""
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>""
                    <p className="text-gray-600 text-sm mb-4">{area.description}</p>""
                    <div className="space-y-1"></div>)""
                      {area.frameworks.map((framework, frameworkIndex) => (""}
                        <span key={frameworkIndex} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1">""
                          {framework}
                        </span>)
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Schedule */}""
        <section className="py-16 bg-white">""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>""
            <div className="text-center mb-12"></div>""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">""
                Audit Schedule
              </h2>""
              <p className="text-xl text-gray-600">""
                Regular audits and assessments to maintain compliance
              </p>
            </div>"",
            <div className="space-y-6"></div>","
              {auditSchedule.map((quarter, index) => (""}
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"></div>""
                  <div className="flex items-center justify-between mb-4"></div>""
                    <h3 className="text-xl font-semibold text-gray-900">{quarter.quarter}</h3>""
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${>}
                      quarter.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {quarter.status}
                    </span>
                  </div>""
                  <ul className="space-y-2">)""
                    {quarter.audits.map((audit, auditIndex) => (""}
                      <li key={auditIndex} className="flex items-center">""
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />""
                        <span className="text-gray-700">{audit}</span>""
                      </li>)
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Reports */}""
        <section className="py-16 bg-gray-50">""
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8"></div>""
            <div className="text-center mb-12"></div>""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">""
                Compliance Reports
              </h2>""
              <p className="text-xl text-gray-600">""
                Access our latest compliance reports and certifications
              </p>
            </div>""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>""
              <div className="bg-white rounded-lg shadow-lg p-6"></div>""
                <div className="flex items-center mb-4"></div>""
                  <Award className="w-8 h-8 text-blue-600 mr-3" />""
                  <h3 className="text-xl font-semibold text-gray-900">SOC 2 Report</h3>""
                </div>"",
                <p className="text-gray-600 mb-4">","
                  Our latest SOC 2 Type II audit report covering security, availability, and confidentiality controls.
                </p>""
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">""
                  Download Report
                </button>
              </div>""
              <div className="bg-white rounded-lg shadow-lg p-6"></div>""
                <div className="flex items-center mb-4"></div>""
                  <FileText className="w-8 h-8 text-green-600 mr-3" />""
                  <h3 className="text-xl font-semibold text-gray-900">ISO 27001 Certificate</h3>""
                </div>""
                <p className="text-gray-600 mb-4">""
                  Our ISO 27001 certification demonstrating our information security management system.
                </p>""
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">""
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </section>,
,
        {/* Contact Compliance Team */}""
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">""
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>""
            <h2 className="text-3xl md:text-4xl font-bold mb-4">""
              Compliance Questions?
            </h2>""
            <p className="text-xl mb-8 text-blue-100">""
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <Link">"
              to="/contact"""
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Compliance Team
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>,
  ),
}
;
export default CompliancePage""
