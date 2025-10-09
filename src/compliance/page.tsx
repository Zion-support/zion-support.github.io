import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, FileText, Users, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const _certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Certified' },
    { name: 'HIPAA Compliant', status: 'Certified' },
    { name: 'PCI DSS', status: 'Certified' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Compliance & Security</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {_certifications.map((cert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-cyan-300 font-medium">{cert.status}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Security First Approach</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures and maintain strict compliance standards.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            Learn More About Our Security
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;