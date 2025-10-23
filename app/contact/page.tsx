"use client";
import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Get in touch
                  </h3>
                  <p className="text-gray-300 mb-8">
                    We're here to help you succeed. Reach out to us through any
                    of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-300 mb-2">
                        Send us an email and we'll respond within 24 hours
                      </p>
                      <a
                        href="mailto:contact@ziontechgroup.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        contact@ziontechgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-300 mb-2">
                        Speak directly with our team
                      </p>
                      <a
                        href="tel:+1-555-0123"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        +1 (555) 012-3456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-300 mb-2">
                        Come see us at our headquarters
                      </p>
                      <p className="text-gray-300">
                        123 Tech Street<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-300 mb-2">
                        We're available Monday through Friday
                      </p>
                      <p className="text-gray-300">
                        9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
