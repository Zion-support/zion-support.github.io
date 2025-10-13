import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Shield, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Cookie Policy - How We Use Cookies | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience and provide personalized services."
        keywords="cookie policy, cookies, tracking, privacy, data collection, website analytics"
        canonical="https://ziontechgroup.com/cookies"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cookie
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This policy explains how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Cookies
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how you use our website</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To improve our website's functionality and performance</li>
                  <li>To ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <p className="text-sm text-gray-400">
                    These cookies cannot be disabled and are set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p className="text-sm text-gray-400">
                    We use Google Analytics and other analytics tools to track usage patterns and improve our website's performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preference.
                  </p>
                  <p className="text-sm text-gray-400">
                    These cookies may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <p className="text-sm text-gray-400">
                    These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Some cookies on our website are set by third-party services. These include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Customer Support Tools:</strong> For live chat and support functionality</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  These third parties may use cookies to collect information about your online activities across different websites.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Cookies</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  You can control and manage cookies in several ways:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Links</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You can opt out of certain third-party cookies by visiting their respective opt-out pages or using industry opt-out tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Impact of Disabling Cookies
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>You may need to re-enter information more frequently</li>
                  <li>Some personalized features may not be available</li>
                  <li>We may not be able to remember your preferences</li>
                  <li>Some website functionality may be limited</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about our use of cookies or this cookie policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            If you have any questions about our cookie practices or need help managing your preferences, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/privacy"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;