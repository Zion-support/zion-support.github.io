<<<<<<< HEAD
'use client'
=======
<<<<<<< HEAD
import React, {useState}from 'react';
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react';

interface FormData {name: string,}
=======
>>>>>>> origin/main
import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
<<<<<<< HEAD
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

const ContactForm: React.FC = () => {
=======
  name: string,
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/main
  email: string,
  company: string,
  phone: string,
  service: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  message: string,}interface FormStatus {type: 'idle' | 'loading' | 'success' | 'error';,}
  message: string,}const [formData, setFormData] = useState<FormData>({name: '',
=======
>>>>>>> origin/main
  message: string,
}

interface FormStatus {
<<<<<<< HEAD
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,
}

<<<<<<< HEAD
const ContactForm: React.FC = () => {
=======
=======
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,
}

  const [formData, setFormData] = useState<FormData>()
  })

  const [status, setStatus] = useState</FormData><FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent</FormStatus><HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData()
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus()
      })

      // Reset form
      setFormData()
      })
    } catch (error) {
      setStatus()
      })
    }
  }

  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,;}
}
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
  const [formData, setFormData] = useState<FormData>({
    name: '',
>>>>>>> origin/main
    email: '',
    company: '',
<<<<<<< HEAD
=======
    phone: '',
    service: '',
<<<<<<< HEAD
    message: '',})

  const [status, setStatus] = useState<FormStatus>({type: 'idle',
    message: '',})

<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const {name, value}}= e.target;
    setFormData(prev => ({)
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
=======
>>>>>>> origin/main
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
>>>>>>> origin/main
    setFormData(prev => ({
>>>>>>> origin/main
      ...prev,
<<<<<<< HEAD
      [name]: value
=======
<<<<<<< HEAD
      [name]: value;}));
  }

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {,
=======
  const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' ,)})

    try {// Simulate API call;}
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({)
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',})

      // Reset form;
      setFormData({)
=======
      [name]: value;}
>>>>>>> origin/main
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });

=======
      await new Promise(resolve => setTimeout(resolve, 2000))
<<<<<<< HEAD
      
      // TODO: Replace with actual API call
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
=======
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      })
>>>>>>> origin/main
      // Reset form
>>>>>>> origin/main
      setFormData({
>>>>>>> origin/main
        name: '',
        email: '',
        company: '',
<<<<<<< HEAD
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error (show error message, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your message. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    )
  }
=======
        phone: '',
        service: '',
        message: '',})
    } catch (error) {setStatus({)
        type: 'error',
<<<<<<< HEAD
        message: 'Sorry, there was an error sending your message. Please try again.'})
=======
        message: 'Sorry, there was an error sending your message. Please try again.';}
      })
>>>>>>> origin/main
    }
  }
  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
<<<<<<< HEAD
<<<<<<< HEAD
    'Other'
  ]
>>>>>>> origin/main

  return(<div className="max-w-2xl mx-auto p-6">)</div>
=======
    'Other';
  ];];];
  return (
<<<<<<< HEAD
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
              errors.name 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-600 focus:ring-cyan-500'
            }`}
            placeholder="Your full name"
            required
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </p>
          )}
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
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-600 focus:ring-cyan-500'
            }`}
            placeholder="your.email@example.com"
            required
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </p>
          )}
=======
    <div className="max-w-2xl mx-auto p-6">
>>>>>>> origin/main
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit}className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name;
=======
    'Other'
  ]

