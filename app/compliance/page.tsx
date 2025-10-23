'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, FileText, Users, Lock, AlertTriangle, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['Data protection impact assessments', 'Privacy by design', 'Data subject rights', 'Breach notification']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: <FileText className="w-8 h-8" />,
      features: ['Protected health information security', 'Administrative safeguards', 'Physical safeguards', 'Technical safeguards']
    },
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2 compliance for security and availability',
      icon: <Lock className="w-8 h-8" />,
      features: ['Security controls', 'Availability controls', 'Processing integrity', 'Confidentiality controls']
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      icon: <Award className="w-8 h-8" />,
      features: ['Risk management', 'Security policies', 'Continuous improvement', 'Management commitment']
    }
  ];

  const services = [
    {
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of your current compliance posture',
      features: ['Gap analysis', 'Risk assessment', 'Compliance roadmap', 'Priority recommendations']
    },
    {
      title: 'Policy Development',
      description: 'Create and implement comprehensive compliance policies and procedures',
      features: ['Policy templates', 'Custom documentation', 'Training materials', 'Implementation guides']
    },
    {
      title: 'Audit Support',
      description: 'Prepare for and support compliance audits and certifications',
      features: ['Audit preparation', 'Documentation review', 'Remediation support', 'Certification assistance']
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Continuous compliance monitoring and maintenance services',
      features: ['Regular assessments', 'Policy updates', 'Training programs', 'Incident response']
    }
  ];

  const benefits = [
    'Reduce compliance risks and potential penalties',
    'Build trust with customers and partners',
    'Streamline audit processes and reduce costs',
    'Stay up-to-date with changing regulations',
    'Improve data security and privacy practices',
    'Enhance business reputation and credibility'
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'HIPAA, FDA, and medical device compliance' },
    { name: 'Finance', icon: '🏦', description: 'PCI DSS, SOX, and financial regulations' },
    { name: 'Technology', icon: '💻', description: 'GDPR, CCPA, and data protection laws' },
    { name: 'Government', icon: '🏛️', description: 'FISMA, FedRAMP, and federal compliance' },
    { name: 'Education', icon: '🎓', description: 'FERPA, COPPA, and educational privacy laws' },
    { name: 'Retail', icon: '🛒', description: 'PCI DSS, consumer protection, and e-commerce laws' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Compliance Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance services by Zion Tech Group. GDPR, HIPAA, SOC 2, and ISO 27001 compliance solutions for your business." />
        </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1>Compliance Solutions
            </h1>
            <p>Navigate complex regulatory requirements with confidence. Our experts help you achieve and maintain compliance across all major frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Get Compliance Assessment
              </button>
              <button>Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Compliance Frameworks We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div>{framework.icon}
                  </div>
                  <h3>{framework.name}</h3>
                  <p>{framework.description}</p>
                  <ul className="space-y-2">
                    {framework.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle>{feature}
                      </CheckCircle>li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Our Compliance Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle>{feature}
                      </CheckCircle>li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div>{industry.icon}</div>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Why Choose Our Compliance Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Achieve Compliance?</h2>
            <p>Let our compliance experts help you navigate regulatory requirements and protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Shield>Start Compliance Assessment
              </Shield>button>
              <button>Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;