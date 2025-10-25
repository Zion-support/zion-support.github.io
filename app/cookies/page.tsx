'use client';
import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization cookies'
      ],
      purpose: 'Essential for the website to function properly and provide basic services.',
      retention: 'Session or up to 1 year'
    },
    {
      title: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      purpose: 'To analyze website traffic and improve user experience.',
      retention: 'Up to 2 years'
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: [
        'Language preference cookies',
        'Theme selection cookies',
        'Form data cookies',
        'User preference cookies'
      ],
      purpose: 'To provide enhanced functionality and personalization.',
      retention: 'Up to 1 year'
    },
    {
      title: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Conversion tracking cookies'
      ],
      purpose: 'To display relevant advertisements and measure campaign effectiveness.',
      retention: 'Up to 1 year'
    }
  ];

  const cookieSettings = [
    {
      title: 'How to Manage Cookies',
      icon: Settings,
      content: [
        'You can control and manage cookies through your browser settings.',
        'Most browsers allow you to refuse cookies or delete them.',
        'You can also use our cookie preference center to manage your preferences.',
        'Note that disabling certain cookies may affect the functionality of our website.'
      ]
    },
    {
      title: 'Browser Settings',
      icon: Shield,
      content: [
        'Chrome: Settings > Privacy and security > Cookies and other site data',
        'Firefox: Options > Privacy & Security > Cookies and Site Data',
        'Safari: Preferences > Privacy > Manage Website Data',
        'Edge: Settings > Cookies and site permissions > Cookies and site data'
      ]
    },
    {
      title: 'Third-Party Cookies',
      icon: Database,
      content: [
        'We may use third-party services that set their own cookies.',
        'These services include analytics providers, advertising networks, and social media platforms.',
        'We do not control these third-party cookies and recommend reviewing their privacy policies.',
        'You can opt out of third-party cookies through their respective opt-out mechanisms.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how we use cookies and similar technologies to enhance your experience on our website and services."
        keywords={["cookie policy","cookies","tracking","privacy","website analytics","Zion Tech Group"]}
        canonicalUrl="https://ziontechgroup.com/cookies"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website and services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p>
                  Cookies can be "session" cookies (which expire when you close your browser) or "persistent" 
                  cookies (which stay on your device until you delete them). They can also be "first-party" 
                  cookies (set by us) or "third-party" cookies (set by other services we use).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{cookie.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{cookie.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-400 font-medium">Purpose:</div>
                      <div className="text-gray-300">{cookie.purpose}</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-medium">Retention:</div>
                      <div className="text-gray-300">{cookie.retention}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Managing Your Cookie Preferences</h2>
            <div className="space-y-8">
              {cookieSettings.map((setting, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <setting.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{setting.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {setting.content.map((item, iIndex) => (
                      <p key={iIndex} className="text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Consent */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Your Cookie Choices</h2>
              <p className="text-gray-300 mb-6">
                You can manage your cookie preferences at any time using our cookie preference center.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Manage Cookie Preferences
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                  <Cookie className="w-5 h-5" />
                  Email Privacy Team
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;