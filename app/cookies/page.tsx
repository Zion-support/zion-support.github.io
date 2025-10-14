import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheckIcon,
  InformationCircleIcon,
  CogIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Load balancing", "User preferences"],
      required: true
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track campaign performance.",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration", "Retargeting"],
      required: false
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "Theme settings", "Customization", "Third-party integrations"],
      required: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to improve your experience and provide better services." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How we use cookies to improve your experience
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              to enhance your browsing experience and provide better services.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding cookies and their purpose
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <InformationCircleIcon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Definition</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember information about your visit, such as your preferred language 
                    and other settings, making your next visit easier and the site more useful to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• To remember your preferences and settings</li>
                  <li>• To analyze website traffic and usage patterns</li>
                  <li>• To improve website performance and functionality</li>
                  <li>• To provide personalized content and advertisements</li>
                  <li>• To ensure website security and prevent fraud</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Your Control</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• You can control cookie settings in your browser</li>
                  <li>• You can delete cookies at any time</li>
                  <li>• You can opt out of non-essential cookies</li>
                  <li>• Some features may not work without cookies</li>
                  <li>• We respect your privacy choices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed breakdown of our cookie usage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      type.required 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {type.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How to control cookies on our website and in your browser
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <CogIcon className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cookie Settings</h3>
                  <p className="text-gray-300 mb-6">
                    You can manage your cookie preferences using our cookie settings panel. 
                    This allows you to choose which types of cookies you want to allow.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Manage Cookie Settings
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can also control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set cookie preferences per site</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Impact of Disabling Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Please note that disabling certain cookies may affect the functionality of our website:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Some features may not work properly</li>
                  <li>• You may need to re-enter information</li>
                  <li>• Personalized content may not be available</li>
                  <li>• Website performance may be affected</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              If you have any questions about our use of cookies, please don't hesitate to contact us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/privacy" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Privacy Policy
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>privacy@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}