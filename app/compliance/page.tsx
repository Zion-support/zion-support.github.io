import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              href="/privacy" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Privacy Policy
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>
              <p className="text-gray-600">Our commitment to security and regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security & Compliance Excellence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence across all our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Compliance Team
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Certifications & Compliance
            </h3>
            <p className="text-lg text-gray-600">
              We hold industry-leading certifications and maintain compliance with key regulations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-gray-600">Industry Standard Certification</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-lg font-medium text-green-600">{cert.status}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last Updated: {new Date().getFullYear()}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>This certification demonstrates our commitment to maintaining the highest standards of security, availability, and confidentiality in our services.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Security Features
            </h3>
            <p className="text-lg text-gray-600">
              Comprehensive security measures to protect your data and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Encryption</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">AES-256 encryption</p>
                  <p className="text-sm text-gray-600">End-to-end protection</p>
                  <p className="text-sm text-gray-600">Secure key management</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Multi-factor authentication</p>
                  <p className="text-sm text-gray-600">Role-based permissions</p>
                  <p className="text-sm text-gray-600">Single sign-on (SSO)</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Audit Trails</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Comprehensive logging</p>
                  <p className="text-sm text-gray-600">Real-time monitoring</p>
                  <p className="text-sm text-gray-600">Compliance reporting</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Training</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Security awareness</p>
                  <p className="text-sm text-gray-600">Regular updates</p>
                  <p className="text-sm text-gray-600">Best practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Compliance Process
            </h3>
            <p className="text-lg text-gray-600">
              How we maintain and monitor our compliance standards
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 'Regular Audits',
                description: 'Quarterly internal audits and annual third-party assessments to ensure continued compliance with all standards.',
                icon: <FileText className="w-6 h-6" />
              },
              {
                step: 'Continuous Monitoring',
                description: '24/7 monitoring of security controls and compliance metrics with real-time alerting.',
                icon: <Shield className="w-6 h-6" />
              },
              {
                step: 'Documentation',
                description: 'Comprehensive documentation of all policies, procedures, and controls for transparency and accountability.',
                icon: <Award className="w-6 h-6" />
              },
              {
                step: 'Training & Updates',
                description: 'Regular team training and system updates to maintain the highest security and compliance standards.',
                icon: <Users className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{item.step}</h4>
                  </div>
                  <div className="text-sm text-gray-500">Step {index + 1}</div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Questions?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Compliance Team
            </a>
            <div className="mt-8 text-sm text-blue-200">
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;