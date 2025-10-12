'use client';

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

import { Mail } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = 'October 8, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.'
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must provide accurate and complete information and notify us immediately of any unauthorized use of their account.'
    },
    {
      title: 'Prohibited Uses',
      content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts, violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances, infringe upon or violate our intellectual property rights or the intellectual property rights of others, harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate, submit false or misleading information, or upload or transmit viruses or any other type of malicious code.'
    },
    {
      title: 'Intellectual Property Rights',
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.'
    },
    {
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.'
    },
    {
      title: 'Disclaimer',
      content: 'The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      label: 'Email',
      value: 'kleber@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: 'Phone',
      value: '+1 (302) 464-0950'
    },
    {
      icon: <MapPin className="w-5 h-5 text-green-400" />,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and responsibilities when using our AI and IT services, website, and solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, user agreement, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Last updated: {lastUpdated}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These Terms of Service ("Terms") govern your use of our website and services. 
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/30 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Important Notice</h2>
              <p className="text-gray-300">
                By accessing or using our website and services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <section key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Key Points */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Key Points to Remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Your Rights</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Access to our services as described
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Privacy protection as outlined in our Privacy Policy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Professional support and customer service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Right to terminate your account at any time
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Your Responsibilities</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Provide accurate information
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Use services in compliance with applicable laws
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Maintain account security
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Respect intellectual property rights
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Level Agreement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Service Level Agreement</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Uptime Guarantee</h3>
                <p className="text-gray-300 text-sm">We strive to maintain 99.9% service availability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support Available</h3>
                <p className="text-gray-300 text-sm">Round-the-clock customer support and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">48h</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm">Maximum response time for support requests</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Dispute Resolution</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              If you have any concerns or disputes regarding our services, we encourage you to contact us first. 
              We are committed to resolving issues through good faith negotiations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Step 1:</strong> Contact our support team at kleber@ziontechgroup.com
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Step 2:</strong> We will review your concern and respond within 48 hours
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Step 3:</strong> If needed, we will work together to find a mutually acceptable solution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {info.icon}
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center">
          <p className="text-gray-300 mb-4">
            By using our services, you acknowledge that you have read and understood these Terms of Service 
            and agree to be bound by them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
              <Mail className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Privacy Policy
              <Shield className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}