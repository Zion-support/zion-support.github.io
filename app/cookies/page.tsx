'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Cookie, Settings, Eye, Lock, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      icon: Shield,
      examples: ['Authentication', 'Security', 'Load balancing'],
      necessary: true
    },
    {
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: Eye,
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      examples: ['Language preferences', 'Theme settings', 'User preferences'],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      icon: Cookie,
      examples: ['Ad targeting', 'Social media integration', 'Marketing campaigns'],
      necessary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies to enhance your browsing experience and provide personalized content.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and enabling certain website functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              on our website and how you can control them.
            </p>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    cookie.necessary 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                  }`}>
                    <cookie.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {cookie.title}
                    </h3>
                    {cookie.necessary && (
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full mb-2">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {cookie.description}
                </p>
                <div>
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can control and delete cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">View and delete cookies stored on your device</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Block cookies from specific websites</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Set your browser to ask for permission before storing cookies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Accept all cookies for the best experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Customize your cookie preferences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Change your preferences at any time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We may use third-party services that set their own cookies. These include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Google Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Social Media Platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Marketing Tools</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Payment Processors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Content Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you have any questions about our use of cookies or this Cookie Policy, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Lock className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a 
              href="/privacy" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Shield className="w-5 h-5 mr-2" />
              Privacy Policy
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CookiesPage;