'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Information about our use of cookies" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 15, 2024
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies</h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you 
                  visit our website. They help us provide you with a better experience.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">How We Use Cookies</h2>
                <p className="text-gray-300 mb-6">
                  We use cookies to analyze website traffic, personalize content, and improve our services. 
                  We also use cookies for security and authentication purposes.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies</h2>
                <p className="text-gray-300 mb-6">
                  We use both session cookies and persistent cookies. Session cookies are temporary and 
                  deleted when you close your browser, while persistent cookies remain on your device.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Managing Cookies</h2>
                <p className="text-gray-300 mb-6">
                  You can control and manage cookies through your browser settings. However, disabling 
                  cookies may affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about our use of cookies, please contact us at 
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    privacy@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CookiesPage;
