import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Clock, Users, 
  MessageSquare, Send, CheckCircle, Star, 
  Rocket, Brain, Atom, Shield, Zap
} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

// Import service data for showcase
import { innovativeAIServices2029 } from '../data/2029-innovative-ai-services';
import { quantumSpaceInnovations2029 } from '../data/2029-quantum-space-innovations';
import { enterpriseITInnovations2029 } from '../data/2029-enterprise-it-innovations';
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: '24/7 Support Available',
    timezone: 'Eastern Time (ET)'
  };

  // Get popular services for showcase
  const popularServices = [
    ...innovativeAIServices2029.filter(s => s.popular),
    ...quantumSpaceInnovations2029.filter(s => s.popular),
    ...enterpriseITInnovations2029.filter(s => s.popular),
    ...innovativeMicroSaas2029.filter(s => s.popular)
  ].slice(0, 6);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Contact Zion Tech Group | Revolutionary 2029 Technology Services</title>
        <meta name="description" content="Contact Zion Tech Group for revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology. Get in touch today!" />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, quantum computing, space technology, biotechnology, 2029 technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <UltraFuturisticNavigation2029 />

      <main className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Ready to revolutionize your business with cutting-edge 2029 technology? 
              Get in touch with our expert team today.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-12 border border-green-500/20"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <div className="text-sm text-gray-400">
                  <p>✓ Free consultation scheduled</p>
                  <p>✓ Service recommendations prepared</p>
                  <p>✓ ROI analysis in progress</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Phone */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
                  >
                    <Phone className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">{contactInfo.mobile}</p>
                    <p className="text-sm text-gray-400 mt-2">{contactInfo.timezone}</p>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20"
                  >
                    <Mail className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300 break-all">{contactInfo.email}</p>
                    <p className="text-sm text-gray-400 mt-2">24/7 Response</p>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20"
                  >
                    <MapPin className="w-8 h-8 text-orange-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-300">{contactInfo.address}</p>
                    <p className="text-sm text-gray-400 mt-2">Delaware, USA</p>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-8 h-8 text-purple-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-consciousness">AI Consciousness Development</option>
                        <option value="quantum-computing">Quantum Computing Solutions</option>
                        <option value="space-mining">Space Mining Technology</option>
                        <option value="biotech">Advanced Biotechnology</option>
                        <option value="blockchain">Blockchain Innovation</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help revolutionize your business with cutting-edge 2029 technology..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Popular Services Showcase */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12"
                >
                  <div className="flex items-center mb-8">
                    <Star className="w-8 h-8 text-yellow-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">Popular Services</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.category}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 font-bold">${service.price}</span>
                          <span className="text-xs text-gray-400">Starting price</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}