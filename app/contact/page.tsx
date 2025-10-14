import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@ziontech.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'San Francisco, CA',
      description: 'Visit us by appointment'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: '9AM - 6PM PST',
      description: 'Monday through Friday'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""
        <Helmet>"""
          <title>Thank You - Zion Tech Group</title>""""
          <meta name="description" content="Thank you for contacting Zion Tech Group." />"""
        </Helmet>""""
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-md mx-4">""""
          <Circle className="w-16 h-16 text-green-400 mx-auto mb-6" />""""
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>""""
          <p className="text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button>
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                subject: '',"
                message: ''"
              }"
            }}""""
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );"
  }""
"""
  return (""""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>"""
        <title>Contact Us - Zion Tech Group</title>""""
        <meta name="description" content="Get in touch with Zion Tech Group for AI, cloud, and cybersecurity solutions." />""""
        <meta name="keywords" content="contact, support, AI solutions, cloud services, cybersecurity" />"
      </Helmet>""
"""
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>""""
        <div className="container mx-auto px-4 relative z-10">""""
          <div className="text-center">""""
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">""
              Contact Us"""
            </h1>""""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your business? Let's discuss how our AI and technology solutions can help you achieve your goals.
            </p>
          </div>
        </div>"
      </section>""
"""
      {/* Contact Form & Info */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"""
            {/* Contact Form */}""""
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">""""
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>""""
              <form onSubmit={handleSubmit} className="space-y-6">""""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"""
                  <div>""""
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">"
                      Full Name *""
                    </label>"""
                    <input""""
                      type="text"""""
                      id="name"""""
                      name="name""
                      value={formData.name}"
                      onChange={handleChange"
                      required""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""""">
                      placeholder="Your full name">"
                    />"
                  "
                  <div>""""
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">"
                      Email Address *""
                    </label>"""
                    <input""""
                      type="email"""""
                      id="email"""""
                      name="email""
                      value={formData.email}"
                      onChange={handleChange"
                      required""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""""">
                      placeholder="your@email.com">
                    />"
                  </div>"
                "
""""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"""
                  <div>""""
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">"
                      Company""
                    </label>"""
                    <input""""
                      type="text"""""
                      id="company"""""
                      name="company""
                      value={formData.company"
                      onChange={handleChange}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""""">
                      placeholder="Your company name">"
                    />"
                  "
                  <div>""""
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">"
                      Phone Number""
                    </label>"""
                    <input""""
                      type="tel"""""
                      id="phone"""""
                      name="phone""
                      value={formData.phone"
                      onChange={handleChange}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""""">
                      placeholder="+1 (555) 123-4567">
                    />
                  </div>"
                </div>""
"""
                <div>""""
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">"
                    Subject *""
                  </label>"""
                  <select""""
                    id="subject"""""
                    name="subject""
                    value={formData.subject}"
                    onChange={handleChange"
                    required"""">
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""">"
                  >""""
                    <option value="">Select a subject</option>""""
                    <option value="ai-solutions">AI Solutions</option>""""
                    <option value="cloud-services">Cloud Services</option>""""
                    <option value="cybersecurity">Cybersecurity</option>""""
                    <option value="digital-transformation">Digital Transformation</option>""""
                    <option value="consulting">Consulting</option>""""
                    <option value="other">Other</option>
                  </select>"
                </div>""
"""
                <div>""""
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">"
                    Message *""
                  </label>"""
                  <textarea""""
                    id="message"""""
                    name="message"
                    value={formData.message}"
                    onChange={handleChange}""
                    required"""
                    rows={6}""""
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none""""">
                    placeholder="Tell us about your project and how we can help...">
                  />"
                </div>""
"""
                <button""""
                  type="submit""""
                  disabled={isSubmitting}"""">
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">"
                >""
                  {isSubmitting ? ("""
                    <>""""
                      <Circle className="w-5 h-5 mr-2 animate-spin" />
                      Sending..."
                    </>""
                  ) : ("""
                    <>""""
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>"
            </div>""
"""
            {/* Contact Information */}""""
            <div className="space-y-8">"""
              <div>""""
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>""""
                <p className="text-xl text-gray-300 mb-8">
                  We're here to help you transform your business with cutting-edge technology solutions. 
                  Reach out to us through any of the channels below."
                </p>"
              "
""""
              <div className="space-y-6">"""
                {contactInfo.map((info, index) => (""""
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">""""
                    <div className="flex items-start space-x-4">""""
                      <div className="bg-blue-600/20 p-3 rounded-lg">""""
                        <info.icon className="w-6 h-6 text-blue-400" />"
                      "
                      <div>""""
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>""""
                        <p className="text-blue-400 font-medium mb-1">{info.details}</p>""""
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>"
                ))}"
              "
""""
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/20">""""
                <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>""""
                <p className="text-gray-300 mb-4">""
                  Schedule a free consultation with our experts to discuss your project requirements and how we can help."""
                </p>""""
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>"
      </section>"
    
  "
