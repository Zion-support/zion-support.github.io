'use client'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const ContactPage: React.FC = () => {
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
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;contact, AI solutions, IT consulting, support, consultation&quot; />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse&quot; /></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse&quot; style={{ animationDelay: '1s' }} /></div>
        <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
          <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
            Get in
            <span className=&quot;block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
              Touch

          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
            Ready to transform your business? Let's discuss your project and explore
            how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
      </section>
      {/* Contact Form and Info */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;></div>
            {/* Contact Form */}
            <div className=&quot;bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8&quot;></div>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Send us a message</h2>
              {submitStatus === 'success' && (
                <div className=&quot;mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center&quot;></div>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-2&quot; />
                  <span className=&quot;text-green-400&quot;>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className=&quot;mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg&quot;></div>
                  <span className=&quot;text-red-400&quot;>Failed to send message. Please try again.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
                  <div></div>
                    <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Service Interest
                    </label>
                    <select
                      id=&quot;service&quot;
                      name=&quot;service&quot;
                      value={formData.service}
                      onChange={handleInputChange}
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                    >
                      <option value=&quot;">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className=&quot;bg-slate-800&quot;>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div></div>
                    <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Message *
                    </label>
                    <textarea
                      id=&quot;message&quot;
                      name=&quot;message&quot;
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className=&quot;w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none&quot;
                      placeholder=&quot;Tell us about your project...&quot;
                    />
                  </div>
                  <div></div>
                    <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Email Address *
                    </label>
                    <input
                      type=&quot;email&quot;
                      id=&quot;email&quot;
                      name=&quot;email&quot;
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className=&quot;w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                    />
                  </div>
                </div>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
                  <div></div>
                    <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Company Name

                    <input
                      type=&quot;text&quot;
                      id=&quot;company&quot;
                      name=&quot;company&quot;
                      value={formData.company}
                      onChange={handleChange}
                      className=&quot;w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                    />
                  </div>
                  <div></div>
                    <label htmlFor=&quot;phone&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Phone Number

                    <input
                      type=&quot;tel&quot;
                      id=&quot;phone&quot;
                      name=&quot;phone&quot;
                      value={formData.phone}
                      onChange={handleChange}
                      className=&quot;w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                    />
                  </div>
                </div>
                <div></div>
                  <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Service Interest

                  <select
                    id=&quot;service&quot;
                    name=&quot;service&quot;
                    value={formData.service}
                    onChange={handleChange}
                    className=&quot;w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;>
                    <option value=&quot;">Select a service</option>
                    <option value=&quot;ai-solutions&quot;>AI Solutions</option>
                    <option value=&quot;it-services&quot;>IT Services</option>
                    <option value=&quot;cloud-migration&quot;>Cloud Migration</option>
                    <option value=&quot;cybersecurity&quot;>Cybersecurity</option>
                    <option value=&quot;digital-transformation&quot;>Digital Transformation</option>
                  </select>
                </div>
                <div></div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Message *
                  </label>
                  <textarea
                    id=&quot;message&quot;
                    name=&quot;message&quot;
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className=&quot;w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                    placeholder=&quot;Tell us about your project...&quot;
                  />
                </div>
                <button
                  type=&quot;submit&quot;
                  disabled={isSubmitting}
                  className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center&quot;>
                  {isSubmitting ? (
                    <>
                      <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot;></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className=&quot;w-5 h-5 mr-2&quot; />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className=&quot;space-y-8&quot;></div>
              <div></div>
                <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Get in touch</h2>
                <p className=&quot;text-gray-300 mb-8&quot;>
                  We're here to help you succeed. Reach out to us through any of the channels below,
                  and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className=&quot;space-y-6&quot;></div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Phone className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Phone</h3>
                    <p className=&quot;text-gray-300&quot;>+1-302-464-0950</p>
                    <p className=&quot;text-sm text-gray-400&quot;>Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Mail className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Email</h3>
                    <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com</p>
                    <p className=&quot;text-sm text-gray-400&quot;>We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <MapPin className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Office</h3>
                    <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008</p>
                    <p className=&quot;text-gray-300&quot;>Middletown, DE 19709</p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Clock className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Business Hours</h3>
                    <p className=&quot;text-gray-300&quot;>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className=&quot;text-gray-300&quot;>Saturday: 10:00 AM - 4:00 PM</p>
                    <p className=&quot;text-gray-300&quot;>Sunday: Closed</p>
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
</textarea>
</label>
</label>
</label>
</span>
</HTMLInputElement>