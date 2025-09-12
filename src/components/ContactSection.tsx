import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Shield, 
  Users, 
  Award,
  Send,
  MessageSquare,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const quickActions = [
    { title: "Schedule Demo", icon: Calendar, href: "/contact", variant: "default" },
    { title: "Get Quote", icon: MessageSquare, href: "/request-quote", variant: "outline" },
    { title: "Start Project", icon: ArrowRight, href: "/contact", variant: "outline" }
  ];

  const features = [
    { title: "24/7 Emergency Support", description: "Available for critical issues", icon: Shield },
    { title: "Enterprise Security", description: "SOC 2 Type II Compliant", icon: Award },
    { title: "Global Network", description: "150+ Countries served", icon: Users },
    { title: "99.9% Uptime", description: "Guaranteed reliability", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Get in touch with our experts for a personalized consultation and discover 
            how our technology solutions can drive your success and accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-3xl text-white mb-2">Send us a Message</h3>
              <p className="text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
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
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your full name"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Solutions</option>
                    <option value="saas">SAAS Platforms</option>
                    <option value="it">IT Services</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8">
              <div className="mb-4">
                <h3 className="text-2xl text-white mb-2">Zion Tech Group</h3>
                <p className="text-gray-300">
                  We are a leading technology company specializing in AI, SAAS, and IT solutions. 
                  Our mission is to transform businesses through innovative technology that drives 
                  growth, efficiency, and competitive advantage.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-mono">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-mono">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white font-mono text-sm">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <a href={contactInfo.website} className="text-cyan-400 hover:underline">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8">
              <div className="mb-4">
                <h3 className="text-2xl text-white flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
                  <p className="text-sm text-cyan-400 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <strong>24/7 Emergency Support</strong> available for critical issues
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8">
              <h3 className="text-2xl text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <button className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <action.icon className="w-4 h-4 mr-2" />
                      {action.title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8">
              <h3 className="text-2xl text-white mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{feature.title}</p>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white max-w-4xl mx-auto rounded-lg p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Our team of experts is ready to help you achieve your technology goals. 
              From initial consultation to final deployment, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Conversation
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}