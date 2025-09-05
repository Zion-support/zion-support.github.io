import React from 'react';
import Layout from '../components/Layout';
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, DollarSign } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the rules and regulations for using our services."
      keywords="terms of service, legal terms, service agreement, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's services and solutions.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                
                <p className="mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound 
                  by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>

                <p className="mb-6">
                  Zion Tech Group provides AI services, IT solutions, and micro SaaS platforms including but not limited to:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Machine learning and artificial intelligence solutions</li>
                  <li>Cloud infrastructure and DevOps services</li>
                  <li>Cybersecurity and compliance solutions</li>
                  <li>Custom software development and micro SaaS platforms</li>
                  <li>IT consulting and digital transformation services</li>
                  <li>Data analytics and business intelligence solutions</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <DollarSign className="w-6 h-6 mr-3 text-blue-600" />
                  Payment Terms
                </h2>

                <p className="mb-6">
                  Payment terms are as follows:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Services are billed monthly in advance</li>
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to change with 30 days notice</li>
                  <li>Refunds are handled on a case-by-case basis</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Service Level Agreement
                </h2>

                <p className="mb-6">
                  We commit to the following service levels:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>99.9% uptime guarantee for hosted services</li>
                  <li>24/7 technical support availability</li>
                  <li>Response time: 4 hours for critical issues</li>
                  <li>Regular security updates and patches</li>
                  <li>Data backup and disaster recovery procedures</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>

                <p className="mb-6">
                  Users are responsible for:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Using services only for lawful purposes</li>
                  <li>Not attempting to reverse engineer or compromise our systems</li>
                  <li>Respecting intellectual property rights</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Intellectual Property
                </h2>

                <p className="mb-6">
                  All intellectual property rights in our services remain with Zion Tech Group. 
                  Users retain rights to their own data and content.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>

                <p className="mb-6">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from the use of our services.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Termination
                </h2>

                <p className="mb-6">
                  Either party may terminate this agreement with 30 days written notice. 
                  We reserve the right to suspend or terminate services immediately for violations of these terms.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Governing Law
                </h2>

                <p className="mb-6">
                  These terms are governed by the laws of Delaware, United States. 
                  Any disputes will be resolved in the courts of Delaware.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Contact Information
                </h2>

                <p className="mb-6">
                  For questions about these terms, please contact us:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}