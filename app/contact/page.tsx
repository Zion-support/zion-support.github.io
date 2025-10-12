'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: 'Email Us',
      details: 'info@ziontechgroup.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak with our team during business hours'
    },
    {
      icon: <MapPin className="w-8 h-8 text-purple-500" />,
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley',
      description: 'Come visit our headquarters in Silicon Valley'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'We\'re available during standard business hours'
    }
  ]

  const services = [
    'AI & Machine Learning',
    'Cloud Solutions',
    'Cybersecurity',
    '5G Implementation',
    'Data Analytics',
    'Custom Development',
    'Mobile Solutions',
    'Business Intelligence',
    'Digital Transformation',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and project inquiries." />
        <meta name="keywords" content="contact, AI solutions, IT consulting, Zion Tech Group, support, consultation" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-6">{info.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{info.details}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <ContactForm />
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                  <p className="text-gray-300">Certified professionals with years of experience in AI and IT solutions.</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                  <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly.</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                  <p className="text-gray-300">Track record of successful projects and satisfied clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}