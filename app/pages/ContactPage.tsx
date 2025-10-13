import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
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
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs. Contact our experts for a free consultation." />
        <meta name="keywords" content="contact, consultation, AI solutions, IT services, support, Zion Tech Group" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1-302-464-0950</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Within 24 Hours</p>
              <p className="text-sm text-gray-400">Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-xl text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto"></div>
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
                          value={formData.name}
                          onChange={handleInputChange}
                          required
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
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
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
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
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Free Consultation</h4>
                        <p className="text-gray-300 text-sm">No obligation assessment of your needs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                        <p className="text-gray-300 text-sm">4+ years of experience in AI and IT solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Fast Response</h4>
                        <p className="text-gray-300 text-sm">We respond to all inquiries within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Custom Solutions</h4>
                        <p className="text-gray-300 text-sm">Tailored solutions for your specific business needs</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-purple-100 mb-6">
                    Don't wait to transform your business. Contact us today for a free consultation 
                    and discover how our technology solutions can drive your success.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📞 Call: +1-302-464-0950</p>
                    <p>✉️ Email: kleber@ziontechgroup.com</p>
                    <p>⏰ Response: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}