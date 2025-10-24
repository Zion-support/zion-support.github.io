'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
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
    }))};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })} catch (_error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })}
  };

  return (
    <div className="max-w-2xlmx-autobg-whiterounded-lg shadow-lg p-8">
      <div className="text-centermb-8">
        <h2 className="text-3xlfont-boldtext-gray-900mb-4">Get In Touch</h2>
        <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="gridgrid-cols-1md:grid-cols-2gap-6">
          <div>
            <label htmlFor="name" className="blocktext-smfont-mediumtext-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="blocktext-smfont-mediumtext-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="gridgrid-cols-1md:grid-cols-2gap-6">
          <div>
            <label htmlFor="company" className="blocktext-smfont-mediumtext-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="blocktext-smfont-mediumtext-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="blocktext-smfont-mediumtext-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="it-services">IT Services</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="blocktext-smfont-mediumtext-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-fullpx-4py-3border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project or question..."
          />
        </div>

        {status.message && (
          <div className={`p-4 rounded-lg flex items-center space-x-2 ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5h-5" />}
            {status.type === 'error' && <AlertCircle className="w-5h-5" />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-fullbg-blue-600text-whitepy-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {status.type === 'loading' ? (
            <>
              <div className="animate-spinrounded-fullh-5w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8pt-8border-tborder-gray-200">
        <div className="gridgrid-cols-1md:grid-cols-3gap-6 text-center">
          <div className="flexflex-colitems-center">
            <Mail className="w-8h-8text-blue-600mb-2" />
            <h3 className="font-semiboldtext-gray-900">Email</h3>
            <p className="text-gray-600">contact@ziontechgroup.com</p>
          </div>
          <div className="flexflex-colitems-center">
            <Phone className="w-8h-8text-blue-600mb-2" />
            <h3 className="font-semiboldtext-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flexflex-colitems-center">
            <MapPin className="w-8h-8text-blue-600mb-2" />
            <h3 className="font-semiboldtext-gray-900">Office</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  )};

export default ContactForm;