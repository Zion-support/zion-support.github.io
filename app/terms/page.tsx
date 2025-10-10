'use client';
import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Agreement to Terms',
          items: [
            'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.',
            'If you do not agree to abide by the above, please do not use this service.',
            'These terms apply to all visitors, users, and others who access or use the service.'
          ]
        }
      ]
    },
    {
      title: 'Service Description',
      icon: FileText,
      content: [
        {
          subtitle: 'Our Services',
          items: [
            'AI-powered enterprise solutions and consulting services',
            'IT infrastructure design, implementation, and management',
            'Micro SAAS tools and applications',
            'Cloud migration and digital transformation services',
            'Custom software development and integration'
          ]
        },
        {
          subtitle: 'Service Availability',
          items: [
            'We strive to maintain 99.9% uptime for our services',
            'Scheduled maintenance will be announced in advance',
            'We reserve the right to modify or discontinue services with notice',
            'Service availability may vary based on your subscription plan'
          ]
        }
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        {
          subtitle: 'Account Security',
          items: [
            'You are responsible for maintaining the confidentiality of your account credentials',
            'You must notify us immediately of any unauthorized use of your account',
            'You are responsible for all activities that occur under your account',
            'You must use strong passwords and enable two-factor authentication when available'
          ]
        },
        {
          subtitle: 'Acceptable Use',
          items: [
            'Use our services only for lawful purposes',
            'Do not attempt to gain unauthorized access to our systems',
            'Do not use our services to transmit malicious code or harmful content',
            'Respect intellectual property rights and do not infringe on others\' rights'
          ]
        }
      ]
    },
    {
      title: 'Payment Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Billing and Payment',
          items: [
            'Payment is due in advance for subscription services',
            'We accept major credit cards and bank transfers',
            'All prices are in USD unless otherwise specified',
            'Taxes and fees may apply based on your location'
          ]
        },
        {
          subtitle: 'Refunds and Cancellations',
          items: [
            'Refunds are provided according to our refund policy',
            'You may cancel your subscription at any time',
            'Cancellation takes effect at the end of your current billing period',
            'No refunds for partial months of service'
          ]
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        {
          subtitle: 'Our Rights',
          items: [
            'All content, trademarks, and intellectual property on our platform are owned by Zion Tech Group',
            'You may not copy, modify, or distribute our proprietary content without permission',
            'Our services and software are protected by copyright and other intellectual property laws',
            'We reserve all rights not expressly granted to you'
          ]
        },
        {
          subtitle: 'Your Content',
          items: [
            'You retain ownership of content you provide to us',
            'You grant us a license to use your content to provide our services',
            'You are responsible for ensuring you have rights to any content you provide',
            'We may remove content that violates these terms or applicable laws'
          ]
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Disclaimer',
          items: [
            'Our services are provided "as is" without warranties of any kind',
            'We do not guarantee that our services will be uninterrupted or error-free',
            'We are not liable for any indirect, incidental, or consequential damages',
            'Our total liability is limited to the amount you paid for our services'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Terms of
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These terms govern your use of our services. Please read them carefully before using our platform.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <FileText className="w-5 h-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="card-futuristic glass-dark p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Terms?</h2>
          <p className="text-gray-300 mb-8">
            If you have any questions about these terms of service, please contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Contact Legal Team
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;