import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9603

=======

>>>>>>> cursor/fix-errors-and-merge-to-main-e951
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-e951
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
<<<<<<< HEAD
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
=======
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      })

      // Reset form
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
<<<<<<< HEAD
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      })
    }
  }

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Solutions',
    'Cybersecurity',
    '5G Implementation',
    'Data Analytics',
    'Custom Development',
    'Mobile Solutions',
    'Digital Transformation',
    'Other'
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg flex items-center ${
          status.type === 'success' ? 'bg-green-500/20 text-green-300' :
          status.type === 'error' ? 'bg-red-500/20 text-red-300' :
          'bg-blue-500/20 text-blue-300'
        }`}>
          {status.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5 mr-2" />}
          {status.type === 'loading' && <div className="w-5 h-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />}
          {status.message}
        </div>
      )}

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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
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
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

<<<<<<< HEAD
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
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
=======
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 mr-2" />
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-white/20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center text-gray-300">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm">contact@ziontechgroup.com</span>
          </div>
          <div className="flex items-center justify-center text-gray-300">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">Innovation City, IC</span>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
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
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SaaS</option>
          <option value="cloud-services">Cloud Services</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
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
          rows={6}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Tell us about your project or how we can help you..."
        />
      </div>

      {status.type !== 'idle' && (
        <div className={`p-4 rounded-lg flex items-center ${
          status.type === 'success' ? 'bg-green-500/20 text-green-400' :
          status.type === 'error' ? 'bg-red-500/20 text-red-400' :
          'bg-blue-500/20 text-blue-400'
        }`}>
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
          ) : status.type === 'error' ? (
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 mr-3 flex-shrink-0 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {status.type === 'loading' ? (
          <>
            <div className="w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 ml-3" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm