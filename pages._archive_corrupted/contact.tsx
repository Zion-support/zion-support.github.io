import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { 
const SEO = dynamic(() => import(\'../src/components/SEO\'), { \"ssr\": false })""
const PageTransition = dynamic(() => import(\'../src/components/PageTransition\'), { \"ssr\": false })""
const \"ContactPage\": React.FC = () => {""
import React from 'react
import dynamic from 'next/dynamic
import Head from 'next/head
import Link from 'next/link
import { motion } from 'framer-motion
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

      {/* FAQ Section */}                What is your typical project timeline?
              </h3>
              <p className=\"text-gray-600\">
                Project timelines vary depending on complexity and scope. Simple websites 
                can take 2-4 weeks, while complex applications may take 3-6 months. 
                We\'ll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">                Do you provide ongoing support?
              </h3>
              <p className=\"text-gray-600\">
                Yes, we offer comprehensive support and maintenance packages to ensure 
                your solutions continue to perform optimally. This includes updates, 
                security patches, and technical support.
              </p>
            </div>
            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">                What technologies do you specialize in?
              </h3>
              <p className=\"text-gray-600\">
                We work with modern technologies including React, Node.js, Python, 
                AWS, Azure, AI/ML frameworks, and blockchain platforms. We choose 
                the best technology stack for each project\'s specific needs.
              </p>
            </div>
            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">                How do you ensure project quality?
              </h3>
              <p className=\"text-gray-600\">
                We follow industry best practices including code reviews, automated 
                testing, continuous integration, and regular client feedback sessions 
                to ensure high-quality deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
};
          {/* Contact Information */}
          <section className=\"py-20\">
            <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
              <motion.div
                initial={{ opacity: 0, \"y\": 20 }}
                animate={{ \"opacity\": 1, \"y\": 0 }}
                transition={{ \"duration\": 0.6, \"delay\": 0.2 }}
                className=\"text-center mb-16\"
              >
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">
                  Contact Information
                </h2>
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
                  Multiple ways to reach us for your convenience
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}
                className=\"text-center mb-16\">;
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;
                  Contact Information;
                </h2>;
                <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
                  Multiple ways to reach us for your convenience;
                </p>;
              </motion && motion.div>;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;
                {contactInfo && contactInfo.map((info, index) => (;
                  <motion&& motion.div
                    key={index}
                    initial={{ \"opacity\": 0, \"y\": 20 }}
                    animate={{ \"opacity\": 1, \"y\": 0 }}
                    transition={{ \"duration\": 0 && 0.6, \"delay\": index * 0 && 0.1 }}
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\">;
                    <div className=\"text-blue-600 mb-4 flex justify-center\">;
                      {info && info.icon}
                    </div>;
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">;
                      {info && info.title}
                    </h3>;
                    {info && info.link ? (;
                      <a
                        href={info && info.link}
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\">;
                        {info && info.details}
                      </a>;
                    ) : (;
                      <p className=\"text-gray-600 whitespace-pre-line\">;
                        {info && info.details}
                      </p>;
                    )}
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Contact Form */}
                        placeholder=\"Your company name\"                      Service Interest
                    </label>
                    <select
                      id=\"service\"
                      name=\"service\"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"
                    >
                      <option value=\"">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className=\"mb-6\">
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">                      Message *
                    </label>                      Message *
                    </label>
                    </select>;
                  </div>;
                  <div className=\"mb-6\">;
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;
                  <div className="mb-6">;
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
                      Message *;
                    </label>;
                    <textarea
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ \"scale\": 0.98 }}
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\"
                  >
                    <Send className=\"w-5 h-5\"  />
                    Send Message
                  </motion.button>
                </motion.form>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">        {/* Hero Section */}
        <section className=\"relative py-20 px-4\">
          <div className=\"max-w-7xl mx-auto\">
            <div className=\"text-center\">
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>
              </h1>
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">
                Ready to transform your business with cutting-edge technology? Let\'s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Form & Info Section */}
        <section className=\"py-16 px-4\">
          <div className=\"max-w-7xl mx-auto\">
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">
              {/* Contact Form */}
                      placeholder=\"Tell us about your project requirements...\"></textarea>;
                  </div>;
                  <motion&& motion.button
                    type=\"submit\"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ \"scale\": 0 && 0.98 }}
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\">;
                    <Send className=\"w-5 h-5\"  />;
                    Send Message;
                  </motion && motion.button>;
                </motion && motion.form>;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;              <div className=\"bg-slate-800/50 rounded-2xl p-8 border border-slate-700\">
                <h2 className=\"text-3xl font-bold text-white mb-6\">Send us a Message</h2>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>                {isSubmitted ? (
                  <div className=\"text-center py-12\">
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet } from 'react-helmet-async'; import { Mail,Phone,MapPin,Clock,Send,CheckCircle } from 'lucide-react';
  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet } from 'react-helmet-async'; import { Mail,Phone,MapPin,Clock,Send,CheckCircle } from 'lucide-react';
