import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, CheckCircle } from 'lucide-react';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Privacy & Data Protection</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience on our website." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, website tracking" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cookie Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 text-center leading-relaxed mb-8">
            Learn about our cookie policy and how we use cookies to improve your experience.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Cookie className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>

            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Essential cookies for website functionality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Analytics cookies to understand usage patterns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Preference cookies to remember your settings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Marketing cookies for personalized content</span>
              </li>
            </ul>

            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Managing Cookies</h2>
            </div>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies through your browser settings. However, please note 
              that disabling certain cookies may affect the functionality of our website.
            </p>

            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about our cookie policy, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;