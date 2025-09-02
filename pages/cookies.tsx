import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Lock } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Enable basic functions like page navigation, access to secure areas, and remembering your preferences.",
      examples: ["Session management", "Security features", "Load balancing"],
      icon: Shield,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600"
    },
    {
      type: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      purpose: "Improve website performance and user experience by analyzing usage patterns.",
      examples: ["Google Analytics", "Page views", "User behavior"],
      icon: Eye,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      type: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      purpose: "Provide personalized features and remember your choices for a better user experience.",
      examples: ["Language preferences", "Theme settings", "Form data"],
      icon: Settings,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      type: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Show you relevant ads and measure the effectiveness of our marketing campaigns.",
      examples: ["Social media pixels", "Advertising networks", "Retargeting"],
      icon: Database,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand cookie types, purposes, and how to manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website analytics, user preferences" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Learn about how we use cookies to enhance your experience on our website and how you can manage your preferences.
              </p>
              <p className="text-blue-200">
                Last updated: January 15, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600">
                  This Cookie Policy explains how Zion Tech Group ("we," "our," or "us") uses cookies and similar technologies on our website https://ziontechgroup.com.
                </p>
              </section>

              {/* Cookie Types */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className={`p-6 rounded-lg border-2 ${cookie.color}`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-white ${cookie.iconColor}`}>
                          <cookie.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{cookie.type}</h3>
                          <p className="text-gray-600 mb-3">{cookie.description}</p>
                          <div className="mb-3">
                            <h4 className="font-medium text-gray-900 mb-1">Purpose:</h4>
                            <p className="text-gray-600 text-sm">{cookie.purpose}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Examples:</h4>
                            <ul className="text-gray-600 text-sm space-y-1">
                              {cookie.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex}>• {example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cookie Management */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Cookie Settings</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    You can control and manage cookies in several ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Browser Settings</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1 ml-4">
                        <li>• Block all cookies</li>
                        <li>• Allow only first-party cookies</li>
                        <li>• Delete all cookies when you close your browser</li>
                        <li>• Ask for permission before setting cookies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Cookie Consent</h4>
                      <p className="text-gray-600 text-sm">
                        When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject. You can change your preferences at any time by clicking the cookie settings link in our footer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Some cookies on our website are set by third-party services. These include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-gray-600 text-sm">
                        Helps us understand how visitors use our website. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Social Media</h4>
                      <p className="text-gray-600 text-sm">
                        Social media platforms may set cookies when you interact with social media features on our website.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Security Measures</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      We take the security of your data seriously. All data collected through cookies is:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• Encrypted during transmission</li>
                      <li>• Stored securely on protected servers</li>
                      <li>• Accessible only to authorized personnel</li>
                      <li>• Regularly reviewed and updated</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 font-medium">Email:</span>
                      <span className="text-gray-700">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 font-medium">Phone:</span>
                      <span className="text-gray-700">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-medium">Address:</span>
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;