'use client'
import React, { useState, lazy, useCallback } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const ContactPage: React.FC = React.memo((props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''}
      })
    } catch (error) {
      setSubmitStatus('error');}
    } finally {
      setIsSubmitting(false);}
    }
  }
  const services = [
    'AI Project Manager',
    'AI Social Media Manager',
    'AI Analytics Dashboard',
    'AI Email Marketing',
    'AI Customer Support Bot',
    'AI Code Review Assistant',
    'AI Video Generator',
    'AI Voice Cloning',
    'AI Workflow Automation',
    'Machine Learning Solutions',
    'Natural Language Processing',
    'Computer Vision',
    'AI Automation',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Services',
    'IT Consulting',
    'Other'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50" aria-label="Skip to main content">Skip to main content</a><main className="container mx-auto px-4 py-16 pt-24" id="main-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Contact Us">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready to transform your business with cutting-edge AI and IT solutions? Get in touch with our experts today.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                We're here to help you transform your business with our innovative AI and IT solutions. 
                Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+13024640950" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                     aria-label="
                      +1 302 464 0950
                    ">
                      +1 302 464 0950
                    </a>
                    <p className="text-sm text-gray-400 mt-1" style={{ color: "#9CA3AF" }}>Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                     aria-label="
                      kleber@ziontechgroup.com
                    ">
                      kleber@ziontechgroup.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1" style={{ color: "#9CA3AF" }}>We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <address className="text-cyan-400 not-italic">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </address>
                    <p className="text-sm text-gray-400 mt-1" style={{ color: "#9CA3AF" }}>United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <div className="text-cyan-400">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span><span className="sr-only">Screen reader: </span>Proven track record with 300% ROI</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span><span className="sr-only">Screen reader: </span>24/7 support and monitoring</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span><span className="sr-only">Screen reader: </span>Bank-level security and compliance</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span><span className="sr-only">Screen reader: </span>Custom solutions tailored to your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-400 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-400"><span className="sr-only">Screen reader: </span>Thank you as any Your message has been sent successfully.</span>
              </div>}
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-400 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-red-400"><span className="sr-only">Screen reader: </span>Sorry, there was an error sending your message. Please try again.</span>
              </div>}
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <label htmlFor="name" className="sr-only">name</label><input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300"
                    placeholder="Your full name"
                  / id="name">
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <label htmlFor="email" className="sr-only">email</label><input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300"
                    placeholder="your@email.com"
                  / id="email">
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <label htmlFor="company" className="sr-only">company</label><input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300"
                    placeholder="Your company name"
                  / id="company">
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <label htmlFor="phone" className="sr-only">phone</label><input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  / id="phone">
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
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
               tabIndex="0">
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>}
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <section className="mt-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our experts are standing by to discuss your project and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
export default ContactPage