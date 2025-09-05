<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function Contact(): React.JSX.Element {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group - Get Your Quote Today</title>
        <meta name="description" content="Contact Zion Tech Group for micro SaaS, AI services, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com for expert consultation." />
        <link rel="canonical" href={`${contact.site}/contact`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Contact Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your business with innovative technology solutions?
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your project requirements, 
              receive a custom quote, or learn more about our 40+ micro SaaS products, 
              AI services, and IT solutions.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Phone</h3>
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Available Monday-Friday, 9 AM - 6 PM EST</p>
                    </div>

                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Email</h3>
                      <a href={`mailto:${contact.email}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.email}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">We respond within 24 hours</p>
                    </div>

                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-green-400">Address</h3>
                      <p className="text-lg text-slate-300">{contact.address}</p>
                      <p className="text-slate-400 text-sm mt-1">Middletown, Delaware</p>
                    </div>

                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Website</h3>
                      <a href={contact.site} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.site}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Visit our full service catalog</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Categories */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Micro SaaS Products</h3>
                    <p className="text-slate-300 mb-4">15+ innovative software solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Cloud Cost Guard (FinOps Assistant)</li>
                      <li>• API Rate Limiter & Analytics</li>
                      <li>• Smart Document Processing</li>
                      <li>• Customer Churn Predictor</li>
                      <li>• And 11+ more specialized tools</li>
                    </ul>
                    <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                      View All Micro SaaS →
                    </Link>
                  </div>

                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">AI Services</h3>
                    <p className="text-slate-300 mb-4">16+ advanced AI solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Computer Vision & Image Analysis</li>
                      <li>• AI-Powered Fraud Detection</li>
                      <li>• Conversational AI Platform</li>
                      <li>• Predictive Analytics & Forecasting</li>
                      <li>• And 12+ more AI services</li>
                    </ul>
                    <Link href="/services" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                      View All AI Services →
                    </Link>
                  </div>

                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">IT & Cloud Services</h3>
                    <p className="text-slate-300 mb-4">16+ comprehensive IT solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Cloud Migration & Modernization</li>
                      <li>• Kubernetes & Container Orchestration</li>
                      <li>• Cybersecurity Hardening & SOC</li>
                      <li>• Data Engineering & Analytics</li>
                      <li>• And 12+ more IT services</li>
                    </ul>
                    <Link href="/services" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                      View All IT Services →
                    </Link>
                  </div>
                </div>
              </div>
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Eastern Time'
    }
  ];

  if (isSubmitted) {
    return (
      <Layout
        title="Thank You - Zion Tech Group"
        description="Thank you for contacting us. We'll get back to you soon."
      >
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Return to Home
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our team for AI services, IT solutions, and micro SaaS development. We're here to help transform your business."
      keywords="contact, AI services, IT consulting, micro SaaS, business consultation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business? Let's discuss how our AI and technology 
                solutions can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-xl text-gray-600">
                  Multiple ways to reach us for your convenience.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </motion.div>
                ))}
              </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            </div>
          </div>
        </section>

        {/* Contact Form */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Choose your preferred way to contact us and let&apos;s discuss how we can help 
              transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call Now: {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Send Email
              </a>
              <Link href="/services-catalog" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View Services Catalog
              </Link>
            </div>
            
            <div className="text-slate-400">
              <p>We offer free consultations and custom quotes for all our services.</p>
              <p className="mt-2">Typical response time: Within 24 hours</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
