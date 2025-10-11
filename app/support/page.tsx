'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, ArrowRight, Clock, CheckCircle, Users, Shield } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  })

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our consultation form or call us directly. We\'ll schedule a free consultation to understand your needs and provide a tailored solution.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern web technologies (React, Node.js, Python, etc.). We stay current with the latest technologies to provide cutting-edge solutions.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive support packages including 24/7 monitoring, regular maintenance, and technical support. Our support team is always available to help you with any issues or questions.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs to help your team understand and effectively use the solutions we implement. This includes documentation, video tutorials, and hands-on training sessions.'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly consulting, and ongoing support contracts. We work with you to find the pricing structure that best fits your budget and needs.'
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: '24/7 Emergency Support',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Mon-Fri 9AM-6PM PST',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM PST',
      responseTime: 'Within 2 minutes'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Support ticket submitted:', formData)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help! Get the support you need to make the most of our services.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300">Choose your preferred support channel</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
                  <channel.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                  <div className="text-sm text-gray-400 mb-2">{channel.hours}</div>
                  <div className="text-sm text-gray-400">Response: {channel.responseTime}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Ticket Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Submit a Support Ticket</h2>
              <p className="text-xl text-gray-300">Describe your issue and we'll get back to you quickly</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="Brief description of your issue"
                  />
                </div>
                
                <div>
                  <label htmlFor="priority" className="block text-white mb-2">Priority</label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                  placeholder="Please provide detailed information about your issue..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
              >
                Submit Ticket
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-white font-semibold">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-cyan-400" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status Page */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">System Status</h2>
            <p className="text-xl text-gray-300 mb-8">Check the current status of our services</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="h-8 w-8 text-green-400 mr-2" />
                  <span className="text-white font-semibold">All Systems Operational</span>
                </div>
                <p className="text-gray-300 text-sm">All services are running normally</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-green-400 mr-2" />
                  <span className="text-white font-semibold">99.9% Uptime</span>
                </div>
                <p className="text-gray-300 text-sm">Last 30 days</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="h-8 w-8 text-green-400 mr-2" />
                  <span className="text-white font-semibold">Security Status</span>
                </div>
                <p className="text-gray-300 text-sm">All systems secure</p>
              </div>
            </div>
            
            <button className="mt-8 text-cyan-400 hover:text-cyan-300 flex items-center mx-auto">
              View Detailed Status Page
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SupportPage;