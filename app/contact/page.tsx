'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
<<<<<<< HEAD
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const ContactPage: React.FC = () => {
=======
import { CheckCircle, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
=======
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
<<<<<<< HEAD

  const [status, setStatus] = useState({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
=======
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
<<<<<<< HEAD
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS Applications',
    'Cloud Services',
    '5G Implementation',
    'Digital Transformation',
    'Other'
  ]

>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
<<<<<<< HEAD
      details: 'info@ziontechgroup.com',
=======
      details: 'contact@ziontechgroup.com',
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Come say hello at our office'
<<<<<<< HEAD
    }
  ]
=======
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: 'PST timezone'
    }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Free consultation within 24 hours'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Custom solutions for your business'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Expert team with 10+ years experience'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: '24/7 support and maintenance'
    }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
    }, 3000)
  }

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Services',
    'Micro SAAS',
    'Digital Transformation',
    '5G Implementation',
    'Other'
  ]
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help with your AI and IT solutions needs. Contact us today for a consultation." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, IT services, consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-blue-400 text-lg mb-1">{info.details}</p>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Expert AI and IT professionals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Proven track record of success
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Custom solutions for your business
                  </li>
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Free consultation and custom solutions for your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss how our AI and IT solutions can drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 
                  status.type === 'error' ? 'bg-red-50 text-red-800' : 
                  'bg-blue-50 text-blue-800'
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status.type === 'loading' ? (
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
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-600 font-medium">{info.details}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.icon}
                      <span className="ml-3">{feature.text}</span>
                    </li>
                  ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                </ul>
              </div>
            </div>

<<<<<<< HEAD
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <ContactForm />
=======
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
                <p className="text-gray-600 mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <Link
                  to="/ai-services"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Explore our AI Services
                </Link>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait - let's discuss your project and see how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Email Us Now
            </a>
            <a
              href="tel:+15551234567"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
=======
    </div>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations and project inquiries." />
        <meta name="keywords" content="contact, consultation, AI services, IT services, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how our AI and IT solutions can drive your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us for consultations, project inquiries, or any questions about our services.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (302) 464-0950</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                    <p className="text-sm text-gray-400">United States</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Expert AI and IT Solutions
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support and Monitoring
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Proven Track Record
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Competitive Pricing
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
