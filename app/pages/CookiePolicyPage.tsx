import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies for several purposes to improve your experience on our website:
            </p>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
                access to secure areas, and remembering your preferences.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Session management</li>
                <li>• Security features</li>
                <li>• User authentication</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Google Analytics</li>
                <li>• Page views and user behavior</li>
                <li>• Traffic sources</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Functional Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your language preference.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Language preferences</li>
                <li>• User interface settings</li>
                <li>• Form data retention</li>
                <li>• Accessibility options</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Marketing Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Advertising personalization</li>
                <li>• Campaign tracking</li>
                <li>• Social media integration</li>
                <li>• Remarketing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Managing Cookies</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies in several ways:
            </p>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Block all cookies</li>
                <li>• Allow only first-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set up notifications for new cookies</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner where you can:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Accept all cookies</li>
                <li>• Reject non-essential cookies</li>
                <li>• Customize your preferences</li>
                <li>• Learn more about each cookie type</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-6">
              Some cookies on our website are set by third-party services that appear on our pages. These include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">Google Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Helps us understand website traffic and user behavior patterns.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">Social Media</h3>
                <p className="text-gray-300 text-sm">
                  Enables social media sharing and integration features.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Updates to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>

            <div className="bg-slate-800 p-6 rounded-lg">
              <ul className="text-gray-300 space-y-2">
                <li>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></li>
                <li>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1-302-464-0950</a></li>
                <li>Address: 364 E Main St STE 1008, Middletown, DE 19709</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}