import React from 'react';
import { Shield, CheckCircle, FileText, Users, Clock, Phone, Mail, ArrowRight } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: FileText
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: CheckCircle
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: Users
    }
  ];

  const complianceFeatures = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data encryption and access controls',
      benefits: ['End-to-end encryption', 'Role-based access', 'Data anonymization']
    },
    {
      title: 'Audit Trails',
      description: 'Complete logging and monitoring of all activities',
      benefits: ['Real-time monitoring', 'Comprehensive logs', 'Automated alerts']
    },
    {
      title: 'Privacy Controls',
      description: 'Advanced privacy protection and consent management',
      benefits: ['Consent tracking', 'Data minimization', 'Right to be forgotten']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance & Security
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Enterprise-grade security and compliance standards
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data 
            and ensure regulatory adherence across all our services.
          </p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Compliance Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <standard.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 mb-4">{standard.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Compliance Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance experts are here to help you meet your regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Compliance Team
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;