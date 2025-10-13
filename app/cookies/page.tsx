import { ArrowRight, Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta
          name="description"
          content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services."
        />
        <meta
          name="keywords"
          content="cookie policy, cookies, tracking technologies, privacy, data collection, website analytics, Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Cookie
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Policy
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Cookie className="w-4 h-4 mr-2 text-cyan-400" />
                Last Updated: January 15, 2024
              </div>
              <div className="flex items-center">
                <Settings className="w-4 h-4 mr-2 text-cyan-400" />
                Manage Your Preferences
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences, 
                  analyzing website traffic, and personalizing content.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cookies can be "session cookies" (which are deleted when you close your browser) or 
                  "persistent cookies" (which remain on your device for a set period of time).
                </p>
              </div>

              {/* Types of Cookies We Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-cyan-400" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Essential Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled. 
                      They enable basic functions like page navigation, security, and access to secure areas.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Authentication and security cookies</li>
                      <li>Load balancing and performance cookies</li>
                      <li>User interface customization cookies</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Google Analytics cookies</li>
                      <li>Page view and session duration tracking</li>
                      <li>Traffic source and referral tracking</li>
                      <li>User behavior analysis</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Functional Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and settings.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Language and region preferences</li>
                      <li>User interface settings</li>
                      <li>Form data and preferences</li>
                      <li>Customization options</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      These cookies are used to deliver relevant advertisements and track the effectiveness 
                      of our marketing campaigns.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Advertising platform cookies</li>
                      <li>Social media integration cookies</li>
                      <li>Remarketing and retargeting cookies</li>
                      <li>Campaign performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                  Third-Party Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies on our website. These include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                  <li><strong>Google Tag Manager:</strong> For managing tracking codes and tags</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                  <li><strong>Customer Support Tools:</strong> For providing live chat and support services</li>
                </ul>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Browser Settings</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set preferences for specific websites</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Cookie Consent Banner</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When you first visit our website, you'll see a cookie consent banner where you can 
                      choose which types of cookies to accept or reject.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Opt-Out Links</h3>
                    <p className="text-gray-300 leading-relaxed">
                      For specific third-party services, you can opt out directly:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li><a href="https://www.google.com/settings/ads" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                      <li><a href="https://www.facebook.com/settings?tab=ads" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Impact of Disabling Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                  Impact of Disabling Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you choose to disable cookies, please note that:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Some features of our website may not function properly</li>
                  <li>You may need to re-enter information more frequently</li>
                  <li>We won't be able to remember your preferences</li>
                  <li>Some personalized content may not be available</li>
                  <li>We may not be able to provide optimal user experience</li>
                </ul>
              </div>

              {/* Cookie Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Cookie Retention</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                  <li><strong>Analytics Cookies:</strong> Usually retained for 24-26 months</li>
                  <li><strong>Marketing Cookies:</strong> Typically retained for 30-90 days</li>
                </ul>
              </div>

              {/* Updates to This Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <p className="text-cyan-400">+1 302 464 0950</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Us About Cookies
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
