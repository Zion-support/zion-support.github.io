<<<<<<< HEAD
'use client'
import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
=======
<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export const metadata = {
<<<<<<< HEAD
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
  keywords: 'contact, support, AI services, micro SaaS, IT services, consulting'
=======
  title: "Contact | Zion Tech Group",
  description:
    "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};
=======
>>>>>>> c554ecc8e69d10c1910127259eb72d6f61ca1955
=======
>>>>>>> c9eab401084b8cb2c6f17819405d581bd6d67698
=======
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<<<<<<< HEAD
import Link from 'next/link';

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
import { ArrowRightIcon } from '@heroicons/react/24/outline';
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
=======
export const metadata = {
  title: "Contact | Zion Tech Group",
  description:
    "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",
};
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

>>>>>>> origin/main
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
<<<<<<< HEAD
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
=======
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

>>>>>>> origin/main
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
<<<<<<< HEAD
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
=======
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
>>>>>>> c9eab401084b8cb2c6f17819405d581bd6d67698
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

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Ready to transform your business? Let's discuss your project and find the perfect solution.
            </p>
          </div>
        </div>
      </div>
=======
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We reply within 1 business day'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709'
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'Average response time'
    }
  ];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/main
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and discover how our solutions can accelerate your growth.
=======
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's
            discuss how we can help you achieve your goals.
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<<<<<<< HEAD
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                <p className="text-green-200">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg flex items-center">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-red-200">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="it-services">IT Services</option>
                  <option value="blockchain">Blockchain Solutions</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
=======
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-300 text-lg">+1-302-464-0950</p>
                    <p className="text-gray-400 text-sm">
                      Available 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300 text-lg">
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                    <p className="text-gray-400 text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Office
                    </h3>
                    <p className="text-gray-300 text-lg">
                      364 E Main St STE 1008
                      <br />
                      Middletown, DE 19709
                    </p>
                    <p className="text-gray-400 text-sm">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">{info.title}</p>
                      <p className="text-white font-semibold">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div>
                    <p className="text-gray-300">Email us</p>
                    <p className="text-white font-semibold">contact@ziontechgroup.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Call us</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Visit us</p>
                    <p className="text-white font-semibold">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Business Hours</p>
                    <p className="text-white font-semibold">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
=======
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Contact Us;
          </h1>"
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's;
            discuss how we can help you achieve your goals.
          </p>
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>"
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
"
            <div className="space-y-8">"
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
                <div className="flex items-start space-x-4">"
                  <div className="text-2xl">📞</div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone;
                    </h3>"
                    <p className="text-gray-300 text-lg">+1-302-464-0950</p>"
                    <p className="text-gray-400 text-sm">
                      Available 9 AM - 6 PM EST;
                    </p>
                  </div>
                </div>
              </div>
"
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
                <div className="flex items-start space-x-4">"
                  <div className="text-2xl">✉️</div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email;
                    </h3>"
                    <p className="text-gray-300 text-lg">
                      <a"
                        href="mailto:kleber@ziontechgroup.com""
                        className="hover:text-cyan-400 transition-colors"
                      >
                        kleber@ziontechgroup.com;
                      </a>
                    </p>"
                    <p className="text-gray-400 text-sm">
                      We respond within 24 hours;
                    </p>
                  </div>
                </div>
              </div>
"
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
                <div className="flex items-start space-x-4">"
                  <div className="text-2xl">📍</div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Office;
                    </h3>"
                    <p className="text-gray-300 text-lg">
                      364 E Main St STE 1008;
                      <br />
                      Middletown, DE 19709;
                    </p>"
                    <p className="text-gray-400 text-sm">By appointment only</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </div>
                </div>
=======
                ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>
            </div>

<<<<<<< HEAD
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Why work with us?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Proven track record with 500+ clients
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Competitive pricing and flexible terms
                </li>
              </ul>
<<<<<<< HEAD
=======
  const contactInfo = [
    {
      title: 'Phone',
      details: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Address',
      details: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      link: null
    }
  ];

  const services = [
    'AI Services',
    'Micro SaaS Development',
    'IT Services',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & SRE',
    'Custom Development',
    'Consulting'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create a solution that drives real results.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
=======
          <div>"
            <h2 className="text-3xl font-bold text-white mb-8">
              Send us a Message;
            </h2>
"
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
              <form className="space-y-6">"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label"
                      htmlFor="firstName""
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name;
                    </label>
                    <input"
                      type="text""
                      id="firstName""
                      name="firstName""
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent""
                      placeholder="Your first name"
                      required;
                    />
                  </div>
                  <div>
                    <label"
                      htmlFor="lastName""
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name;
                    </label>
                    <input"
                      type="text""
                      id="lastName""
                      name="lastName""
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent""
                      placeholder="Your last name"
                      required;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    />
                  </div>
                </div>

<<<<<<< HEAD
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
=======
                <div>
                  <label"
                    htmlFor="email""
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email;
                  </label>
                  <input"
                    type="email""
                    id="email""
                    name="email""
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent""
                    placeholder="your@email.com"
                    required;
                  />
                </div>

                <div>
                  <label"
                    htmlFor="service""
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interest;
                  </label>
                  <select"
                    id="service""
                    name="service""
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >"
                    <option value="">Select a service</option>"
                    <option value="ai-services">AI Services</option>"
                    <option value="micro-saas">Micro SaaS Development</option>"
                    <option value="it-services">IT Services</option>"
                    <option value="consulting">General Consulting</option>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </select>
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
=======
                  <label"
                    htmlFor="message""
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </label>
                  <textarea"
                    id="message""
                    name="message"
<<<<<<< HEAD
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
=======
                    rows={5}"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none""
                    placeholder="Tell us about your project or requirements..."
                    required;
                  />
                </div>

                <button"
                  type="submit""
                  className="w-full bg-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-colors focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you succeed. Reach out to us through any of the channels below, and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <span className="text-lg font-bold">
                      {info.title === 'Phone' ? '📞' : 
                       info.title === 'Email' ? '✉️' : 
                       info.title === 'Address' ? '📍' : '🕒'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  ✉️ Email Us
                </a>
              </div>
>>>>>>> c9eab401084b8cb2c6f17819405d581bd6d67698
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
<<<<<<< HEAD
'"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
