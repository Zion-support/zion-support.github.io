'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin, Clock, CheckCircle, AlertTriangle, FileText, Settings, Globe } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, phone number, and company information',
            'Billing and payment information',
            'Communication preferences and contact history',
            'Account credentials and authentication data'
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
            'Technical documentation and system configurations',
            'Service usage patterns and performance metrics',
            'Support tickets and communication records'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Settings,
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Provide and maintain our AI and IT services',
            'Process transactions and manage accounts',
            'Deliver technical support and customer service',
            'Customize solutions based on your requirements'
          ]
        },
        {
          subtitle: 'Communication',
          items: [
            'Send service updates and notifications',
            'Respond to inquiries and support requests',
            'Share relevant content and industry insights',
            'Conduct surveys and gather feedback'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [
            'Improve our services and develop new features',
            'Analyze usage patterns and optimize performance',
            'Ensure security and prevent fraud',
            'Comply with legal and regulatory requirements'
          ]
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'We may share your information with:',
          items: [
            'Service providers and business partners who assist in delivering our services',
            'Legal authorities when required by law or to protect our rights',
            'Third-party vendors for specific technical functions',
            'Affiliated companies within our corporate group'
          ]
        },
        {
          subtitle: 'We do not sell your personal information to third parties for marketing purposes.',
          items: []
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
            'Regular security audits and vulnerability assessments',
            'Access controls and authentication protocols',
            'Employee training on data protection practices'
          ]
        },
        {
          subtitle: 'Compliance',
          items: [
            'SOC 2 Type II certification',
            'ISO 27001 compliance',
            'GDPR compliance for EU customers',
            'Regular compliance audits and assessments'
          ]
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'You have the right to:',
          items: [
            'Access and review your personal information',
            'Correct inaccurate or incomplete data',
            'Request deletion of your personal information',
            'Object to certain processing activities',
            'Data portability and transfer',
            'Withdraw consent where applicable'
          ]
        }
      ]
    },
    {
      title: 'Cookies and Tracking',
      icon: Eye,
      content: [
        {
          subtitle: 'Types of Cookies',
          items: [
            'Essential cookies for website functionality',
            'Analytics cookies to understand usage patterns',
            'Marketing cookies for personalized content',
            'Preference cookies to remember your settings'
          ]
        },
        {
          subtitle: 'Managing Cookies',
          items: [
            'You can control cookies through your browser settings',
            'Opt-out options are available for non-essential cookies',
            'Disabling certain cookies may affect website functionality',
            'We provide clear information about cookie usage'
          ]
        }
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
            our website, services, or interact with us.
          </p>
          <p className="text-gray-300">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    {subsection.subtitle && (
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                        {subsection.subtitle}
                      </h3>
                    )}
                    {subsection.items.length > 0 && (
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Retention */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Database className="w-6 h-6 text-cyan-400 mr-3" />
            Data Retention
          </h2>
          <p className="text-gray-300 mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
            Privacy Policy, unless a longer retention period is required or permitted by law. Generally, we retain:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Account information for the duration of your account plus 3 years
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Service usage data for 7 years for business and legal purposes
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Marketing data until you opt out or for 3 years of inactivity
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Legal and compliance data as required by applicable laws
            </li>
          </ul>
        </div>

        {/* International Transfers */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Globe className="w-6 h-6 text-cyan-400 mr-3" />
            International Data Transfers
          </h2>
          <p className="text-gray-300 mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure that 
            such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Standard contractual clauses approved by relevant authorities
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Adequacy decisions by data protection authorities
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Binding corporate rules and certification schemes
            </li>
          </ul>
        </div>

        {/* Changes to Policy */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <FileText className="w-6 h-6 text-cyan-400 mr-3" />
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
            We will notify you of any material changes by:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Posting the updated policy on our website
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Sending email notifications to registered users
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
              Providing prominent notice on our services
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="cyber-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Mail className="w-6 h-6 text-cyan-400 mr-3" />
            Contact Us
          </h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-400 text-sm">{contactInfo.email}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Phone</div>
                <div className="text-gray-400 text-sm">{contactInfo.phone}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Address</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;