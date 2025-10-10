'use client';
import React from 'react';
'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {;
  Phone,;
  Mail,;
  MapPin,;
  Clock,;
  Send,;
  CheckCircle;}
} from 'lucide-react';
const ContactPage: React.FC = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    ;

const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;}
    }));
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        budget: '',;
        timeline: '',;
        message: '';}
      });
    } catch (error) {;
      setSubmitStatus('error');}
    } finally {;
      setIsSubmitting(false);}
    }
  };
  const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ];
const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
    }
  ];
return (</HTMLInputElement>
    <React.Fragment></React>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." /></meta>
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
      </meta>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4">
          {/* Header */}</div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Get in</h1>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Touch
  </
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore 
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}</div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle className="w-5 h-5 text-green-400" /></CheckCircle>
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /></User>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                    </input>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /></Mail>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                    </input>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
  </
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /></Building>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your company"
                      />
                    </input>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
  </
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /></Phone>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </input>
                  </div>
                </div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
  </
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /></Globe>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"></select>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>;
                      ))}
                    </select>
                  </div>
                </div>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" /></MessageCircle>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                  {isSubmitting ? (</button>
                    <React.Fragment></React>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React>
                      <Send className="w-5 h-5" /></Send>
                      <span>Send Message</span>
                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8"></div>
              <div></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of these channels 
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8"></div>
                <div></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Phone className="w-6 h-6 text-white" />
                    </Phone>
                    <div></div>
<h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>;
                      <p className="text-cyan-400 font-medium mb-1">;
                        {info.details}
                      </p>
                      <p className;

export default ContactPage
  </textarea>
  </p>
  </label>
  </label>
  </span>
  </HTMLInputElement>
