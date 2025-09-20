'use client';

import React, { useState } from 'react';

interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
  budget: string,
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) : any => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) : any => {
    e.preventDefault(),
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 2000);
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Your Interest!
        </h3>
        <p className="text-gray-600 mb-6">
          We've received your message and our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Get Your Free Consultation
      </h2>
      <p className="text-gray-600 mb-8">
        Tell us about your project and we'll provide a customized solution proposal within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
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
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your Company"
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
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interested In *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              <option value="ai-automation">AI Automation</option>
              <option value="micro-saas">Micro SaaS Development</option>
              <option value="enterprise-ai">Enterprise AI Platform</option>
              <option value="ai-assessment">AI Readiness Assessment</option>
              <option value="consultation">Free Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select budget range</option>
              <option value="5k-25k">$5,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k+">$250,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project goals, current challenges, and how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            'Send Message & Get Free Consultation'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;