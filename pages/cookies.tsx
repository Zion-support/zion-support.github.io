import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  BarChart3,
  CheckCircle
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly",
    icon: Shield,
    examples: ["Authentication", "Security", "Basic functionality"],
    required: true
  },
  {
    title: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website",
    icon: BarChart3,
    examples: ["Google Analytics", "Page views", "User behavior"],
    required: false
  },
  {
    title: "Preference Cookies",
    description: "These cookies remember your preferences and settings",
    icon: Settings,
    examples: ["Language settings", "Theme preferences", "Customization"],
    required: false
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website and how you can manage your cookie preferences."
      keywords="cookie policy, cookies, privacy, data collection, website tracking"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies on our website and how you can manage your preferences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies for various purposes including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Ensuring our website functions properly</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing how visitors use our website</li>
                <li>Improving our website's performance and user experience</li>
                <li>Providing personalized content and recommendations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {cookieTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                      <div className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-slate-500" />
                            <span className="text-xs text-gray-600">{example}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          type.required ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {type.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Use our cookie preference center (coming soon)</li>
                <li>Opt out of specific tracking services</li>
                <li>Contact us if you have questions about our cookie usage</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Some cookies on our website are set by third-party services such as Google Analytics, 
                social media platforms, and advertising networks. These cookies are subject to the 
                respective third parties' privacy policies.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this 
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Questions About Our Privacy Practices?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Learn more about how we protect your privacy and handle your data
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/privacy" className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}