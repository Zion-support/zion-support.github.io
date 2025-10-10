<<<<<<< HEAD
'use client'
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
import Footer from '../components/Footer'
=======
import Footer from '../components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
<<<<<<< HEAD
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
=======
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
<<<<<<< HEAD
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and inquiries." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your business? Get in touch with our experts for a free consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">+1 302 464 0950</p>
                        <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                        <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Address</h3>
                        <p className="text-gray-300">
                          364 E Main St STE 1008<br />
                          Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Free consultation and assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>24/7 technical support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Proven track record with 500+ projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Custom solutions for your business</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
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
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default ContactPage
=======
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and explore 
            how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
      </section>
      <
      {/* Contact Form and Info *
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-12">
            {/* Contact Form *
            <div className="bg-white/5 backdrop-blur-sm border border-white
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message<
              {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-500/20 border border-green-500
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" 
                  <span className="text-green-400">Message sent successfully!<
                <)
              )};
              {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400">Failed to send message. Please try again.<
                <)
              )};
              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *
                    <
                    <input type="text"
                      id="name"
                      name="name"
                      value = { formData.name };
                      onChange = { handleChange };
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                  <
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    <
                    <input type="email"
                      id="email"
                      name="email"
                      value = { formData.email };
                      onChange = { handleChange };
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent"
                  <
                <
                <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    <
                    <input type="text"
                      id="company"
                      name="company"
                      value = { formData.company };
                      onChange = { handleChange };
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                  <
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    <
                    <input type="tel"
                      id="phone"
                      name="phone"
                      value = { formData.phone };
                      onChange = { handleChange };
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                  <
                <
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Service Interest
                  <
                  <select id="service"
                    name="service"
                    value = { formData.service };
                    onChange = { handleChange };
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent">
                    <option value="">Select a service<
                    <option value="ai-solutions">AI Solutions<
                    <option value="it-services">IT Services<
                    <option value="cloud-migration">Cloud Migration<
                    <option value="cybersecurity">Cybersecurity<
                    <option value="digital-transformation">Digital Transformation<
                  <
                <
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <
                  <textarea id="message"
                    name="message"
                    value = { formData.message };
                    onChange = { handleChange };
                    rows = { 5 };
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                    placeholder="Tell us about your project..."
                <
                <button
                  type="submit"
                  disabled = { isSubmitting };
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 disabled:opacity-50 disable,
    d:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                  {isSubmitting ? (<>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
                      Sending...
                    <)
                  ) : (<>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch<
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                <
              <
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white mb-1">Phone<
                    <p className="text-gray-300">+1-302-464-0950<
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST<
                  <
                <
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white mb-1">Email<
                    <p className="text-gray-300">kleber@ziontechgroup.com<
                    <p className="text-sm text-gray-400">We'll respond within 24 hours<
                  <
                <
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white mb-1">Office<
                    <p className="text-gray-300">364 E Main St STE 1008<
                    <p className="text-gray-300">Middletown, DE 19709<
                  <
                <
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours<
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM<
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM<
                    <p className="text-gray-300">Sunda,
    y: Closed<
                  <
                <
              <
            <
          <
        <
      <
      <Footer 
    <
  );
};
export default ContactPage;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
