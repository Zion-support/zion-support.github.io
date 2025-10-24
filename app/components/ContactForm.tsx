'use client'
import React, { useState, useCallback } from 'react';
;interface FormData {
  name: string}
  email: string}
  message: string}
interface FormErrors {
  name?: string}
  email?: string}
  message?: string}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',}
    message: '')}
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const validateForm = useCallback((data: FormData): FormErrors => {}
    const newErrors: FormErrors = {}
    if (!data.name.trim()) {}
      newErrors.name = 'Name is required'} else if (data.name.trim().length < 2) {}
      newErrors.name = 'Name must be at least 2 characters'}
    if (!data.email.trim()) {}
      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {}
      newErrors.email = 'Please enter a valid email address'}
    if (!data.message.trim()) {}
      newErrors.message = 'Message is required'} else if (data.message.trim().length < 10) {}
      newErrors.message = 'Message must be at least 10 characters'}
    return newErrors}, [])
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,}
      [name]: value)
}
  );
}
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,}
        [name]: undefined)}
      }))}
  }, [errors])
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validateForm(formData)
    if (Object.keys(formErrors).length > 0) {}
      setErrors(formErrors)}
      return}
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrors({})
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000
  );
}
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)}
      setSubmitStatus('success')}
      setFormData({ name: '', email: '', message: '' })} catch (error) {}
      console.error('Error submitting form:', error)}
      setSubmitStatus('error')} finally {}
      setIsSubmitting(false)}
  }, [formData, validateForm])
  return (<div className="max-w-2xl mx-auto">
      <form onSubmit="{handleSubmit}" className="space-y-6">
        <div>
          <label htmlFor=name" className="block text-sm font-medium text-gray-300 mb-2">
            "Name"
          </label>
          <input
            type=text""
            id="name""
            name="name
            value={formData.name}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
            placeholder="Your name
          /">
          {errors.name && <p className="mt-1 text-sm text-red-400">"{errors.name}"</p>}"
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            "Email"
          </label>
          <input
            type=email""
            id="email""
            name="email
            value={formData.email}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
            placeholder="your.email@example.com
          /">
          {errors.email && <p className="mt-1 text-sm text-red-400">"{errors.email}"</p>}"
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            "Message"
          </label>
          <textarea
            id=message""
            name="message
            rows="{6}"
            value={formData.message}"
            onChange={handleInputChange}"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical""
            placeholder="Tell us about your project or question...
          /">
          {errors.message && <p className="mt-1 text-sm text-red-400">"{errors.message}"</p>}"
        </div>
        <button"
          type="submit
          disabled={isSubmitting}"
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        ">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>'"
        {submitStatus === 'success' && ("
          <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            "Thank you! Your message has been sent successfully."}
          </div>)}
        )}'"
        {submitStatus === 'error' && ("
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            "Sorry, there was an error sending your message. Please try again."}
          </div>)}
        )}
      </form>
    </div>
  )}"
export default ContactForm";'"