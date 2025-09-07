import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, AlertCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    icon: Cookie,
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    purpose: "Enable basic website functionality, security, and user authentication",
    examples: [
      "Session management cookies",
      "Security and authentication cookies",
      "Load balancing cookies",
      "User interface customization cookies"
    ],
    retention: "Session or up to 1 year",
    required: true
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "These cookies enhance your experience by remembering your preferences and settings.",
    purpose: "Remember your preferences and provide enhanced functionality",
    examples: [
      "Language preference cookies",
      "Theme and display settings",
      "User interface preferences",
      "Accessibility settings"
    ],
    retention: "Up to 2 years",
    required: false
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    purpose: "Analyze website usage and improve user experience",
    examples: [
      "Google Analytics cookies",
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring"
    ],
    retention: "Up to 2 years",
    required: false
  },
  {
    icon: Database,
    title: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
    purpose: "Deliver personalized content and measure advertising effectiveness",
    examples: [
      "Advertising platform cookies",
      "Social media tracking pixels",
      "Remarketing cookies",
      "Conversion tracking"
    ],
    retention: "Up to 1 year",
    required: false
  }
];

const cookieSettings = [
  {
    category: "Essential Cookies",
    description: "Required for basic website functionality",
    enabled: true,
    disabled: false
  },
  {
    category: "Functional Cookies",
    description: "Enhance your browsing experience",
    enabled: true,
    disabled: false
  },
  {
    category: "Analytics Cookies",
    description: "Help us improve our website",
    enabled: false,
    disabled: true
  },
  {
    category: "Marketing Cookies",
    description: "Used for advertising purposes",
    enabled: false,
    disabled: true
  }
];

const dataCollection = [
  {
    type: "Personal Information",
    description: "Information that can identify you directly",
    examples: ["Name", "Email address", "Phone number", "Company information"]
  },
  {
    type: "Usage Data",
    description: "Information about how you use our website",
    examples: ["Pages visited", "Time spent on site", "Click patterns", "Device information"]
  },
  {
    type: "Technical Data",
    description: "Information collected automatically",
    examples: ["IP address", "Browser type", "Operating system", "Screen resolution"]
  }
];

const rights = [
  {
    title: "Right to Information",
    description: "You have the right to know what cookies we use and why we use them."
  },
  {
    title: "Right to Control",
    description: "You can control which cookies are stored on your device through your browser settings."
  },
  {
    title: "Right to Withdraw",
    description: "You can withdraw your consent for non-essential cookies at any time."
  },
  {
    title: "Right to Access",
    description: "You can request information about the cookies we have stored about you."
  }
];
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef

export default function cookies() {
  return (
<<<<<<< HEAD
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your browsing experience.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Cookies Work</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    When you visit our website, we may place cookies on your device
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cookies contain information about your visit and preferences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Your browser sends cookies back to our server on future visits
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    This helps us provide a better, more personalized experience
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why We Use Cookies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    To ensure our website functions properly
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    To remember your preferences and settings
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    To analyze how visitors use our website
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    To improve our services and user experience
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. You can control most of these through your browser settings.
              </p>
            </motion.div>

            <div className="space-y-8">
              {cookieTypes.map((cookieType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <cookieType.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{cookieType.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          cookieType.required 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {cookieType.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{cookieType.description}</p>
                      <p className="text-gray-700 mb-4"><strong>Purpose:</strong> {cookieType.purpose}</p>
                      <p className="text-gray-700 mb-4"><strong>Retention:</strong> {cookieType.retention}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cookieType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You can control which cookies we store on your device. Note that disabling certain cookies may affect website functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {cookieSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{setting.category}</h3>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        setting.enabled 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {setting.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        setting.disabled 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {setting.disabled ? 'Disabled' : 'Enabled'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Save Preferences
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Accept All
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Reject All
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Data We Collect Through Cookies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cookies help us collect certain information to improve your experience and our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataCollection.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{data.type}</h3>
                  <p className="text-gray-600 mb-4">{data.description}</p>
                  <ul className="space-y-2">
                    {data.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Rights Regarding Cookies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have certain rights regarding the cookies we use and the data we collect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{right.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies, please contact us.
              </p>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 123 Technology Drive, Suite 100, New York, NY 10001</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> You can also manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete them.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
    <Layout>
      <Head>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookies</h1>
          <p className="text-lg text-gray-600">
            Professional cookies solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
  );
}