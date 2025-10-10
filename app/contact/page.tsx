'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'EST (Eastern Standard Time)'
    }
  ];

  const services = [
    'AI Strategy & Consulting',
    'Machine Learning Solutions',
    'Cloud Infrastructure',
    'Cybersecurity Solutions',
    'Custom Development',
    'Data Analytics',
    'IT Consulting',
    'Automation Solutions',
    'Database Management',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project requirements." />
        <meta name="keywords" content="contact us, AI consulting, IT support, project consultation, technical support, business inquiry" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Failed to send message. Please try again.</span>
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
                        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="Your full name"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="Your company name"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    We're here to help you succeed. Reach out to us through any of the channels below, 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>Expert team with 20+ years of experience</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>24/7 support and monitoring</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>Custom solutions tailored to your needs</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;