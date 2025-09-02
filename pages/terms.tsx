import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms: NextPage = () => {
  const keyTerms = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Service Agreement',
      description: 'Clear terms for our technology services and solutions'
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: 'Legal Protection',
      description: 'Mutual protection for both parties in our business relationship'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-600" />,
      title: 'Limitations',
      description: 'Clear understanding of service limitations and responsibilities'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Compliance',
      description: 'Ensuring compliance with applicable laws and regulations'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's terms of service and understand your rights and responsibilities."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services. By using our services, you agree to these terms.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of our services and establish the framework for our business relationship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides technology solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Micro SaaS development and deployment</li>
              <li>IT services and infrastructure management</li>
              <li>AI and machine learning solutions</li>
              <li>Cloud architecture and migration services</li>
              <li>Custom software development</li>
              <li>Technical consulting and support</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain confidentiality of sensitive information</li>
              <li>Pay all fees and charges as agreed</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Fees are due according to the agreed payment schedule</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are exclusive of applicable taxes</li>
              <li>Refunds are subject to our refund policy</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All intellectual property rights in our services remain with Zion Tech Group unless otherwise agreed. 
              You retain rights to your own intellectual property, and we respect those rights.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              Both parties agree to maintain confidentiality of sensitive information shared during the course 
              of our business relationship. This includes technical information, business strategies, and client data.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to loss of profits, 
              data, or business opportunities.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              While we strive to maintain high service availability, we do not guarantee uninterrupted access 
              to our services. We may perform maintenance, updates, or modifications that may temporarily affect availability.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate this agreement with appropriate notice. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>All outstanding payments become due</li>
              <li>Access to services may be suspended</li>
              <li>Data return procedures will be followed</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
              United States, without regard to conflict of law principles.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective upon posting 
              on our website. Continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1-302-464-0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;