'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group - Learn about how we use cookies and similar technologies." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience by remembering your 
                preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies to enhance your browsing experience, analyze site traffic, personalize 
                content, and provide social media features. We also share information about your use of 
                our site with our social media, advertising, and analytics partners.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are used to track visitors across websites to display relevant and 
                    engaging advertisements.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed. 
                However, if you do this, you may have to manually adjust some preferences every time you 
                visit a site.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                Some cookies on our site are set by third-party services. We have no control over these 
                cookies and they are subject to the respective privacy policies of these third parties.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;