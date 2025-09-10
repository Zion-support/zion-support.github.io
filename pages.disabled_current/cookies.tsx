import { motion } from 'framer-motion';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, X, Settings, Shield, BarChart3, Target, Mail } from 'lucide-react';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly",
    icon: Shield,
    type: "essential"
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website",
    icon: BarChart3,
    type: "analytics"
  },
  {
    name: "Functional Cookies",
    description: "Enable enhanced functionality and personalization",
    icon: Settings,
    type: "functional"
  },
  {
    name: "Marketing Cookies",
    description: "Used to track visitors across websites for advertising purposes",
    icon: Target,
    type: "marketing"
  }
];

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-blue-100">
                  Learn about how we use cookies and similar technologies to enhance your experience.
                </p>
                <p className="text-sm text-gray-400">Last updated: January 2025</p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>

                <h2 className="text-3xl font-bold mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>

                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our cookie policy, please contact us:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}