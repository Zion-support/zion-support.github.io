import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Cookie,
  Shield,
  Settings,
  CheckCircle,
  XCircle,
  Info,
  ExternalLink,
  ArrowRight,
  Eye,
  Lock,
  Globe,
  Users
} from 'lucide-react';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for basic website functionality",
    icon: Shield,
    required: true
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors use our website",
    icon: Eye,
    required: false
  },
  {
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements",
    icon: Users,
    required: false
  },
  {
    name: "Functional Cookies",
    description: "Enable enhanced functionality and personalization",
    icon: Settings,
    required: false
  }
];

const cookieDetails = [
  {
    name: "Session ID",
    purpose: "Maintains user session state",
    duration: "Session",
    type: "Essential"
  },
  {
    name: "Google Analytics",
    purpose: "Website usage analytics",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "Marketing Preferences",
    purpose: "Stores marketing consent preferences",
    duration: "1 year",
    type: "Marketing"
  },
  {
    name: "Language Preference",
    purpose: "Remembers selected language",
    duration: "1 year",
    type: "Functional"
  }
];

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website and manage your cookie preferences."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-orange-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    Cookie Policy
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Understand how we use cookies and manage your preferences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Preferences */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-lg text-gray-600">
                  Choose which types of cookies you want to allow on our website
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {cookieTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <IconComponent className="w-6 h-6 text-orange-600 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              {type.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {type.description}
                          </p>
                          {type.required && (
                            <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                              <Lock className="w-3 h-3 mr-1" />
                              Required
                            </span>
                          )}
                        </div>
                        <div className="ml-4">
                          {type.required ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={cookiePreferences[type.name.split(' ')[0].toLowerCase() as keyof typeof cookiePreferences]}
                                onChange={(e) => handlePreferenceChange(
                                  type.name.split(' ')[0].toLowerCase(),
                                  e.target.checked
                                )}
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                            </label>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={savePreferences}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
                >
                  Save Preferences
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cookie Details
                </h2>
                <p className="text-lg text-gray-600">
                  Detailed information about the cookies we use
                </p>
              </motion.div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                                ? 'bg-red-100 text-red-800'
                                : cookie.type === 'Analytics'
                                ? 'bg-blue-100 text-blue-800'
                                : cookie.type === 'Marketing'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-green-100 text-green-800'
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

        {/* Policy Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  What Are Cookies?
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience by remembering your preferences 
                    and understanding how you use our site.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    How We Use Cookies
                  </h3>
                  
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To ensure our website functions properly and securely</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To analyze how our website is used and improve our services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To provide personalized content and advertisements</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Managing Your Cookie Preferences
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    You can control and manage cookies in various ways. You can delete all cookies 
                    that are already on your device and you can set most browsers to prevent them 
                    from being placed. However, if you do this, you may have to manually adjust 
                    some preferences every time you visit our site.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-orange-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Questions About Our Cookie Policy?
                </h2>
                <p className="text-xl text-orange-100 mb-8">
                  We're here to help you understand how we use cookies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/privacy"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-colors inline-flex items-center justify-center"
                  >
                    Privacy Policy
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}