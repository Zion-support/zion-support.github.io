'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion AI | Data Protection & Privacy</title>
        <meta name="description" content="Learn about how we protect your privacy and handle your data responsibly." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <div className="bg-white/5 rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and ensure the security of our platform.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300">
                  You have the right to access, update, or delete your personal information. 
                  You can also opt out of certain communications from us.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at 
                  <a href="mailto:privacy@zionai.com" className="text-cyan-400 hover:text-cyan-300">
                    privacy@zionai.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
