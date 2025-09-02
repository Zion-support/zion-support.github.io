import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 1, 2024';

  const sections = [
  {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these Terms of Service.,If you do not agree to these terms, you may not access or use our services.,We reserve the right to modify these terms at any time without prior notice.,Your continued use of our services after changes constitutes acceptance of the new terms.'
      ]
    },
    {
      title: 'Service Description',
      icon: Scale,
      content: [
        'Zion Tech Group provides AI services, IT solutions, and micro SaaS development.,We offer consulting, development, implementation, and support services.,Service availability may vary and is subject to our capacity and resources.,We reserve the right to modify or discontinue services with reasonable notice.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'Provide accurate and complete information when engaging our services.,Comply with all applicable laws and regulations.,Respect intellectual property rights and confidentiality agreements.,Use our services only for lawful purposes and in accordance with these terms.,Maintain the security of any credentials or access provided to you.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: AlertTriangle,
      content: [
        'Payment terms are specified in individual service agreements.,Invoices are due within 30 days of receipt unless otherwise specified.,Late payments may incur additional fees and interest charges.,We reserve the right to suspend services for non-payment.,Refunds are subject to our refund policy and service agreement terms.'
      ]
    }
  ];

  const limitations = [
    'Services are provided "as is" without warranties of any kind,We are not liable for indirect, incidental, or consequential damages,Our liability is limited to the amount paid for the specific service,We do not guarantee specific results or outcomes,Third-party services and integrations are subject to their own terms'
  ];

  const intellectualProperty = [
    'We retain all rights to our proprietary technology and methodologies,Client retains rights to their data and business processes,Work product ownership is specified in individual service agreements,We respect third-party intellectual property rights,Unauthorized use of our intellectual property is prohibited'
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand the terms and conditions for using our AI services, IT solutions, and micro SaaS development services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. 
                These terms govern your use of Zion Tech Group's services and website.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website 
                and services. By accessing or using our services, you agree to be bound by 
                these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-600 mb-6">
                Zion Tech Group ("we," "our," or "us") provides AI services, IT solutions, 
                and micro SaaS development services. These Terms apply to all users of our 
                services, including clients, visitors, and other users.
              </p>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and intellectual property on our website and in our 
              services are owned by Zion Tech Group or our licensors. You may not use, 
              reproduce, or distribute our intellectual property without written permission.
            </p>
            <div className="space-y-3">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, 
              including but not limited to loss of profits, data, or business opportunities.
            </p>
            <div className="space-y-3">
              {limitations.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              We understand the importance of confidentiality in our business relationships. 
              We will maintain the confidentiality of all client information and will not 
              disclose such information to third parties without consent, except as required by law.
            </p>
            <p className="text-gray-600">
              Clients are also expected to maintain confidentiality regarding our proprietary 
              methodologies, technologies, and business practices.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate service agreements in accordance with the terms 
              specified in individual service agreements. We reserve the right to suspend 
              or terminate services immediately for violations of these Terms.
            </p>
            <p className="text-gray-600">
              Upon termination, all outstanding payments become due, and confidentiality 
              obligations continue to apply.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws 
              of the State of Delaware, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these Terms or our services shall be resolved 
              through binding arbitration in accordance with the rules of the American 
              Arbitration Association.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users 
              of material changes by posting the updated Terms on our website and updating 
              the "Last updated" date.
            </p>
            <p className="text-gray-600">
              Your continued use of our services after changes constitutes acceptance of 
              the updated Terms. If you do not agree to the changes, you must discontinue 
              use of our services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}