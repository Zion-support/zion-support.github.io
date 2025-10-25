<<<<<<< HEAD
'use client';
import { { { useState  from 'react'
import  MessageSquare Mail Phone Send CheckCircle           } from 'lucide-react'

interface FormData {;
=======
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
>>>>>>> origin/main
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    message: '',
    service: ''
=======
    phone: '',
    service: '',
    message: ''
>>>>>>> origin/main
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
=======
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
>>>>>>> origin/main
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (_error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div>
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6"></form>
        <div className="grid md:grid-cols-2 gap-6"></div>
          <div></div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
              Full Name *</label>
=======
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
>>>>>>> origin/main
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
<<<<<<< HEAD
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
  s:border-transparent"
=======
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/main
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
<<<<<<< HEAD
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="your@email.com"
            /></input>
          </div>
        </div>
        <div className="grid m,
  d:grid-cols-2 gap-6"></div>
          <div></div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"></label>
              Phone Number</label>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
  s:border-transparent"
              placeholder="+1 (555) 123-4567"
            /></input>
          </div>
          <div></div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2"></label>
              Company</label>
=======
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
>>>>>>> origin/main
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
<<<<<<< HEAD
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
  s:border-transparent"
=======
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> origin/main
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
<<<<<<< HEAD
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
  s:border-transparent"
          ></select>
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800"></option>
                {service}</option>
              </option>
            ))}
=======
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="it-services">IT Services</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
>>>>>>> origin/main
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
<<<<<<< HEAD
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focu,
  s:border-transparent resize-none"
            placeholder="Tell us about your project or how we can help..."
          /></textarea>
=======
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project or question..."
          />
>>>>>>> origin/main
        </div>

        {status.message && (
          <div className={`p-4 rounded-lg flex items-center space-x-2 ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
<<<<<<< HEAD
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disable,
  d:cursor-not-allowed"
        ></button>
          {isSubmitting ? (</button>
            <>
    
  </>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
    
  </>
              <Send className="w-5 h-5 mr-2" /></Send>
              Send Message</Send>
=======
          disabled={status.type === 'loading'}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {status.type === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
>>>>>>> origin/main
            </>
          )}
        </button>
      </form>
<<<<<<< HEAD
=======

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">contact@ziontechgroup.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Office</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

export default ContactForm;
