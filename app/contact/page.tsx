"use client";
import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
    preferredContact: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts to discuss your project requirements and get started today."
        />
        <meta
          name="keywords"
          content="contact us, AI solutions, IT services, project consultation, business inquiry"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how our AI and IT
              solutions can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Get in touch
                  </h2>
                  <p className="text-gray-300 mb-8">
                    We're here to help you transform your business with
                    cutting-edge AI and IT solutions. Reach out to us and let's
                    start your digital transformation journey.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-300">contact@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Address
                      </h3>
                      <p className="text-gray-300">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-300">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
=======
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, and inquiries." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                      <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="quantum-computing">Quantum Computing</option>
                        <option value="cloud-services">Cloud Services</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="other">Other</option>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                    <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                          <p className="text-gray-300">{contactInfo.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                          <p className="text-gray-300">{contactInfo.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                          <p className="text-gray-300">{contactInfo.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                          <p className="text-gray-300">{contactInfo.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-4">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center"
                      >
                        Call Now
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> 666d24bb87015fdc324b7a4ede9db42be5243972
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
