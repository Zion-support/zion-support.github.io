import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "info@ziontechgroup.com",
    address: "123 Innovation Drive, Tech City, TC 12345",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM EST"
  };

  const services = [
    'AI Services',
    'IT Services', 
    'Micro SaaS',
    'Cloud Solutions',
    'Cybersecurity',
    'Consulting'
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our team. We're here to help you transform your business with cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="text-blue-400">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your business? Let's discuss how our technology solutions can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 text-lg mb-8">
                    We're here to help you succeed. Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-500 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-300">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-white font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and explore how our technology solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;