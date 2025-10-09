import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileText, Award, Lock, Eye, Database, Globe, Building, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'Certified',
      icon: Shield,
      details: [
        'Information security management system',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Continuous improvement processes'
      ]
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, Availability, and Confidentiality',
      status: 'Certified',
      icon: Lock,
      details: [
        'Security controls and procedures',
        'System availability monitoring',
        'Data confidentiality protection',
        'Processing integrity controls'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Eye,
      details: [
        'Data subject rights protection',
        'Lawful basis for processing',
        'Data protection by design',
        'Privacy impact assessments'
      ]
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act',
      status: 'Compliant',
      icon: Users,
      details: [
        'Consumer privacy rights',
        'Data collection transparency',
        'Opt-out mechanisms',
        'Data deletion rights'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Ready',
      icon: Database,
      details: [
        'Protected health information security',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: FileText,
      details: [
        'Secure payment processing',
        'Cardholder data protection',
        'Network security requirements',
        'Regular security testing'
      ]
    }
  ];

  const complianceAreas = [
    {
      category: 'Data Protection',
      icon: Shield,
      measures: [
        'End-to-end encryption for all data',
        'Regular data classification and handling',
        'Secure data disposal procedures',
        'Data minimization practices',
        'Privacy by design implementation'
      ]
    },
    {
      category: 'Access Controls',
      icon: Lock,
      measures: [
        'Multi-factor authentication required',
        'Role-based access controls',
        'Regular access reviews and audits',
        'Privileged access management',
        'Session monitoring and management'
      ]
    },
    {
      category: 'Security Monitoring',
      icon: Eye,
      measures: [
        '24/7 security operations center',
        'Automated threat detection',
        'Incident response procedures',
        'Security event logging',
        'Regular vulnerability assessments'
      ]
    },
    {
      category: 'Business Continuity',
      icon: Building,
      measures: [
        'Disaster recovery planning',
        'Regular backup procedures',
        'Business continuity testing',
        'Incident response planning',
        'Recovery time objectives defined'
      ]
    }
  ];

  const auditSchedule = [
    {
      framework: 'ISO 27001',
      lastAudit: '2024-01-15',
      nextAudit: '2024-07-15',
      auditor: 'BSI Group',
      status: 'Certified'
    },
    {
      framework: 'SOC 2 Type II',
      lastAudit: '2023-12-01',
      nextAudit: '2024-12-01',
      auditor: 'Deloitte',
      status: 'Certified'
    },
    {
      framework: 'GDPR Assessment',
      lastAudit: '2024-01-01',
      nextAudit: '2024-07-01',
      auditor: 'Internal DPO',
      status: 'Compliant'
    },
    {
      framework: 'Penetration Testing',
      lastAudit: '2024-01-10',
      nextAudit: '2024-04-10',
      auditor: 'External Security Firm',
      status: 'Passed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified':
      case 'Compliant':
      case 'Passed':
        return 'text-green-400 bg-green-400/20';
      case 'Ready':
        return 'text-blue-400 bg-blue-400/20';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/compliance" className="text-cyan-400 font-semibold">Compliance</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Award className="w-16 h-16 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Compliance <span className="text-cyan-400">& Standards</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security across all our services, 
            ensuring your data is protected according to industry best practices and regulatory requirements.
          </p>
        </div>

        {/* Compliance Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Compliance Commitment</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Regulatory Compliance</h3>
                <p className="text-gray-300 mb-4">
                  We adhere to all applicable laws and regulations in the jurisdictions where we operate, 
                  including data protection, privacy, and industry-specific requirements.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regular compliance assessments</li>
                  <li>• Legal requirement monitoring</li>
                  <li>• Policy and procedure updates</li>
                  <li>• Staff training and awareness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Industry Standards</h3>
                <p className="text-gray-300 mb-4">
                  We follow internationally recognized standards and frameworks to ensure consistent 
                  security and quality across all our operations.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• ISO 27001 certification</li>
                  <li>• SOC 2 Type II compliance</li>
                  <li>• Industry best practices</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <framework.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(framework.status)}`}>
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{framework.description}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {framework.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                    <area.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{area.category}</h3>
                </div>
                <ul className="space-y-2">
                  {area.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="text-gray-300 text-sm flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Audit Schedule</h2>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Framework</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Last Audit</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Next Audit</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Auditor</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {auditSchedule.map((audit, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{audit.framework}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{audit.lastAudit}</td>
                      <td className="px-6 py-4 text-gray-300">{audit.nextAudit}</td>
                      <td className="px-6 py-4 text-gray-300">{audit.auditor}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(audit.status)}`}>
                          {audit.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Our comprehensive privacy policy detailing how we collect, use, and protect your data.
              </p>
              <Link
                to="/privacy"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                View Policy →
              </Link>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Security Policy</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Detailed information about our security measures and data protection practices.
              </p>
              <Link
                to="/security"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                View Policy →
              </Link>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">GDPR Compliance</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Our commitment to GDPR compliance and your data protection rights.
              </p>
              <Link
                to="/gdpr"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Compliance Team */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Compliance Questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer questions about our certifications, 
            audit results, and compliance practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Compliance Team
            </Link>
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Email Compliance
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompliancePage;