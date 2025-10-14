'use client'
import React, { useState } from 'react'
import {Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Award, TrendingUp, Shield} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import React from 'react'
const ContactPage: React.FC  = () => {
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react'
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message:   ,
$4})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const _handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent) =>
                {
    e.preventDefault(),
    // Here you would typically send the form data to your backend
    // console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() =>
                {
      setIsSubmitted(false)
      setFormData({}, 3000)
  const handleSubmit = async (e: React.FormEvent) =>
                {
    e.preventDefault()
    setIsSubmitting(true),
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  }
  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Development',
    'Other'
  ]
  const achievements = [
    { icon: Users, text: '100+ Happy Clients' },
    { icon: Award, text: '50+ Successful Projects' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
      <div className="text-center"></div>
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced contact solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover: bg-cyan-600 transition-colors"></a>
          Contact Us</span>
                </div>
  )
export default ContactPage,
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    'Custom Development',
    'Consulting',
    'Other'
  ]
  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'Not sure'
  ]
  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ]
  const offices = [
    {
      city: 'Middletown, DE',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      timezone: 'Eastern Time'
    },
    {
      city: 'San Francisco, CA',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      timezone: 'Pacific Time'
    },
    {
      city: 'London, UK',
      address: '456 Innovation Lane, London EC1A 4HD',
      phone: '+44 20 7946 0958',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      timezone: 'Greenwich Mean Time'
    }
  ]
  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprise organizations.'
    }
  ]
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
        <div className="max-w-2xl mx-auto text-center p-8"></div>
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
            <CheckCircle className="w-10 h-10 text-white" />
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!
          <p className="text-xl text-gray-300 mb-6"></p>
            Your message has been sent successfully. Our team will get back to you within 24 hours.
          <div className="space-y-4"></div>
            <p className="text-gray-400"></p>
              <strong>What happens next?
            <div className="space-y-2 text-left max-w-md mx-auto"></div>
              <div className="flex items-center space-x-3"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">We'll review your requirements
              <div className="flex items-center space-x-3"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Schedule a consultation call
              <div className="flex items-center space-x-3"></div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Provide a detailed proposal
          <div className="mt-8"></div>
            <$2 />
              href="/"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Back to Home</span>
                </div>
        </div>
                </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>
              Get In Touch
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
              Ready to transform your business with AI? Let's discuss your project and explore 
              how we can help you achieve your goals.
            <div className="flex flex-wrap justify-center gap-6"></div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium"></span>
                {contactInfo.phone}
                <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium"></span>
                {contactInfo.email}
      {/* Contact Form & Info */}
                <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
                {/* Contact Form */}
                <div className="bg-slate-800/50 rounded-lg p-8"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message
              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your full name"
                    />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Email Address *
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="your@email.com"
                    />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Company
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your company name"
                    />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Phone Number
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Service Interest
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"></select
>
                      <option value="">Select a service
                      {services.map((service, index) => (
                        <option key={index} value={service}></option>
                {service}
                      ))}
                <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Budget Range
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"></select
>
                      <option value="">Select budget range
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}></option>
                {range}
                      ))}
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Timeline
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"></select
>
                    <option value="">Select timeline
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}></option>
                {timeline}
                    ))}
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                <$2 />
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                {isSubmitting ? (
                    <React.Fragment></React.Fragment>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                  ) : (
                    <React.Fragment></React.Fragment>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                  )}
            {/* Contact Information */}
                <div className="space-y-8"></div>
              <div></div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information
                <div className="space-y-6"></div>
                  <div className="flex items-start space-x-4"></div>
                    <Phone className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div></div>
                      <div className="text-white font-medium"></div>
                {contactInfo.phone}
                <div className="text-gray-400 text-sm">Call us anytime
                  <div className="flex items-start space-x-4"></div>
                    <Mail className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div></div>
                      <div className="text-white font-medium"></div>
                {contactInfo.email}
                <div className="text-gray-400 text-sm">Email us
                  <div className="flex items-start space-x-4"></div>
                    <MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div></div>
                      <div className="text-white font-medium">Middletown, DE
                      <div className="text-gray-400 text-sm"></div>
                {contactInfo.address}
                <div className="flex items-start space-x-4"></div>
                    <Clock className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div></div>
                      <div className="text-white font-medium"></div>
                {contactInfo.hours}
                <div className="text-gray-400 text-sm">Business hours
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"></div>
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?
                <div className="space-y-3"></div>
                  <div className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">300% Average ROI
                  <div className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">99.9% Uptime Guarantee
                  <div className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">24/7 Support
                  <div className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Enterprise Security
              <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions
                <div className="space-y-3"></div>
                  <$2 />
                    href="/consultation"
                    className="block w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-center">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Schedule Free Consultation
                  <$2 />
                    href="/demo"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-colors text-center">
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Demo
      {/* Global Offices */}
                <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>
              Our Global Offices
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              We're here to serve you wherever you are in the world
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {offices.map((office, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                <h3 className="text-xl font-bold text-white mb-4"></h3>
                {office.city}
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm"></span>
                {office.address}
                <div className="flex items-center justify-center space-x-2"></div>
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm"></span>
                {office.phone}
                <div className="flex items-center justify-center space-x-2"></div>
                    <Mail className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm"></span>
                {office.email}
                <div className="flex items-center justify-center space-x-2"></div>
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm"></span>
                {office.hours}
                <div className="text-cyan-400 text-sm font-medium"></div>
                {office.timezone}
            ))}
      {/* FAQ Section */}
                <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>
              Frequently Asked Questions
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Common questions about our services and process
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6"></div>
                {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3"></h3>
                {faq.question}
                <p className="text-gray-300"></p>
                {faq.answer}
              ))}
  )
}
                </div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </span></span>
                </span></span>
                </span></span>
                </span></span>
                </span></span>
                </span></span>
                </span></a>
                </p></p>
                </p></p>
                </p></p>
                </p></h1>
                </h1></h1>
                </h2></h2>
                </h2></h2>
                </h3></h3>
                </h3></h3>
                </section></section>
                </section></section>;