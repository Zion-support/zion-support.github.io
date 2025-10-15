import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Eye, Database, Mail, Phone } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Load balancing", "User preferences"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "Theme settings", "Form data", "User interface"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track campaign performance.",
      examples: ["Ad targeting", "Campaign tracking", "Social media", "Remarketing"]
    }
  ];

  const cookieDetails = [
    {
      name: "session_id",
      purpose: "Maintains user session state",
      duration: "Session",
      type: "Essential"
    },
    {
      name: "_ga",
      purpose: "Google Analytics tracking",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "user_preferences",
      purpose: "Stores user interface preferences",
      duration: "1 year",
      type: "Functional"
    },
    {
      name: "marketing_consent",
      purpose: "Tracks marketing consent status",
      duration: "1 year",
      type: "Marketing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand cookie types, purposes, and how to manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking, user preferences" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Our cookie usage and management policy" />
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
                This policy explains how we use cookies and similar technologies on our website to enhance your experience.
              </p>
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We use both session cookies (which expire when you close your browser) and persistent cookies 
                  (which remain on your device for a set period of time).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to improve your experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="text-cyan-400 mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-300">
                          <span className="text-cyan-400 mr-3">•</span>
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

        {/* Cookie Details Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Cookie Details</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="border-t border-white/10">
                          <td className="px-6 py-4 text-cyan-400 font-mono">{cookie.name}</td>
                          <td className="px-6 py-4 text-gray-300">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-gray-300">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                              cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                              cookie.type === 'Functional' ? 'bg-yellow-500/20 text-yellow-400' :
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
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Managing Your Cookie Preferences</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    You have control over the cookies we use. You can manage your preferences in several ways:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them. 
                        Check your browser&apos;s help section for instructions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Cookie Banner:</strong> When you first visit our site, you can choose which types of cookies to accept.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Opt-out Links:</strong> For third-party cookies, you can use the opt-out links provided by the respective services.
                      </div>
                    </li>
                  </ul>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-6">
                    <p className="text-cyan-300">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Cookie Policy?</h2>
              <p className="text-xl text-white/90 mb-8">
                If you have any questions about our use of cookies or this policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@ziontechgroup.com" 
                  className="flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  privacy@ziontechgroup.com
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
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