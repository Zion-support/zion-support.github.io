<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
>>>>>>> main

export default function Privacy() {
<<<<<<< HEAD
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide (name, email, phone number)',
        'Business information (company name, job title, project details)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions with our services)',
        'Communication records (emails, phone calls, support tickets)',
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our services',
        'Communicate with you about projects and services',
        'Process payments and billing',
        'Send marketing communications (with your consent)',
        'Comply with legal obligations',
        'Protect our rights and prevent fraud',
      ],
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell your personal information',
        'We may share information with trusted service providers',
        'We may disclose information if required by law',
        'We may share information in case of business transfers',
        'We may share aggregated, non-personal information',
      ],
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We use industry-standard encryption to protect your data',
        'Access to personal information is restricted to authorized personnel',
        'We regularly update our security measures',
        'We conduct security audits and assessments',
        'We have incident response procedures in place',
      ],
    },
  ];

  const rights = [
    'Access your personal information',
    'Correct inaccurate information',
    'Delete your personal information',
    'Restrict processing of your information',
    'Data portability',
    'Object to processing',
    'Withdraw consent',
  ];

=======
>>>>>>> main
  return (
<<<<<<< HEAD
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}
              Policy
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and
            protect your personal information.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 15, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group ("we," "our, " or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website ziontechgroup.com or use our services.
              </p>
              <p className="text-gray-600">
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site or use our services.
              </p>
            </div>
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3 text-blue-600" />
                Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Register for an account or use our services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Request a quote or consultation</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 mb-4">
                We may automatically collect certain information about your
                device and usage patterns, including:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device identifiers</li>
              </ul>
            </div>
            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-blue-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes,
                including:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and delivering products</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="w-8 h-8 mr-3 text-blue-600" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  With trusted service providers who assist us in operating our
                  website and conducting our business
                </li>
                <li>
                  When required by law or to protect our rights and safety
                </li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-blue-600" />
                Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                These measures include:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and backup systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-600" />
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information:{' '}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>
            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>
            </div>
            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Third-Party Links
              </h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review their privacy
                policies.
              </p>
            </div>
            {/* Children&apos;s Privacy */}'
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Children&apos;s Privacy
              </h2>
              '
              <p className="text-gray-600 mb-4">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13.
              </p>
            </div>
            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </div>
            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:{' '}
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (302) 464-0950
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address: </strong> 364 E Main St STE 1008, Middletown,
                  DE 19709
                </p>
=======
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/privacy" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
=======
        <meta name="description" content="Zion Tech Group's Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
>>>>>>> main
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <Shield className="w-12 h-12 text-white" />
                </div>
>>>>>>> main
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your personal information.
=======
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
>>>>>>> main
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to help. Contact us if you have any questions about
            how we handle your personal information.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Learn More
            </a>
=======
        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
<<<<<<< HEAD
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 mb-6">
                Zion Tech Group ("we," "our, " or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
              <p className="text-gray-600 mb-6">
                By using our website or services, you agree to the collection
                and use of information in accordance with this policy. If you do
                not agree with our policies and practices, please do not use our
                services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
=======
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-4 mt-6">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
>>>>>>> main
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
        {/* Your Rights */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Your Privacy Rights
            </h2>
            <p className="text-gray-600 mb-6">
              Depending on your location, you may have certain rights regarding
              your personal information:{' '}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              To exercise any of these rights, please contact us using the
              information provided below.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small data files stored on
              your device that help us:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Remember your preferences and settings
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Analyze website traffic and usage patterns
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Improve website performance and functionality
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Provide personalized content and advertisements
                </span>
              </li>
            </ul>
            <p className="text-gray-600">
              You can control cookies through your browser settings. However,
              disabling cookies may affect the functionality of our website.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Retention
            </h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. We will
              delete or anonymize your personal information when it is no longer
              needed.
            </p>
            <p className="text-gray-600">
              The retention period may vary depending on the type of information
              and the purpose for which it was collected. For example, we may
              retain customer information for the duration of our business
              relationship and for a reasonable period thereafter.
            </p>
          </div>
        </section>

        {/* International Transfers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              International Data Transfers
            </h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              different data protection laws than your country.
            </p>
            <p className="text-gray-600">
              When we transfer your information internationally, we ensure
              appropriate safeguards are in place to protect your information in
              accordance with applicable data protection laws.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date at the top of this
              policy.
            </p>
            <p className="text-gray-600">
              We encourage you to review this Privacy Policy periodically for
              any changes. Changes to this Privacy Policy are effective when
              they are posted on this page.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:{' '}
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    kleber@ziontechgroup.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    364 E Main St STE 1008
                    <br />
                    Middletown, DE 19709
                  </span>
=======
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Service Delivery</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Provide and maintain our services</li>
                      <li>• Process transactions and payments</li>
                      <li>• Deliver customer support</li>
                      <li>• Send service-related communications</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Business Operations</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Improve our services and products</li>
                      <li>• Conduct analytics and research</li>
                      <li>• Marketing and promotional activities</li>
                      <li>• Legal compliance and security</li>
                    </ul>
                  </div>
>>>>>>> main
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Protection & Security
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-blue-600" />
                  Your Rights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Access & Portability</h4>
                        <p className="text-gray-600 text-sm">Request access to your data and receive it in a portable format</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Correction</h4>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate personal information</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Deletion</h4>
                        <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Opt-out</h4>
                        <p className="text-gray-600 text-sm">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Cookies & Tracking
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">E</span>
                      </div>
                      <h4 className="font-semibold mb-2">Essential</h4>
                      <p className="text-sm text-gray-600">Required for website functionality</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">A</span>
                      </div>
                      <h4 className="font-semibold mb-2">Analytics</h4>
                      <p className="text-sm text-gray-600">Help us understand website usage</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 font-bold">M</span>
                      </div>
                      <h4 className="font-semibold mb-2">Marketing</h4>
                      <p className="text-sm text-gray-600">Personalize content and ads</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>

            </div>
>>>>>>> main
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default Privacy;
=======
}
>>>>>>> main
>>>>>>> main
