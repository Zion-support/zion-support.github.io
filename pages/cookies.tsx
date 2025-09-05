import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Cookie,
  Eye,
  Lock,
  Globe
} from 'lucide-react';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    required: true,
    examples: ["Authentication", "Security", "Load balancing", "User preferences"],
    icon: Shield
  },
  {
    title: "Analytics Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    required: false,
    examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
    icon: Eye
  },
  {
    title: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization.",
    required: false,
    examples: ["Language preferences", "Region settings", "Customization", "User interface"],
    icon: Settings
  },
  {
    title: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    required: false,
    examples: ["Advertising", "Social media", "Retargeting", "Personalized content"],
    icon: Globe
  }
];

const cookieDetails = [
  {
    name: "_ga",
    purpose: "Google Analytics - Distinguishes users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    purpose: "Google Analytics - Distinguishes users",
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
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and analyze website usage."
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn about how we use cookies and similar technologies to enhance 
                your browsing experience and analyze website usage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cookies are small text files that are placed on your computer or mobile device 
                  when you visit a website. They are widely used to make websites work more 
                  efficiently and to provide information to website owners.
                </p>
              </motion.div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We use cookies to improve your experience on our website, analyze how you use our site, 
                      and personalize content and advertisements. Cookies help us understand which pages are 
                      most popular, how long visitors spend on our site, and what they're looking for.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        Remember your preferences and settings
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        Analyze website traffic and usage patterns
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        Improve website performance and functionality
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        Provide personalized content and recommendations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. You can control 
                which types of cookies you accept through your browser settings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-bold text-gray-900 mr-3">
                            {type.title}
                          </h3>
                          {type.required ? (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                              Required
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              Optional
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {type.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {type.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specific Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Below is a detailed list of the specific cookies we use on our website.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-mono text-gray-900">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            cookie.type === 'Functional' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
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

        {/* Managing Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  You have control over cookies. Learn how to manage your preferences.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Browser Settings</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings. 
                    You can usually find these settings in the "Options" or "Preferences" menu.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Get notifications before cookies are set</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Lock className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Cookie Consent</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you'll see a cookie consent banner 
                    where you can choose which types of cookies to accept.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Essential cookies (always required)</li>
                    <li>• Analytics cookies (optional)</li>
                    <li>• Functional cookies (optional)</li>
                    <li>• Marketing cookies (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this cookie policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Us
                </a>
                <a href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">
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