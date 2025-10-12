'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, Star, Users, Globe, Shield, Zap } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      details: ['+1 (302) 464-0950'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: 'Email',
      details: ['kleber@ziontechgroup.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      description: 'Visit our headquarters'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      description: 'We\'re here to help you'
    }
  ]

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Migration',
    'Cybersecurity',
    'Mobile Development',
    'Micro SAAS',
    'Digital Transformation',
    '5G Implementation',
    'Other'
  ]

  const reasons = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Our experienced professionals are ready to help'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: 'Global Support',
      description: 'We serve clients worldwide with 24/7 support'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Personalized Service',
      description: 'Tailored solutions for your specific needs'
    }
  ]

  const stats = [
    { number: '24h', label: 'Response Time', icon: <Clock className="w-6 h-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch With Our Experts</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Call +1 (302) 464-0950 or email kleber@ziontechgroup.com. Located in Middletown, DE. Get free consultation today." />
        <meta name="keywords" content="contact Zion Tech Group, AI consultation, IT support, phone number, email, address, free consultation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Ready to transform your business with our AI and IT solutions? 
              Contact our experts for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Contact Information</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Multiple ways to reach our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a personalized solution for your business.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800 text-white">{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
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

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Here are some reasons why businesses trust us with their technology needs.
              </p>
              
              <div className="space-y-6 mb-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Don't wait! Contact us today for a free consultation and discover how our AI and IT solutions can transform your business.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Visit Our Office</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Located in the heart of Middletown, Delaware
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">364 E Main St STE 1008</p>
                      <p className="text-gray-300">Middletown, DE 19709</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">Interactive Map</p>
                  <p className="text-gray-500 text-sm">364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}