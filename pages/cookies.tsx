import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  CheckCircle, 
  XCircle,
  Info,
  AlertTriangle,
  Lock,
  Eye,
  Database,
  Globe,
  Clock,
  Users,
  BarChart3,
  Target,
  Zap,
  Heart,
  Star,
  ArrowRight,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    icon: Shield,
    color: 'bg-green-500',
    required: true,
    examples: [
      'Authentication cookies',
      'Security cookies',
      'Load balancing cookies',
      'User interface customization'
    ]
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    icon: BarChart3,
    color: 'bg-blue-500',
    required: false,
    examples: [
      'Google Analytics',
      'Page view tracking',
      'User behavior analysis',
      'Performance metrics'
    ]
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    icon: Settings,
    color: 'bg-purple-500',
    required: false,
    examples: [
      'Language preferences',
      'Region settings',
      'User preferences',
      'Customization options'
    ]
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    icon: Target,
    color: 'bg-orange-500',
    required: false,
    examples: [
      'Advertising cookies',
      'Social media cookies',
      'Remarketing cookies',
      'Interest-based advertising'
    ]
  }
];

const cookieDetails = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and performance measurement',
    provider: 'Google LLC',
    type: 'Analytics',
    duration: '2 years',
    data: 'IP address, browser information, pages visited, time spent'
  },
  {
    name: 'Session Cookies',
    purpose: 'Maintain user session and security',
    provider: 'Zion Tech Group',
    type: 'Essential',
    duration: 'Session',
    data: 'Session ID, authentication tokens'
  },
  {
    name: 'Preference Cookies',
    purpose: 'Remember user preferences and settings',
    provider: 'Zion Tech Group',
    type: 'Functional',
    duration: '1 year',
    data: 'Language, theme, layout preferences'
  },
  {
    name: 'Marketing Cookies',
    purpose: 'Deliver relevant advertisements',
    provider: 'Various',
    type: 'Marketing',
    duration: '1 year',
    data: 'Interests, demographics, browsing behavior'
  }
];

const privacyRights = [
  {
    title: 'Right to Access',
    description: 'You have the right to request access to the personal data we hold about you.',
    icon: Eye
  },
  {
    title: 'Right to Rectification',
    description: 'You have the right to request correction of inaccurate or incomplete personal data.',
    icon: CheckCircle
  },
  {
    title: 'Right to Erasure',
    description: 'You have the right to request deletion of your personal data under certain circumstances.',
    icon: XCircle
  },
  {
    title: 'Right to Portability',
    description: 'You have the right to receive your personal data in a structured, machine-readable format.',
    icon: Download
  },
  {
    title: 'Right to Object',
    description: 'You have the right to object to processing of your personal data for marketing purposes.',
    icon: Target
  },
  {
    title: 'Right to Restrict Processing',
    description: 'You have the right to request restriction of processing of your personal data.',
    icon: Lock
  }
];

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  });
  const [showPreferences, setShowPreferences] = useState(false);

  const handlePreferenceChange = (type: string, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowPreferences(false);
    // Show confirmation message
    alert('Your cookie preferences have been saved!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    });
    savePreferences();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and manage your preferences
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-xl text-gray-600">
                  Understanding cookies and how they work
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Small Files, Big Impact
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember information about your visit, making your browsing experience 
                    more personalized and efficient.
                  </p>
                  <p className="text-gray-600 mb-6">
                    At Zion Tech Group, we use cookies responsibly to improve our website's functionality, 
                    analyze usage patterns, and provide you with a better user experience.
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Manage Preferences
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Accept All
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="text-center">
                    <Cookie className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      How Cookies Work
                    </h4>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 font-semibold text-sm">1</span>
                        </div>
                        <p className="text-sm text-gray-700">You visit our website</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 font-semibold text-sm">2</span>
                        </div>
                        <p className="text-sm text-gray-700">We send cookies to your browser</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 font-semibold text-sm">3</span>
                        </div>
                        <p className="text-sm text-gray-700">Your browser stores the cookies</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 font-semibold text-sm">4</span>
                        </div>
                        <p className="text-sm text-gray-700">We use cookies to improve your experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {type.name}
                        </h3>
                        {type.required && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {type.description}
                      </p>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detailed Cookie Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete list of cookies used on our website
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cookie Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {cookie.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {cookie.provider}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-100 text-green-800' :
                          cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                          cookie.type === 'Functional' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {cookie.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Privacy Rights Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have control over your personal data and cookie preferences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privacyRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <right.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {right.title}
                  </h3>
                  <p className="text-gray-600">
                    {right.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                If you have any questions about our use of cookies or this policy, please contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a 
                    href="tel:+13024640950"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <address className="text-gray-600 not-italic">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Preferences Modal */}
        {showPreferences && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cookie Preferences
              </h3>
              
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                          <type.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{type.name}</h4>
                          {type.required && (
                            <span className="text-xs text-green-600 font-medium">Required</span>
                          )}
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences[type.name.toLowerCase().replace(' ', '') as keyof typeof cookiePreferences]}
                          onChange={(e) => handlePreferenceChange(type.name.toLowerCase().replace(' ', ''), e.target.checked)}
                          disabled={type.required}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Reject All
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
}