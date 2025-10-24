'use client';

import { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react';

interface FormData {name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" / />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3 />
        <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p />
      </div />
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2 />
      <form onSubmit={handleSubmit} className="space-y-6" />
        <div className="$1"></div>
          <div />
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" />
              Full Name *
            </label />
            <input type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your full name"
            / />
          </div />
          <div />
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" />
              Email Address *
            </label />
            <input type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="your@email.com"
            / />
          </div />
        </div />
        <div className="grid md:grid-cols-2 gap-6">
          <div />
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" />Phone Number</label />
            <input type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            / />
          </div />
          <div />
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" />Company</label />
            <input type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your company name"
            / />
          </div />
        </div />
        <div />
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" />Service Interest</label />
          <select id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          ></select;
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="">Select a service</option />{services.map((service, index) =</ (
              <option key={index} value={service} className="bg-gray-800" />

export default ContactForm;