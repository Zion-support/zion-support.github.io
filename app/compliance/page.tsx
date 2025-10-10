'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, FileText, Lock, AlertTriangle } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'GDPR Compliance',
      description: 'Full compliance with General Data Protection Regulation for EU data protection.',
      features: ['Data protection by design', 'Privacy impact assessments', 'Right to be forgotten', 'Data breach notifications']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection and security standards for medical information.',
      features: ['Administrative safeguards', 'Physical safeguards', 'Technical safeguards', 'Risk assessments']
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations.',
      features: ['Security controls', 'Availability monitoring', 'Confidentiality protection', 'Processing integrity']
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'ISO 27001',
      description: 'Information security management system standards and best practices.',
      features: ['Risk management', 'Security policies', 'Incident response', 'Continuous improvement']
    }
  ];

  const services = [
    {
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of your current compliance posture and gap analysis.',
      features: ['Current state analysis', 'Gap identification', 'Risk assessment', 'Remediation roadmap']
    },
    {
      title: 'Policy Development',
      description: 'Custom policies and procedures tailored to your industry and regulatory requirements.',
      features: ['Policy creation', 'Procedure documentation', 'Training materials', 'Implementation support']
    },
    {
      title: 'Audit Support',
      description: 'Preparation and support for external audits and compliance certifications.',
      features: ['Audit preparation', 'Documentation review', 'Interview support', 'Remediation guidance']
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and maintenance of compliance programs.',
      features: ['Regular assessments', 'Policy updates', 'Training programs', 'Incident response']
    }
  ];

  const benefits = [
    'Reduce compliance risk by 80%',
    'Streamline audit processes',
    'Protect sensitive data',
    'Meet regulatory requirements',
    'Improve security posture',
    'Build customer trust'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance Services - Zion Tech Group</title>
        <meta name="description" content="Professional compliance services by Zion Tech Group. GDPR, HIPAA, SOC 2, and ISO 27001 compliance solutions for your business." />
        <meta name="keywords" content="compliance services, GDPR compliance, HIPAA compliance, SOC 2, ISO 27001, data protection, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Compliance Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ensure your business meets all regulatory requirements with our comprehensive compliance solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you achieve compliance with major regulatory frameworks and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4 text-purple-400">
                  {framework.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {framework.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {framework.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {framework.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Compliance Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance solutions tailored to your industry and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Compliance Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional compliance management that protects your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your compliance needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;