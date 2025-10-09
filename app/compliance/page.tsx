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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• End-to-end encryption</li>
                <li>• Regular security audits</li>
                <li>• Access controls and monitoring</li>
                <li>• Data backup and recovery</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOC 2 Type II certified</li>
                <li>• Regular compliance reviews</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Questions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer your questions and provide additional documentation.
          </p>
          <div className="mt-8">
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
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