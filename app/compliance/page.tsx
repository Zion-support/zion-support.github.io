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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  End-to-end encryption for all data
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Regular security audits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Multi-factor authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Secure data centers
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Award className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Framework</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SOC 2 Type II certified
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  ISO 27001 compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  GDPR compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  HIPAA compliant
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Need Compliance Documentation?</h2>
            <p className="text-gray-300 mb-6">
              Contact us to request compliance reports, certifications, or security documentation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Request Documentation
              </a>
              <a 
                href="mailto:compliance@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Email Compliance Team
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;