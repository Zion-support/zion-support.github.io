'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
          purpose: 'Distinguishes unique users and tracks page views',
          duration: '2 years',
          type: 'Third-party (Google Analytics)'
        },
        {
          name: '_gid',
          purpose: 'Distinguishes unique users for 24 hours',
          duration: '24 hours',
          type: 'Third-party (Google Analytics)'
        }
      ]
    },
    {
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your choices and preferences.',
      necessary: false,
      cookies: [
        {
          name: 'theme_preference',
          purpose: 'Remembers your preferred theme (light/dark)',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'language_preference',
          purpose: 'Remembers your preferred language',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-300 text-lg">
              Learn about how we use cookies to enhance your experience on our website.
            </p>
          </div>

          <div className="space-y-8">
            {cookieCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                  {category.necessary && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                      Necessary
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.cookies.map((cookie, cookieIndex) => (
                    <div key={cookieIndex} className="bg-gray-900/50 rounded p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white">{cookie.name}</h3>
                        <span className="text-xs text-gray-400">{cookie.type}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{cookie.purpose}</p>
                      <p className="text-xs text-gray-400">Duration: {cookie.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>View and delete cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-300">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              If you have any questions about our cookie policy, please contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;