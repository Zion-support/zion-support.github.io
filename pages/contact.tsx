<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
=======
import React, { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  Users,
  Award,
} from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance',
      href: 'tel:+13024640950',
    },
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> main
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
>>>>>>> main

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
=======
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
>>>>>>> main
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
=======
<<<<<<< HEAD
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

=======
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
>>>>>>> main
>>>>>>> main
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
<<<<<<< HEAD
        message: ''
=======
        message: '',
>>>>>>> main
      });
    }, 3000);
  };

  const contactInfo = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',
    },
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
    {
      icon: Mail,
      title: 'Email Us',
      details: 'kleber@ziontechgroup.com',
<<<<<<< HEAD
=======
<<<<<<< HEAD
      description: 'We respond within 24 hours',
=======
<<<<<<< HEAD
      description: 'Send us a detailed message',
      href: 'mailto:kleber@ziontechgroup.com',
>>>>>>> main
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709',
<<<<<<< HEAD
=======
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'ziontechgroup.com',
      description: 'Visit our online platform',
      href: 'https://ziontechgroup.com',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' },
  ];

=======
>>>>>>> main
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '364 E Main St STE 1008 Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
    },
    {
      icon: Clock,
      title: 'Business Hours',
<<<<<<< HEAD
      details: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      link: '#'
    }
  ];

=======
<<<<<<< HEAD
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
    },
=======
      details: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      link: '#'
    }
>>>>>>> main
  ];

>>>>>>> main
>>>>>>> main
  const services = [
    'AI Services',
    'IT Services',
    'Micro SaaS',
    'Custom Development',
    'Digital Transformation',
<<<<<<< HEAD
    'Enterprise Solutions',
    'Consulting',
    'Other'
=======
<<<<<<< HEAD
    'DevOps & Automation',
=======
    'Enterprise Solutions',
    'Consulting',
<<<<<<< HEAD
    'Other',
=======
    'Other'
>>>>>>> main
>>>>>>> main
>>>>>>> main
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help transform your business with cutting-edge technology solutions." />
=======
<<<<<<< HEAD
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. We're here to help transform your business."
        />
        '
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/contact" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
=======
<<<<<<< HEAD
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI services, IT solutions, and Micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        />
=======
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help transform your business with cutting-edge technology solutions." />
>>>>>>> main
>>>>>>> main
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss how our technology solutions can drive your success.
=======
>>>>>>> main
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
                Let&apos;s Transform Your Business Together'
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to get started with our AI services, IT solutions, or
                micro SaaS development? Contact us today for a free
                consultation.
=======
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                Ready to transform your business with cutting-edge technology?
                Get in touch with our experts today.
=======
                Ready to transform your business? Let's discuss how our technology solutions can drive your success.
>>>>>>> main
>>>>>>> main
>>>>>>> main
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
<<<<<<< HEAD
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
>>>>>>> main
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl border border-gray-200 hover: shadow-lg transition-shadow"
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
<<<<<<< HEAD
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
=======
                    {method.title}
                  </h3>
                  <a
                    href={method.href}
                    className="text-blue-600 hover:text-blue-500 font-medium block mb-2"
                    target={
                      method.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      method.href.startsWith('http') ? 'noreferrer' : undefined
                    }
                  >
                    {method.details}
                  </a>
                  <p className="text-sm text-gray-600">{method.description}</p>
>>>>>>> main
                </div>
              ))}
            </div>

<<<<<<< HEAD
        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.'
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you
                    soon.'
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
=======
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
>>>>>>> main
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
<<<<<<< HEAD
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
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
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
=======
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
>>>>>>> main
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
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
=======
                        placeholder="Doe"
>>>>>>> main
                      />
                    </div>
                  </div>

                  <div>
                    <label
<<<<<<< HEAD
=======
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label
>>>>>>> main
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
<<<<<<< HEAD
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
=======
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">
                        AI Services & Solutions
                      </option>
                      <option value="it-services">
                        IT Services & Cloud Platforms
                      </option>
                      <option value="micro-saas">Micro SaaS Development</option>
                      <option value="cybersecurity">
                        Cybersecurity & Compliance
                      </option>
                      <option value="digital-transformation">
                        Digital Transformation
                      </option>
                      <option value="devops">DevOps & Automation</option>
                      <option value="consulting">Consulting & Advisory</option>
                      <option value="other">Other</option>
>>>>>>> main
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
<<<<<<< HEAD
                      Message *
=======
                      Message
>>>>>>> main
                    </label>
                    <textarea
                      id="message"
                      name="message"
<<<<<<< HEAD
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help..."
=======
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
>>>>>>> main
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations
              with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto: kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
=======
              {/* Business Info */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last: border-b-0"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span className="text-gray-600">{schedule.hours}</span>
=======
>>>>>>> main
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, or fill out the form and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <a 
                          href={info.link} 
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Free consultation and project assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Transparent pricing with no hidden fees
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 support and maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Proven track record of successful projects
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                      <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
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
                            required
                            value={formData.name}
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Why Choose Zion Tech Group?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>500+ Projects Completed</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>99.9% Uptime Guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>24/7 Support Available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>Transparent Pricing</span>
                    </li>
                  </ul>
=======
>>>>>>> main
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
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tell us about your project or how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </form>
                  )}
<<<<<<< HEAD
                </div>
              </div>
=======
>>>>>>> main
                </div>
              </div>
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer />
    </>
  );
}
=======

      <Footer />
    </>
  );
}
>>>>>>> main
