import * as React from 'react'
import MainLayout from '../components/layout/MainLayout'
import {
  Shield, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Cookie,
  Eye,
  Lock,
  Globe
} from 'lucide-react'

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
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Understanding how we use cookies to enhance your experience
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Cookie className="w-8 h-8 text-orange-500 mr-3" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We use cookies to improve our website's functionality, analyze usage patterns, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <type.icon className="w-6 h-6 text-orange-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      {type.required && (
                        <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-8 h-8 text-orange-500 mr-3" />
                  Cookie Details
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-3">Cookie Name</th>
                        <th className="px-6 py-3">Purpose</th>
                        <th className="px-6 py-3">Duration</th>
                        <th className="px-6 py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-mono text-sm">{cookie.name}</td>
                          <td className="px-6 py-4">{cookie.purpose}</td>
                          <td className="px-6 py-4">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-orange-500 mr-3" />
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Opt-out Tools:</strong> You can opt out of analytics cookies using browser add-ons or opt-out tools.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Contact Us:</strong> If you have questions about our cookie usage, please contact us.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}