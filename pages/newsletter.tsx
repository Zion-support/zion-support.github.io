<<<<<<< HEAD
import React, { useState } from 'react';
import Layout from '../components/Layout';

const newsletterFeatures = [
  {
    title: 'Weekly Tech Insights',
    description: 'Stay ahead with the latest technology trends and industry insights',
    icon: FileText
  },
  {
    title: 'Exclusive Content',
    description: 'Access to premium content and expert analysis not available elsewhere',
    icon: Video
  },
  {
    title: 'Product Updates',
    description: 'Be the first to know about new features and product launches',
    icon: Zap
  },
  {
    title: 'Industry Reports',
    description: 'Comprehensive reports on market trends and business opportunities',
    icon: BarChart3
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Calendar, 
  FileText, 
  Video, 
  Globe, 
  Shield, 
  Zap,
  Star,
  Target,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Get access to exclusive white papers, case studies, and industry insights.',
    icon: FileText
  },
  {
    title: 'Early Access',
    description: 'Be the first to know about new features, products, and services.',
    icon: Star
  },
  {
    title: 'Expert Insights',
    description: 'Receive expert analysis and commentary on industry trends and developments.',
    icon: Target
  },
  {
    title: 'Community Access',
    description: 'Join our exclusive community of developers and technology professionals.',
    icon: Users
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'The newsletter has been invaluable for staying up-to-date with the latest in AI and cloud computing.',
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    content: 'Great insights and practical advice. I look forward to every issue.',
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    content: 'The exclusive content and early access features make this newsletter a must-read.',
    avatar: '/images/testimonials/emily.jpg'
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
<<<<<<< HEAD

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
  };

  return (
    <Layout
      title="Newsletter - Zion Tech Group"
      description="Subscribe to our newsletter for the latest technology insights, product updates, and industry news."
      keywords="newsletter, subscription, technology insights, product updates, industry news"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
=======
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Newsletter - Zion Tech Group</title>
        <meta name="description" content="Subscribe to our newsletter for exclusive content, early access, and expert insights." />
        <meta name="keywords" content="newsletter, subscribe, updates, technology, AI, cloud" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Informed</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest technology insights, 
                product updates, and industry news.
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stay{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Updated
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Subscribe to our newsletter and never miss out on the latest technology insights, 
                exclusive content, and industry updates.
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Newsletter Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our newsletter delivers valuable content directly to your inbox, 
                helping you stay informed and ahead of the curve.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {newsletterFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Subscribe?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get exclusive access to content that helps you stay ahead in the technology landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* Subscription Form */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8"
              >
                {!isSubscribed ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Subscribe to Our Newsletter
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email address"
                            required
                          />
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                          I agree to receive newsletters and marketing communications from Zion Tech Group.
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                      >
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Subscribe Now
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You for Subscribing!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      You've successfully subscribed to our newsletter. You'll receive our latest updates and insights soon.
                    </p>
                    <button
                      onClick={() => setIsSubscribed(false)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Subscribe Another Email
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of professionals who trust us for their technology insights.
              </p>
            </motion.div>

            {!isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
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
                    <div className="sm:pt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      We respect your privacy. Unsubscribe at any time. No spam, ever.
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to our newsletter!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing. You'll receive your first newsletter within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Subscribe another email
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Subscribers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied subscribers who rely on our newsletter for insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of subscribers who are already staying informed with our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Subscribe Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe now and join our community of technology professionals.
              </p>
              <button
                onClick={() => document.getElementById('email')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </button>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}