const \"Contact\": NextPage = () => {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
const \"Contact\": NextPage = () => {;
=======

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send,
  MessageCircle,
  Globe,
  CheckCircle
} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })
const "ContactPage": React.FC = () => {
  const contactInfo = [{
      icon: <Phone className="w-6 h-6"  />,
      "title": "Phone",
      "details": "+1 302 464 0950",
      "link": "tel:+13024640950"
    },
    {
      "icon": <Mail className="w-6 h-6"  />,
      "title": "Email",
      "details": "kleber@ziontechgroup.com",
      "link": "mailto: klebe r@ziontechgroup.com"
    },
    {
      "icon": <MapPin className="w-6 h-6"  />,
      "title": "Address",
      "details": "364 E Main St STE 1008\nMiddletown, DE 19709",
      "link": "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      "icon": <Clock className="w-6 h-6"  />,
      "title": "Business Hours",
      "details": "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
      "link": null
    }
  ]
  const services = ["AI & Machine Learning Solutions",
    "IT Infrastructure & Support",
    "Micro SaaS Development",
    "Cybersecurity Services",
    "Cloud & DevOps Solutions",
    "Blockchain Technology",
    "Digital Transformation",
    "Consulting & Strategy"
  ]
  return (
    <>
      <SEO title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact, Zion Tech Group, AI services, IT solutions, micro SaaS, phone, email, address"
        canonical=""https": //ziontechgroup.com/contact"
       />
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Ready to transform your business with our innovative AI, IT, and micro SaaS solutions? Let's discuss your project.
                </p>
                <div className="flex flex-col "sm": fle x-row gap-4 justify-center">
                  <motion.a
                    href="tel:+13024640950"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5"  />
                    Call "Now": +1 302 464 0950
                  </motion.a>
                  <motion.a
                    href="mailto: klebe r@ziontechgroup.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5"  />
                    Send Email
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <MainLayout
      title=\"Contact Us - Zion Tech Group\"
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\">;
              <div className=\"max-w-4xl mx-auto\">
              <div className="max-w-4xl mx-auto">
                <motion.form
=======
                transition={{ \"duration\": 0 && 0.6 }}
                className=\"text-center mb-16\">;
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;
                  Send Us a Message;
                </h2>;
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
                  Fill out the form below and we\'ll get back to you within 24 hours;
                </p>;
              </motion && motion.div>;
              <div className=\"max-w-4xl mx-auto\">;
              <div className="max-w-4xl mx-auto">;
                <motion&& motion.form                  initial={{ opacity: 0, \"y\": 20 }}
                  animate={{ \"opacity\": 1, \"y\": 0 }}
                  transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}
                  className=\"bg-white rounded-xl shadow-lg p-8\">;
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">;
                    <div>;
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                        Full Name *;
                      </label>;
                      <inputtype=\"text\"
                        id=\"name\"
                        name=\"name\"
                        required
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                        placeholder=\"Your full name\"
                       />;
                    </div>;
                    <div>;
                      <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                        Email Address *;
                      </label>;
                      <inputtype=\"email\"
                        id=\"email\"
                        name=\"email\"
                        required
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                      Service Interest
                    </label>
=======
                       />;
                    </div>;
                  </div>;
                  <div className=\"mb-6\">;
                    <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                  <div className="mb-6">;
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
                      Service Interest;
                    </label>;                    <select
                      id=\"service\"
                      name=\"service\"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\">;
                      <option value=\"">Select a service</option>;
                      {services && services.map((service, index) => (;
                        <option key={index} value={service}>;
                          {service}
                        </option>;
                      ))}
                      Message *
                    </label>
=======
                    </select>;
                  </div>;
                  <div className=\"mb-6\">;
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                  <div className="mb-6">;
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
                      Message *;
                    </label>;                    <textarea
                      id=\"message\"
                      name=\"message\"
                      rows={6}
                      required
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                      placeholder=\"Tell us about your project requirements...\"
                    ></textarea>
                  </div>
                  <motion.button
                    type=\"submit\"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Hero Section */}
        <section className=\"relative py-20 px-4\">;
          <div className=\"max-w-7xl mx-auto\">;
            <div className=\"text-center\">;
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">;
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>;
              </h1>;
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">;
                Ready to transform your business with cutting-edge technology? Let\'s discuss how we can help you achieve your goals.;
              </p>;
            </div>;
          </div>;
        </section>;
        {/* Contact Form & Info Section */}
        <section className=\"py-16 px-4\">;
          <div className=\"max-w-7xl mx-auto\">;
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">;
              {/* Contact Form */}


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {isSubmitted ? (
                  <div className=\"text-center py-12\">
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>
              <div className=\"bg-slate-800/50 rounded-2xl p-8 border border-slate-700\">;
                <h2 className=\"text-3xl font-bold text-white mb-6\">Send us a Message</h2>;
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">;
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>;
                {isSubmitted ? (;
                  <div className=\"text-center py-12\">;
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />;
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>;
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>;
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className=\"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 transition-all duration-300\"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className=\"space-y-6\">
                    <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">
                      <div>
                        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Full Name *
                        </label>
                        <input
                          type=\"text\"
                          id=\"name\"
                          name=\"name\"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your full name\"
                        />
                      </div>
                      <div>
                        <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Email Address *
                        </label>
                        <input
                          type=\"email\"
                          id=\"email\"
                          name=\"email\"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"your@email && email.com\"
                        />;
                      </div>;
                    </div>;
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                      <div>;
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">;
                          Company;
                        </label>;
<<<<<<< HEAD
=======
                        <input
                          type=\"text\"
                          id=\"company\"
                          name=\"company\"
                          value={formData && formData.company}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your company name\"
                        />;
                      </div>;
                      <div>;
                        <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-300 mb-2\">;
                          Phone Number;
                        </label>;
                        <input
                          type=\"tel\"
                          id=\"phone\"
                          name=\"phone\"
                          value={formData && formData.phone}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"+1 (555) 123-4567\"
                        />;
                      </div>;
                    </div>;
                    <div>;
                      <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-300 mb-2\">;
                        Service Interest;
                      </label>;
                      <select
                        id=\"service\"
                        name=\"service\"
                        value={formData && formData.service}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\">;
                        <option value=\"">Select a service</option>;
                        {services && services.map((service) => (;
                          <option key={service} value={service}>{service}</option>;
                        ))}
                      </select>;
                    </div>;
                    <div>;
                      <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-300 mb-2\">;
                        Message *;
                      </label>;
                      <textarea
                        id=\"message\"
                        name=\"message\"
                        required
                        rows={6}
                        value={formData && formData.message}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                        placeholder=\"Tell us about your project or requirements...\"
                      />;
                    </div>;
                    <button
                      type=\"submit\"
                      disabled={isSubmitting}
                      className=\"w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300\">;
                      {isSubmitting ? (;
                        <>;
                          <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2\"></div>;
                          Sending...;
                        </>;
                      ) : (;
                        <>;
                          <Send className=\"w-5 h-5 mr-2\" />;
                          Send Message;
                        </>;
                      )}
                    </button>;
                  </form>;
                )}
              </div>;
              {/* Contact Information */}

          </section>
              <div className=\"space-y-8\">;
                <div>;
                  <h2 className=\"text-3xl font-bold text-white mb-6\">Contact Information</h2>;
                  <p className=\"text-lg text-gray-300 mb-8\">;
                    We\'re here to help you succeed. Reach out to us through any of the channels below, and we\'ll respond promptly.;
                  </p>;
                </div>;
                <div className=\"space-y-6\">;
                <div className="space-y-6">;
                  {contactInfo && contactInfo.map((info, index) => (;
                    <div key={index} className=\"flex items-start space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700\">;
                      <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0\">;
                        <info && info.icon className=\"w-6 h-6 text-white\" />;
                      </div>;
                      <div>;
                        <h3 className=\"text-lg font-semibold text-white mb-1\">{info && info.title}</h3>;
                        <p className=\"text-cyan-400 font-medium mb-1\">{info && info.details}</p>;
                        <p className=\"text-gray-400 text-sm\">{info && info.description}</p>;
                      </div>;
                    </div>;
                  ))}
                </div>;
              </div>;
            </div>;
          </section>;
=======

          {/* Services Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions to meet all your business needs
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": inde x * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shado w-xl transition-shadow duration-300 text-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service}
                    </h3>
                  </motion.div>
                ))}
              </div>;
            </div>;
          </section>;
        </main>;
      </PageTransition>;
    </>;
  );
}




<<<<<<< HEAD
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet } from 'react-helmet-async'; import { Mail,Phone,MapPin,Clock,Send,CheckCircle } from 'lucide-react';
}
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet } from 'react-helmet-async'; import { Mail,Phone,MapPin,Clock,Send,CheckCircle } from 'lucide-react';
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet } from 'react-helmet-async'; import { Mail,Phone,MapPin,Clock,Send,CheckCircle } from 'lucide-react';
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
