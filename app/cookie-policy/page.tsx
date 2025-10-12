import React from 'react'
import Layout from '../layout'
const CookiePolicyPage: React.FC = () => {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
      keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 2024
            </p>
          </div>
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• View which cookies are stored on your device</li>
                <li>• Delete cookies individually or all at once</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block third-party cookies</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="text-gray-300">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Shield, Settings, BarChart3, Target, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const CookiePolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Authentication, security, and basic website functionality',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      examples: ['Session cookies', 'Authentication tokens', 'Security cookies']
    },
    {
      type: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      purpose: 'Website performance analysis and user behavior insights',
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      examples: ['Google Analytics', 'Page view tracking', 'User journey analysis']
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      purpose: 'Personalized advertising and marketing campaigns',
      icon: <Target className="w-6 h-6 text-purple-500" />,
      examples: ['Facebook Pixel', 'Google Ads', 'Retargeting cookies']
    },
    {
      type: 'Preference Cookies',
      description: 'These cookies enable the website to remember information that changes the way the website behaves or looks.',
      purpose: 'User preferences and customized experience',
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      examples: ['Language settings', 'Theme preferences', 'Location settings']
    }
  ]
  const cookieTable = [
    { name: 'session_id', type: 'Essential', purpose: 'Maintains user session', duration: 'Session' },
    { name: '_ga', type: 'Analytics', purpose: 'Google Analytics tracking', duration: '2 years' },
    { name: '_fbp', type: 'Marketing', purpose: 'Facebook Pixel tracking', duration: '3 months' },
    { name: 'theme_preference', type: 'Preference', purpose: 'User theme selection', duration: '1 year' },
    { name: 'language', type: 'Preference', purpose: 'User language preference', duration: '1 year' }
  ]
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand the types of cookies we use and how to manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website tracking, user preferences"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cookie
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about how we use cookies on our website and how you can manage your preferences. 
              We are committed to transparency and protecting your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/privacy-policy" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Privacy Policy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        {/* What Are Cookies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">How Cookies Work</h3>
                  <p className="text-gray-300 mb-4">
                    When you visit our website, we may place small data files called cookies on your device. 
                    These cookies help us provide you with a better experience by remembering your preferences 
                    and understanding how you use our website.
                  </p>
                  <p className="text-gray-300">
                    Cookies can be either "session" cookies (which expire when you close your browser) or 
                    "persistent" cookies (which remain on your device for a set period of time).
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Why We Use Cookies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">To ensure our website functions properly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">To remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">To analyze website traffic and usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">To provide personalized content and advertisements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Types of Cookies Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience on our website.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {cookie.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{cookie.type}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Purpose:</h4>
                    <p className="text-gray-300 text-sm">{cookie.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
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
        {/* Cookie Table Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Below is a detailed list of the specific cookies we use on our website.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left p-4 text-white font-semibold">Type</th>
                    <th className="text-left p-4 text-white font-semibold">Purpose</th>
                    <th className="text-left p-4 text-white font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-gray-300 font-mono text-sm">{cookie.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cookie.type === 'Essential' ? 'bg-blue-500/20 text-blue-300' :
                          cookie.type === 'Analytics' ? 'bg-green-500/20 text-green-300' :
                          cookie.type === 'Marketing' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-orange-500/20 text-orange-300'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="p-4 text-gray-300 text-sm">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Managing Cookies Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over the cookies we use. Learn how to manage your preferences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <div className="space-y-2">
                    <p className="text-gray-300 text-sm">• Chrome: Settings &gt; Privacy and security &gt; Cookies</p>
                    <p className="text-gray-300 text-sm">• Firefox: Options &gt; Privacy & Security &gt; Cookies</p>
                    <p className="text-gray-300 text-sm">• Safari: Preferences &gt; Privacy &gt; Cookies</p>
                    <p className="text-gray-300 text-sm">• Edge: Settings &gt; Cookies and site permissions</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can 
                  choose which types of cookies you want to allow.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">• Essential cookies are always enabled</p>
                  <p className="text-gray-300 text-sm">• You can opt-in to analytics cookies</p>
                  <p className="text-gray-300 text-sm">• You can opt-in to marketing cookies</p>
                  <p className="text-gray-300 text-sm">• You can change your preferences anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Questions About Our Cookie Policy?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  If you have any questions about our use of cookies or this cookie policy, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default CookiePolicyPage