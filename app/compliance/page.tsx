import React from 'react';
import { Helmet } from 'react-helmet-async';

const CompliancePage = () => {
  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's compliance with industry standards and regulations including SOC 2, ISO 27001, GDPR, and HIPAA." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations and security frameworks 
              to ensure your data is protected and your business requirements are met.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">SOC 2 Type II</h3>
              <p className="text-gray-300 mb-6">
                Audited controls for security, availability, processing integrity, confidentiality, and privacy.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Annual third-party audits</li>
                <li>• Security controls assessment</li>
                <li>• Availability monitoring</li>
                <li>• Data processing integrity</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">ISO 27001</h3>
              <p className="text-gray-300 mb-6">
                International standard for information security management systems.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Information security policies</li>
                <li>• Risk management framework</li>
                <li>• Security controls implementation</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">GDPR</h3>
              <p className="text-gray-300 mb-6">
                European General Data Protection Regulation compliance for data privacy.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Data subject rights</li>
                <li>• Privacy by design</li>
                <li>• Data protection impact assessments</li>
                <li>• Breach notification procedures</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">HIPAA</h3>
              <p className="text-gray-300 mb-6">
                Health Insurance Portability and Accountability Act compliance for healthcare data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Administrative safeguards</li>
                <li>• Physical safeguards</li>
                <li>• Technical safeguards</li>
                <li>• Business associate agreements</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">PCI DSS</h3>
              <p className="text-gray-300 mb-6">
                Payment Card Industry Data Security Standard for payment processing.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Secure network architecture</li>
                <li>• Cardholder data protection</li>
                <li>• Vulnerability management</li>
                <li>• Regular security testing</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">CCPA</h3>
              <p className="text-gray-300 mb-6">
                California Consumer Privacy Act compliance for consumer data protection.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Consumer privacy rights</li>
                <li>• Data transparency</li>
                <li>• Opt-out mechanisms</li>
                <li>• Data deletion rights</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Compliance Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Governance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Compliance program management</li>
                  <li>• Policy development and maintenance</li>
                  <li>• Training and awareness programs</li>
                  <li>• Regular compliance assessments</li>
                  <li>• Board and executive oversight</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Risk Management</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Risk assessment and analysis</li>
                  <li>• Risk mitigation strategies</li>
                  <li>• Third-party risk management</li>
                  <li>• Incident response planning</li>
                  <li>• Business continuity planning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Audit and Certification</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">SOC 2 Type II Audit</h3>
                <p className="text-gray-300 mb-2">
                  Annual third-party audit of our security, availability, and confidentiality controls.
                </p>
                <p className="text-sm text-gray-400">Last audit: Q4 2023 | Next audit: Q4 2024</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-bold mb-2">ISO 27001 Certification</h3>
                <p className="text-gray-300 mb-2">
                  International certification for our information security management system.
                </p>
                <p className="text-sm text-gray-400">Certified: 2023 | Valid until: 2026</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2">GDPR Compliance</h3>
                <p className="text-gray-300 mb-2">
                  Ongoing compliance with European data protection regulations.
                </p>
                <p className="text-sm text-gray-400">Compliant since: May 2018</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Data Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Data Categories</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Personal identification data</li>
                  <li>• Business contact information</li>
                  <li>• Technical usage data</li>
                  <li>• Payment and billing data</li>
                  <li>• Communication records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Processing Purposes</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Service delivery and support</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Legal and regulatory compliance</li>
                  <li>• Business operations and analytics</li>
                  <li>• Customer communication</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Compliance Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We provide comprehensive compliance documentation and reports to help you meet your regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Request Documentation
              </a>
              <a
                href="/security"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Security Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompliancePage;