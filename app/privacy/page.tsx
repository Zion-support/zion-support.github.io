'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, phone number, and company information when you contact us',
            'Billing and payment information for service purchases',
            'Account credentials and preferences for our services',
            'Communication records including emails and support tickets'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'IP address, browser type, and device information',
            'Website usage data and analytics',
            'Cookies and similar tracking technologies',
            'Server logs and system performance data'
          ]
        },
        {
          subtitle: 'Business Information',
          items: [
            'Project requirements and specifications',
            'Business goals and objectives',
            'Technical infrastructure details',
            'Performance metrics and outcomes'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Provide and maintain our AI and IT services',
            'Process payments and manage billing',
            'Communicate with you about your projects',
            'Provide customer support and technical assistance'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [
            'Improve our services and develop new features',
            'Analyze usage patterns and performance metrics',
            'Conduct research and development',
            'Ensure security and prevent fraud'
          ]
        },
        {
          subtitle: 'Legal Compliance',
          items: [
            'Comply with applicable laws and regulations',
            'Respond to legal requests and court orders',
            'Protect our rights and interests',
            'Enforce our terms of service'
          ]
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: UserCheck,
      content: [
        {
          subtitle: 'We Do Not Sell Your Information',
          items: [
            'We never sell, rent, or trade your personal information to third parties',
            'We do not share your information for marketing purposes without consent',
            'We maintain strict confidentiality of all client data'
          ]
        },
        {
          subtitle: 'Limited Sharing',
          items: [
            'With your explicit consent',
            'With service providers who assist in our operations (under strict confidentiality agreements)',
            'When required by law or legal process',
            'To protect our rights, property, or safety'
          ]
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'Encryption of data in transit and at rest',
            'Regular security audits and assessments',
            'Access controls and authentication systems',
            'Employee training on data protection'
          ]
        },
        {
          subtitle: 'Incident Response',
          items: [
            '24/7 security monitoring',
            'Rapid response to security incidents',
            'Notification procedures for data breaches',
            'Regular backup and recovery testing'
          ]
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: Lock,
      content: [
        {
          subtitle: 'Access and Control',
          items: [
            'Request access to your personal information',
            'Correct inaccurate or incomplete data',
            'Request deletion of your personal information',
            'Object to processing of your personal information'
          ]
        },
        {
          subtitle: 'Communication Preferences',
          items: [
            'Opt out of marketing communications',
            'Update your communication preferences',
            'Request data portability',
            'Withdraw consent where applicable'
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
            Privacy
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <FileText className="w-5 h-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Privacy?</h2>
          <p className="text-gray-300 mb-8">
            If you have any questions about this privacy policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Contact Us
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

export default PrivacyPage;