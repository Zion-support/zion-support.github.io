<<<<<<< HEAD
import type { NextPage } from 'next';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
;
const Terms: NextPage = () => {;
  return (;
    <Layout;
      title="Terms of Service - Zion Tech Group";
      description="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services.";
    >;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Terms of;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Service</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Please read these terms carefully before using our website and services.;
          </p>;
          <p className="text-sm text-gray-300">;
            Last updated: January 15, 2024;
          </p>;
        </div>;
      </section>;
=======
import MainLayout from '../components/layout/MainLayout';

const Terms: NextPage = () => {
  return (
    <MainLayout 
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the terms and conditions for using our services."
    >
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>AI and machine learning solutions</li>
                <li>Web and mobile application development</li>
                <li>Cloud architecture and migration</li>
                <li>Cybersecurity services</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using our services for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, trademarks, and intellectual property rights in our services are owned by 
                Zion Tech Group or our licensors. You may not use our intellectual property without 
                our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you 
                breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Address:</strong> 123 Technology Drive, Innovation District, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone, Calendar } from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and understand your rights and responsibilities when using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>
      
      <main className="min-h-screen bg-white">
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, AlertCircle, Shield, Users, Gavel } from 'lucide-react';
>>>>>>> main

export default function Terms() {
<<<<<<< HEAD
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not access or use our services.',
        'We reserve the right to modify these terms at any time without prior notice.',
        'Your continued use of our services after changes constitutes acceptance of the new terms.',
      ],
    },
    {
      title: 'Service Description',
      icon: Scale,
      content: [
        'Zion Tech Group provides AI services, IT solutions, and micro SaaS development.',
        'We offer consulting, development, implementation, and support services.',
        'Service availability may vary and is subject to our capacity and resources.',
        'We reserve the right to modify or discontinue services with reasonable notice.',
      ],
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'Provide accurate and complete information when engaging our services.',
        'Comply with all applicable laws and regulations.',
        'Respect intellectual property rights and confidentiality agreements.',
        'Use our services only for lawful purposes and in accordance with these terms.',
        'Maintain the security of any credentials or access provided to you.',
      ],
    },
    {
      title: 'Payment Terms',
      icon: AlertTriangle,
      content: [
        'Payment terms are specified in individual service agreements.',
        'Invoices are due within 30 days of receipt unless otherwise specified.',
        'Late payments may incur additional fees and interest charges.',
        'We reserve the right to suspend services for non-payment.',
        'Refunds are subject to our refund policy and service agreement terms.',
      ],
    },
  ];

  const limitations = [
    'Services are provided "as is" without warranties of any kind',
    'We are not liable for indirect, incidental, or consequential damages',
    'Our liability is limited to the amount paid for the specific service',
    'We do not guarantee specific results or outcomes',
    'Third-party services and integrations are subject to their own terms',
  ];

  const intellectualProperty = [
    'We retain all rights to our proprietary technology and methodologies',
    'Client retains rights to their data and business processes',
    'Work product ownership is specified in individual service agreements',
    'We respect third-party intellectual property rights',
    'Unauthorized use of our intellectual property is prohibited',
  ];

