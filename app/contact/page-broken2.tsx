<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle
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
    message: '',
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
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
<<<<<<< HEAD
  };
=======
export default ContactPage;
'use client';import React;
'use client'
, {useState, useCallback} from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission;
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

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
<<<<<<< HEAD

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time',
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const ContactPageBroken2: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
=======
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our team for support and inquiries." />
        <meta name="keywords" content="contact, support, inquiry, help" />
      </Helmet>
=======
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and inquiries." />
        <meta name="keywords" content="contact, Zion Tech Group, AI solutions, IT services, consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Contact
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." / / />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" / / />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900py-20"></div>
        <div className="containermx-autopx-4"></div>
          {/* Header */}
          <div className="text-centermb-16"></div>
            <h1 className="text-5 xl lg:text-7 xl font-bold text-white mb-6" />
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500bg-clip-texttext-transparent">{' '}Touch
              </span>
              <br />
              <span className="text-white">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with our AI and IT solutions? Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for support and inquiries.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
=======

          </div></div></div>
        </section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
=======
            <div className="bg-white/10 backdrop-blur-sm rounded-2xll p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div></div></div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
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
                    </div></div></div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
<<<<<<< HEAD
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
                    </div></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                </div>}
              )}
              <form onSubmit="{handleSubmit}" className="space-y-6" />
                <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Full Name *
                    </label>
                    <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                </div>
                <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Company
                    </label>
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Phone Number
                    </label>
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />
                    </div>
                </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Service Interest
                  </label>
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value="">Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}">{service}
                        </option>))}
                    </select>
                  </div>
                <div />
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5h-5text-gray-400" />
                    </select>
                  </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300 mb-2"  />Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5h-5text-gray-400" />
                    />
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
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
                    </div></div></div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
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
                    </div></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
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
                  </div></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
<<<<<<< HEAD
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </React.Fragment>
                  )}
=======
  ];return (
    <React.Fragment   /></React.Fragment>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." /    /></meta>
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch"   /></meta>
      </Helmet>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {/* Header */}
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              Get in;
              <span className="w-5h-5ml-2"   />{' '}Touch;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {/* Contact Form */}
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-3xl font-bold text-white mb-6"  >Send us a Message</h2>
              {submitStatus === 'success' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <CheckCircle className="w-5h-5ml-2"   /></CheckCircle></div>
                  <span className="text-green-400"  &gt;Message sent successfully! We'll get back to you soon.</span&gt;
                </div&gt;}
              )}

              {submitStatus === 'error' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <span className="text-red-400"  &gt;Failed to send message. Please try again.</span&gt;
                </div&gt;}
              )}

              <form onSubmit="{handleSubmit}" className="space-y-6"></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Full Name *
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <User className="w-5h-5ml-2"   /></User>
                      />
                    </div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Email Address *
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Mail className="w-5h-5ml-2"   /></Mail>
                      />
                    </div>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Company;
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Building className="w-5h-5ml-2"   /></Building>
                      />
                    </div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Phone Number;
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Phone className="w-5h-5ml-2"   /></Phone>
                      />
                    </div>
                </div>
                <div   /></div>
                  <label className="w-5h-5ml-2"   />Service Interest;
                  </label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <Globe className="w-5h-5ml-2"   /></Globe>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"    />{service}
                        </option>
  ))}
                    </select>
                  </div>
                <div   /></div>

                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *

                  <div className="relative"></div>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>
  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...

                  ) : (
                      <Send className="w-5 h-5 mr-2" />
                      Send Message

                    </React.Fragment>
                  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
<<<<<<< HEAD
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of these channels 
=======
                <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your business with cutting-edge AI and IT solutions? 
                  Our team of experts is here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  and we'll get back to you as soon as possible.
                </p>
=======

                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

                  and we'll get back to you as soon as possible.

              {/* Contact Information */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

              </div></div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
<<<<<<< HEAD
                  </p>
                </div></div>

                <div className="space-y-6">
                  <div className="flex items-center">
<<<<<<< HEAD
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div></div></div>
                    <div>
<h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {info.description}
                      </p>

                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
=======
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Phone className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lg font-semiboldtext-white mb-1" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default ContactPageBroken2;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======

                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus: outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."

                  {isSubmitting ? (<React.Fragment   /></React.Fragment>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

                    <  />}

                  )}

            {/* Contact Information */}

        </div></div>
              <div   /></div>
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

=======
export default ContactPage;
                    </>}

                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8"></div>
              <div /></div>
                <h2 className="text-3 xl font-bold text-white mb-6"  >Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8">
              We're here to help! Reach out to us through any of these channels
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
              <div className="space-y-8"></div>
                <div /></div>
                  <h2 className="text-3 xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
              We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Phone className="w-6h-6text-white" />
                    </div>
                    <div /></div>
<h3 className="text-lg font-semiboldtext-white mb-1"  />{info.title}
                      </h3>
                      <p className="text-cyan-400font-mediummb-1">
              {info.details}
                      </p>
                      <p className="text-gray-300text-sm">
              {info.description}
                      </p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Mail className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4">
                      <MapPin className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Clock className="w-6h-6text-white" />
                    </div>
                    <div>
            <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )}
export default ContactPage
  </textarea>
  </label>
  </label>
  </label>
  </span>
  </HTMLInputElement>
                      </p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Mail className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <MapPin className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Address</h3>
                      <p className="text-gray-300" />123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Clock className="w-6h-6text-white" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
