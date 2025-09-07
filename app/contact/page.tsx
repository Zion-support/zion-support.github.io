<<<<<<< HEAD
import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description:
    'Get in touch with Zion Tech Group for AI, Micro SaaS, and Enterprise IT solutions. We are here to help you transform your business.',
  keywords:
    'contact, support, AI services, micro SaaS, IT services, consulting',
};

export default function ContactPage() {
=======
'use client';

import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 leading-tight'>
            Get in Touch with{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>
              Zion Tech Group
            </span>
          </h1>
<<<<<<< HEAD
          <p className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Ready to transform your business with AI, Micro SaaS, or Enterprise
            IT solutions? Let's discuss how we can help you achieve your goals.
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts.
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact Information */}
      <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Contact Information
            </h2>
<<<<<<< HEAD
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We're here to help you succeed. Reach out to us through any of
              these channels.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-blue-100 mb-6'>
                <PhoneIcon className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Phone</h3>
              <p className='text-gray-600 mb-4'>
                Call us directly for immediate assistance
              </p>
              <a
                href='tel:+13024640950'
                className='text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors'
              >
                +1 302 464 0950
              </a>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-green-100 mb-6'>
                <EnvelopeIcon className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Email</h3>
              <p className='text-gray-600 mb-4'>Send us a message anytime</p>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='text-green-600 font-semibold text-lg hover:text-green-700 transition-colors'
              >
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-lg text-center'>
              <div className='inline-flex p-4 rounded-full bg-purple-100 mb-6'>
                <MapPinIcon className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Address</h3>
              <p className='text-gray-600 mb-4'>Visit our office</p>
              <address className='text-purple-600 font-semibold text-lg not-italic'>
                364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20 bg-blue-600'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Let's discuss your project and see how we can help you achieve your
            business goals with our cutting-edge solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:kleber@ziontechgroup.com?subject=Project Inquiry'
              className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center'
            >
              Send us an Email
              <ArrowRightIcon className='h-5 w-5 ml-2' />
            </a>
            <a
              href='tel:+13024640950'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              Call Now
            </a>
=======
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how Zion Tech Group can help you achieve your goals.
            </p>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              View Our Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">hello@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Office</h3>
                  <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                  Proven track record with 500+ companies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                  24/7 support and maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                  Competitive pricing and flexible contracts
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-900 border border-green-700 text-green-100 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="micro-saas">Micro SaaS</option>
                  <option value="it-services">IT Services</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
          </div>
        </div>
      </div>
    </div>
  );
}