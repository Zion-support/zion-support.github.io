import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies']
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    icon: Settings,
    color: 'from-green-500 to-emerald-500',
    examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis']
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500',
    examples: ['Language preferences', 'Theme settings', 'User preferences']
  }
];

export default function Cookies() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies to enhance your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${cookie.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{cookie.name}</h3>
                      <p className="text-gray-600 mb-6">{cookie.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-600 mb-6">
                  You can control and manage cookies in various ways. Please note that removing or 
                  blocking cookies can impact your user experience and parts of our website may 
                  not function properly.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Browser Settings</h3>
                  <p className="text-gray-600">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">Cookie Consent</h3>
                  <p className="text-gray-600">
                    When you first visit our website, you'll see a cookie consent banner where you can 
                    choose which types of cookies you want to accept.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}