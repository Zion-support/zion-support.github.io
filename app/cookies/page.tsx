'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Settings, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
<<<<<<< HEAD
  const lastUpdated = 'December 2024';

  const cookieTypes = const cookieTypes = const cookieTypes = [
=======
  const cookieTypes = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or 1 year'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance and user behavior analysis',
      retention: '2 years'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      purpose: 'Personalized advertising and content delivery',
      retention: '1 year'
    },
    {
<<<<<<< HEAD
      icon: Database,
      title: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies', 'Conversion tracking'],
      necessary: false;
    };
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
  return() {cookieTypes.map((type, index) => ()
                          )}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2" /></ul>
                        {type.examples.map((example, exampleIndex) => ()
                        ))}
                      </ul>
                    </div>
=======
      name: 'Preference Cookies',
      description: 'These cookies remember your preferences and settings.',
      purpose: 'User experience customization',
      retention: '1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Zion Tech Group - Privacy & Data Protection</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience on our website. Manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, website analytics, user preferences" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies to improve your experience and protect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-lg text-gray-600 mb-8">
                We use cookies for various purposes, including improving website functionality, analyzing user behavior, and personalizing content. Below is a detailed breakdown of the types of cookies we use.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-8">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {cookie.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {cookie.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <p className="text-gray-600">{cookie.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Retention:</h4>
                        <p className="text-gray-600">{cookie.retention}</p>
                      </div>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </div>
                ))}
              </div>

<<<<<<< HEAD
            {/* Third-Party Cookies */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We may also use third-party cookies from trusted partners to enhance your experience and analyze website performance. 
                  These may include:
                </p>
                <ul className="space-y-2 ml-6" /></ul>
                  <li>• <strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li>• <strong>Google Tag Manager:</strong> To manage tracking codes and tags</li>
                  <li>• <strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li>• <strong>Marketing Tools:</strong> For advertising and conversion tracking</li>
                </ul>
                <p></p>
                  These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies 
                  for more information about how they use cookies.
                </p>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-6" /></div>
                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-4" /></p>
                    Most web browsers allow you to control cookies through their settings preferences. You can:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6" /></ul>
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set preferences for specific websites</li>
                  </ul>
                </div>
                
                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-300 mb-4" /></p>
                    When you first visit our website, you'll see a cookie consent banner. You can:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6" /></ul>
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your preferences</li>
                    <li>• Change your settings at any time</li>
                  </ul>
                </div>

                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Impact of Disabling Cookies</h3>
                  <p className="text-gray-300" /></p>
                    Please note that disabling certain cookies may affect the functionality of our website and your user experience. 
                    Some features may not work properly if cookies are disabled.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Cookie Duration</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  Cookies may be either "session" cookies or "persistent" cookies:
                </p>
                <ul className="space-y-2 ml-6" /></ul>
                  <li>• <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser</li>
                  <li>• <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
                </ul>
                <p></p>
                  The duration of persistent cookies varies depending on their purpose. Some may last for a few days, 
                  while others may remain for several years.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Cookie Policy</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                </p>
                <p></p>
                  We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6" /></p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" /></div>
                <div className="flex items-center space-x-3" /></div>
                  <Mail className="w-5 h-5 text-cyan-400" / /></Mail>
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3" /></div>
                  <Phone className="w-5 h-5 text-cyan-400" / /></Phone>
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3" /></div>
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1" / /></Calendar>
                  <div className="text-gray-300" /></div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
=======
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Managing Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 mb-8">
                You can control and manage cookies in several ways. Most web browsers allow you to refuse cookies or delete them. However, please note that disabling certain cookies may affect the functionality of our website.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Cookie Settings</h3>
                <p className="text-blue-800 mb-4">
                  You can manage your cookie preferences using our cookie settings tool below.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Manage Cookie Settings
                </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-lg text-gray-600 mb-8">
                We may also use third-party services that set their own cookies. These include analytics services, social media platforms, and advertising networks. We do not control these cookies, and you should refer to their respective privacy policies.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-lg text-gray-600 mb-8">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're here to help. Contact us if you have any questions about our use of cookies or privacy practices.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </>
  );
};

export default CookiesPage;