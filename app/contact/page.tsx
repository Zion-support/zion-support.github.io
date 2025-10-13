<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
=======
import React, { useState } from "react";
import { ArrowRight, Mail, Smartphone, Globe, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
>>>>>>> origin/main

export default function Contact() {
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
    // Here you would typically send the form data to your backend
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown DE 19709"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "EST Time Zone"
    }
  const services = [
    "AI Business Intelligence",
    "AI Customer Support",
    "AI Content Generation",
    "AI Cybersecurity",
    "5G Solutions",
    "Cloud Infrastructure",
    "Data Analytics",
    "Code Assistant",
    "Marketing Automation",
    "Document Processing",
    "CRM Assistant",
    "Financial Analytics"
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Contact
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Us
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with our AI and IT solutions? 
              Get in touch with our experts for a personalized consultation and discover how we can help you achieve your goals.
            </p>
          </div>
        </section>
        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Form and Additional Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Send us a Message
                  </span>
                </h2>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                          value={formData.company || "Company"}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-slate-800">
                            {service}
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
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
              {/* Additional Information */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Why Contact Us?
                    </span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">Free consultation and project assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">Customized solutions for your business needs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">Expert guidance on AI and technology implementation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Quick Actions
                    </span>
                  </h3>
                  <div className="space-y-4">
                    <Link
                      to="/consultation"
                      className="group flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Schedule Free Consultation</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/services"
                      className="group flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Explore Our Services</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive contact solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> origin/main
}