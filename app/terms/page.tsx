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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <section.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Additional Terms
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">1. Intellectual Property Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                Other than the content you own, under these Terms, Zion Tech Group and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">2. Restrictions</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You are specifically restricted from all of the following:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Publishing any Website material in any other media</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
                <li>Publicly performing and/or showing any Website material</li>
                <li>Using this Website in any way that is or may be damaging to this Website</li>
                <li>Using this Website contrary to applicable laws and regulations</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">3. Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">4. Governing Law</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">5. Changes to Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Privacy Policy
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsPage;