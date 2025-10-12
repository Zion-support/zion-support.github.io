import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: 'Phone',
      details: ['+1 (302) 464-0950', 'Mon-Fri 9AM-6PM EST'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: 'Email',
      details: ['kleber@ziontechgroup.com', 'Response within 24 hours'],
      action: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6 text-pink-400" />,
      title: 'Office',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      action: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM-6PM', 'Saturday: 10AM-4PM EST'],
      action: 'Schedule Call'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Fast Response',
      description: 'Get a response within 24 hours, guaranteed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Secure & Confidential',
      description: 'Your information is protected with enterprise-grade security.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Expert Team',
      description: 'Work with certified professionals and industry experts.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.'
    }
  ]
=======
    subject: '',
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Email',
      details: 'contact@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm PST'
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-400" />,
      title: 'Office',
      details: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ]

  const services = [
    'AI Content Generation',
    'AI Chatbot Builder',
    'Cloud Services',
    'Cybersecurity Solutions',
    '5G Implementation',
    'Data Analytics',
    'Web Development',
    'Mobile Development'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <Helmet>
          <title>Thank You - Zion Tech Group</title>
          <meta name="description" content="Thank you for contacting Zion Tech Group. We'll get back to you soon." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl p-12 border border-green-500/30">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-lg text-gray-300 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', company: '', subject: '', message: '' })
              }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help with your AI and IT needs." />
        <meta name="keywords" content="contact, support, AI services, IT consulting, help" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts today." />
        <meta name="keywords" content="contact, AI solutions, IT services, consultation, support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                  <option>Select Service</option>
                  <option>AI Solutions</option>
                  <option>IT Services</option>
                  <option>Consultation</option>
                  <option>Support</option>
                </select>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📞</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (302) 464-0950</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI and IT solutions 
            can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Send us a Message
            </h2>
            
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="5g-solutions">5G Solutions</option>
                    <option value="consultation">Consultation</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
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
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-300 text-sm mb-4">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="flex items-center text-cyan-400 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Mon-Fri 9:00 AM - 6:00 PM PST
=======
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
};

export default ContactPage;
