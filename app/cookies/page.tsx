'use client';

import React from 'react';
import { 
  Cookie,
  Settings,
  Shield,
  Eye,
  Database,
  Mail,
  Phone
} from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Google Analytics</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>User interface preferences</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Advertising cookies</li>
                    <li>Social media cookies</li>
                    <li>Retargeting cookies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                We use cookies for various purposes to improve your experience on our website:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To remember your preferences and settings</li>
                <li>To analyze how our website is used</li>
                <li>To improve our website's performance</li>
                <li>To provide personalized content and advertisements</li>
                <li>To ensure website security</li>
                <li>To enable social media features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-4">
                You have control over cookies. You can choose to accept or decline cookies when you first visit our website, or you can modify your browser settings to refuse cookies.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-3">
                  Most web browsers allow you to control cookies through their settings preferences. However, if you disable cookies, some features of our website may not function properly.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li>Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                    <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li>Edge: Settings &gt; Cookies and site permissions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Third-Party Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing features</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Customer support tools for live chat functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">+1 (302) 464-0950</span>
                </div>
                <div className="text-gray-300">
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;