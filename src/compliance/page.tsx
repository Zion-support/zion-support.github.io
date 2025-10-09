import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Certified' },
    { name: 'HIPAA Ready', status: 'Certified' },
    { name: 'PCI DSS', status: 'Certified' },
    { name: 'FedRAMP', status: 'In Progress' }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection measures including encryption, access controls, and data classification.',
      icon: Shield,
      features: ['Data encryption at rest and in transit', 'Access controls and authentication', 'Data classification and handling', 'Privacy impact assessments']
    },
    {
      title: 'Security Controls',
      description: 'Robust security controls and monitoring to protect against threats and vulnerabilities.',
      icon: Lock,
      features: ['Security monitoring and logging', 'Vulnerability management', 'Incident response procedures', 'Security awareness training']
    },
    {
      title: 'Audit & Reporting',
      description: 'Regular audits and comprehensive reporting to ensure ongoing compliance.',
      icon: FileText,
      features: ['Regular compliance audits', 'Automated compliance reporting', 'Risk assessments', 'Remediation tracking']
    },
    {
      title: 'Governance',
      description: 'Strong governance framework to ensure compliance with regulations and standards.',
      icon: Users,
      features: ['Compliance policies and procedures', 'Training and awareness programs', 'Third-party risk management', 'Regulatory change management']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Compliance & Security
              </h1>
              <p className="text-xl md:text-2xl text-green-400 mb-8">
                Ensuring your business meets all regulatory requirements and security standards
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                We help businesses achieve and maintain compliance with industry standards and regulations 
                through comprehensive security measures and ongoing monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <span>Get Compliance Assessment</span>
                </a>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Our Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest standards of security and compliance
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-white mb-2">{cert.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    cert.status === 'Certified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Compliance Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive compliance solutions across all major areas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <area.icon className="w-10 h-10 text-green-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <ul className="space-y-3">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Achieve Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you navigate the complex world of compliance and security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <span>Get Free Assessment</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CompliancePage;