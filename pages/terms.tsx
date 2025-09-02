import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const Terms: NextPage = () => {
  const termsSections = [
    {
      icon: Users,
      title: 'User Agreement',
      description: 'Terms governing your use of our services and platform.'
    },
    {
      icon: Shield,
      title: 'Service Terms',
      description: 'Conditions for accessing and using our technology solutions.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Our commitment to legal standards and regulatory compliance.'
    },
    {
      icon: CheckCircle,
      title: 'Acceptable Use',
      description: 'Guidelines for appropriate use of our services and resources.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      description: 'Important limitations and disclaimers regarding our services.'
    },
    {
      icon: FileText,
      title: 'Updates',
      description: 'How we handle changes to these terms and conditions.'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's terms of service and user agreement. Understand your rights and responsibilities when using our technology solutions and services."
      keywords="terms of service, user agreement, legal terms, service conditions, user responsibilities"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 27, 2025
            </p>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms Overview</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These terms govern your use of Zion Tech Group's services and outline the rights and responsibilities of both parties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {termsSections.map((section, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <section.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Availability</h2>
                <p className="text-gray-700 mb-4">
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Provide accurate and complete information when required</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Not engage in any activity that could harm or disrupt our services</li>
                  <li>Respect the intellectual property rights of others</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You may not use our services:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property 
                  of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                  this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                  without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
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