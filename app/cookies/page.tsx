    <>
  </>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Cookie Policy</h1>
              </h1>
              
              <div className="prose prose-lg max-w-none"></div>
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString(</div>
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to improve your experience on our website, analyze site traffic, and personalize content.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-6">
                  You can control and/or delete cookies as you wish through your browser settings.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>

  );
};
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {,
  const lastUpdated = 'January 1, 2024';
  
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react'
const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [,
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      required: true;,},
    {type: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [,
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      required: false;,},
    {type: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [,
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Form data storage'
      ],
      required: false;,},
    {type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      examples: [,
        'Advertising targeting',
        'Social media integration',
        'Email marketing tracking',
        'Campaign performance'
      ],
      required: false;,}];
  const purposes = [
    {title: 'Website Functionality',
      description: 'Ensure the website works correctly and securely',
      icon: Shield;,},
    {title: 'User Experience',
      description: 'Remember your preferences and settings',
      icon: Settings;,},
    {title: 'Analytics',
      description: 'Understand how users interact with our site',
      icon: Database;,},
    {title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye;,}]

  return(<>)
      <Helmet />
        <title>Cookie Policy - Zion Tech Group</title>
  return (
    <>
      <Helmet></Helmet>
        <title></titl>Cookie Policy - Zion Tech Group</title>
                </div>
              </div>
            </div>
          </div>
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about the cookies we use and how to manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <div className="flex items-center justify-center text-sm text-blue-200">
              <Info className="h-4 w-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
        
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What Are Cookies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better experience by remembering your preferences and 
                      understanding how you use our site.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Cookies are safe and cannot harm your device
                        </li>
                        <li className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          They help us improve our website and services
                        </li>
                        <li className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          You can control which cookies you accept
                        </li>
                        <li className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Some cookies are essential for website functionality
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Categories</h3>
                    <div className="space-y-4">
                      {purposes.map((purpose, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <purpose.icon className="w-6 h-6 text-blue-600" />
                          <div>
                            <div className="text-gray-900 font-medium">{purpose.title}</div>
                            <div className="text-gray-600 text-sm">{purpose.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Cookies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <cookie.icon className="w-8 h-8 text-blue-600" />
                          <h3 className="text-xl font-semibold text-gray-900">{cookie.type}</h3>
                        </div>
                        {cookie.required ? (
                          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded">
                            Required
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4">{cookie.description}</p>
                      <div>
                        <h4 className="text-gray-900 font-medium mb-2">Examples:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-gray-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-700 mb-4">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Block all cookies
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Block third-party cookies
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Delete existing cookies
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Get notifications before cookies are set
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Consent</h3>
                    <p className="text-gray-700 mb-4">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Accept all cookies
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Reject non-essential cookies
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Customize your preferences
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Change your settings anytime
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We may use third-party services that set their own cookies. These services help us provide 
                    better functionality and analytics. Here are the main third-party cookies we use:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Helps us understand website traffic and user behavior
                      </p>
                      <div className="text-xs text-gray-500">
                        <div>Cookies: _ga, _gid, _gat</div>
                        <div>Duration: Up to 2 years</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Enables social media sharing and integration
                      </p>
                      <div className="text-xs text-gray-500">
                        <div>Platforms: LinkedIn, Twitter, Facebook</div>
                        <div>Duration: Varies by platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Impact of Disabling Cookies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
                      What Happens If You Disable Cookies
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        Some website features may not work properly
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        You may need to re-enter information repeatedly
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        Personalized content may not be available
                      </li>
                      <li className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        We won't be able to remember your preferences
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-green-500 mr-2" />
                      Essential Cookies Always Active
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Essential cookies are necessary for the website to function properly and cannot be disabled. 
                      These include authentication, security, and basic functionality cookies.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-800 text-sm">
                        <strong>Note:</strong> Disabling essential cookies will prevent you from using certain 
                        features of our website and may affect your overall experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
                <div className="bg-gray-50 rounded-lg p-8">
                  <p className="text-gray-700 mb-6">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">+1 (302) 464-0950</span>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Cookie className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Zion Tech Group Privacy Team</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default CookiesPage
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Cookies page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Cookies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies page for Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Cookies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This is the Cookies page for Zion Tech Group.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;
const CookiesPage: React.FC = () => {
};
  return (<div>
        <title>Cookie Policy - Zion Tech Group<
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." 
      <
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><
          <div className="container mx-auto px-4 py-16"><
            <div className="max-w-4xl mx-auto"><
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Cookie Policy<
              <
              <div className="prose prose-lg max-w-none"><
                <p className="text-xl text-gray-600 mb-8">)
                  Last update,
    d: {new Date().toLocaleDateString()};
                <
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies<
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                <
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies<
                <p className="text-gray-700 mb-6">
                  We use cookies to improve your experience on our website, analyze site traffic, and personalize content.
                <
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies<
                <p className="text-gray-700 mb-6">
                  You can control and
                <
              <
            <
          <
        <
        <Footer 
      <
    <
  );
};
export default CookiesPage;
