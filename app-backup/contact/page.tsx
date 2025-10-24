import React, { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
"use client"
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
    company: "",
    service: ""
    message: ""})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target
    setFormData(prev => ({
  ...prev
      [name]: value
}))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // Form submitted successfully
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
    email: ""
        company: "",
    service: ""
        message: ""})
    }, 3000)
  }
  const contactInfo = [
    {
      icon: Mail,
    title: "Email Us"
      details: "hello@ziontechgroup.com",;
    description: "Send us an email and we&apos;ll respond within 24 hours"}
    {
      icon: Phone,
    title: "Call Us"
      details: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm EST"}
    {
      icon: MapPin,
    title: "Visit Us"
      details: "123 Tech Street, Silicon Valley, CA 94000",
    description: "Come say hello at our headquarters"}
  ]
  const services = [;
  "AI Solutions"
    "IT Services"
    "Micro SaaS Development"
    "Business Intelligence"
    "Consulting",
    "Other"
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and technology? Let&apos;s start the conversation.
          </p>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-4 mx-auto">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-emerald-600 font-medium mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-emerald-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you start a project?</h3>
              <p className="text-gray-600">We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with small businesses?</h3>
              <p className="text-gray-600">Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable to meet your needs and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What technologies do you specialize in?</h3>
              <p className="text-gray-600">We specialize in AI/ML, cloud computing, web development, mobile apps, and data analytics. We stay current with the latest technologies and frameworks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after launch.</p>
            </div>
            </div>
          </div>
      </section>
    </div>
  )
}
export default ContactPage;