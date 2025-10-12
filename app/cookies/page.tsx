'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cookie, Shield, Settings, BarChart3, Mail, Phone, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CookiesPage() {
  const lastUpdated = 'October 8, 2024';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies'],
      necessary: true,
      icon: <Shield className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Google Analytics', 'Performance monitoring', 'User behavior tracking'],
      necessary: false,
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Social media tracking', 'Advertising cookies', 'Remarketing pixels'],
      necessary: false,
      icon: <Settings className="w-6 h-6 text-purple-400" />
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      label: 'Email',
      value: 'kleber@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: 'Phone',
      value: '+1 (302) 464-0950'
    },
    {
      icon: <MapPin className="w-5 h-5 text-green-400" />,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | How We Use Cookies</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand the different types of cookies and how to manage your preferences." />
        <meta name="keywords" content="cookie policy, cookies, website cookies, privacy, data protection, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cookie{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Last updated: {lastUpdated}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            when you visit our website and how you can manage your cookie preferences.
          </p>
        </div>

        {/* What are Cookies */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-300">
              Cookies allow a website to recognize a user's device and remember information about their visit, 
              such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{type.name}</h3>
                  {type.necessary && (
                    <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      Always Active
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Examples:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Website Functionality</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Remember your login status</li>
                  <li>• Store your preferences</li>
                  <li>• Enable shopping cart functionality</li>
                  <li>• Provide security features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analytics & Improvement</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Understand how visitors use our site</li>
                  <li>• Improve website performance</li>
                  <li>• Identify popular content</li>
                  <li>• Optimize user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              You have several options for managing cookies on our website:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookie Consent Banner</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong>Note:</strong> Essential cookies cannot be disabled as they are necessary for the website to function properly.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can also control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set preferences for specific websites</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Opt-Out Links</h3>
                <p className="text-gray-300 mb-4">
                  For specific analytics and advertising cookies, you can opt out directly:
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    • Google Analytics Opt-out
                  </a>
                  <a 
                    href="https://www.facebook.com/settings?tab=ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    • Facebook Ad Preferences
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              Some cookies on our website are set by third-party services that appear on our pages. These include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Analytics Services</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Google Analytics</li>
                  <li>• Hotjar</li>
                  <li>• Mixpanel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Facebook</li>
                  <li>• Twitter</li>
                  <li>• LinkedIn</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              These third parties may use cookies to collect information about your online activities across different websites. 
              We do not control these cookies and recommend reviewing their privacy policies.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/30 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Important Notice</h2>
              <p className="text-gray-300">
                If you choose to disable cookies, some features of our website may not function properly. 
                Essential cookies are required for the website to work and cannot be disabled.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {info.icon}
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us About Cookies
            <Mail className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}