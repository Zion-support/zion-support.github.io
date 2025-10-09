import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Settings, Eye, Database } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or 1 year',
      icon: Shield,
      examples: [
        'Authentication tokens',
        'Security preferences',
        'Load balancing',
        'CSRF protection'
      ]
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose: 'Website performance and user behavior analysis',
      retention: '2 years',
      icon: Eye,
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User journey analysis',
        'Performance metrics'
      ]
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      purpose: 'User preferences and enhanced features',
      retention: '1 year',
      icon: Settings,
      examples: [
        'Language preferences',
        'Theme settings',
        'Form data',
        'User interface preferences'
      ]
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      purpose: 'Targeted advertising and marketing',
      retention: '1 year',
      icon: Database,
      examples: [
        'Ad targeting',
        'Social media integration',
        'Marketing campaigns',
        'User interest profiling'
      ]
    }
  ];

  const cookieTable = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes users',
      type: 'Analytics',
      retention: '2 years',
      domain: '.ziontechgroup.com'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes users',
      type: 'Analytics',
      retention: '24 hours',
      domain: '.ziontechgroup.com'
    },
    {
      name: 'auth_token',
      purpose: 'User authentication session',
      type: 'Essential',
      retention: 'Session',
      domain: '.ziontechgroup.com'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      type: 'Functional',
      retention: '1 year',
      domain: '.ziontechgroup.com'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks marketing consent status',
      type: 'Marketing',
      retention: '1 year',
      domain: '.ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            when you visit our website and how you can control them.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* What Are Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cookies allow a website to recognize a user's device and remember information about their visit, 
              such as their preferred language and other settings. This can make their next visit easier and the site more useful to them.
            </p>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <type.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Purpose: </span>
                    <span className="text-white">{type.purpose}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Retention: </span>
                    <span className="text-white">{type.retention}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Cookies We Use</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left py-4 px-6 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Purpose</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Type</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Retention</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Domain</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="py-4 px-6 text-white font-mono text-sm">{cookie.name}</td>
                      <td className="py-4 px-6 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          cookie.type === 'Essential' ? 'bg-green-600 text-white' :
                          cookie.type === 'Analytics' ? 'bg-blue-600 text-white' :
                          cookie.type === 'Functional' ? 'bg-yellow-600 text-white' :
                          'bg-purple-600 text-white'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm">{cookie.retention}</td>
                      <td className="py-4 px-6 text-gray-300 text-sm">{cookie.domain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Browser Settings</h3>
            <p className="text-gray-300 mb-6">
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may impact your experience on our website.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Chrome</h4>
                <p className="text-gray-300 text-sm">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Firefox</h4>
                <p className="text-gray-300 text-sm">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Safari</h4>
                <p className="text-gray-300 text-sm">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Edge</h4>
                <p className="text-gray-300 text-sm">
                  Settings → Cookies and site permissions → Cookies and site data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              We may use third-party services that set their own cookies. These include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <span className="text-white font-semibold">Google Analytics</span>
                  <p className="text-gray-300 text-sm">For website analytics and performance monitoring</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <span className="text-white font-semibold">Social Media Platforms</span>
                  <p className="text-gray-300 text-sm">For social sharing and integration features</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <span className="text-white font-semibold">Marketing Partners</span>
                  <p className="text-gray-300 text-sm">For targeted advertising and marketing campaigns</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Cookies?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Contact Us
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookiesPage;