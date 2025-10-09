'use client';
import React, { useState } from 'react';
import { Cookie, Settings, Shield, Eye, CheckCircle, X, AlertTriangle, Info, Clock, Database, Users, Globe } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      required: true,
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization cookies'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      required: false,
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      required: false,
      examples: [
        'Social media tracking',
        'Advertising personalization',
        'Remarketing pixels',
        'Conversion tracking'
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      required: false,
      examples: [
        'Language preferences',
        'Region settings',
        'User preferences',
        'Chat widget functionality'
      ]
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks marketing consent status',
      duration: '1 year',
      type: 'Marketing'
    }
  ];

  const handleCookieToggle = (cookieType: string) => {
    if (cookieType === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const savePreferences = () => {
    // Save cookie preferences to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cookie Policy
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
          </p>
        </div>

        {/* What are Cookies */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
            What Are Cookies?
          </h2>
          <p className="text-gray-300 mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and to provide information to website owners.
          </p>
          <p className="text-gray-300">
            Cookies allow a website to recognize a user's device and remember information about their visit, such as 
            their preferred language and other settings. This can make your next visit easier and the site more useful to you.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((cookieType) => (
              <div key={cookieType.id} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{cookieType.name}</h3>
                  <div className="flex items-center space-x-3">
                    {cookieType.required && (
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">Required</span>
                    )}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences[cookieType.id as keyof typeof cookiePreferences]}
                        onChange={() => handleCookieToggle(cookieType.id)}
                        disabled={cookieType.required}
                        className="w-4 h-4 text-cyan-600 bg-slate-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-300">
                        {cookieType.required ? 'Always Active' : 'Enabled'}
                      </span>
                    </label>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{cookieType.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookieType.examples.map((example, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Management */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Settings className="w-6 h-6 text-cyan-400 mr-3" />
            Manage Your Cookie Preferences
          </h2>
          <p className="text-gray-300 mb-6">
            You can control and manage cookies in various ways. Please note that removing or blocking cookies 
            can impact your user experience and parts of our website may no longer be fully accessible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={acceptAll}
              className="cyber-button flex items-center justify-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Accept All Cookies
            </button>
            <button
              onClick={rejectAll}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <X className="w-4 h-4 mr-2" />
              Reject Non-Essential
            </button>
            <button
              onClick={savePreferences}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center"
            >
              <Settings className="w-4 h-4 mr-2" />
              Save Preferences
            </button>
          </div>
        </div>

        {/* Cookie Details */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Database className="w-6 h-6 text-cyan-400 mr-3" />
            Detailed Cookie Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-cyan-400">Cookie Name</th>
                  <th className="text-left py-3 px-4 text-cyan-400">Purpose</th>
                  <th className="text-left py-3 px-4 text-cyan-400">Duration</th>
                  <th className="text-left py-3 px-4 text-cyan-400">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white font-mono">{cookie.name}</td>
                    <td className="py-3 px-4 text-gray-300">{cookie.purpose}</td>
                    <td className="py-3 px-4 text-gray-300">{cookie.duration}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        cookie.type === 'Essential' 
                          ? 'bg-red-500 text-white' 
                          : cookie.type === 'Analytics'
                          ? 'bg-blue-500 text-white'
                          : cookie.type === 'Marketing'
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-500 text-white'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Browser Settings */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe className="w-6 h-6 text-cyan-400 mr-3" />
            Browser Cookie Settings
          </h2>
          <p className="text-gray-300 mb-6">
            You can also control cookies through your browser settings. Here's how to manage cookies in popular browsers:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="cyber-card p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Chrome</h3>
              <p className="text-sm text-gray-300">Settings → Privacy and security → Cookies and other site data</p>
            </div>
            <div className="cyber-card p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Firefox</h3>
              <p className="text-sm text-gray-300">Options → Privacy & Security → Cookies and Site Data</p>
            </div>
            <div className="cyber-card p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Safari</h3>
              <p className="text-sm text-gray-300">Preferences → Privacy → Manage Website Data</p>
            </div>
            <div className="cyber-card p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Edge</h3>
              <p className="text-sm text-gray-300">Settings → Cookies and site permissions → Cookies and site data</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="cyber-card p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Mail className="w-6 h-6 text-cyan-400 mr-3" />
            Questions About Cookies?
          </h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-white font-medium">Email</div>
              <div className="text-gray-400 text-sm">privacy@ziontechgroup.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;