import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: ["Authentication", "Security", "Load balancing", "User preferences"],
      necessary: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      necessary: false
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Social media", "Advertising networks", "Retargeting", "Conversion tracking"],
      necessary: false
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
      purpose: "Distinguishes unique users for Google Analytics",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Distinguishes unique users for Google Analytics",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "cookie_consent",
      purpose: "Remembers user's cookie preferences",
      duration: "1 year",
      type: "Essential"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Data Privacy & Cookies</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and analyze website traffic." />
        <meta name="keywords" content="cookie policy, data privacy, website cookies, analytics, tracking, GDPR compliance" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to transparent cookie usage and data privacy." />
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
                This policy explains how we use cookies and similar technologies on our website to enhance your experience and analyze our traffic.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">What Are Cookies?</h2>
                <p className="text-xl text-gray-300">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience and understand how our website is being used.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We use cookies to remember your preferences, analyze website traffic, and improve our services. 
                      Some cookies are essential for the website to function properly, while others help us understand 
                      how visitors interact with our content.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      You can control and manage cookies through your browser settings, but please note that disabling 
                      certain cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience on our website.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {cookie.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{cookie.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{cookie.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    cookie.necessary 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cookie.necessary ? 'Essential' : 'Optional'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Cookie Details</h2>
                <p className="text-xl text-gray-300">
                  Detailed information about the specific cookies we use on our website.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">Cookie Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                          <td className="px-6 py-4 text-sm text-white font-mono">{cookie.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                              cookie.type === 'Essential' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-blue-500/20 text-blue-400'
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

        {/* Managing Cookies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-xl text-gray-300">
                  You have control over how cookies are used on our website. Here's how you can manage them.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <Settings className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                      <p className="text-gray-300 mb-4">
                        Most web browsers allow you to control cookies through their settings preferences. 
                        You can set your browser to refuse cookies or delete certain cookies.
                      </p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li>• Chrome: Settings → Privacy and security → Cookies</li>
                          <li>• Firefox: Options → Privacy & Security → Cookies</li>
                          <li>• Safari: Preferences → Privacy → Cookies</li>
                          <li>• Edge: Settings → Cookies and site permissions</li>
                        </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                      <p className="text-gray-300 mb-4">
                        When you first visit our website, you'll see a cookie consent banner where you can 
                        choose which types of cookies you want to allow.
                      </p>
                      <p className="text-gray-300 text-sm">
                        You can change your preferences at any time by clicking the "Cookie Settings" 
                        link in our website footer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-gradient-to-r from-yellow-600/20 to-orange-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Important Notice</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Please note that disabling certain cookies may affect the functionality of our website. 
                      Essential cookies cannot be disabled as they are necessary for the website to function properly.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      If you have any questions about our use of cookies, please contact us at 
                      <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        privacy@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Cookies?</h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our cookie policy or how we use cookies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  General Contact
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