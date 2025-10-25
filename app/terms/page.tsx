'use client';
import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.'
      ]
    },
    {
      title: 'Use License',
      icon: FileText,
      content: [
        'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.'
      ]
    },
    {
      title: 'Disclaimer',
      icon: AlertTriangle,
      content: [
        'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, Zion Tech Group does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
      ]
    },
    {
      title: 'Limitations',
      icon: Shield,
      content: [
        'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group\'s website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
      ]
    },
    {
      title: 'Accuracy of Materials',
      icon: CheckCircle,
      content: [
        'The materials appearing on Zion Tech Group\'s website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.',
        'Zion Tech Group may make changes to the materials contained on its website at any time without notice. However, Zion Tech Group does not make any commitment to update the materials.'
      ]
    },
    {
      title: 'Links',
      icon: FileText,
      content: [
        'Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.',
        'Use of any such linked website is at the user\'s own risk.'
      ]
    },
    {
      title: 'Modifications',
      icon: AlertTriangle,
      content: [
        'Zion Tech Group may revise these terms of service for its website at any time without notice.',
        'By using this website, you are agreeing to be bound by the then current version of these terms of service.'
      ]
    },
    {
      title: 'Governing Law',
      icon: Shield,
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States.',
        'You irrevocably submit to the exclusive jurisdiction of the courts in that state or location.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service to understand the rules and guidelines for using our AI, cloud, and cybersecurity services."
        keywords={["terms of service","legal","terms and conditions","service agreement","Zion Tech Group"]}
        canonicalUrl="https://ziontechgroup.com/terms"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:legal@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Email Legal Team
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;