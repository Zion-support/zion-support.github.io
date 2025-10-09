import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance & Certifications</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-green-400 font-semibold mb-4">{cert.status}</p>
                <p className="text-gray-300 text-sm">
                  {cert.name === 'SOC 2 Type II' && 'Audited controls for security, availability, processing integrity, confidentiality, and privacy.'}
                  {cert.name === 'ISO 27001' && 'International standard for information security management systems.'}
                  {cert.name === 'GDPR' && 'General Data Protection Regulation compliance for EU data protection.'}
                  {cert.name === 'HIPAA' && 'Health Insurance Portability and Accountability Act compliance for healthcare data.'}
                  {cert.name === 'PCI DSS' && 'Payment Card Industry Data Security Standard for payment processing.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Framework</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Data Protection
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Data Encryption</h4>
                    <p className="text-gray-300 text-sm">All data encrypted in transit and at rest using AES-256 encryption.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Access Controls</h4>
                    <p className="text-gray-300 text-sm">Role-based access controls with multi-factor authentication.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Data Minimization</h4>
                    <p className="text-gray-300 text-sm">We collect and process only the data necessary for our services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Right to Erasure</h4>
                    <p className="text-gray-300 text-sm">Users can request deletion of their personal data at any time.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-cyan-400" />
                Security Measures
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Regular Audits</h4>
                    <p className="text-gray-300 text-sm">Quarterly security audits and penetration testing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Incident Response</h4>
                    <p className="text-gray-300 text-sm">24/7 monitoring and rapid response to security incidents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Employee Training</h4>
                    <p className="text-gray-300 text-sm">Regular security awareness training for all team members.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Vendor Management</h4>
                    <p className="text-gray-300 text-sm">Strict vetting and monitoring of third-party vendors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Compliance?</h3>
            <p className="text-gray-300 mb-6">
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button inline-flex items-center justify-center"
              >
                Contact Compliance Team
              </a>
              <a 
                href="/security" 
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Security Overview
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Compliance team available Monday-Friday, 9 AM - 5 PM EST
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;