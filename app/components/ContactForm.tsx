<<<<<<< HEAD
import React, { useState } from 'react'.
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react'.

interface FormData {name: string,}
  message: string,}interface FormStatus {type: 'idle' | 'loading' | 'success' | 'error';,}'
  message: string,}const [formData, setFormData] = useState<FormData>({name: '',
  type: 'idle' | 'loading' | 'success' | 'error';'
  message: string,
=======
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const {name, value}}= e.target.
    setFormData(prev => ({)
      [name]: value;})).
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault().
    setIsSubmitting(true).

    try {
      // Simulate API call.
      await new Promise((resolve) => setTimeout(resolve, 1000)).
      setIsSubmitted(true).
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      }).
    } catch (error) {
      } finally {
      setIsSubmitting(false).
    }
  };

  if (isSubmitted) {
    return (
  }

  const handleSubmit = async (e: React.FormEvent) => {,
      await new Promise(resolve => setTimeout(resolve, 2000)).

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.
      }).

        message: 'Sorry, there was an error sending your message. Please try again.'})
    'Other'
  ]

=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // For now, simulate a successful submission
      // In a real app, you would call your API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company.
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number.
=======
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@company.com"
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
=======
              Service Interest
            </label>
            <select
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="ai-solutions">AI Solutions</option>
              <option value="quantum-computing">Quantum Computing</option>
              <option value="autonomous-systems">Autonomous Systems</option>
              <option value="digital-transformation">Digital Transformation</option>
              <option value="cloud-services">Cloud Services</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
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
              onChange={handleChange}
<<<<<<< HEAD
              required.
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
=======
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status.type === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </span>
            )}
          </button>

          {status.message && (
            <div className={`p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border border-red-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
<<<<<<< HEAD
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />"
              ) : status.type === 'error' ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
          <button.
            type="submit"
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...
            ) : (
              <React.Fragment>
                <Send className="h-5 w-5" />
=======
              <div className="flex items-center">
                {status.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
                {status.type === 'error' && <AlertCircle className="w-5 h-5 mr-2" />}
                {status.message}
              </div>
            </div>
          )}
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">contact@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-medium text-gray-900">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
