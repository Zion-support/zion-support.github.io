'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
        'Form data retention',
        'User preferences'
      ],
      required: false
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: [
        'Ad targeting',
        'Campaign tracking',
        'Social media integration',
        'Remarketing'
      ],
      required: false
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Throttles request rate',
      duration: '1 minute',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session',
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

  const managementSteps = [
    {
      step: 1,
      title: 'Browser Settings',
      description: 'Most browsers allow you to control cookies through their settings menu.',
      icon: Settings
    },
    {
      step: 2,
      title: 'Cookie Preferences',
      description: 'Use our cookie preference center to manage your cookie choices.',
      icon: Cookie
    },
    {
      step: 3,
      title: 'Third-Party Tools',
      description: 'Use browser extensions or privacy tools to manage cookies.',
      icon: Shield
    },
    {
      step: 4,
      title: 'Contact Us',
      description: 'Contact us if you need help managing your cookie preferences.',
      icon: Info
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage and Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, tracking, analytics, privacy, data collection" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies on our website 
                to enhance your experience and provide our services.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Info className="w-4 h-4 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We use different types of cookies for various purposes to improve your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cookieTypes.map((cookieType, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 ${
                    cookieType.required 
                      ? 'border-green-500/30 hover:border-green-400/50' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      cookieType.required 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    }`}>
                      <cookieType.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{cookieType.type}</h3>
                    <p className="text-gray-300 text-sm mb-4">{cookieType.description}</p>
                    
                    {cookieType.required && (
                      <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Required
                      </div>
                    )}
                    
                    <ul className="space-y-2 text-xs text-gray-300">
                      {cookieType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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

        {/* Cookie Details */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Specific Cookies We Use</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Here are the specific cookies we use and their purposes.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Cookie Name</th>
                    <th className="text-left p-6 text-white font-semibold">Purpose</th>
                    <th className="text-left p-6 text-white font-semibold">Duration</th>
                    <th className="text-left p-6 text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-b-0">
                      <td className="p-6 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                      <td className="p-6 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="p-6 text-gray-300 text-sm">{cookie.duration}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'Essential' 
                            ? 'bg-green-500/20 text-green-400' 
                            : cookie.type === 'Analytics'
                            ? 'bg-blue-500/20 text-blue-400'
                            : cookie.type === 'Functional'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-orange-500/20 text-orange-400'
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
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                You have control over how cookies are used on our website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Important Notice</h3>
                  <p className="text-gray-300 mb-4">
                    Disabling certain cookies may affect the functionality of our website. 
                    Essential cookies cannot be disabled as they are necessary for the website to function properly.
                  </p>
                  <p className="text-gray-300">
                    By continuing to use our website, you consent to our use of cookies as described in this policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our cookie policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CookiesPage;