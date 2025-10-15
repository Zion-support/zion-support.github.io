import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      title: "Phone",
      description: "Call us for immediate assistance",
      value: "+1 302 464 0950",
      icon: PhoneIcon,
      href: "tel:+13024640950",
      color: "text-purple-400"
    },
    {
      title: "Email",
      description: "Send us a detailed message",
      value: "kleber@ziontechgroup.com",
      icon: EnvelopeIcon,
      href: "mailto:kleber@ziontechgroup.com",
      color: "text-cyan-400"
    },
    {
      title: "Address",
      description: "Visit our office",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      icon: MapPinIcon,
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      color: "text-green-400"
    },
    {
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Fri: 9AM-6PM EST",
      icon: ClockIcon,
      href: "#",
      color: "text-yellow-400"
    }
  ];

  const services = [
    "AI Solutions",
    "Micro SaaS Solutions",
    "IT Solutions",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Digital Transformation",
    "Web Development",
    "Mobile App Development",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Thank You - Zion Tech Group"
          description="Thank you for contacting Zion Tech Group. We'll get back to you within 2 hours."
        />
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-gray-300 mb-6">
              Your message has been sent successfully. We'll get back to you within 2 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  service: '',
                  message: ''
                });
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Call +1 302 464 0950 or email kleber@ziontechgroup.com for AI solutions, cybersecurity, and IT services."
        keywords="contact us, phone, email, address, AI solutions, cybersecurity, IT services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI solutions, cybersecurity services, 
            and IT expertise can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the most convenient way to reach us. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <method.icon className={`h-8 w-8 ${method.color} mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-3">{method.description}</p>
                <p className={`font-medium ${method.color}`}>{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 2 hours. 
                For urgent matters, please call us directly at +1 302 464 0950.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Free consultation for all new clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Response within 2 hours guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">No obligation, confidential discussion</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-8">
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're active on social media and always happy to connect with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-4">
                Chat with our team in real-time for immediate assistance.
              </p>
              <a href="/chat" className="text-purple-400 hover:text-purple-300 font-medium">
                Start Chat →
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <CalendarDaysIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Schedule Demo</h3>
              <p className="text-gray-300 mb-4">
                Book a personalized demo of our solutions.
              </p>
              <a href="/demo" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Book Demo →
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <UserGroupIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
              <p className="text-gray-300 mb-4">
                Explore partnership opportunities with us.
              </p>
              <a href="/partnerships" className="text-green-400 hover:text-green-300 font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
