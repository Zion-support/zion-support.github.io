'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import NeonButton from '../components/NeonButton';
import AnimatedText from '../components/AnimatedText';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
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
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, USA'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'EST (Eastern Standard Time)'
    }
  ];

  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'Mobile Development',
    'Web Development',
    'Data Analytics',
    '5G Implementation',
    'Digital Transformation',
    'Other'
  ];

  return (
    <>
      <SEOHead 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        keywords="contact, ai services, it services, consultation, phone, email, address"
      />
      
      <div className="min-h-screen relative">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                <AnimatedText 
                  text="Contact Us" 
                  type="glow" 
                  delay={500}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                <AnimatedText 
                  text="Ready to transform your business? Get in touch with our experts for a free consultation."
                  type="fade"
                  delay={1000}
                />
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {contactInfo.map((info, index) => (
                <FuturisticCard key={index} className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-blue-400 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Get a Free Consultation
              </h2>
              <p className="text-lg text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <FuturisticCard className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <div className="text-center">
                    <NeonButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </NeonButton>
                  </div>
                </form>
              )}
            </FuturisticCard>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're committed to delivering exceptional results and outstanding customer service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <FuturisticCard className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock technical support to ensure your systems run smoothly
                </p>
              </FuturisticCard>
              <FuturisticCard className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with years of experience in AI and IT solutions
                </p>
              </FuturisticCard>
              <FuturisticCard className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Track record of successful projects and satisfied clients across industries
                </p>
              </FuturisticCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}