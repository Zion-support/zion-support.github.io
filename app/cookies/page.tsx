import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const CookiesPage: React.FC = () => {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
      keywords="cookie policy, cookies, tracking, web analytics, privacy"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Cookie <span className="text-cyan-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-16 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies to understand how you use our website, improve our services, and provide 
                you with personalized content and advertisements.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use essential cookies, performance cookies, functionality cookies, and targeting cookies 
                to enhance your browsing experience.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                We may use third-party services that set their own cookies. These are governed by 
                the respective privacy policies of those third parties.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our cookie policy, please contact us at 
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiesPage;