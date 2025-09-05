import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Info, 
  ExternalLink, 
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';

const cookieCategories = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    required: true,
    cookies: [
      "Session cookies",
      "Authentication cookies",
      "Security cookies",
      "Load balancing cookies"
    ]
  },
  {
    name: "Analytics Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    required: false,
    cookies: [
      "Google Analytics",
      "Performance monitoring",
      "User behavior tracking",
      "Conversion tracking"
    ]
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization.",
    required: false,
    cookies: [
      "Language preferences",
      "User interface customization",
      "Remember me functionality",
      "Location-based services"
    ]
  },
  {
    name: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    required: false,
    cookies: [
      "Advertising targeting",
      "Social media integration",
      "Remarketing",
      "Cross-site tracking"
    ]
  }
];

const cookieDetails = [
  {
    name: "_ga",
    purpose: "Google Analytics - Distinguishes unique users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    purpose: "Google Analytics - Distinguishes unique users",
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

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  });

  const [showSettings, setShowSettings] = useState(false);

  const handleCookieToggle = (category: string) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [category]: !prev[category as keyof typeof prev]
    }));
  };

  const saveSettings = () => {
    // Save cookie preferences to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    setShowSettings(false);
    // Show success message
    alert('Cookie preferences saved successfully!');
  };

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website. Manage your cookie preferences and understand our data practices."
      keywords="cookie policy, cookies, privacy, data protection, GDPR, website tracking"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your 
                experience on our website and manage your preferences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We use different types of cookies to provide you with the best possible experience 
                on our website. You can manage your preferences for each category.
              </p>
            </motion.div>

            <div className="space-y-8">
              {cookieCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        {category.cookies.map((cookie, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {cookie}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-6">
                      {category.required ? (
                        <div className="flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Required
                        </div>
                      ) : (
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookieSettings[category.name.toLowerCase().replace(' ', '') as keyof typeof cookieSettings]}
                            onChange={() => handleCookieToggle(category.name.toLowerCase().replace(' ', ''))}
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700">
                            Enable
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Detailed information about the specific cookies we use on our website.
              </p>
            </motion.div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
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
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {cookie.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {cookie.purpose}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {cookie.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.type === 'Essential' 
                              ? 'bg-green-100 text-green-800'
                              : cookie.type === 'Analytics'
                              ? 'bg-blue-100 text-blue-800'
                              : cookie.type === 'Functional'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-orange-100 text-orange-800'
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
        </section>

        {/* Cookie Management */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                You have control over your cookie preferences. You can accept all cookies, 
                reject non-essential cookies, or customize your preferences.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button
                    onClick={() => {
                      setCookieSettings({
                        essential: true,
                        analytics: true,
                        functional: true,
                        marketing: true
                      });
                      saveSettings();
                    }}
                    className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                  >
                    Accept All Cookies
                  </button>
                  
                  <button
                    onClick={() => {
                      setCookieSettings({
                        essential: true,
                        analytics: false,
                        functional: false,
                        marketing: false
                      });
                      saveSettings();
                    }}
                    className="px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-center"
                  >
                    Reject Non-Essential
                  </button>
                  
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                  >
                    <Settings className="w-5 h-5 inline mr-2" />
                    Customize Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}