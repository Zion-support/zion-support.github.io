import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us for immediate assistance',
    value: contactInfo.phone,
    link: `tel:${contactInfo.phone}`
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`
  },
  {
    icon: MapPin,
    title: 'Address',
    description: 'Visit our office',
    value: contactInfo.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`
  },
  {
    icon: Clock,
    title: 'Hours',
    description: 'We\'re always available',
    value: contactInfo.hours,
    link: '#'
  }
];

const services = [
  'AI Solutions',
  'IT Services',
  'Micro SaaS',
  'Consulting',
  'Support',
  'Other'
];

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
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <Layout
      title="Contact Us - Zion Tech Group | Get in Touch"
      description="Contact Zion Tech Group for AI solutions, IT services, and technology consulting. Get in touch with our expert team today."
      keywords="contact us, get in touch, AI consulting, IT services, technology support, phone, email, address"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Contact <span className="text-blue-400">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Get in touch with our expert team for AI solutions and technology consulting
            </motion.p>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choose your preferred way to contact us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {method.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project or how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Phone</h3>
                          <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-blue-600">
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Email</h3>
                          <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600">
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Address</h3>
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600"
                          >
                            {contactInfo.address}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Hours</h3>
                          <p className="text-gray-600">{contactInfo.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Expert AI and technology solutions
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        24/7 support and maintenance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Proven track record of success
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Competitive pricing and flexible plans
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${contactInfo.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Call Now
              </a>
              <a href={`mailto:${contactInfo.email}`} className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}