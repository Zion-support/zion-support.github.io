import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 1, 2024';

  const sections = [
  {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide (name, email, phone number),Business information (company name, job title, project details),Technical information (IP address, browser type, device information),Usage data (pages visited, time spent, interactions with our services),Communication records (emails, phone calls, support tickets)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our services,Communicate with you about projects and services,Process payments and billing,Send marketing communications (with your consent),Comply with legal obligations,Protect our rights and prevent fraud'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell your personal information,We may share information with trusted service providers,We may disclose information if required by law,We may share information in case of business transfers,We may share aggregated, non-personal information'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We use industry-standard encryption to protect your data,Access to personal information is restricted to authorized personnel,We regularly update our security measures,We conduct security audits and assessments,We have incident response procedures in place'
      ]
    }
  ];

  const rights = [
    'Access your personal information,Correct inaccurate information,Delete your personal information,Restrict processing of your information,Data portability,Object to processing,Withdraw consent'
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, 
                and protect your personal information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 mb-6">
                By using our website or services, you agree to the collection and use of 
                information in accordance with this policy. If you do not agree with our 
                policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small data files stored on your device that help us:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Remember your preferences and settings</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Analyze website traffic and usage patterns</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Improve website performance and functionality</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Provide personalized content and advertisements</span>
              </li>
            </ul>
            <p className="text-gray-600">
              You can control cookies through your browser settings. However, disabling cookies 
              may affect the functionality of our website.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or 
              permitted by law. We will delete or anonymize your personal information when it is 
              no longer needed.
            </p>
            <p className="text-gray-600">
              The retention period may vary depending on the type of information and the purpose 
              for which it was collected. For example, we may retain customer information for the 
              duration of our business relationship and for a reasonable period thereafter.
            </p>
          </div>
        </section>

        {/* International Transfers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your 
              country of residence. These countries may have different data protection laws than 
              your country.
            </p>
            <p className="text-gray-600">
              When we transfer your information internationally, we ensure appropriate safeguards 
              are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" 
              date at the top of this policy.
            </p>
            <p className="text-gray-600">
              We encourage you to review this Privacy Policy periodically for any changes. 
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}