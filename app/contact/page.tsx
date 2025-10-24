'use client';

import React, { memo } from 'react';
import EnhancedSEOHead from '../components/EnhancedSEOHead';
import { useForm } from '../hooks/useForm';

const ContactPage: React.FC = memo(() => {
  const {
    data: formData,
    isSubmitting,
    submitStatus,
    errors,
    handleInputChange,
    handleSubmit,
  } = useForm({
    initialData: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (data) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Form submitted:', data);
      }
    },
    validate: (data) => {
      const errors: Record<string, string> = {};
      if (!data.name.trim()) errors.name = 'Name is required';
      if (!data.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
      if (!data.message.trim()) errors.message = 'Message is required';
      return errors;
    },
  });

  return (
    <>
      <EnhancedSEOHead
        title="Contact Us"
        description="Get in touch with Zion Tech Group for your AI and IT solution needs. We're here to help."
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Ready to transform your business with our AI and IT solutions? Get in touch with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                ✉️ Email Us
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (302) 464-0950</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Website</h3>
                    <p className="text-gray-600">https://ziontechgroup.com</p>
                    <p className="text-sm text-gray-500">Visit our online platform</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert AI and IT professionals
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom solutions for your business
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 support and monitoring
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Services</h3>
                <p className="text-gray-600 text-sm">Advanced AI solutions including chatbots, document processing, and predictive analytics</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600 text-sm">Scalable cloud solutions and infrastructure management for modern businesses</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Solutions</h3>
                <p className="text-gray-600 text-sm">Comprehensive technology services including development, security, and support</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS</h3>
                <p className="text-gray-600 text-sm">Innovative micro software solutions designed to solve specific business challenges</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">Advanced security solutions to protect your digital assets and infrastructure</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-gray-600 text-sm">Transform your data into actionable insights with advanced analytics and visualization</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start my project?</h3>
                <p className="text-gray-600">Most projects can begin within 1-2 weeks of contract signing, depending on complexity and current workload.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive ongoing support and maintenance for all our solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you work with our existing systems?</h3>
                <p className="text-gray-600">Absolutely! We specialize in integrating with existing systems and can work with most technologies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What industries do you serve?</h3>
                <p className="text-gray-600">We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, and more.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide training for our team?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive training programs to ensure your team can effectively use our solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your pricing model?</h3>
                <p className="text-gray-600">We offer flexible pricing models including project-based, monthly subscriptions, and custom enterprise solutions.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;