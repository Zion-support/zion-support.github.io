const fs = require('fs');
const path = require('path');

// Legal pages that need fixing
const legalPages = [
  'privacy/page.tsx',
  'terms/page.tsx',
  'cookies/page.tsx'
];

// Template for privacy page
const createPrivacyPage = () => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group - Learn how we protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, privacy rights" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;`;

// Template for terms page
const createTermsPage = () => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Learn about our service terms and conditions." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, legal terms" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of our materials for personal, 
                non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on our website.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at 
                legal@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;`;

// Template for cookies page
const createCookiesPage = () => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group - Learn about our use of cookies and similar technologies." />
        <meta name="keywords" content="cookie policy, cookies, tracking, web analytics, privacy" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They help us provide you with a better experience.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies to analyze website traffic, personalize content, and improve our services. 
                We also use cookies for security and authentication purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use both session cookies (which expire when you close your browser) and persistent 
                cookies (which stay on your device for a set period of time).
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. However, disabling 
                cookies may affect the functionality of our website.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at 
                privacy@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPage;`;

// Fix each page
legalPages.forEach(pagePath => {
  const fullPath = path.join('/workspace/app', pagePath);
  let content = '';
  
  if (pagePath.includes('privacy')) {
    content = createPrivacyPage();
  } else if (pagePath.includes('terms')) {
    content = createTermsPage();
  } else if (pagePath.includes('cookies')) {
    content = createCookiesPage();
  }
  
  if (content) {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${pagePath}`);
  }
});

console.log('All legal pages have been fixed!');