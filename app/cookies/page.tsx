import React from 'react';
import { Cookie, Shield, Settings, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const CookiesPage = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      examples: ['Authentication', 'Security', 'Load balancing']
    },
    {
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      examples: ['Google Analytics', 'Page views', 'User behavior']
    },
    {
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for advertising purposes.',
      necessary: false,
      examples: ['Advertising', 'Social media', 'Remarketing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Cookie Policy - Zion Tech Group | Privacy & Data"
        description="Learn about our use of cookies and similar technologies. Understand how we collect and use data to improve your experience on our website."
        keywords="cookie policy, cookies, privacy, data collection, tracking, analytics, marketing"
        canonical="https://ziontechgroup.com/cookies"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cookie Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page explains how we use cookies and similar technologies on our website to enhance your experience and provide our services.
          </p>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to analyze site usage, personalize content, and improve our services. By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience.
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                      <Cookie className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <p className="text-gray-300">{type.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {type.necessary ? (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Necessary
                      </span>
                    ) : (
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Optional
                      </span>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300">
              You have control over which cookies you accept and can change your preferences at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300">Configure cookie settings in your browser to control which cookies are accepted.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Opt-Out Tools</h3>
              <p className="text-gray-300">Use industry opt-out tools to manage advertising and analytics cookies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300">Reach out to us if you have questions about our cookie practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Contact Us
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;