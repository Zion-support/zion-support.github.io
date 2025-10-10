'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, Users, Mail, Phone, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies', 'User interface customization'],
      necessary: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis', 'Performance monitoring'],
      necessary: false
    },
    {
      icon: Users,
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: ['Language preferences', 'Region settings', 'User preferences', 'Chat widget functionality'],
      necessary: false
    },
    {
      icon: Database,
      title: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies', 'Conversion tracking'],
      necessary: false
    }
  ];
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This website uses cookies to improve your browsing experience, analyze site traffic, and personalize content. 
                By continuing to use this website, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
              <div className="space-y-8">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{type.title}</h3>
                          {type.necessary && (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Necessary
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may also use third-party cookies from trusted partners to enhance your experience and analyze website performance. 
                  These may include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li>• <strong>Google Tag Manager:</strong> To manage tracking codes and tags</li>
                  <li>• <strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li>• <strong>Marketing Tools:</strong> For advertising and conversion tracking</li>
                </ul>
                <p>
                  These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies 
                  for more information about how they use cookies.
                </p>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. You can:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set preferences for specific websites</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-300 mb-4">
                    When you first visit our website, you'll see a cookie consent banner. You can:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your preferences</li>
                    <li>• Change your settings at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Impact of Disabling Cookies</h3>
                  <p className="text-gray-300">
                    Please note that disabling certain cookies may affect the functionality of our website and your user experience. 
                    Some features may not work properly if cookies are disabled.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Cookie Duration</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies may be either "session" cookies or "persistent" cookies:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser</li>
                  <li>• <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
                </ul>
                <p>
                  The duration of persistent cookies varies depending on their purpose. Some may last for a few days, 
                  while others may remain for several years.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Cookie Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1" />
                  <div className="text-gray-300">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CookiesPage;
