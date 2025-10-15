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
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI services, IT solutions, and micro SAAS applications. Get a free consultation and quote for your project." />
        <meta name="keywords" content="contact, consultation, quote, AI services, IT solutions, micro SAAS, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              CONTACT US
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Get in touch with our experts for a free consultation and personalized quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="futuristic-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-purple">
                Get Your Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services & Solutions</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="it-services">IT Services & Solutions</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="neon-button w-full py-4 text-lg font-bold glow-effect"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="futuristic-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">+1 302 464 0950</p>
                      <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">364 E Main St STE 1008</p>
                      <p className="text-gray-300">Middletown, DE 19709</p>
                      <p className="text-gray-400 text-sm">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Website</h3>
                      <p className="text-gray-300">https://ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">Visit our main website</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="futuristic-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6 neon-text-pink">
                  Why Choose Us?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <span className="text-gray-300">Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <span className="text-gray-300">Expert team with proven track record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <span className="text-gray-300">Competitive pricing with transparent costs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <span className="text-gray-300">Cutting-edge technology solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">How quickly can you start my project?</h3>
                <p className="text-gray-300">Most projects can begin within 1-2 weeks after initial consultation and contract signing. We'll provide a detailed timeline during our free consultation.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300">Yes, we provide comprehensive ongoing support and maintenance for all our solutions, including 24/7 technical support for critical issues.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What's included in the free consultation?</h3>
                <p className="text-gray-300">Our free consultation includes project assessment, technology recommendations, timeline estimation, and a detailed proposal with transparent pricing.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you work with small businesses?</h3>
                <p className="text-gray-300">Absolutely! We work with businesses of all sizes, from startups to enterprise companies, with solutions tailored to your specific needs and budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;