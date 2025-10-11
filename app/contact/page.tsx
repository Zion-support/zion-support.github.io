'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
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
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We respond within 24 hours'
    }
  ]

  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS',
    'Cloud Services',
    '5G Implementation',
    'Digital Transformation',
    'Custom Development',
    'Consulting'
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Free Consultation',
      description: 'Get expert advice on your technology needs at no cost'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed for your specific business needs'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and digital transformation. Free consultation available." />
        <meta name="keywords" content="contact, AI services, IT solutions, consultation, support, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Contact us today for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{info.details}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: '',
                        message: ''
                      })
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
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
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{benefit.title}</h4>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link to="/ai-services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/micro-saas-services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    Micro SAAS
                  </Link>
                  <Link to="/about" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    About Us
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Don't wait! Contact us today for a free consultation and discover how our AI and IT solutions can transform your business.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+13024640950" 
                    className="block w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Call +1 302 464 0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="block w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Email Us
                  </a>
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
