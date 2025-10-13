import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

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
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const services = [
    'AI Solutions',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Digital Transformation',
    'Micro SaaS',
    '5G Solutions',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact us, consultation, AI solutions, IT services, support, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology?
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Get in touch with our team of experts for a free consultation and discover 
              how our AI and IT solutions can drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
              <p className="text-gray-300 text-lg">+1-302-464-0950</p>
              <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300 text-lg">Middletown, DE</p>
              <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
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
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Free Consultation</h4>
                      <p className="text-gray-300 text-sm">Get expert advice on your project at no cost</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Fast Response</h4>
                      <p className="text-gray-300 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Proven Results</h4>
                      <p className="text-gray-300 text-sm">50+ successful projects with 99% client satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Ongoing Support</h4>
                      <p className="text-gray-300 text-sm">Comprehensive support throughout your project lifecycle</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Saturday: 10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Sunday: Closed</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Emergency support available 24/7 for existing clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}