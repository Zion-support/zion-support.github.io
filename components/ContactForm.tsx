
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
interface FormData {;
  name: string, email: string,;
  company: string, phone: string,;
  service: string,;
  message: string,;
};
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value,;
    }));
  };

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {,;
      // Simulate form submission,;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '',;
      });

      setSubmitStatus('success');
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">;
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">;
        Get In Touch;
      </h2>;

      {submitStatus === 'success' && (;
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">;
          Thank you for your message! We&apos;ll get back to you soon.;
        </div>;
      )}

      {submitStatus === 'error' && (;
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">;
          Something went wrong. Please try again.;
        </div>;
      )}

      <form onSubmit={handleSubmit} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>;
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
              Name *;
            </label>;
            <input
              type="text"
              id="name"
              name="name"
              value={formData && formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />;
          </div>;

          <div>;
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
              Email *;
            </label>;
            <input
              type="email"
              id="email"
              name="email"
              value={formData && formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />;
          </div>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>;
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
              Company;
            </label>;
            <input
              type="text"
              id="company"
              name="company"
              value={formData && formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />;
          </div>;

          <div>;
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
              Phone;
            </label>;
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData && formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />;
          </div>;
        </div>;

        <div>;
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
            Service Interest;
          </label>;
          <select
            id="service"
            name="service"
            value={formData && formData.service}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
            <option value="">Select a service</option>;
            <option value="web-development">Web Development</option>;
            <option value="mobile-development">Mobile Development</option>;
            <option value="ai-services">AI Services</option>;
            <option value="cloud-solutions">Cloud Solutions</option>;
            <option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;

        <div>;
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
            Message *;
          </label>;
          <textarea
            id="message"
            name="message"
            value={formData && formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project..."
          />;
        </div>;

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (;
            <div className="flex items-center justify-center">;
              <LoadingSpinner size="sm" />;
              <span className="ml-2">Sending...</span>;
            </div>;
          ) : (;
            'Send Message';
          )}
        </button>;
      </form>;
    </div>;
  );
};

export default ContactForm;