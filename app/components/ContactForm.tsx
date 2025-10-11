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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-4fca
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-4fca
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
<<<<<<< HEAD
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully.' 
      })
      
=======
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      })

>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
      // Reset form
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
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again.' 
=======
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
      })
    }
  }

  const services = [
<<<<<<< HEAD
    'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'Data Analytics',
=======
    'AI Services',
    'IT Services',
    'Cloud Solutions',
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
    'Cybersecurity',
    '5G Implementation',
    'Data Analytics',
    'Custom Development',
    'Mobile Solutions',
    'Digital Transformation',
    'Other'
  ]
<<<<<<< HEAD

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

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
                placeholder="your.email@example.com"
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
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
<<<<<<< HEAD
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us about your project..."
=======
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            />
          </div>
        </div>

<<<<<<< HEAD
          {status.message && (
            <div className={`flex items-center space-x-2 p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/30' 
                : status.type === 'error'
                ? 'bg-red-500/20 border border-red-500/30'
                : 'bg-blue-500/20 border border-blue-500/30'
            }`}>
              {status.type === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
              {status.type === 'error' && <AlertCircle className="h-5 w-5 text-red-400" />}
              <span className={`text-sm ${
                status.type === 'success' 
                  ? 'text-green-300' 
                  : status.type === 'error'
                  ? 'text-red-300'
                  : 'text-blue-300'
              }`}>
                {status.message}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {status.type === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>New York, NY</span>
            </div>
=======
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

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
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
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">
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
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

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
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm