import { Helmet  } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info  } from 'lucide-react';

const CookiesPage: React.FC  = () => {
  const lastUpdated = 'January 1, 2024';
  
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      required: true
    },
    {
      type: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      required: false
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Form data storage'
      ],
      required: false
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      examples: [
        'Advertising targeting',
        'Social media integration',
        'Email marketing tracking',
        'Campaign performance'
      ],
      required: false
    }
  ];
  const purposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works correctly and securely',
      icon: Shield
    },
    {
      title: 'User Experience',
      description: 'Remember your preferences and settings',
      icon: Settings
    },
    {
      title: 'Analytics',
      description: 'Understand how users interact with our site',
      icon: Database
    },
    {
      title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye
    }
  ]

  return (
    <div className="min-h-screen pt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="text-cyan-400">Cookie Policy</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Information about how we use cookies on our website.
          </p>
                </div>
      </div>
                </div>
  );
};
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CookiesPage: React.FC  = () => {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Learn about how we use cookies to improve your experience on our website.
            </p>
                </div>
        </div>
                </section>
                {/* Content Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8"></div>
            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300"></p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300"></p>
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content and advertisements.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300"></p>
                You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300"></p>
                If you have any questions about our use of cookies, please contact us at privacy@ziontechgroup.com
              </p>
                </div>
          </div>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiesPage;