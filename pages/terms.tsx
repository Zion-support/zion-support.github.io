import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertCircle, Shield, Users, Gavel } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'Zion Tech Group reserves the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of our services after any such changes constitutes your acceptance of the new terms.'
        }
      ]
    },
    {
      title: 'Use License',
      icon: Scale,
      content: [
        {
          subtitle: 'Permission',
          text: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
        },
        {
          subtitle: 'Restrictions',
          text: 'You may not use the materials for any commercial purpose or for any public display (commercial or non-commercial), attempt to decompile or reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.'
        }
      ]
    },
    {
      title: 'Service Terms',
      icon: Users,
      content: [
        {
          subtitle: 'Service Availability',
          text: 'We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.'
        },
        {
          subtitle: 'User Responsibilities',
          text: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must provide accurate and complete information when creating an account.'
        },
        {
          subtitle: 'Prohibited Uses',
          text: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts, violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances, or infringe upon or violate our intellectual property rights or the intellectual property rights of others.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        {
          subtitle: 'Ownership',
          text: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'
        },
        {
          subtitle: 'User Content',
          text: 'You retain ownership of any content you submit, post, or display on or through our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertCircle,
      content: [
        {
          subtitle: 'Disclaimer',
          text: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
          subtitle: 'Limitations',
          text: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group\'s website, even if Zion Tech Group or an authorized representative has been notified orally or in writing of the possibility of such damage.'
        }
      ]
    },
    {
      title: 'Governing Law',
      icon: Gavel,
      content: [
        {
          subtitle: 'Jurisdiction',
          text: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.'
        },
        {
          subtitle: 'Dispute Resolution',
          text: 'Any disputes arising from these terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.'
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions for using Zion Tech Group's services. Understand your rights and responsibilities as a user."
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
            Please read these terms and conditions carefully before using our services.
          </p>
          <div className="text-blue-200">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Legal Notice</h3>
                  <p className="text-yellow-800">
                    These Terms of Service ("Terms") govern your use of the Zion Tech Group website and services. 
                    By accessing or using our services, you agree to be bound by these Terms. If you disagree with 
                    any part of these terms, then you may not access the service.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
              <p className="text-gray-600 mb-6">
                This agreement sets forth the terms and conditions under which you may use the Zion Tech Group 
                website and services. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All fees are non-refundable unless otherwise stated</li>
                  <li>• Payment is due in advance for subscription services</li>
                  <li>• We reserve the right to change pricing with 30 days notice</li>
                  <li>• Late payments may result in service suspension</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Either party may terminate this agreement at any time</li>
                  <li>• We may terminate accounts that violate these terms</li>
                  <li>• Upon termination, your right to use the service ceases</li>
                  <li>• Data retention policies apply after termination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us for clarification.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Changes to Terms</h3>
              <p className="text-blue-800">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by email or through our website. Your continued use of our services after such changes 
                constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;