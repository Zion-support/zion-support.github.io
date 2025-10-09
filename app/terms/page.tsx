import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, AlertTriangle, Users, CreditCard, Gavel } from 'lucide-react';

const TermsPage: React.FC = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Agreement to Terms',
          description: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement.',
          details: [
            'You must be at least 18 years old to use our services',
            'You must provide accurate and complete information',
            'You are responsible for maintaining the security of your account',
            'You agree to use our services only for lawful purposes',
            'You will not violate any applicable laws or regulations'
          ]
        },
        {
          subtitle: 'Modifications',
          description: 'We reserve the right to modify these terms at any time. We will notify users of any material changes.',
          details: [
            'Changes will be posted on this page with an updated revision date',
            'Continued use of our services constitutes acceptance of new terms',
            'Material changes will be communicated via email or service notifications',
            'You may terminate your account if you disagree with changes',
            'Previous versions of terms are available upon request'
          ]
        }
      ]
    },
    {
      title: 'Service Description',
      icon: Shield,
      content: [
        {
          subtitle: 'AI Services',
          description: 'We provide artificial intelligence services including machine learning, natural language processing, and computer vision solutions.',
          details: [
            'AI models and algorithms for various applications',
            'Custom AI development and training services',
            'AI consulting and implementation support',
            'Real-time AI processing and inference',
            'AI model monitoring and maintenance'
          ]
        },
        {
          subtitle: 'Micro SAAS Tools',
          description: 'We offer a suite of micro software-as-a-service tools designed to enhance productivity and business operations.',
          details: [
            'AI-powered code review and analysis tools',
            'SEO optimization and content generation tools',
            'Analytics and business intelligence dashboards',
            'Automation and workflow management tools',
            'Integration with third-party services and platforms'
          ]
        },
        {
          subtitle: 'IT Infrastructure',
          description: 'We provide comprehensive IT infrastructure services including cloud solutions, security, and support.',
          details: [
            'Cloud hosting and infrastructure management',
            'Cybersecurity and data protection services',
            'DevOps and continuous integration/continuous deployment',
            'Database management and optimization',
            '24/7 technical support and monitoring'
          ]
        }
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: [
        {
          subtitle: 'Account Security',
          description: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
          details: [
            'Use strong, unique passwords for your account',
            'Notify us immediately of any unauthorized access',
            'Keep your contact information up to date',
            'Do not share your account credentials with others',
            'Log out of your account when using shared devices'
          ]
        },
        {
          subtitle: 'Acceptable Use',
          description: 'You agree to use our services in accordance with these terms and applicable laws.',
          details: [
            'Do not use our services for illegal or unauthorized purposes',
            'Do not attempt to gain unauthorized access to our systems',
            'Do not interfere with or disrupt our services',
            'Do not use our services to harm or harass others',
            'Respect intellectual property rights of others'
          ]
        },
        {
          subtitle: 'Content and Data',
          description: 'You are responsible for any content or data you upload, process, or store using our services.',
          details: [
            'Ensure you have the right to use and process any data',
            'Comply with applicable data protection laws',
            'Do not upload malicious or harmful content',
            'Respect privacy and confidentiality of others',
            'Back up important data independently'
          ]
        }
      ]
    },
    {
      title: 'Payment and Billing',
      icon: CreditCard,
      content: [
        {
          subtitle: 'Pricing and Payment',
          description: 'Service pricing is based on usage, features, and service level selected. Payment terms are specified in your service agreement.',
          details: [
            'Pricing is subject to change with 30 days notice',
            'Payment is due according to your billing cycle',
            'Late payments may result in service suspension',
            'All prices are exclusive of applicable taxes',
            'Refunds are handled according to our refund policy'
          ]
        },
        {
          subtitle: 'Billing and Invoicing',
          description: 'We will provide detailed invoices for all charges. You are responsible for reviewing and paying invoices on time.',
          details: [
            'Invoices are sent via email to your registered address',
            'Payment methods include credit cards and bank transfers',
            'Disputes must be raised within 30 days of invoice date',
            'Service may be suspended for non-payment',
            'Reactivation fees may apply for suspended accounts'
          ]
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Gavel,
      content: [
        {
          subtitle: 'Our Intellectual Property',
          description: 'All rights, title, and interest in our services, including software, algorithms, and documentation, remain our property.',
          details: [
            'You may not copy, modify, or distribute our software',
            'You may not reverse engineer or decompile our code',
            'You may not remove or alter proprietary notices',
            'You may not create derivative works without permission',
            'Our trademarks and logos are protected by law'
          ]
        },
        {
          subtitle: 'Your Intellectual Property',
          description: 'You retain ownership of your data and intellectual property. We do not claim ownership of your content.',
          details: [
            'You grant us license to process your data for service delivery',
            'You retain all rights to your original content',
            'We will not use your data for purposes beyond service delivery',
            'You may request data deletion at any time',
            'We respect your intellectual property rights'
          ]
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Service Availability',
          description: 'While we strive for high availability, we cannot guarantee uninterrupted service.',
          details: [
            'We provide 99.9% uptime SLA for paid services',
            'Scheduled maintenance will be announced in advance',
            'Emergency maintenance may occur without notice',
            'We are not liable for service interruptions beyond our control',
            'Service credits may be provided for extended outages'
          ]
        },
        {
          subtitle: 'Limitation of Damages',
          description: 'Our liability is limited to the maximum extent permitted by law.',
          details: [
            'We are not liable for indirect or consequential damages',
            'Our total liability is limited to the amount you paid for services',
            'We are not liable for third-party actions or content',
            'You use our services at your own risk',
            'Some jurisdictions may not allow liability limitations'
          ]
        }
      ]
    }
  ];

  const importantPoints = [
    {
      title: 'Service Level Agreement',
      description: 'We provide 99.9% uptime guarantee for our premium services',
      icon: Shield
    },
    {
      title: 'Data Protection',
      description: 'Your data is protected with enterprise-grade security measures',
      icon: FileText
    },
    {
      title: 'Support',
      description: '24/7 technical support available for all paid services',
      icon: Users
    },
    {
      title: 'Compliance',
      description: 'We comply with GDPR, CCPA, and other applicable regulations',
      icon: Gavel
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service to understand your rights and responsibilities when using our AI services, micro SAAS tools, and IT solutions." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, service conditions, user responsibilities" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Please read these terms carefully before using our services
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
                These Terms of Service ("Terms") govern your use of Zion Tech Group's AI services, micro SAAS tools, and IT solutions (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-lg text-gray-600">
                If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of our Services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {termsSections.map((section, sectionIndex) => (
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

        {/* Important Points */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Points to Remember</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-6">
                Either party may terminate this agreement at any time. Upon termination, your right to use our Services will cease immediately.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by You</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• You may terminate your account at any time through your account settings</li>
                    <li>• You may request data export before termination</li>
                    <li>• Outstanding payments remain due after termination</li>
                    <li>• Some data may be retained for legal compliance purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by Us</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• We may terminate your account for violation of these Terms</li>
                    <li>• We will provide reasonable notice before termination</li>
                    <li>• Emergency termination may occur for security reasons</li>
                    <li>• You may appeal termination decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
              <p className="text-gray-600 mb-6">
                These Terms are governed by the laws of Delaware, United States. Any disputes arising from these Terms or your use of our Services will be resolved through binding arbitration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Disputes will be resolved through individual arbitration, not class action</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">Arbitration will be conducted in Delaware, United States</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">You waive the right to a jury trial</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600">You may opt out of arbitration within 30 days of account creation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl mb-8 text-blue-100">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Legal Team
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
              <p>Email: legal@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;