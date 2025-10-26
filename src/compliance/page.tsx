import { CheckCircle } from 'lucide-react';



import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
const CompliancePage: React.FC = () => {
  const _certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Certified' },
    { name: 'HIPAA Compliant', status: 'Certified' },
    { name: 'PCI DSS Level 1', status: 'Certified' },
    { name: 'NIST Framework', status: 'Implemented' }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      validUntil: '2025-12-31',
      icon: Shield,
      details: [
        'Security controls implemented and tested',
        'Availability monitoring and incident response',
        'Confidentiality protection measures',
        'Regular third-party audits'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      validUntil: '2025-11-30',
      icon: FileText,
      details: [
        'Risk assessment and management',
        'Security policies and procedures',
        'Continuous improvement processes',
        'Management commitment and oversight'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: Lock,
      details: [
        'Data protection by design and default',
        'Privacy impact assessments',
        'Data subject rights implementation',
        'Data breach notification procedures'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: Users,
      details: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Business associate agreements'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy controls',
      icon: Shield,
      frameworks: ['GDPR', 'CCPA', 'PIPEDA']
    },
    {
      title: 'Security',
      description: 'Robust security measures and controls',
      icon: Lock,
      frameworks: ['SOC 2', 'ISO 27001', 'NIST']
    },
    {
      title: 'Healthcare',
      description: 'Healthcare-specific compliance requirements',
      icon: Users,
      frameworks: ['HIPAA', 'HITECH', 'FDA']
    },
    {
      title: 'Financial',
      description: 'Financial services compliance standards',
      icon: Award,
      frameworks: ['PCI DSS', 'SOX', 'Basel III']
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>"
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>"
        <Navigation />
        
        {/* Header */}
        <section className="bg-white shadow-sm border-b"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"></div>"
            <div className="flex items-center"></div>"
              <Link,
to="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6""

// ></Link>
                
          
          
          
          
          
          
          
          ""
          <ArrowLeft className="w-4 h-4 mr-2" /></ArrowLeft>"
// Back to Privacy Policy;
          </Link>""
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>"
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
          {/* Overview */}
          <section className="mb-16">"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
                Our Commitment to Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
                At Zion Tech Group, we maintain the highest standards of compliance and security. 
                Our certifications and adherence to industry standards ensure your data is protected,
and our services meet the most stringent requirements.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"></div>"
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"></div>"
                  <div className="flex items-center justify-between"></div>"
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>"
                    <div className="flex items-center text-green-600"></div>"
                      <CheckCircle className="w-5 h-5 mr-2" />"
                      <span className="text-sm font-medium">{cert.status}</span>"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="mb-16">"
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">"
              Compliance Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>"
              {complianceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8"></div>"
                  <div className="flex items-center mb-4"></div>"
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"></div>"
                      <area.icon className="w-6 h-6 text-blue-600" />"
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>"
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>"
                  <ul className="space-y-2">"
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">"
            <h2 className="text-2xl font-bold text-gray-900 mb-4">"
              Questions About Our Compliance?
            </h2>
            <p className="text-gray-600 mb-6">"
              Our compliance team is available to answer any questions about our certifications, 
              security measures, or data protection practices.
            </p>
            <a,
href="mailto:compliance@ziontechgroup.com""
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200""
            >
              Contact Compliance Team
            </a>
            <div className="mt-8 text-sm text-blue-200"></div>"
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
  );
};

export default CompliancePage;


import React from 'react';
