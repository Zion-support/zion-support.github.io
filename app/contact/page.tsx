'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We reply within one business day</p>
=======
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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

  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let&apos;s discuss how we can help you achieve your goals.
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project and discover how our solutions can accelerate your growth.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with AI, micro SaaS, and IT solutions? 
            Let's discuss your project and how we can help you succeed.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          </p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts 
            to discuss your AI, micro SaaS, or IT service needs.
          </p>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </div>

<<<<<<< HEAD
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help you succeed. Send us a message and we'll get back 
              to you within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-300">Message sent successfully! We&apos;ll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
<<<<<<< HEAD
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                />
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
=======
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
<<<<<<< HEAD
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                />
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
=======
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                />
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
=======
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="micro-saas">Micro SaaS</option>
                  <option value="it-services">IT Services</option>
                  <option value="consulting">Consulting</option>
=======
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="micro-saas">Micro SaaS</option>
                  <option value="it-services">IT Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="blockchain-solutions">Blockchain Solutions</option>
                  <option value="ai-automation-suite">AI Automation Suite</option>
                  <option value="data-analytics">Data Analytics</option>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
<<<<<<< HEAD
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
=======
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                </label>
                <textarea
                  id="message"
                  name="message"
<<<<<<< HEAD
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or requirements..."
                />
=======
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              </div>

              <button
                type="submit"
<<<<<<< HEAD
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
=======
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              </button>
            </form>
          </div>

<<<<<<< HEAD
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@ziontechgroup.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Technology Drive<br />
                  Innovation City, IC 12345<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
=======
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We&apos;re here to help you succeed. Reach out to us through any of the channels below, 
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  <p className="text-gray-400 text-sm">Visit us by appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center text-gray-500 text-xl">
              [Google Maps Embed Placeholder]
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed. Reach out to us through any of these channels.
            </p>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your goals.
            </p>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              View Our Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
          </div>
        </div>
      </div>
    </div>
  );
}
