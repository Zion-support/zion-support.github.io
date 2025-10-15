import React from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Settings, Eye, Lock, CheckCircle, AlertTriangle } from "lucide-react";

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Authentication, security, and basic functionality",
      retention: "Session-based",
      required: true,
      icon: <Lock className="w-6 h-6" />
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      purpose: "Website performance analysis and user behavior insights",
      retention: "2 years",
      required: false,
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      purpose: "User preferences and enhanced features",
      retention: "1 year",
      required: false,
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Targeted advertising and marketing campaigns",
      retention: "1 year",
      required: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const cookieDetails = [
    {
      name: "_ga",
      domain: ".ziontechgroup.com",
      purpose: "Google Analytics - distinguishes users",
      retention: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      domain: ".ziontechgroup.com",
      purpose: "Google Analytics - distinguishes users",
      retention: "24 hours",
      type: "Analytics"
    },
    {
      name: "session_id",
      domain: ".ziontechgroup.com",
      purpose: "Maintains user session",
      retention: "Session",
      type: "Essential"
    },
    {
      name: "user_preferences",
      domain: ".ziontechgroup.com",
      purpose: "Stores user interface preferences",
      retention: "1 year",
      type: "Functional"
    },
    {
      name: "marketing_consent",
      domain: ".ziontechgroup.com",
      purpose: "Tracks marketing consent status",
      retention: "1 year",
      type: "Marketing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Privacy & Data Protection</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to enhance your browsing experience while protecting your privacy. Comprehensive cookie policy and management options." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, user consent, GDPR compliance" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Our comprehensive cookie policy and privacy protection measures" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Learn about how we use cookies to enhance your browsing experience while protecting your privacy. 
                We are committed to transparency and giving you control over your data.
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-semibold">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">What Are Cookies?</h2>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and enabling certain website functions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We use cookies responsibly and in compliance with applicable privacy laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. You can control most of these through your browser settings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-white">{cookie.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cookie.name}</h3>
                      {cookie.required && (
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-semibold">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{cookie.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-cyan-400 font-semibold">Purpose:</span>
                      <span className="text-gray-300 text-sm">{cookie.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-400 font-semibold">Retention:</span>
                      <span className="text-gray-300 text-sm">{cookie.retention}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Cookie Details</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed information about the specific cookies we use on our website
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-cyan-500/20">
                <thead className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Domain</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Retention</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-mono text-sm">{cookie.name}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.domain}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.retention}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cookie.type === 'Essential' ? 'bg-red-500/20 text-red-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          cookie.type === 'Functional' ? 'bg-green-500/20 text-green-400' :
                          'bg-purple-500/20 text-purple-400'
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

        {/* Your Rights Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Your Rights and Choices</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                    Browser Settings
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Block all cookies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Block third-party cookies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Delete existing cookies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Get notifications before cookies are set
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                    Your Privacy Rights
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Under applicable privacy laws, you have the right to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Access your personal data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Correct inaccurate data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Delete your data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      Object to processing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Cookie Policy?</h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;