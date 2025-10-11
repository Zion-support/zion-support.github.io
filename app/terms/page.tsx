'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle, Users, Mail, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you must not use our services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Your continued use of our services after changes constitutes acceptance of the new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: Scale,
      content: [
        'Zion Tech Group provides AI services, IT solutions, and Micro SaaS applications',
        'Our services include but are not limited to: AI chatbots, analytics, cloud infrastructure, cybersecurity',
        'We reserve the right to modify, suspend, or discontinue any service at any time',
        'We do not guarantee uninterrupted access to our services'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: [
        'You must provide accurate and complete information when using our services',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You agree not to use our services for any unlawful or prohibited activities',
        'You must comply with all applicable laws and regulations when using our services'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        'All content, trademarks, and intellectual property on our platform are owned by Zion Tech Group',
        'You may not reproduce, distribute, or create derivative works without our written permission',
        'Any content you provide to us remains your property, but you grant us a license to use it',
        'We respect the intellectual property rights of others and expect the same from our users'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid by you for our services',
        'Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Zion Tech Group - Legal Terms & Conditions</title>
        <meta name="description" content="Read our Terms of Service to understand the legal terms and conditions for using Zion Tech Group's AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms, legal compliance" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our AI and IT services.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and applications. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We reserve the right to update or change these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Billing</h3>
                  <p className="text-gray-300">
                    Payment is due upon receipt of invoice unless otherwise agreed in writing. Late payments may result in service suspension.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Refunds</h3>
                  <p className="text-gray-300">
                    Refunds are handled on a case-by-case basis. Contact our support team to discuss refund requests.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Price Changes</h3>
                  <p className="text-gray-300">
                    We reserve the right to modify our pricing with 30 days' notice to existing customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Either party may terminate these Terms at any time with 30 days' written notice. We may immediately terminate your access to our services if you breach these Terms.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use our services will cease immediately. We may delete your account and data after a reasonable period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsPage;