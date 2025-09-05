import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  Mail, 
  ArrowRight, 
  Users, 
  Calendar, 
  FileText, 
  Video, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  Send
} from 'lucide-react';

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Get access to exclusive white papers, case studies, and industry insights.',
    icon: FileText
  },
  {
    title: 'Early Access',
    description: 'Be the first to know about new features, services, and product launches.',
    icon: Zap
  },
  {
    title: 'Expert Insights',
    description: 'Receive valuable insights from our technology experts and industry leaders.',
    icon: Users
  },
  {
    title: 'Weekly Updates',
    description: 'Stay informed with our weekly newsletter covering the latest in technology.',
    icon: Calendar
  }
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Newsletter - Zion Tech Group | Stay Updated</title>
        <meta name="description" content="Subscribe to our newsletter for exclusive content, industry insights, and the latest updates from Zion Tech Group." />
        <meta name="keywords" content="newsletter, subscribe, updates, technology insights, industry news" />
        <meta property="og:title" content="Newsletter - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with our latest insights and technology news." />
        <meta property="og:url" content="https://ziontechgroup.com/newsletter" />
        <meta property="og:type" content="website" />
      </Head>
      
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
                Stay{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Updated
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, updates, and exclusive content from our technology experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join thousands of professionals who trust us to keep them informed about the latest in technology and innovation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="text-blue-600 mr-4 mt-1">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                            <p className="text-gray-600">{benefit.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
                >
                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe Now
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h3>
                      <p className="text-gray-600">
                        You'll receive our next newsletter soon. Check your email for confirmation.
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Subscribers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Weekly</div>
                <div className="text-gray-600">Updates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}