<<<<<<< HEAD
import Head from 'next/head';
import { useState } from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======
import { useState } from 'react';
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    phone: '',
=======
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
    service: '',
    message: ''
  });

<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group | Get Your Free Consultation</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and Micro SaaS development. Free consultation available." />
        <meta name="keywords" content="contact, consultation, AI services, IT consulting, Micro SaaS, support" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and Micro SaaS development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how our AI services, IT solutions, and Micro SaaS platforms can drive your success.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
=======
  return (
<<<<<<< HEAD
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16, color: '#0b1220' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Ready to transform your business? Let&apos;s discuss your project and how we can help you achieve your goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#0b1220' }}>
              Contact Information
            </h2>
            
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Phone</h3>
              <p style={{ color: '#64748b', fontSize: 16 }}>
                <a href="tel:+13024640950" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                  +1 302 464 0950
                </a>
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Email</h3>
              <p style={{ color: '#64748b', fontSize: 16 }}>
                <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Address</h3>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6 }}>
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Business Hours</h3>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6 }}>
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: 10:00 AM - 4:00 PM EST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#0b1220' }}>
              Send Us a Message
            </h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Name *
                </label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Email *
                </label>
                <input 
                  type="email" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Company
                </label>
                <input 
                  type="text"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Service Interest
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: 8,
                  fontSize: 16,
                  boxSizing: 'border-box',
                  background: 'white'
                }}>
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="micro-saas">Micro SaaS</option>
                  <option value="it-services">IT Services</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Message *
                </label>
                <textarea 
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  color: '#0b1220',
                  padding: '14px 28px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div style={{ 
          marginTop: 60,
          background: 'white',
          borderRadius: 16,
          padding: 32,
          border: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            What to Expect
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginTop: 24 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Quick Response</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>We typically respond within 24 hours during business days.</p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Free Consultation</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>Initial consultation to understand your needs and provide recommendations.</p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Custom Quote</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>Tailored pricing based on your specific requirements and project scope.</p>
            </div>
          </div>
        </div>
      </div>
=======
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '1rem' 
          }}>
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9 
          }}>
            Ready to start your next project? Let&apos;s discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem' 
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: 700, 
                marginBottom: '1.5rem',
                color: '#0b1220'
              }}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="ai-development">AI Development</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="it-services">IT Services</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#22d3ee',
                    color: '#0b1220',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Send Message
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
                </button>
              </form>
            </div>

            {/* Contact Information */}
<<<<<<< HEAD
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Expert AI and IT professionals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Proven track record of success</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Custom solutions for your business</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">24/7 support and maintenance</span>
                  </li>
                </ul>
=======
            <div>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: 700, 
                marginBottom: '1.5rem',
                color: '#0b1220'
              }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Phone
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    <a href="tel:+13024640950" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                      +1 302 464 0950
                    </a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Email
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Address
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Business Hours
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </main>
    </>
=======
      </section>
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
    </main>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  );
}
