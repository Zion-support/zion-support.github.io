'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      icon: Shield,
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services.
            </p>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4">
                      <section.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">1. Service Description</h3>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cloud computing, cybersecurity, and software development.
                </p>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">2. User Responsibilities</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Provide accurate and complete information when using our services</li>
                  <li>• Maintain the confidentiality of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws and regulations</li>
                  <li>• Not engage in any activities that may harm or interfere with our services</li>
                  <li>• Respect the intellectual property rights of others</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h3>
                <p className="text-gray-300 mb-4">
                  Payment for our services is due according to the terms specified in your service agreement. We accept various payment methods including credit cards, bank transfers, and other approved methods.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• All prices are subject to change with 30 days notice</li>
                  <li>• Late payments may result in service suspension</li>
                  <li>• Refunds are subject to our refund policy</li>
                  <li>• Taxes and fees may apply as required by law</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h3>
                <p className="text-gray-300 mb-4">
                  All content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not use, reproduce, or distribute any content without our express written permission.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">5. Termination</h3>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these terms.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use our services will cease immediately, and we may delete your account and data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these terms of service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:legal@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                legal@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
