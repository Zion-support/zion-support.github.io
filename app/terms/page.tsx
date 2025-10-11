'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.'
    },
    {
      title: 'Links',
      content: 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service for using Zion Tech Group's AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="text-white">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms of service carefully before using our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Scale className="w-6 h-6 text-cyan-400 mr-3" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300">{section.content}</p>
                </div>
              ))}

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  Important Notice
                </h2>
                <p className="text-gray-300 mb-4">
                  These terms may be updated from time to time. We will notify you of any material changes 
                  by posting the new terms on this page.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Last updated: January 2024</span>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: legal@ziontechgroup.com</p>
                  <p>Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;