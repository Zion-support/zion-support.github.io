import React from 'react';
import { FileText, Scale, AlertTriangle, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: <Scale className="w-6 h-6 text-green-500" />,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the rules and regulations for using Zion Tech Group's services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, service terms" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Availability</h3>
                  <p>We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may temporarily suspend services for maintenance or updates.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User Responsibilities</h3>
                  <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Modifications</h3>
                  <p>We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                If you have any questions about these Terms of Service, please contact us for clarification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@ziontechgroup.com"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Legal
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  General Contact
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

export default TermsOfServicePage;