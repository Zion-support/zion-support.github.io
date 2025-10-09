'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Brain, Cloud, Code, Zap, Users, Globe, Shield, BarChart } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const services = [
    { value: 'ai-services', label: 'AI Services', icon: Brain },
    { value: 'it-services', label: 'IT Services', icon: Cloud },
    { value: 'micro-saas', label: 'Micro SAAS Solutions', icon: Code },
    { value: 'consulting', label: 'IT Consulting', icon: Users },
    { value: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
    { value: 'automation', label: 'Process Automation', icon: Zap },
    { value: 'analytics', label: 'Business Intelligence', icon: BarChart },
    { value: 'other', label: 'Other', icon: Globe }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      link: 'tel:+13024640950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008\nMiddletown, DE 19709',
      link: null,
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM EST\n24/7 Emergency Support Available',
      link: null,
      description: 'We\'re here when you need us'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
      icon: Users
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs',
      icon: Clock
    },
    {
      title: 'Proven Results',
      description: '300% average ROI for our clients',
      icon: CheckCircle
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest AI and IT solutions',
      icon: Brain
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced particle-system-enhanced quantum-field">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="cyber-card-enhanced holographic-card p-12">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
                Thank You!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="cyber-button-enhanced"
                >
                  Back to Home
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced particle-system-enhanced quantum-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch-enhanced" data-text="Contact Us">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-text-enhanced">
            Let's Transform Your Business Together
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to take your business to the next level? Get in touch with our experts for a free consultation 
            and discover how our AI and IT solutions can drive growth and efficiency.
          </p>
        </section>

        {/* Contact Information Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card p-6 text-center hover:scale-105 transition-all duration-300">
                <info.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 neon-text-enhanced">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-cyan-400 hover:text-cyan-300 text-lg block mb-2">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-300 text-lg mb-2 whitespace-pre-line">{info.details}</p>
                )}
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card-enhanced holographic-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text-enhanced">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your company name"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
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
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Tell us about your project or requirements"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cyber-button-enhanced flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text-enhanced">
              Why Choose Zion Tech Group?
            </h2>
            <div className="space-y-6 mb-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <reason.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 neon-text-enhanced">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="cyber-card-enhanced holographic-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 mb-6">
                Call us now for immediate support and consultation.
              </p>
              <a
                href="tel:+13024640950"
                className="cyber-button-enhanced w-full text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card-enhanced holographic-card p-6">
              <h3 className="text-lg font-bold text-white mb-3 neon-text-enhanced">
                How quickly can you start my project?
              </h3>
              <p className="text-gray-300">
                Most projects can begin within 1-2 weeks after initial consultation and contract signing. 
                We prioritize quick turnaround times without compromising quality.
              </p>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6">
              <h3 className="text-lg font-bold text-white mb-3 neon-text-enhanced">
                Do you offer ongoing support?
              </h3>
              <p className="text-gray-300">
                Yes, we provide 24/7 support for all our services. Our support includes maintenance, 
                updates, troubleshooting, and optimization to ensure your systems run smoothly.
              </p>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6">
              <h3 className="text-lg font-bold text-white mb-3 neon-text-enhanced">
                What is your pricing structure?
              </h3>
              <p className="text-gray-300">
                We offer flexible pricing options including monthly subscriptions, project-based pricing, 
                and custom enterprise solutions. Contact us for a personalized quote.
              </p>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6">
              <h3 className="text-lg font-bold text-white mb-3 neon-text-enhanced">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-300">
                Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. 
                Our micro SAAS solutions are specifically designed for small to medium businesses.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;