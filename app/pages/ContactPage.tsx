import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

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

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+1 302 464 0950'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['kleber@ziontechgroup.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      description: 'Visit our office'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      description: 'Eastern Time Zone'
    }
  ];

  const services = [
    'AI Solutions',
    'IT Services',
    'Micro SaaS Development',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Digital Transformation',
    '5G Solutions',
    'Consulting',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, IT services, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact Zion Tech Group, AI consulting, IT services contact, micro SaaS development, cybersecurity consulting" />
        <meta property="og:title" content="Contact Us - Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for AI solutions, IT services, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden matrix-rain">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid bg-circuit"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hologram">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore how our technology solutions can drive your success.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to reach us. Choose what works best for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-cyber hover-cyber text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 energy-pulse">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-neon-cyan">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Send us a <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="card-cyber">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                      <XMarkIcon className="w-5 h-5" />
                      <span>Sorry, there was an error sending your message. Please try again.</span>
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-cyber hover-cyber disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="loading-cyber"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait! Contact us today and let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
