import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get AI & IT Solutions Consultation</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com. Located at 364 E Main St STE 1008, Middletown DE 19709." />
        <meta name="keywords" content="contact Zion Tech Group, AI consultation, IT services contact, business technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Ready to transform your business with our AI and IT solutions? Get in touch with our expert team today 
                for a free consultation and discover how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                    </div>
                  </div>
                  <a href="tel:+13024640950" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9AM-6PM EST</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">Send us a detailed message</p>
                    </div>
                  </div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-xl font-semibold text-green-600 hover:text-green-800 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">Visit our office</p>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-gray-900">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </div>
                  <p className="text-sm text-gray-500 mt-2">United States</p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact Options</h3>
                <div className="space-y-3">
                  <a href="tel:+13024640950" className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-blue-600 mr-3">📞</span>
                    <span className="font-medium">Call Now</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-green-600 mr-3">✉️</span>
                    <span className="font-medium">Send Email</span>
                  </a>
                  <a href="https://ziontechgroup.com" className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-purple-600 mr-3">🌐</span>
                    <span className="font-medium">Visit Website</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-solutions">IT Solutions</option>
                    <option value="micro-saas">Micro SAAS</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• We'll review your message within 24 hours</li>
                  <li>• Our team will contact you to discuss your needs</li>
                  <li>• We'll provide a free consultation and proposal</li>
                  <li>• Together, we'll create a solution that fits your budget</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;