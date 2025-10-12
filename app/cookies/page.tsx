import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies and similar technologies." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They help us provide you with a better experience.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies to analyze website traffic, personalize content, and improve our services. 
              We also use cookies for security and authentication purposes.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies are necessary for the website to function properly.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies help us understand how visitors interact with our website.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Marketing Cookies</h3>
              <p className="text-gray-300">These cookies are used to track visitors across websites for marketing purposes.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies through your browser settings. However, disabling 
              certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}