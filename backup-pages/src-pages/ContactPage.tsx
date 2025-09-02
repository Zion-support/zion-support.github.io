<<<<<<< HEAD:backup-pages/src-pages/ContactPage.tsx
import {

  Phone,  Mail,
  MapPin,
  Clock,
  MessageSquare,
=======
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
>>>>>>> cursor/migrate-ci-to-pm2-and-clean-up-github-actions-430a:src/pages/ContactPage.tsx
  Send,
  CheckCircle,
  Globe,
<<<<<<< HEAD:backup-pages/src-pages/ContactPage.tsx
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram} from 'lucide-react.ts';

export function ContactPage(...args: any[]): any {

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
=======
  Building,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
>>>>>>> cursor/migrate-ci-to-pm2-and-clean-up-github-actions-430a:src/pages/ContactPage.tsx
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD:backup-pages/src-pages/ContactPage.tsx
    message: ''});

  const [isSubmitting, setIsSubmitting] = useState (false) ;
  const [isSubmitted, setIsSubmitted] = useState (false) };

  const handleSubmit = async (e: anyReact.FormEvent) => {

    e.preventDefault();    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({

        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''})}, 3000)};

  
  
  
  if (isSubmitted) {

    return()
      <div className="min-h-screen py-8 flex items-center justify-center">"
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}"
            className="bg-gray-800 rounded-2xl p-12 border border-gray-700"
          >"
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">"
              <CheckCircle className="w-10 h-10 text-white"  />
            </div>"
            <h2 className="text-3xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h2>"
            <p className="text-gray-400 mb-8">
              Thank you for reaching out to Zion Tech Group. We've received your
              message and will get back to you within 24 hours.
            </p>"

            <div className="text-sm text-gray-500">'              You'll receive a confirmation email shortly.
            </div>
          </motion.div>
        </div>
      </div>) }
  return ("
    <div className="min-h-screen py-8">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}"
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>"
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology?'
              Let's discuss how our solutions can help you achieve your goals.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}"
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >"
                <method.icon className="w-8 h-8 text-white" />
              </div>"
              <h3 className="text-lg font-semibold text-white mb-2">
                {method.title}
              </h3>
              {method.link ? (
                <a
                  href={method.link}"
                  className="text-cyan-400 font-medium mb-2 hover:text-cyan-300 transition-colors cursor-pointer block"'
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={

                    method.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {method.value}
                </a>
              ) : ("
                <p className="text-cyan-400 font-medium mb-2">{method.value}</p>
              )}"
              <p className="text-gray-400 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}"
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >"
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>
"
            <form onSubmit={handleSubmit} className="space-y-6">"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label"
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name *
                  </label>
                  <input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label"
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name *
                  </label>
                  <input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label"
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label"
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone
                  </label>
                  <input"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label"
                    htmlFor="comp"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company
                  </label>
                  <input"
                    type="text"
                    id="comp"
                    name="comp"
                    value={formData.comp}
                    onChange={handleInputChange}"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your Comp"
                  />
                </div>
                <div>
                  <label"
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interest
                  </label>
                  <select"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >"
=======
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
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
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      href: "tel:+13024640950",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      href: "#",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      href: "#",
      description: "Available for consultations"
    }
  ];

  const services = [
    "AI Solutions & Automation",
    "Cloud Infrastructure & DevOps",
    "Cybersecurity Services",
    "Digital Transformation",
    "IT Consulting",
    "Custom Software Development",
    "Data Analytics & BI",
    "Other"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ziontechgroup",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: "🐦"
    },
    {
      name: "GitHub",
      url: "https://github.com/Zion-Holdings",
      icon: "💻"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ziontechgroup",
      icon: "📺"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Sent Successfully!</h1>
          <p className="text-zinc-300 mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business? Let's discuss how our AI-powered solutions 
            can drive your success. We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
>>>>>>> cursor/migrate-ci-to-pm2-and-clean-up-github-actions-430a:src/pages/ContactPage.tsx
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

<<<<<<< HEAD:backup-pages/src-pages/ContactPage.tsx
              <div>
                <label"
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              <button"
                type="submit"
                disabled={isSubmitting}"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>"
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>"
                    <Send className="w-5 h-5"  />                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}"
            className="space-y-8"
          >
            {/* Company Info */}"
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">"
              <h3 className="text-2xl font-bold text-white mb-6">
                About Zion Tech Group
              </h3>"
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are a leading technology company specializing in AI, quantum
                computing, and advanced technology solutions. Our team of
                experts is dedicated to helping businesses transform and thrive
                in the digital age.
              </p>
"
              <div className="space-y-4">"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Building className="w-5 h-5 text-cyan-400"  />
                  <span>Founded in 2020</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Users className="w-5 h-5 text-cyan-400"  />
                  <span>100+ Team Members</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Globe className="w-5 h-5 text-cyan-400"  />                  <span>25+ Countries Served</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}"
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">"
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Actions
              </h3>"
              <div className="space-y-4">
                <a"
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                >"
                  <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"  />"
                  <span className="text-white">Call Now</span>"
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform"  />                </a>

                <a"
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                >"
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"  />"
                  <span className="text-white">Send Email</span>"
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform"  />
                </a>

                <a"
                  href="/request-quote"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group"
                >"
                  <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform"  />"
                  <span className="text-white font-medium">Request Quote</span>"
                  <ArrowRight className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform"  />                </a>
              </div>
            </div>

            {/* Social Links */}"
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">"
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>"
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >"
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )}
'"`
=======
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                    placeholder="Tell us about your project, challenges, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-zinc-300 mb-8">
                  We're here to help you succeed. Reach out through any of these channels 
                  and we'll respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors block mb-1"
                      >
                        {info.value}
                      </a>
                      <p className="text-zinc-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-700/50 border border-zinc-600 rounded-lg flex items-center justify-center text-2xl hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Beyond traditional contact methods, we offer multiple channels for engagement 
              and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
              <p className="text-zinc-300 mb-6">
                For large organizations, we offer dedicated account management and 
                enterprise-grade support.
              </p>
              <a
                href="/enterprise"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Learn More
                <MessageSquare className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Partnership Opportunities</h3>
              <p className="text-zinc-300 mb-6">
                Join our partner network and grow your business with our technology solutions.
              </p>
              <a
                href="/partners"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Become a Partner
                <MessageSquare className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Support</h3>
              <p className="text-zinc-300 mb-6">
                We provide 24/7 support across multiple time zones to ensure your success.
              </p>
              <a
                href="/support"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Get Support
                <MessageSquare className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss your goals and create a customized solution that drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/migrate-ci-to-pm2-and-clean-up-github-actions-430a:src/pages/ContactPage.tsx
