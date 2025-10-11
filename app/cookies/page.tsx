'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies to remember your preferences'
      ],
      necessary: true
    },
    {
      title: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website',
      examples: [
        'Google Analytics to track page views and user behavior',
        'Heat mapping tools to see where users click',
        'Performance monitoring to identify slow pages',
        'A/B testing to optimize user experience'
      ],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance',
      examples: [
        'Social media tracking pixels',
        'Advertising network cookies',
        'Retargeting cookies for personalized ads',
        'Conversion tracking for marketing campaigns'
      ],
      necessary: false
    },
    {
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your choices and preferences',
      examples: [
        'Language and region preferences',
        'Theme and display settings',
        'Customized dashboard layouts',
        'Notification preferences'
      ],
      necessary: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Zion Tech Group - Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand cookie types, purposes, and how to manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, web tracking, privacy, data collection, cookie management" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies to enhance your experience on our website.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Cookie className="w-4 h-4 mr-2" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This Cookie Policy explains what cookies we use, why we use them, and how you can control your cookie preferences. By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We use different types of cookies for various purposes to improve your experience on our website.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      {type.necessary && (
                        <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded mt-1">
                          Necessary
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-3">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set preferences for specific websites</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Cookie Consent</h3>
                  <p className="text-gray-300">
                    When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject. You can change your preferences at any time by clicking the cookie settings link in our footer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Impact of Disabling Cookies</h3>
                  <p className="text-gray-300">
                    Please note that disabling certain cookies may affect the functionality of our website. Essential cookies are required for the website to work properly, so you cannot disable them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services that set their own cookies. These services help us provide better functionality and analyze our website performance.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Google Analytics</h3>
                  <p className="text-gray-300 text-sm">
                    We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect information about your use of our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Social Media</h3>
                  <p className="text-gray-300 text-sm">
                    Our website may include social media features that set cookies from platforms like Facebook, Twitter, and LinkedIn.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Tools</h3>
                  <p className="text-gray-300 text-sm">
                    We may use marketing and advertising tools that set cookies to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CookiesPage;