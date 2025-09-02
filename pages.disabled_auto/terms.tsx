import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, Shield, Users, DollarSign } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not access or use our services.',
        'These terms apply to all visitors, users, and others who access or use our services.',
        'We reserve the right to modify these terms at any time without prior notice.'
      ]
    },
    {
      title: 'Service Description',
      icon: Users,
      content: [
        'Zion Tech Group provides technology consulting, development, and implementation services.',
        'Our services include but are not limited to: AI development, cloud architecture, web development, mobile development, and IT consulting.',
        'We reserve the right to modify, suspend, or discontinue any part of our services at any time.',
        'Service availability is subject to maintenance, updates, and technical limitations.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'You are responsible for maintaining the confidentiality of your account information.',
        'You must provide accurate and complete information when using our services.',
        'You agree not to use our services for any unlawful or prohibited activities.',
        'You are responsible for all activities that occur under your account.',
        'You must comply with all applicable laws and regulations.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: DollarSign,
      content: [
        'Payment terms are specified in individual service agreements or project contracts.',
        'All fees are non-refundable unless otherwise specified in writing.',
        'We reserve the right to change our pricing with 30 days notice.',
        'Late payments may result in service suspension or termination.',
        'You are responsible for all applicable taxes and fees.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group.',
        'You may not reproduce, distribute, or modify our content without written permission.',
        'Work products created for clients remain the property of the client unless otherwise specified.',
        'We retain the right to use general methodologies and techniques developed during projects.',
        'Any third-party intellectual property used in our services is properly licensed.'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'Zion Tech Group shall not be liable for any indirect, incidental, or consequential damages.',
        'Our total liability shall not exceed the amount paid for the specific service in question.',
        'We do not guarantee uninterrupted or error-free service.',
        'You use our services at your own risk and discretion.',
        'We are not responsible for third-party services or integrations.'
      ]
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions for using Zion Tech Group services and website."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-600 mb-6">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-lg text-gray-600">
              If you disagree with any part of these terms, then you may not access our services. 
              These Terms apply to all visitors, users, and others who access or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Termination Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-lg text-gray-600 mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-lg text-gray-600">
              Upon termination, your right to use the services will cease immediately. If you wish to terminate 
              your account, you may simply discontinue using the services.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-lg text-gray-600 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-lg text-gray-600">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of 
              those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, 
              the remaining provisions will remain in effect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;