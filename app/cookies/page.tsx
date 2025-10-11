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
        <meta name="description" content="Cookie Policy for Zion Tech Group - How we use cookies and similar technologies." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Last updated: December 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-lg p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you 
                    visit our website. They help us provide you with a better experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies for targeted advertising</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    You can control and manage cookies through your browser settings. However, disabling 
                    certain cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    We may use third-party services that set their own cookies. These are governed by 
                    their respective privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <div className="text-gray-300">
                    <p>Email: privacy@ziontechgroup.com</p>
                    <p>Phone: (302) 464-0950</p>
                    <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </section>
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