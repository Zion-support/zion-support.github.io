'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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

  const services = [
    'AI Project Manager Pro',
    'AI Social Media Manager',
    'AI Analytics Dashboard',
    'AI Email Marketing Suite',
    'AI Customer Support Bot',
    'AI Code Review Assistant',
    'AI Video Generator Pro',
    'AI Voice Cloning Studio',
    'AI Workflow Automation',
    'AI Sales Automation Hub',
    'AI Content Writer Pro',
    'AI Financial Advisor Pro',
    'Machine Learning Solutions',
    'Natural Language Processing',
    'Computer Vision',
    'AI Automation Suite',
    'Cloud Migration & Management',
    'Cybersecurity Solutions',
    'DevOps & CI/CD',
    'Database Services',
    'IT Strategy & Consulting',
    'Mobile App Development',
    'Web Development',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-slate-900 neural-network-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Get in touch with our AI and IT experts
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Ready to transform your business with cutting-edge AI technology? 
              Contact us for a free consultation and discover how we can help you achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-card p-8">
              <h2 className="cyber-text-3d text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-cyan-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cyan-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-cyan-400 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-vertical"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>There was an error sending your message. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-button py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="cyber-card p-8">
                <h3 className="cyber-text-3d text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8">
                  Ready to transform your business with AI? Contact us today for a free consultation 
                  and discover how our cutting-edge solutions can drive unprecedented growth.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <Phone className="w-6 h-6 text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <a 
                        href="tel:+13024640950" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        +1 302 464 0950
                      </a>
                      <p className="text-gray-400 text-sm mt-1">Available 24/7 for urgent matters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <Mail className="w-6 h-6 text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        kleber@ziontechgroup.com
                      </a>
                      <p className="text-gray-400 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <MapPin className="w-6 h-6 text-green-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <address className="text-green-400 not-italic">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </address>
                      <p className="text-gray-400 text-sm mt-1">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <Clock className="w-6 h-6 text-orange-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                      <div className="text-orange-400">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: Emergency support only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="cyber-text-3d text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Free Consultation</h4>
                      <p className="text-gray-300 text-sm">Get expert advice on your digital transformation journey</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-300 text-sm">Round-the-clock AI-powered assistance and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                      <p className="text-gray-300 text-sm">300% ROI, 70% cost reduction, 90% efficiency gains</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Enterprise Ready</h4>
                      <p className="text-gray-300 text-sm">Scalable solutions for businesses of all sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="cyber-scan-effect"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Transform your business with AI today
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Don't wait to revolutionize your business operations. Contact us now for a free consultation 
              and discover how our AI solutions can drive unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="futuristic-glow px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;