'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const errors ={}
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(formData)})
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ firstName: '', lastName: '', email: '', company: '', subject: '', message: '' })
        setFormErrors({})
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 50o00)
      } else {
        setFormErrors({ submit: result.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      details: 'contact@ziontechgroup.com',
      color: 'from-blue-50o0 to-cyan-50o0'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      details: '+1 (555) 123-4567',
      color: 'from-green-50o0 to-emerald-50o0'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      details: 'San Francisco, CA',
      color: 'from-purple-50o0 to-violet-50o0'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When we\'re available',
      details: 'Mon-Fri: 9AM-6PM PST',
      color: 'from-orange-50o0 to-red-50o0'
    }
  ]

  const services = [
    'AI Solutions & Machine Learning',
    'Cloud Infrastructure & Migration',
    'Cybersecurity & Compliance',
    'Digital Transformation',
    'Data Analytics & Business Intelligence',
    'IoT & Edge Computing Solutions',
    'Blockchain Technology',
    'Custom Software Development'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <Navigation  />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <info.icon className="w-6 h-6 text-white"  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-30o0 text-sm mb-2">{info.description}</p>
                <p className="text-blue-40o0 font-medium">{info.details}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card variant="glass" className="p-8 border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-60o0/20 border border-green-50o0/50 text-green-40o0 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2"  />
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {formErrors.submit && (
                <div className="mb-6 p-4 bg-red-60o0/20 border border-red-50o0/50 text-red-40o0 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2"  />
                  {formErrors.submit}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-30o0 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:border-transparent ${
                        formErrors.firstName ? 'border-red-50o0 focus:ring-red-50o0' : 'border-white/20 focus:ring-blue-50o0'
                      }`}
                      placeholder="John"
                     />
                    {formErrors.firstName && <p className="text-red-40o0 text-sm mt-1">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-30o0 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:border-transparent ${
                        formErrors.lastName ? 'border-red-50o0 focus:ring-red-50o0' : 'border-white/20 focus:ring-blue-50o0'
                      }`}
                      placeholder="Doe"
                     />
                    {formErrors.lastName && <p className="text-red-40o0 text-sm mt-1">{formErrors.lastName}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-30o0 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:border-transparent ${
                      formErrors.email ? 'border-red-50o0 focus:ring-red-50o0' : 'border-white/20 focus:ring-blue-50o0'
                    }`}
                    placeholder="john@company.com"
                   />
                  {formErrors.email && <p className="text-red-40o0 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-30o0 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
                    placeholder="Your Company"
                   />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-30o0 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:border-transparent ${
                      formErrors.subject ? 'border-red-50o0 focus:ring-red-50o0' : 'border-white/20 focus:ring-blue-50o0'
                    }`}
                    placeholder="How can we help you?"
                   />
                  {formErrors.subject && <p className="text-red-40o0 text-sm mt-1">{formErrors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-30o0 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                      formErrors.message ? 'border-red-50o0 focus:ring-red-50o0' : 'border-white/20 focus:ring-blue-50o0'
                    }`}
                    placeholder="Tell us about your project and how we can help..."
                   />
                  {formErrors.message && <p className="text-red-40o0 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <Button size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="w-5 h-5 mr-2"  />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Services & Info */}
            <div className="space-y-8">
              <Card variant="glass" className="p-8 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0"  />
                      <span className="text-gray-30o0">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="glass" className="p-8 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-40o0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-30o0 text-sm">Certified professionals with deep industry expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-40o0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                      <p className="text-gray-30o0 text-sm">Track record of successful implementations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-40o0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-30o0 text-sm">Round-the-clock technical assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-40o0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                      <p className="text-gray-30o0 text-sm">Technology that grows with your business</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer  />
    </div>
  )
}