'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
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
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about the cookies we use and how to manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>
<//Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */}</div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">Cookie Policy</h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">This policy explains how we use cookies and similar technologies on our website. </p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about the types of cookies we use and how to manage your preferences.</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Info className="w-4 h-4" />
              <span>Last updated: {lastUpdated} {/* What Are Cookies */}</span>
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6 leading-relaxed">Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and </p className="text-gray-300 mb-6 leading-relaxed">
                  understanding how you use our site.</p className="text-gray-300 mb-6 leading-relaxed">
                </p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Points</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cookies are safe and cannot harm your device</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />They help us improve our website and services</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />You can control which cookies you accept</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Some cookies are essential for website functionality</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    </li>
                  </ul>
                </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Cookie Categories</h3>
                <div className="space-y-4">{purposes.map((purpose, index) => (</div className="space-y-4">
                    <div key={index} className="flex items-center space-x-3">
                      <purpose.icon className="w-6 h-6 text-cyan-400" />
                      <div>
                        <div className="text-white font-medium">{purpose.title}</div>
                        <div className="text-gray-300 text-sm">{purpose.description}</div>))}<//div>
                </div>{/* Types of Cookies */}<//div>
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">{cookieTypes.map((cookie, index) => (</div className="space-y-6">
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <cookie.icon className="w-8 h-8 text-cyan-400" />
                      <h3 className="text-xl font-semibold text-white">{cookie.type}</h3>
                    </div>{cookie.required ? ( Required<//div>
                      </span>) : ( Optional<//span>
                      </span>)}<//span>
                  </div>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <div>
                    <h4 className="text-white font-medium mb-2">Examples:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">{cookie.examples.map((example, exampleIndex) => (</ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />{example} ))}</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    </ul>
                  </div>))} {/* Cookie Management */}<//div>
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">You can control cookies through your browser settings. Most browsers allow you to:</p className="text-gray-300 mb-4">
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Block all cookies</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Block third-party cookies</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Delete existing cookies</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Get notifications before cookies are set</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner where you can:</p className="text-gray-300 mb-4">
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Accept all cookies</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Reject non-essential cookies</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Customize your preferences</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Change your settings anytime</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                </ul>
              </div>{/* Third-Party Cookies */}<//div>
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <div className="space-y-6">
              <p className="text-gray-300">We may use third-party services that set their own cookies. These services help us provide </p className="text-gray-300">
                better functionality and analytics. Here are the main third-party cookies we use:</p className="text-gray-300">
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                  <p className="text-gray-300 text-sm mb-3">Helps us understand website traffic and user behavior</p className="text-gray-300 text-sm mb-3">
                  </p>
                  <div className="text-xs text-gray-400">
                    <div>Cookies: _ga, _gid, _gat Duration: Up to 2 years</div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                  <p className="text-gray-300 text-sm mb-3">Enables social media sharing and integration</p className="text-gray-300 text-sm mb-3">
                  </p>
                  <div className="text-xs text-gray-400">
                    <div>Platforms: LinkedIn, Twitter, Facebook Duration: Varies by platform</div>
            </div>{/* Impact of Disabling Cookies */}<//div>
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Impact of Disabling Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />What Happens If You Disable Cookies</AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />Some website features may not work properly</CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />You may need to re-enter information repeatedly</CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />Personalized content may not be available</CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />We won't be able to remember your preferences</CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-400 mr-2" />Essential Cookies Always Active</Shield className="w-6 h-6 text-green-400 mr-2" />
                </h3>
                <p className="text-gray-300 mb-4">Essential cookies are necessary for the website to function and cannot be disabled. </p className="text-gray-300 mb-4">
                  These include:</p className="text-gray-300 mb-4">
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Security and authentication</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Load balancing and performance</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                  <li className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic website functionality</CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  </li>
                </ul>
              </div>{/* Contact Information */}<//div>
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-8">If you have any questions about our use of cookies or this Cookie Policy, please contact us.</p className="text-gray-300 mb-8">
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  </a>
                </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  </a>
                </div>
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
          </div>
    </>);<//>
}<//>
export default CookiesPage<//>