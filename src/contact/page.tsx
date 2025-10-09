'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Building, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ContactPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const services = [
    'AI Project Manager Pro',
    'AI Social Media Manager',
    'AI Analytics Dashboard',
    'AI Email Marketing Suite',
    'AI Customer Support Bot',
    'AI Code Review Assistant',
    'AI Content Generator Pro',
    'AI SEO Optimizer',
    'AI Data Visualization Studio',
    'AI Video Generation Suite',
    'AI Voice Cloning Studio',
    'AI Music Composition',
    'AI Fashion Design Assistant',
    'AI Fitness Coach Pro',
    'AI Workflow Automation',
    'AI Email Assistant Pro',
    'AI Lead Generation Engine',
    'AI Sales Automation Suite',
    'AI E-commerce Optimizer',
    'Machine Learning Solutions',
    'Natural Language Processing',
    'Computer Vision',
    'AI Automation',
    'Cloud Services',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Services',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Custom Solution'
  ];

  return (
    <>
      <SEOOptimizer
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and IT solutions. Call (302) 464-0950 or email kleber@ziontechgroup.com. Located in Middletown, DE."
        keywords={['contact', 'AI solutions', 'IT services', 'Zion Tech Group', 'Middletown DE']}
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cyber-text-3d neon-pulse">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with AI and IT solutions? Get in touch with our expert team today.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Get In Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                      <p className="text-gray-300 mb-2">+1 302 464 0950</p>
                      <a 
                        href="tel:+13024640950" 
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                      <p className="text-gray-300 mb-2">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                      <a 
                        href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 font-medium transition-colors"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button flex items-center justify-center space-x-2 py-3 px-6"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button flex items-center justify-center space-x-2 py-3 px-6"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
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
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-slate-800 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button py-3 px-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">
                Why Choose Zion Tech Group?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card p-6">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                  <p className="text-gray-300">
                    Serving clients worldwide with 24/7 support and multi-language capabilities.
                  </p>
                </div>
                <div className="cyber-card p-6">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                  <p className="text-gray-300">
                    Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients.
                  </p>
                </div>
                <div className="cyber-card p-6">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                  <p className="text-gray-300">
                    Bank-level security and compliance for your critical data and infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;