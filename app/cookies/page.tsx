import React from 'react';
import { Helmet  } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, analytics, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            <p className="text-xl text-gray-300 mb-8">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
            </p>
            
            <div className="max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p className="text-gray-300">
                  Cookies are small text files that are placed on your computer or mobile device when you visit 
                  our website. They help us provide you with a better experience by remembering your preferences 
                  and enabling certain functionality.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function properly. They enable basic 
                      functions like page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="text-gray-300">
                      These cookies enable the website to provide enhanced functionality and personalization, 
                      such as remembering your preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are 
                  already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <p className="text-gray-300">
                  However, if you do this, you may have to manually adjust some preferences every time you 
                  visit a site and some services and functionalities may not work.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <p className="text-cyan-400 mt-2">
                  Email: privacy@ziontechgroup.com<br />
                  Phone: +1 302 464 0950
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