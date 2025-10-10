'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      required: true,
      examples: ['Authentication', 'Security', 'Load balancing', 'User preferences']
    },
    {
      name: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      examples: ['Page views', 'User behavior', 'Performance metrics', 'Error tracking']
    },
    {
      name: 'Marketing Cookies',
      icon: Settings,
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      required: false,
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Remarketing']
    },
    {
      name: 'Functional Cookies',
      icon: Eye,
      description: 'These cookies enable enhanced functionality and personalization.',
      required: false,
      examples: ['Language preferences', 'Theme settings', 'Customization', 'User experience']
    }
  ];

  const cookieDetails = [
    {
      name: 'session_id',
      purpose: 'Maintains user session',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user settings and preferences',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: 'analytics_data',
      purpose: 'Tracks website usage and performance',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: 'marketing_campaign',
      purpose: 'Tracks marketing campaign effectiveness',
      duration: '6 months',
      type: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy | Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your browsing experience.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Cookie className="w-4 h-4" />
              <span>Last updated: January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, making your next visit easier and the site more useful to you.
              </p>
              <p>
                We use cookies and similar technologies to improve your experience on our website, analyze how you use our site, and for marketing purposes. By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <cookie.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cookie.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cookie.required 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {cookie.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{cookie.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cookie Details
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed information about the specific cookies we use on our website.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-white font-semibold">Cookie Name</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Purpose</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Duration</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-6 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                    <td className="py-4 px-6 text-gray-300">{cookie.purpose}</td>
                    <td className="py-4 px-6 text-gray-300">{cookie.duration}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cookie.type === 'Essential' 
                          ? 'bg-green-500/20 text-green-400'
                          : cookie.type === 'Analytics'
                          ? 'bg-blue-500/20 text-blue-400'
                          : cookie.type === 'Marketing'
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have control over which cookies you accept and can change your preferences at any time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Browser Settings</h3>
              </div>
              <p className="text-gray-300 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
                <li>• Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                <li>• Safari: Preferences &gt; Privacy &gt; Cookies</li>
                <li>• Edge: Settings &gt; Cookies and site permissions</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Cookie Banner</h3>
              </div>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie banner where you can choose which types of cookies to accept.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Essential cookies (always required)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Analytics cookies (optional)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Marketing cookies (optional)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-white/90 mb-6">
              Email us at <a href="mailto:privacy@ziontechgroup.com" className="text-white font-medium underline">privacy@ziontechgroup.com</a> or call us at <a href="tel:+13024640950" className="text-white font-medium underline">+1 (302) 464-0950</a>
            </p>
            <p className="text-white/90">
              We're here to help with any questions about our cookie policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPage;