=======
>>>>>>> main
  return (
<<<<<<< HEAD
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 15, 2024
          </p>
        </div>
      </section>
>>>>>>> main

      {/* Terms Content */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4 max-w-4xl">;
          <div className="prose prose-lg max-w-none">;
            {/* Introduction */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <FileText className="w-8 h-8 mr-3 text-blue-600" />;
                Agreement to Terms;
              </h2>;
              <p className="text-gray-600 mb-4">;
                These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at ziontechgroup.com and our services. By accessing or using our website and services, you agree to be bound by these Terms.;
              </p>;
              <p className="text-gray-600">;
                If you do not agree to these Terms, please do not use our website or services.;
              </p>;
            </div>;

            {/* Services Description */}
<<<<<<< HEAD
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>;
              <p className="text-gray-600 mb-4">;
                Zion Tech Group provides technology consulting and development services, including but not limited to:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>AI and Machine Learning Development</li>;
                <li>Cloud Services and Architecture</li>;
                <li>Web and Mobile Application Development</li>;
                <li>Blockchain Solutions</li>;
                <li>IoT Platform Development</li>;
                <li>Cybersecurity Services</li>;
                <li>Technology Consulting</li>;
              </ul>;
            </div>;

            {/* User Responsibilities */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <Shield className="w-8 h-8 mr-3 text-blue-600" />;
                User Responsibilities;
              </h2>;
              <p className="text-gray-600 mb-4">;
                When using our services, you agree to:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Provide accurate and complete information</li>;
                <li>Use our services in compliance with applicable laws</li>;
                <li>Respect intellectual property rights</li>;
                <li>Not engage in any illegal or harmful activities</li>;
                <li>Maintain the confidentiality of any credentials provided</li>;
                <li>Notify us of any security breaches or unauthorized access</li>;
              </ul>;
            </div>;
=======
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting and development services, including but not limited to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI and Machine Learning Development</li>
                <li>Cloud Services and Architecture</li>
                <li>Web and Mobile Application Development</li>
                <li>Blockchain Solutions</li>
                <li>IoT Platform Development</li>
                <li>Cybersecurity Services</li>
                <li>Technology Consulting</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-600" />
                User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                When using our services, you agree to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any illegal or harmful activities</li>
                <li>Maintain the confidentiality of any credentials provided</li>
                <li>Notify us of any security breaches or unauthorized access</li>
              </ul>
            </div>
>>>>>>> main

            {/* Prohibited Uses */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <XCircle className="w-8 h-8 mr-3 text-red-600" />;
                Prohibited Uses;
              </h2>;
              <p className="text-gray-600 mb-4">;
                You may not use our services for any of the following purposes:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Violating any applicable laws or regulations</li>;
                <li>Transmitting malicious code or viruses</li>;
                <li>Attempting to gain unauthorized access to our systems</li>;
                <li>Interfering with the proper functioning of our services</li>;
                <li>Collecting user information without consent</li>;
                <li>Engaging in fraudulent or deceptive practices</li>;
                <li>Infringing on intellectual property rights</li>;
              </ul>;
            </div>;

            {/* Intellectual Property */}
<<<<<<< HEAD
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>;
              <p className="text-gray-600 mb-4">;
                All content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Copy, modify, or distribute our content without permission</li>;
                <li>Use our trademarks or logos without authorization</li>;
                <li>Reverse engineer or attempt to extract source code</li>;
                <li>Create derivative works based on our intellectual property</li>;
              </ul>;
            </div>;

            {/* Service Availability */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>;
              <p className="text-gray-600 mb-4">;
                We strive to maintain high availability of our services, but we cannot guarantee uninterrupted access. We reserve the right to:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Modify or discontinue services with reasonable notice</li>;
                <li>Perform maintenance that may temporarily affect availability</li>;
                <li>Suspend services for security or legal reasons</li>;
                <li>Update or upgrade our systems</li>;
              </ul>;
            </div>;

            {/* Payment Terms */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>;
              <p className="text-gray-600 mb-4">;
                For paid services, the following terms apply:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Payment is due according to the agreed schedule</li>;
                <li>Late payments may incur additional fees</li>;
                <li>Refunds are subject to our refund policy</li>;
                <li>Prices may change with reasonable notice</li>;
                <li>You are responsible for any applicable taxes</li>;
              </ul>;
            </div>;

            {/* Limitation of Liability */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <AlertTriangle className="w-8 h-8 mr-3 text-yellow-600" />;
                Limitation of Liability;
              </h2>;
              <p className="text-gray-600 mb-4">;
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Loss of profits or revenue</li>;
                <li>Loss of data or information</li>;
                <li>Business interruption</li>;
                <li>Cost of substitute services</li>;
                <li>Personal injury or property damage</li>;
              </ul>;
            </div>;

            {/* Indemnification */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>;
              <p className="text-gray-600 mb-4">;
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Your use of our services</li>;
                <li>Your violation of these Terms</li>;
                <li>Your violation of any third-party rights</li>;
                <li>Any content you submit or transmit</li>;
              </ul>;
            </div>;

            {/* Termination */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>;
              <p className="text-gray-600 mb-4">;
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Your right to use our services will cease immediately</li>;
                <li>We may delete your account and data</li>;
                <li>You remain liable for any outstanding obligations</li>;
                <li>Provisions that should survive termination will remain in effect</li>;
              </ul>;
            </div>;
=======
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our intellectual property</li>
              </ul>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-600 mb-4">
                We strive to maintain high availability of our services, but we cannot guarantee uninterrupted access. We reserve the right to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Modify or discontinue services with reasonable notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update or upgrade our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                For paid services, the following terms apply: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices may change with reasonable notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-yellow-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Your right to use our services will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding obligations</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>
>>>>>>> main

            {/* Governing Law */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <Scale className="w-8 h-8 mr-3 text-blue-600" />;
                Governing Law;
              </h2>;
              <p className="text-gray-600 mb-4">;
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.;
              </p>;
            </div>;

            {/* Changes to Terms */}
<<<<<<< HEAD
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>;
              <p className="text-gray-600 mb-4">;
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by:;
              </p>;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Posting the updated Terms on our website</li>;
                <li>Sending email notifications to registered users</li>;
                <li>Providing notice through our services</li>;
              </ul>;
              <p className="text-gray-600">;
                Continued use of our services after changes constitutes acceptance of the new Terms.;
              </p>;
            </div>;

            {/* Contact Information */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>;
              <p className="text-gray-600 mb-4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="bg-gray-50 rounded-lg p-6">;
                <p className="text-gray-700 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>;
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (302) 464-0950</p>;
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>;
              </div>;
            </div>;

            {/* Acknowledgment */}
            <div className="mb-12 bg-blue-50 border-l-4 border-blue-400 p-6">;
              <div className="flex items-center mb-4">;
                <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />;
                <h3 className="text-lg font-semibold text-blue-800">Acknowledgment</h3>;
              </div>;
              <p className="text-blue-700">;
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
=======
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p className="text-gray-600">
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us: </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p className="text-gray-700 mb-2"><strong>Address: </strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
=======
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Read Zion Tech Group's Terms of Service. Understand the terms and conditions for using our AI services, IT solutions, and micro SaaS development services."
        />
        '
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/terms" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
=======
        <meta name="description" content="Zion Tech Group's Terms of Service - Read our terms and conditions for using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
>>>>>>> main
>>>>>>> main
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
<<<<<<< HEAD
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
=======
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <FileText className="w-12 h-12 text-white" />
                </div>
>>>>>>> main
>>>>>>> main
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
<<<<<<< HEAD
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                These terms govern your use of our services and website. Please read them carefully.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
=======
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                Please read these terms carefully before using our services.
                These terms govern your use of Zion Tech Group&apos;s services
                and website.'
=======
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
>>>>>>> main
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
>>>>>>> main
            </div>
          </div>
        </section>
>>>>>>> main

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Questions About Our Terms?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            We're here to help clarify any questions you may have about our Terms of Service.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Contact Us;
            </a>;
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Get in Touch;
            </a>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  );
};
;
export default Terms;
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to help clarify any questions you may have about our Terms of Service.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Us
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get in Touch
            </a>
=======
>>>>>>> main
        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of Zion Tech
                Group&apos;s website ' and services. By accessing or using our
                services, you agree to be bound by these Terms and our Privacy
                Policy.
              </p>
              <p className="text-gray-600 mb-6">
                Zion Tech Group ("we," "our, " or "us") provides AI services, IT
                solutions, and micro SaaS development services. These Terms
                apply to all users of our services, including clients, visitors,
                and other users.
              </p>
            </div>
          </div>
        </section>

        {/* Main Sections */}
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
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and intellectual property on our website
              and in our services are owned by Zion Tech Group or our licensors.
              You may not use, reproduce, or distribute our intellectual
              property without written permission.
            </p>
            <div className="space-y-3">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities.
            </p>
            <div className="space-y-3">
              {limitations.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Confidentiality
            </h2>
            <p className="text-gray-600 mb-6">
              We understand the importance of confidentiality in our business
              relationships. We will maintain the confidentiality of all client
              information and will not disclose such information to third
              parties without consent, except as required by law.
            </p>
            <p className="text-gray-600">
              Clients are also expected to maintain confidentiality regarding
              our proprietary methodologies, technologies, and business
              practices.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Termination
            </h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate service agreements in accordance with
              the terms specified in individual service agreements. We reserve
              the right to suspend or terminate services immediately for
              violations of these Terms.
            </p>
            <p className="text-gray-600">
              Upon termination, all outstanding payments become due, and
              confidentiality obligations continue to apply.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Governing Law
            </h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to conflict of
              law principles.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these Terms or our services shall be
              resolved through binding arbitration in accordance with the rules
              of the American Arbitration Association.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Changes to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. We will
              notify users of material changes by posting the updated Terms on
              our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-600">
              Your continued use of our services after changes constitutes
              acceptance of the updated Terms. If you do not agree to the
              changes, you must discontinue use of our services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please
              contact us:{' '}
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">
                    kleber@ziontechgroup.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    364 E Main St STE 1008
                    <br />
                    Middletown, DE 19709
                  </span>
=======
>>>>>>> main
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
<<<<<<< HEAD
                <p className="text-gray-600 mb-4">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group provides technology consulting, AI services, IT solutions, and software development services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>Information Technology consulting and implementation</li>
                  <li>Micro SaaS development and deployment</li>
                  <li>Cloud infrastructure and migration services</li>
                  <li>Digital transformation consulting</li>
                  <li>Custom software development</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use our services for illegal or harmful purposes</li>
                  <li>Maintain the confidentiality of any credentials provided</li>
                </ul>
=======
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> These terms constitute a legally binding agreement between you and Zion Tech Group. Please read them carefully.
                    </p>
                  </div>
>>>>>>> main
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Our Services</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• AI-powered technology solutions</li>
                      <li>• IT consulting and implementation</li>
                      <li>• Micro SaaS development</li>
                      <li>• Cloud infrastructure services</li>
                      <li>• Data analytics and insights</li>
                      <li>• Custom software development</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Service Availability</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 99.9% uptime guarantee</li>
                      <li>• 24/7 technical support</li>
                      <li>• Regular maintenance windows</li>
                      <li>• Continuous monitoring</li>
                      <li>• Disaster recovery protocols</li>
                      <li>• Security updates</li>
                    </ul>
                  </div>
                </div>
>>>>>>> main
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
<<<<<<< HEAD
                  Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on our website are the property of Zion Tech Group or their respective owners. You may not use, reproduce, or distribute any content without our prior written permission.
                </p>
                <p className="text-gray-600 mb-4">
                  Any work product, deliverables, or custom solutions created specifically for you will be governed by the terms of our service agreement.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All prices are subject to change with notice</li>
                </ul>
=======
                  User Responsibilities
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                    <p className="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Compliance</h3>
                    <p className="text-gray-700">You agree to use our services in compliance with all applicable laws, regulations, and industry standards.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Prohibited Uses</h3>
                    <p className="text-gray-700">You may not use our services for illegal activities, to transmit harmful code, or to violate any third-party rights.</p>
                  </div>
                </div>
>>>>>>> main
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
<<<<<<< HEAD
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-gray-600 mb-4">
                  Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
                </p>
=======
                  <Gavel className="w-6 h-6 mr-3 text-blue-600" />
                  Intellectual Property
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Our Rights</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• All service content and technology</li>
                        <li>• Trademarks and brand assets</li>
                        <li>• Proprietary algorithms and methods</li>
                        <li>• Documentation and materials</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Data you provide to us</li>
                        <li>• Custom solutions we develop for you</li>
                        <li>• Your business processes and content</li>
                        <li>• Your intellectual property</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-800">Important Notice</h3>
                  <p className="text-yellow-700 mb-4">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 text-sm">
                      <strong>Maximum Liability:</strong> Our total liability to you for any claims arising from or related to our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Billing</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Monthly or annual billing cycles</li>
                      <li>• Automatic renewal unless cancelled</li>
                      <li>• Payment due within 30 days</li>
                      <li>• Late fees may apply</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Refunds</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 30-day money-back guarantee</li>
                      <li>• Pro-rated refunds for unused time</li>
                      <li>• No refunds for custom development</li>
                      <li>• Processing time: 5-10 business days</li>
                    </ul>
                  </div>
                </div>
>>>>>>> main
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
<<<<<<< HEAD
                <p className="text-gray-600 mb-4">
                  Either party may terminate service agreements with appropriate notice as specified in the individual agreement. We reserve the right to terminate services immediately for breach of these terms.
                </p>
=======
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">By You</h3>
                      <p className="text-gray-700 mb-3">You may terminate your account at any time by providing 30 days written notice.</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Access to services ends on termination date</li>
                        <li>• Data export available for 30 days</li>
                        <li>• Outstanding payments remain due</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">By Us</h3>
                      <p className="text-gray-700 mb-3">We may terminate your account for breach of terms or non-payment.</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• 30-day notice for non-payment</li>
                        <li>• Immediate termination for violations</li>
                        <li>• Data retention per privacy policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
>>>>>>> main
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
<<<<<<< HEAD
                <p className="text-gray-600 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our website. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
=======
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                    <p className="text-gray-700 text-sm">
                      Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                    </p>
                  </div>
                </div>
>>>>>>> main
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
<<<<<<< HEAD
                <p className="text-gray-600 mb-4">
                  If you have any questions about these terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    123 Technology Drive<br />
                    San Francisco, CA 94105<br />
                    United States
=======
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> main
                  </div>
                </div>
              </div>

            </div>
<<<<<<< HEAD
          </div>
        </section>
      </main>
    </>
  );
}
=======
>>>>>>> main
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
