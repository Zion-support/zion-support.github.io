import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';''interface FormData {name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
      
      setIsSubmitted(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          Ready to transform your business with cutting-edge technology? Let's discuss your project.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Phone</h3>
          <p className="text-gray-600">+1 302 464 0950</p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Email</h3>
          <p className="text-gray-600">kleber@ziontechgroup.com</p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Address</h3>
          <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
        </div>
      </div>

      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Thank you! Your message has been sent successfully.
        </div>
      )}

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
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company name"
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
              <option value="ai-development">AI Development</option>
              <option value="cloud-services">Cloud Services</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="web-development">Web Development</option>
              <option value="consulting">IT Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;