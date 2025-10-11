'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion AI | Cookie Usage & Privacy</title>
        <meta name="description" content="Learn about how we use cookies and similar technologies to improve your experience on our website." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Cookie Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8 text-center">
                This policy explains how we use cookies and similar technologies on our website.
              </p>
              
              <div className="bg-white/5 rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p className="text-gray-300">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  enabling certain functionality.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="text-gray-300">
                  We use cookies to analyze website traffic, personalize content, and improve our services. 
                  We also use cookies for security purposes and to remember your preferences.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                    <p className="text-gray-300">
                      These cookies remember your choices and preferences to provide a personalized experience.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-300">
                  You can control and manage cookies through your browser settings. However, disabling 
                  certain cookies may affect the functionality of our website.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at 
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

export default CookiesPage;
