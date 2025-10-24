'use client'

import React, { useState, useCallback } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, Building, Globe, MessageCircle } from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',}
    message: '',}
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, _value } = e.target
    setFormData(prev => ({
      ...prev,}
      [name]: _value}
    }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',}
        message: '',}
      })
    } catch (_error) {
      setSubmitStatus('error')}
    } finally {
      setIsSubmitting(false)}
    }
  }

  const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ]

  const contactInfo = [,
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',}
      description: 'Mon-Fri 9AM-6PM EST',}
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',}
      description: 'We respond within 24 hours',}
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',}
      description: 'Visit our office',}
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
  ]

  return();
    <div className="accessibility-enhanced"></div>
      <div className="accessibility-enhanced"></div>
        {/* Header */
        <div className="accessibility-enhanced"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6"></h1>
            Get in}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">}
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore 
            how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
        <div className="accessibility-enhanced"></div>
          {/* Contact Form */
          <div className="accessibility-enhanced"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            {submitStatus === 'success' && (
              <div className="accessibility-enhanced"></div>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )
            
            {submitStatus === 'error' && (
              <div className="accessibility-enhanced"></div>
                <span className="text-red-400">Failed to send message. Please try again.</span>
              </div>
            )}
}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="accessibility-enhanced"></div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="accessibility-enhanced"></div>
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      _value={formData.name
                      onChange={handleInputChange
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="accessibility-enhanced"></div>
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      _value={formData.email
                      onChange={handleInputChange
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
              <div className="accessibility-enhanced"></div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <div className="accessibility-enhanced"></div>
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      _value={formData.company
                      onChange={handleInputChange
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="accessibility-enhanced"></div>
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      _value={formData.phone
                      onChange={handleInputChange
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              <div></div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <div className="accessibility-enhanced"></div>
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="service"
                    _value={formData.service
                    onChange={handleInputChange
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option _value="">Select a service</option>}
                    {services.map((service) => (}
                      <option key={service} _value={service}>
                        {service
                      </option>
                    ))
                  </select>
                </div>
              </div>
              <div></div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <div className="accessibility-enhanced"></div>
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    _value={formData.message
                    onChange={handleInputChange
                    required
                    rows={6
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                    <div className="accessibility-enhanced"></div>
                    <span>Sending...</span>
                ) : (
                    <Send className="w-5 h-5" />}
                    <span>Send Message</span>}
                )}
              </button>
            </form>
          </div>
          {/* Contact Information */
          <div className="accessibility-enhanced"></div>
            <div></div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-lg text-gray-300 mb-8">
                We're here to help! Reach out to us through any of these channels 
                and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="accessibility-enhanced"></div>}
              {contactInfo.map((info, index) => (}
                <div key={index} className="flex items-center"></div>
                  <div className="accessibility-enhanced"></div>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title
                    </h3>
                    <p className="text-cyan-400 font-medium mb-1">
                      {info.details
                    </p>
                    <p className="text-gray-300 text-sm">
                      {info.description
                    </p>
                  </div>
                </div>
              ))
            </div>
          </div>
        </div>
      </div>
    </div>}
  )}
}

}

export default ContactPage;}