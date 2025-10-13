import { ArrowRight, CheckCircle, Globe, Phone , Helmet  } from "lucide-react";
import { Link , useState  } from "react-router-dom"; origin/cursor/analyze-improve-and-deploy-application-0ff3
;
export default function ContactPage() {
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value;
    })
 origin/cursor/analyze-improve-and-deploy-application-0f1c;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function ContactPage() {
  return (
    </HTMLInputElement><React.Fragment> cursor/fix-errors-and-merge-to-main-f512;
      </React><Helmet /><title>Contact - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch with our experts." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><div className="container mx-auto px-4 py-20" /><div className="text-center mb-16" /><h1 className="text-5xl font-bold text-white mb-6">
              Contact Us</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your AI and IT solution needs.</p>
            </p>
          </div>
          <div className="max-w-4xl mx-auto" /><div className="bg-slate-800 rounded-lg p-8" /><h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Contact us today to discuss your project requirements.</p>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" /><div /><h3 className="text-xl font-bold text-white mb-4">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div /><h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                  <p className="text-gray-300">+1-302-464-0950</p>
                </div>
              </div>
            </div>
          </div>
        </div>
import React, { useState } from 'react';
import { Helmet , Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send, MessageSquare, Calendar, Users, Zap, Shield, Cloud, Code  } from "react-helmet-async";
 origin/cursor/analyze-improve-and-deploy-application-1507;
    </React.Fragment>
  );
};
export default ContactPage;
setSubmitStatus('idle')
    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
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
    'IT Services',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Custom Development',
    'Consulting',
    'Other'
  ]
  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Not sure'
  ]
  const urgencyLevels = [
    { value: 'low', label: 'Low - No rush', color: 'text-green-400' },
    { value: 'normal', label: 'Normal - Within 2 weeks', color: 'text-yellow-400' },
    { value: 'high', label: 'High - Within 1 week', color: 'text-orange-400' },
    { value: 'urgent', label: 'Urgent - ASAP', color: 'text-red-400' }
  ]
  return (
    <React.Fragment /><Helmet /><title>Contact Zion Tech Group - Get Your Free Consultation Today</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Get a free consultation with our experts." />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT services contact, technology consulting" />
        <meta property="og:title" content="Contact Zion Tech Group - Get Your Free Consultation Today" />
        <meta property="og:description" content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Get a free consultation with our experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 overflow-hidden" /><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /><div className="text-center" /><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Build Something;
                </h1><span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Together</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Get in touch with our experts for a free consultation.</p>
              </p>
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="py-20" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /><div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              </div><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /><h2 className="text-3xl font-bold text-white mb-6">Get Your Free Consultation</h2>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center" /><CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center" /><AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" /><div className="grid md:grid-cols-2 gap-6" /><div /><label className="block text-sm font-medium text-gray-300 mb-2" /><User className="inline h-4 w-4 mr-2" />
                        Full Name *
                      </label>
                      <input;
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-300 mb-2" /><Mail className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </label>
                      <input;
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6" /><div /><label className="block text-sm font-medium text-gray-300 mb-2" /><Phone className="inline h-4 w-4 mr-2" />
                        Phone Number;
                      </label>
                      <input;
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-300 mb-2" /><Building className="inline h-4 w-4 mr-2" />
                        Service Needed;
                      </label>
                      <select;
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                       /><option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-slate-800">
                            {service}</option>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6" /><div /><label className="block text-sm font-medium text-gray-300 mb-2" /><FileText className="inline h-4 w-4 mr-2" />
                        Project Budget;
                      </label>
                      <select;
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                       /><option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-slate-800">
                            {range}</option>
                          </option>
                        ))}
                      </select>
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-300 mb-2" /><Clock className="inline h-4 w-4 mr-2" />
                        Urgency Level;
                      </label>
                      <select;
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {urgencyLevels.map((level) => (
                          </select><option key={level.value} value={level.value} className="bg-slate-800">
                            {level.label}</option>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div /><label className="block text-sm font-medium text-gray-300 mb-2" /><MessageCircle className="inline h-4 w-4 mr-2" />
                      Project Details *
                    </label>
                    <textarea;
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required;
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>
                  <button;
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        </button><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                        Sending...
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        Send Message;
                        </React><Send className="ml-2 h-5 w-5" />
                      </React.Fragment>
                    )}
                  </button>
                </form>
 origin/cursor/analyze-improve-and-deploy-application-0f1c;
 origin/cursor/analyze-improve-and-deploy-application-1009;
 cursor/fix-errors-and-merge-to-main-f512
;