import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, User, Building, FileText, Calendar, Zap, Shield, Globe, Award, Star, TrendingUp, Users, Brain, Cpu, Rocket, Target, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'AI Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'Mobile Development',
    'Web Development',
    'Data Analytics',
    '5G Implementation',
    'Micro SaaS',
    'DevOps',
    'System Integration',
    'Other'
  ]

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Not sure yet'
  ]

  const urgencyLevels = [
    { value: 'low', label: 'Low - Planning for future', color: 'text-green-400' },
    { value: 'normal', label: 'Normal - Within 3 months', color: 'text-blue-400' },
    { value: 'high', label: 'High - Within 1 month', color: 'text-orange-400' },
    { value: 'urgent', label: 'Urgent - ASAP', color: 'text-red-400' }
  ]

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

  return (
    <>
      <Helmet>
        <title>Contact Zion Tech Group - Get Your Free Consultation Today</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Free consultation, 24/7 support, and expert guidance. Call +1 (302) 464-0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT services contact, technology consultation, free consultation, business transformation, Delaware tech company" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Zion Tech Group - Get Your Free Consultation Today" />
        <meta property="og:description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Free consultation, 24/7 support, and expert guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:image" content="https://ziontechgroup.com/contact-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Zion Tech Group - Get Your Free Consultation Today" />
        <meta name="twitter:description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Free consultation, 24/7 support, and expert guidance." />
        <meta name="twitter:image" content="https://ziontechgroup.com/contact-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Zion Tech Group",
            "description": "Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Free consultation, 24/7 support, and expert guidance.",
            "url": "https://ziontechgroup.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-464-0950",
                  "contactType": "customer service",
                  "email": "kleber@ziontechgroup.com",
                  "availableLanguage": "English",
                  "areaServed": "US"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <MessageCircle className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Let's Build the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Future Together
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Get a free consultation with our experts and discover how we can help you achieve your goals.
              <br />
              <span className="text-cyan-400 font-semibold">Your success story starts here.</span>
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Send us a <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Message</span>
                  </h2>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized solution.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}

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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="John Doe"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Acme Corp"
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
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-gray-800 text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range} className="bg-gray-800 text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {urgencyLevels.map((level, index) => (
                        <label key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 focus:ring-cyan-500"
                          />
                          <span className={`text-sm ${level.color}`}>{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Prefer to reach out directly? We're here to help and always happy to chat about your project.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-300">{detail}</p>
                            ))}
                          </div>
                          <button className="mt-3 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                            {info.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          {reason.icon}
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1">{reason.title}</h4>
                        <p className="text-xs text-gray-300">{reason.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">How quickly can you start my project?</h3>
                  <p className="text-gray-300">Most projects can begin within 1-2 weeks of contract signing. We'll provide a detailed timeline during our initial consultation.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Do you offer ongoing support?</h3>
                  <p className="text-gray-300">Yes! We provide 24/7 support and maintenance packages to ensure your solutions continue to perform optimally.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">What's included in the free consultation?</h3>
                  <p className="text-gray-300">A comprehensive analysis of your needs, technology recommendations, project scope, timeline, and cost estimates.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Do you work with small businesses?</h3>
                  <p className="text-gray-300">Absolutely! We work with businesses of all sizes, from startups to enterprise corporations.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">What technologies do you specialize in?</h3>
                  <p className="text-gray-300">AI/ML, cloud computing, cybersecurity, mobile development, web development, and emerging technologies like 5G and IoT.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">How do you ensure data security?</h3>
                  <p className="text-gray-300">We follow industry best practices, use enterprise-grade security tools, and maintain compliance with major security standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Get <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Started?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Don't wait to transform your business. Get your free consultation today and discover 
                    how our technology solutions can drive your success.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a 
                      href="tel:+13024640950" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}