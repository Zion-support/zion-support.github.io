'use client'
import React, { useState, useCallback } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, Building, Globe, MessageCircle } from 'lucide-react'
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    budget: ''
    timeline: ''
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev
      [name]: value
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
        name: ''
        email: ''
        company: ''
        phone: ''
        service: ''
        budget: ''
        timeline: ''
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const services = [
    'AI Solutions'
    'Cloud Computing'
    'Mobile App Development'
    'Web Development'
    'Data Analytics'
    'Cybersecurity'
    'DevOps'
    'Consulting'
    'Other'
    ];
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone'
      details: '+1 (302) 464-0950'
      description: 'Mon-Fri 9AM-6PM EST'
        }
    {
      icon: Mail,
      title: 'Email'
      details: 'kleber@ziontechgroup.com'
      description: 'We respond within 24 hours'
        }
    {
      icon: MapPin,
      title: 'Address'
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801'
      description: 'Visit our office'
        }
    {
      icon: Clock,
      title: 'Business Hours'
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM'
      description: 'Eastern Time'
    }
    ];
  return (
    <div className="...">
      <div className="...">
        {/* Header */}
        <div className="...">
          <h1 className="...">
            Get in
            <span className="...">
              {' '}Touch
            </span>
          </h1>
          <p className="...">
            Ready to transform your business? Let's discuss your project and explore 
            how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>

        <div className="...">
          {/* Contact Form */}
          <div className="...">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="...">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="...">
                <span className="text-red-400">Failed to send message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="...">
              <div className="...">
                <div>
                  <label className="...">
                    Full Name *
                  </label>
                  <div className="...">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="...">
                    Email Address *
                  </label>
                  <div className="...">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="...">
                <div>
                  <label className="...">
                    Company
                  </label>
                  <div className="...">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="...">
                    Phone Number
                  </label>
                  <div className="...">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="...">
                  Service Interest
                </label>
                <div className="...">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="...">
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="...">
                  Message *
                </label>
                <div className="...">
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="...">
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

          {/* Contact Information */}
          <div className="...">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="...">
                We're here to help! Reach out to us through any of these channels 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="...">
              {contactInfo.map((info, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="...">
                      {info.title}
                    </h3>
                    <p className="...">
                      {info.details}
                    </p>
                    <p className="...">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactPage