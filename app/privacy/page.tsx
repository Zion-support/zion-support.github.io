'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Privacy - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional privacy solutions powered by advanced AI and cutting-edge technology." />
        <meta name="keywords" content="privacy, AI solutions, IT services, automation, technology, business solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Contact Us
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  This privacy policy describes how Zion Tech Group collects, uses, and protects your personal information.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">Information We Collect</h3>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h3>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300">
                  If you have any questions about this privacy policy, please contact us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PrivacyPage;