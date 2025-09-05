import React from 'react';
import Layout from '../components/Layout';
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Lock, Target } from 'lucide-react';

const gdprPrinciples = [
  {
    icon: Shield,
    title: 'Lawfulness, Fairness & Transparency',
    description: 'We process personal data lawfully, fairly, and in a transparent manner.'
  },
  {
    icon: Target,
    title: 'Purpose Limitation',
    description: 'We collect data for specified, explicit, and legitimate purposes only.'
  },
  {
    icon: CheckCircle,
    title: 'Data Minimization',
    description: 'We collect only the data that is adequate, relevant, and necessary.'
  },
  {
    icon: AlertTriangle,
    title: 'Accuracy',
    description: 'We keep personal data accurate and up to date.'
  },
  {
    icon: Lock,
    title: 'Storage Limitation',
    description: 'We retain data only for as long as necessary for the purpose.'
  },
  {
    icon: Users,
    title: 'Integrity & Confidentiality',
    description: 'We ensure appropriate security of personal data.'
  }
];

const rights = [
  'Right to be informed about data collection',
  'Right of access to personal data',
  'Right to rectification of inaccurate data',
  'Right to erasure (right to be forgotten)',
  'Right to restrict processing',
  'Right to data portability',
  'Right to object to processing',
  'Rights related to automated decision making'
];

export default function GDPRCompliance() {
  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to GDPR compliance and data protection. Your privacy and data security are our top priorities."
      keywords="GDPR compliance, data protection, privacy, data security, EU regulations, personal data"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GDPR Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Your privacy and data protection are our top priorities.
                Learn about our commitment to GDPR compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our GDPR Commitment
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Zion Tech Group is fully committed to compliance with the General Data Protection Regulation (GDPR)
                  and other applicable data protection laws. We have implemented comprehensive measures to ensure
                  the protection of personal data and respect for individual privacy rights.
                </p>
                <p className="text-lg text-gray-600">
                  Our data protection framework is designed to meet the highest standards of privacy and security,
                  giving you confidence that your personal information is handled responsibly and lawfully.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Data Protection Officer</h3>
                <p className="text-lg mb-4">
                  We have appointed a dedicated Data Protection Officer to ensure ongoing compliance
                  and to serve as your point of contact for data protection matters.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> dpo@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Principles Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GDPR Principles We Follow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our data processing activities are guided by the fundamental principles of GDPR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gdprPrinciples.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <principle.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Data Protection Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Under GDPR, you have specific rights regarding your personal data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights Include:</h3>
                <ul className="space-y-4">
                  {rights.map((right, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Exercise Your Rights</h3>
                <p className="text-lg mb-6">
                  To exercise any of your data protection rights, please contact our
                  Data Protection Officer using the information provided.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p>We will respond to your request within 30 days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verification</h4>
                    <p>We may need to verify your identity before processing your request.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">No Cost</h4>
                    <p>Exercising your rights is free of charge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Data Protection?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you have any questions about our data protection practices or want to exercise
              your rights, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contact DPO
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Privacy Policy
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}