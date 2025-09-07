<<<<<<< HEAD
'use client';'
import React, { useState } from 'react';'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';'
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export default function ContactPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Ready to transform your business with our AI solutions and enterprise services?
            Let's discuss your project and create something amazing together.'
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Ready to transform your business? Let&apos;s discuss your project and discover how our solutions can accelerate your growth.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Ready to transform your business? Let&apos;s discuss your project and discover how our solutions can accelerate your growth.
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Ready to transform your business with our AI solutions and enterprise services?
            Let's discuss your project and create something amazing together.'
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Ready to transform your business? Let&apos;s discuss your project and discover how our solutions can accelerate your growth.
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Ready to transform your business with our AI solutions and enterprise services?
            Let's discuss your project and create something amazing together.'
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Ready to transform your business with our AI solutions and enterprise services?
            Let's discuss your project and create something amazing together.'
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Ready to transform your business? Let&apos;s discuss your project and discover how our solutions can accelerate your growth.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">"
          <div className="grid grid-cols-1 "lg":grid-cols-2 gap-12">"
            {/* Contact Information */
}
            <div className="space-y-8">"
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>"
                <div className="space-y-4">"
                  <div className="flex items-center">"
                    <span className="text-blue-600 mr-3">📧</span>"
                    <span className="text-gray-700">contact@ziontechgroup.com</span>"
=======
'use client'
import React, { useState } from 'react'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      service: '', 
      message: '' 
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your business with AI and technology? 
              Let's discuss your project.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="web-development">Web Development</option>
                    <option value="cloud-services">Cloud Services</option>
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@ziontechgroup.com</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
                  </div>
                  <div className="flex items-center">"
                    <span className="text-blue-600 mr-3">📞</span>"
                    <span className="text-gray-700">+1 (302) 464-0950</span>"
                  </div>
                  <div className="flex items-center">"
                    <span className="text-blue-600 mr-3">🌐</span>"
                    <a href=""https"://ziontechgroup.com" className="text-gray-700 "hover":text-blue-600">"
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• 1000+ successful projects delivered</li>
                  <li>• 24/7 technical support</li>
                  <li>• Enterprise-grade security</li>
                  <li>• Custom AI solutions</li>
                  <li>• Rapid development cycles</li>
                </ul>
              </div>
            </div>
<<<<<<< HEAD
            {/* CTA Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>"
              <p className="text-gray-600 mb-8">"
                Contact us today for a free consultation and discover how our AI solutions,
can transform your business.
              </p>
              <div className="space-y-4">"
                <a,
href=""mailto":contact@ziontechgroup.com""
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors text-center""
                >
                  Send us an Email
                  <ArrowRightIcon className="h-5 w-5 ml-2 inline" />"
                </a>
                <a,
href=""tel":+13024640950""
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors text-center""
                >
                  Call Now
                </a>
            {submitStatus === 'success' && ('
              <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg flex items-center">"
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />"
                <span className="text-green-300">Message sent successfully! We&apos;ll get back to you soon.</span>"
              </div>
            )}
            {/* CTA Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>"
              <p className="text-gray-600 mb-8">"
                Contact us today for a free consultation and discover how our AI solutions,
can transform your business.
              </p>
              <div className="space-y-4">"
                <a,
href=""mailto":contact@ziontechgroup.com""
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors text-center""
                >
                  Send us an Email
                  <ArrowRightIcon className="h-5 w-5 ml-2 inline" />"
                </a>
                <a,
href=""tel":+13024640950""
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors text-center""
                >
                  Call Now
                </a>
            {/* CTA Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>"
              <p className="text-gray-600 mb-8">"
                Contact us today for a free consultation and discover how our AI solutions,
can transform your business.
              </p>
              <div className="space-y-4">"
                <a,
href=""mailto":contact@ziontechgroup.com""
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors text-center""
                >
                  Send us an Email
                  <ArrowRightIcon className="h-5 w-5 ml-2 inline" />"
                </a>
                <a,
href=""tel":+13024640950""
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors text-center""
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section (Placeholder) */}
        <div className="py-20 bg-white">"
          <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>"
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center text-gray-500 text-xl">"
              [Google Maps Embed Placeholder]
            </div>
          </div>
        </div>
        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">"
          <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center">"
            <h2 className="text-4xl "md":text-5xl font-bold text-white mb-6">"
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
              Let&apos;s discuss how Zion Tech Group can help you achieve your goals.
            </p>
            <Link,
href="/services""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold "hover":bg-blue-50 transition-all duration-200 shadow-lg "hover":shadow-xl transform "hover":-translate-y-1 inline-flex items-center""
            >
              View Our Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />"
            </Link>
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}