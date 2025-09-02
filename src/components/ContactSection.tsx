import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get in Touch with Our Experts
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business? Contact our team of technology experts for a personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-slate-300 mb-1">+1 (302) 464-0950</p>
                    <p className="text-slate-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-slate-300 mb-1">kleber@ziontechgroup.com</p>
                    <p className="text-slate-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-slate-300 mb-1">364 E Main St STE 1008</p>
                    <p className="text-slate-300">Middletown, DE 19709</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-slate-300 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-400 text-sm">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Quick Contact Options</h4>
              <div className="space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a
                  href="https://calendly.com/ziontechgroup"
                  className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Schedule Meeting</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-analytics">AI & Analytics</option>
                  <option value="quantum-computing">Quantum Computing</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="iot-edge">IoT & Edge Computing</option>
                  <option value="digital-twin">Digital Twin</option>
                  <option value="sustainability">Sustainability & ESG</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;