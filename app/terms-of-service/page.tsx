import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      content: [
        'By accessing and using Zion Tech Group\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.'
      ]
    },
    {
      title: 'Description of Service',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      content: [
        'Zion Tech Group provides AI-powered solutions, IT services, cloud computing, and digital transformation services.',
        'We offer consulting, implementation, and ongoing support for various technology solutions.',
        'Our services are subject to availability and may be modified or discontinued at our discretion.',
        'We reserve the right to refuse service to anyone for any reason at any time.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <Users className="w-6 h-6 text-purple-500" />,
      content: [
        'You are responsible for maintaining the confidentiality of your account and password.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You must not use our services for any unlawful purpose or to solicit others to perform unlawful acts.',
        'You must not transmit any worms, viruses, or any code of a destructive nature.',
        'You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      content: [
        'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group.',
        'Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.',
        'You may not modify, distribute, or create derivative works based on our content without permission.',
        'Any feedback, comments, or suggestions you provide may be used by us without any obligation to compensate you.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: <FileText className="w-6 h-6 text-cyan-500" />,
      content: [
        'Payment terms are as specified in individual service agreements or contracts.',
        'All fees are non-refundable unless otherwise specified in writing.',
        'We reserve the right to change our fees at any time with 30 days\' notice.',
        'Late payments may result in service suspension or termination.',
        'You are responsible for all applicable taxes and fees.'
      ]
    },
    {
      title: 'Service Availability',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      content: [
        'We strive to maintain high service availability but cannot guarantee uninterrupted access.',
        'We may experience downtime for maintenance, updates, or technical issues.',
        'We are not liable for any damages resulting from service interruptions.',
        'We reserve the right to modify or discontinue the service at any time.'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      content: [
        'In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability to you for any damages shall not exceed the amount paid by you for the service in the 12 months preceding the claim.',
        'We are not responsible for any third-party content, services, or websites linked to our service.',
        'Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you.'
      ]
    },
    {
      title: 'Indemnification',
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      content: [
        'You agree to defend, indemnify, and hold harmless Zion Tech Group from any claims, damages, or expenses.',
        'This includes claims arising from your use of the service or violation of these terms.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification.',
        'You agree to cooperate with our defense of such claims.'
      ]
    },
    {
      title: 'Termination',
      icon: <AlertTriangle className="w-6 h-6 text-pink-500" />,
      content: [
        'We may terminate or suspend your account immediately, without prior notice, for any reason.',
        'Upon termination, your right to use the service will cease immediately.',
        'All provisions of these terms that by their nature should survive termination shall survive.',
        'You may terminate your account at any time by contacting us.'
      ]
    },
    {
      title: 'Governing Law',
      icon: <Scale className="w-6 h-6 text-teal-500" />,
      content: [
        'These terms shall be governed by and construed in accordance with the laws of Delaware, United States.',
        'Any disputes arising from these terms or the service shall be resolved in the courts of Delaware.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.',
        'These terms constitute the entire agreement between you and Zion Tech Group.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our AI and IT solutions." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, Zion Tech Group, service conditions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our website or services, 
            you agree to be bound by these terms and conditions.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website 
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300">
              If you disagree with any part of these terms, then you may not access the service. 
              These Terms apply to all visitors, users, and others who access or use the service.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white ml-4">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">legal@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-300">
              Your continued use of the service after any such changes constitutes your acceptance of the new Terms. 
              If you do not agree to the new terms, please stop using the service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;