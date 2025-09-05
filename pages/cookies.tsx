import React from 'react';
import { 
  Eye,
  Lock,
  Globe,
  Users
} from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    purpose: "Authentication, security, and basic functionality",
    duration: "Session",
    provider: "Zion Tech Group"
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    purpose: "Website performance and usage analytics",
    duration: "2 years",
    provider: "Google Analytics"
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
    purpose: "User preferences and enhanced functionality",
    duration: "1 year",
    provider: "Zion Tech Group"
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    purpose: "Targeted advertising and marketing",
    duration: "1 year",
    provider: "Third-party advertisers"
  }
];

const cookieDetails = [
  {
    duration: "Session",
    provider: "Zion Tech Group"
  }
];

export default function CookiePolicyPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your browsing experience and provide better services.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                What Are Cookies?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600 mb-6">
                  Cookies help us understand how you use our website, remember your preferences, and provide you with a 
                  better, more personalized experience. They also help us improve our website's performance and functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{cookie.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Purpose:</span>
                      <span className="text-gray-900">{cookie.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-900">{cookie.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Provider:</span>
                      <span className="text-gray-900">{cookie.provider}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Cookies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                How We Use Cookies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Eye className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Website Analytics</h3>
                      <p className="text-gray-600">We use cookies to understand how visitors interact with our website and improve its performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">User Experience</h3>
                      <p className="text-gray-600">Cookies help us remember your preferences and provide a personalized experience.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                      <p className="text-gray-600">Essential cookies help us maintain security and prevent fraud on our website.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Lock className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality</h3>
                      <p className="text-gray-600">Cookies enable enhanced features and functionality on our website.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Managing Your Cookie Preferences
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6">
                  You have the right to control how cookies are used on our website. You can manage your cookie preferences 
                  through your browser settings or by using our cookie consent tool.
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Browser Settings</h3>
                  <p className="text-gray-600">
                    Most web browsers allow you to control cookies through their settings. You can choose to accept all cookies, 
                    reject all cookies, or be notified when a cookie is set.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">Cookie Consent Tool</h3>
                  <p className="text-gray-600">
                    You can also manage your cookie preferences using our cookie consent tool, which allows you to choose 
                    which types of cookies you want to allow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}