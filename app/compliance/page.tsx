import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
;

export default function Compliance() {
  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls for service organizations",
      status: "Certified",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data",
      status: "Compliant",
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      status: "Compliant",
      icon: <FileText className="w-8 h-8" />
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      status: "Compliant",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance",
      status: "Compliant",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const services = [
    {
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of your current compliance posture and gap analysis",
      features: ["Risk Assessment", "Gap Analysis", "Remediation Planning", "Documentation Review"]
    },
    {
      title: "Policy Development",
      description: "Custom policies and procedures tailored to your industry and regulatory requirements",
      features: ["Policy Creation", "Procedure Documentation", "Training Materials", "Implementation Support"]
    },
    {
      title: "Audit Support",
      description: "Expert guidance and support throughout the audit process",
      features: ["Pre-Audit Preparation", "Audit Management", "Evidence Collection", "Remediation Support"]
    },
    {
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and maintenance of compliance programs",
      features: ["Regular Assessments", "Policy Updates", "Training Programs", "Incident Response"]
    }
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, title: 'Risk Mitigation', description: 'Reduce regulatory and security risks with comprehensive compliance programs' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Audit Readiness', description: 'Stay prepared for audits with ongoing monitoring and documentation' },
    { icon: <Users className="w-6 h-6" />, title: 'Trust & Credibility', description: 'Build customer trust with certified compliance and security measures' },
    { icon: <Clock className="w-6 h-6" />, title: 'Time Savings', description: 'Streamline compliance processes with expert guidance and automation' }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance Services - Zion Tech Group | Regulatory Compliance & Security</title>
        <meta
          name="description"
          content="Ensure regulatory compliance with our comprehensive compliance services. SOC 2, ISO 27001, GDPR, HIPAA, and more. Expert guidance for your compliance journey."
        />
        <meta
          name="keywords"
          content="compliance services, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, regulatory compliance, security compliance, audit support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Compliance Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate complex regulatory requirements with confidence. Our compliance experts help you 
              achieve and maintain certification across multiple frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Compliance Certifications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest standards of compliance and security across multiple frameworks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      {framework.icon}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {framework.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{framework.name}</h3>
                  <p className="text-gray-300">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Compliance Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive compliance solutions tailored to your industry and regulatory requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Compliance Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with experts who understand the complexities of regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve Compliance?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our compliance experts guide you through the certification process and help you maintain ongoing compliance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Compliance Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

