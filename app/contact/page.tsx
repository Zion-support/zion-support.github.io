import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Visit Us',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond quickly'
    }
  ]

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Services',
    'Micro SAAS',
    'Digital Transformation',
    '5G Implementation',
    'Other'
  ]
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Contact our experts today." />
        <meta name="keywords" content="contact, AI services, IT solutions, digital transformation, business consultation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contact <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Ready to transform your business? Get in touch with our experts and let's discuss your project.
            </p>
          </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (302) 464-0950</p>
                      <p className="text-sm text-gray-400">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-400">Emergency support available 24/7</p>
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Customized solutions for your business needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Expert guidance and technical support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing and flexible payment options</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-300">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-300">Thank you for your message. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-gray-800 text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
export default ContactPage;
