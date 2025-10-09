'use client';
import React from 'react';
import { Cookie, Shield, Settings, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CookiesPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="Cookie Policy - Privacy & Data Protection | Zion Tech Group"
        description="Learn about our cookie policy and how we use cookies to improve your experience on our website. Understand your privacy rights and cookie preferences."
        keywords={['cookie policy', 'privacy', 'data protection', 'cookies', 'gdpr', 'privacy rights']}
        canonicalUrl="https://ziontechgroup.com/cookies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Learn about our cookie policy and how we use cookies to improve your experience 
              on our website. Understand your privacy rights and cookie preferences.
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">What Are Cookies?</h2>
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to analyze website traffic, personalize content, and improve our services. 
                By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-300">Required for the website to function properly</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                <p className="text-gray-300">Help us understand how visitors use our website</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Preference Cookies</h3>
                <p className="text-gray-300">Remember your settings and preferences</p>
              </div>
            </div>
          </section>

          {/* Cookie Details */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Cookie Details</h2>
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-white font-semibold py-3">Cookie Name</th>
                      <th className="text-white font-semibold py-3">Purpose</th>
                      <th className="text-white font-semibold py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="text-gray-300 py-3">_ga</td>
                      <td className="text-gray-300 py-3">Google Analytics</td>
                      <td className="text-gray-300 py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="text-gray-300 py-3">_gid</td>
                      <td className="text-gray-300 py-3">Google Analytics</td>
                      <td className="text-gray-300 py-3">24 hours</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="text-gray-300 py-3">_gat</td>
                      <td className="text-gray-300 py-3">Google Analytics</td>
                      <td className="text-gray-300 py-3">1 minute</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="text-gray-300 py-3">session_id</td>
                      <td className="text-gray-300 py-3">Session management</td>
                      <td className="text-gray-300 py-3">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cookie Preferences</h3>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies through your browser settings. Most browsers 
                  allow you to refuse cookies or delete them.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Block all cookies
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Delete existing cookies
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Set cookie preferences
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Privacy Rights</h3>
                <p className="text-gray-300 mb-4">
                  Under GDPR and other privacy laws, you have the right to access, correct, 
                  or delete your personal data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Access your data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Correct inaccurate data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Request data deletion
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Questions About Our Cookie Policy?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                If you have any questions about our cookie policy or privacy practices, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;