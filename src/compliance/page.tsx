'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
const CompliancePage: React.FC = () => {}
};
;
};
const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' }
    { name: 'ISO 27001', status: 'Certified' }
    { name: 'GDPR', status: 'Compliant' }
    { name: 'HIPAA', status: 'Compliant' };
    { name: 'PCI DSS', status: 'Compliant' };
  ];
const complianceFrameworks = [
    {}
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls'
      status: 'Certified',
      validUntil: '2025-12-31',
      icon: Shield,
      details: [,
        'Security controls implemented and tested'
        'Availability monitoring and incident response'
        'Confidentiality protection measures'
        'Regular third-party audits'
      ]
    }
    {}
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      validUntil: '2025-11-30',
      icon: FileText,
      details: [,
        'Risk assessment and management'
        'Security policies and procedures'
        'Continuous improvement processes'
        'Management commitment and oversight'
      ]
    }
    {}
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: Lock,
      details: [,
        'Data protection by design and default'
        'Privacy impact assessments'
        'Data subject rights management'
        'Breach notification procedures'
      ];
    };
  ];
const complianceAreas = [
    {}
      title: 'Data Protection',
      description: 'Comprehensive data privacy and protection measures',
      icon: Lock,
      frameworks: ['GDPR', 'CCPA', 'PIPEDA']
    }
    {}
      title: 'Information Security',
      description: 'Robust security controls and monitoring systems',
      icon: Shield,
      frameworks: ['ISO 27001', 'SOC 2', 'NIST']
    }
    {}
      title: 'Financial Services',
      description: 'Banking and financial services compliance',
      icon: Award,
      frameworks: ['PCI DSS', 'SOX', 'Basel III']
    }
    {}
      title: 'Healthcare',
      description: 'Healthcare data protection and privacy',
      icon: Users,
      frameworks: ['HIPAA', 'HITECH', 'FDA'];
    };
  ];
const auditSchedule = [
    {}
      quarter: 'Q1 2024',
      status: 'Completed',
      audits: [,
        'SOC 2 Type II Audit'
        'ISO 27001 Review'
        'GDPR Compliance Assessment'
      ]
    }
    {}
      quarter: 'Q2 2024',
      status: 'Completed',
      audits: [,
        'Penetration Testing'
        'Security Policy Review'
        'Data Privacy Assessment'
      ]
    }
    {}
      quarter: 'Q3 2024',
      status: 'In Progress',
      audits: [,
        'Annual Security Audit'
        'Compliance Framework Review'
        'Risk Assessment Update'
      ]
    }
  ]
  return (
    <></>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" />""
        <Navigation / /></Navigation>
        {/* Header */}""
        <section className="bg-white shadow-sm border-b">""
          <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 py-6" />"",
            <div className="flex items-center" />""
              <Link ">"
                to="/privacy" ""
                className="inline-flex items-center text-blue-600 hover: text-blue-800 transition-colors duration-200 mr-6",
              >""
                <ArrowLeft className="w-4 h-4 mr-2" />""
                Back to Privacy Policy
              </Link>
            </div>
            <div />""
              <h1 className="text-3 xl font-bold text-gray-900">Compliance</h1>""
              <p className="text-gray-600 mt-1">""
                Our commitment to regulatory compliance and industry standards
              </p>
            </div>
          </div>
        </section>
        {/* Hero Section */}""
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">""
          <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />"",
            <div className="text-center" />""
              <h2 className="text-4 xl md: text-5 xl font-bold mb-6">"",
                Compliance Excellence
              </h2>""
              <p className="text-xl md: text-2 xl mb-8 text-gray-200 max-w-3 xl mx-auto">"",
                We maintain the highest standards of compliance with industry regulations and security frameworks.
              </p>""
              <div className="flex flex-col sm: flex-row gap-4 justify-center" />"",
                <Link ">"
                  to="/contact"""
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-blue-50 transition-colors",
                >
                  Request Compliance Report
                </Link>
                <Link ">"
                  to="/security"""
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors",
                >
                  Security Information
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Compliance Frameworks */}""
        <section className="py-16 bg-white">""
          <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />"",
            <div className="text-center mb-12" />""
              <h2 className="text-3 xl md: text-4 xl font-bold text-gray-900 mb-4">"",
                Compliance Frameworks
              </h2>""
              <p className="text-xl text-gray-600">""
                Third-party verified compliance with industry standards
              </p>)
            </div>"",)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" />)","
              {complianceFrameworks.map((framework, index) => (""}
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8" />""
                  <div className="flex items-center mb-6" />""
                    <framework.icon className="w-8 h-8 text-blue-600 mr-4" />""
                    <div />""
                      <h3 className="text-2 xl font-semibold text-gray-900">{framework.name}</h3>""
                      <p className="text-gray-600">{framework.description}</p>""
                    </div>
                  </div>""
                  <div className="flex items-center justify-between mb-6" />""
                    <span className={""
                    }""
                    <span className={""
                    }"";