<<<<<<< HEAD
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
=======
<<<<<<< HEAD
>>>>>>> origin/main
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
=======
  return (
    </HTMLInputElement><div className="max-w-2xl mx-auto p-6">
      </div><h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        </form><div>
          </div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
>>>>>>> origin/main
          </label>
              <input;
                type="text"
                id="name"
                name="name"
                value={formData.name}onChange={handleChange}required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                placeholder="Your full name"
              />
        </div>

        <div>
              </div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
>>>>>>> origin/main
                Email Address *
<<<<<<< HEAD
              </label>
              <input;
=======
              <input
>>>>>>> origin/main
                type="email"
                id="email"
                name="email"
<<<<<<< HEAD
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
=======
                value={formData.email}onChange={handleChange}required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
>>>>>>> origin/main
                placeholder="your.email@company.com"
              />
            </div>
<<<<<<< HEAD
          </div>
=======
>>>>>>> origin/main

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
>>>>>>> origin/main
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company;
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            </div><div>
              </div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
>>>>>>> origin/main
              </label>
              <input;
                type="text"
                id="company"
                name="company"
<<<<<<< HEAD
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
=======
                value={formData.company}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
>>>>>>> origin/main
                placeholder="Your company name"
              />
            </div>

            <div>
<<<<<<< HEAD
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number;
=======
              </div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
>>>>>>> origin/main
              </label>
              <input;
                type="tel"
                id="phone"
                name="phone"
<<<<<<< HEAD
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
=======
                value={formData.phone}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
>>>>>>> origin/main
                placeholder="+1 (555) 123-4567"
              /></input>
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest;
            </label>
            <select;
              id="service"
=======
            </div><label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            </label>
            <select id="service"
>>>>>>> origin/main
              name="service"
<<<<<<< HEAD
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
<<<<<<< HEAD
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
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
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
=======
>>>>>>> origin/main
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status.type === 'loading' ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>

            ) : (
              <>
  </>
                <Send className="h-5 w-5" />
                <span>Send Message</span>

            </div>
=======
              value={formData.service}onChange={handleChange}className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
            >
              ) : (
                </select><div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
              <span className="text-sm font-medium">{status.message</span>}</span>
            </div>
          )}

<<<<<<< HEAD
          <button;
            type="submit"
            disabled={status.type === 'loading'}className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",
          >{status.type === 'loading' ? (</button>
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )} </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">,</div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
=======
          < type="submit"$2 />
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2" /></button>
            {status.type === 'loading' ? ()
            ) : ()
            )}
>>>>>>> origin/main
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
=======
          </div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            </div><div className="flex flex-col items-center space-y-2">
              </div><div className="p-3 bg-blue-100 rounded-full">
                </div><Phone className="h-6 w-6 text-blue-600" />
>>>>>>> origin/main
              </div>
              <div>
                </div><p className="font-semibold text-gray-900">Phone</p>
>>>>>>> origin/main
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
<<<<<<< HEAD
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
=======
              </div><div className="p-3 bg-green-100 rounded-full">
                </div><Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                </div><p className="font-semibold text-gray-900">Email</p>
>>>>>>> origin/main
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
<<<<<<< HEAD
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
=======
              </div><div className="p-3 bg-purple-100 rounded-full">
                </div><MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                </div><p className="font-semibold text-gray-900">Office</p>
>>>>>>> origin/main
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
>>>>>>> origin/main
        </div>

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
            className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            placeholder="Your company name"
          />
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
            rows={5}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical ${
              errors.message 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-600 focus:ring-cyan-500'
            }`}
            placeholder="Tell us about your project..."
            required
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
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
<<<<<<< HEAD
  );
};

export default ContactForm;
=======
  )
}
<<<<<<< HEAD

export default ContactForm
=======
export default ContactForm
                placeholder="+1 (555) 123-4567"
              />
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              )}
              <span className="text-sm font-medium">{status.message}
          )}
          <$2 />
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            {status.type === 'loading' ? (
              <React.Fragment>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...
            ) : (
              <React.Fragment>
                <Send className="h-5 w-5" />
                <span>Send Message
            )}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Phone
                <p className="text-sm text-gray-600">+1 (555) 123-4567
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Email
                <p className="text-sm text-gray-600">hello@ziontechgroup.com
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-purple-100 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-900">Office
                <p className="text-sm text-gray-600">New York, NY
  )
}
export default ContactForm</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></p></p></p></p></p></p>
>>>>>>> origin/main
>>>>>>> origin/main
