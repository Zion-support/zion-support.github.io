import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Database, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const DataProtection: NextPage = () => {
  const protectionMeasures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Data Encryption',
      description: 'All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access your data.'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Secure Storage',
      description: 'Data is stored in secure, certified data centers with multiple layers of protection.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: 'Regular Audits',
      description: 'We conduct regular security audits and assessments to maintain the highest standards.'
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'CCPA', description: 'California Consumer Privacy Act compliance' },
    { name: 'SOC 2', description: 'Security and availability controls' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'HIPAA', description: 'Healthcare data protection (where applicable)' }
  ];

  return (
    <MainLayout
      title="Data Protection - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive data protection measures and compliance standards."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your data security is our top priority. Learn about our comprehensive data protection measures and compliance standards.
          </p>
        </div>
      </section>

      {/* Protection Measures */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Data Protection Measures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement multiple layers of security to protect your data and ensure compliance with global standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionMeasures.map((measure, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {measure.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{measure.title}</h3>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with major international data protection and security standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{standard.name}</h3>
                </div>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Classification and Handling</h2>
            <p className="text-gray-600 mb-6">
              We classify data based on sensitivity levels and apply appropriate protection measures:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Public:</strong> Information that can be freely shared</li>
              <li><strong>Internal:</strong> Information for internal use only</li>
              <li><strong>Confidential:</strong> Sensitive business information</li>
              <li><strong>Restricted:</strong> Highly sensitive personal or financial data</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Safeguards</h2>
            <p className="text-gray-600 mb-6">
              Our technical safeguards include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security updates and patches</li>
              <li>Intrusion detection and prevention systems</li>
              <li>Automated backup and disaster recovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Administrative Safeguards</h2>
            <p className="text-gray-600 mb-6">
              We implement comprehensive administrative controls:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Regular security training for all employees</li>
              <li>Background checks for personnel with data access</li>
              <li>Clear data handling policies and procedures</li>
              <li>Incident response and breach notification procedures</li>
              <li>Regular security assessments and audits</li>
              <li>Vendor security requirements and monitoring</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Physical Safeguards</h2>
            <p className="text-gray-600 mb-6">
              Physical security measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Biometric access controls</li>
              <li>Video surveillance and alarm systems</li>
              <li>Environmental controls and fire suppression</li>
              <li>Secure disposal of hardware and media</li>
              <li>Visitor access controls and logging</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Breach Response</h2>
            <p className="text-gray-600 mb-6">
              In the event of a data breach, we have established procedures to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Immediately contain and assess the breach</li>
              <li>Notify affected individuals within 72 hours (GDPR)</li>
              <li>Report to relevant authorities as required</li>
              <li>Conduct forensic analysis and remediation</li>
              <li>Implement additional safeguards to prevent recurrence</li>
              <li>Provide support and resources to affected parties</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-6">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data (right to be forgotten)</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Our Data Protection Officer</h2>
            <p className="text-gray-600 mb-6">
              For questions about data protection or to exercise your rights, contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> dpo@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1-302-464-0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DataProtection;