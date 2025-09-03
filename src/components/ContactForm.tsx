import React, { useState } from "react";
import { User, Building, MessageSquare } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          Ready to transform your business? Let's discuss your project.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Sorry, there was an error sending your message. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
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
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="inline w-4 h-4 mr-2" />
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="cloud-services">Cloud Services</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="devops">DevOps</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="consulting">Consulting</option>
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
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="over-500k">Over $500,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          <strong>Direct Contact:</strong><br />
          Mobile: +1 302 464 0950<br />
          Email: kleber@ziontechgroup.com<br />
          Address: 364 E Main St STE 1008, Middletown DE 19709
        </p>
      </div>
    </div>
  );
};

export default ContactForm;