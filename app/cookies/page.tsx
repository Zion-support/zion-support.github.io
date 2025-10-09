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
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session state across page requests',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'user_preferences',
          purpose: 'Stores your basic preferences and settings',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '2 years',
          type: 'Third-party'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '24 hours',
          type: 'Third-party'
        },
        {
          name: '_gat',
          purpose: 'Google Analytics - throttles request rate',
          duration: '1 minute',
          type: 'Third-party'
        }
      ]
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: [
        {
          name: 'language_preference',
          purpose: 'Remembers your language preference',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'theme_preference',
          purpose: 'Remembers your dark/light theme choice',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'notification_dismissed',
          purpose: 'Remembers if you dismissed certain notifications',
          duration: '30 days',
          type: 'First-party'
        }
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to deliver advertisements more relevant to you.',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions from Facebook ads',
          duration: '90 days',
          type: 'Third-party'
        },
        {
          name: 'ads_preferences',
          purpose: 'Stores your advertising preferences',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              when you visit our website. It explains what these technologies are and why we use them, 
              as well as your rights to control our use of them.
            </p>
          </header>

          {/* What Are Cookies Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <div className="cyber-card hologram-card p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small data files that are placed on your computer or mobile device when 
                you visit a website. Cookies are widely used by website owners to make their websites 
                work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cookies set by the website owner (in this case, Zion Tech Group) are called "first-party cookies." 
                Cookies set by parties other than the website owner are called "third-party cookies." 
                Third-party cookies enable third-party features or functionality to be provided on or 
                through the website (e.g., advertising, interactive content, and analytics).
              </p>
            </div>
          </section>

          {/* Cookie Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">Types of Cookies We Use</h2>
            <div className="space-y-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-start mb-4">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-4 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      {category.necessary && (
                        <span className="inline-block bg-green-500 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
                          Necessary
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-gray-400 py-2">Cookie Name</th>
                          <th className="text-left text-gray-400 py-2">Purpose</th>
                          <th className="text-left text-gray-400 py-2">Duration</th>
                          <th className="text-left text-gray-400 py-2">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.cookies.map((cookie, cookieIndex) => (
                          <tr key={cookieIndex} className="border-b border-gray-800">
                            <td className="text-white py-3 font-mono text-xs">{cookie.name}</td>
                            <td className="text-gray-300 py-3">{cookie.purpose}</td>
                            <td className="text-gray-300 py-3">{cookie.duration}</td>
                            <td className="text-gray-300 py-3">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights and Choices</h2>
            <div className="cyber-card hologram-card p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise 
                your cookie rights by setting your preferences in our cookie consent banner or by 
                using your browser settings.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>You can set or amend your web browser controls to accept or refuse cookies</li>
                <li>If you choose to reject cookies, you may still use our website though your access to some functionality may be restricted</li>
                <li>You can opt out of third-party cookies by visiting the relevant third-party's opt-out page</li>
                <li>You can contact us at any time to request information about the cookies we use</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <div className="cyber-card hologram-card p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            <p>Last updated: March 10, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;