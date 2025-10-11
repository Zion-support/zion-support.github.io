'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only.'
    },
    {
      icon: Shield,
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.'
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer',
      content: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied.'
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the conditions for using Zion Tech Group's AI and technology solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, user agreement" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Service</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms of service carefully before using our website and services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Terms</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Service Availability</h3>
                <p className="text-gray-300 mb-4">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">User Responsibilities</h3>
                <p className="text-gray-300 mb-4">
                  Users are responsible for maintaining the confidentiality of their account information and for all 
                  activities that occur under their account. Users must not use our services for any unlawful purpose.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Intellectual Property</h3>
                <p className="text-gray-300 mb-4">
                  All content, trademarks, and intellectual property on this website are owned by Zion Tech Group 
                  or our licensors. Users may not reproduce, distribute, or create derivative works without permission.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Changes to Terms</h3>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes by posting the new terms on this page and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Terms?</h2>
              <p className="text-xl text-gray-300">
                If you have any questions about these terms of service, please contact us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">{contactInfo.email}</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">{contactInfo.phone}</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default TermsPage;