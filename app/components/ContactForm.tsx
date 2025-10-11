import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
}
;
const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '')
  });
    type: 'idle',
    message: '')
  });
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
;
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ typ,
    e: 'loading', message: 'Sending message...' });
    try {
      /
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: 'success',
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.')
      });
  }
const services = [
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'DevOps',
    'IT Consulting',
    'Other'
  ];

              <input
                type="text"
                id="name"
                name="name"
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              <
              <input
                type="email"
                id="email"
                name="email"
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">

              <
              <input
                type="text"
                id="company"
                name="company"
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              <
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
              
            <
          <

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            <
            <select
              id="service"
              name="service"

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-lg flex items-center ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : status.type === 'error'
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : status.type === 'error' ? (
                <AlertCircle className="w-5 h-5 mr-2" />
              ) : null}
              <span>{status.message}</span>
            </div>);
          <button
            type="submit"
  );
}
export default ContactForm;