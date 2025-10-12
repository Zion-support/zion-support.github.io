import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Shield, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies for several purposes:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• To remember your preferences and settings</li>
                <li>• To analyze how our website is used</li>
                <li>• To improve our website's performance</li>
                <li>• To provide personalized content and advertisements</li>
                <li>• To ensure security and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
                  and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Examples:</strong> Authentication cookies, security cookies, load balancing cookies
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                  This helps us improve our website's performance and user experience.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Functional Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Examples:</strong> Language preferences, region settings, user interface customization
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Marketing Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
                  and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Examples:</strong> Social media integration, advertising networks, remarketing
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                We may also use third-party cookies from trusted partners to help us analyze website usage and provide better services. 
                These third parties may include:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Google Analytics for website analytics</li>
                <li>• Social media platforms for sharing functionality</li>
                <li>• Advertising networks for relevant advertisements</li>
                <li>• Customer support tools for live chat functionality</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You have several options for managing cookies:
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can:
                </p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete cookies when you close your browser</li>
                  <li>• Set up notifications when cookies are set</li>
                </ul>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Note:</strong> Blocking certain cookies may affect the functionality of our website.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="text-gray-300 mb-4 space-y-2">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Change your preferences at any time</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Cookie Retention</h2>
              <p className="text-gray-300 mb-6">
                Different cookies have different retention periods:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• <strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li>• <strong>Persistent cookies:</strong> Remain on your device for a set period (usually 1-2 years)</li>
                <li>• <strong>Essential cookies:</strong> Retained for the duration of your session</li>
                <li>• <strong>Analytics cookies:</strong> Typically retained for 2 years</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-6 mb-8">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> +1 (302) 464-0950
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}