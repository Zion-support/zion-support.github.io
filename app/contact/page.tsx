<<<<<<< HEAD
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const ContactPage: React.FC = () => {
=======
import React, { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

>>>>>>> cursor/website-audit-and-update-with-deployment-e118
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
<<<<<<< HEAD
      details: 'info@ziontechgroup.com',
=======
      details: 'contact@ziontechgroup.com',
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
<<<<<<< HEAD
      description: 'Mon-Fri from 8am to 6pm'
=======
      description: 'Mon-Fri from 9am to 6pm'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: 'Visit Us',
<<<<<<< HEAD
      details: 'San Francisco, CA',
      description: 'Come say hello at our office'
    }
  ]
=======
      details: '123 Tech Street, Innovation City, IC 12345',
      description: 'Come say hello at our office'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'We are here to help you'
    }
  ];

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Services',
    'Micro SAAS',
    '5G Implementation',
    'Digital Transformation',
    'Other'
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-e118

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help with your AI and IT solutions needs. Contact us today for a consultation." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, IT services, consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-blue-400 text-lg mb-1">{info.details}</p>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Expert AI and IT professionals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Proven track record of success
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Custom solutions for your business
                  </li>
                </ul>
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and inquiries." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 font-medium mb-2">{info.details}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              </div>
            </div>

<<<<<<< HEAD
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait - let's discuss your project and see how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Email Us Now
            </a>
            <a
              href="tel:+15551234567"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
=======
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : status.type === 'loading'
                    ? 'bg-blue-50 text-blue-800 border border-blue-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {status.message}
                  </div>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join hundreds of businesses that trust Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-services"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Explore Our Services
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
