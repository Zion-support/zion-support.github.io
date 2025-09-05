    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    required: true,
    examples: [
      "Authentication cookies",
      "Security cookies",
      "Load balancing cookies",
      "User interface customization"
    ]
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    required: false,
    examples: [
      "Google Analytics",
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring"
    ]
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
    required: false,
    examples: [
      "Advertising networks",
      "Social media integration",
      "Email marketing tracking",
      "Conversion tracking"
    ]
  },
  {
    name: "Preference Cookies",
    description: "These cookies remember your choices and preferences for a better user experience.",
    required: false,
    examples: [
      "Language preferences",
      "Theme settings",
      "Location settings",
      "Accessibility options"
    ]
  }
];

const cookieDetails = [
  {
    name: "_ga",
    purpose: "Google Analytics - distinguishes users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    purpose: "Google Analytics - distinguishes users",
    duration: "24 hours",
    type: "Analytics"
  },
  {
    name: "session_id",
    purpose: "Maintains user session",
    duration: "Session",
    type: "Essential"
  },
  {
    name: "preferences",
    purpose: "Stores user preferences",
    duration: "1 year",
    type: "Preference"
  }
];

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCookiePreferences = () => {
    // In a real implementation, this would save to localStorage and set actual cookies
    console.log('Cookie preferences saved:', cookieSettings);
    alert('Cookie preferences saved successfully!');
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Learn about how we use cookies to enhance your browsing experience 
                and provide personalized content and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies to provide you with the best possible experience on our website.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      cookie.required ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <Cookie className={`w-6 h-6 ${
                        cookie.required ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                      {cookie.required && (
                        <span className="text-sm text-red-600 font-semibold">Required</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cookie Settings
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Manage your cookie preferences. You can enable or disable different types of cookies below.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                {Object.entries(cookieSettings).map(([type, enabled]) => (
                  <div key={type} className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 capitalize">
                        {type === 'essential' ? 'Essential Cookies' :
                         type === 'analytics' ? 'Analytics Cookies' :
                         type === 'marketing' ? 'Marketing Cookies' :
                         'Preference Cookies'}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {type === 'essential' ? 'Required for website functionality' :
                         type === 'analytics' ? 'Help us understand website usage' :
                         type === 'marketing' ? 'Used for advertising and marketing' :
                         'Remember your preferences and settings'}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {type === 'essential' && (
                        <span className="text-sm text-red-600 mr-4">Required</span>
                      )}
                      <button
                        onClick={() => handleCookieToggle(type as keyof typeof cookieSettings)}
                        disabled={type === 'essential'}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } ${type === 'essential' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={saveCookiePreferences}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={() => setCookieSettings({
                      essential: true,
                      analytics: true,
                      marketing: true,
                      preferences: true
                    })}
                    className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Detailed information about the specific cookies we use on our website.
              </p>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cookie Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {cookie.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {cookie.purpose}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {cookie.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                              cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                              cookie.type === 'Preference' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
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
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
import React from 'react';
import Head from 'next/head';
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website.
                  They help us provide you with a better experience by remembering your preferences and
                  enabling certain functionality.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Essential Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are necessary for the website to function properly. They enable basic
                        functionality like page navigation and access to secure areas.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies help us understand how visitors interact with our website by collecting
                        and reporting information anonymously.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Functional Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering
                        your preferences and settings.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Language preferences, theme settings, form data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Marketing Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are used to track visitors across websites to display relevant and
                        engaging advertisements.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Advertising cookies, social media cookies, remarketing pixels
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Cookies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Website Functionality
                    </h3>
                    <p className="text-gray-600">
                      To ensure our website works properly and provide you with a seamless experience.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Performance Analysis
                    </h3>
                    <p className="text-gray-600">
                      To understand how our website is used and identify areas for improvement.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalization
                    </h3>
                    <p className="text-gray-600">
                      To remember your preferences and provide customized content and features.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Security
                    </h3>
                    <p className="text-gray-600">
                      To protect against fraud and ensure the security of our website and users.
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    We may use third-party services that set their own cookies. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                    <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                    <li><strong>Customer Support:</strong> For providing chat and support functionality</li>
                  </ul>
                  <p className="text-gray-600">
                    These third parties have their own privacy policies and cookie practices. We recommend
                    reviewing their policies for more information.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    You have several options for managing cookies:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Browser Settings
                      </h3>
                      <p className="text-gray-600">
                        Most browsers allow you to control cookies through their settings. You can block or
                        delete cookies, or set preferences for specific websites.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Cookie Consent Banner
                      </h3>
                      <p className="text-gray-600">
                        When you first visit our website, you'll see a cookie consent banner where you can
                        choose which types of cookies to accept.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Opt-Out Tools
                      </h3>
                      <p className="text-gray-600">
                        You can use industry opt-out tools to manage advertising cookies and tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact of Disabling Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Please note that disabling certain cookies may impact your experience on our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Some features may not work properly</li>
                    <li>You may need to re-enter information more frequently</li>
                    <li>Personalized content may not be available</li>
                    <li>We may not be able to remember your preferences</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Updates to This Policy
                </h2>
                <p className="text-gray-600 mb-8">
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for other operational, legal, or regulatory reasons. We will notify you of any material
                  changes by posting the updated policy on our website.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}