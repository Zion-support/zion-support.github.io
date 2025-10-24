<<<<<<< HEAD
"use client"
import React from "react";
import { MessageSquare, Mail, Phone, Send, CheckCircle   } from "lucide-react";
=======
'use client'
<<<<<<< HEAD
import React, { useState, useCallback } from 'react'
>>>>>>> origin/main
interface FormData {
<<<<<<< HEAD
name: "string;,email: "string
  phone: string;,company: "string
  message: string
"}
  servic,e: "string;}
=======
  name: string
  email: string
  message: string}
interface FormErrors {
  name?: string
  email?: string
=======
import React, { useState, useCallback } from 'react';
;interface FormData {
  name: string}
  email: string}
  message: string}
interface FormErrors {
  name?: string}
  email?: string}
>>>>>>> origin/main
  message?: string}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
<<<<<<< HEAD
    email: '',
    message: '')
=======
    email: '',}
    message: '')}
>>>>>>> origin/main
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
<<<<<<< HEAD
  const validateForm = useCallback((data: FormData): FormErrors => {
    const newErrors: FormErrors = {}
    if (!data.name.trim()) {
      newErrors.name = 'Name is required'} else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'}
    if (!data.email.trim()) {
      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address'}
    if (!data.message.trim()) {
      newErrors.message = 'Message is required'} else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'}
    return newErrors}, [])
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value)
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined)
      })    )
>>>>>>> origin/main
}
=======
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
>>>>>>> origin/main
  }, [errors])
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validateForm(formData)
<<<<<<< HEAD
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
=======
    if (Object.keys(formErrors).length > 0) {}
      setErrors(formErrors)}
>>>>>>> origin/main
      return}
    setIsSubmitting(true)
<<<<<<< HEAD
    //Simulate form submission
await new Promise(resolve => setTimeout(resolve",2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    //Reset form after 3 seconds
setTimeout(() => {
setIsSubmitted(false)
      setFormData({)
name: """",email: """",phone: """",company: """",message: """",service: """)
      "}), 3000)
const services = ["AI Solutions
    "Web Development
    "Mobile Development
    "Cloud Migration
    "Cybersecurity
    "Data Analytics
    "DevOps
    "Consulting
  ]
if(isSubmitted) {
return (</HTMLInputElement> <>

      </HTMLInputElement> <div className="[^"]*"> <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
    <h1 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
)
  )

return (<div className="[^"]*">
    <h1 className="text-2 xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6" />
    <div className="grid md: grid-cols-2 gap-6">
      <div />
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" />
Full Name*</label>
            </label>

            <input type="text" id="name",name="name
value={
formData.name
}
              onChange = {
handleChange
}"
              required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-cyan-500 focu",s: border-transparent" placeholder="Your full name
            / />

            <div />"
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" />
Email Address*</label>
            </label>

            <input type="email" id="email",name="email
value={
formData.email
}
              onChange = {
handleChange
}"
              required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="your@email.com"
            / />,<div className="grid, m,d: grid-cols-2 gap-6">
      <div />
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" />
Phone Number</label>
            </label>

            <input type="tel" id="phone" name="phone
value={formData.phone}"
              onChange = {handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-cyan-500 focu",s: border-transparent") placeholder="+1 (555) 123-4567
            / />

            <div />"
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" />
Company</label>
            </label>

            <input type="text" id="company" name="company
value={formData.company}"
              onChange = {handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-cyan-500 focu",s: border-transparent" placeholder="Your company name
            / />

      <div/ />
    </div>"
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" />
Service Interest</label>
          </label>

          <select id="service" name="service
value={formData.service}"
            onChange = {handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: "outline-none focus:ring-2 focus:ring-cyan-500 focu",s: border-transparent
           />
            <option value="">Select a service</option>
            {services.map((service,index) => (<option key = {index} value = {service} className="bg-gray-800" />
                {service}</option>
              </option>
            )
  )
}
          </select>
      <div/ />
    </div>
          <label htmlFor = "message" className="block text-sm font-medium text-gray-300 mb-2" />
Message*</label>
          </label>

          <textarea id="message" name="message
value={
formData.message
}
            onChange = {
handleChange
}
            required"
rows = {6} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-cyan-500 focu",s: border-transparent resize-none" placeholder="Tell us about your project or how we can help...
          / />
          </div>"
        <button type="submit
disabled={isSubmitting}"
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover: "from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disable",d: cursor-not-allowed
         />
          {isSubmitting?(</button> <>

    </div>,<div className="[^"]*">
Sending...
              </div>
    </>
  ) : (<> <Send className="w-5 h-5 mr-2" />

Send Message
      </Send>
    </div>
              </div>
    </>
  )
        </button>
=======
    setSubmitStatus('idle')
    setErrors({})
    try {
      // Simulate API call
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })} catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')} finally {
      setIsSubmitting(false    )
}
  }, [formData, validateForm])
  return (<div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea"
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
            placeholder="Tell us about your project or question..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>
        <button"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>'"
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            Thank you! Your message has been sent successfully.
          </div>)
        )}'"
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            Sorry, there was an error sending your message. Please try again.
          </div>)
            )
}
>>>>>>> origin/main
      </form>
    </div>)
}
export default ContactForm";'
=======
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
>>>>>>> origin/main
