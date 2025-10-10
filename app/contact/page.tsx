'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  AlertCircle, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  User,
  Building,
  DollarSign,
  MessageSquare,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  urgency: string;
  preferredContact: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'AI Solutions',
    'Quantum Computing',
    'Blockchain Development',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'IoT Solutions',
    'Custom Software Development',
    'Digital Transformation',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ];

  const urgencyLevels = [
    { value: 'high', label: 'High (Within 2 weeks)', color: 'text-orange-400' },
    { value: 'normal', label: 'Normal (Within 1 month)', color: 'text-yellow-400' },
    { value: 'low', label: 'Low (Flexible timeline)', color: 'text-green-400' }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal',
        preferredContact: 'email'
      });
      setSubmitStatus('idle');
    }, 3000);
  }, []);

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get Your Free Consultation</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, schedule a call, or request a quote. We're here to help transform your business." />
        <meta name="keywords" content="contact, consultation, AI services, IT support, free quote, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Free Consultation</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with AI and IT solutions? Let's discuss your needs and create a custom solution that drives results.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="your@email.com"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-slate-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="" className="bg-slate-800">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-slate-800">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-white mb-2">
                      Project Urgency
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {urgencyLevels.map((level) => (
                        <label key={level.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 focus:ring-cyan-400"
                          />
                          <span className={`text-sm ${level.color}`}>{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-4 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information & Quick Actions */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <a 
                          href="tel:+13024640950" 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <a 
                          href="mailto:kleber@ziontechgroup.com" 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                        <p className="text-gray-300">{contactInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                        <p className="text-gray-300">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                    
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI solutions to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
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