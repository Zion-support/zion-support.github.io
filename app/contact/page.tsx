'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      content: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Phone',
      content: '+1 (302) 464-0950',
      link: 'tel:+13024640950'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Address',
      content: '364 E Main St STE 1008\nMiddletown, DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI services, IT solutions, and digital transformation. We're here to help your business grow." />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, IT solutions, digital transformation, business consultation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to transform your business? Get in touch with our team of experts. 
            We're here to help you succeed with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <a 
                        href={info.link}
                        className="text-gray-300 hover:text-white transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-300">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-300">Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}

                <ContactForm onStatusChange={setFormStatus} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">How quickly can you start a project?</h3>
              <p className="text-gray-300">
                We typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and our current workload.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-300">
                Yes, we provide comprehensive ongoing support and maintenance for all our solutions, with various support tiers available.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">What industries do you serve?</h3>
              <p className="text-gray-300">
                We work with businesses across all industries, from startups to enterprise companies, helping them leverage AI and IT solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Do you provide free consultations?</h3>
              <p className="text-gray-300">
                Yes, we offer free initial consultations to discuss your needs and determine how we can best help your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
