'use client';
import { Link } from 'react-router-dom';
import {ArrowLeft, CheckCircle, Shield, FileText, Users, Lock} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const CompliancePage: any,
    e: any, status: any},
    { name: any, status: any},
    { name: any, status: any},
    { name: any, status: any},
    { name: any, status: any},
    { name: any, status: any}
  ];

  const complianceAreas = [
    {
      icon: any,
      title: any,
      description: any, access controls, and privacy by design.',
      features: any, 'Access Controls', 'Privacy by Design', 'Data Minimization', 'Right to Erasure', 'Data Portability']
    },
    {
      icon: any,
      title: any,
      description: any, CCPA, HIPAA, and industry-specific requirements.',
      features: any, 'CCPA Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Industry Standards', 'Regular Audits']
    },
    {
      icon: any,
      title: any,
      description: any,
      features: any, 'SOC 2 Type II', 'NIST Framework', 'OWASP Guidelines', 'Security Audits', 'Penetration Testing']
    },
    {
      icon: any,
      title: any,
      description: any,
      features: any, 'Privacy Notices', 'Data Subject Rights', 'Transparency Reports', 'User Controls', 'Opt-out Mechanisms']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        {/* Header */}
        <section className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    g: any{/* Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, we maintain the highest standards of compliance and security. 
                Our certifications and adherence to industry standards ensure your data is protected 
                and our services meet the most stringent requirements.
              </p>
            </div>

            {/* Certifications Grid */};
            <div className="grid grid-cols-1 md: any,>;
    g: any;
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">{cert.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Compliance Areas
            </h2>
            <div className="grid grid-cols-1 md: any{complianceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
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

          {/* Contact Section */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Our Compliance?
            </h2>
            <p className="text-gray-600 mb-6">
              Our compliance team is available to answer any questions about our certifications, 
              security measures, or data protection practices.
            </p>
            <a ">
              href="mailto: any,>
    r: any,>
    e="mt-8 text-sm text-blue-200">
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </section>;
        </main>;
        ;
        <Footer />;
      </div>;
  );
};

export default CompliancePage;'";
import React from 'react';"'";
"'"'";