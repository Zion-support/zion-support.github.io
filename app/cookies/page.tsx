import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Settings, BarChart, CheckCircle, XCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cookies cannot be disabled.',
      icon: Shield,
      required: true,
      examples: ['Session management', 'Security tokens', 'User authentication']
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      icon: BarChart,
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior tracking']
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      icon: Settings,
      required: false,
      examples: ['Ad targeting', 'Social media pixels', 'Remarketing']
    },
    {
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      icon: CheckCircle,
      required: false,
      examples: ['Language preferences', 'Theme settings', 'Form data']
    }
  ];

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about how Zion Tech Group uses cookies to improve your experience and protect your privacy."
        />
        <meta
          name="keywords"
          content="cookie policy, privacy, data protection, Zion Tech Group cookies"
        />
        <meta property="og:title" content="Cookie Policy | Zion Tech Group" />
        <meta
          property="og:description"
          content="Learn about our cookie usage and privacy practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how we use cookies to enhance your experience and protect your privacy
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and ensuring our services work properly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At Zion Tech Group, we are committed to transparency about our cookie usage and respect 
              your privacy choices. This policy explains what cookies we use, why we use them, 
              and how you can control them.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <type.icon className="w-8 h-8 text-cyan-400 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold">{type.name}</h3>
                        <p className="text-gray-300">{type.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {type.required ? (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Required
                        </span>
                      ) : (
                        <button
                          onClick={() => handlePreferenceChange(type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences)}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            cookiePreferences[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences]
                              ? 'bg-cyan-600' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            cookiePreferences[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences]
                              ? 'translate-x-6' : 'translate-x-1'
                          }`}></div>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Manage Your Cookie Preferences</h2>
            <p className="text-blue-100 mb-8">
              You can control which cookies we use by adjusting your preferences below. 
              Note that disabling certain cookies may affect the functionality of our website.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{type.name}</h3>
                    {type.required ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      cookiePreferences[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences] ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )
                    )}
                  </div>
                  <p className="text-sm text-blue-100">{type.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={savePreferences}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Save Preferences
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Accept All Cookies
              </button>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Third-Party Cookies</h2>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-6">
                We may use third-party services that set their own cookies. These services help us 
                provide better functionality and analyze our website performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Google Analytics</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Helps us understand how visitors use our website
                  </p>
                  <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Google Privacy Policy →
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Social Media Platforms</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Enable social sharing and integration features
                  </p>
                  <a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Facebook Privacy Policy →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Right to Control</h3>
                <p className="text-gray-300 mb-4">
                  You have the right to control which cookies are stored on your device. 
                  You can change your preferences at any time.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Enable or disable non-essential cookies</li>
                  <li>• Delete existing cookies from your browser</li>
                  <li>• Set your browser to block all cookies</li>
                  <li>• Request information about cookies we use</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <p className="text-gray-300 mb-4">
                  We are committed to protecting your privacy and complying with applicable 
                  data protection laws, including GDPR and CCPA.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• We only collect necessary data</li>
                  <li>• Data is processed lawfully and transparently</li>
                  <li>• You can request data deletion</li>
                  <li>• We implement appropriate security measures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center bg-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Privacy Team
              </a>
              <a
                href="/privacy"
                className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
