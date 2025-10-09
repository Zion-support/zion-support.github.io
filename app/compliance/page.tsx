import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliance', status: 'Certified' },
    { name: 'HIPAA Compliance', status: 'Certified' },
    { name: 'PCI DSS Level 1', status: 'Certified' },
    { name: 'FedRAMP Authorization', status: 'In Progress' }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection measures including encryption, access controls, and data classification.',
      features: [
        'End-to-end encryption',
        'Data loss prevention',
        'Access control and authentication',
        'Data backup and recovery',
        'Privacy impact assessments'
      ]
    },
    {
      title: 'Security Controls',
      description: 'Multi-layered security controls to protect against threats and vulnerabilities.',
      features: [
        'Network security monitoring',
        'Intrusion detection and prevention',
        'Vulnerability management',
        'Security incident response',
        'Regular security audits'
      ]
    },
    {
      title: 'Regulatory Compliance',
      description: 'Adherence to industry regulations and standards for data protection and security.',
      features: [
        'GDPR compliance framework',
        'HIPAA security requirements',
        'SOX compliance controls',
        'Industry-specific regulations',
        'Regular compliance assessments'
      ]
    },
    {
      title: 'Risk Management',
      description: 'Proactive risk identification, assessment, and mitigation strategies.',
      features: [
        'Risk assessment and analysis',
        'Business continuity planning',
        'Disaster recovery procedures',
        'Third-party risk management',
        'Ongoing risk monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      cert.status === 'Certified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                </div>

                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Compliance Documentation?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us for detailed compliance reports and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request Documentation
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;