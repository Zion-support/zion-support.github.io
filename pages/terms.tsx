import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const Terms: NextPage = () => {
  const keyTerms = [
    {
      icon: FileText,
      title: 'Service Agreement',
      description: 'Terms governing the use of our technology services and solutions.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Your responsibilities and obligations when using our services.'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protection of our proprietary technology and your content rights.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      description: 'Important limitations and disclaimers regarding our services.'
    },
    {
      icon: CheckCircle,
      title: 'Acceptable Use',
      description: 'Guidelines for appropriate use of our platform and services.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Your obligations as a user of our services and platform.'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand your rights and responsibilities when using Zion Tech Group's technology solutions and services."
      keywords="terms of service, user agreement, legal terms, service conditions, user responsibilities"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important aspects of our terms of service that you should understand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyTerms.map((term, index) => (
              <div key={term.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                  <term.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of Zion Tech Group's materials for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. 
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Safeguarding the password and all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You may not use our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>In any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website</li>
              <li>In any way which is unlawful, illegal, fraudulent, or harmful</li>
              <li>To conduct any systematic or automated data collection activities</li>
              <li>To transmit or send unsolicited commercial communications</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              Other than the content you own, under these Terms, Zion Tech Group and/or its licensors own all the intellectual 
              property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services, 
              to understand our practices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;