import React, { useState } from 'react'.
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react'.

interface FormData {name: string,}
  message: string,}interface FormStatus {type: 'idle' | 'loading' | 'success' | 'error';,}'
  message: string,}const [formData, setFormData] = useState<FormData>({name: '',
  type: 'idle' | 'loading' | 'success' | 'error';'
  message: string,
}

const ContactForm: React.FC = () => {
    message: '',})

  const [status, setStatus] = useState<FormStatus>({type: 'idle',
    message: '',})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const {name, value}}= e.target.
    setFormData(prev => ({)
      [name]: value;})).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault().
    setIsSubmitting(true).

    try {
      // Simulate API call.
      await new Promise((resolve) => setTimeout(resolve, 1000)).
      setIsSubmitted(true).
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      }).
    } catch (error) {
      } finally {
      setIsSubmitting(false).
    }
  };

  if (isSubmitted) {
    return (
  }

  const handleSubmit = async (e: React.FormEvent) => {,
      await new Promise(resolve => setTimeout(resolve, 2000)).

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.
      }).

        message: 'Sorry, there was an error sending your message. Please try again.'})
    'Other'
  ]

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company.
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number.
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
              ))}
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required.
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          {status.message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />"
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
          <button.
            type="submit"
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...
            ) : (
              <React.Fragment>
                <Send className="h-5 w-5" />
