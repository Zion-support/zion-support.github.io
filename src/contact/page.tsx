import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Award, TrendingUp, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">contact@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-gray-300">123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Business Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;