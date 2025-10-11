<<<<<<< HEAD
'use client';
import React from 'react';
'use client';
import React, {useState, useCallback}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Phone,}
=======
'use client'
import React from 'react'
'use client'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    Phone,
>>>>>>> origin/main
  Mail,
<<<<<<< HEAD
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
=======
>>>>>>> origin/main

  MapPin,

  Clock,

  Send,

<<<<<<< HEAD
  CheckCircle;}} from 'lucide-react'
const ContactPage: React.FC = () => {,
    const [formData, setFormData] = useState({)
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
<<<<<<< HEAD
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
=======
    message: '',}})
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
  }, []);
<<<<<<< HEAD
const handleSubmit = async (e: React.FormEvent) => {,
=======
const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
>>>>>>> origin/main
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
<<<<<<< HEAD
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
=======
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
=======
  CheckCircle
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState()
  })
const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target
    setFormData()
    }))
  }, [])
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {
      // Simulate form submission,
>>>>>>> origin/main

      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData()
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
>>>>>>> origin/main
  }
const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',

<<<<<<< HEAD
    'Other';
  ];];];
const contactInfo = [
    {icon: Phone,
=======
    'Other'
  ]
  const contactInfo = [
    {
    icon: Phone,
>>>>>>> origin/main
      title: 'Phone',
      details: '+1 (302) 464-0950',
<<<<<<< HEAD
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

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
      </Helmet>

<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore 
=======
      description: 'Mon-Fri 9AM-6PM EST',},
    {icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',},
    {icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office',},
    {icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
<<<<<<< HEAD
      description: 'Eastern Time',}}
  ]
return(<>)
      <Helmet />
=======
      description: 'Eastern Time'
  }
    }
  ]
return (
    <>
      <Helmet>
<<<<<<< HEAD
>>>>>>> origin/main
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
=======
        </Helmet><title>Contact Us - Zion Tech Group | Get in Touch</title>
>>>>>>> origin/main
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
<<<<<<< HEAD
          {/* Header */} <div className="text-center mb-16"></div>
            <h1>Get in;</h1>
              <span>{' '</span>}Touch;
              </span>
            </h1>
            <p>Ready to transform your business? Let's discuss your project and explore;</p>
=======
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1>
              Get in</h1><span>
                {' '}Touch
              </span>
            </h1>
            <p>
              Ready to transform your business? Let's discuss your project and explore
>>>>>>> origin/main
>>>>>>> origin/main
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<<<<<<< HEAD

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
=======
<div className="grid grid-cols-1 lg: grid-cols-2 gap-12"></div>,
            {/* Contact Form */} <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
<<<<<<< HEAD
              {submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
<<<<<<< HEAD
                </div>})}
{submitStatus === 'error' && (;
=======
                </div>
  }
              )},
    {
    submitStatus === 'error' && (;
>>>>>>> origin/main
=======
              {
    submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle>
                  </CheckCircle><span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
  }
              )}
{
    submitStatus === 'error' && (
>>>>>>> origin/main
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>})}
<form>
<<<<<<< HEAD
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
=======
                </form><div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
>>>>>>> origin/main
                  <div />
                    <label>
                      Full Name *
                    </label>
                    <div className="relative"></div>
                      <User>
                      </User><input />
                  </div>
                  <div / /></div>
                    <label></label>
                      Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail>
                      </Mail><input />
                  </div>
                </div>
<<<<<<< HEAD
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
                  <div />
                    <label>
                      Company;
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" / /></div>
                  <div / /></div>
                    <label></label>
                      Company
>>>>>>> origin/main
                    </label>
                    <div className="relative"></div>
                      <Building>
                      </Building><input />
                  </div>
<<<<<<< HEAD
                  <div />
                    <label>
                      Phone Number;
=======
                  <div / /></div>
                    <label></label>
                      Phone Number
>>>>>>> origin/main
                    </label>
                    <div className="relative"></div>
                      <Phone>
                      </Phone><input />
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Service Interest,
                  </label>
                  <div className="relative"></div>
                    <Globe>
<<<<<<< HEAD
                    <select>
                      <option value="">Select a service</option>
                      {services.map((service) => (} <option>

                          {service} </option>
=======
                    </Globe><select>
                      </select><option value="">Select a service</option>
                      {
    services.map((service) => ()
>>>>>>> origin/main
                      ))}

                    </select>
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle>
                    </MessageCircle><textarea />
                </div>
<<<<<<< HEAD
                <button>{isSubmitting ? (;</button>
=======
                <button></button>
                  {
    isSubmitting ? (
>>>>>>> origin/main
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send>
<<<<<<< HEAD
                      <span>Send Message</span>
                    </>})}
                </button>
              </form>
            </div>
            {/* Contact Information */} <div className="space-y-8"></div>
              <div />
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p>We're here to help! Reach out to us through any of these channels;</p>
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */} <div className="space-y-8"></div>
                <div />
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p>We're here to help you transform your business with cutting-edge AI and technology solutions.</p>
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Phone />
                    <div />
<h3>

                        {info.title} </h3>
                      <p>{info.details</p>} </p>
                      <p>{info.description</p>} </p>
=======
                      </Send><span>Send Message</span>
                    </>
  }
>>>>>>> origin/main
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
<<<<<<< HEAD
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
>>>>>>> origin/main
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
<<<<<<< HEAD
                    </div>
                  </div>
                </div>

=======
>>>>>>> origin/main
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
<<<<<<< HEAD
                    </label>
=======
>>>>>>> origin/main
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your company"
                      />
<<<<<<< HEAD
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
>>>>>>> origin/main
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
<<<<<<< HEAD
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
=======
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
>>>>>>> origin/main
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
=======
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
                      <option value="">Select a service
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                      ))}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
>>>>>>> origin/main
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                <$2 />
                  type="submit"
                  disabled={isSubmitting}
<<<<<<< HEAD
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>

                  ) : (
                    <>
  </>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>

                  </div>
                </button>
              </form>
            ))

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of these channels 
=======
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <React.Fragment>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin">
                      <span>Sending...
                  ) : (
                    <React.Fragment>
                      <Send className="w-5 h-5" />
                      <span>Send Message
                  )}
            {/* Contact Information */}
            <div className="space-y-8" / /></div>
              <div / /></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p></p>
                  We're here to help! Reach out to us through any of these channels
>>>>>>> origin/main
                  and we'll get back to you as soon as possible.
              {/* Contact Information */}
<<<<<<< HEAD
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
<h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-300 text-sm">
=======
              <div className="space-y-8" / /></div>
                <div / /></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p></p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6" / /></div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Phone / /></Phone>
                    <div / /></div>
<h3></h3>
                        {info.title}
                      </h3>
                      <p></p>
                        {info.details}
                      </p>
                      <p></p>
>>>>>>> origin/main
                        {info.description}

                      </p>
>>>>>>> origin/main
                    </div>
                  </div>
<<<<<<< HEAD

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
=======
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Mail / /></Mail>
                    <div / /></div>
>>>>>>> origin/main
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
<<<<<<< HEAD

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
=======
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <MapPin / /></MapPin>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street</p><br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Clock / /></Clock>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
<<<<<<< HEAD
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>,
=======
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p><br />Sat: 10:00 AM - 4:00 PM</p>
>>>>>>> origin/main
>>>>>>> origin/main
                    </div>
                  </div>
                </div>
              </div>
            ))
          </div>
        </section>
      </div>
</div>
<<<<<<< HEAD

  );
};

export default ContactPage;
=======
  ),
}
export default ContactPage</$1></span>
>>>>>>> origin/main
