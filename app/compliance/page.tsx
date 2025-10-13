<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileCheck, Lock, Award } from 'lucide-react'
const CompliancePage: React.FC = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Comprehensive compliance management solutions for various industry standards',},
    {icon: Lock,
      title: 'Security Compliance',
      description: 'Ensure your systems meet the highest security and compliance standards',},
    {icon: Award,
      title: 'Certification Support',
      description: 'Get support for achieving and maintaining industry certifications',},
    {icon: Shield,
      title: 'Audit Readiness',
      description: 'Stay audit-ready with continuous compliance monitoring and reporting',}];
  const benefits = [
    'Advanced compliance technology integration',
    'Real-time compliance monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible compliance solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
  ];

  return (
    <>
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Professional Compliance services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="compliance, regulatory compliance, IT services, Zion Tech Group, compliance management" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold text-white mb-6">Compliance;</h1>
=======
          <h1 className="text-5xl font-bold text-white mb-6">
            Compliance
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Ensure your business meets all regulatory and compliance requirements.</p>
            Powered by advanced AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our compliance solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
        <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
          {features.map((feature, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description</p>}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Compliance Solutions?</h2>
          </h2>
          <div className="grid md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your compliance needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  ),
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
    </>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
};
=======
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6

<<<<<<< HEAD
export default CompliancePage;
=======
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
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
<<<<<<< HEAD
      </div>
    </>
<<<<<<< HEAD
=======
        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Regular Audits</h3>
              <p className="text-gray-300">We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is available to answer any questions about our security measures and certifications.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Compliance Team
          </a>
          <div className="mt-8 text-sm text-blue-200">
            <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
  )
}
export default CompliancePage
  </button>
  </button>
  </h1>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
