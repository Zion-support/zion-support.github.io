'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react'

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
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, USA'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      description: '24/7 Support Available'
    }
  ]

  const services = [
    'AI Services',
    'IT Services',
    'Micro SaaS',
    '5G Solutions',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Custom Development',
    'Consulting'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Contact Zion Tech Group - Get in Touch for AI and IT Solutions"
        description="Contact Zion Tech Group for AI solutions, micro SaaS services, and IT consulting. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact us, AI solutions, IT services, micro SaaS, consulting, support"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              📞 Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our team of experts for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">{info.title}</h3>
                <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800 text-white">
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
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-300 text-sm">15+ years of experience in AI and IT solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-300 text-sm">Round-the-clock assistance for all your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Custom Solutions</h4>
                      <p className="text-gray-300 text-sm">Tailored solutions for your specific business requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                      <p className="text-gray-300 text-sm">500+ successful projects and 100+ happy clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
                <p className="text-gray-300 mb-6">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent matters, please call us directly.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-medium">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-medium">kleber@ziontechgroup.com</span>
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
