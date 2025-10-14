import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, company information, and billing details.',
        'Usage Data: Information about how you use our services, including IP addresses, browser type, and device information.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze usage patterns.',
        'Communication Data: Records of your communications with us, including support requests and feedback.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our AI and IT solutions.',
        'Communication: To send you updates, notifications, and respond to your inquiries.',
        'Billing and Payments: To process payments and manage your account.',
        'Analytics: To analyze usage patterns and improve our services.',
        'Legal Compliance: To comply with applicable laws and regulations.'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share information with trusted service providers who assist us in operating our business.',
        'We may disclose information when required by law or to protect our rights and safety.',
        'In case of a business merger or acquisition, your information may be transferred to the new entity.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your information.',
        'All data is encrypted in transit and at rest using AES-256 encryption.',
        'We regularly conduct security audits and penetration testing.',
        'Access to personal information is restricted to authorized personnel only.',
        'We maintain SOC 2 Type II compliance and ISO 27001 certification.'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access: You can request access to your personal information we hold.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You can request deletion of your personal information.',
        'Portability: You can request a copy of your data in a portable format.',
        'Opt-out: You can opt-out of marketing communications at any time.'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use essential cookies to provide basic functionality of our services.',
        'Analytics cookies help us understand how visitors interact with our website.',
        'Marketing cookies are used to deliver relevant advertisements.',
        'You can control cookie preferences through your browser settings.',
        'Disabling certain cookies may affect the functionality of our services.'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain personal information only as long as necessary to fulfill the purposes outlined in this policy.',
        'Account information is retained for the duration of your account plus 7 years for legal compliance.',
        'Usage data is typically retained for 2 years for analytics purposes.',
        'Marketing data is retained until you opt-out or for 3 years of inactivity.',
        'Legal requirements may necessitate longer retention periods.'
      ]
    },
    {
      title: 'International Transfers',
      content: [
        'Your information may be transferred to and processed in countries other than your own.',
        'We ensure appropriate safeguards are in place for international transfers.',
        'We comply with applicable data protection laws, including GDPR and CCPA.',
        'We use standard contractual clauses approved by relevant authorities.',
        'We conduct regular assessments of our international data processing activities.'
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    dpo: 'Data Protection Officer'
  }

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices." />
        <meta name="keywords" content="privacy policy, data protection, privacy, personal information, data security, GDPR, CCPA, privacy rights" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our AI and IT solutions, visit our 
                website, or interact with our services.
              </p>
            </div>

            {/* Privacy Principles */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <EyeIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">We are transparent about how we collect and use your information.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <LockClosedIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">We implement robust security measures to protect your data.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <DocumentTextIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Control</h3>
                <p className="text-gray-600">You have control over your personal information and privacy settings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Your Privacy Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Under GDPR (EU Residents)</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Right to access your personal data</li>
                    <li>• Right to rectification of inaccurate data</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Under CCPA (California Residents)</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Right to know what personal information is collected</li>
                    <li>• Right to know whether personal information is sold</li>
                    <li>• Right to say no to the sale of personal information</li>
                    <li>• Right to access your personal information</li>
                    <li>• Right to equal service and price</li>
                    <li>• Right to delete personal information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-8">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us using the information below:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Inquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Protection Officer</h3>
                  <p className="text-gray-700 mb-3">
                    For privacy-specific concerns and data protection matters:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Email:</strong> {contactInfo.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Subject Line:</strong> "Data Protection Inquiry"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
            <p className="text-gray-700 mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new Privacy Policy on this page and updating 
              the "Last Updated" date.
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPage;
