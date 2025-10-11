import React from 'react';
import { CheckCircle, Shield, FileText, Lock, Users, Database, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations',
      features: ['Security Controls', 'Availability Monitoring', 'Confidentiality Protection', 'Annual Audits']
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      features: ['Risk Management', 'Security Policies', 'Continuous Improvement', 'Management Review']
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      features: ['Data Privacy', 'Consent Management', 'Right to Erasure', 'Data Portability']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act for healthcare data',
      features: ['PHI Protection', 'Access Controls', 'Audit Logs', 'Business Associate Agreements']
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment processing',
      features: ['Secure Networks', 'Cardholder Data Protection', 'Vulnerability Management', 'Regular Testing']
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for government cloud services',
      features: ['Security Controls', 'Continuous Monitoring', 'Authorization Process', 'Third-Party Assessment']
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of your current compliance posture and gap analysis'
    },
    {
      icon: Shield,
      title: 'Policy Development',
      description: 'Creation of comprehensive security and compliance policies tailored to your organization'
    },
    {
      icon: Lock,
      title: 'Security Implementation',
      description: 'Implementation of security controls and measures to meet compliance requirements'
    },
    {
      icon: Users,
      title: 'Training & Awareness',
      description: 'Employee training programs to ensure compliance awareness and best practices'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Implementation of data protection measures and privacy controls'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Support for international compliance requirements across multiple jurisdictions'
    }
  ];

  const benefits = [
    'Reduced regulatory risk',
    'Enhanced security posture',
    'Improved customer trust',
    'Competitive advantage',
    'Cost savings through automation',
    'Streamlined audit processes',
    'Better data governance',
    'Increased operational efficiency'
  ];

  return (
    <>
      <Helmet>
        <title>Compliance Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance solutions including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS implementation." />
        <meta name="keywords" content="compliance, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, security compliance, regulatory compliance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Compliance Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ensure your organization meets regulatory requirements with our comprehensive compliance solutions. 
              From assessment to implementation, we help you achieve and maintain compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Compliance Assessment
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Standards
              </button>
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Compliance Standards We Support
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">{standard.name}</h3>
                  <p className="text-gray-300 mb-4">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Our Compliance Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <service.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Benefits of Compliance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Our Compliance Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Evaluate current compliance posture and identify gaps</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
                <p className="text-gray-300">Develop comprehensive compliance roadmap and timeline</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">Execute compliance measures and security controls</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Maintenance</h3>
                <p className="text-gray-300">Ongoing monitoring and compliance management</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our compliance experts help you navigate regulatory requirements and build a robust compliance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Compliance Assessment
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompliancePage;