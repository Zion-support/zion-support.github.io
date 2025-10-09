'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <>
      <SEOOptimizer
        title="Contact Zion Tech Group - Get Your Free AI & IT Consultation"
        description="Contact Zion Tech Group for expert AI and IT solutions. Get a free consultation and discover how we can transform your business with cutting-edge technology."
        keywords={['contact us', 'free consultation', 'AI solutions', 'IT services', 'business transformation', 'technology consulting']}
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your business with cutting-edge AI and IT solutions? 
                  Let's discuss your project and explore the possibilities together.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="cyber-card p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                      <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                      <p className="text-red-400">Sorry, there was an error sending your message. Please try again or call us directly.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          placeholder="(555) 123-4567"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="it-services">IT Services</option>
                        <option value="micro-saas">Micro SAAS</option>
                        <option value="quantum-computing">Quantum Computing</option>
                        <option value="consultation">Free Consultation</option>
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
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cyber-button text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-lg text-gray-300 mb-8">
                      Ready to transform your business? We're here to help. Reach out to us through any of the channels below, 
                      and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="cyber-card p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Phone</h3>
                          <p className="text-cyan-400 font-medium">(302) 464-0950</p>
                          <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="cyber-card p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Email</h3>
                          <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                          <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="cyber-card p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Address</h3>
                          <p className="text-cyan-400 font-medium">Middletown, DE</p>
                          <p className="text-gray-400 text-sm">364 E Main St STE 1008, Middletown, DE 19709</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+13024640950"
                        className="block w-full cyber-button text-center py-3"
                      >
                        Call Now
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                        className="block w-full cyber-button-secondary text-center py-3"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Quick answers to common questions about our services and process.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How quickly can you start my project?</h3>
                  <p className="text-gray-300">
                    Most projects can begin within 1-2 weeks of contract signing. We'll provide a detailed timeline 
                    during our initial consultation based on your specific requirements.
                  </p>
                </div>
                
                <div className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Do you offer free consultations?</h3>
                  <p className="text-gray-300">
                    Yes! We offer free 30-minute consultations to discuss your project, understand your needs, 
                    and provide initial recommendations. No obligation required.
                  </p>
                </div>
                
                <div className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">What's your typical project timeline?</h3>
                  <p className="text-gray-300">
                    Project timelines vary based on complexity. Simple AI integrations can take 2-4 weeks, 
                    while comprehensive digital transformations may take 3-6 months. We'll provide detailed 
                    timelines during planning.
                  </p>
                </div>
                
                <div className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Do you work with small businesses?</h3>
                  <p className="text-gray-300">
                    Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. 
                    Our Micro SAAS solutions are specifically designed for small to medium businesses.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;