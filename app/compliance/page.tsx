import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, FileText, Users, Phone, Mail, ArrowRight } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection measures including encryption, access controls, and privacy by design.',
      icon: Shield,
      features: ['End-to-end encryption', 'Data anonymization', 'Access controls', 'Privacy by design']
    },
    {
      title: 'Security Standards',
      description: 'Industry-leading security standards and best practices to protect your sensitive information.',
      icon: FileText,
      features: ['Regular audits', 'Penetration testing', 'Vulnerability assessments', 'Security training']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Full compliance with international regulations including GDPR, HIPAA, and industry-specific requirements.',
      icon: CheckCircle,
      features: ['GDPR compliance', 'HIPAA compliance', 'Industry standards', 'Regular updates']
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training programs to ensure all team members understand and follow compliance requirements.',
      icon: Users,
      features: ['Regular training', 'Certification programs', 'Best practices', 'Continuous education']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance & Certifications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security, privacy, and regulatory compliance to protect your data and ensure trust.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-green-400 font-semibold">{cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Compliance Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <area.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Compliance Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is available to answer your questions and provide additional documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancePage;