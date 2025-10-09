import React from 'react';
import { CheckCircle, Shield, FileText, Award, Users, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield
    },
    {
      name: 'ISO 27001',
      description: 'Information security management systems',
      status: 'Compliant',
      icon: FileText
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Globe
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Ready',
      icon: Users
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Level 1',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Compliance Standards
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We maintain the highest standards of compliance to ensure your data is protected and our services meet regulatory requirements.
          </p>
        </div>

        {/* Compliance Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {complianceStandards.map((standard, index) => (
            <div key={index} className="cyber-card hologram-card p-8">
              <standard.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
              <p className="text-gray-300 mb-4">{standard.description}</p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">{standard.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Details */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Compliance Details</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">SOC 2 Type II Certification</h3>
              <p className="text-gray-300 mb-4">
                Our SOC 2 Type II certification demonstrates our commitment to security, availability, 
                and confidentiality of customer data. This certification is audited annually by an 
                independent third party.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white font-medium">Audit Period: Annual</p>
                <p className="text-gray-300">Last Audit: Q3 2024</p>
                <p className="text-gray-300">Next Audit: Q3 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">GDPR Compliance</h3>
              <p className="text-gray-300 mb-4">
                We are fully compliant with the General Data Protection Regulation (GDPR) and 
                have implemented comprehensive data protection measures to safeguard personal data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Data Protection Impact Assessments (DPIA)</li>
                <li>• Privacy by Design implementation</li>
                <li>• Data Subject Rights management</li>
                <li>• Data Processing Agreements (DPA)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">ISO 27001 Compliance</h3>
              <p className="text-gray-300 mb-4">
                Our information security management system is designed to meet ISO 27001 standards, 
                ensuring systematic approach to managing sensitive company information.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Information Security Management System (ISMS)</li>
                <li>• Risk assessment and management</li>
                <li>• Security controls implementation</li>
                <li>• Continuous improvement processes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Compliance Questions?</h2>
          <p className="text-gray-300 mb-6">Our compliance team can provide detailed information about our certifications and standards.</p>
          <a 
            href="mailto:compliance@ziontechgroup.com"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Compliance Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
