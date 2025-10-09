import React from 'react';
import { CheckCircle, Shield, Lock, FileText, Award, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield,
      details: [
        'Annual third-party audits',
        'Continuous monitoring',
        'Risk assessment procedures',
        'Incident response protocols'
      ]
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: Lock,
      details: [
        'Data protection by design',
        'Privacy impact assessments',
        'Data subject rights management',
        'Breach notification procedures'
      ]
    },
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: FileText,
      details: [
        'Protected health information safeguards',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Award,
      details: [
        'Information security policies',
        'Risk management framework',
        'Security controls implementation',
        'Continuous improvement processes'
      ]
    }
  ];

  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
      icon: Lock
    },
    {
      title: 'Access Controls',
      description: 'Role-based access control and multi-factor authentication',
      icon: Users
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive audit trails for all system activities',
      icon: FileText
    },
    {
      title: 'Regular Assessments',
      description: 'Ongoing security assessments and penetration testing',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compliance & Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We maintain the highest standards of security and compliance to protect your data 
            and ensure regulatory compliance across all our services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">SOC 2</div>
              <div className="text-gray-300">Type II Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">GDPR</div>
              <div className="text-gray-300">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">ISO 27001</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">HIPAA</div>
              <div className="text-gray-300">Compliant</div>
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <standard.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{standard.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm font-medium">{standard.status}</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{standard.description}</p>
                
                <ul className="space-y-2">
                  {standard.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Protection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Data Protection
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data Encryption</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AES-256 encryption for data at rest</li>
                  <li>• TLS 1.3 for data in transit</li>
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• Key management and rotation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Access Controls</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Regular access reviews</li>
                  <li>• Privileged access management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Monitoring & Logging</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 24/7 security monitoring</li>
                  <li>• Comprehensive audit logs</li>
                  <li>• Real-time threat detection</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data Residency</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regional data centers</li>
                  <li>• Data sovereignty compliance</li>
                  <li>• Cross-border data transfer controls</li>
                  <li>• Local data processing options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Certifications & Audits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Annual Audits</h3>
              <p className="text-gray-300">Regular third-party security audits and assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Penetration Testing</h3>
              <p className="text-gray-300">Regular penetration testing and vulnerability assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance Reports</h3>
              <p className="text-gray-300">Detailed compliance reports and documentation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Compliance Documentation?
          </h2>
          <p className="text-purple-100 mb-6">
            Request our compliance documentation and security reports for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request Documentation
            </a>
            <a
              href="/privacy"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;