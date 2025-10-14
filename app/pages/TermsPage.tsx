import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.',
        'We reserve the right to update these terms at any time without prior notice.'
      ]
    },
    {
      title: 'Description of Service',
      content: [
        'Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cloud infrastructure, cybersecurity solutions, and digital transformation services.',
        'Our services are provided on a subscription basis with various pricing tiers and features.',
        'We reserve the right to modify, suspend, or discontinue any part of our services at any time.',
        'We may introduce new features or services that will be subject to these terms.'
      ]
    },
    {
      title: 'User Accounts',
      content: [
        'You must provide accurate and complete information when creating an account.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.',
        'We reserve the right to suspend or terminate accounts that violate these terms.'
      ]
    },
    {
      title: 'Acceptable Use',
      content: [
        'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.',
        'You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.',
        'You may not transmit any worms, viruses, or any code of a destructive nature.',
        'You may not use our services to infringe upon or violate our intellectual property rights or the intellectual property rights of others.',
        'You may not use our services to harass, abuse, or harm another person or group.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Fees for our services are billed in advance on a monthly or annual basis.',
        'All fees are non-refundable except as required by law.',
        'We may change our fees at any time with 30 days notice.',
        'You are responsible for all taxes associated with your use of our services.',
        'Failure to pay fees may result in suspension or termination of your account.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'The service and its original content, features, and functionality are owned by Zion Tech Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
        'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our material.',
        'You retain ownership of any content you create using our services.',
        'You grant us a license to use your content as necessary to provide our services.'
      ]
    },
    {
      title: 'Privacy Policy',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.',
        'We collect and use your information in accordance with our Privacy Policy.',
        'By using our service, you consent to the collection and use of information in accordance with our Privacy Policy.',
        'We may update our Privacy Policy from time to time, and such changes will be effective when posted.'
      ]
    },
    {
      title: 'Service Availability',
      content: [
        'We strive to provide continuous service availability but cannot guarantee 100% uptime.',
        'We may perform scheduled maintenance that may temporarily interrupt service.',
        'We are not liable for any downtime or service interruptions.',
        'We will provide reasonable notice of planned maintenance when possible.',
        'We reserve the right to modify or discontinue the service at any time.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability to you for any damages arising from or related to these terms or the service shall not exceed the amount you paid us for the service in the 12 months preceding the claim.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you.',
        'We make no warranties about the accuracy, reliability, completeness, or timeliness of the service.'
      ]
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees).',
        'This indemnification obligation will survive these terms and your use of the service.',
        'You agree to cooperate with us in the defense of any such claim.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.',
        'You may terminate your account at any time by contacting us.',
        'Upon termination, your right to use the service will cease immediately.',
        'All provisions of the terms which by their nature should survive termination shall survive termination.',
        'We may retain your data for a reasonable period after termination for legal and business purposes.'
      ]
    },
    {
      title: 'Governing Law',
      content: [
        'These terms shall be interpreted and governed by the laws of the State of Delaware, United States.',
        'Any dispute arising from these terms or the service shall be subject to the exclusive jurisdiction of the courts of Delaware.',
        'You agree to submit to the personal jurisdiction of such courts.',
        'If any provision of these terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.'
      ]
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and responsibilities when using our AI and IT solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, user agreement, service agreement, terms of use" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <ScaleIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
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
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website, 
                services, and applications (collectively, the "Service") operated by Zion Tech Group 
                ("us", "we", or "our"). By accessing or using our Service, you agree to be bound by 
                these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <DocumentTextIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Terms</h3>
                <p className="text-gray-600">We provide clear, understandable terms for our services.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <ShieldCheckIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Use</h3>
                <p className="text-gray-600">We promote fair and responsible use of our services.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <ExclamationTriangleIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                <p className="text-gray-600">We ensure compliance with applicable laws and regulations.</p>
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

        {/* Important Notices */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Important Notices</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Modifications</h3>
                    <p className="text-orange-100">
                      We reserve the right to modify or discontinue the service at any time without notice. 
                      We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Acceptance of Changes</h3>
                    <p className="text-orange-100">
                      Your continued use of the service after any changes to these terms constitutes acceptance of those changes. 
                      If you do not agree to the changes, you must stop using the service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <EnvelopeIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">{contactInfo.email}</p>
                </div>
                <div className="text-center">
                  <PhoneIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">{contactInfo.phone}</p>
                </div>
                <div className="text-center">
                  <MapPinIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms Updates</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right to update these Terms of Service at any time. 
              We will notify users of any material changes by posting the new Terms of Service 
              on this page and updating the "Last Updated" date.
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

export default TermsPage;