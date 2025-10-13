import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cookie, Settings, Eye, Shield, Database } from "lucide-react";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Cookie Policy for Zion Tech Group. Learn about how we use cookies and similar technologies on our website."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies 
                to enhance your experience on our website.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
                What Are Cookies?
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Settings className="w-5 h-5 text-cyan-400 mr-2" />
                        Essential Cookies
                      </h4>
                      <p className="text-sm">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                        Analytics Cookies
                      </h4>
                      <p className="text-sm">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                      </p>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                        Functional Cookies
                      </h4>
                      <p className="text-sm">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                      </p>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Database className="w-5 h-5 text-cyan-400 mr-2" />
                        Marketing Cookies
                      </h4>
                      <p className="text-sm">
                        These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h3>
                  <p className="mb-4">
                    We use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remembering your preferences and settings</li>
                    <li>Analyzing website traffic and usage patterns</li>
                    <li>Improving website performance and functionality</li>
                    <li>Personalizing content and advertisements</li>
                    <li>Ensuring website security</li>
                    <li>Providing social media features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h3>
                  <p className="mb-4">
                    Some cookies on our website are set by third-party services. These may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for sharing features</li>
                    <li>Advertising networks for targeted advertising</li>
                    <li>Customer support tools for live chat functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Managing Your Cookie Preferences</h3>
                  <p className="mb-4">
                    You have several options for managing cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                    <li>Configure your browser settings to block or delete cookies</li>
                    <li>Use browser extensions to manage cookie preferences</li>
                    <li>Opt out of specific third-party advertising cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="mb-4">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Block all cookies</li>
                    <li>Allow only first-party cookies</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>Set up notifications when cookies are set</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Note: Disabling cookies may affect the functionality of our website and your user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookie Retention</h3>
                  <p className="mb-4">
                    Different cookies have different retention periods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Session cookies: Deleted when you close your browser</li>
                    <li>Persistent cookies: Remain on your device for a set period</li>
                    <li>Analytics cookies: Typically retained for 2 years</li>
                    <li>Marketing cookies: Usually retained for 1-2 years</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Updates to This Policy</h3>
                  <p className="mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                  <p className="mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-cyan-400">Email: privacy@ziontechgroup.com</p>
                    <p className="text-cyan-400">Phone: +1 (555) 123-4567</p>
                    <p className="text-cyan-400">Address: 123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help with Cookie Settings?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team can help you understand and manage your cookie preferences.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}