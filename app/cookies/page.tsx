'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, CheckCircle, ArrowRight, ToggleLeft, ToggleRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      required: true,
      examples: ['Authentication', 'Security', 'Load balancing', 'User interface preferences']
    },
    {
      type: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics']
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      required: false,
      examples: ['Advertising networks', 'Social media', 'Retargeting', 'Personalized ads']
    },
    {
      type: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as videos and live chat.',
      required: false,
      examples: ['Video players', 'Chat widgets', 'Language preferences', 'Custom features']
    }
  ];

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // Save cookie preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Settings</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and manage your cookie preferences. Understand our cookie policy and data collection practices." />
        <meta name="keywords" content="cookie policy, cookies, data collection, privacy settings, cookie preferences" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and manage your preferences. We respect your privacy and give you control over your data.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cookie className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Small Files</h3>
                  <p className="text-gray-300 text-sm">Tiny text files stored on your device</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Preferences</h3>
                  <p className="text-gray-300 text-sm">Remember your settings and choices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                  <p className="text-gray-300 text-sm">Help us understand website usage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300">
                We use different types of cookies for various purposes. You can control which types you accept.
              </p>
            </div>
            
            <div className="space-y-6">
              {cookieTypes.map((cookieType, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{cookieType.type}</h3>
                      <p className="text-gray-300 mb-4">{cookieType.description}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {cookieType.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="ml-6">
                      {cookieType.required ? (
                        <div className="flex items-center text-green-400">
                          <CheckCircle className="w-6 h-6 mr-2" />
                          <span className="font-semibold">Required</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleCookieToggle(cookieType.type.toLowerCase().replace(' cookies', ''))}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {cookiePreferences[cookieType.type.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences] ? (
                            <ToggleRight className="w-8 h-8" />
                          ) : (
                            <ToggleLeft className="w-8 h-8" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Manage Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-8">
                You can control which cookies you accept. Note that disabling certain cookies may affect the functionality of our website.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                    <p className="text-gray-300 text-sm">Required for basic website functionality</p>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    <span className="font-semibold">Always Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    <p className="text-gray-300 text-sm">Help us understand how you use our website</p>
                  </div>
                  <button
                    onClick={() => handleCookieToggle('analytics')}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {cookiePreferences.analytics ? (
                      <ToggleRight className="w-8 h-8" />
                    ) : (
                      <ToggleLeft className="w-8 h-8" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                    <p className="text-gray-300 text-sm">Used to deliver personalized advertisements</p>
                  </div>
                  <button
                    onClick={() => handleCookieToggle('marketing')}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {cookiePreferences.marketing ? (
                      <ToggleRight className="w-8 h-8" />
                    ) : (
                      <ToggleLeft className="w-8 h-8" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                    <p className="text-gray-300 text-sm">Enable enhanced features and personalization</p>
                  </div>
                  <button
                    onClick={() => handleCookieToggle('functional')}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {cookiePreferences.functional ? (
                      <ToggleRight className="w-8 h-8" />
                    ) : (
                      <ToggleLeft className="w-8 h-8" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Save Preferences</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Accept All Cookies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our cookie policy or want to learn more about how we use cookies, 
                please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Contact Privacy Team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Read Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;