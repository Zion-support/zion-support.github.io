'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Globe, User, Mail, Phone, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly',
      examples: ['Authentication', 'Security', 'Load balancing'],
      required: true
    },
    {
      name: 'Analytics Cookies',
      icon: Database,
      description: 'Help us understand how visitors interact with our website',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      required: false
    },
    {
      name: 'Marketing Cookies',
      icon: Globe,
      description: 'Used to track visitors across websites for marketing purposes',
      examples: ['Ad targeting', 'Social media integration', 'Remarketing'],
      required: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about how we use cookies to enhance your browsing experience and improve our services.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: January 1, 2024
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-blue-500" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                        {type.required ? (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">Required</span>
                        ) : (
                          <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">Optional</span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{type.description}</p>
                      <ul className="space-y-2">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-green-500" />
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-6">
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                    <p className="text-gray-300 mb-4">
                      You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete them.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">Chrome: Settings > Privacy and security > Cookies</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">Firefox: Options > Privacy & Security > Cookies</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">Safari: Preferences > Privacy > Cookies</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-300">Edge: Settings > Cookies and site permissions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-yellow-500" />
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-300">+1-302-464-0950</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPage;