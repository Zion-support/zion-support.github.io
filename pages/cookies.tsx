import React from 'react';
import { Shield, Settings, Eye, Lock, Database, Globe, Info } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication cookies', 'Session management', 'Security features'],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Form data'],
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      icon: Globe,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat'],
      retention: '2 years'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising and conversion tracking',
      cookies: ['_gcl_au', 'IDE'],
      retention: '90 days'
    },
    {
      name: 'LinkedIn',
      purpose: 'Social media integration and advertising',
      cookies: ['li_sugr', 'UserMatchHistory'],
      retention: '1 year'
    },
    {
      name: 'Facebook',
      purpose: 'Social media integration and advertising',
      cookies: ['_fbp', '_fbc'],
      retention: '90 days'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              What Are Cookies?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site traffic, and personalizing content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">How They Work</h3>
              </div>
              <p className="text-gray-600">
                When you visit our website, your browser sends cookies to our servers. These cookies contain information about your visit and help us improve our services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Security & Privacy</h3>
              </div>
              <p className="text-gray-600">
                We take your privacy seriously. Our cookies are secure and only contain non-personal information. We never store sensitive personal data in cookies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies for various purposes. Each type serves a specific function to enhance your experience on our website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${type.color} mb-6`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{type.name}</h3>
                <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Third-Party Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use trusted third-party services that may place cookies on your device. These services help us provide better functionality and analytics.
            </p>
          </div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.purpose}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Cookies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.cookies.map((cookie, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {cookie}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Retention Period:</h4>
                        <p className="text-gray-600">{service.retention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have control over how cookies are used on your device. Learn about your options and how to manage your preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Browser Settings</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Block all cookies</li>
                <li>• Allow cookies from specific sites</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie preferences</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Opt-Out Options</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For specific third-party services, you can opt out directly:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Google Analytics opt-out</li>
                <li>• LinkedIn advertising preferences</li>
                <li>• Facebook ad settings</li>
                <li>• Industry opt-out programs</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h3>
              <p className="text-blue-800">
                Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic site operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Stay Informed
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our cookie policy may be updated periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Last Updated</h3>
              <p className="text-gray-600">January 2025</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Review</h3>
              <p className="text-gray-600">January 2026</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Questions About Cookies?</h3>
            <p className="mb-6 text-blue-100">
              If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Send Email
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}