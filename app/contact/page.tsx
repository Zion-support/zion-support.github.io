<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your AI and IT solution needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className="text-gray-300">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">📞</span>
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-gray-300">123 Tech Street, Innovation City, IC 12345</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="it-services">IT Services</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
>>>>>>> cursor/delete-records-a75e
