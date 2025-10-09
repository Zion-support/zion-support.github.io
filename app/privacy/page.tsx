import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
          details: [
            'Name and contact information (email address, phone number)',
            'Account credentials and profile information',
            'Payment and billing information',
            'Communications with us (support tickets, feedback)',
            'Content you create or upload using our services'
          ]
        },
        {
          subtitle: 'Usage Information',
          description: 'We automatically collect certain information about how you use our services.',
          details: [
            'Device information (IP address, browser type, operating system)',
            'Usage patterns and preferences',
            'Log data and analytics information',
            'Cookies and similar tracking technologies',
            'Performance and error data'
          ]
        },
        {
          subtitle: 'AI Training Data',
          description: 'We may use anonymized and aggregated data to improve our AI models and services.',
          details: [
            'Anonymized usage patterns',
            'Aggregated performance metrics',
            'Model training data (with user consent)',
            'Feedback and improvement data',
            'Research and development data'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          description: 'We use your information to provide, maintain, and improve our AI and IT services.',
          details: [
            'Process and fulfill your requests',
            'Provide customer support',
            'Improve our services and develop new features',
            'Personalize your experience',
            'Ensure security and prevent fraud'
          ]
        },
        {
          subtitle: 'Communication',
          description: 'We use your contact information to communicate with you about our services.',
          details: [
            'Send service-related notifications',
            'Provide customer support',
            'Send marketing communications (with your consent)',
            'Share important updates and changes',
            'Respond to your inquiries'
          ]
        },
        {
          subtitle: 'Legal and Compliance',
          description: 'We may use your information to comply with legal obligations and protect our rights.',
          details: [
            'Comply with applicable laws and regulations',
            'Respond to legal requests and court orders',
            'Protect our rights and property',
            'Ensure user safety and security',
            'Enforce our terms of service'
          ]
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'We Do Not Sell Your Data',
          description: 'We do not sell, rent, or trade your personal information to third parties for their commercial purposes.',
          details: []
        },
        {
          subtitle: 'Service Providers',
          description: 'We may share your information with trusted third-party service providers who assist us in operating our services.',
          details: [
            'Cloud hosting and infrastructure providers',
            'Payment processors and billing services',
            'Customer support and communication tools',
            'Analytics and monitoring services',
            'Security and fraud prevention services'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          description: 'We may disclose your information if required by law or to protect our rights.',
          details: [
            'In response to legal process or court orders',
            'To protect our rights, property, or safety',
            'To prevent fraud or abuse',
            'In connection with a business transaction',
            'With your explicit consent'
          ]
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          description: 'We implement appropriate technical and organizational measures to protect your personal information.',
          details: [
            'Encryption of data in transit and at rest',
            'Regular security audits and assessments',
            'Access controls and authentication',
            'Employee training on data protection',
            'Incident response and breach notification procedures'
          ]
        },
        {
          subtitle: 'Data Retention',
          description: 'We retain your personal information only as long as necessary for the purposes outlined in this policy.',
          details: [
            'Account information: Until account deletion',
            'Usage data: Up to 2 years',
            'Support communications: Up to 3 years',
            'Legal compliance data: As required by law',
            'Anonymized data: Indefinitely for research'
          ]
        }
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we hold about you',
      icon: Eye
    },
    {
      title: 'Correct Your Data',
      description: 'Update or correct inaccurate personal information',
      icon: Database
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal information',
      icon: Lock
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Users
    },
    {
      title: 'Object to Processing',
      description: 'Object to certain types of data processing',
      icon: Shield
    },
    {
      title: 'Withdraw Consent',
      description: 'Withdraw consent for data processing where applicable',
      icon: Mail
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we protect and handle your personal information.
              </p>
              <p className="text-sm text-blue-200">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services, micro SAAS tools, and IT solutions.
              </p>
              <p className="text-lg text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {privacySections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-8">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-8">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.subtitle}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.details.length > 0 && (
                          <ul className="space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-gray-600">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {detail}
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
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <right.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar tracking technologies to enhance your experience and analyze how you use our services.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 mb-2">These cookies are necessary for the website to function properly.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Authentication and security</li>
                    <li>• Load balancing and performance</li>
                    <li>• User preferences and settings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-2">These cookies help us understand how visitors interact with our website.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Google Analytics</li>
                    <li>• Usage statistics and metrics</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600 mb-2">These cookies are used to deliver relevant advertisements and marketing content.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Social media integration</li>
                    <li>• Advertising networks</li>
                    <li>• Remarketing campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Transfers */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="text-gray-600 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">We use standard contractual clauses approved by the European Commission</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">We implement appropriate technical and organizational measures</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">We conduct regular privacy impact assessments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-xl mb-8 text-blue-100">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Zion Tech Group</p>
              <p>364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>Email: privacy@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;