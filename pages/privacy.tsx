import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you register for our services, contact us, or use our website. This may include your name, email address, phone number, company information, and any other information you choose to provide.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect certain information about your use of our services, including your IP address, browser type, device information, pages visited, time spent on pages, and other usage statistics.'
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          text: 'We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account and our services.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you important updates about our services, respond to your inquiries, and provide customer support.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage data to understand how our services are used, identify areas for improvement, and develop new features and services.'
        }
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: UserCheck,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who assist us in operating our business, such as hosting providers, payment processors, and analytics services.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or government regulation, or if we believe such disclosure is necessary to protect our rights, property, or safety, or that of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Encryption',
          text: 'We use industry-standard encryption technologies to protect sensitive information during transmission and storage.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We limit access to your personal information to authorized personnel who need it to perform their job functions.'
        }
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information. You can do this by logging into your account or contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to receive a copy of your personal information in a structured, commonly used format that you can transfer to another service provider.'
        },
        {
          subtitle: 'Deletion',
          text: 'You have the right to request the deletion of your personal information, subject to certain legal and contractual obligations.'
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                  <p className="text-blue-800">
                    This Privacy Policy explains how Zion Tech Group ("we," "our," or "us") collects, uses, discloses, 
                    and protects your information when you use our website and services. By using our services, you 
                    agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-600 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your 
                personal information. This Privacy Policy describes our practices regarding the collection, use, 
                and disclosure of information when you use our website and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About This Privacy Policy?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> dpo@ziontechgroup.com</p>
                  <p><strong>Response Time:</strong> Within 30 days</p>
                  <p><strong>Languages:</strong> English, Spanish</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Changes to This Privacy Policy</h3>
              <p className="text-blue-800">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to 
                review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Privacy;