import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cookie, 
  Settings, 
  Shield, 
  Eye,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, website analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cookie
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies on our website to enhance your experience.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Cookie className="h-6 w-6 text-blue-400 mr-3" />
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Settings className="h-6 w-6 text-blue-400 mr-3" />
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies are necessary for the website to function properly. They enable basic 
                        functions like page navigation and access to secure areas of the website.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Session management</li>
                        <li>Security features</li>
                        <li>Load balancing</li>
                        <li>User authentication</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Page views and visits</li>
                        <li>Time spent on pages</li>
                        <li>Traffic sources</li>
                        <li>User behavior patterns</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies enable enhanced functionality and personalization, such as remembering 
                        your preferences and settings.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Language preferences</li>
                        <li>Theme settings</li>
                        <li>Form data</li>
                        <li>User preferences</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies are used to track visitors across websites to display relevant and 
                        engaging advertisements.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Ad targeting</li>
                        <li>Campaign tracking</li>
                        <li>Conversion tracking</li>
                        <li>Social media integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-blue-400 mr-3" />
                    Third-Party Cookies
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We may use third-party services that set their own cookies. These include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                    <li><strong>Marketing Tools:</strong> For advertising and campaign tracking</li>
                    <li><strong>Customer Support:</strong> For live chat and support functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-400 mr-3" />
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text-gray-300 mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                    <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                    <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                    <li><strong>Contact Us:</strong> Reach out to us for assistance with cookie management</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookie Retention</h2>
                  <p className="text-gray-300 mb-4">
                    Different cookies have different retention periods:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (usually 30 days to 2 years)</li>
                    <li><strong>Essential Cookies:</strong> Retained for the duration of your session</li>
                    <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-gray-300 mb-4">
                    We may update this cookie policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any 
                    material changes by posting the updated policy on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our use of cookies or this policy, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">123 Tech Street, San Francisco, CA 94105</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're here to help clarify any questions you may have about our cookie usage.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/cookies" className="text-white font-semibold">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}