'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      cookies: ['Session cookies', 'Security cookies', 'Load balancing cookies']
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: ['Google Analytics', 'Performance monitoring', 'User behavior tracking']
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: ['Language preferences', 'Theme settings', 'User preferences']
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to deliver relevant advertisements.',
      necessary: false,
      cookies: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-300 text-lg">
              Learn about how we use cookies to enhance your experience on our website.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
            </p>
            <p className="text-gray-300 mb-6">
              We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
              We also use cookies for security purposes and to remember your preferences.
            </p>
          </section>

          {/* Cookie Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    {category.necessary && (
                      <span className="ml-auto bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {category.cookies.map((cookie, cookieIndex) => (
                        <li key={cookieIndex}>• {cookie}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• View which cookies are stored on your device</li>
                <li>• Delete cookies individually or all at once</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block third-party cookies</li>
                <li>• Clear cookies when you close your browser</li>
              </ul>
              <p className="text-gray-300">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our website and prevent you from accessing certain features.
              </p>
            </div>
          </section>

          {/* Browser Instructions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Browser-Specific Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Chrome</h3>
                <p className="text-sm text-gray-300">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Firefox</h3>
                <p className="text-sm text-gray-300">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Safari</h3>
                <p className="text-sm text-gray-300">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Edge</h3>
                <p className="text-sm text-gray-300">
                  Settings → Cookies and site permissions → Cookies and site data
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Opera</h3>
                <p className="text-sm text-gray-300">
                  Settings → Privacy & security → Cookies and other site data
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Our website may contain third-party cookies from services such as:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Google Analytics - for website analytics</li>
                <li>• Social media platforms - for social sharing features</li>
                <li>• Advertising networks - for targeted advertising</li>
                <li>• Customer support tools - for live chat functionality</li>
              </ul>
              <p className="text-gray-300">
                These third-party services have their own privacy policies and cookie practices. 
                We recommend reviewing their policies for more information.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                If you have any questions about our cookie policy or how we use cookies, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;