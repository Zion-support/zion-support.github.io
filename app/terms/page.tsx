'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Shield, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group\'s website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on Zion Tech Group\'s website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice.'
    },
    {
      title: 'Links',
      content: 'Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: 'Modifications',
      content: 'Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about our terms and conditions for using our AI and IT services." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-cyan-400" />
                Questions About These Terms?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">legal@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">(302) 464-0950</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsPage;