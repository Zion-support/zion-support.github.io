'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Users, Globe, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
    },
    {
      title: 'Service Availability',
      content: 'We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.'
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any unlawful or prohibited activities.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, and other intellectual property on our website are the property of Zion Tech Group or its licensors. Users may not use, reproduce, or distribute any content without prior written permission.'
    },
    {
      title: 'Privacy and Data Protection',
      content: 'We are committed to protecting your privacy and personal data. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.'
    },
    {
      title: 'Governing Law',
      content: 'These terms shall be governed by and construed in accordance with the laws of Delaware, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Delaware.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms</title>
        <meta name="description" content="Read our terms of service to understand the legal terms and conditions for using Zion Tech Group's AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, service terms, legal conditions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our AI and IT services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Legal Agreement</h3>
                <p className="text-gray-300">These terms constitute a legally binding agreement between you and Zion Tech Group.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">User Protection</h3>
                <p className="text-gray-300">We outline your rights and responsibilities when using our services.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Service Terms</h3>
                <p className="text-gray-300">Clear guidelines on how our services can be used and what to expect.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Points to Remember</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Service Usage</h3>
                    <p className="text-gray-300">Use our services responsibly and in accordance with applicable laws.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Account Security</h3>
                    <p className="text-gray-300">Keep your account credentials secure and notify us of any breaches.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
                    <p className="text-gray-300">We protect your data according to our Privacy Policy and industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
                    <p className="text-gray-300">Ensure your use of our services complies with all applicable regulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Contact Legal Team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Terms
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;