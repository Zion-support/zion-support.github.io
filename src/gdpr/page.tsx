import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Star, ArrowRight, Users, Lock, Eye, FileText } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const principles = [
    {
      title: 'Lawfulness, Fairness and Transparency',
      description: 'Personal data must be processed lawfully, fairly and in a transparent manner'
    },
    {
      title: 'Purpose Limitation',
      description: 'Personal data must be collected for specified, explicit and legitimate purposes'
    },
    {
      title: 'Data Minimisation',
      description: 'Personal data must be adequate, relevant and limited to what is necessary'
    },
    {
      title: 'Accuracy',
      description: 'Personal data must be accurate and kept up to date'
    },
    {
      title: 'Storage Limitation',
      description: 'Personal data must be kept in a form that permits identification for no longer than necessary'
    },
    {
      title: 'Integrity and Confidentiality',
      description: 'Personal data must be processed in a manner that ensures appropriate security'
    }
  ];

  const rights = [
    'Right to be informed',
    'Right of access',
    'Right to rectification',
    'Right to erasure',
    'Right to restrict processing',
    'Right to data portability',
    'Right to object',
    'Rights related to automated decision making'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 2025
          </p>
          
          <div className="cyber-card p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                What is GDPR?
              </h2>
              <p className="text-gray-300 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law
                that governs how personal data is collected, processed, and stored within the European Union.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                GDPR Principles
              </h2>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                    <p className="text-gray-300">{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-cyan-400" />
                Individual Rights
              </h2>
              <p className="text-gray-300 mb-4">
                Under GDPR, individuals have the following rights regarding their personal data:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {rights.map((right, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {right}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                Our GDPR Compliance
              </h2>
              <p className="text-gray-300 mb-4">
                We are committed to GDPR compliance and have implemented the following measures:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Data Protection Impact Assessments (DPIA)</li>
                <li>• Privacy by Design and Default</li>
                <li>• Data Processing Agreements (DPA)</li>
                <li>• Regular staff training on data protection</li>
                <li>• Incident response procedures</li>
                <li>• Data subject rights procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                Data Processing
              </h2>
              <p className="text-gray-300 mb-4">
                We process personal data in accordance with GDPR requirements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Basis</h3>
                  <p className="text-gray-300">Consent, contract performance, legal obligation, legitimate interests</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Data Retention</h3>
                  <p className="text-gray-300">Data is retained only as long as necessary for the specified purpose</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-4">
                For any GDPR-related inquiries, please contact our Data Protection Officer:
              </p>
              <div className="mt-4 text-cyan-400 space-y-2">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-3" />
                  <span>dpo@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GDPRPage;