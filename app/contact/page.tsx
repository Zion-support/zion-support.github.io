'use client'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
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
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact, AI solutions, IT consulting, support, consultation" />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" loading="lazy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" loading="lazy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" loading="lazy" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center" loading="lazy">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" loading="lazy">Get in</h1>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" loading="lazy">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" loading="lazy">Ready to transform your business? Let's discuss your project and explore</p>
            how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
      </section>
      {/* Contact Form and Info */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" loading="lazy">{/* Contact Form */}</div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8" loading="lazy">
              <h2 className="text-3xl font-bold text-white mb-6" loading="lazy">Send us a message</h2>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center" loading="lazy">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" loading="lazy" />
                  <span className="text-green-400" loading="lazy">Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg" loading="lazy">
                  <span className="text-red-400" loading="lazy">Failed to send message. Please try again.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6" loading="lazy">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" loading="lazy"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-slate-800" loading="lazy">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" loading="lazy"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Company Name
  </
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Phone Number
  </
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                    Service Interest
  </
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy">
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">{isSubmitting ? (</button>
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" loading="lazy"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" loading="lazy" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8" loading="lazy">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6" loading="lazy">Get in touch</h2>
                <p className="text-gray-300 mb-8" loading="lazy">We're here to help you succeed. Reach out to us through any of the channels below,</p>
                  and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-6" loading="lazy">
                <div className="flex items-start space-x-4" loading="lazy">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0" loading="lazy">
                    <Phone className="w-6 h-6 text-white" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1" loading="lazy">Phone</h3>
                    <p className="text-gray-300" loading="lazy">+1-302-464-0950</p>
                    <p className="text-sm text-gray-400" loading="lazy">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" loading="lazy">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0" loading="lazy">
                    <Mail className="w-6 h-6 text-white" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1" loading="lazy">Email</h3>
                    <p className="text-gray-300" loading="lazy">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400" loading="lazy">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" loading="lazy">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0" loading="lazy">
                    <MapPin className="w-6 h-6 text-white" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1" loading="lazy">Office</h3>
                    <p className="text-gray-300" loading="lazy">364 E Main St STE 1008</p>
                    <p className="text-gray-300" loading="lazy">Middletown, DE 19709</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" loading="lazy">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0" loading="lazy">
                    <Clock className="w-6 h-6 text-white" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1" loading="lazy">Business Hours</h3>
                    <p className="text-gray-300" loading="lazy">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300" loading="lazy">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300" loading="lazy">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default ContactPage
