'use client';
import React, { useState } from 'react';
import { Cookie, Shield, Settings, Info, CheckCircle, AlertCircle, Clock, Database, Target, Users, BarChart, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleCookieToggle = (cookieType: keyof typeof acceptedCookies) => {
    if (cookieType === 'necessary') return; // Can't disable necessary cookies
    setAcceptedCookies(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential cookies required for the website to function properly',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      required: true,
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      purpose: 'These cookies are essential for the website to function and cannot be switched off in our systems.',
      retention: 'Session or up to 1 year'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      required: false,
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      purpose: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      retention: 'Up to 2 years'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      required: false,
      examples: [
        'Facebook Pixel',
        'Google Ads',
        'Retargeting pixels',
        'Social media tracking'
      ],
      purpose: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      retention: 'Up to 1 year'
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'Remember your choices and preferences for a better experience',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      required: false,
      examples: [
        'Language preferences',
        'Theme settings',
        'Location settings',
        'Accessibility options'
      ],
      purpose: 'These cookies enable the website to provide enhanced functionality and personalization.',
      retention: 'Up to 1 year'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      type: 'Analytics',
      purpose: 'Distinguishes unique users',
      provider: 'Google Analytics',
      retention: '2 years',
      category: 'analytics'
    },
    {
      name: '_gid',
      type: 'Analytics',
      purpose: 'Distinguishes unique users',
      provider: 'Google Analytics',
      retention: '24 hours',
      category: 'analytics'
    },
    {
      name: '_fbp',
      type: 'Marketing',
      purpose: 'Facebook advertising pixel',
      provider: 'Facebook',
      retention: '90 days',
      category: 'marketing'
    },
    {
      name: 'session_id',
      type: 'Necessary',
      purpose: 'Maintains user session',
      provider: 'Zion Tech Group',
      retention: 'Session',
      category: 'necessary'
    },
    {
      name: 'user_preferences',
      type: 'Preference',
      purpose: 'Stores user preferences',
      provider: 'Zion Tech Group',
      retention: '1 year',
      category: 'preferences'
    }
  ];

  const handleSavePreferences = () => {
    // In a real implementation, this would save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(acceptedCookies));
    alert('Cookie preferences saved successfully!');
  };

  const handleAcceptAll = () => {
    setAcceptedCookies({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }));
  };

  const handleRejectAll = () => {
    setAcceptedCookies({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Cookie <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </section>

        {/* What are Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text flex items-center">
              <Cookie className="w-8 h-8 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Zion Tech Group, we use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
                This page explains what cookies we use, why we use them, and how you can control them.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Types of Cookies We Use
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((cookieType) => (
              <div key={cookieType.id} className={`cyber-card p-6 ${cookieType.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${cookieType.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <cookieType.icon className={`w-8 h-8 ${cookieType.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{cookieType.name}</h3>
                    <p className="text-gray-300">{cookieType.description}</p>
                  </div>
                  {!cookieType.required && (
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptedCookies[cookieType.id as keyof typeof acceptedCookies]}
                        onChange={() => handleCookieToggle(cookieType.id as keyof typeof acceptedCookies)}
                        className="sr-only"
                      />
                      <div className={`relative w-12 h-6 rounded-full transition-colors ${
                        acceptedCookies[cookieType.id as keyof typeof acceptedCookies] 
                          ? 'bg-cyan-500' 
                          : 'bg-gray-600'
                      }`}>
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          acceptedCookies[cookieType.id as keyof typeof acceptedCookies] 
                            ? 'translate-x-6' 
                            : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  )}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Purpose:</h4>
                  <p className="text-sm text-gray-300">{cookieType.purpose}</p>
                </div>
                
                <div className="mb-4">
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
                
                <div className="text-sm text-gray-400">
                  <strong>Retention:</strong> {cookieType.retention}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Detailed Cookie Information
          </h2>
          
          <div className="cyber-card p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Cookie Name</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Purpose</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Provider</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-slate-800/50">
                    <td className="py-3 px-4 text-white font-mono text-sm">{cookie.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        cookie.category === 'necessary' ? 'bg-green-500/20 text-green-400' :
                        cookie.category === 'analytics' ? 'bg-blue-500/20 text-blue-400' :
                        cookie.category === 'marketing' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{cookie.purpose}</td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{cookie.provider}</td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{cookie.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Your Rights and Choices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 neon-text flex items-center">
                <Info className="w-6 h-6 mr-3 text-cyan-400" />
                Control Your Cookies
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You can accept or decline cookies when you first visit our site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Change your cookie preferences at any time using the controls below</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Block cookies through your browser settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Delete existing cookies from your browser</span>
                </li>
              </ul>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 neon-text flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-yellow-400" />
                Important Notes
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Disabling cookies may affect website functionality</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Some features may not work properly without cookies</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Third-party cookies are controlled by their respective providers</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cookie preferences are stored locally on your device</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookie Controls */}
        <section className="mb-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-8">
              Use the controls below to customize your cookie preferences. You can change these settings at any time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAcceptAll}
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleRejectAll}
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Reject All Optional
              </button>
              <button
                onClick={handleSavePreferences}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;