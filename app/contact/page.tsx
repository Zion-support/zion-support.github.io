'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us during business hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-400" />,
      title: 'Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709, USA'
    }
  ];

  const services = [
    'AI Content Generation',
    'AI CRM Assistant',
    'AI Social Media Manager',
    'AI Cybersecurity Suite',
    '5G Implementation',
    'Cloud Migration',
    'Mobile Development',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Zion Tech Group - Get in Touch for AI Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud computing, and technology consulting. Get a free consultation for your business needs." />
        <meta name="keywords" content="contact Zion Tech Group, AI consultation, technology services, business solutions" />
      </Helmet>

      <FuturisticBackground variant="hero">
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
                Ready to transform your business with AI and cutting-edge technology? 
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Contact Form */}
              <FuturisticCard variant="feature">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
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
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
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
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <FuturisticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </FuturisticButton>
                </form>
              </FuturisticCard>

              {/* Contact Information */}
              <div className="space-y-6">
                <FuturisticCard variant="feature">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                          <p className="text-gray-300 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FuturisticCard>

                <FuturisticCard variant="service">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-yellow-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-gray-400 mt-3">
                      Emergency support available 24/7 for critical issues
                    </p>
                  </div>
                </FuturisticCard>

                <FuturisticCard variant="testimonial">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
                    <p className="text-gray-300 mb-4">
                      Get a free 30-minute consultation to discuss your project requirements and how our AI solutions can help your business grow.
                    </p>
                    <FuturisticButton variant="secondary" size="md">
                      Schedule a Call
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              </div>
            </div>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}
