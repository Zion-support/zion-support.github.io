import React, { useState } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Globe,
  Zap
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office for in-person meetings'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 2:00 PM EST',
      link: null,
      description: 'We\'re here when you need us'
    }
  ];

  const services = [
    'AI Development & Machine Learning',
    'IT Infrastructure & Management',
    'SAAS Platform Development',
    'Web & Mobile Development',
    'Cloud Migration & Security',
    'Data Analytics & Business Intelligence',
    'Cybersecurity Solutions',
    'Custom Software Development',
    'Other (Please specify)'
  ];

  return (
    <ModernLayout
      title="Contact Us - Zion Tech Group | Get in Touch for Technology Solutions"
      description="Contact Zion Tech Group for all your technology needs. Call +1 (302) 464-0950 or email kleber@ziontechgroup.com. Located in Middletown, DE."
      keywords="contact Zion Tech Group, technology consulting, AI services, IT solutions, Delaware tech company"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-blue/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Let's Connect</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get in <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to help with all your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-6 h-full hover:border-neon-blue/40 transition-all duration-300 hover:bg-black/60 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">{info.title}</h3>
                  
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block text-neon-blue hover:text-neon-purple transition-colors font-medium mb-3"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-neon-blue font-medium mb-3 whitespace-pre-line">
                      {info.value}
                    </div>
                  )}
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-neon-green to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
                <p className="text-xl text-gray-300 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <div className="inline-flex items-center space-x-2 text-neon-blue">
                  <Zap className="w-5 h-5" />
                  <span>We're excited to work with you!</span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-black/40 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                      placeholder="Enter your company name"
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
                      className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20 resize-vertical"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg hover:shadow-neon-blue/25 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait to transform your business. Contact us today for a free consultation 
              and discover how our technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg hover:shadow-neon-blue/25 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default Contact;