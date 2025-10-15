import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap,
  MessageCircle,
  Calendar,
  Globe
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709, USA',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Support Available',
      description: 'Monday - Friday: 9AM - 6PM EST',
      action: null
    }
  ];

  const services = [
    'AI Analytics Dashboard',
    'AI Content Generator',
    'AI Customer Support',
    'AI Code Assistant',
    'Cloud Infrastructure',
    'Cybersecurity Suite',
    'DevOps Automation',
    'Project Management Pro',
    'API Management',
    'Custom Solution'
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: 'Rated by 500+ satisfied clients'
    },
    {
      icon: Users,
      title: '500+ Clients',
      description: 'Trusted by businesses worldwide'
    },
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Call +1 302 464 0950 or email kleber@ziontechgroup.com for AI, IT, and Micro SAAS solutions." />
        <meta name="keywords" content="contact zion tech group, AI services contact, IT services contact, micro SAAS contact, business consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ready to transform your business with our AI, IT, and Micro SAAS solutions? 
              Contact us today for a free consultation and discover how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                  <div className="text-purple-400 font-medium mb-2">
                    {info.action ? (
                      <a href={info.action} className="hover:text-purple-300 transition-colors">
                        {info.details}
                      </a>
                    ) : (
                      info.details
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Why Choose Us & Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Call Now</div>
                      <div className="text-gray-300 text-sm">+1 302 464 0950</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Email Us</div>
                      <div className="text-gray-300 text-sm">kleber@ziontechgroup.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Visit Us</div>
                      <div className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown, DE 19709</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                  <p className="text-gray-300">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait! Contact us today and let's discuss how we can help transform your business 
            with our cutting-edge AI, IT, and Micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Call +1 302 464 0950
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Email Us
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;