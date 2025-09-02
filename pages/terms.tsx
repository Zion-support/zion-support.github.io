import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const termsSections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'These terms apply to all users of our website and services',
        'We reserve the right to modify these terms at any time'
      ]
    },
    {
      icon: Scale,
      title: 'Service Description',
      content: [
        'Zion Tech Group provides technology solutions including AI development, cloud services, and digital transformation',
        'Services are provided on an "as is" basis with no warranties',
        'We reserve the right to modify or discontinue services at any time',
        'Service availability may vary based on technical requirements and maintenance'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information when using our services',
        'Maintain the confidentiality of your account credentials',
        'Use our services in compliance with applicable laws and regulations',
        'Not engage in any activities that could harm our systems or other users'
      ]
    },
    {
      icon: XCircle,
      title: 'Prohibited Uses',
      content: [
        'Violating any applicable laws or regulations',
        'Transmitting malicious code or harmful content',
        'Attempting to gain unauthorized access to our systems',
        'Using our services for any illegal or unauthorized purpose'
      ]
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service to understand the rules and regulations for using our technology services and website."
      keywords="terms of service, user agreement, service terms, legal terms, conditions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-200 mb-4">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you disagree with any part of these terms, then you may not access our services. 
                  These Terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>

              {/* Terms Sections */}
              <div className="space-y-8">
                {termsSections.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our total liability to you for all damages shall not exceed the amount you paid us for 
                  the services in the twelve (12) months preceding the claim.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                  United States, without regard to its conflict of law provisions. Any disputes arising 
                  from these Terms shall be subject to the exclusive jurisdiction of the courts in Delaware.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Terms;