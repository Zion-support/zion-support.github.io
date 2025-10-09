import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              This page explains how Zion Tech Group uses cookies and similar technologies on our website.
            </p>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies for various purposes including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization and user preferences</li>
                <li>Security and fraud prevention</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They cannot be disabled 
                and are usually set in response to actions made by you.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Functional Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies enable the website to provide enhanced functionality and personalization, 
                such as remembering your preferences.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in various ways. Most web browsers allow you to 
                refuse cookies or delete them. However, if you choose to disable cookies, some parts 
                of our website may not function properly.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>

              <p className="text-sm text-gray-400 mt-8">
                Last updated: January 9, 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;